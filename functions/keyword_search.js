export function handler(event, context, callback) {
    fetch("https://ebayscraper.netlify.app/.netlify/functions/get_api_key")
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(err => console.log('Error', err));

    let apiKey = process.env.apiKey;
    let search_result;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + apiKey);
    myHeaders.append("Cookie", "ebay=%5Esbf%3D%23%5E; dp1=bu1p/QEBfX0BAX19AQA**62d391b5^");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=108765&q=Beatles&filter=price:[200..500]&filter=priceCurrency:USD&limit=10", requestOptions)
        .then(response => response.text())
        .then(result => search_result = result)
        .catch(error => console.log('error', error));

    callback(null, {
        statusCode: 200,
        body: search_result
    })
}

