import React from 'react'
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid"
import { CourseAttributes } from '../interfaces';

type Props = {
    attributes: CourseAttributes
}

const CourseAttributesDisclosure = (props: Props) => {

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const attributesToString = () => {
        return Object.keys(props.attributes).filter((key) => props.attributes[key] && key !== "__typename").map((item, index) => (
            <p key={index}>
                <b>{item}:</b> {capitalizeFirstLetter(props.attributes[item])}
            </p>
        ))
    }

    return (
        <div className='
            w-full
            rounded-md
            dark:bg-gray-700
            bg-slate-100
        '>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className='
                            w-full
                            text-left
                            rounded-md
                            p-2
                            flex
                            flex-row
                            justify-between
                            items-center
                            dark:bg-gray-600
                            bg-slate-200
                            dark:shadow-xl
                            shadow-sm
                        '>
                            <p className='ml-1 font-semibold'>Attributes</p>
                            <ChevronRightIcon
                                className={`${open ? "transform rotate-90" : ""} w-6`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="p-2 ml-1">
                            {attributesToString()}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default CourseAttributesDisclosure