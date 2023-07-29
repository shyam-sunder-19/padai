import { useState, useEffect } from 'react';
import noUiSlider from 'nouislider';

const RangeSlider = ({ min, max }) => {
    const [currMin, setCurrMin] = useState(min)
    const [currMax, setCurrMax] = useState(max)
    
    useEffect(() => {
        noUiSlider.create(document.getElementById("sliderDouble"), {
          start: [currMin, currMax],
          connect: [false, true, false],
          step: 1,
          range: { min: min, max: max },
        });
    }, [currMin, currMax]);

    return (
      <div className="my-4">
        <input
            type="text"
            className="w-16 text-center"
            id="lowerLimitInput"
            readOnly
        />
        <div className="slider" id="sliderDouble"></div>
        <input
            type="text"
            className="w-16 text-center"
            id="upperLimitInput"
            readOnly
        />
      </div>
    );
  };
  
  export default RangeSlider;
  
  
  
  
  
  
  
  