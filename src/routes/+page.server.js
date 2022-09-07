const api = import.meta.env.VITE_API;

export async function load({ }) {
    const baseUrl = `https://newsapi.org/v2/top-headlines?country=nl&apiKey=${api}`;
    const response = await fetch(baseUrl, {
        method: 'get',
    })
    let info = await response.json();
    info = info.articles;
    info = info.slice(0, 5);
    return { info }
}