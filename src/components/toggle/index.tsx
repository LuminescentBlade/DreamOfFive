import styles from './index.module.scss';

export default function Toggle({ active, onStateChange, ariaLabel }:
    { active: boolean, onStateChange: (isActive: boolean) => void, ariaLabel?: string }) {
    return <button className={`${styles.toggle} ${active ? styles.toggleActive : ''}`} 
        onClick={()=>onStateChange(!active)}
        aria-label={`toggle ${active ? 'off' : 'on'} ${ariaLabel}`}></button>    
}
