import axios from "axios";
import { useState, useEffect } from "react";
const DOMAIN = "http://localhost:8080"



export async function getPostsHome(limit = 2, page = 1) {
    try{
    const res = await axios.get(`${DOMAIN}/api/posts/${limit}/${page}`);
    return res.data;
    }
    catch(error){
        console.error(error)
    }
} 



export async function  getNumberPageInHome() {

    try{
    const res = await axios.get("http://localhost:8080/api/posts/number")
             return Math.ceil(res.data / 2);
            
    }
    catch (erro){
        console.error(erro)
    }

    
}



export async function getPostContent(id) {
    const res = axios.get(`${DOMAIN}/api/posts/content/${id}`);
    return res;
} 




