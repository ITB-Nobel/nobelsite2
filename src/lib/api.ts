import axios from "axios";

export  async function fetcher(link: string) {
    const res = await axios.get(`https://nobel.nobelcodelabs.com/wp-json/wp/v2/${link}`);
    return res.data;

}

export async function fetcherAcf(link: string) {
    const res = await axios.get(`https://nobel.nobelcodelabs.com/wp-json/acf/v3/${link}`);
    return res.data;
}


