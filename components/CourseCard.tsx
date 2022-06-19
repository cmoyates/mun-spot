import React from 'react'
import type {CalendarCourse} from "../interfaces/index";

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
    </div>
  )
}

export default CourseCard