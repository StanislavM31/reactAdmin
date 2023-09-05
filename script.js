console.log("hello currencies!");
require axios from "axios"

/* ==== */
 async function showCurrencies(){

        const result = await axios.get('https://www.nbrb.by/API/ExRates/Currencies');
        console.log(result);
        console.log(result.data);
      }
/* ==== */
/* async function main() {

  await showCurrencies();
}
main();
 */
await showCurrencies()