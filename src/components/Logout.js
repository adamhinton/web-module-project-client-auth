import React, {useEffect} from "react";
import axios, { Axios } from "axios";
import { useHistory } from "react-router";

const Logout = () =>{
    const {push} = useHistory();

    useEffect(() =>{
        const token = localStorage.getItem("token");

        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
        .then(resp =>{
            // localStorage.removeItem("token");
            localStorage.removeItem('token');
            push('/login')
        })
        .catch(err =>{
            console.log(err);
        })
    }, [])

    return(<div></div>)
}

export default Logout;