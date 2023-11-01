// import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "./head";
import Locales from "@/utils/functions/locales";
import Providers from "@/utils/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className="relative min-h-screen" suppressHydrationWarning={true}>
        <Providers>
          <Locales>
            <Navbar />
            {children}

            {/* footer */}
            {/* <Footer /> */}
          </Locales>
        </Providers>
      </body>
    </html>
  );
}
