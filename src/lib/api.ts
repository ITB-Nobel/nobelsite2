import axios from "axios";

export async function fetcher<T>(link: string) {
    // const res: { data: T } = await axios.get(`https://nobel.nobelcodelabs.com/wp-json/wp/v2/${link}`, {
    //     headers: {
    //         'Cache-Control': 'no-cache',
    //     }
    // });
    const res = await fetch(`https://nobel.nobelcodelabs.com/wp-json/wp/v2/${link}`, { next: { revalidate: 60 } })
    return await res.json()
}

export async function fetcherAcf<T>(link: string) {
    // const res: { data: T } = await axios.get(`https://nobel.nobelcodelabs.com/wp-json/acf/v3/${link}`, {
    //     headers: {
    //         'Cache-Control': 'no-cache',
    //     }
    // });
    // return res.data;

    const res = await fetch(`https://nobel.nobelcodelabs.com/wp-json/acf/v3/${link}`, { next: { revalidate: 60 } })
    return await res.json()
}


