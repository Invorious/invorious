import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useTokenFromURL(urlToRedirect: string) {
  const navigate = useNavigate();

  const navigateCallback = useCallback(() => {
    navigate(urlToRedirect);
  }, [navigate, urlToRedirect]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const receivedToken = searchParams.get('token');
    if (receivedToken) {
      localStorage.setItem('token', receivedToken);
      navigateCallback();
    }
  }, [navigateCallback]);
}
