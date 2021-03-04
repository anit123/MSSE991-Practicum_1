import { useState } from 'react';

export default function useToggle(initialVal) {
  const [state, setState] = useState(initialVal);

  function handleToggle() {
    setState(!state);
  }
  return [state, handleToggle];
}
