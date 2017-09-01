var scenes = ['fashionscene', `airportscene`, `beachscene`, `cityStreetscene`, `cruisescene`, `desertscene`, `grandCentralscene`, `officescene`, `pondscene`, `poolscene`, `shipscene`, `fashionshowscene`]
// var scenes = [`fashionscene`]
var score = 0
var allScenes = document.getElementsByClassName(`scenes`)
var homescene = document.getElementById('home')
var airportscene = document.getElementById('airport')
var beachscene = document.getElementById('beach')
var cityStreetscene = document.getElementById('cityStreet')
var cruisescene = document.getElementById('cruise')
var desertscene = document.getElementById('desert')
var grandCentralscene = document.getElementById('grandCentral')
var officescene = document.getElementById('office')
var pondscene = document.getElementById('pond')
var poolscene = document.getElementById('pool')
var shipscene = document.getElementById('ship')
var fashionscene = document.getElementById('fashionshow')
var background = document.getElementById('background')
var words = document.getElementById('word')
var camerapos = document.getElementById('camera')

function changeScene() {
    homescene.setAttribute("visible", "false")

    var word = document.getElementById('words')

    // var buttons = document.getElementById(`buttons`)
    // camerapos.setAttribute("position", "0 -100 -0")
    var newFound = true

    var nextScene = scenes[Math.floor(Math.random() * scenes.length)]

    console.log(scenes)

    if (nextScene == "airportscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -100 -0")
        airportscene.setAttribute("visible", "true")
        words.setAttribute("value", "TERMINAL")
        words.setAttribute("position", "-6 -100 0")
        background.setAttribute("src", "airport.jpg")
        scenes.splice(scenes.indexOf(`airportscene`), 1)
        newFound = false
    }
    else if (nextScene == "beachscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -200 -0")
        beachscene.setAttribute("visible", "true")
        background.setAttribute("src", "beach.jpg")
        words.setAttribute("value", "BEACH")
        words.setAttribute("position", "-6 -200 0")
        scenes.splice(scenes.indexOf(`beachscene`), 1)
        newFound = false
    }
    else if (nextScene == "cityStreetscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -300 -0")
        cityStreetscene.setAttribute("visible", "true")
        background.setAttribute("src", "cityStreet.jpg")
        words.setAttribute("value", "CITY STREET")
        words.setAttribute("position", "-6 -300 0")
        words.setAttribute("color", "black")
        scenes.splice(scenes.indexOf(`cityStreetscene`), 1)
        newFound = false
    }
    else if (nextScene == "cruisescene") {
        newFound = true
        camerapos.setAttribute("position", "0 -400 -0")
        cruisescene.setAttribute("visible", "true")
        background.setAttribute("src", "cruise.jpg")
        words.setAttribute("value", "CRUISE DOCK")
        words.setAttribute("position", "-6 -400 0")
        scenes.splice(scenes.indexOf(`cruisescene`), 1)
        newFound = false
    }
    else if (nextScene == "desertscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -500 -0")
        desertscene.setAttribute("visible", "true")
        background.setAttribute("src", "desert.jpg")
        words.setAttribute("value", "DESERT")
        words.setAttribute("position", "-6 -500 0")
        scenes.splice(scenes.indexOf(`desertscene`), 1)
        newFound = false
    }
    else if (nextScene == "grandCentralscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -600 -0")
        grandCentralscene.setAttribute("visible", "true")
        background.setAttribute("src", "grandCentral.jpg")
        words.setAttribute("value", "GRAND CENTRAL STATION")
        words.setAttribute("position", "-6 -600 0")
        scenes.splice(scenes.indexOf(`grandCentralscene`), 1)
        newFound = false
    }
    else if (nextScene == "officescene") {
        newFound = true
        camerapos.setAttribute("position", "0 -700 -0")
        officescene.setAttribute("visible", "true")
        background.setAttribute("src", "office.jpg")
        words.setAttribute("value", "TECH OFFICE")
        words.setAttribute("position", "-6 -700 0")
        scenes.splice(scenes.indexOf(`officescene`), 1)
        newFound = false
    }
    else if (nextScene == "pondscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -800 -0")
        pondscene.setAttribute("visible", "true")
        background.setAttribute("src", "pond.jpg")
        words.setAttribute("value", "POND")
        words.setAttribute("position", "-6 -800 0")
        scenes.splice(scenes.indexOf(`pondscene`), 1)
        newFound = false
    }
    else if (nextScene == "poolscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -900 -0")
        poolscene.setAttribute("visible", "true")
        background.setAttribute("src", "pool.jpg")
        words.setAttribute("value", "POOL DECK")
        words.setAttribute("position", "-6 -900 0")
        scenes.splice(scenes.indexOf(`poolscene`), 1)
        newFound = false
    }
    else if (nextScene == "shipscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -1000 -0")
        shipscene.setAttribute("visible", "true")
        background.setAttribute("src", "ship.jpg")
        words.setAttribute("value", "SAIL BOAT")
        words.setAttribute("position", "-6 -1000 0")
        words.setAttribute("color", "pink")
        scenes.splice(scenes.indexOf(`shipscene`), 1)
        newFound = false
    }

    else if (nextScene == "fashionscene") {
        newFound = true
        camerapos.setAttribute("position", "0 -1100 -0")
        console.log(camerapos.getAttribute("position"))
        fashionscene.setAttribute("visible", "true")
        background.setAttribute("src", "fashionshow.jpg")
        words.setAttribute("value", "FASHION SHOW")
        words.setAttribute("position", "-6 -1100 0")
        words.setAttribute("color", "pink")
        scenes.splice(scenes.indexOf(`fashionscene`), 1)
        newFound = false
    }


    // console.log(scenes.length)

    if (scenes.length < 1) {
        scenes = [`airportscene`, `beachscene`, `cityStreetscene`, `cruisescene`, `desertscene`, `grandCentralscene`, `officescene`, `pondscene`, `poolscene`, `shipscene`, `fashionscene`]
    }
}


function rightAnswer() {
    changeScene()
    score++

    var scorePrint = document.getElementsByClassName(`scoreText`)
    for (var i = 0; i < scorePrint.length; i++) {
        scorePrint[i].setAttribute("value", `Score: ${score}`)
    }
}

function hint(scene) {
    var text = document.getElementById('deshinttext')
    text.setAttribute("visible", "true")
}


function reset() {
    scenes = [`airportscene`, `beachscene`, `cityStreetscene`, `cruisescene`, `desertscene`, `grandCentralscene`, `officescene`, `pondscene`, `poolscene`, `shipscene`, `fashionscene`]
    var message = document.getElementById('restartmessage')
    message.setAttribute("value", `You got ${score} right!`)
    message.setAttribute("visible", "true")
    score = 0
    background.setAttribute("src", "white.png")
    background.setAttribute("color", "white")
    homescene.setAttribute("visible", "true")
    airportscene.setAttribute("visible", "false")
    beachscene.setAttribute("visible", "false")
    cityStreetscene.setAttribute("visible", "false")
    cruisescene.setAttribute("visible", "false")
    desertscene.setAttribute("visible", "false")
    grandCentralscene.setAttribute("visible", "false")
    officescene.setAttribute("visible", "false")
    pondscene.setAttribute("visible", "false")
    poolscene.setAttribute("visible", "false")
    shipscene.setAttribute("visible", "false")
    fashionscene.setAttribute("visible", "false")
    camerapos.setAttribute("position", "0 0 0")
}
