import "./globals.css";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elarahealth AI",
  description: "Reinventing diagnostic reporting with secure voice-driven AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${almarai.variable}`}>{children}</body>
    </html>
  );
}
