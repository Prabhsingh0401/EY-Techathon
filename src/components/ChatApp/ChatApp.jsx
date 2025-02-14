import React, { useRef, useState, useEffect } from "react";
import logoImg from "../../../public/IconSmall.png";
import { SearchIcon, BellIcon, MessageCircleMore, Plus, User, ChevronDown, LogIn } from "lucide-react";
import Button from "../Buttons/Buttons";
import AuthModal from "../Auth/Authmodel";
const ChatApp = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown when clicking the user icon
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* HEADER */}
            <header className="flex w-full bg-[#030303] p-2">
                <div className="mx-4 flex relative items-center w-full">
                    {/* Logo */}
                    <img src={logoImg} className="w-9 h-10 mr-4" />

                    {/* Search Bar */}
                    <form className="bg-[#272728] p-1 px-3 flex rounded-md mx-4 flex-grow">
                        <SearchIcon className="text-gray-400 h-7 w-12 mt-1" />
                        <input 
                            type="text" 
                            className="bg-[#272728] h-10 w-[100px] text-[18px] p-2 m-1 pr-0 pl-2 text-white border-none focus:outline-none focus:ring-0" 
                            placeholder="Search"
                        />
                    </form>

                    {/* Buttons */}
                    <div className="mx-2 hidden sm:block">
                        <Button className="ml-2 mr-1">Log In</Button>
                        <Button className="mr-2">Sign Up</Button>
                    </div>

                    {/* User Icon with Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="rounded-md flex ml-4 gap-x-1 items-center p-2 hover:bg-gray-700">
                            <User className="w-6 h-6 text-gray-400" />
                            <ChevronDown className="text-gray-500 w-5 h-5" />
                        </button>

                        {/* Dropdown Menu (Initially Hidden) */}
                        {showDropdown && (
                            <div className="absolute right-0 top-10 bg-[#272728] z-10 rounded-md text-white shadow-md w-44">
                                <a href="#" className="flex items-center w-full py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
                                    <LogIn className="w-5 h-5 mr-2" />
                                    Log In / Sign Up
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <AuthModal></AuthModal>
            {/* BANNER */}
            <div 
                className="h-64 bg-cover" 
                style={{backgroundImage:'url("https://styles.redditmedia.com/t5_2qs0q/styles/bannerBackgroundImage_7glcgg5ymxp21.png?width=4000&s=9684bc66e812b8730ad694c3f454da8c00a493d7")'}}
            ></div>

            {/* TITLE SECTION */}
            <div className="bg-[#272728]">
                <div className="flex">
                    <div className="h-14 w-14">
                        <img src="https://cdn-icons-png.flaticon.com/512/734/734239.png" 
                            className="w-full h-full ml-12 bg-slate-500 rounded-full relative -top-3" 
                        />
                    </div>
                    <div className="pt-1 pl-4">
                        <h1 className="text-gray-300 text-[25px] ml-14">
                            Empowering Rural India: Simple Steps to Financial Freedom
                        </h1>
                    </div>
                </div>
            </div>

            {/* POST INPUT SECTION */}
            <div className="bg-[#030303] px-6 py-4 text-gray-400 flex">
                <div className="rounded-full w-10 h-10">
                    <img src={logoImg} />
                </div>
                <form action="" className=" bg-[#272728] border border-[#030303] ml-4 mr-2 rounded-md w-full max-w-xl">
                    <input 
                        type="text"
                        className="bg-[#272728] p-2 px-3 text-sm block w-full rounded-md" 
                        placeholder="New post"
                    />
                </form>
            </div>
            {/* POST CONTENT */}
            <div className="mx-6 text-gray-400">
                <div className="border border-[#343536] bg-[#272728] p-2">
                    <h5 className="text-[#818384] text-sm">Posted by Ram 5 hours ago</h5>
                    <h2 className="text-2xl mb-3">What documents do I need to open a bank account in India?</h2>
                    <div className="text-[17px] leading-9">
                        To open a bank account in India, you need to provide documents as per the KYC (Know Your Customer) guidelines:<br />
                        1. Aadhaar Card – Serves as both identity and address proof.<br />
                        2. PAN Card – Required for financial transactions; if unavailable, Form 60 can be submitted.<br />
                        3. Voter ID / Ration Card – Alternative address proof if Aadhaar is unavailable.<br />
                        4. Passport-size Photos – Usually, two recent photos are required.<br />
                        5. Mobile Number Linked to Aadhaar – For OTP verification and digital transactions.<br />
                        For Jan Dhan Accounts, Aadhaar alone is enough, and no minimum balance is required.<br />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatApp;
