var obscureAnimals = [
    {
        animalName: 'Red-Lipped Batfish',
        bioName: 'Ogcocephalus darwini',
        info: 'A fish of unusual morphology found around the Galapagos Islands and off Peru at depths of 10 to 249 ft. Red-lipped batfish are mainly known for their bright red lips. Batfish are not good swimmers; they use their highly adapted pectoral fins to "walk" on the ocean floor. When the batfish reaches maturity, its dorsal fin becomes a single spine-like projection (thought to function primarily as a lure for prey). Like other anglerfish, the red-lipped batfish has a structure on its head known as illicium. This structure is employed for attracting prey.',
        image: 'red-lipped.jpg',
        handler: function() {
            window.alert("woop")
        }
    },
    {
        animalName: 'Goblin Shark',
        bioName: 'Mitsukurina owstoni',
        info: 'A rare species of deep-sea shark. Sometimes called a "living fossil", it is the only extant representative of the family Mitsukurinidae, a lineage some 125 million years old. This pink-skinned animal has a distinctive profile with an elongated, flattened snout, and highly protrusible jaws containing prominent nail-like teeth. It is usually between 10 and 13 ft long when mature, though it can grow considerably larger. Goblin sharks inhabit upper continental slopes, submarine canyons, and seamounts throughout the world at depths greater than 330 ft, with adults found deeper than juveniles. Various anatomical features of the goblin shark, such as its flabby body and small fins, suggest that it is sluggish in nature. This species hunts for teleost fishes, cephalopods, and crustaceans both near the sea floor and in the middle of the water column. Its long snout is covered with ampullae of Lorenzini that enable it to sense minute electric fields produced by nearby prey, which it can snatch up by rapidly extending its jaws. Small numbers of goblin sharks are unintentionally caught by deepwater fisheries. The International Union for Conservation of Nature (IUCN) has assessed it as Least Concern, despite its rarity, citing its wide distribution and low incidence of capture.',
        image: 'goblin-shark.jpg',
        handler: function() {
            window.alert("doop")
        }
    },
    {
        animalName: 'Blue Dragon',
        bioName: 'Glaucus Atlanticus',
        info: 'A species of small, blue sea slug. These sea slugs are pelagic: they float upside down by using the surface tension of the water to stay up, where they are carried along by the winds and ocean currents. Glaucus atlanticus is camouflaged: the blue side of their body faces upwards, blending in with the blue of the water. The silver/grey side of the sea slugs faces downwards, blending in with the silvery surface of the sea.',
        image: 'glaucus-atlanticus.jpg'
    },
    {
        animalName: 'Blue Dragon',
        bioName: 'Glaucus Atlanticus',
        info: 'A species of small, blue sea slug. These sea slugs are pelagic: they float upside down by using the surface tension of the water to stay up, where they are carried along by the winds and ocean currents. Glaucus atlanticus is camouflaged: the blue side of their body faces upwards, blending in with the blue of the water. The silver/grey side of the sea slugs faces downwards, blending in with the silvery surface of the sea.',
        image: 'glaucus-atlanticus.jpg'
    },
    {
        animalName: 'Blue Dragon',
        bioName: 'Glaucus Atlanticus',
        info: 'A species of small, blue sea slug. These sea slugs are pelagic: they float upside down by using the surface tension of the water to stay up, where they are carried along by the winds and ocean currents. Glaucus atlanticus is camouflaged: the blue side of their body faces upwards, blending in with the blue of the water. The silver/grey side of the sea slugs faces downwards, blending in with the silvery surface of the sea.',
        image: 'glaucus-atlanticus.jpg'
    },
    {
        animalName: 'Blue Dragon',
        bioName: 'Glaucus Atlanticus',
        info: 'A species of small, blue sea slug. These sea slugs are pelagic: they float upside down by using the surface tension of the water to stay up, where they are carried along by the winds and ocean currents. Glaucus atlanticus is camouflaged: the blue side of their body faces upwards, blending in with the blue of the water. The silver/grey side of the sea slugs faces downwards, blending in with the silvery surface of the sea.',
        image: 'glaucus-atlanticus.jpg'
    }
]

var body = document.querySelector(".container-fluid")
//dynamically populate columns

var rowId = 0
var rowTarget = 0
for (var i = 0; i < obscureAnimals.length; i++) {
    if (i % 3 === 0) {
        console.log("building row", rowId)
        var row = document.createElement("div")
        row.classList.add("row")
        row.id = rowId
        body.appendChild(row)
        rowId += 1
    }

    var card = document.createElement("div")
    card.classList.add("card", "col-md-4")
    var animal = obscureAnimals[i]
    //above = animal is the current object we're iterating over
    var itemHTML = 
    //string interpolation within backticks
    `
    <div class="card-body">
    <h3 class="card-title text-white bg-dark">&nbsp;${animal.animalName}</h3>
    <p class="card-text">Type: ${animal.bioName}</p>
    <p class="card-text">${animal.info}</p>
    `;
    card.innerHTML = itemHTML;
    card.onclick = animal.handler
    var targetRow = document.getElementById(rowTarget)
    console.log("appending animal card to row", rowTarget, animal.animalName)
    targetRow.appendChild(card)
    if ((i + 1) % 3 === 0) {
        rowTarget += 1
    }


}
//build rows first, then iterate over rows just made
//
    //need more than one loop; first build rows, then iterate to build cards, need to know which row to find to plug
    //need container DOM object that says has one rwo with 3 thing in it
    //modulus operator in index to tell when hit 3rd one; 
    //figure out on index if need to close off row
    //first loop, put guard clause agains it bc of 0
    //always add one to index

    // var card = document.createElement("div")
    // card.className = "card-body"
    // card.innerHTML = itemHTML
    // var image = document.createElement("img")
    // image.src = obscureAnimals[i].image
    // var row = document.createElement("div")
    // row.className = "row"
    // row.appendChild(card)
    // var column = document.createElement("div")
    // column.className = "col-sm-4"
    // column.appendChild(row)


//


// for (var i = 0; i < obscureAnimals.length; i++) {
//     var card = document.createElement("div")
//     card.classList.add("card")
//     var image = document.createElement("img")

//     card.classList.add("card-img-top")
//     var cardBody = document.createElement("div")
//     cardBody.classList.add("card-body")
//     var cardTitle = document.createElement("h5")
//     cardTitle.classList.add("card-title")
//     var cardText = document.createElement("p")
//     cardText.classList.add("card-text")
//     var unorderedList = document.createElement("ul")
//     unorderedList.classList.add("list-group")
//     var listItem = document.createElement("li")
//     listItem.classList.add("list-group-item")
//     var linkDiv = document.createElement("div")
//     linkDiv.classList.add("card-body")
//     var image = document.createElement("a")
//     image.classList.add("card-link")
//     //HOW ADD HREF LINK?

//     image.src = obscureAnimals[i].image
//     cardTitle.innerHTML = obscureAnimals[i].animalName
//     cardText.innerHTML = obscureAnimals[i].info
//     listItem.innerHTML = obscureAnimals[i].bioName

//     card.appendChild(image)
//     card.appendChild(cardBody)
//     cardBody.appendChild(cardTitle)
//     cardBody.appendChild(cardText)
//     card.appendChild(unorderedList)
//     unorderedList.appendChild(listItem)
//     body.appendChild(card)


// }

