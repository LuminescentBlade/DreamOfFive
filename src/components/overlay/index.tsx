import styles from './index.module.scss';
export default function OptionSelector({ onClick }: { onClick?: () => void }) {
    return <div className={styles.overlay} onClick={onClick}></div>
}