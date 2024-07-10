import Header from '../../layout/header'
import styles from "../../assets/style.module.css";
import ClientComponent from "./ClientComponent";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from "next/link";

export const metadata = {
    title: "Login - "+process.env.APP_NAME,
    description: process.env.APP_NAME,
};
const Login = async () => {
    const session = await getServerSession();
    if (session) {
        redirect('/home');
    }

    return (
        <>
            <div className={`${styles.card}  ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <div className={`${styles.d_flex} ${styles.flex_direction_col_sm}`} >
                    <div className={`${styles.d_flex} ${styles.flex_direction_col}`}>
                        <Link className={styles.input_btn_ribbon} href='aboutproduct'>About Product</Link>
                        <Link className={styles.input_btn_ribbon} href='register'>Open Account</Link>
                    </div>
                    <div className={`${styles.d_flex_1}`}>
                        <h1 className={`${styles.gradient_text_blue} ${styles.pr_170}`}>Welcome to BRAC EPL I-SHEBA</h1>
                        <p className={`${styles.gradient_text_blue} ${styles.text_center} ${styles.pr_170}`}>Your Sustainable Growth is our Business.</p>
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
                        <p>Support: <a className={`${styles.text_color}`} href="tel:+88 02222299445">+88 02222299445</a> or <a className={`${styles.text_color}`} href="tel:01730453233">01730453233</a></p>
                        <p>Email: <a className={`${styles.text_color}`} href="mailto:pmd@bracepl.com">pmd@bracepl.com</a></p>
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