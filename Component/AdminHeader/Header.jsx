import React from "react";
import searchIcon from "../../data/Group 536.png";
import bellIcon from "../../data/Bell, Notifications.png";
import { GoDotFill } from "react-icons/go";

export default function Header(){
    return(
        <>
            <div className="flex justify-between">
                <div className="flex items-center space-x-4 ml-5">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPgwYYhHGntkkaWUE7g3jGjMkqSkSYbGq4g&s"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                    />
                    <div className="text-good-morning-text font-semibold">
                    👋 Good morning Manish
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-white rounded-3xl p-2 h-10 ">
                        <img
                        src={searchIcon}
                        alt="Search Icon"
                        className="w-8 h-8 mr-2"
                        />
                        <input
                        type="text"
                        placeholder="Search information"
                        className="bg-white focus:outline-none pl-3"
                        />
                    </div>
                    <div className="rounded-full w-10 h-10 flex relative" style={{backgroundColor:"#8AD7B7", alignItems:"center", justifyContent:"center"}}>
                        <GoDotFill className="absolute right-0" style={{color:"#C80000", top:"-3px"}}/>
                        <img
                        src={bellIcon}
                        alt="bell Icon"
                        className="w-8 h-8"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}