import React from "react"
import Counter from "./Counter"

function Footer(props) {
      return (
        <div id="footer">
          < Counter numChar={props.numChar} countWord={props.countWord}/>
          <div className="colOne">
            <p className="counterText">Occurences du mot cible :</p>
            <p className="counterText">h1 : {props.seoRes[0]}</p>
            <p className="counterText">h2 : {props.seoRes[1]}</p>
          </div>
          <div>
            <p className="counterText">h3 : {props.seoRes[2]}</p>
            <p className="counterText">h4 : {props.seoRes[3]}</p>
            <p className="counterText">h5 : {props.seoRes[4]}</p>
          </div>
          <div>
            <p className="counterText">h6 : {props.seoRes[5]}</p>            
            <p className="counterText">p : {props.seoRes[7]}</p>
            <p className="counterText">a : {props.seoRes[6]}</p>
          </div>
          <button className="seoButton" onClick={props.seoTool}>SEO Tool</button>
        </div>
      );    
  }

  export default Footer
