import React, { useState } from "react";
import type { CalendarCourse, BannerOffering } from "../interfaces/index";
import StyledSelector from "./StyledSelector";
import { campusData } from "../utils/campus-data";
import StyledDisclosure from "./StyledDisclosure";
import { attributesToJSX, isTermInFuture } from "../utils/helpers";
import { termNames, termEndDates } from "../utils/term-data";
import InlineDisclosure from "./InlineDisclosure";

type Props = {
    course: CalendarCourse;
    offerings: BannerOffering[][];
};

const CourseDetailsCard = (props: Props) => {
    const [campus, setCampus] = useState<string>("St. John's");

    return (
        <div
            className="
                flex
                flex-col
                rounded-lg
                bg-white
                p-4
                shadow-md
                dark:bg-gray-800
            "
        >
            <h2
                className="
                    mb-2
                    text-2xl
                    font-semibold
                "
            >
                {props.course.subject} {props.course.number}:{" "}
                {props.course.name}
            </h2>
            <p>
                <span
                    className="
                        font-semibold
                    "
                >
                    &quot;{props.course.name}&quot;
                </span>
                {` ${props.course.description}`}
            </p>
            <div
                className="
                mt-2
            "
            >
                <StyledDisclosure label="Attributes">
                    {attributesToJSX(props.course.attributes)}
                </StyledDisclosure>
            </div>
            <div
                className="
                    mt-4 
                    flex 
                    flex-row 
                    items-center
                    justify-between
                "
            >
                <h3 className="text-xl font-semibold">Offerings</h3>
                <StyledSelector
                    value={campus}
                    setValue={setCampus}
                    data={campusData}
                />
            </div>
            <div className="mt-2 space-y-1">
                {props.offerings
                    .filter(
                        (offering) =>
                            offering[0] &&
                            offering[0].campus === campus &&
                            isTermInFuture(offering[0])
                    )
                    .map((item, index) => {
                        const termIndex = item[0].term - 1;
                        return (
                            <StyledDisclosure
                                key={index}
                                label={`${termNames[termIndex]} ${
                                    item[0].year +
                                    termEndDates[termIndex].yearOffset
                                }`}
                            >
                                <div className="my-1 space-y-1">
                                    {item.map((item, index) => (
                                        <div key={index}>
                                            <StyledDisclosure
                                                label={`${item.type} ${
                                                    item.section
                                                }: ${
                                                    item.prof_full ||
                                                    "Prof Unavailable"
                                                }`}
                                            >
                                                {item.prof_full
                                                    ? `Prof: ${item.prof_full}, ${item.rmp.rating}/5 with ${item.rmp.rating_count} ratings`
                                                    : "Unavailable"}
                                            </StyledDisclosure>
                                        </div>
                                    ))}
                                </div>
                            </StyledDisclosure>
                        );
                    })}
            </div>
            <div className="mt-4">
                <InlineDisclosure label="Previous Offerings">
                    {props.offerings
                        .filter(
                            (offering) =>
                                offering[0] &&
                                offering[0].campus === campus &&
                                !isTermInFuture(offering[0])
                        )
                        .map((item, index) => {
                            const termIndex = item[0].term - 1;
                            return (
                                <div className="mt-1" key={index}>
                                    <StyledDisclosure
                                        label={`${termNames[termIndex]} ${
                                            item[0].year +
                                            termEndDates[termIndex].yearOffset
                                        }`}
                                    >
                                        <div className="my-1 space-y-1">
                                            {item.map((item, index) => (
                                                <div key={index}>
                                                    <StyledDisclosure
                                                        label={`${item.type} ${
                                                            item.section
                                                        }: ${
                                                            item.prof_full ||
                                                            "Prof Unavailable"
                                                        }`}
                                                    >
                                                        {item.prof_full
                                                            ? `Prof: ${item.prof_full}, ${item.rmp.rating}/5 with ${item.rmp.rating_count} ratings`
                                                            : "Unavailable"}
                                                    </StyledDisclosure>
                                                </div>
                                            ))}
                                        </div>
                                    </StyledDisclosure>
                                </div>
                            );
                        })}
                </InlineDisclosure>
            </div>
        </div>
    );
};

export default CourseDetailsCard;
