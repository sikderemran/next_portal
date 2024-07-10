import Header from '../../layout/header'
import styles from "../../assets/style.module.css";

export const metadata = {
    title: "About Product - "+process.env.APP_NAME,
    description: process.env.APP_NAME,
};
const AboutProduct = () => {

    return (
        <>
            <div className={`${styles.card} ${styles.card_slide_down} ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <h1 className={`${styles.gradient_text_blue} `}>About Product</h1>
                <div className={`${styles.d_flex} ${styles.my_20} ${styles.flex_direction_col_md} ${styles.about_product}`}>
                    <ul>
                        <li>
                            <b>CAP EDGE- INVESTOR DISCRETIONARY ACCOUNT</b> - Including facilities for margin loans to assist investors, fees associated with the loan, and loan ratio (in accordance with BSEC guidelines)
                        </li>
                        <li>
                            <b>CAP CASH- Beneficiary Accounts (BO)</b> - Equity Product, attractive brokerage commission & Annual BO maintenance Fee without hidden costs or charges.
                        </li>
                        <li>
                            <b>MANAGED CAP EDGE</b> - Portfolio Managers oversee portfolio by making investments on client's behalf
                        </li>
                        <li>
                            <b>Wealth max- (CAPEDGE)</b> - Equity Product, attractive brokerage commission & Annual BO maintenance Fee without hidden costs or charges specifically for BRAC Bank Premium Guests.
                        </li>
                        <li>
                            <b>WEALTH MAX- (MANAGED CAPEDGE)</b> - Portfolio Managers oversee client portfolios by making investments specifically for BRAC Bank Premium Guests.
                        </li>
                        <li>
                            <b>BONDHON</b> - Equity Product, Specifically Designed for Investors Seeking to Invest at T-Bill.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutProduct;