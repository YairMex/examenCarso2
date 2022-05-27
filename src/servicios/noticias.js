const API_URL = 'https://bing-news-search1.p.rapidapi.com';

export async function getAllNoticias() {
    try{
        const response = await fetch(`${API_URL}/news?rapidapi-key=3a0a002ac9mshcf676e0cdb23de0p132e7ejsn89497c1b7ad2`);
        const data = await response.json();
        return data.value;
    }catch (error){
        console.error(error);
    }

}

export async function getNoticia(url) {
    try{
        const response = await fetch(`${API_URL}/news/${url}?rapidapi-key=3a0a002ac9mshcf676e0cdb23de0p132e7ejsn89497c1b7ad2`);
        const data = await response.json();
        return data;
    }catch (error){
        console.error(error);
    }

}

export async function getAllEconomia() {
    try{
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
                'X-RapidAPI-Key': '3a0a002ac9mshcf676e0cdb23de0p132e7ejsn89497c1b7ad2'
            }
        };
        const response = await fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=Economia&freshness=Month&textFormat=Raw&safeSearch=Off', options);
        const data = await response.json();
        return data.value;
    }catch (error){
        console.error(error);
    }

}

export async function getAllEntretenimiento() {
    try{
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
                'X-RapidAPI-Key': '3a0a002ac9mshcf676e0cdb23de0p132e7ejsn89497c1b7ad2'
            }
        };
        const response = await fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=Entretenimiento&freshness=Month&textFormat=Raw&safeSearch=Off', options);
        const data = await response.json();
        return data.value;
    }catch (error){
        console.error(error);
    }

}

export async function getAllNegocios() {
    try{
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
                'X-RapidAPI-Key': '3a0a002ac9mshcf676e0cdb23de0p132e7ejsn89497c1b7ad2'
            }
        };
        const response = await fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=Negocios&count=12&freshness=Month&textFormat=Raw&safeSearch=Off', options);
        const data = await response.json();
        return data.value;
    }catch (error){
        console.error(error);
    }

}