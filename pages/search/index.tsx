import React, {useState} from 'react';
import StyledInput from '../../components/StyledInput';
import type { CalendarCourse } from '../../interfaces/index';
import client from '../../apollo-client';
import { gql } from '@apollo/client';
import CourseList from '../../components/CourseList';

type Props = {}

const index = (props: Props) => {

    const [query, setQuery] = useState<string>("");
    const [courses, setCourses] = useState<CalendarCourse[]>([])

    const search = async () => {
        const { data } = await client.query({
            query: gql`
            query CourseSearch($query: String!) {
                courseSearch(query: $query) {
                    _id
                    name
                    number
                    description
                    subject
                }
            }
          `,
            variables: {query}
        })
        setCourses(data.courseSearch);
    }

    return (
        <div className='
            bg-slate-200
            flex
            flex-col
            justify-start
            items-center
            p-8
            min-h-screen
        '>
            <div>
                <h1 className='
                    text-5xl
                    font-semibold
                    mb-2
                '>Course Search</h1>
                <form 
                className='
                    flex
                    flex-row
                    space-x-2
                '
                onSubmit={(e)=>e.preventDefault()}
                >
                    <StyledInput
                        query={query}
                        setQuery={setQuery}
                    />
                    <button 
                        className='
                            bg-blue-500
                            rounded-sm
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
                </form>
                <CourseList courses={courses}/>
            </div>
        </div>
    )
}

export default index