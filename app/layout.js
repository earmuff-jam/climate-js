import { AuthProvider } from '@/context/AuthContext';
import './globals.css';
import ThemeRegistry from '@/theme/ThemeRegistry';
import Head from 'next/head';

export const metadata = {
  title: 'Climate | Asset Management App',
  description: 'Asset management done the easy way',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeRegistry>
        <AuthProvider>
          <body>{children}</body>
        </AuthProvider>
      </ThemeRegistry>
    </html>
  );
}
