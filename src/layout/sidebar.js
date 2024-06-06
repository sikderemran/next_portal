import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/style.module.css';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className={'sidebar ' + styles.sidebar}>
            <ul>
                <li><Link href="home" ><FontAwesomeIcon icon={faHouseChimney} /><span>Dashboard</span></Link></li>
                <li><Link href="deposit" className={styles.active} ><FontAwesomeIcon icon={faBuildingColumns} /><span>Deposit</span></Link></li>
                <li><Link href="withdraw"><FontAwesomeIcon icon={faMoneyBill1} /><span>Withdraw</span></Link></li>
                <li><Link href="buyorder"><FontAwesomeIcon icon={faCreditCard} /><span>Buy Order</span></Link></li>
                <li><Link href="sellorder"><FontAwesomeIcon icon={faCircleDollarToSlot} /><span>Sell Order</span></Link></li>
                <li><Link href="ipo"><FontAwesomeIcon icon={faMagnifyingGlassChart} /><span>IPO Application</span></Link></li>
                <li><a href="#"><FontAwesomeIcon icon={faComment} /><span>Complain/Feedback</span></a></li>
                <li><Link href="portfoliostatement"><FontAwesomeIcon icon={faFileInvoice} /><span>Portfolio Statement</span></Link></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Transaction Ledger</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Gain/ Loss Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Tax Certificate</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Deposit Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Withdraw Statement</span></a></li>
                <li><a href="ipo"><FontAwesomeIcon icon={faFileInvoice} /><span>IPO Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Complain/Feedback Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faIdCard} /><span>Change Profile</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLock} /><span>Change Password</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faRightFromBracket} /><span>Logout</span></a></li>
            </ul>
        </div>
    );
}



export default Sidebar