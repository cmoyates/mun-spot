import client from '../../../apollo-client'
import { gql } from '@apollo/client'
import type { CalendarCourse } from '../../../interfaces'
import CourseCard from '../../../components/CourseCard'
import Head from 'next/head'

const Course = ({ course }: { course: CalendarCourse }) => {
    return <div className='
        bg-slate-200
        flex
        flex-col
        justify-start
        items-center
        p-8
    '>
        <Head>
            <title>{course.subject} {course.number}</title>
        </Head>
        <CourseCard
            course={course}
        />
    </div>
}

export default Course

export async function getServerSideProps({ params }: { params: { subject: string, number: string } }) {
    const { data } = await client.query({
        query: gql`
        query Query($number: String, $subject: String) {
          getCourseDetails(number: $number, subject: $subject) {
            _id
            name
            number
            description
            subject
          }
        }
      `,
        variables: {
            subject: params.subject,
            number: params.number
        }
    })

    return {
        props: {
            course: data.getCourseDetails[0]
        }
    }
}