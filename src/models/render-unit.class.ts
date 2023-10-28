import { IRenderItemConfig, IUnit } from "./spritesheet.interfaces";

export class RenderUnit {

    constructor(private unit: IUnit, private pathFcn: (name: string) => string) {
        this.urls = {
            default: pathFcn(unit.name),
            alts: unit.alt ? Object.keys(unit.alt).reduce((c, k) => ({ ...c, [k]: pathFcn(`${unit.name}_${k}`) }), {}) : {}
        };
    }

    urls: {
        default: string,
        alts: { [key: string]: string }
    };

    get data(): IRenderItemConfig {
        return {
            renderOrder: Number.MAX_SAFE_INTEGER,
            type: 'unit',
            default: { ...this.unit, path: this.urls.default },
            alts: this.unit.alt ? Object.entries(this.unit.alt).map(([key, value]) => ({ ...value, name: key, path: this.urls.alts[key] })) : undefined
        };
    }
}