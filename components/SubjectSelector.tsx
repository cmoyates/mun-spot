import React, { Dispatch, SetStateAction, useState } from 'react';
import { Listbox } from '@headlessui/react';
import type { SubjectSelection } from "../interfaces/index";
import {subjectData} from "../utils/subject-data";

type Props = {
    label?: string,
    subject: SubjectSelection,
    setSubject: Dispatch<SetStateAction<SubjectSelection>>,
    includeAll?: boolean
}

const SubjectSelector = (props: Props) => {

    return (
        <div className='
            flex
            flex-col
            mt-2
            w-64
            text-sm
        '>
            <h3>{props.label}</h3>
            <Listbox value={props.subject} onChange={props.setSubject}>
                <Listbox.Button className='
                    bg-white
                    text-left
                    rounded-md
                    p-2
                    shadow-md
                    w-max
                '>
                    {props.subject.text}
                </Listbox.Button>
                <Listbox.Options className="
                    bg-white
                    rounded-sm
                    px-2
                    shadow-md
                    mt-16
                    h-48
                    overflow-y-scroll
                    absolute
                ">
                    {props.includeAll && <Listbox.Option
                            value={{
                                text: "All",
                                code: ""
                            }}
                        >
                            All
                        </Listbox.Option>}
                    {subjectData.map((item, index) => (
                        <Listbox.Option
                            key={index}
                            value={item}
                        >
                            {item.text}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}

export default SubjectSelector