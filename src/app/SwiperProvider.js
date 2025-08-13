'use client';

import { useEffect } from 'react';

export default function SwiperProvider({ children }) {
  useEffect(() => {
    // Register Swiper elements on the client side
    const registerSwiper = async () => {
      const { register } = await import("swiper/element/bundle");
      register();
    };
    
    registerSwiper();
  }, []);

  return <>{children}</>;
}
