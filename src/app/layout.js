import "./globals.css";

export const metadata = {
  title: "Bubbles Media - India's Largest Digital Solutions Marketplace",
  description: "One Platform. All Your Digital Needs. Websites, Mobile Apps, SEO, SMM, WhatsApp Marketing, and AI Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
