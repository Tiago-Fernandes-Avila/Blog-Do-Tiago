import axios from "axios";
const DOMAIN = "http://localhost:8080"


export function getPostsHome(){
  
    fetch('http://localhost:8080/api/posts/10/1')
  .then(response => response.json())
  .catch("algo deu errado!")

     
  }





