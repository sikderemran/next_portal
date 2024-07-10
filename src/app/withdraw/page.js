import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import ClientComponent from "./ClientComponent";
import styles from "../../assets/style.module.css";

export const metadata = {
    title: "Withdraw - "+process.env.APP_NAME,
    description: process.env.APP_NAME,
};
const Withdraw = () => {
    return (
        <>
            <div className={`${styles.card} ${styles.card_slide_down} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <h1 className={`${styles.gradient_text_blue}`}> withdraw REQUEST FORM </h1>
                <ClientComponent />
            </div>
        </>
    );
}
export default Withdraw