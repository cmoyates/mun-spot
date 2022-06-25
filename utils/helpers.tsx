import { CourseAttributes, BannerOffering } from "../interfaces";
import { termEndDates } from "./term-data";

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const attributesToJSX = (attributes: CourseAttributes) => {
    return Object.keys(attributes)
        .filter((key) => attributes[key] && key !== "__typename")
        .map((item, index) => (
            <p key={index}>
                <b>{item}:</b> {capitalizeFirstLetter(attributes[item])}
            </p>
        ));
};

export const isTermInFuture = (offering: BannerOffering) => {
    const termEndData = termEndDates[offering.term - 1];
    const termEndDate = new Date(
        offering.year + termEndData.yearOffset,
        termEndData.month,
        termEndData.day
    );
    return termEndDate.getTime() > Date.now();
};
