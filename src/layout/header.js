import ClientComponent from './ClientComponent';
import styles from '../assets/style.module.css';
import '../assets/style.css'
import Logout from "../app/logout"
import { getServerSession } from 'next-auth';
import Link from "next/link";

const Header = async () => {

    const session = await getServerSession();

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_logo}>
                    <Link href='login'>
                        <img className={styles.site_logo} src='../next.svg' />
                        <span className={styles.site_title}>IPORTAL</span>
                    </Link>
                </div>
                <div className={styles.header_search}>
                    {!!session && <ClientComponent />}
                </div>
                <div className={styles.header_menu}>
                    <span className={styles.logout}>
                        {!session && 
                            <>
                                <Link href='signup'>SignUp</Link>
                                {/* <Link href='signup'>Forgot Password</Link> */}
                            </>
                        }
                        {!!session && <Logout />}
                    </span>
                </div>
            </div>
        </>
    );
}



export default Header