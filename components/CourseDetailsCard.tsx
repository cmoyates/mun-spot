import React, { useState } from 'react'
import type {CalendarCourse, BannerOffering} from "../interfaces/index";
import StyledSelector from './StyledSelector';
import CourseAttributesDisclosure from './CourseAttributesDisclosure';
import { campusData } from "../utils/campus-data";

type Props = {
    course: CalendarCourse,
    offerings: BannerOffering[][]
}

const CourseDetailsCard = (props: Props) => {

    const [campus, setCampus] = useState<string>("St. John's");

    return (
        <div className='
            bg-white
            dark:bg-gray-800
            rounded-lg
            shadow-md
            p-4
            flex
            flex-col
        '>
            <h2 className='
                text-2xl
                font-semibold
                mb-2
            '>{props.course.subject} {props.course.number}: {props.course.name}</h2>
            <p>
                <span className='
                    font-semibold
                '>
                    &quot;{props.course.name}&quot;
                </span> 
                {` ${props.course.description}`}
            </p>
            <div className='
                mt-2
            '>
                <CourseAttributesDisclosure attributes={props.course.attributes}/>
            </div>
            <div className='
                flex 
                flex-row 
                justify-between 
                items-center
                mt-4
            '>
                <h3 className='text-xl font-semibold'>Offerings</h3>
                <StyledSelector value={campus} setValue={setCampus} data={campusData}/>
            </div>
        </div>
      )
}

export default CourseDetailsCard