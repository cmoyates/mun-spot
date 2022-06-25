import { gql } from "@apollo/client";
import React from "react";
import client from "../../../apollo-client";
import CourseCard from "../../../components/CourseCard";
import Layout from "../../../components/Layout";
import { CalendarCourse } from "../../../interfaces";
import { subjectData } from "../../../utils/subject-data";

type Props = {
    subject: string;
    courses: CalendarCourse[];
    subjectName: string;
};

const Index = (props: Props) => {
    return (
        <Layout title={props.subject.toUpperCase()}>
            <div className="space-y-4">
                {props.courses.map((item, index) => (
                    <CourseCard key={index} course={item} />
                ))}
            </div>
        </Layout>
    );
};

export default Index;

export async function getStaticProps({
    params,
}: {
    params: { subject: string };
}) {
    const { data } = await client.query({
        query: gql`
            query Query($subject: String!) {
                getCourseDetails(subject: $subject) {
                    name
                    number
                    description
                    subject
                }
            }
        `,
        variables: {
            subject: params.subject.toUpperCase(),
        },
    });

    return {
        props: {
            subject: params.subject,
            courses: data.getCourseDetails,
        },
    };
}

export async function getStaticPaths() {
    const paths: any[] = subjectData.map((item) => ({
        params: { subject: item.code.toLowerCase() },
    }));

    return {
        paths,
        fallback: false,
    };
}
