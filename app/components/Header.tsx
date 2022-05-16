import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import AvatarKlevzhits from "../assets/projects/klevzhits.jpg"
import {GiHamburgerMenu} from "react-icons/gi"
import {HiOutlineCollection, HiOutlineUser} from "react-icons/hi";

import {CgClose} from "react-icons/cg"
import React, {FC} from "react";
import Link from "next/link";


const solutions = [
    {
        name: 'Резюме',
        href: '/',
        icon: HiOutlineUser
    },
    {
        name: 'Портфолио',
        href: '/portfolio',
        icon: HiOutlineCollection
    },
]

const Header: FC = () => {
    return <header className={"sticky top-0 z-50 bg-white"}>
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <img
                                className="h-12 w-aut rounded-full cursor-pointer"
                                src={AvatarKlevzhits.src}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <GiHamburgerMenu/>
                            {/*<MenuIcon className="h-6 w-6" aria-hidden="true" />*/}
                        </Popover.Button>
                    </div>

                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        {solutions.map((item) => (
                            <Link href={item.href} key={item.name}>
                                <a className={"flex"}>
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                               aria-hidden="true"/>
                                    <span
                                        className="text-base font-medium text-gray-500 ml-1 hover:text-gray-900 cursor-pointer">
                                    {item.name}
                                </span>
                                </a>
                            </Link>
                        ))}


                    </Popover.Group>


                </div>
            </div>


            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus
                               className="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div
                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-10 w-auto sm:h-10 rounded-full"
                                        src={AvatarKlevzhits.src}
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <CgClose className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 "
                                        >
                                            <a className={"flex"}>
                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                           aria-hidden="true"/>
                                                <span
                                                    className="ml-3 text-base font-medium text-gray-900 ml-1 cursor-pointer">{item.name}</span>
                                            </a>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    </header>
}

export default Header


