import "./globals.css";
import GlobalBubbles from "../components/GlobalBubbles";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";

export const metadata = {
  title: "Tech Mart 24 - India's Largest Digital Solutions Marketplace",
  description: "One Platform. All Your Digital Needs. Websites, Mobile Apps, SEO, SMM, WhatsApp Marketing, and AI Solutions.",
  icons: {
    icon: "/techmart24-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <GlobalBubbles />
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

