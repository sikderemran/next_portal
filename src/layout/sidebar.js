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

const Sidebar = () => {
    return (
        <div className={'sidebar ' + styles.sidebar}>
            <ul>
                <li><a href="#" ><FontAwesomeIcon icon={faHouseChimney} /><span>Dashboard</span></a></li>
                <li><a href="#" className={styles.active} ><FontAwesomeIcon icon={faBuildingColumns} /><span>Deposit</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faMoneyBill1} /><span>Withdraw</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCreditCard} /><span>Buy Order</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCircleDollarToSlot} /><span>Sell Order</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faMagnifyingGlassChart} /><span>IPO Application</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faComment} /><span>Complain/Feedback</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Portfolio Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Transaction Ledger</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Gain/ Loss Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Tax Certificate</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Deposit Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Withdraw Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>IPO Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFileInvoice} /><span>Complain/Feedback Statement</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faIdCard} /><span>Change Profile</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLock} /><span>Change Password</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faRightFromBracket} /><span>Logout</span></a></li>
            </ul>
        </div>
    );
}



export default Sidebar