import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

type Props = {
    label: string;
};

const StyledDisclosure: React.FC<Props> = ({ children, label }) => {
    return (
        <div
            className="
                w-full
                rounded-md
                bg-slate-100
                dark:bg-gray-700
            "
        >
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button
                            className="
                                flex
                                w-full
                                flex-row
                                items-center
                                justify-between
                                rounded-md
                                bg-slate-200
                                p-2
                                text-left
                                shadow-md
                                dark:bg-gray-600
                            "
                        >
                            <p className="ml-1 font-semibold">{label}</p>
                            <ChevronRightIcon
                                className={`${
                                    open ? "rotate-90 transform" : ""
                                } w-6`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="ml-1 p-2">
                            {children}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default StyledDisclosure;
