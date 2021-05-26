//DOM
const DOM = document.getElementById('upcoming-tournaments');
const row = document.querySelector('.row');
const table = document.querySelector('.responsive-table')

//Get Upcoming Tournaments
async function getUpcomingtournaments(){
  const response = await fetch(`http://localhost:3000/upcoming`);
  const data = await response.json();
  //send data to UI
  createUI(data)
 
}




function createUI(tournaments){

  const tournamentsDetails =  tournaments.map((matches) => {

    console.log(matches)
    return `
    <thead>
      <tr>
          <th>Event</th>
          <th>Begins At</th>
          <th>Stream URl</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>${matches.event.game}</td>
        <td>${matches.event.begin_at}</td>
        <td>${matches.event.stream_url}</td>
      </tr>
   
    </tbody>

  
    
    `


  }).join('')


  




  table.innerHTML = tournamentsDetails
  
}

getUpcomingtournaments()