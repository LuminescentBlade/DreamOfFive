
import { IDoFCharacter } from "./dream-of-five.interfaces";
import { RenderCharacter } from "./render-character.class";

export class DoFRenderCharacter extends RenderCharacter {
    constructor(character: IDoFCharacter, renderRules: any) {
        const getPath = (name: string) => {
            return `/mugs/characters/${name}.png`;
        }
        super(character, getPath, renderRules);
    }
} 