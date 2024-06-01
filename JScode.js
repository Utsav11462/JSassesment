let nftCollection = [];
function mintNFT(name, description, rarity) {
    const nftMetadata = {
        name: name,
        description: description,
        rarity: rarity
    };
 
    nftCollection.push(nftMetadata);
}

function listNFTs() {
    for(let i=0; i<nftCollection.length;i++)
    {
        console.log("\nName: " +nftCollection[i].name);
        console.log("Description: " +nftCollection[i].description);
        console.log("Rarity: " +nftCollection[i].rarity);
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

// Mint at least three NFTs.
mintNFT("CryptoPunk #3100", "One of the rarest and most sought-after CryptoPunks, featuring an alien character with a headband",  "Legendary" );
mintNFT("Bored Ape Yacht Club #8746", "A unique Bored Ape with a gold fur coat, laser eyes, and a sailor hat.", "Rare");
mintNFT("Axie Infinity Mystic", "A mystical Axie creature with powerful battle abilities and unique traits, only found in early game versions.","Rare");

listNFTs();

console.log("Total Supply of NFTs: " + getTotalSupply());
