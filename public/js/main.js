// //get single champion
// //https://api.pandascore.co/lol/champions/{lol_champion_id}

//get ekko
//`https://api.pandascore.co/lol/champions?token=${apiKey}&search[name]=ekko`
https://api.pandascore.co/lol/tournaments/running
//get lcs and eu

//api key

async function test(){
  const res = await fetch('https://widgets.shadow.gg/api/v1/realtime/upcoming_fixtures?title=all&token=u8yvJcXTH8Sm3kg1n5C4pzJv&page=1')
  const data = await res.json();
  console.log(data)
}




  

const apiKey = "Sd6r6q1oNMPtqCki-w2T2IlChM_HiKPo3HV7uSKOMHVDuTzG5lA";

//search
async function search() {
  const response = await fetch(`http://localhost:3000/champion`);
  const data = await response.json();
  console.log(data);
}




// search();
test();

console.log("ITS WORKING");
