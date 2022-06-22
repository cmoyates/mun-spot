import React, { Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from "@heroicons/react/solid";

type Props = {
    value: string | number,
    setValue: React.Dispatch<React.SetStateAction<string | number>>,
    indexIsValue?: boolean,
    data: string[]
}

const StyledSelector = (props: Props) => {
    return (
        <div>
            <Listbox value={props.value} onChange={props.setValue}>
                <Listbox.Button className="
                    bg-slate-200
                    dark:bg-gray-600
                    w-max
                    p-2
                    rounded-md
                    z-10
                    shadow-sm
                ">{props.value}</Listbox.Button>
                <Listbox.Options className="
                    absolute
                    bg-slate-200
                    dark:bg-gray-600
                    rounded-md
                    py-2
                    mt-1
                    shadow-md
                    dark:shadow-2xl
                    z-50
                ">
                    {props.data.map((item, index) => (
                    <Listbox.Option key={index} value={props.indexIsValue ? index : item} as={Fragment}>
                        {({ active, selected }) => (
                        <li
                            className={`${
                                    active && 'bg-blue-500 text-white'
                                } 
                                flex
                                flex-row
                                px-2
                            `}
                        >
                            {selected && <CheckIcon className='w-5'/>}
                            {item}
                        </li>
                        )}
                    </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
      )
}

export default StyledSelector