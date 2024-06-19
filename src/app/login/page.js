import Header from '../../layout/header'
import styles from "../../assets/style.module.css";
import ClientComponent from "./ClientComponent";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from "next/link";
import Head from 'next/head';

export const metadata = {
    title: "Login - Brac EPL Investments Limited",
    description: "Brac EPL Investments Limited",
};
const Login = async () => {
    const session = await getServerSession();
    if (session) {
        redirect('/home');
    }

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <div className={`${styles.card} ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <div className={`${styles.d_flex} ${styles.flex_direction_col_sm}`} >
                    <div className={`${styles.d_flex} ${styles.flex_direction_col}`}>
                        <Link className={styles.input_btn_ribbon} href='aboutproduct'>About Product</Link>
                        <Link className={styles.input_btn_ribbon} href='register'>Open Account</Link>
                    </div>
                    <div className={`${styles.d_flex_1}`}>
                        <h1 className={`${styles.gradient_text_blue}`}>Welcome to iPortal</h1>
                    </div>
                </div>
                <div className={`${styles.d_flex} ${styles.my_20} ${styles.flex_direction_col_md} `}>
                    <div className={`${styles.d_flex_basis_50} ${styles.text_center}`}>
                        <img style={{ width: '300px' }} src='./registration_1.svg' />
                    </div>
                    <div className={`${styles.d_flex_basis_50} ${styles.text_center} ${styles.overflow_hidden}`}>
                        <ClientComponent />
                    </div>
                </div>
                <div className={`${styles.card_info} ${styles.flex_space_between} ${styles.flex_direction_col_sm}`}>
                    <div>
                        <p className={`${styles.info_title}`}>Contact Information</p>
                        <p>Dial: 16285 or 09606237501</p>
                        <p>Email: info@bracepl.com</p>
                    </div>
                    <div>
                        <p className={`${styles.info_title}`}>Notice Board:</p>
                        <p>Trading Time: 10.00 AM to 02.30 PM</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;