import axios from "axios";
import {
    useState,useEffect
}from "react";
const GetAdressesByUser =  (id) => {
    const [adresses, setAdresses] = useState([]);

    useEffect(() => {
        if(id!=undefined){
        axios.get(`/api/address/getadresses/${id}`)
        .then((res) => {
            setAdresses(res.data);
        });
        }
    }, []);
    console.log('obtuve;',adresses);
    return adresses;
}

export {GetAdressesByUser};