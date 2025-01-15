import { ReactNode, useState } from "react";
import styles from './index.module.scss';
export function SupportCalculator({
    bonuses, sourceAffinity, targetAffinities, disableButton, initState, valueDisplay, labelDisplay, bonusCalculation
}: {
    bonuses: any,
    sourceAffinity: string,
    targetAffinities: { [key: string]: { name: string, affinity: string } },
    initState?: { [key: string]: number },
    disableButton?: (currentState: { [key: string]: number }, key: string, incomingValue?: number) => boolean,
    valueDisplay?: (value: number) => string | ReactNode,
    labelDisplay?: (name: string) => string | ReactNode,
    bonusCalculation?: (bonuses: any, sourceAffinity: string, targetAffinity: string, value: number) => { [key: string]: number }
}): JSX.Element {
    const [data, update] = useState({
        activeSupports: initState ?? {}
    });

    function calcDisableButton(key: string, incomingValue: number) {
        if (disableButton) {
            return disableButton(data.activeSupports, key, incomingValue);
        } else {
            if (incomingValue < 0) return true;
            if (incomingValue > 3) return true;
            let hasCapped = false;
            for (const [_, value] of Object.entries(data.activeSupports)) {
                if (value >= 3) {
                    hasCapped = true;
                    break;
                }
            }

            if (hasCapped && incomingValue >= 3) return true;

            return false;
        }
    }

    function decrement(key: string) {
        update({ activeSupports: { ...data.activeSupports, [key]: (data.activeSupports[key] ?? 0) - 1 } });
    }

    function increment(key: string) {
        update({ activeSupports: { ...data.activeSupports, [key]: (data.activeSupports[key] ?? 0) + 1 } });
    }

    function getBonuses(name: string) {
        if (bonusCalculation) {
            return bonusCalculation(bonuses, sourceAffinity, targetAffinities[name].affinity, data.activeSupports[name] ?? 0);
        } else {
            const sourceBonuses = bonuses[sourceAffinity];
            const targetBonuses = bonuses[targetAffinities[name].affinity];

            const bonusKeys: Set<string> = new Set(Object.keys(sourceBonuses).concat(Object.keys(targetBonuses)));
            const result: { [key: string]: number } = {};

            bonusKeys.forEach(key => {
                const sourceVal = sourceBonuses[key] ? sourceBonuses[key] / 2 : 0;
                const targetVal = targetBonuses[key] ? targetBonuses[key] / 2 : 0;
                result[key] = (sourceVal + targetVal) * (data.activeSupports[name] ?? 0);
            });
            return result;
        }
    }

    function renderBonusItem(bonusItem:{[key: string]: number}) {
        return Object.entries(bonusItem).map(([bonusKey, value]) => {
            return <span>
                <span className={styles.bonusKey}>{bonusKey}</span><span key={bonusKey} className={styles.bonus}>{value}</span>
                </span>
        })
    }

    function render() {
        const supportListItems: ReactNode[] = [];
        const totalBonuses: any = {};
        Object.entries(targetAffinities).forEach(([partnerId, partnerData]) => {
            const currentValue = data.activeSupports[partnerId] ?? 0;
            const partnerBonuses = getBonuses(partnerId);
            Object.entries(partnerBonuses).forEach(([bonusName, bonusValue]) => {
                totalBonuses[bonusName] = (totalBonuses[bonusName] ?? 0) + bonusValue;
            });
            const supportListItem = <li key={partnerId} >
                {labelDisplay ? labelDisplay(partnerId) : <div><span>{partnerData.name}</span><span>{partnerData.affinity}</span></div>}
                <div className={styles.controls}>
                    <button onClick={() => decrement(partnerId)} disabled={calcDisableButton(partnerId, currentValue - 1)}>-</button>{
                        valueDisplay ? valueDisplay(data.activeSupports[partnerId] ?? 0) : data.activeSupports[partnerId] ?? 0
                    }<button onClick={() => increment(partnerId)} disabled={calcDisableButton(partnerId, currentValue + 1)}>+</button>
                </div>
                <div className={styles.bonuses}>
                    {
                        renderBonusItem(partnerBonuses)
                    }
                </div>
            </li>;
            supportListItems.push(supportListItem);
        })
        const supportList = <ul className={styles.supports}>
            {supportListItems}
        </ul>

        return <>
            {supportList}
            <div className={styles.totalBonuses}>
                {renderBonusItem(totalBonuses)}
            </div>
        </>
    }

    return render();
}