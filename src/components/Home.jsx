import React, { Component } from "react";
import ApLogo from "../images/airplane1.png"
import "../css/Home.css"
 
class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="column">
        <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>
        <img src={ApLogo} alt="Byaheng Langit" width="auto" height="auto"></img>
        </div>
        
        <div className="column">
        <h2>Byaheng Langit Airline</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra sapien at enim faucibus ultricies a ut 
        risus. Praesent egestas malesuada enim vitae feugiat. Nam viverra est ut metus maximus, ut dapibus lectus lobortis.
        In volutpat posuere nunc, quis tristique dui venenatis at. Aenean tempus cursus condimentum. Sed ut odio quis sem 
        aliquet finibus eget et velit. Morbi sed venenatis magna, vehicula accumsan sem. Nulla condimentum eu tortor 
        aliquam consectetur. Aliquam erat volutpat. Phasellus ac libero blandit velit aliquam vehicula non in massa. 
        Vivamus nunc tortor, interdum eu tristique pharetra, posuere nec nisi. Nulla vel pellentesque ex, eget pellentesque 
        urna.

        Maecenas augue orci, lobortis eget ex ut, eleifend hendrerit tellus. Nullam at ex at tortor commodo consectetur
        semper non lectus. Praesent suscipit maximus justo nec sodales. Pellentesque dignissim est ut suscipit tincidunt.
        Nam non nibh eros. Fusce non pretium libero, ut congue risus. Aenean consectetur elementum viverra. Nulla ut ornare
        dolor. Praesent est tellus, sodales a enim a, euismod consectetur tellus. Pellentesque ultricies pulvinar ligula,
        nec gravida velit ullamcorper id. Donec risus mauris, vulputate in rutrum sed, tincidunt vel erat. Vivamus ut
        semper turpis. Quisque semper turpis eget maximus placerat. Phasellus lobortis tempor odio, ut venenatis urna
        hendrerit sit amet. Phasellus consequat mauris nec dolor sollicitudin faucibus non in leo.
        </p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
        
      </div>
    );
  }
}
 
export default Home;