import {
    useState, useEffect
} from "react";
import axios from "axios";
const GetAllSoldItems = (id) => {
    const [items, setSoldItems] = useState([]);

    useEffect(() => {

        axios.get(`/api/item/getsolditems/${id}`)
        .then((res) => {
            setSoldItems(res.data);
        });

    }, []);
    console.log('obtuve;',items);
    const initialValue = 0;
    var sumWithInitial = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.cantidadVendida,
    initialValue
    );
    return sumWithInitial;
}

const GetAllItems = (id) => {
    const [itemsRecord, setAllItems] = useState([]);

    useEffect(() => {

         axios.get(`/api/item/getstoreitemstatistics/${id}`)
        .then((res) => {
            setAllItems(res.data);
        });

    }, []);
    console.log('items;',itemsRecord);
   
    return itemsRecord;
}

export {GetAllSoldItems};
export {GetAllItems};