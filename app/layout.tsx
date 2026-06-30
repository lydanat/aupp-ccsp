import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Nav from "@/components/Home/Navbar/Nav";
import "./globals.css";
import AOSProvider from "@/components/AOS/AOSProvider";
import Footer from "@/components/Home/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const latin = Montserrat({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});


export const metadata: Metadata = {
  title: "Committee for Community Service Program",
  description: "Organizes and promotes community service activities.",
  icons: {
    icon: "/header-logo.svg",
    shortcut: "/header-logo.svg",
    apple: "/header-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
  <html
    lang="en"
    suppressHydrationWarning
    className={`${latin.variable}`}
  >
    <body
      className="font-sans"
      style={{
        fontFamily: "var(--font-kantumruy)",
      }}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
        <AOSProvider>
          <Nav />
          {children}
          <Footer />
        </AOSProvider>
    </ThemeProvider>
    </body>
  </html>
  );
}


