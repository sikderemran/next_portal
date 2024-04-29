import Image from "next/image";
import styles from "./page.module.css";
import ClientComponent  from "./ClientComponent";

export default function Home() {
  return (
    <div className="page-content">
      <div className={styles.card}>
          <h1>Account Information</h1>
      </div>
      <div className={styles.card}>
          <ClientComponent/>
      </div>
    </div>
  );
}
