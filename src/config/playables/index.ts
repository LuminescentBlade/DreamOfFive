import { DoFCharKey } from "@dof/src/models/enums";
import { Rena } from "./rena.config";
import { Garath } from "./garath.config";
import { Adalheid } from "./adalheid.config";
import { Alexis } from "./alexis.config";
import { Amaryl } from "./amaryl.config";
import { Amelia } from "./amelia.config";
import { Annelise } from "./annelise.config";
import { Arcus } from "./arcus.config";
import { Artemisia } from "./artemisia.config";
import { Asher } from "./asher.config";
import { Baldur } from "./baldur.config";
import { Bellona } from "./bellona.config";
import { Blixa } from "./blixa.config";
import { Brill } from "./brill.config";
import { ByorDal } from "./byor-dal.config";
import { Cathale } from "./cathale.config";
import { Chester } from "./chester.config";
import { Claudiya } from "./claudiya.config";
import { Conleth } from "./conleth.config";
import { Corbeau } from "./corbeau.config";
import { Cothiva } from "./cothiva.config";
import { Crowe } from "./crowe.config";
import { Dismas } from "./dismas.config";
import { Driscoll } from "./driscoll.config";
import { Eilene } from "./eilene.config";
import { Eudira } from "./eudira.config";
import { Florent } from "./florent.config";
import { Franseza } from "./franseza.config";
import { Gabriel } from "./gabriel.config";
import { Hereward } from "./hereward.config";
import { Ioan } from "./ioan.config";
import { Jauger } from "./jauger.config";
import { Jolyon } from "./jolyon.config";
import { Kahn } from "./kahn.config";
import { Kai } from "./kai.config";
import { Kolbane } from "./kolbane.config";
import { Leda } from "./leda.config";
import { Lizaveta } from "./lizaveta.config";
import { Lyndra } from "./lyndra.config";
import { Marie } from "./marie.config";
import { Marin } from "./marin.config";
import { Meliza } from "./meliza.config";
import { Morwen } from "./morwen.config";
import { Nari } from "./nari.config";
import { Nikita } from "./nikita.config";
import { Odette } from "./odette.config";
import { Rozelle } from "./rozelle.config";
import { Saskia } from "./saskia.config";
import { SeMori } from "./se-mori.config";
import { Seren } from "./seren.config";
import { Severin } from "./severin.config";
import { Sheila } from "./sheila.config";
import { Sileth } from "./sileth.config";
import { Stolypin } from "./stolypin.config";
import { Thyra } from "./thyra.config";
import { Tricia } from "./tricia.config";
import { ViShen } from "./vi-shen.config";
import { Rotariu } from "./rotariu.config";
import { Volund } from "./volund.config";
import { Wren } from "./wren.config";
import { Ironside } from "./rophon.config";
import { Cyrille } from "./cyrille.config";
import { IDoFCharacter } from "@dof/src/models/dream-of-five.interfaces";

export const DoFPlayable = [
    Rena,
    Garath,
    Kolbane,
    Asher,
    Cyrille,
    Eilene,
    Amelia,
    Tricia,
    Chester,
    Cathale,
    Crowe,
    Lizaveta,
    Driscoll,
    Cothiva,
    Gabriel,
    Ioan,
    Marie,
    Arcus,
    Alexis,
    Seren,
    Franseza,
    SeMori,
    Sileth,
    Conleth,
    Lyndra,
    Blixa,
    Kahn,
    Wren,
    Bellona,
    Jolyon,
    Florent,
    Marin,
    Leda,
    Nari,
    Baldur,
    Nikita,
    Annelise,
    Rozelle,
    ByorDal,
    Meliza,
    ViShen,
    Corbeau,
    Brill,
    Eudira,
    Severin,
    Stolypin,
    Jauger,
    Saskia,
    Hereward,
    Dismas,
    Artemisia,
    Odette,
    Thyra,
    Adalheid,
    Sheila,
    Rotariu,
    Morwen,
    Kai,
    Claudiya,
    Amaryl,
    Volund,
    Ironside
];

export const DoFPlayableMap: {[key: string]: IDoFCharacter} = DoFPlayable.reduce((m, u) => ({ ...m, [u.name]: u }), {});