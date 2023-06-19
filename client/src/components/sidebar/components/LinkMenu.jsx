import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaIdCard } from "react-icons/fa";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { isPending } from '@reduxjs/toolkit';

const LinkMenu = ({ links, path }) => {
    return (
        <div className=''>
            <List spacing={3}>
                {
                    links.map(link => (
                        <ListItem>
                            <NavMenuLink link={link} path={path} />
                        </ListItem>
                    )

                    )
                }



            </List>

        </div>
    );
}

const NavMenuLink = ({ path, link }) => {
    return (
        <NavLink to={`${path}/${link.path}`} end>
            {({ isActive, isPending }) => (
                <div className="relative mb-2 flex hover:cursor-pointer mt-2">
                    <div
                        className="my-[3px] flex cursor-pointer items-center px-8"
                    >
                        <span
                            className={`${isActive
                                ? "font-bold text-brand-500 dark:text-white"
                                : "font-medium text-gray-600"
                                }`}
                        >
                            {/* {route.icon ? route.icon : <DashIcon />} */}
                        </span>
                        <p
                            className={`leading-1  ml-4 flex ${isActive
                                ? "font-bold text-sm text-gray-700 dark:text-white"
                                : "font-medium text-sm text-gray-700"
                                }`}
                        >
                            {/* {route.name} */}
                            {link.name}
                        </p>
                    </div>
                    {isActive ? (
                        <div class="absolute right-0 top-px h-5 w-1 bg-brand-500 dark:bg-brand-400" />
                    ) : null}

                </div>
            )}

        </NavLink>
    );
}

export default LinkMenu;
