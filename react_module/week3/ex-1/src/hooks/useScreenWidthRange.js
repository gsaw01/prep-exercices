import { useDebugValue } from 'react';
import useWindowSize from './useWindowSize';

function useScreenWidthRange(minWidth, maxWidth) {
  const { width } = useWindowSize();
  let isInRange = false;

  if (width >= minWidth && width <= maxWidth) {
    isInRange = true;
  } else {
    isInRange = false;
  }

  useDebugValue(
    `minWidth:${minWidth} maxWidth:${maxWidth} | ${isInRange ? '🟢' : '🔴'}`
  );

  return isInRange;
}

export default useScreenWidthRange;
