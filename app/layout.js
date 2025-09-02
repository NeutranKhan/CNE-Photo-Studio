import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});



export const metadata = {
  title: 'CNE Best Photo and Print | Studio & High‑Quality Printing',
  description: 'Professional photography, event coverage, and premium printing in one studio. Book an appointment or explore our gallery and store.',
  openGraph: {
    title: 'CNE Best Photo and Print',
    description: 'Professional photography, event coverage, and premium printing in one studio.',
    url: 'https://example.com/',
    siteName: 'CNE Best Photo and Print',
    images: [
      {
        url: '/images/featured-4.jpg',
        width: 1200,
        height: 630,
        alt: 'CNE Best Photo and Print',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans bg-brand-light`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}