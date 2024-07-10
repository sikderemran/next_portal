import Header from '../../layout/header'
import styles from "../../assets/style.module.css";
import ClientComponent from "./ClientComponent";
import ProgressBar from "./progress_bar"
import StepName from "./step_name"
import { ContextProvider } from './context';

export const metadata = {
    title: "Register - "+process.env.APP_NAME,
    description: process.env.APP_NAME,
};
const Register = () => {

    return (
        <>
            <ContextProvider>
                <div className={`${styles.card} ${styles.card_slide_down} ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                    <StepName/>
                    <ProgressBar total_step={6} />
                    <div className={`${styles.d_flex} ${styles.my_20} ${styles.flex_direction_col_md}`}>
                        <ClientComponent />
                    </div>
                </div>
            </ContextProvider>
        </>
    )
}

export default Register;