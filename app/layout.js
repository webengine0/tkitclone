import "./globals.css";

{/* <link
  href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
  rel="stylesheet"
></link>; */}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
