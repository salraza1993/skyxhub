import React from "react";
import Head from "next/head";
import './index.scss';
import "../styles/globals.css";
import { Kanit } from 'next/font/google';

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-kanit',
  style: 'normal',
  preload: true,
  fallback: ['sans-serif'],
  adjustFontFallback: true,
  fallbackWeight: '400',  
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={kanit.variable}>
      <style jsx global>{`
        html {
          font-family: var(--font-kanit, sans-serif);
        }
      `}</style>
      <Head>
          {/* seo begin */}
          <title>SKYXHUB</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </div>
  );
}export default MyApp;
