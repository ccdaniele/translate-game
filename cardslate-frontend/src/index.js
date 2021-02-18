const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const GAME_URL = `${BASE_URL}/games`
const CATEGORY_URL = `${BASE_URL}/categories`
const WORD_URL = `${BASE_URL}/words`

const main =() => {
    createUser()
    createGame()
    fetchCategories()
}

// scape the form data - x
    // fetch POST a new user - x 
    // display form information in header - x
    // hide form
const createUser = () => {

    const formLogin = document.getElementById('login')
    formLogin.addEventListener('submit', function(event){

    event.preventDefault()

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
    userId = parseInt(user.id, 10) 

    const header = document.querySelector('header')
    const h4 = document.createElement('h4')

    h4.dataset.id = user.id 
    h4.innerText = `Welcome ${user.name} ` + `Your Points: ${user.point}`

    header.append(h4)
    
}

// create the game
    // fetch POST for game
// event list for form - x
    // hide the form 
    // let showCards = false;
const createGame = () => {

    const formGame = document.getElementById('game')
    formGame.addEventListener('submit', function(event){
        event.preventDefault()

        // const div = document.getElementById('mainForm')
        
        // showCards = !showCards
        // if (showCards) {
        //     div.style.display = "none"
            
        // } else {
        //     div.style.display = "block"
            
        // }
        
        const gameType = {
            user_id: userId,
            // integer 
            language: event.target[0].value, 
            //string of name
            category_id: parseInt(event.target[1].value, 10) 
            //category_id as integer
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
        .then(game => renderGame(game))
        
    })
    formGame.reset()
}

const fetchCategories = () => {

    fetch(CATEGORY_URL)
    .then(resp => resp.json())
    .then(categories => {
        allCategories = categories
        // categories.forEach(category => category)
        })

}

// render game 0 cards - 5 words
    // render divs for each card
    // render words & images

const renderGame = (game) => {

    const gameDiv = document.getElementById('mainGame')
    gameDiv.innerHTML = ""
    
    oneCategory = allCategories.find(category => category.id === game.category.id)
    
  
    imageArray = oneCategory.images
    wordArray = oneCategory.words
    debugger


    // wordArray =  wordCategory.map(word => word)

    // wordArray.sort(() => Math.random() - 0.5)

    // mainArray = wordArray.slice(0,5)

    // totalArray = shuffle(mainArray)
    

    // totalArray.forEach()(word => {

    // const div = document.createElement('div')
    //     div.dataset.view = "cardShow"
    //     div.dataset.id = word.id

    //     const p = document.createElement('p')
    //     p.innerText = word.name 

    //     const imageDiv = document.createElement('div')
    //     imageDiv.dataset.view = "cardShow"
    //     imageDiv.dataset.id = word.id

    //     const h1 = document.createElement('h1') 
    //     h1.innerText = word.image

    //     imageDiv.append(h1)
    //     div.append(p)
    //     gameDiv.append(div, imageDiv)


    // })



}


//     stringArray.forEach(string => {
        
//             const div = document.createElement('div')
//             div.dataset.view = "cardShow"
//             div.dataset.id = string.id
    
//             const p = document.createElement('p')
//             p.innerText = string.name 
//             div.append(p)
//             gameDiv.append(div)
//     })

//     imageArray.forEach(image => {

    
//             const imageDiv = document.createElement('div')
//             imageDiv.dataset.view = "cardShow"
//             imageDiv.dataset.id = image.id
    
//             const h1 = document.createElement('h1') 
//             h1.innerText = image.image
    
//             imageDiv.append(h1)
//             gameDiv.append(imageDiv)
 

    


     // --------- james amazing work -------
    
    // finalWordArray = wordArray.sort(() => Math.random() - 0.5)

    // finalWordArray.slice(0,5).forEach(word => {
        
    //     const div = document.createElement('div')
    //     div.dataset.view = "cardShow"
    //     div.dataset.id = word.id

    //     const p = document.createElement('p')
    //     p.innerText = word.name 

    //     const imageDiv = document.createElement('div')
    //     imageDiv.dataset.view = "cardShow"
    //     imageDiv.dataset.id = word.id

    //     const h1 = document.createElement('h1') 
    //     h1.innerText = word.image

    //     imageDiv.append(h1)
    //     div.append(p)
    //     gameDiv.append(div, imageDiv)

    // --------- james amazing work -------
        
    // }) // closes forEach

    // add timer then send to shuffleGame

// } // closes renderGame


// reassign the div classes to card
const shuffleGame = () => {



    // finalWordArray.slice(0,5).forEach(word => {
        
    //     const div = document.createElement('div')
    //     div.dataset.view = "cardShow"
    //     div.dataset.id = word.id

    //     const p = document.createElement('p')
    //     p.innerText = word.name 

    //     const imageDiv = document.createElement('div')
    //     imageDiv.dataset.view = "cardShow"
    //     imageDiv.dataset.id = word.id

    //     const h1 = document.createElement('h1') 
    //     h1.innerText = word.image

    //     imageDiv.append(h1)
    //     div.append(p)
    //     gameDiv.append(div, imageDiv)
        
    // }) // closes forEach


    div.onclick = function() {
   
        if (this.className != 'flipped' && this.className != 'correct'){
            this.className = 'flipped';
            p.innerText = word.name 
            // var result = this.dataset.item;
            // resultsArray.push(result);
            // clearInterval(Interval);
            // Interval = setInterval(startTimer, 10);
        } else {
            this.className = 'reverse'
            p.innerText = ""
        }
    } // closes onclick

    imageDiv.onclick = function() {

        if (this.className != 'flipped' && this.className != 'correct'){
            this.className = 'flipped';
            h1.innerText = word.image 
            // var result = this.dataset.item;
            // resultsArray.push(result);
            // clearInterval(Interval);
            // Interval = setInterval(startTimer, 10);
        } else {
            this.className = 'reverse'
            h1.innerText = ""
        }

        if (div.className && imageDiv.className === 'flipped') {
            console.log("this works")
            div.className = 'correct'
            imageDiv.className = 'correct'
            // udpate user's points
        }
    } // closes onclick


}












main()

