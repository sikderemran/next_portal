import ClientComponent from './ClientComponent';
import styles from '../assets/style.module.css';
import '../assets/style.css'
import Logout from "../app/logout"
import { getServerSession } from 'next-auth';
import Link from "next/link";
const Header = async ({ children }) => {
    const session = await getServerSession();
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <img className={styles.site_logo} src='../next.svg' />
                    <span className={styles.site_title}>IPORTAL</span>
                </div>
                <div className={styles.header_search}>
                    {!!session && <ClientComponent />}
                    {/* <input type="search" placeholder="Search..." /> */}
                </div>
                <div className={styles.header_menu}>
                    <span className={styles.logout}>
                        {!session && 
                            <Link href='register'>SignUp</Link>
                        }
                        {!!session && <Logout />}
                    </span>
                </div>
            </div>
        </>
    );
}



export default Header