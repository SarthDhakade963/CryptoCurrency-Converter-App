let btc = document.querySelector(".bitcoin-rate");
let eth = document.querySelector(".etherium-rate");
let dgc = document.querySelector(".dogecoin-rate");

async function fetchData() {
    let response = await fetch("http://api.coinlayer.com/live?access_key=0c22957eaf863cf2240ed21b401229dc");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    let data = await response.json();
    btc.innerHTML = "$" + data.rates.BTCS;
    eth.innerHTML = "$" + data.rates.ETH;
    dgc.innerHTML = "$" + data.rates.DOGE;
}

fetchData();