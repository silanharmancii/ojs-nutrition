import BlazeSlider, { BlazeConfig } from 'blaze-slider';
import { useEffect, useRef } from 'react';

export function useBlazeSlider(config?: BlazeConfig) {
  const sliderRef = useRef<BlazeSlider | null>(null);
  const sliderElRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // BlazeSlider'ı yalnızca sliderElRef'in DOM'da mevcut olduğundan emin olduğumuzda başlatıyoruz
    if (sliderElRef.current && !sliderRef.current) {
      try {
        sliderRef.current = new BlazeSlider(sliderElRef.current, config);
      } catch (err) {
        console.error('BlazeSlider initialization failed:', err);
      }
    }
  }, [config]);// Dependency array includes `config` to handle changes

  return { sliderElRef, sliderRef };
}