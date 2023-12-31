import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import "./Link.css";
export default function App() {
  return (
    <>
      <h2 className='bb2' style={{textAlign:'center'}}>Helful Links</h2>
      <br />
      <div style={{textAlign:"center"}}>
      <MDBBtn outline className='' color='dark'style={{marginReft:1000}} href=''>
      <h2 style={{fontSize:23}}>What to expect when you fly.</h2>
      <h3 style={{fontSize:19}}>Navigate the airport and your trip in the post pandamic world.</h3>
      </MDBBtn>
     
      <MDBBtn outline className='' color='dark' style={{marginLeft:100}}>
      <h2 style={{fontSize:23}}>Traveling with children</h2>
      <h3 style={{fontSize:19}}>Tips and information if you're Traveling with little one.</h3>
      </MDBBtn>

      </div>
    </>
  );
}