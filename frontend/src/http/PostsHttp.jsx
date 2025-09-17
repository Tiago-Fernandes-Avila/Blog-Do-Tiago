import axios from "axios";
import { useState, useEffect } from "react";
const DOMAIN = "http://localhost:8080"

export function getPostsHome() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const data = axios.get('http://localhost:8080/api/posts/10/1')
            .then((data) => {

                setPosts(data.data)
            })
            .catch((res) => {
                console.error(res)
            })
    }, []);
    return posts;
}

export function getNumberPageInHome(){
    const [numeroDePaginas, setNumeroDePaginas] = useState(0);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/posts/number")
        .then(res => {
         setNumeroDePaginas(Math.ceil(res.data / 10));
    })
    .catch(err =>{
        console.err(err)
    })
    },[])

    return numeroDePaginas;
}



