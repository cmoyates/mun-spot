import React, { useState } from 'react';
import StyledInput from '../../components/StyledInput';
import type { CalendarCourse, SubjectSelection } from '../../interfaces/index';
import client from '../../apollo-client';
import { gql } from '@apollo/client';
import CourseList from '../../components/CourseList';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import SubjectSelector from '../../components/SubjectSelector';
import Router from 'next/router'
import Layout from '../../components/Layout';

type Props = {}

const index = (props: Props) => {

    const [query, setQuery] = useState<string>("");
    const [courses, setCourses] = useState<CalendarCourse[]>([]);
    const [showTools, setShowTools] = useState<boolean>(false);
    const [subjectFilter, setSubjectFilter] = useState<SubjectSelection>({
        text: "All",
        code: ""
    })

    const search = async () => {
        const { data } = await client.query({
            query: gql`
            query CourseSearch($query: String!, $subject: String) {
                courseSearch(query: $query, subject: $subject) {
                    _id
                    name
                    number
                    description
                    subject
                }
            }
          `,
            variables: { query, subject: showTools ? subjectFilter.code : undefined }
        })
        setCourses(data.courseSearch);
    }

    return (
        <Layout title='Course Search'>
            <div
                style={{
                    "justifyContent": courses.length > 0 ? "start" : "center"
                }}
                className='
                flex
                flex-col
                justify-start
                items-center
                py-8
                px-96
                h-inherit
                flex-grow
            '
            >
                <div>
                    <h1 className='
                    text-5xl
                    font-semibold
                    mb-2
                '>Course Search</h1>
                    <form

                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className='
                        flex
                        flex-row
                        space-x-2
                        items-end
                    '>
                            <StyledInput
                                query={query}
                                setQuery={setQuery}
                            />
                            <button
                                className='
                                bg-blue-500
                                rounded-md
                                shadow-md
                                px-2
                                py-1
                                text-white
                                font-semibold
                                text-lg
                            '
                                onClick={search}
                            >
                                Search
                            </button>
                            <div
                                className='
                                flex
                                flex-row
                                items-center
                                cursor-pointer
                                w-min
                            '
                                onClick={() => setShowTools(!showTools)}
                            >
                                <span className='text-sm'>Tools</span>
                                {showTools
                                    ? <ChevronUpIcon className='w-4 h-4' />
                                    : <ChevronDownIcon className='w-4 h-4' />}
                            </div>
                        </div>
                        <div style={{ display: showTools ? "flex" : "none" }}>
                            <SubjectSelector
                                label='Subject Filter'
                                subject={subjectFilter}
                                setSubject={setSubjectFilter}
                                includeAll
                            />
                        </div>
                    </form>
                    <CourseList courses={courses} />
                </div>
            </div>
        </Layout>
    )
}

export default index