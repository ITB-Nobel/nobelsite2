export async function fetcher(link: string) {
    const response = await fetch(`https://nobel.nobelcodelabs.com/wp-json/wp/v2/${link}`)
    const data = await response.json()
    return data
}


