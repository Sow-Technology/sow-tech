import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOW Tech | Beyond the Screen. We Build Experiences",
  description:
    "Welcome to SOW Tech – your destination for unparalleled digital expertise. We're a dedicated team of professionals specializing in web development, mobile apps, cybersecurity, XR development, and software testing. With a passion for innovation, we turn ideas into impactful realities. Join us in shaping the future of digital experiences!  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="favicon" src="/favicon.png" type="img/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
