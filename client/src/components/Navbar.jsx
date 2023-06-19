import React from 'react'

// import { AiOutlineMenu } from 'react-icons/ai'
import { BsLayoutSidebar } from 'react-icons/bs'

import openaiImg from "../assets/img/chatgpt.png"

const Navbar = ({ toggleSidebar, showSidebar }) => {
    return (
        <nav className={`${showSidebar ? 'hidden h-0' : 'w-full h-24'} text-gray-200 border-gray-200 fixed z-30 md:hidden`}>
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 cursor-pointer p-2  rounded">
                            <BsLayoutSidebar onClick={toggleSidebar} className="text-gray-200" />
                        </button>
                        {/* <a href="/" className="text-xl font-bold flex items-center justify-center lg:ml-2.5">
                            <img src={openaiImg} alt={"ChatGPT logo"} className="w-6 h-6 rounded-full mr-2" />

                            <span className="self-center whitespace-nowrap text-center">ChatGPT</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar