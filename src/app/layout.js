import { Kanit } from 'next/font/google';
import '../styles/globals.css';
import './styles.scss';
import SwiperProvider from './SwiperProvider';

// Font configuration
const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-kanit',
  preload: true,
  fallback: ['sans-serif'],
  adjustFontFallback: true,
});

export const metadata = {
  title: 'SKYXHUB - Technology Solutions',
  description: 'SKYXHUB provides cutting-edge technology solutions and IT services.',
  keywords: 'technology, IT services, solutions, software development, web development',
  authors: [{ name: 'SKYXHUB Team' }],
  robots: 'index, follow',
  
  // Open Graph
  openGraph: {
    type: 'website',
    title: 'SKYXHUB - Technology Solutions',
    description: 'SKYXHUB provides cutting-edge technology solutions and IT services.',
    siteName: 'SKYXHUB',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'SKYXHUB - Technology Solutions',
    description: 'SKYXHUB provides cutting-edge technology solutions and IT services.',
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/favicon/site.webmanifest',
  
  // Apple
  appleWebApp: {
    title: 'SkyXHub',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#62AF31',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kanit.variable}>
      <head>
        {/* Additional meta tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
        {/* Public assets */}
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
      </head>
      <body>
        <SwiperProvider>
          {children}
        </SwiperProvider>
      </body>
    </html>
  );
}
