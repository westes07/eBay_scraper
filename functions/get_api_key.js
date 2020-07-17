
exports.handler = function(event, context, callback){
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

    callback(null, {
        statusCode: 200,
        body: "Key Stored"
    });

};