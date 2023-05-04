//GAMES API https://www.freetogame.com/api/games

//CERTAIN GAMES API https://www.freetogame.com/api/game?id=452

async function getGames(){
    const games = await fetch("https://api.openbrewerydb.org/v1/breweries")
    const gamesData = await games.json()
    console.log(gamesData)
}
getGames()
