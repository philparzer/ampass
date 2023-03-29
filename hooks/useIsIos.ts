import { useState, useEffect } from 'react';

export default function useIsIos() {
  const [isIos, setIsIos] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua) && navigator.maxTouchPoints > 1){
        setIsIos(true)
    }
  }, []);

  return isIos;
}