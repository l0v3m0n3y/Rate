class rate{
    constructor(){
        this.api = "https://rate-api.oeo.li/v1"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","Connection": "Keep-Alive","Content-Type":"application/json; charset=UTF-8"}
    }
    async crypto_list(){
        let req=await fetch(`${this.api}/exchange_crypto`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async coin_list(){
        let req=await fetch(`${this.api}/exchange`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {rate};