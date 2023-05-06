//base url https://bymykel.github.io/CSGO-API/api/{en}

//agents url https://bymykel.github.io/CSGO-API/api/en/agents.json

async function getAgents(){
  const agents = await fetch ("https://bymykel.github.io/CSGO-API/api/en/agents.json")
  const agentsData = await agents.json()
  console.log(agentsData)
}
getAgents()