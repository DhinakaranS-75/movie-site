import React from "react";
import styled from "styled-components";
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/Header";
export default function Signup() {
  return (
    <Container>
      <Backgroundimage />
      <div className="content">
      <Header login />
        <div className="body flex colum a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movies, TV Shows and more</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>
              Ready to watch ? Enther Your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
            />
            <input type="password" name="password" placeholder="Password" />
            <button>GET Started</button>
          </div>
          <button>Log In</button>
        </div>
      </div>
        
      
    </Container>
  );
}

const Container = styled.div`
position: relative;
  .content{
    position : absolute;
    top:0;
    left :0;
    background-color:rgba(0, 0 , 0, 0.5);
    height:100vh
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
  }
`;
