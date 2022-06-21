import React from 'react'
import type {CalendarCourse} from "../interfaces/index";
import Link from "next/link";

type Props = {
    course: CalendarCourse
}

const CourseCard = (props: Props) => {
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
            sm:text-2xl
            text-xl
            font-semibold
            mb-2
        '>{props.course.subject} {props.course.number}: {props.course.name}</h2>
        <p className='text-sm sm:text-base'>
            <span className='
                font-semibold
            '>
                "{props.course.name}"
            </span> 
            {` ${props.course.description}`}
        </p>
        <Link href={`/courses/${props.course.subject.toLowerCase()}/${props.course.number}`}>
            <a className='
                mt-2
                hover:underline
                w-max
                text-sm 
                sm:text-base
            '>
                View details...
            </a>
        </Link>
    </div>
  )
}

export default CourseCard