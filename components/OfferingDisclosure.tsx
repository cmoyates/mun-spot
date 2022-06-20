import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

type Props = {
    label: string
}

const OfferingDisclosure: React.FC<Props> = ({children, label}) => {
  return (
    <div className='
        w-full
        rounded-md
        outline-1
        outline-slate-300
        dark:outline-gray-700
        outline
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
                    dark:bg-gray-700
                    bg-slate-300
                    shadow-sm
                '>
                    <p>{label}</p>
                    {open ? <ChevronUpIcon className='w-4'/> : <ChevronDownIcon className='w-4'/>}
                </Disclosure.Button>
                <Disclosure.Panel className='p-2'>{children}</Disclosure.Panel>
            </>
        )}
        </Disclosure>
    </div>
  )
}

export default OfferingDisclosure