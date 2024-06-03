'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';

type Props = {
  onCheck?: ((checked: boolean) => void)
};

const CheckedInput: React.FC<Props> = ({onCheck} = {}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <button onClick={() => (setIsChecked(!isChecked), onCheck?.(!isChecked))} className={`w-5 h-5 rounded-md flex items-center justify-center ${isChecked ? 'bg-dispa8chRed-400' : 'border-2 border-slate-300'} `} >
      {isChecked ? (
        <Check size={15} className="stroke-white" />
      ) : ''}
    </button>
  );
}

export default CheckedInput