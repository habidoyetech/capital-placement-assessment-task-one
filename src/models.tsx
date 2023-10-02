

export interface childrenProp {
    children: React.ReactNode
}

export interface SidebarLinkProps extends childrenProp {
    clicked?: boolean
}

export interface User {
    user: UserData
}

export interface UserData {
    id: Number,
    firstName: string,
    lastName: string,
    middleName?: string,
    nationality: string,
    education: Education
    hashtags: string[],
    tags: string[],
    workExperience: Experience[];
    email?: string
    tel?: string;
    nationalId?: string;
    dateOfBirth?: string;
    gender?: string;
    
}

interface Education {
    degree: string,
    from: string,
    to: string,
    school: string,
    location: string
}

interface Experience {
    id: Number,
    companyName: string,
    position: string,
    location: string,
    from: string,
    to: string
}

export interface AppApiResponseData {
    id: string;
    type: string;
    attributes: AppApiAttributes
}

interface AppApiAttributes {
    coverImage: string;
    personalInformation: AppApiPersonalInformation;
    profile: Profile
    customisedQuestions: QuestionContent[]
}

interface AppApiPersonalInformation {
    firstName: AppApiPersonalInformationContent;
    lastName: AppApiPersonalInformationContent;
    emailId: AppApiPersonalInformationContent;
    phoneNumber: AppApiPersonalInformationContent;
    nationality: AppApiPersonalInformationContent;
    currentResidence: AppApiPersonalInformationContent;
    idNumber: AppApiPersonalInformationContent;
    dateOfBirth: AppApiPersonalInformationContent;
    gender: AppApiPersonalInformationContent;
    personalQuestions: QuestionContent[];
}

export interface personalQuestions  {
    personalQuestions: QuestionContent[];
}

interface AppApiPersonalInformationContent {
    internalUse: boolean;
    show: boolean;
}

export interface QuestionContent {
    id: string | undefined;
    type: string | undefined;
    question: string | undefined;
    choices: string[] | undefined;
    maxChoice:number | undefined;
    disqualify: boolean | undefined;
    other: boolean | undefined
}

export interface Profile {
    education: ProfileContent | undefined;
    experience: ProfileContent | undefined;
    resume: ProfileContent| undefined;
    profileQuestions: QuestionContent[] | undefined
}

interface ProfileContent {
    mandatory: boolean;
    show: boolean;
}

export interface AdditionalQuestion {
    customizedQuestions: QuestionContent[] | undefined
}