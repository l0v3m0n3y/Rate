# Rate
JavaScript library for rate-api.oeo.li
# main
```js
async function main(){
    const {rate} = require('./rate');
    const coin= new rate();
    let req=await coin.crypto_list()
    console.log(req)
}
main()
```
