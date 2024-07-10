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
                <div className={`${styles.header_logo} ${styles.flex_justify_center}`}>
                    <Link className={`${styles.d_flex} ${styles.align_item_center}`} href='login'>
                        <img className={styles.site_logo} src={process.env.LOGO} />
                        {/* <span className={styles.site_title}>I-SHEBA</span> */}
                    </Link>
                </div>
                <div className={styles.header_search}>
                    {!!session && <ClientComponent />}
                </div>
                <div className={styles.header_menu}>
                    <span className={`${styles.logout} ${styles.d_flex} ${styles.gap_10}`}>
                        {!session && 
                            <>
                                <Link href='forgotpassword'>Forgot Password</Link>
                                |
                                <Link  href='signup'>SignUp</Link>
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