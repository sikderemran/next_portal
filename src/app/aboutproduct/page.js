import Header from '../../layout/header'
import styles from "../../assets/style.module.css";

export const metadata = {
    title: "About Product - Brac EPL Investments Limited",
    description: "Brac EPL Investments Limited",
};
const AboutProduct = () => {

    return (
        <>
            <div className={`${styles.card} ${styles.card_slide_down} ${styles.w_80} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <h1 className={`${styles.gradient_text_blue} `}>About Product</h1>
                <div className={`${styles.d_flex} ${styles.my_20} ${styles.flex_direction_col_md} ${styles.about_product}`}>
                    <ul>
                        <li>
                            CAP EDGE- INVESTOR DISCRETIONARY ACCOUNT- Including facilities for margin loans to assist investors, fees associated with the loan, and loan ratio (in accordance with BSEC guidelines)
                        </li>
                        <li>
                            CAP CASH- Beneficiary Accounts (BO)- Equity Product, attractive brokerage commission & Annual BO maintenance Fee without hidden costs or charges.
                        </li>
                        <li>
                            MANAGED CAP EDGE- Portfolio Managers oversee portfolio by making investments on client's behalf
                        </li>
                        <li>
                            Wealth max- (CAPEDGE)- Equity Product, attractive brokerage commission & Annual BO maintenance Fee without hidden costs or charges specifically for BRAC Bank Premium Guests.
                        </li>
                        <li>
                            WEALTH MAX- (MANAGED CAPEDGE)- Portfolio Managers oversee client portfolios by making investments specifically for BRAC Bank Premium Guests.
                        </li>
                        <li>
                            BONDHON- Equity Product, Specifically Designed for Investors Seeking to Invest at T-Bill.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutProduct;