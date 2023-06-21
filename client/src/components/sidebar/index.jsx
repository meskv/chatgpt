import React from "react";

import { FiEdit3, FiShare } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgUser } from "react-icons/cg";
import { BsChatLeft, BsLayoutSidebar } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import { sidebarBottomLinks, sidebarTopLinks, socialLinks } from "../../constants";

// user img
import userImg from "../../assets/img/user.png";
import Footer from "../Footer";

const ChatList = ({ chats, chatLog }) => {
  return (
    <ol className="flex flex-col gap-2 text-gray-300">
      {chatLog.map((link, index) => (
        <li key={index} className="relative z-[15] opacity-100 h-auto overflow-hidden">
          <a href={link.url} className="flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-[4.5rem] )} )} hover:bg-gray-800 hover:bg-gray-800 group animate-flash">
            <BsChatLeft className="h-4 w-4" aria-hidden="true" />
            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">{link.message}</div>
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
    </ol>
  )
}

const ModelList = (props) => {
  const { models, currentModel, setCurrentModel } = props

  return (
    <>
      <label id="listbox-label" className="block text-sm font-medium leading-6 text-white">Select a Model</label>
      <select
        onChange={(e) => { setCurrentModel(e.target.value) }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option
          className="bg-white text-gray-300"
          value="text-davinci-003">
          {currentModel}
        </option>
        {models.map((model, index) => (
          <option
            className="flex flex-col gap-2 text-gray-300"
            key={index}
            value={model.id}
          >
            {model.id}
          </option>
        ))}
      </select>
    </>
  )
}

const Sidebar = ({ toggleSidebar, models, currentModel, setCurrentModel, chatLog }) => {
  return (
    <aside id="sidebar" className={`fixed top-0 left-0 z-20 h-full  flex lg:flex flex-shrink-0 flex-col w-[310px] transition-width duration-75`} aria-label="Sidebar">
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
                className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"
              >
                <button onClick={toggleSidebar} >
                  {/* {toggleSidebar ? <BsLayoutSidebar /> : <CgUser />} */}
                  <BsLayoutSidebar />
                </button>
              </a>
            </span>
          </div>
          <ModelList models={models} currentModel={currentModel} setCurrentModel={setCurrentModel} />
        </div>

        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-[#202123] divide-y space-y-1 flex flex-col justify-between">

            <ChatList chats={sidebarTopLinks} chatLog={chatLog} />

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
                    Please Upgarade
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


              <div className="flex justify-center items-center gap-6 bg-gray-900 p-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} className="text-gray-300 hover:text-gray-50">
                    <span className="sr-only">{link.name}</span>
                    <link.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>

            </div>


          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
