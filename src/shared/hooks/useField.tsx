import { useState } from 'react';

const useField = (type: string) => {
  const [value, setValue] = useState('');

  const onChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export default useField;
