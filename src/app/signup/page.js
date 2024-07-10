import Header from '../../layout/header'
import styles from "../../assets/style.module.css";
import ClientComponent from "./ClientComponent";
import ProgressBar from "./progress_bar"
import { ContextProvider } from './context';

export const metadata = {
    title: "Sign up - "+process.env.APP_NAME,
    description: process.env.APP_NAME,
};
const Signup = () => {

    return (
        <>
            <ContextProvider>
                <div className={`${styles.card} ${styles.card_slide_down} ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                    <h1 className={`${styles.gradient_text_blue} `}>Application for Sing Up</h1>
                    <ProgressBar total_step={3} />
                    <div className={`${styles.d_flex} ${styles.my_20} ${styles.flex_direction_col_md}`}>
                        <ClientComponent />
                    </div>
                </div>
            </ContextProvider>
        </>
    )
}

export default Signup;