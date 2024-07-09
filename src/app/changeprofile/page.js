import ClientComponent from "./ClientComponent";
import styles from "../../assets/style.module.css";

export const metadata = {
    title: "Change profile - Brac EPL Investments Limited",
    description: "Brac EPL Investments Limited",
};

const ChangeProfile = () => {
    return (
        <>
            <div className={`${styles.card} ${styles.card_slide_down} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <h1 className={`${styles.gradient_text_blue}`}> Change Profile Request Form </h1>
                <ClientComponent />
            </div>
        </>
    );
};

export default ChangeProfile;
