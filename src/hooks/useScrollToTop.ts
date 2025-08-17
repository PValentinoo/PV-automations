import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top on route changes, not on page load/refresh
    if (pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Remove all the automatic scrolling on page load/refresh
  // The page should naturally start at the top without any scrolling
};
