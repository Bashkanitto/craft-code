import "./globals.css";

export const metadata = {
  title: "CraftCode - A new education platform | Taraz",
  description: "Modern education platform in Taraz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 dark:before:fixed dark:before:-z-50 dark:before:inset-0 dark:before:bg-gray-950/50">
        {children}
      </body>
    </html>
  );
}
