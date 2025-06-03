import { useCallback } from 'react';

type AsyncFunction = (...args: any[]) => Promise<any>;

const useFetch = () => {
  const withLogger = useCallback(<F extends AsyncFunction>(fn: F) => {
    return async (...args: Parameters<F>): Promise<ReturnType<F>> => {
      let body: string;

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
      } catch (err: any) {
        const log = {
          timestamp: new Date().toISOString(),
          body,
          status: 'error',
          error: err?.message ?? String(err),
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
