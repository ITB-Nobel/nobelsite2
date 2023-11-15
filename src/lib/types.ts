export type EventType = {
    acf: EventACF
    id: string
    slug: string
    date: string
    title: string
    categories: string[]
    tags: string[]
}

export type EventACF = {
    image: Photo;
    title: string;
    start_registration: string;
    end_registration: string;
    event_start: string;
    event_end: string;
    place: string;
    map_place: boolean;
    registration_link: RegistrationLink;
    kuota: string;
    contact_name: string;
    contact_phone: string;
    description: string;
    author: Author;
}

export type RegistrationLink = {
    title: string;
    url: string;
    target: string;
}


export type StaffACF = {
    title: string;
    position: string;
    group: string;
    image: string;
    description: string;
}

export type StaffType = {
    acf: StaffACF,
    id: string,
    title: {
        renderd: string
    }
}


export type GeneralPageTypeACF = {
    "title": string,
    "color_title"?: string,
    "subtitle"?: string,
    "image"?: Photo,
    "description"?: string
}

export type GeneralPageType = {
    acf: GeneralPageTypeACF,
    id: string,
    title: {
        renderd: string
    }
}

export type DetailNewsType = { acf: NewsACF, slug: string, id: string, categories: string[], tags: string[] }

export type Category = {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
}

export type Tags = {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
}


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
    deskripsi_gambar: string;
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
    term_id: number;
    name: string;
    slug: string;
    term_group: number;
    term_taxonomy_id: number;
    taxonomy: string;
    description: string;
    parent: number;
    count: number;
    filter: string;
}

export type MatakuliahAcf = {
    nama_matakuliah: string;
    semester: string;
    prodi: {
        ID: number;
        post_author: string;
        post_date: Date;
        post_date_gmt: Date;
        post_content: string;
        post_title: string;
        post_excerpt: string;
        post_password: string;
        post_name: string;
        to_ping: string;
        pinged: string;
        post_modified: Date;
        post_modified_gmt: Date;
        post_content_filtered: string;
        post_parent: number;
        guid: string;
        menu_order: number;
        post_mime_type: string;
        comment_count: string;
    }[];
    sks: string;
}

