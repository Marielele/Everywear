import axios from "axios";
import {
    useState,useEffect
}from "react";
const GetAll = () => {
    // const [categorias, setCategorias] = useState([]);

    // useEffect(() => {

    //     axios.get('/api/paymethod/:id')
    //     .then((res) => {
    //         setCategorias(res.data.data);
    //     });

    // }, []);

    // return [categorias];
}

const GetCardsByUser =  (id) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        if(id!=undefined){
        axios.get(`/api/paymethod/getpays/${id}`)
        .then((res) => {
            setCards(res.data);
        });
        }
    }, []);
    console.log('obtuve;',cards);
    return cards;
}


export {GetCardsByUser};