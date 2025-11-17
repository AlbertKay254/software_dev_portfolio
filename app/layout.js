// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Albert Kaimenyi - Graphic Designer",
  description: "Nairobi-based Graphic Designer & Digital Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-tech bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
