import client from '../../../apollo-client'
import { gql } from '@apollo/client'
import type { CalendarCourse, BannerOffering } from '../../../interfaces'
import Layout from '../../../components/Layout'
import CourseDetailsCard from '../../../components/CourseDetailsCard'

const Course = ({ course, offerings }: { course: CalendarCourse, offerings: BannerOffering[] }) => {
    return <Layout title={`${course.subject} ${course.number}`}>
        <div className='
            flex
            flex-col
            justify-start
            items-center
        '>
            <CourseDetailsCard course={course} offerings={offerings}/>
        </div>
    </Layout>
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
                getOfferings(number: $number, subject: $subject) {
                    prof_full
                    campus
                    rmp {
                    rating
                    rating_count
                    }
                    notes
                }
            }
        `,
        variables: {
            subject: params.subject.toUpperCase(),
            number: params.number
        }
    })

    return {
        props: {
            course: data.getCourseDetails[0],
            offerings: data.getOfferings
        }
    }
}