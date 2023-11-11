export async function fetcher(link: string) {
    const response = await fetch(`https://nobel.nobelcodelabs.com/wp-json/wp/v2/${link}`)
    const data = await response.json()
    return data
}

export async function fetcherAcf(link: string) {
    const response = await fetch(`https://nobel.nobelcodelabs.com/wp-json/acf/v3/${link}`)
    const data = await response.json()
    return data
}


