import { DoFNationality } from "@/src/models/enums";
import { IDoFCharacterRenderer, IDoFRenderUnit } from "@/src/models/interfaces";

export function download(result: string) {
    const tempLink = document.createElement('a');
    tempLink.download = 'spritesheet';
    tempLink.href = result;
    tempLink.click();
    tempLink.remove();
}


function sortCharactersByCountryForRender(data: IDoFCharacterRenderer) {
    const groupCharacters = (characters: any[], type: string, cache: { [key: string]: { type: string, character: IDoFRenderUnit }[] } = {}) => {
        return characters.reduce((results, character: IDoFRenderUnit) => {
            if (character.nationality) {
                results[character.nationality] = results[character.nationality] || [];
                results[character.nationality].push({ type, character });
            }
            return results;
        }, cache);
    }
    let charactersByNationality = groupCharacters(data.player!, 'player');
    charactersByNationality = groupCharacters(data.enemy!, 'enemy', charactersByNationality);
    charactersByNationality = groupCharacters(data.npc, 'npc', charactersByNationality);

    return charactersByNationality;
}

function setRetinaRender(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, setScale = true) {
    if (window.devicePixelRatio > 1) {
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;

        canvas.width = canvasWidth * window.devicePixelRatio;
        canvas.height = canvasHeight * window.devicePixelRatio;
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";

        if (setScale) {
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
    }

    return window.devicePixelRatio;
}

function renderItem(item: { type: string, character: IDoFRenderUnit }, even: boolean) {
    const canvas = document.createElement('canvas');
    canvas.height = 140;
    canvas.width = 120;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    setRetinaRender(canvas, ctx);

    //TODO: refactor this elsewhere
    const colorDef: { [key: string]: { odd: string, even: string } } = {
        player: {
            odd: '#1e85b0',
            even: '#2398c9',
        },
        enemy: {
            odd: '#6e4640',
            even: '#9b594f',
        },
        npc: {
            odd: '#5f824f',
            even: '#7ba866',
        },
        generic: {
            odd: '#959266',
            even: '#c0bd8d',
        }
    };

    const spriteBG = {
        even: '#84b583',
        odd: '#739e72'
    };

    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = even ? colorDef[item.type].even : colorDef[item.type].odd;
    ctx.fillRect(0, 0, 120, 40);
    ctx.fillStyle = even ? spriteBG.even : spriteBG.odd;
    ctx.fillRect(0, 40, 120, 100);
    ctx.fillStyle = '#ffffff';
    ctx.font = "20px Knights Quest";
    ctx.fillText(item.character.displayName || (item.character.name), 5, 25);

    const image = document.getElementById(`${item.character.name}_${item.type}`) as HTMLImageElement;
    if (!image) { return canvas; }
    const { width, height } = image;

    ctx?.drawImage(image, (120 - width) / 2, 140 - height);

    return canvas;
}


export function renderCharactersByCountry(data: IDoFCharacterRenderer) {
    const masterCanvas = document.createElement('canvas');
    const dataByCountry = sortCharactersByCountryForRender(data);
    const sheetWidth = 1200;
    masterCanvas.width = sheetWidth;
    masterCanvas.height = 0;
    const canvases = Object.values(DoFNationality).map(nationality => {
        const subCanvas = document.createElement('canvas');
        subCanvas.width = sheetWidth;

        const items = dataByCountry[nationality];
        const rows = Math.ceil(items.length / 10);

        const sectionHeight = 40 + rows * 140;
        subCanvas.height = sectionHeight;
        const ctx = subCanvas.getContext('2d') as CanvasRenderingContext2D;
        const scale = setRetinaRender(subCanvas, ctx, false);

        ctx.fillStyle = '#500f8c';
        ctx.fillRect(0, 0, sheetWidth * scale, 40 * scale);
        ctx.fillStyle = '#ffffff';
        ctx.font = `${24 * scale}px Knights Quest`;
        ctx.fillText(nationality.toUpperCase(), 5 * scale, 25 * scale);
        items.forEach((item: any, index: number) => {
            let l = (index % 10) * 120 * scale;
            let t = (40 + (Math.ceil((index + 1) / 10) - 1) * 140) * scale;
            const result = renderItem(item, index % 2 === 0);
            ctx.drawImage(result, l, t);
        });
        masterCanvas.height += sectionHeight;
        return subCanvas;
    });

    const mctx = masterCanvas.getContext('2d') as CanvasRenderingContext2D;
    setRetinaRender(masterCanvas, mctx, false);

    let lastOffset = 0;
    canvases.forEach(canvas => {
        mctx.drawImage(canvas, 0, lastOffset);
        lastOffset += canvas.height;
    });
    return masterCanvas.toDataURL();

}