
import { IDoFBossCofig, IDoFCharacter, IRenderDoFConfig } from "./dream-of-five.interfaces";
import { DoFUnitState } from "./enums";
import { RenderCharacter } from "./render-character.class";
import { IRenderCharacterConfig } from "./spritesheet.interfaces";

export class DoFRenderCharacter extends RenderCharacter {
    constructor(private dofCharacter: IDoFCharacter, private rules: any) {
        const getPath = (name: string) => {
            return `/mugs/characters/${name}.png`;
        }
        super(dofCharacter, getPath, rules);
    }

    public get data() {
        const renderData = this.chapterFilterCharacterData(this.renderData);
        return renderData;
    }

    private chapterFilterCharacterData(renderData: IRenderCharacterConfig): IRenderDoFConfig {
        const newRenderData = { ...renderData, displayProfile: false };
        const unitData = renderData.unitData;
        if (unitData.bossStats) {
            const newBossStats = unitData.bossStats
                .filter(
                    (item: IDoFBossCofig) => item.chapter <= renderData.chapter &&
                        (!item.route || !renderData.route || item.route === renderData.route)
                )
                .map(
                    (item: IDoFBossCofig) => ({
                        ...item,
                        level: item.level ?? unitData.level,
                        stats: item.stats ?? unitData.bases,
                        ranks: item.ranks ?? unitData.weapons,
                        class: item.class ?? unitData.class
                    })
                );
            newRenderData.unitData.bossStats = newBossStats?.length ? newBossStats : null;

        }
        if(newRenderData.type === DoFUnitState.Player || newRenderData.unitData.bossStats || newRenderData.unitData.height ){
            newRenderData.displayProfile = true;
        }
        return newRenderData;
    }
} 