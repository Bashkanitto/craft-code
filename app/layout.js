import "./globals.css";

export const metadata = {
  title: "CraftCode - A new education platform | Taraz",
  description: "Modern education platform in Taraz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
