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
    
    oneCategory = allCategories.find(category => category.id === game.category.id)
    
    oneCategory.words.forEach(word => {
        
        const gameDiv = document.getElementById('mainGame')
        const div = document.createElement('div')
        div.className = "card"
        
        const p = document.createElement('p')
        p.innerText = word.name 

        div.append(p)
        gameDiv.append(div)
        
    })
    
    




    debugger
    console.log(game)
    

}


main()

