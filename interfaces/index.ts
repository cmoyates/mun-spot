export type CourseAttributes = {
    AR?: string;
    CH?: string;
    CO?: string;
    CR?: string;
    LC?: string;
    LH?: string;
    OR?: string;
    PR?: string;
    UL?: string;
};

export type CalendarCourse = {
    name: string;
    number: string;
    description: string;
    subject: string;
    attributes: CourseAttributes;
};

export type SubjectSelection = {
    code: string;
    text: string;
};

export type BannerOffering = {
    prof_full: string;
    campus: string;
    rmp: {
        rating: string;
        rating_count: string;
        legacy_id: string;
    };
    notes: string[];
    term: number;
    year: number;
    section: string;
    type: string;
};
