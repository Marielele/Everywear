import {
    useState, useEffect
} from "react";
import axios from "axios";
const GetInsideComments = (id) => {
    const [comments, setInsideComments] = useState([]);

    useEffect(() => {
        axios.get(`/api/comment/getInsideComments/${id}`)
        .then((res) => {
            setInsideComments(res.data);
        });

    }, []);
    console.log('comments;',comments);
  
    return comments;
}

export {GetInsideComments};
