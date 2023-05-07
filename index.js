//base url https://bymykel.github.io/CSGO-API/api/{en}

//agents url https://bymykel.github.io/CSGO-API/api/en/agents.json

/*const agentListEl = document.querySelector(".agent-list");

async function getAgents() {
  const agents = await fetch(
    "https://bymykel.github.io/CSGO-API/api/en/agents.json"
  );
  const agentsData = await agents.json();
  agentListEl.innerHTML = agentsData.map((agent) => agentHTML(agent)).join("");
  
}
getAgents();

function agentHTML(agent) {
  return `
  <div class="agent-box">
                <div class="agent-box__container">
                    <img class="agent__img" src="${agent.image}" alt="">
                    <h3>Agent's name ${agent.name} </h3>
                    <p>agent's rarity ${agent.rarity}</p>
                </div>
            </div>
  `;
}
*/

async function getMovies(){
  const movies = await fetch("https://www.omdbapi.com/?s=thor&apikey=a398627a")
const moviesData = await movies.json()
console.log(moviesData)
}
getMovies()
