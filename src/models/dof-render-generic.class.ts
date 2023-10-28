import { IDoFUnit } from "./dream-of-five.interfaces";
import { RenderUnit } from "./render-unit.class";

export class DoFGeneric extends RenderUnit {
    constructor(private generic: IDoFUnit, private section: string) {
        const getPath = (name: string) => {
            return `/mugs/${section}/${name}.png`;
        }
        super(generic, getPath);
    }
}
