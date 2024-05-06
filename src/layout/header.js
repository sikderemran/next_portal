import Image from "next/image";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import ClientComponent from './ClientComponent';
import styles from '../assets/style.module.css';
import '../assets/style.css'
const Header = ({ children }) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <img className={styles.site_logo} src='./next.svg' />
                    <span className={styles.site_title}>IPORTAL</span>
                </div>
                <div className={styles.header_search}>
                    <ClientComponent />
                    <input type="search" placeholder="Search..." />
                </div>
                <div className={styles.header_menu}>
                    <a href="#">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </a>
                </div>
            </div>

        </>
    );
}



export default Header