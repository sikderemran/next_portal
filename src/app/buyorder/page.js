import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import ClientComponent from "./ClientComponent";
import styles from "../../assets/style.module.css";

export const metadata = {
    title: "Buy Order - "+process.env.APP_NAME,
    description: process.env.APP_NAME,
};

const BuyOrder = () => {
    return (
        <>
            <div className={`${styles.card} ${styles.card_slide_down} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <h1 className={`${styles.gradient_text_blue}`}> Buy Order Request Form </h1>
                <ClientComponent />
            </div>
        </>
    );
}
export default BuyOrder