import React from "react";

import { FiEdit3, FiShare } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgUser } from "react-icons/cg";
import { BsChatLeft, BsLayoutSidebar } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import { sidebarBottomLinks, sidebarTopLinks } from "../../constants";

// user img
import userImg from "../../assets/img/user.png";

const ChatList = ({ chats }) => {
  return (
    <ol className="flex flex-col gap-2 text-gray-300">
      {chats.map((link, index) => (
        <li key={index} className="relative z-[15] opacity-100 h-auto overflow-hidden">
          <a href={link.url} className="flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-[4.5rem] )} )} hover:bg-gray-800 hover:bg-gray-800 group animate-flash">
            <BsChatLeft className="h-4 w-4" aria-hidden="true" />
            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">{link.name}</div>
            <div className="absolute flex right-1 z-10 text-gray-300 visible">
              <button className="p-1 hover:text-white">
                <FiEdit3 className="" aria-hidden="true" />
              </button>
              <button className="p-1 hover:text-white">
                <RiDeleteBin6Line />
              </button>
              <button className="p-1 hover:text-white">
                <FiShare />
              </button>
            </div>
          </a>
        </li>
      ))}

      {/* <li>
                <form action="#" method="GET" className="lg:hidden">
                  <label htmlFor="mobile-search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                  </div>
                </form>
              </li> 
              */}
    </ol>
  )
}

const Sidebar = ({ toggleSidebar }) => {

  return (
    <aside id="sidebar" className={`fixed top-0 left-0 z-20 h-full  flex lg:flex flex-shrink-0 flex-col w-[17rem] transition-width duration-75`} aria-label="Sidebar">
      <div className="relative flex-1 flex flex-col min-h-0 bg-[#202123] pt-0">

        <div className="flex w-full flex-col p-2">
          <div className="mb-1 flex flex-row gap-2">
            <a
              className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow"
            >
              <AiOutlinePlus />
              New chat
            </a>
            <span data-state="closed">
              <a
                className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center"
              >
                <button onClick={toggleSidebar} >
                  {/* {toggleSidebar ? <BsLayoutSidebar /> : <CgUser />} */}
                  <BsLayoutSidebar />
                </button>
              </a>
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-[#202123] divide-y space-y-1 flex flex-col justify-between">
            <ChatList chats={sidebarTopLinks} />


            <div className="space-y-2 pt-2 mt-2">

              {/* {sidebarBottomLinks.map((link, index) => (
                <a href={link.url} key={index} className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                  <link.icon className="h-6 w-6" aria-hidden="true" />
                  <span className="ml-4">{link.name}</span>
                </a>
              ))} */}

              <a className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-800 rounded-md">
                <span className="flex w-full flex-row justify-between">
                  <span className="gold-new-button flex items-center gap-3">
                    <CgUser className="-ml-1 h-6 w-6 text-xl" />
                    Don't Upgarade
                  </span>
                  <span className="rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800">NEW</span>
                </span>
              </a>

              <div className="group relative">
                <button
                  className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800"
                  type="button"
                >
                  <div className="-ml-0.5 w-5 flex-shrink-0">
                    <div className="relative flex">
                      <img
                        src={userImg}
                        alt="User Profile Img"
                        className="xsm:w-4/5 sm:w-3/4 md:w-4/5 lg:w-3/5 xl:w-full rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
                    Suman Kumar
                  </div>
                  <BiDotsHorizontalRounded className="h-4 w-4 flex-shrink-0 text-gray-500" />
                </button>
              </div>

            </div>


          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
