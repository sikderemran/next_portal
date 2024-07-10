import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import styles from "../../assets/style.module.css";
import ClientComponent from "./ClientComponent";
import { getServerSession } from 'next-auth';
import Clock from '../clock'

export const metadata = {
    title: "Home - "+process.env.APP_NAME,
    description: process.env.APP_NAME,
};

export default async function asyncHome() {
    const session = await getServerSession();
    return (
        <>
            <div className={`${styles.card} ${styles.card_slide_down} ${styles.vh_80} ${styles.mt_35} ${styles.mb_20} ${styles.mx_auto}`}>
                <h1 className={`${styles.gradient_text_blue}`}>Personal Information</h1>
                <div className={`${styles.d_flex} ${styles.flex_direction_col_md} ${styles.flex_space_around} ${styles.align_item_center}`} >
                    <Clock />
                    <ClientComponent />
                </div>
            </div>
        </>
    );
}
