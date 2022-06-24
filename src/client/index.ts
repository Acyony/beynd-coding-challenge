const axios = require('axios');

async function main() {
    try {
        console.log(" ------ =^.^= ---- Top Influencer ------ =^.^= ----");
        console.log(await getTopInfluencer());
        console.log("------ =^.^= ----")

        console.log(" ------ =^.^= ---- Top Influencer in category Lifestyle------ =^.^= ----");
        console.log(await getTopInfluencerInCategory("Lifestyle"));
        console.log("------ =^.^= ----")

        console.log(" ------ =^.^= ---- Top Influencer in category Cinema & Actors/actresses------ =^.^= ----");
        console.log(await getTopInfluencerInCategory("Cinema & Actors/actresses"));
        console.log("------ =^.^= ----")

        console.log(" ------ =^.^= ---- Top Influencer in category Humor & Fun & Happiness------ =^.^= ----");
        console.log(await getTopInfluencerInCategory("Humor & Fun & Happiness"));
        console.log("------ =^.^= ----")

        console.log(" ------ =^.^= ---- Top Influencer in country Brazil------ =^.^= ----");
        console.log(await getTopInfluencerInCountry("Brazil"));
        console.log("------ =^.^= ----")

        console.log(" ------ =^.^= ---- Top Influencer in country India------ =^.^= ----");
        console.log(await getTopInfluencerInCountry("India"));
        console.log("------ =^.^= ----")
    } catch (e) {
        console.log(e);
    }

}

async function getTopInfluencer() {
    let response = await axios.get("http://localhost:9595/top-influencer");
    return new Promise((resolve) => {
        resolve(`${response.data["username"]} with ${response.data["followers"]} followers`);
    });
}


async function getTopInfluencerInCategory(category: string) {
    let encodeQuery = encodeURIComponent(category);
    let response = await axios.get(`http://localhost:9595/top-influencer-per-category?category=${encodeQuery}`);
    return new Promise((resolve) => {
        resolve(`${response.data["username"]} with ${response.data["followers"]} followers`);
    });
}

async function getTopInfluencerInCountry(country: string) {
    let encodeCountry = encodeURIComponent(country);
    let response = await axios.get(`http://localhost:9595/top-influencer-per-country?country=${encodeCountry}`);
    return new Promise((resolve) => {
        resolve(`${response.data["username"]} with ${response.data["followers"]} followers`);
    });
}


main().then();