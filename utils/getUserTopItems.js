import axios from "axios"


const getUserTopItems = async ()=>{
    try{
        const r  = await axios.get(`https://api.spotify.com/v1/me/shows?offset=0&limit=20`,{
            headers:{
                'Authorization':'Bearer BQAD47k5A4SgVG8HTLRi5FbqW1glBNB_lgX4q5YH-t9D8-zfDZMCXCBKdZmV060GmS-UNOJg1b9BM8WRT006AdAglYQxBtODIU3cu3o2fvAmTUmzUDNpVgIulciDetP40AI_4s_s9mbWN1iybF3u6M5no9QIN7_4AiHIP8y5T3vD4qEBoRfVQSKcS9y-vWahE-4e0b9PEV9pP66fesGiQVTIVIABowgQQPQBvuyZNLJYqGgQi4gbdRmUvasOkyaI'
            }
        })
        return r.data;
    }
    catch(e){
       if(e.response && e.response.data){
        return e.response.data;
       } 
    }
}

export default getUserTopItems