import ClientComponent from "./ClientComponent";
import styles from "../../assets/style.module.css";

export const metadata = {
    title: "Deposit - Brac EPL Investments Limited",
    description: "Brac EPL Investments Limited",
};

const Deposit = () => {
    return (
        <>
            <div className={`${styles.card} ${styles.card_slide_down} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <h1 className={`${styles.gradient_text_blue}`}> Deposit Request Form </h1>
                <ClientComponent />
            </div>
        </>
    );
};

export default Deposit;
