import React,{useState,useEffect} from "react";
import "./MainContainer.scss";
import GameImgDesktop from "../../Assets/image-web-3-desktop.jpg";
import GameImgMobile from "../../Assets/image-web-3-mobile.jpg"
function MainContainer() {
  const [ stateImage, setStateImage ] =useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >600) {
        setStateImage(true)
      } else {
        setStateImage(false)

      }
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },[window.innerWidth]);
  return (
    <div id="MainContainer" lang="Main">
      <div id="LeftDiv">
        <img alt="" src={stateImage ? GameImgDesktop : GameImgMobile} id="GameImg"></img>
        <div id="InfoDiv">
          <h1 id="SubHeader">
            The Bright<br></br> Future of <br></br>web 3.0 ?
          </h1>
          <div id="ParaphrapheWrapper">
            <p>
              we dive into the next evolution of the web that claims to put the
              power ood the platforms back into the hands of the people. but is
              it really fulfilling its promise ?
            </p>
            <button id="ReadMoreBtn">READ MORE</button>
          </div>
        </div>
      </div>
      <div id="NewsDiv">
        <div id="NewsWrapper">
          <h1 id="NewsHeader">New</h1>
          <div className="NewsCard">
            <h1 >Hydogen Vs electric Cars</h1>
            <p>will hydrogen-fueled cars ever catchup EVs ?</p>
          </div>
          <div className="NewsCard">
            <h1>The Downsides of ai artistry</h1>
            <p>what are the posible adverse effects of on-demand ai image generation</p>
          </div>
          <div className="NewsCard" id="FinalCard">
            <h1>is Vs funding Drying up ?</h1>
            <p>PRicate funding by VC firms is down 50% YOY.We take a look at what that means </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
