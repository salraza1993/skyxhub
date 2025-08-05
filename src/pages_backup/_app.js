import React from "react";
import Head from "next/head";
import { Kanit } from 'next/font/google';

// Styles
import './index.scss';
import "../styles/globals.css";

// Swiper registration
import { register } from "swiper/element/bundle";
register();

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

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>SKYXHUB - Technology Solutions</title>
        <meta name="description" content="SKYXHUB provides cutting-edge technology solutions and IT services." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SKYXHUB - Technology Solutions" />
        <meta property="og:description" content="SKYXHUB provides cutting-edge technology solutions and IT services." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SKYXHUB - Technology Solutions" />
        <meta name="twitter:description" content="SKYXHUB provides cutting-edge technology solutions and IT services." />
      </Head>
      
      <div className={kanit.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
