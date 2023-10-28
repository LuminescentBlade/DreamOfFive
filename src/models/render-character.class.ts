import { RenderUnit } from "./render-unit.class";
import { IUnit } from "./spritesheet.interfaces";

// TODO: have a DoFCharacter class that extends this

export class RenderCharacter extends RenderUnit {
    constructor(
        private character: IUnit,
        private getPath: (name: string) => string,
        private renderRules: { bypassSpoiler?: boolean, useEarliest?: boolean } = {}
    ) {
        super(character, getPath);
    }

    private renderData?: any;
    set currentChapter(data: { chapter: number, route?: string } | undefined) {

        // this.chapterData = data;
        const placement = data ? this.getCharacterPlacement(data) : undefined;
        const parsedCharacter = placement ? this.parseCharacter(placement) : undefined;
        if (parsedCharacter && data && placement) {
            this.renderData = this.getRenderItems(parsedCharacter, data.chapter, placement)
        }
    }

    get data() {
        return this.renderData;
    }

    private getCharacterPlacement(chapterData: { chapter: number, route?: string }) {
        const { bypassSpoiler, useEarliest } = this.renderRules;
        const { chapter, route } = chapterData;
        if (this.character.isSpoiler && !bypassSpoiler) {
            return;
        }
        let placement: { value: string, chapter: number } | undefined;
        if (chapterData.route == null && this.character.routeConfig && Object.keys(this.character.routeConfig).length > 1) {
            placement = this.getAllPlacement(chapter, this.character, useEarliest, bypassSpoiler);
        } else {
            placement = this.getSinglePlacement(route, chapter, this.character, useEarliest, bypassSpoiler);
        }
        return placement;
    }

    private getSinglePlacement(route: string | undefined | null, chapter: number, character: IUnit, useEarliest = false, showSecretPlayable = false) {
        if (!character.routeConfig) {
            return;
        }
        let routeConfig;
        if (route) {
            routeConfig = character.routeConfig[route];
        } else if (character.routeConfig.allRoute) {
            routeConfig = character.routeConfig.allRoute;

        } else {
            const config = Object.values(character.routeConfig);
            if (config.length) {
                routeConfig = config[0];
            }
        }
        if (!routeConfig) {
            return;
        }
        const validStates = [];
        let checkByLatest = (config: number | number[], type: string) => {
            if (typeof config === 'number') {
                if (config <= chapter) {
                    validStates.push({ value: type, chapter: config });
                }
            } else {
                let index = -1;
                while (config[index + 1] <= chapter) {
                    index++;
                }
                if (index >= 0) {
                    validStates.push({ value: type, chapter: config[index] });
                }
            }
        }

        if (routeConfig.player != null && routeConfig.player <= chapter && (!character.secret || showSecretPlayable)) {
            validStates.push({ value: 'player', chapter: routeConfig.player });
        }
        if (routeConfig.enemy != null) {
            checkByLatest(routeConfig.enemy, 'enemy');
        }
        if (routeConfig.npc != null) {
            checkByLatest(routeConfig.npc, 'npc');
        }
        if (validStates.length) {
            validStates.sort((a, b) => {
                const chapterDiff = b.chapter - a.chapter;
                if (chapterDiff) {
                    return (useEarliest ? -1 : 1) * chapterDiff;
                } else {
                    return b.value === 'player' ? 1 :
                        b.value === 'enemy' && a.value === 'npc' ? 1 : -1;
                }
            });
            return validStates[0];
        } else {
            return;
        }
    }

    private getAllPlacement(chapter: number, character: IUnit, useEarliest = false, showSecretPlayable = false) {
        // refactor to be more genericized to accept n routes
        const placements = Object.keys(character.routeConfig!)
            // @ts-ignore
            .map(route => this.getSinglePlacement(route, chapter, character, useEarliest, showSecretPlayable))
            .filter(placement => placement != null);
        if (!placements.length) {
            return undefined;
        }
        placements.sort((a, b) => {
            if (b!.value === a!.value || useEarliest) {
                return a!.chapter - b!.chapter; // take earlier chapter if both same value for multi placements
            } else if (b!.value === 'player') {
                return 1;
            } else if (b!.value === 'enemy') {
                return a!.value === 'npc' ? -1 : 1;
            } else {
                return -1;
            }
        })
        return placements[0];
    }

    private parseCharacter(placement: { value: string, chapter: number }) {
        const { bypassSpoiler } = this.renderRules;
        if (placement) {
            const characterItem: IUnit = { ...this.character };
            if (this.character.alt) {
                let characterAlt = { ...this.character.alt };
                if (!bypassSpoiler) {
                    characterAlt = Object.keys(this.character.alt).reduce((alts, altName) => (characterAlt[altName].isSpoiler ? alts : { ...alts, [altName]: { ...characterAlt[altName] } }), {})
                }
                characterItem.alt = Object.keys(characterAlt)?.length ? characterAlt : undefined;
            }
            return characterItem;
        }
    }

    private getRenderItems(unit: IUnit, chapter: number, placement: { value: string, chapter: number }) {
        let defaultDisplay = { name: unit.name, displayName: unit.displayName, path: this.urls.default, artists: unit.artists };
        let alts;
        let defaultSwap;
        // check conditionals
        // consolidate unit type vs chapter based conditionals and then apply them all
        // chapter based override unit type based if chapter > placement.chapter, if equal or less then unit type
        let newDisplayName, swapPortrait: string, ogPortraitName;
        if (unit.conditional) {
            let chapterConditionals = unit.conditional.chapter && unit.conditional.chapter.chapter! <= chapter ? unit.conditional.chapter : null;
            // @ts-ignore
            let typeConditionals = unit.conditional[placement.value];
            if (chapterConditionals && typeConditionals) {
                let primary, secondary;
                if (chapterConditionals.chapter! > placement.chapter) {
                    primary = chapterConditionals;
                    secondary = typeConditionals;
                } else {
                    primary = typeConditionals;
                    secondary = chapterConditionals;
                }
                newDisplayName = primary.displayName ?? secondary.displayName;
                swapPortrait = primary.swapPortrait ?? secondary.swapPortrait;
                ogPortraitName = primary.ogPortraitName ?? secondary.ogPortraitName;
            } else if (chapterConditionals || typeConditionals) {
                let conditionals = chapterConditionals ?? typeConditionals;
                newDisplayName = conditionals.displayName;
                swapPortrait = conditionals.swapPortrait;
                ogPortraitName = conditionals.ogPortraitName;
            }
        }
        // @ts-ignore
        if (swapPortrait && unit.alt && unit.alt[swapPortrait]) { // ogPortraitName is always configured for swapPortrait otherwise it doesn't do anything
            const swapItem = unit.alt[swapPortrait];
            defaultSwap = defaultDisplay;
            defaultDisplay = { name: swapPortrait, path: this.urls.alts[swapPortrait], artists: swapItem.artists, displayName: swapItem.displayName }
            defaultSwap.displayName = ogPortraitName ?? defaultSwap.displayName;
        }
        if (newDisplayName) {
            defaultDisplay.displayName = newDisplayName;
        }
        if (unit.alt) {
            alts = Object.entries(unit.alt)
                .filter(([key, value]) => key != swapPortrait && (!value.chapter || value.chapter <= chapter))
                .map(([key, value]) => ({ ...value, name: key, path: this.urls.alts[key] }));
        }
        if (defaultSwap) {
            alts = alts ? [defaultSwap, ...alts] : [defaultSwap];
        }
        return {
            renderOrder: placement.chapter,
            type: placement.value,
            unitData: { ...unit, path: defaultDisplay.path },
            defaultDisplay,
            alts
        };
    }
};

