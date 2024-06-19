import { Inter } from "next/font/google";
import Provider from './provider';
import Header from "../layout/header";
import styles from "../assets/style.module.css";
import SideBarVisibility from "./siderbarvisibility";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout( {children} ) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className={'container ' + styles.container}>
            <Header />
            <div className={styles.main}>
              <SideBarVisibility children={children}/>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}

