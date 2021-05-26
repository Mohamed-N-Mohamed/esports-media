//axios
const axios = require("axios");

//key
const apiKey = "Sd6r6q1oNMPtqCki-w2T2IlChM_HiKPo3HV7uSKOMHVDuTzG5lA";



exports.getUpcomingtournaments = (req, res) => {
  axios
    .get(
      `https://api.pandascore.co/lives?token=${apiKey}`
    )
    .then((response) => {
     res.send(response.data)
    })
    .catch((error) => {
      console.log(error);
    });

}


