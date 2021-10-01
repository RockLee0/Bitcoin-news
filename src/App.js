import './App.css';
import { Button, Card, Col, Row, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './Component/News/News';
import Nav from './Component/Nav/Nav';

function App() {
   const [news,setNews]=useState([]);
   useEffect(()=>{
     fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=2fd8c5f4873141fa86836f0428d02491')
     .then(res=>res.json())
     .then(data=>setNews(data.articles))
   },[])
  
   
  return (
    <div  className='Container'>
      <Nav></Nav>
      {
        news.length===0? <Spinner animation="border" /> 
        :
        <Row xs={1} md={3} className="g-4">
 

{
  news.map(nw=><News news={nw}></News>)
}





</Row>


        
      }


    


    </div>
  );
};


export default App;
