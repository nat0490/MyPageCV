import { useEffect, useState, useRef, RefObject } from 'react';

type ObserverOptions = {
    root?: Element | null;
    rootMargin?: string; //ajuster la zone de détection de visibilité par rapport au viewport, en px
    threshold?: number | number[]; //% de l'élément visible pour effectuer l'action
  };

  const useIntersectionObserver = (options: ObserverOptions): [RefObject<HTMLDivElement>, boolean] => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);

      const currentRef = ref.current;
  
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [options]);
  
    return [ref, isIntersecting];
  };
  
  export default useIntersectionObserver;