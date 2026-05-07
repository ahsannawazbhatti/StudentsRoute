'use client';

import { useState, useEffect, ReactNode } from 'react';
import PageLoader from './PageLoader';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <PageLoader isLoading={isLoading} /> : children}</>;
}
