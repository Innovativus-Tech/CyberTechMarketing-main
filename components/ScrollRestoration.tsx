'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    // When the component mounts (e.g., page load/refresh), force scroll to top
    window.scrollTo(0, 0);
    
    // Also disable browser's default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
}
