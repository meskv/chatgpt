import React, { useState, useEffect } from 'react'

import {
    Navbar,
    Footer,
    Sidebar
} from "../../components";

import { BsLightningCharge, BsSun, BsFillCaretRightFill, BsLayoutSidebar } from "react-icons/bs";
import { MdReportGmailerrorred } from "react-icons/md";
import { AiFillRightCircle } from "react-icons/ai";
import { FiEdit3, FiShare } from "react-icons/fi";
import { BsClipboard } from "react-icons/bs";

import {
    chatGPTExamples,
    chatGPTCapabilities,
    chatGPTLimitations,
} from "../../constants";

import chatGPTImg from "../../assets/img/chatgpt.png";
import userImg from "../../assets/img/user.png";


import {
    lightThemeClasses,
    lightContainerClasses,
    lightImageClasses,
    lightLikeButtonClasses,
    lightDislikeButtonClasses,

    darkThemeClasses,
    darkContainerClasses,
    darkImageClasses,
    darkLikeButtonClasses,
    darkDislikeButtonClasses,
} from "../../constants/styles";
import { BiRefresh } from 'react-icons/bi';

const initialChatLog = [
]

const Home = () => {
    // state for input and chat log
    const [input, setInput] = useState("");
    const [chatLog, setChatLog] = useState(initialChatLog);
    const [models, setModels] = useState([]);
    const [currentModel, setCurrentModel] = useState("text-davinci-003");
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        getEngines();
    }, []);

    const getEngines = async () => {
        fetch("http://localhost:8000/openai/models")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.models.data);
                setModels(data.models.data);
            });
    };

    const handleSubmit = async (e) => {
        console.log(input);
        e.preventDefault();
        let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
        setInput("");
        setChatLog(chatLogNew);

        const messages = chatLogNew.map((message) => message.message).join("\n");
        const response = await fetch("http://localhost:8000/openai/prompt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: messages,
                currentModel: currentModel,
            }),
        });

        const data = await response.json();
        console.log(data);
        setChatLog([
            ...chatLogNew,
            {
                user: "ChatGPT",
                message: `${data.data}`,
            },
        ]);
    }

    return (
        <div className=''>
            {/* <div className="overflow-hidden w-full h-full relative flex z-0 ">
                <div className='dark flex-shrink-0 overflow-x-hidden'>
                    <div className='h-full w-[260px]'>
                        <div className='flex h-full min-h-0 flex-col '>
                            <div className='scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20'>
                                <aside className="flex h-full w-full flex-col p-2">
                                    <div className="">
                                        {showSidebar
                                            ?
                                            <div className="w-1/5">
                                                <Sidebar
                                                    toggleSidebar={toggleSidebar}
                                                    models={models}
                                                    currentModel={currentModel}
                                                    setCurrentModel={setCurrentModel}
                                                    className='w-1/5 bg-gray-200'
                                                />
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
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative flex h-full max-w-full flex-1 overflow-hidden'>
                    <section className='chat-box flex-1'>
                        <main className="">
                            {chatLog.length != 0 ?
                                (
                                    <div className='flex flex-col text-sm h-screen dark:bg-gray-800'>
                                        {chatLog.map((message, index) => (
                                            <ChatMessage key={index} message={message} />
                                        ))}
                                    </div>
                                )
                                : (
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
                                )
                            }

                            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                                <div className='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:-left-2'>
                                    <div className="">
                                        <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center">
                                            <button
                                                className="btn relative btn-neutral -z-0 border-0 md:border"
                                                as="button"
                                            >
                                                <div className="flex w-full gap-2 items-center justify-center">
                                                    <BiRefresh className='text-xl' />
                                                    Regenerate response
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                                        <TextArea input={input} setInput={setInput} />
                                    </form>
                                </div>
                            </div>
                        </main>
                    </section>
                </div>
            </div> */}

            <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
            <div className="flex">
                {showSidebar
                    ?
                    <div className="w-1/5">
                        <Sidebar
                            toggleSidebar={toggleSidebar}
                            models={models}
                            currentModel={currentModel}
                            setCurrentModel={setCurrentModel}
                            className='w-1/5 bg-gray-200'
                        />
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
                <div className={`w-${showSidebar ? '4/5' : 'full'} bg-white`} style={{ transition: 'width 0.3s' }} >
                    <div>
                        <main className="relative">
                            {chatLog.length != 0 ?
                                (
                                    <div className='flex flex-col text-sm h-screen dark:bg-gray-800'>
                                        {chatLog.map((message, index) => (
                                            <ChatMessage key={index} message={message} />
                                        ))}
                                    </div>
                                )
                                : (
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
                                )
                            }

                            <div className='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg- dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:-left-2'>
                                <form
                                    onSubmit={handleSubmit}
                                    className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                                    <TextArea input={input} setInput={setInput} />
                                </form>
                            </div>
                        </main>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

const ChatMessage = ({ message }) => {
    return (
        <React.Fragment>
            <div className={`group w-full ${lightContainerClasses} ${darkContainerClasses}`}>
                <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
                    <div className="flex-shrink-0 flex flex-col relative items-end">
                        <div className="w-[30px]">
                            <div className="relative flex">
                                <span className="inline-block overflow-hidden w-initial h-initial bg-none opacity-100 border-0 m-0 p-0 relative max-w-full">
                                    <span className="block w-initial h-initial bg-none opacity-100 border-0 m-0 p-0 max-w-full">
                                        <img src={message.user === 'ChatGPT' ? chatGPTImg : userImg} className={`w-8 h-8 rounded-full ${lightImageClasses} ${darkImageClasses}`} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                        <div className="flex flex-grow flex-col gap-3">
                            <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap break-words">
                                <div>{message.message}</div>
                            </div>
                        </div>
                        <div className="flex justify-between lg:block">
                            <div className="text-xs flex items-center justify-center gap-1 self-center pt-2 invisible">
                                <button>
                                    <BsClipboard className={`text-2xl ${lightThemeClasses} ${darkThemeClasses}`} />
                                </button>
                                <span className="flex-grow flex-shrink-0">1 / 1</span>
                                <button disabled="" className={`bg-gray-800 ${lightLikeButtonClasses} ${darkLikeButtonClasses}`}>
                                    like
                                </button>
                            </div>
                            <div className={`text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible ${lightDislikeButtonClasses} ${darkDislikeButtonClasses}`}>
                                <button className="p-1 rounded-md">
                                    dislike
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-col gap-2 text-left">
                <img
                    src={message.user === 'ChatGPT' ? chatGPTImg : userImg} className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-semibold dark:text-gray-100">{message.user}</span>
                    <span className="text-xs dark:text-gray-100">{ }</span>
                </div>
                <span className="text-sm">{message.message}</span>
            </div> */}
        </React.Fragment>
    )
}

const ChatGPTExamples = ({ capabilities }) => {
    return (
        <ul className={`flex flex-col gap-3.5 w-full sm:max-w-md m-auto`}>
            {capabilities.map((example, index) => (
                <button
                    key={index}
                    className={`w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900`}>
                    {example} →
                </button>
            ))}
        </ul>
    )
}

const GenerateList = ({ items }) => {
    return (
        <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            {items.map((item, index) => (
                <button key={index} className="w-full p-3 rounded-md bg-gray-50 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-gray-900">
                    {item}
                </button>
            ))}
        </ul>
    )
}

const TextArea = ({ input, setInput }) => {
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
        <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
            <textarea
                id="prompt-textarea"
                tabIndex={0}
                data-id="root"
                rows={1}
                placeholder="Send a message"
                className="m-0 w-full resize-none bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0 outline-none"
                style={{ maxHeight: '200px', overflowY: 'hidden', border: 'none' }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
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