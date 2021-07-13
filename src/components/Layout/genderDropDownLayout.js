/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Fragment,
  useState,
} from 'react';

import {
  Menu,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function GenderDropDown() {

    const [value, setValue] = useState('I am');

    return (
        <Menu as="div" className="relative inline-block text-left w-full mt-2" >
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-between w-full border-lightBlue border-2  hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 focus:border-blue-300 shadow appearance-none  rounded-md h-12  bg-opacity-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-lightBlue focus:shadow-outline">
                            {value}
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right  absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        onClick={()=> setValue('Male')}
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Male
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item  >
                                    {({ active }) => (
                                        <a
                                        onClick={()=> setValue('Female')}
                                          
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Female
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item >
                                    {({ active }) => (
                                        <a
                                        onClick={()=> setValue('Other')}
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Other
                                        </a>
                                    )}
                                </Menu.Item>

                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}