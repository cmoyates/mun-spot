import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from "@heroicons/react/solid";
import { BannerOffering } from '../interfaces';
import { termData } from "../utils/term-data";
import Link from 'next/link';

type Props = {
    offering: BannerOffering
}

const OfferingDisclosure: React.FC<Props> = ({ offering }) => {
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
                                {termData[offering.term - 1]} {offering.year}
                            </p>
                            <ChevronRightIcon
                                className={`${open ? "transform rotate-90" : ""} w-6`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className='p-2 ml-1'>
                            <b>Prof: </b>
                            {offering.prof_full ? offering.rmp.rating !== "N/A" ? <Link href={`https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${offering.rmp.legacy_id}`}>
                                <a className='hover:underline underline-offset-1' target="_blank">
                                    <span>{offering.prof_full} ({offering.rmp.rating}/5 with {offering.rmp.rating_count} ratings)</span>
                                </a>
                            </Link>
                                : <span>{offering.prof_full} (Not on RateMyProf)</span>
                                : <span> Unannounced</span>}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default OfferingDisclosure