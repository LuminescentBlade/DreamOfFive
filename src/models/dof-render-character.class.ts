
import { IDoFNonPlayableConfig, IDoFCharacter, IRenderDoFConfig } from "./dream-of-five.interfaces";
import { DoFUnitState } from "./enums";
import { RenderCharacter } from "./render-character.class";
import { IRenderCharacterConfig } from "./spritesheet.interfaces";

export class DoFRenderCharacter extends RenderCharacter {
    constructor(private dofCharacter: IDoFCharacter, private rules: any) {
        const getPath = (name: string) => {
            return `/mugs/characters/${name}.png`;
        }
        super(dofCharacter, getPath, rules, ['blurb', 'level']);
    }

    public get data() {
        const renderData = this.chapterFilterCharacterData(this.renderData);
        return renderData;
    }

    mergeNPCData(data: IDoFNonPlayableConfig[], unitData: IDoFCharacter, chapter: number, route?: string) {
        return data
            .filter(
                (item: IDoFNonPlayableConfig) => item.chapter <= chapter &&
                    (!item.route || !route || item.route === route)
            )
            .map(
                (item: IDoFNonPlayableConfig) => ({
                    ...item,
                    level: item.level ?? unitData.level,
                    stats: item.stats ?? unitData.bases,
                    ranks: item.ranks ?? unitData.weapons,
                    class: item.class ?? unitData.class
                })
            );
        
    }

    private chapterFilterCharacterData(renderData: IRenderCharacterConfig): IRenderDoFConfig {
        if (!renderData) { return renderData };
        const newRenderData = { ...renderData, displayProfile: false };
        const unitData = renderData.unitData;
        if (unitData?.bossStats) {
            const newBossStats = this.mergeNPCData(unitData.bossStats, unitData, renderData.chapter, renderData.route);
            newRenderData.unitData.bossStats = newBossStats?.length ? newBossStats : null;
        }
        if (unitData?.npcStats) {
            const newNPCStats = this.mergeNPCData(unitData.npcStats, unitData, renderData.chapter, renderData.route);
            newRenderData.unitData.npcStats = newNPCStats?.length ? newNPCStats : null;
        }
        if (newRenderData.type === DoFUnitState.Player || newRenderData.unitData.bossStats || newRenderData.unitData.npcStats || newRenderData.unitData.height) {
            newRenderData.displayProfile = true;
        }
        return newRenderData;
    }
} 