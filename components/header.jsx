
import styles from '@/styles/Header.module.css';
export default function Header() {

    return (
        <>
        <div className={styles.headerDiv}>
            <div className={styles.logo}>Nooman Studio</div>
            <div className={styles.nav}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
        </div>
        </>
    )
        
    }