import { DoFRoute } from "../models/enums";

const finalChapterNum = 25;

export const DoFChapters: { [key: number]: { value: number, title?: string, route?: DoFRoute } } = Array
    .from(Array(finalChapterNum + 1).keys())
    .reduce((chapters, value) => ({ ...chapters, [value]: { value } }), {});

function setDoFChapterDef(value: number, title: string, route?: DoFRoute){
    DoFChapters[value] = {value, title, route};
};

setDoFChapterDef(0, 'Prologue');
setDoFChapterDef(6.5, '6Ax', DoFRoute.Musain);
setDoFChapterDef(8.5, '8Ax', DoFRoute.Musain);
setDoFChapterDef(10.5, '10Bx', DoFRoute.Onduris);
setDoFChapterDef(14.5, 'Crossroads');
setDoFChapterDef(17.5, '17x');
setDoFChapterDef(99, 'All');
