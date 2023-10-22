let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
}

export const fetchNewsWithTag = async (page) => {
    const url = 'http://hn.algolia.com/api/v1/search?tags=front_page&page=';
    try {
        const response = await fetch(`${url}${page}`, {
            method: "GET",
            headers: headersList
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Fetching data from api(tag) got reject due to some reason.');
    }
};

export const fetchNewsWithQuery = async (query, page) => {
    const url = `http://hn.algolia.com/api/v1/search?query=${query}&page=${page}`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headersList
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Fetching data from api got reject due to some reason.');
        return [];
    }
};


export const fetchSingleNews = async (objectID) => {
    const url = 'http://hn.algolia.com/api/v1/items/';
    try {
        const response = await fetch(`${url}${objectID}`, {
            method: "GET",
            headers: headersList
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Fetching data from api got reject due to some reason.');
        return [];
    }
};
