import React from 'react';
import type { CalendarCourse } from '../interfaces/index';
import CourseCard from "./CourseCard";

type Props = {
    courses: CalendarCourse[]
}

const CourseList = (props: Props) => {
  return (
    <div className='
        space-y-4
        my-4
    '>
        {props.courses.map((item, index) => <CourseCard key={index} course={item}/>)}
    </div>
  )
}

export default CourseList