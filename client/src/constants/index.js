// Social Links Icons
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineTwitter } from "react-icons/ai";

// Sidebar Icons
import { AiFillHtml5 } from "react-icons/ai";

const sidebarTopLinks = [
    {
        name: "Home",
        url: "/",
        icon: AiFillHtml5,
    },
    {
        name: "About",
        url: "/about",
        icon: AiFillHtml5,
    },
    {
        name: "Contact",
        url: "/contact",
        icon: AiFillHtml5,
    },
]

const sidebarBottomLinks = [
    {
        name: "Home",
        url: "/",
        icon: AiFillHtml5,
    },
    {
        name: "About",
        url: "/about",
        icon: AiFillHtml5,
    },
    {
        name: "Contact",
        url: "/contact",
        icon: AiFillHtml5,
    },
]

const socialLinks = [
    {
        name: "Github",
        url: "https://github.com/meskv",
        icon: AiFillGithub,
    },
    {
        name: "Linkedin",
        icon: AiFillLinkedin,
        url: "https://www.linkedin.com/in/me-skv"
    },
    {
        name: "Mail",
        icon: AiFillMail,
        url: "mailto:krsk1495@gmail.com"
    },
    {
        name: "Twitter",
        icon: AiOutlineTwitter,
        url: "https://twitter.com/me_skv"
    },
]

const chatGPTCapabilities = [
    "Explain quantum computing in simple terms",
    "Got any creative ideas for a 10 year old’s birthday?",
    "How do I make an HTTP request in Javascript?",
]

const chatGPTExamples = [
    "Remembers what user said earlier in the conversation",
    "Allows user to provide follow-up corrections",
    "Trained to decline inappropriate requests"
]

const chatGPTLimitations = [
    "May occasionally generate incorrect information",
    "May occasionally produce harmful instructions or biased content",
    "Limited knowledge of world and events after 2021"
]

const footerLeftLinks = [
    {
        name: "My Portfolio",
        url: "https://meskv.github.io/portfolio",
    },
]

export {
    sidebarTopLinks,
    sidebarBottomLinks,
    chatGPTExamples,
    chatGPTCapabilities,
    chatGPTLimitations,
    socialLinks,
    footerLeftLinks,
}