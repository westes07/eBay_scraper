let apiKey = 'v^1.1#i^1#p^1#I^3#r^0#f^0#t^H4sIAAAAAAAAAOVYXWwUVRTuttua8iP+EAUkZZmCgDCz87O7szuya5YuhDXQXdilwRLEOzN32ml3Z4a5d2gXJCk1IBB9wJhQ+RNMQPrQiCIGHkgE4l+IEKLig4IYYyRG8EHUBANxZrst20qg0lWbuPOwueeee+53vnPOvWeG7qiqfmLTwk2/j3XdV763g+4od7mY0XR1VeXs+yvKJ1WW0UUKrr0d0zrcnRWX5yKQzRjCUogMXUPQ057NaEjIC8OEZWqCDpCKBA1kIRKwJKSiixcJLEULhqljXdIzhCceCxOyj7YfXgqwDMtJCm9LtT6baT1MKLwPBGWZFn2iX+YDjD2PkAXjGsJAw2GCpVmapHmS4dM0J3CcQAcoJsA2Ep4GaCJV12wViiYiebhCfq1ZhPXOUAFC0MS2ESISjy5IJaLx2Pz69Fxvka1IgYcUBthCA0d1ugw9DSBjwTtvg/LaQsqSJIgQ4Y307jDQqBDtA3MP8PNUB4MiazMsB+UgL0tBsSRULtDNLMB3xuFIVJlU8qoC1LCKc3dj1GZDbIESLozqbRPxmMf5W2KBjKqo0AwT8+dFn4kmk0SkTjdFVZuPyHlWjkwujZGiFITQ7+cDZFARGZ8oS4U9eg0VGB60SZ2uyarDF/LU63getAHDwbSwRbTYSgktYUYV7IAp1vP30ecPNjrx7A2ghZs1J6Qwa3PgyQ/vTn7/aoxNVbQw7LcweCLPTpgAhqHKxODJfBoWMqcdhYlmjA3B621ra6PaOEo3m7wsTTPe5YsXpaRmmAVEn65T60i9+wJSzbsiQXslUgWcM2ws7Xaa2gC0JiLiY3gf6yvwPhBWZLD0L4Iin70Di6FkxQEBCEiswkLA0RLLlqI4IoX89Do4oAhyZBaYrRAbGSBBUrLzzMpCU5UFzq+wXFCBpBwIKaQvpCikfdoFSEaBkIZQFKVQ8H9SI0PN8hSUTIhLl+alSHG9ZUkMt9INAQYmmQbQGoDLLX88ya9Or9USLQvXtlpNRlMmpdS1N4WHWgi3d17SDZjUM6qUKykDTq0PmwXOlJPAxLkUzGRswbAcRY6jIyvIznpkGwCGSjk1TUl61qsD+zB3RKvyiIflc9Qw4tmshYGYgfESHuT//iF+W/dUu8MZUT7Z8esNpCr3tiZUPpoUWiNRJkS6ZdpdGZVwruu03go1+wTEpp7JQLOBGXag/7v4OrV+Wz6Gfk/cm9sl7k9GSFpLGdXOnlUjzbN/OpgqGGF3MOMP+UL+AB8MDMuvunw407mRdvss1BGG8t/tot3cEPpo78AX+khZ/sd0uo7Qna63y10u2ktPZ2rpqVUVy9wVYyYhFUNKBQqF1CbNfk81IdUKcwZQzfIql7EM/Di96BPC3pX0hP6PCNUVzOiiLwr05Fszlcy4R8falPAMT3McRwca6dpbs27mEff4l79fN5k92PXxAx3y8ROz0JTOD2746bH9Si5XZZm701XmPsTXHHR39Rz4UKz/ZsrZXRN3XwyB64e6r51+rv3dEPh09rXOiS987a46+tD4s0fG7WweteOVxt/S216aebVr357D0VFefubxred3kWd3/nzq6Pg3v3z2/Q2bu87MTfxy9YdXtQMngnuWJxrU5/ckjjy262T0fPmW1I74hA1rflp/+aOph45V7X79jaaV57r2X/TG3hvXDC83x6pnbZzhWZ+8MufxOfx3S29219Tsb6+Z8euKUWOqjl1YUW4d/uyTzQ+vvvjVqSuhp7ayb134Q55znTvt/zxxY6O17kFu2sTEO22XJteeP8OFuru34e724zvN3d966l78IjXlyZsTesienu3nJrlatmx/bd/MSyef7g3fn5W93BvcEQAA';
let appID = 'Q29yYmluRXMtQnV5LVBSRC1iYzhlZTU1NzYtOGZiMTRiZGM6UFJELWM4ZWU1NTc2NWZmYi05MTIyLTQxYzMtYThmYi1lNDUwCg==';
//let appId = 'Q29yYmluRXMtQnV5LVBSRC1iYzhlZTU1NzYtOGZiMTRiZGM=:UFJELWM4ZWU1NTc2NWZmYi05MTIyLTQxYzMtYThmYi1lNDUw';
let searchParameters;

function keyword_search(parameterString) {
    fetch('https://api.ebay.com/buy/browse/v1/item_summary/search?q=drone&limit=5&filter=price:[300..800],priceCurrency:USD,conditions:{NEW}', {
        headers: {
            Authorization: 'Basic ' + appID,
            Authentication: 'Basic ' + apiKey
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log("PANIC: " + err)
        })
}

function check_token() {

}

function get_api_key(){
    fetch('https://api.ebay.com/identity/v1/oauth2/token', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + appID
        },
        body: 'grant_type=client_credentials&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope'
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log("PANIC: " + err)
        })
}

function download_output() {

}