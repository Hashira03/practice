import React from "react";
import { Button } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import Firstp from "./Firstp";
import "./Link.css";
const Demo = () => {
  return (
    <Container>
    <h2 className='bb2' style={{textAlign:'center'}}>Helful Links</h2>
      <br />
    <div style={{textAlign:"center"}}>
      <a href="https://react.school" target="_blank" >
        <Button style={{backgroundColor:'white',marginReft:1000}}> 

        <h2 className="h2" style={{fontSize:23}}>What to expect when you fly.
        </h2 >
        <p className="h3" style={{fontSize:19}}>Navigate the airport and your trip in the post pandamic world.</p>
    
        </Button>

        <Button style={{backgroundColor:'white',marginLeft:100}} className="info-button:hover"> 

        <h2 className="h2" style={{fontSize:23}}>Traveling with children.
        </h2 >
        <p className="h3" style={{fontSize:19}}>Tips and information if you're Traveling with little one.</p>
    
        </Button>
        {/* <Button style={{backgroundColor:'black'}}> 
        <h2 >What to expect when you fly.
        </h2 >
        <h3 style={{fontSize:19}}>Navigate the airport and your trip in the post pandamic world.</h3>
    
        </Button> */}
      </a>
    </div>
    </Container>
  );
};

export default Demo;
