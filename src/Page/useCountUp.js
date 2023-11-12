import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const useCountUp = (endValue) => {
  const countUpInstance = useRef(null);

  useEffect(() => {
    countUpInstance.current = new CountUp(endValue);
    countUpInstance.current.start();
  }, [endValue]);

  return countUpInstance;
};

export default useCountUp;
