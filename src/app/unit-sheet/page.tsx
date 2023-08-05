import UnitSheetSprite from '../../components/unit-sheet-sprite';
import styles from './page.module.scss'
import { DoFCharacters } from './../../config/characters.config'
import { IDoFUnit } from '@/src/models/interfaces';
export default function UnitSheet() {

    const sections = Object.keys(DoFCharacters);

    return (<div className={styles.base}>
        <div>
            {
                // @ts-ignore
                sections.filter(section => DoFCharacters[section].length).map((section) => (
                    <section key={section}>
                        <h2>{section}</h2>
                        <div className={styles.container}>
                            {
                                // @ts-ignore
                                DoFCharacters[section]
                                    .filter((character: IDoFUnit) => !character.hidden)
                                    .map((character: IDoFUnit) => <UnitSheetSprite key={character.name} type={section} characterDef={character} />)
                            }
                        </div>
                    </section>
                ))}
        </div>
    </div>);
}