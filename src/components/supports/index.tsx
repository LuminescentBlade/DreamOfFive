import { IDoFCharacter } from '@dof/src/models/dream-of-five.interfaces';
import styles from './index.module.scss';
import { getSupportKey, SupportData } from '@dof/src/config/support-speed.config';

import { IRenderCharacterConfig } from '@dof/src/lib';
import { DoFPlayableMap } from '@dof/src/config/playables';
import SpoilerText from '../spoiler-text';
import { ReactNode } from 'react';

export default function Supports({ characterDef, characterMap }: { characterDef: IDoFCharacter, characterMap: { [key: string]: IRenderCharacterConfig } }) {
    const supportsArray = characterDef.supports!
        .sort((keyA, keyB) => {
            const orderA = characterMap[keyA];
            const orderB = characterMap[keyB];
            if (orderA === undefined) return 1;
            if (orderB === undefined) return -1;
            return orderA.renderOrder - orderB.renderOrder;
        });

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
    </ul>

}