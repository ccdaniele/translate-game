const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const GAME_URL = `${BASE_URL}/games`
const CATEGORY_URL = `${BASE_URL}/categories`
const WORD_URL = `${BASE_URL}/words`




points = 0

const main =() => {
    createUser()
    fetchCategories()
    hello()
    
}



function test(){
    let b = 'prueba'
    return b
}

let showLogin = false;
const createUser = () => {

    const formLogin = document.getElementById('login')
    formLogin.addEventListener('submit', function(event){

    event.preventDefault()

    const div = document.getElementById('loginForm')
        
    showLogin = !showLogin
    if (showLogin) {
        div.style.display = "none"
        
    } else {
        div.style.display = "block"
    }

    createGame()



    const newUser = {
        name: event.target[0].value,
        point: 0
    }
    
    let newObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
    },
        body: JSON.stringify(newUser)
    } 
    
    fetch('http://localhost:3000/users', newObj)
    .then(resp => resp.json())
    .then(user => renderUser(user))

    formLogin.reset()
    
    })
}
    
const renderUser = (user) => {
    userName = user.name
    userId = parseInt(user.id, 10) 

    const header = document.querySelector('header')
    const h4 = document.createElement('h4')

    h4.dataset.id = user.id 
    h4.innerText = `Hello ${user.name}, ` + `you have ${user.point} points.`

    header.append(h4)
    
}



const createGame = () => {
    const div = document.getElementById('gameForm')
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }

    const formGame = document.getElementById('game')
    formGame.addEventListener('submit', function(event){
        event.preventDefault()
        // clock()

        if (div.style.display === "block") {
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }

        
        const gameType = {
            user_id: userId,

            language: event.target[0].value, 

            category_id: parseInt(event.target[1].value, 10) 

        }
    
        let gameObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(gameType)
        } 
        
        fetch('http://localhost:3000/games', gameObj)
        .then(resp => resp.json())
        .then(game => shuffleDeck(game))

        formGame.reset()
    })
    
}


const fetchCategories = () => {

    fetch(CATEGORY_URL)
    .then(resp => resp.json())
    .then(categories => {
        
        allCategories = categories
        
        })

}

// // Fisher-Yates (aka Knuth) Shuffle
const shuffle = (array) => {
    let d = array
   let w = d.map((a) => ({sort: Math.random(), value: a}))
    let t = w.sort((a, b) => a.sort - b.sort)
  let x = t.map((a) => a.value)
  return x
}

const getMatch = (a, b) => {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i].id === b[e].id ) matches.push( a[i] );
        }
    }
    return matches;
}


const shuffleDeck = (game) => {

    // match the user category selection to category api by id
    oneCategory = allCategories.find(category => category.id === game.category.id)

    // two seprate arrays 
    imageArray = oneCategory.images
    wordArray = oneCategory.words

    // shuffle only word array
    shuffledWordArray = shuffle(wordArray)

    // slice shuffled word array to 5 words
    slicedWordArray = shuffledWordArray.slice(0,5)

    // match the image array ids to the sliced word array ids
    matchImageArray = getMatch(imageArray, slicedWordArray)

    // merge 5 image array & 5 word array to one new array
    matchedArray = matchImageArray.concat(slicedWordArray)
    
    // shuffle merged array 
    shuffleMatchedArray = shuffle(matchedArray)
debugger
    // render shuffled deck
    renderGame(shuffleMatchedArray)

}

// ------- cards --------

const renderGame = (shuffleMatchedArray) => {

    const mainDiv = document.getElementById('mainDiv')
    const h3 = document.createElement('h3')
    h3.style.textAlign = 'center'
    h3.innerText = "Click on any card to begin"

    mainDiv.append(h3)


    const gameDiv = document.getElementById('mainGame')

    if (gameDiv.style.display === "none") {
        gameDiv.style.display = "block";
    } else {
        gameDiv.style.display = "none";
    }

    gameDiv.innerHTML = ""
    
    shuffleMatchedArray.forEach(card => {

        const div = document.createElement('div')
        const p = document.createElement('p')
        p.style.color = "white"
        const h1 = document.createElement('h1')

        div.dataset.view = "card"
        div.dataset.id = card.id
        div.dataset.look = "visible"

// ------ starts click actions -----
        
        div.onclick = function() {

            (this.className === 'flipped')? reverse(this,card, p, h1) : flip(this,card, p, h1) 
                
        } // closes onclick

        div.append(p, h1)
        gameDiv.append(div)

    }) // closes forEach

 

} // finish rendercards

function flip(element,card, p, h1){
        element.className = 'flipped'
        if (card.name) {
            p.innerText = card.name 
        }   else {
            h1.innerText = card.image
            }
            // debugger -------- INSERT GOOGLE TRANSLATOR------

            checkPartner(element,card, p, h1)
    }

function reverse(element,card, p, h1){

    element.className = 'reverse'
    if (card.name) {
        p.innerText = ''
    }   else {
        h1.innerText = ''
        }
}

// function clock(){
//     var minutesLabel = document.getElementById("minutes");
//     var secondsLabel = document.getElementById("seconds");
//     var totalSeconds = 0;
//     setInterval(setTime, 1000);

//     function setTime(){
//         ++totalSeconds;
//         secondsLabel.innerHTML = pad(totalSeconds%60);
//         minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
//     }

//     function pad(val){
//         var valString = val + "";
//         if(valString.length < 2)
//         {
//             return "0" + valString;
//         }
//         else
//         {
//             return valString;
//         }
//     }

// }


// TO DO: buttons need to work
const finishGame = () => {

   const div = document.getElementById('mainGame')
   div.innerHTML = ""

   const mainDiv = document.getElementById('mainDiv')

   const h2 = document.createElement('h2')
   h2.innerText = "Woo hoo! You've finished the game!"
   h2.style.textAlign = 'center'

   const pTotal = document.createElement('p')
   pTotal.innerText = `${userName}, ` + `you have a total of ${points} points.`
   pTotal.style.textAlign = 'center'
   

   const playAgain = document.createElement('INPUT')
   playAgain.setAttribute('type', 'submit')
   playAgain.setAttribute('value', 'Play Again?')
   playAgain.style.textAlign = 'center'
   playAgain.addEventListener('click', function(event){
       createGame()
    })
    
    const br = document.createElement('br')

   const logOff = document.createElement('INPUT')
   logOff.setAttribute('type', 'submit')
   logOff.setAttribute('value', 'Sign Off')
   logOff.style.textAlign = 'center'
   logOff.addEventListener('submit', function(event){
       main()
   })


   div.append(h2, pTotal, playAgain, br, logOff)
//    mainDiv.append(playAgain, logOff)
   
}

let container = []
let i = 0

function checkPartner(element,card, p, h1){
    container.push(element)
    if (container.length === 2) {
        if (container[0].dataset.id === container[1].dataset.id) {
            i++ 
            console.log(i,'count is going up')
            // container.forEach(element => element.className = 'correct')
            pointsUpdated()
            setTimeout(function() {
                // container[0].dataset.look = 'done';
                // container[1].dataset.look = 'done';
                container[0].className = 'correct';
                container[1].className = 'correct';
                container = []
            }, 1000)

            if (i === 5) {
                finishGame()
                i = 0
            }
            
        } else {
            setTimeout(function() {
            container[0].firstElementChild.innerHTML = " ";
            container[0].lastElementChild.innerHTML = " "
            container[0].className = 'reverse';
            container[1].lastElementChild.innerHTML = " "
            container[1].firstElementChild.innerHTML = " ";
            container[1].className = 'reverse';
            container = []
            }, 1000)
            
        }


     }

}



function pointsUpdated(){
    points += 2
    h4 = document.querySelector('h4')
    // h4.getElementById('data-id')

    // `Hello ${user.name}, ` + `you have ${user.point} points.`
    h4.innerText = `Hello ${userName}, ` + `you have ${points} points.`

    // h4.innerText = `Your point: ${points}`

    // *Promise* when game finish Fetch to data base

}



main()







