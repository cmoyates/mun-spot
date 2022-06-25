import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

type Props = {
    label: string;
};

const InlineDisclosure: React.FC<Props> = ({ children, label }) => {
    return (
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
                    "
                    >
                        <p className="font-semibold">{label}</p>
                        <ChevronRightIcon
                            className={`${
                                open ? "rotate-90 transform" : ""
                            } w-6`}
                        />
                    </Disclosure.Button>
                    {open && (
                        <div>
                            <Disclosure.Panel className="pt-1">
                                {children}
                            </Disclosure.Panel>
                        </div>
                    )}
                </>
            )}
        </Disclosure>
    );
};

export default InlineDisclosure;
