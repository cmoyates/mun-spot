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
        w-4/5
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
                "{props.course.name}"
            </span> 
            {` ${props.course.description}`}
        </p>
        <Link href={`/courses/${props.course.subject}/${props.course.number}`}>
            <a className='
                mt-2
                hover:underline
            '>
                See more
            </a>
        </Link>
    </div>
  )
}

export default CourseCard