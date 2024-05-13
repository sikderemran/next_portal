import Header from '../../layout/header'
import styles from "../../assets/style.module.css";
import ClientComponent from "./ClientComponent";
import ProgressBar from "./progress_bar"
import { ContextProvider } from './context';

const Register = () => {

    return (
        <ContextProvider>
            <div className={'container ' + styles.container}>
                <Header />
                <div className={styles.main}>
                    <div className={styles.page_content}>
                        <div className={`${styles.card} ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                            <h1 className={`${styles.gradient_text_blue} `}>Application for Account Opening</h1>
                            <ProgressBar total_step={4} />
                            <div className={`${styles.d_flex} ${styles.my_20} ${styles.flex_direction_col_md}`}>
                                <div className={`${styles.d_flex_basis_50} ${styles.text_center}`}>
                                    <ClientComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContextProvider>
    )
}

export default Register;