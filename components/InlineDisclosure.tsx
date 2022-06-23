import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from "@heroicons/react/solid";

type Props = {}

const InlineDisclosure: React.FC<Props> = ({children}) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className='
                        flex
                        flex-row
                        justify-between
                        items-center
                        w-full
                    '>
                        <p className='font-semibold'>
                            Previous Offerings
                        </p>
                        <ChevronRightIcon
                            className={`${open ? "transform rotate-90" : ""} w-6`}
                        />
                    </Disclosure.Button>
                    {open && (
                        <div>
                            <Disclosure.Panel>
                                {children}
                            </Disclosure.Panel>
                        </div>
                    )}
                </>
            )}
        </Disclosure>
    )
}

export default InlineDisclosure