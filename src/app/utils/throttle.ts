/* eslint-disable @typescript-eslint/no-explicit-any */
export function throttle(func: (...args: any[]) => void, limit: number) {
    let inThrottle = false;
    return (...args: any[]) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }