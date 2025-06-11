import { useCallback } from 'react';

const useFetch = () => {
  const withLogger = useCallback((fn) => {
    return async (...args) => {
      let body;
      try {
        body = JSON.stringify(args);
      } catch {
        body = 'Unserializable arguments';
      }

      try {
        const res = await fn(...args);

        const log = {
          timestamp: new Date().toISOString(),
          body,
          status: 'success',
          result: res,
        };
        localStorage.setItem('fetch_log', JSON.stringify(log));
        console.log('[fetch success]', ...args, res);

        return res;
      } catch (err) {
        const log = {
          timestamp: new Date().toISOString(),
          body,
          status: 'error',
          error: err.message,
        };
        localStorage.setItem('fetch_log', JSON.stringify(log));
        console.error('[fetch error]', ...args, err);
        throw err;
      }
    };
  }, []);

  return withLogger;
};

export default useFetch;
