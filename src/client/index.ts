const axios = require('axios');

async function main() {
    console.log(" ------ =^.^= ---- Top Influencer ------ =^.^= ----");
    console.log(await getTopInfluencer());
}


async function getTopInfluencer() {
    let response = await axios.get("http://localhost:3000/top-influencer");
    return new Promise((resolve) => {
        resolve(`${response.data["username"]} with ${response.data["followers"]} followers`);
    });
}

main().then();