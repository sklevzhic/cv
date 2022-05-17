import React, {FC, useState, Fragment} from "react";
import {Listbox, Transition} from '@headlessui/react'
import classNames from "classnames";
import {HiSelector, HiCheck} from "react-icons/hi"

import {icons} from "../consts/icons";
import Icon from "./Icon";
import {useDispatch} from "react-redux";
import { useRouter } from "next/router";
let arrForSelect: any[] = Object.keys(icons).map(key => {
    return {
        "value": key,
        "label": icons[key].label,
        "icon": icons[key].icon,
        "color": icons[key].color,
    }
})
interface FilterInputItemProps {

}

const FilterInputItem: FC<FilterInputItemProps> = ({}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(arrForSelect[1])
    const changeFilter = (value: any) => {
        // setSelected

    }

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({open}) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700 mr-2">Показать с </Listbox.Label>
                    <div className="mt-1 relative">
                        <Listbox.Button
                                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <span className="flex items-center">
                                  <Icon icon={selected.icon} color={selected?.color}/>
                                <span className="ml-3 block truncate">{selected?.label}</span>
                              </span>
                            <span
                                className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <HiSelector className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                              </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className="absolute z-10 mt-1 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {arrForSelect.map((item) => {
                                    return <Listbox.Option
                                        key={item.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={item}
                                    >
                                        {({selected, active}) => (
                                            <>
                                                <div className="flex items-center">
                                                    <Icon icon={item.icon} color={item.color}/>
                                                    <span
                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                        {item.label}
                                                      </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <HiCheck className="h-5 w-5" aria-hidden="true"/>
                                                      </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                })}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>

    )
}

export default FilterInputItem
