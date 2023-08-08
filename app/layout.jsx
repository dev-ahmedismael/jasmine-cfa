import Navbar from "@/components/navbar/Navbar";
import "@/Styles/globals.css";
import Theme from "@/Templates/Theme";
import { Inter } from "next/font/google";
import ReduxProvider from "./store/ReduxProvider";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasmine CFA",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Theme>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Theme>
        </ReduxProvider>
      </body>
    </html>
  );
}
