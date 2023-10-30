'use client';

import UnitSheetSprite from '../../components/unit-sheet-sprite';
import styles from './index.module.scss'
import { IDoFCharacterRenderer, IRenderItemConfig } from '@/src/models/interfaces';
import { DoFArtist, DoFUnitState } from '@/src/models/enums';
import { DoFArtistConfig } from '@/src/config/artists.config';

export default function UnitSheet({ data, chapter, expansionState, toggleCharacter, getOnClick }: {
    data: IDoFCharacterRenderer, chapter: number, expansionState: Map<string, boolean>, toggleCharacter: (name: string) => () => void, getOnClick?: (character: any, state: any) => (() => void) | undefined
}) {
    const sections = Object.keys(data) as DoFUnitState[];
    const artists = Object.values(DoFArtist);


    return (<div id='unit-sheet' className={styles.base}>
        {
            // @ts-ignore
            sections
                .filter((section: DoFUnitState) => data[section]?.length)
                .map((section: DoFUnitState) => (
                    <section key={section} className={`${styles.container} ${styles.spritesheet}`}>
                        <h2>{section}</h2>
                        {
                            data[section]?.map((character: IRenderItemConfig) => {
                                const onClickFcn = getOnClick? getOnClick(character, section): undefined;
                                if (!character.alts?.length) {
                                    return <UnitSheetSprite key={character.default.name} type={section} characterDef={character.default} onCharacterClick={onClickFcn} />
                                } else {
                                    const toggleFcn = toggleCharacter(character.name);
                                    const baseItem = <UnitSheetSprite key={character.default.name} type={section} characterDef={character.default} expanded={expansionState.get(character.name)} onExpand={toggleFcn} onCharacterClick={onClickFcn} />;
                                    if (expansionState.get(character.name)) {
                                        return <>
                                            {baseItem}
                                            {character.alts.map((alt) => {
                                                const name = `${character.name}_${alt.name}`;
                                                return <UnitSheetSprite key={`${character.name}_${alt.name}`} type={section} characterDef={alt} />
                                            })}
                                        </>
                                    } else {
                                        return baseItem;
                                    }
                                }
                            })
                        }
                    </section>
                ))}
        <section className={styles.container}>
            <h2>Artist Credits</h2>
            <ul className={styles.credits} id={'credits'}>
                {
                    artists.map(artist => (
                        <li key={artist}>
                            <div className={styles.artist} style={{ backgroundColor: `var(--dof-artist-${artist})` }}>
                            </div>
                            {DoFArtistConfig[artist].name}
                        </li>
                    ))
                }
            </ul>
        </section>
    </div>);
}