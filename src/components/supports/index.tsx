import { IDoFCharacter } from '@dof/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';
import { getSupportKey, SupportData } from '@dof/src/config/support-speed.config';

import { IRenderCharacterConfig } from '@dof/src/lib';
import { DoFPlayableMap } from '@dof/src/config/playables';
import SpoilerText from '../spoiler-text';
import { ReactNode } from 'react';
import { SupportCalculator } from '@dof/src/lib/components/support-calculator';
import { SupportBonuses } from '@dof/src/config/support-bonuses.config';

export default function Supports({ characterDef, characterMap }: { characterDef: IDoFCharacter, characterMap: { [key: string]: IRenderCharacterConfig } }) {
    const values = ['--','C','B','A'];
    const supportsArray = characterDef.supports!
        .sort((keyA, keyB) => {
            const orderA = characterMap[keyA];
            const orderB = characterMap[keyB];
            if (orderA === undefined) return 1;
            if (orderB === undefined) return -1;
            return orderA.renderOrder - orderB.renderOrder;
        });

    function getSupportList() {
        return <ul className={styles.supports}>
            {
                supportsArray.map(name => {
                    const supportedCharacter = DoFPlayableMap[name];
                    const supportKey = getSupportKey(characterDef.name, name);
                    const supportData = SupportData[supportKey];
                    const content: ReactNode = <>
                        <span className='capitalize'>{supportedCharacter.displayName ?? name} | <strong>{supportData.base}</strong> + {supportData.speed}</span>
                    </>
                    return <li key={name}>
                        <span className={`icon-affinity-${supportedCharacter.affinity} ${styles.affinity} ${supportData.paired ? styles.paired : ''}`}></span>
                        {
                            characterMap[name] ? content : <SpoilerText>{content}</SpoilerText>
                        }
                    </li>
                })
            }
        </ul>;
    }

    function renderSupportItem(name: string) {
        console.log(name);
        const supportedCharacter = DoFPlayableMap[name];
        const supportKey = getSupportKey(characterDef.name, name);
        const supportData = SupportData[supportKey];
        const content: ReactNode = <>
            <span className='capitalize'>{supportedCharacter.displayName ?? name} | <strong>{supportData.base}</strong> + {supportData.speed}</span>
        </>
        return <span className={styles.supportItem}>
            <span className={`icon-affinity-${supportedCharacter.affinity} ${styles.affinity} ${supportData.paired ? styles.paired : ''}`}></span>
            {
                characterMap[name] ? content : <SpoilerText>{content}</SpoilerText>
            }
        </span>
    }
    
    function renderValue(value: number) {
        return values[value];
    }

    function getSupportCalculator() {
        return <div>
            <SupportCalculator
                bonuses={SupportBonuses}
                sourceAffinity={characterDef.affinity!}
                targetAffinities={supportsArray.reduce((acc: any, name) => {
                    const supportedCharacter = DoFPlayableMap[name];
                    acc[name] = { name: supportedCharacter.displayName ?? name, affinity: supportedCharacter.affinity };
                    return acc;
                }, {})}
                initState={supportsArray.reduce((acc: any, name) => {
                    const supportKey = getSupportKey(characterDef.name, name);
                    const supportData = SupportData[supportKey];
                    acc[name] = supportData.base > 240 ? 3 :
                        supportData.base > 160 ? 2 :
                            supportData.base > 80 ? 1 :
                                0;
                    return acc;
                }, {})} // @ts-ignore
                labelDisplay={renderSupportItem}
                valueDisplay={renderValue}
            />
        </div>
    }

    return <>
        {/* {getSupportList()} */}
        {getSupportCalculator()}
    </>

}