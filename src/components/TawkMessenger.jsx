import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TawkMessenger = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptId = 'tawkto-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://embed.tawk.to/6811da01cba56419020bf46e/1iq2rn673'; // Replace with your widget ID
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      script.onload = () => {
        const interval = setInterval(() => {
          if (window.Tawk_API) {
            setIsLoaded(true);
            clearInterval(interval);
          }
        }, 500);
      };

      document.body.appendChild(script);
    } else {
      const interval = setInterval(() => {
        if (window.Tawk_API) {
          setIsLoaded(true);
          clearInterval(interval);
        }
      }, 500);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const isAdminRoute = location.pathname.startsWith('/admin');

    const timeout = setTimeout(() => {
      if (window.Tawk_API?.showWidget && window.Tawk_API?.hideWidget) {
        if (isAdminRoute) {
          window.Tawk_API.hideWidget();
        } else {
          window.Tawk_API.showWidget();
        }
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location.pathname, isLoaded]);

  return null;
};

export default TawkMessenger;
