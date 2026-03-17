import { useState } from 'react';

function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [isVisible, setIsVisible] = useState(initialValue);

  function toggle() {
    setIsVisible((prevState) => !prevState);
  }

  return [isVisible, toggle];
}

export default useToggle;
