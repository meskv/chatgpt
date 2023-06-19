import React from 'react';
import LinkMenu from './LinkMenu';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

import { NavLink } from 'react-router-dom';

const NavLinks = ({ routes }) => {
    return (
        <div className='max-w-full'>
            <Accordion className='ml-5 relative' allowMultiple>
                {
                    routes.routes.map(route => {
                        if (route.children) {
                            return <MultiAccordianItem route={route} />
                        } else {
                            return <SingleLinkAccordianItem route={route} />
                        }
                    })
                }
            </Accordion>
        </div>
    );
}

const MultiAccordianItem = ({ active, route }) => {
    return (
        <AccordionItem

            className={`border-b 
        ${active ? 'border-blueSecondary' : 'border-gray-200'}
         py-[17px] dark:!border-white/10`}>
            <h2 className='mx-3'>
                <AccordionButton className='  flex justify-between'>
                    <span className='text-left font-bold text-navy-900 dark:text-white' flex='1' >
                        {route.name}
                    </span>
                    <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                </AccordionButton>
            </h2>
            <AccordionPanel className=' text-left text-medium mt-3 !text-navy-900 dark:!text-white' pb={4}>
                <LinkMenu links={route.children} path={route.path} />
            </AccordionPanel>
        </AccordionItem>
    );
}

const SingleLinkAccordianItem = ({ route }) => {
    return (
        <NavLink to={route.path} end>
            {
                ({ isActive }) => (<AccordionItem className='mx-3 border-b border-gray-200 py-[17px] dark:!border-white/10'>
                    <h2>
                        <AccordionButton className=' flex justify-between '>
                            <span className='text-left font-bold text-navy-900 dark:text-white' flex='1' >
                                {route.name}
                            </span>
                            {
                                isActive
                                    ?
                                    <span className='absolute right-0 h-5 w-1 bg-blueSecondary'></span>
                                    :
                                    ""
                            }
                        </AccordionButton>
                    </h2>

                </AccordionItem>)
            }


        </NavLink>
    );
}

export default NavLinks;
