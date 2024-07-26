import React, {useState} from "react";
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";

export default function ToggleButtonComp(){

    const [toggleBtn, setToggleBtn] = useState(false);
    const toggleButton = () => {
        setToggleBtn(!toggleBtn);
    };

    return(
        <div>
            {toggleBtn ? (
                <BiSolidToggleRight onClick={toggleButton} className='text-custom-green text-[3rem] cursor-pointer' /> 
            ) : (
                <BiSolidToggleLeft onClick={toggleButton} className='text-slate-300 text-[3rem] cursor-pointer' />
            )}
        </div>
    );
}