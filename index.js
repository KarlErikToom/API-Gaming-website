//CHARACTER API https://rickandmortyapi.com/api/character
//LOCATION API https://rickandmortyapi.com/api/location
//EPISODE API https://rickandmortyapi.com/api/episode


async function getChar() {
    const char = await fetch("https://rickandmortyapi.com/api/character")
    const charData = await char.json()
    console.log(charData)
  }
  
  getChar();