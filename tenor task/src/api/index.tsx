import { useState, useEffect } from "react";
import axios from "axios";

const useAPI = (url: any) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    // const URL = (cat: any) => `https://g.tenor.com/v1/${cat}`;

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
            // console.log(response.data, 'hari');
        });
    }, []);
    return { loading, data };
}

export default useAPI;