import { useEffect } from 'react';

const useKeyListener = (key: string, callback: () => void) => {
  useEffect(() => {
    const handleKeyListener = (event: KeyboardEvent) => {
      console.log('key down !', event, event.key);
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener('keydown', handleKeyListener);
    console.log('added key listener');

    return () => {
      window.removeEventListener('keydown', handleKeyListener);
      console.log('removed key listener');
    };
  }, [key, callback]);
};

export default useKeyListener;
