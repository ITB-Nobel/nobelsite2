export type Author = {
    ID: number;
    user_firstname: string;
    user_lastname: string;
    nickname: string;
    user_nicename: string;
    display_name: string;
    user_email: string;
    user_url: string;
    user_registered: Date;
    user_description: string;
    user_avatar: string;
}

export type Photo = {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: Date;
    modified: Date;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
    sizes: Sizes;
}

export type Sizes = {
    thumbnail: string;
    "thumbnail-width": number;
    "thumbnail-height": number;
    medium: string;
    "medium-width": number;
    "medium-height": number;
    medium_large: string;
    "medium_large-width": number;
    "medium_large-height": number;
    large: string;
    "large-width": number;
    "large-height": number;
    "1536x1536": string;
    "1536x1536-width": number;
    "1536x1536-height": number;
    "2048x2048": string;
    "2048x2048-width": number;
    "2048x2048-height": number;
    "post-thumbnail": string;
    "post-thumbnail-width": number;
    "post-thumbnail-height": number;
}

// PRODI
export type ProdiACF = {
    activity_news_category: ActivityProdiCategory
    overview: ProdiOverview;
    curriculum: ProdiCurriculum;
    jenjang: string;
}

export type ProdiCurriculum = {
    title: string;
    description: string;
    image: string;
}

export type ProdiOverview = {
    jurusan: string;
    image: string;
    image_detail: string;
    description: string;
}

export type ProdiStudyPlan = {
    semester_1: string;
    semester_2: string;
    semester_3: string;
    semester_4: string;
    semester_5: string;
    semester_6: string;
    semester_7: string;
    semester_8: string;
    semester_11: string;
}

export type NewsACF = {
    title: string;
    description: string;
    date: string;
    photo: Photo;
    author: Author;
}

export type Dosen = {
    name: string;
    position: string;
    description: string;
    photo: Photo;
    prodi: {
        ID: number,
        post_name: string,
        post_title: string
    }[];
}


export type ActivityProdiCategory = {
    term_id:          number;
    name:             string;
    slug:             string;
    term_group:       number;
    term_taxonomy_id: number;
    taxonomy:         string;
    description:      string;
    parent:           number;
    count:            number;
    filter:           string;
}
