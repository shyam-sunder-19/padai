import { useState, useEffect } from 'react';
import Nouislider from 'nouislider-react';

const RangeSlider = ({ min, max }) => {
    const [currMin, setCurrMin] = useState(min)
    const [currMax, setCurrMax] = useState(max)

    return (
      <div className='flex flex-col'>
        <div className='flex justify-between font-light'>
          <div>Min</div>
          <div>Max</div>
        </div>
        <div className='flex justify-between'>
          <input 
            type='number'
            className='border rounded w-[40%] p-2'
            value={currMin}
          />
          <input 
            type='number'
            className='border rounded w-[40%] p-2'
            value={currMax}
          />
        </div>
      </div>
    );
  };
  
  export default RangeSlider;
  
  
  
  
  
  
  
  