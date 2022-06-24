const axios = require('axios');

async function main() {
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


}


async function getTopInfluencer() {
    let response = await axios.get("http://localhost:3000/top-influencer");
    return new Promise((resolve) => {
        resolve(`${response.data["username"]} with ${response.data["followers"]} followers`);
    });
}


async function getTopInfluencerInCategory(category: string) {
    let encodeQuery = encodeURI(category)
    let response = await axios.get(`http://localhost:3000/top-influencer-per-category?category=${encodeQuery}`);
    return new Promise((resolve) => {
        resolve(`${response.data["username"]} with ${response.data["followers"]} followers`);
    });
}


main().then();