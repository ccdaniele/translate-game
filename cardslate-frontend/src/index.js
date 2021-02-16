const main =() => {
    formEventListener()
}



// event list for form - x
    // hide the form - x
let showCards = false;

const formEventListener = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', function(event){

        event.preventDefault()
        const div = document.getElementById('mainForm')
        
        showCards = !showCards
        if (showCards) {
            div.style.display = "none"
            renderGame(event)
        } else {
            div.style.display = "block"
            
        }
        createUser(event)
        form.reset()
    })
}

// scape the form data - x
    // fetch POST a new user
    // display form information in header
const createUser = (event) => {

    const newUser = {
         name: event.target[0].value
    }
    let newObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
    } // closes newObj

    fetch('http://localhost:3000/users', newObj)
    .then(resp=> resp.json())
    .then(user=>renderUser(user))
}

function renderUser(user){
    debugger
   const header = document.querySelector('header')
   const h4 = document.createElement('h4')
   h4.innerText = user.data.attributes.name
   header.append(h4)

}


// create the game for 10 cards - 5 words
    // fetch request for words & images
    // render divs for each card
    // render words & images

const renderGame = (event) => {

    const gameType = {
        language: event.target[1].value,
        category: event.target[2].value
    }

    const div = document.getElementById('mainGame')
    div.innerText = `${gameType.language}, ${gameType.category}`
}


main()

