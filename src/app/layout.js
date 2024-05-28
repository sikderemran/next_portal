import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Provider from '../app/provider';

export const metadata = {
  title: "Investment Portal Title",
  description: "Investment Portal Description",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
