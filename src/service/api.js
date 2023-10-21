let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
}

export const fetchNewsWithTag = async () => {
    const url = 'http://hn.algolia.com/api/v1/search?tags=front_page';
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headersList
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Fetching data from api got reject due to some reason.');
    }
};

export const fetchNewsWithQuery = async (query) => {
    const url = 'http://hn.algolia.com/api/v1/search?query=';
    try {
        const response = await fetch(`${url}${query}`, {
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
