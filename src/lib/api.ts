import axios from "axios";

export async function fetcher<T>(link: string) {
    const res: { data: T } = await axios.get(`https://nobel.nobelcodelabs.com/wp-json/wp/v2/${link}`, {
        headers: {
            'Cache-Control': 'no-cache',
        }
    });
    return res.data;
}

export async function fetcherAcf<T>(link: string) {
    const res: { data: T } = await axios.get(`https://nobel.nobelcodelabs.com/wp-json/acf/v3/${link}`, {
        headers: {
            'Cache-Control': 'no-cache',
        }
    });
    return res.data;
}


