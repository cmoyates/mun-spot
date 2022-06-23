import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from "@heroicons/react/solid";
import { BannerOffering } from '../interfaces';
import { termNames } from "../utils/term-data";
import OfferingDisclosure from './OfferingDisclosure';

type Props = {
    offeringArray: BannerOffering[]
}

const OfferingGroup: React.FC<Props> = ({offeringArray}) => {
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
                            shadow-md
                        '>
                            <p className='ml-1 font-semibold'>
                                {termNames[offeringArray[0].term - 1]} {offeringArray[0].year}
                            </p>
                            <ChevronRightIcon
                                className={`${open ? "transform rotate-90" : ""} w-6`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className='p-2 space-y-1'>
                            {offeringArray.map((item, index) => <div key={index}>
                                <OfferingDisclosure offering={item}/>
                            </div>)}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default OfferingGroup