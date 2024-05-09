import Header from '../../layout/header'
import styles from "../../assets/style.module.css";
import ClientComponent from "./ClientComponent";
import ProgressBar from "./progress_bar"
import { ContextProvider } from './context';

const Login = () => {

    return (
        <ContextProvider>
            <div className={'container ' + styles.container}>
                <Header />
                <div className={styles.main}>
                    <div className={styles.page_content}>
                        <div className={`${styles.card} ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                            <div className={`${styles.d_flex} ${styles.flex_direction_col_sm}`} >
                                <div className={`${styles.d_flex} ${styles.flex_direction_col}`}>
                                    <button
                                        className={styles.input_btn_ribbon}
                                    >Open BO Account</button>
                                    <button
                                        className={styles.input_btn_ribbon}
                                    >Event Calendar</button>
                                </div>
                                <div className={`${styles.d_flex_1}`}>
                                    <h1 className={`${styles.gradient_text_blue}`}>Welcome to iPortal</h1>
                                </div>
                            </div>
                            <div className={`${styles.d_flex} ${styles.my_20} ${styles.flex_direction_col_md} `}>
                                <div className={`${styles.d_flex_basis_50} ${styles.text_center}`}>
                                    <img src='./registration.png' />
                                </div>
                                <div className={`${styles.d_flex_basis_50} ${styles.text_center} ${styles.overflow_hidden}`}>
                                    <ClientComponent />
                                </div>
                            </div>
                            <div className={`${styles.card_info} ${styles.flex_direction_col_sm}`}>
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
                    </div>
                </div>
            </div>
        </ContextProvider>
    )
}

export default Login;