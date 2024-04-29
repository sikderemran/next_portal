import { Inter } from "next/font/google";
import Header from "../layout/header"
import Footer from "../layout/footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Investment Portal Title",
  description: "Investment Portal Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header children= {children} />
       
        <Footer/>
      </body>
    </html>
  );
}
