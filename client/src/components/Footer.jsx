import React from 'react'
import { footerLeftLinks, socialLinks } from '../constants'

const Footer = () => {
    return (
        <div className='bg-gray-700'>
            <footer className="flex justify-between md:flex md:items-center md:justify-between shadow p-2 md:p-4 xl:p-4">
                <ul className="flex items-center flex-wrap md:mb-0">
                    {footerLeftLinks.map((link, index) => (
                        <li key={index} className="mr-4 md:mr-6"><a href={link.url} className="text-xl font-semibold text-gray-200 hover:text-gray-50 ">{link.name}</a></li>
                    ))}
                </ul>
                <div className="flex sm:justify-center space-x-6">

                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.url} className="text-gray-200 hover:text-gray-50">
                            <span className="sr-only">{link.name}</span>
                            <link.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))
                    }
                </div>
            </footer>
            {/* <p className="text-center text-sm text-gray-200 hover:text-gray-50">
                {new Date().getFullYear()} <a href="https://github.com/meskv" className="hover:underline" target="_blank">Developed by Suman</a>.
            </p> */}
        </div>
    )
}

export default Footer