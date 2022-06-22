import React from 'react'
import type {CalendarCourse, BannerOffering} from "../interfaces/index";
import OfferingDisclosure from './OfferingDisclosure';

type Props = {
    course: CalendarCourse,
    offerings: BannerOffering[]
}

const CourseDetailsCard = (props: Props) => {
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
                {/*<OfferingDisclosure label='Fall 2021'>
                    {props.offerings.map((item, index) => (
                        <p key={index}>{item.prof_full} {item.rmp.rating} with {item.rmp.rating_count} ratings</p>
                    ))}
                </OfferingDisclosure>*/}
            </div>
        </div>
      )
}

export default CourseDetailsCard