import React, { useState, useEffect } from 'react'
import "./Home.css"

import {
    Navbar,
    Footer,
    Sidebar
} from "../../components";

import { BsLightningCharge, BsSun, BsFillCaretRightFill, BsLayoutSidebar } from "react-icons/bs";
import { MdReportGmailerrorred } from "react-icons/md";
import { AiFillRightCircle } from "react-icons/ai";

import {
    chatGPTExamples,
    chatGPTCapabilities,
    chatGPTLimitations,
} from "../../constants";

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
            <div className="flex">
                {showSidebar
                    ?
                    <div className="w-1/5">
                        <Sidebar toggleSidebar={toggleSidebar} className='w-1/5 bg-gray-200' />
                    </div>

                    : <button onClick={toggleSidebar}
                        type="button"
                        className='absolute left-2 top-2 z-10 hidden md:inline-block'>
                        <a
                            className='flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11'>
                            <BsLayoutSidebar />
                        </a>
                    </button>
                }
                <div
                    className={`w-${showSidebar ? '4/5' : 'full'} bg-white`}
                    style={{ transition: 'width 0.3s' }}
                >
                    <div>
                        <Main />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

const ChatGPTExamples = ({ capabilities }) => {
    return (
        <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            {
                capabilities.map((example, index) => (
                    <button key={index} className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
                        {example} →
                    </button>
                ))
            }
        </ul>
    )
}

const GenerateList = ({ items }) => {
    return (
        <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            {
                items.map((item, index) => (
                    <button key={index} className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
                        {item}
                    </button>
                ))
            }
        </ul>
    )
}
export default Home


const Main = () => {
    return (
        <main className="relative h-full w-full transition-width flex flex-col overflow-auto items-stretch flex-1">
            <div className="absolute right-4 top-2 z-10 hidden flex-col gap-2 md:flex" />
            <div className="flex-1 overflow-hidden">
                <div className="react-scroll-to-bottom--css-arnfj-79elbk h-full dark:bg-gray-800">
                    <div className="react-scroll-to-bottom--css-arnfj-1n7m0yu">
                        <div className="flex flex-col text-sm dark:bg-gray-800">
                            <div className="text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
                                <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[15vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
                                    ChatGPT
                                </h1>
                                <div className="md:flex items-start text-center gap-3.5">
                                    <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                                        <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                            <BsSun className="text-2xl" />
                                            Examples
                                        </h2>
                                        <ChatGPTExamples capabilities={chatGPTExamples} />
                                    </div>
                                    <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                                        <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                            <BsLightningCharge className="text-2xl" />
                                            Capabilities
                                        </h2>
                                        <GenerateList items={chatGPTCapabilities} />
                                    </div>
                                    <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                                        <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                            <MdReportGmailerrorred className="text-2xl" />
                                            Limitations
                                        </h2>
                                        <GenerateList items={chatGPTLimitations} />
                                    </div>
                                </div>
                            </div>
                            <div className="h-32 md:h-48 flex-shrink-0" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:-left-2">
                <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                    <TextArea />
                </form>
                <div className="px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3">
                    <span>
                        Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.{" "}
                        <a href="https://help.openai.com/en/articles/6825453-chatgpt-research-preview-faq" target="_blank" rel="noopener noreferrer" className="underline">
                            Learn more
                        </a>
                        .
                    </span>
                </div>
            </div>
        </main>
    );
};

const TextArea = () => {
    useEffect(() => {
        const textarea = document.getElementById('prompt-textarea');

        const resizeTextArea = () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        };

        textarea.addEventListener('input', resizeTextArea);
        resizeTextArea();

        return () => {
            textarea.removeEventListener('input', resizeTextArea);
        };
    }, []);

    return (
        <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative bg-white dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
            <textarea
                id="prompt-textarea"
                tabIndex={0}
                data-id="root"
                rows={1}
                placeholder="Send a message"
                className="m-0 w-full resize-none bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0 outline-none"
                style={{ maxHeight: '200px', overflowY: 'hidden', border: 'none' }}
                defaultValue={''}
            />
            <button
                className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
            >
                <span data-state="closed">
                    <AiFillRightCircle className="w-6 h-6 text-2xl" />
                </span>
            </button>
        </div>
    );
};