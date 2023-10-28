
import { IDoFCharacter } from "./dream-of-five.interfaces";
import { RenderCharacter } from "./render-character.class";

export class DoFRenderCharacter extends RenderCharacter {
    constructor(private dofCharacter: IDoFCharacter, private rules: any) {
        const getPath = (name: string) => {
            return `/mugs/characters/${name}.png`;
        }
        super(dofCharacter, getPath, rules);
    }
} 