import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTranstition from "@/components/PageTranstition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: "Arseni's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition/>
        <PageTranstition>{children}</PageTranstition>
      </body>
    </html>
  );
}
