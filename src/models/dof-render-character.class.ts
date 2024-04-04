
import { IDoFCharacter, IRenderDoFConfig } from "./dream-of-five.interfaces";
import { DoFUnitState } from "./enums";
import { RenderCharacter } from "../lib/classes/render-character.class";
import { IRenderCharacterConfig } from "../lib/models/spritesheet.interfaces";

export class DoFRenderCharacter extends RenderCharacter {
    constructor(private dofCharacter: IDoFCharacter, private rules: any) {
        const getPath = (name: string) => {
            return `/mugs/characters/${name}.png`;
        }
        super(dofCharacter, getPath, rules, ['blurb', 'level', 'age', 'epithet', 'mountName']);
    }

    public get data() {
        const renderData = this.chapterFilterCharacterData(this.renderData);
        return renderData;
    }

    private chapterFilterCharacterData(renderData: IRenderCharacterConfig): IRenderDoFConfig {
        if (!renderData) { return renderData };
        const newRenderData = { ...renderData, displayProfile: false };
        if (newRenderData.type === DoFUnitState.Player || newRenderData.unitData.bossStats || newRenderData.unitData.npcStats || newRenderData.unitData.height) {
            newRenderData.displayProfile = true;
        }
        return newRenderData;
    }
} 