import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 600);
      // setLoading(false);

    };

    // Router event listeners
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Check if the page is reloading
    if (router.asPath !== router.route) {
      setLoading(true);
    }

    // Cleanup event listeners
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  useEffect(() => {
    // Initial loading state when the component mounts
    setLoading(true);

    // Simulating a delay for initial loading (you can remove this setTimeout if not needed)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    loading && (
      <div className='spinner-wrapper'>
        <div className='spinner'></div>
      </div>
    )
  );
}
