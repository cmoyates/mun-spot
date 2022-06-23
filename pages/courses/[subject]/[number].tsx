import client from '../../../apollo-client'
import { gql } from '@apollo/client'
import type { CalendarCourse, BannerOffering } from '../../../interfaces'
import Layout from '../../../components/Layout'
import CourseDetailsCard from '../../../components/CourseDetailsCard'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Course = ({ course, offerings }: { course: CalendarCourse | null, offerings: BannerOffering[][] }) => {

    const router = useRouter();

    useEffect(() => {
        if (!course) router.push("/courses/invalid")
    }, [course, router])
    
    if (!course) return ""
    
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
            query Query($number: String!, $subjectCode: String!, $subject: String!) {
                getOfferings(number: $number, subject_code: $subjectCode) {
                    prof_full
                    campus
                    rmp {
                    rating
                    rating_count
                    legacy_id
                    }
                    term
                    year
                    notes
                    section
                    type
                }
                getCourseDetails(subject: $subject, number: $number) {
                    name
                    number
                    description
                    subject
                    attributes {
                        AR
                        CH
                        CO
                        CR
                        LC
                        LH
                        OR
                        PR
                        UL
                    }
                }
            }
        `,
        variables: {
            subjectCode: params.subject.toUpperCase(),
            subject: params.subject.toUpperCase(),
            number: params.number
        }
    })

    return {
        props: {
            course: data.getCourseDetails[0] || null,
            offerings: data.getOfferings
        }
    }
}