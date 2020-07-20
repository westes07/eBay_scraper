function get_api_key(){
    let key = "Error: No data received";
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Basic Q29yYmluRXMtQnV5LVBSRC1iYzhlZTU1NzYtOGZiMTRiZGM6UFJELWM4ZWU1NTc2NWZmYi05MTIyLTQxYzMtYThmYi1lNDUw");
    myHeaders.append("Cookie", "ebay=%5Esbf%3D%23%5E; dp1=bu1p/QEBfX0BAX19AQA**62d391b8^");

    let urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("scope", "https://api.ebay.com/oauth/api_scope");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://api.ebay.com/identity/v1/oauth2/token", requestOptions)
        .then(response => response.text())
        .then(result => key = result)
        .catch(error => console.log('error', error));

    process.env.apiKey = key;
}

exports.handler = function(event, context, callback) {
    get_api_key();

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

