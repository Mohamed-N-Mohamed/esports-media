// //get single champion
// //https://api.pandascore.co/lol/champions/{lol_champion_id}

//get ekko
//`https://api.pandascore.co/lol/champions?token=${apiKey}&search[name]=ekko`

//get lcs and eu

//api key
const apiKey = "Sd6r6q1oNMPtqCki-w2T2IlChM_HiKPo3HV7uSKOMHVDuTzG5lA";

//search
async function search() {
  const response = await fetch(
    `https://api.pandascore.co/lol/champions?token=${apiKey}&search[name]=ekko&`
  );
  const data = await response.json();
  console.log(data);
}

//call function
search();
