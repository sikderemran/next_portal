import Header from '../../layout/header'
import styles from "../../assets/style.module.css";

export const metadata = {
    title: "CDBL BO Account: Terms & Conditions - "+process.env.APP_NAME,
    description: process.env.APP_NAME,
};
const TermsCondition = () => {

    return (
        <>
            <div className={`${styles.card} ${styles.card_slide_down} ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <h1 className={`${styles.gradient_text_blue} `}>CDBL BO Account: Terms & Conditions</h1>
                <div className={`${styles.d_flex} ${styles.my_20} ${styles.flex_direction_col_md} ${styles.about_product}`}>
                    <embed src='../terms.pdf' type='application/pdf' width='100%' height='1000px'></embed>
                </div>
            </div>
        </>
    )
}

export default TermsCondition;