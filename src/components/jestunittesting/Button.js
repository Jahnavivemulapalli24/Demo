 import { useState } from "react";

 function Button() {
    const [showAnotherButton, setShowAnotherButton] = useState(false);

    return (
        <div> 
            <button 
            data-testid="button"
            onClick={() => {
                setShowAnotherButton(true);
            }}
            >
                CLICK HEREE
            </button>
            {showAnotherButton && (
                <button data-testid="button"> CLICK HEREE</button>
                   )}
        </div>
    );
 }

 export default Button;