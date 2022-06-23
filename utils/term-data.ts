import { BannerOffering } from "../interfaces";

export const termNames = [
    "Fall",
    "Winter",
    "Spring"
]

export const termEndDates = [
    {month: 12, day: 16, yearOffset: 0},
    {month: 4, day: 21, yearOffset: 1},
    {month: 8, day: 12, yearOffset: 1}
]

export const isTermInFuture = (offering: BannerOffering) => {
    const termEndData = termEndDates[offering.term-1];
    const termEndDate = new Date(offering.year + termEndData.yearOffset, termEndData.month, termEndData.day)
    return termEndDate.getTime() > Date.now()
}