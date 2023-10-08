'use client'

import { useState } from "react";
import PopupForm from "./PopupForm";


const FloatingButton = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <PopupForm 
                isPopupOpen={isPopupOpen}
                closeForm={togglePopup}
            />
            <div className="fixed rotate-90 z-50 right-0 translate-x-24 top-1/2 transform translate-y-1/2 flex items-center justify-center p-4 bg-blue-500 rounded border-4 shadow-lg">
                <button 
                    className="text-white text-xl"
                    onClick={togglePopup}
                >
                    Get <b>Free</b> Expert Advice
                </button>
            </div>
        </>
    );
};

export default FloatingButton;