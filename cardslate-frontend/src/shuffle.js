

oneCategory = allCategories.find(category => category.id === game.category.id)  
  
imageArray = oneCategory.images
wordArray = oneCategory.words

shuffledWordArray = shuffle(wordArray)

slicedWordArray= shuffledWordArray.slice(0,5)

matchImageArray = getMatch(imageArray,slicedWordArray)

matchedArray = matchImageArray.concat(slicedWordArray)

finalArray = shuffle(matchedArray)



function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i].id === b[e].id ) matches.push( a[i] );
        }
    }
    return matches;
}

function shuffle(array) {
    let d = array
   let w = d.map((a) => ({sort: Math.random(), value: a}))
    let t= w.sort((a, b) => a.sort - b.sort)
  let x = t.map((a) => a.value)
  return x
}