import React from "react"
import Counter from "./Counter"

function Footer(props) {
      return (
        <div id="footer">
          < Counter numChar={props.numChar} countWord={props.countWord}/>
          <button onClick={props.seoTool}>SEO Tool</button>
          <p>Occurences du mot cible :</p>
          <p>h1 : {props.seoRes[0]}</p>
          <p>h2 : {props.seoRes[1]}</p>
          <p>h3 : {props.seoRes[2]}</p>
          <p>h4 : {props.seoRes[3]}</p>
          <p>h5 : {props.seoRes[4]}</p>
          <p>h6 : {props.seoRes[5]}</p>            
          <p>p : {props.seoRes[7]}</p>
          <p>a : {props.seoRes[6]}</p>
        </div>
      );    
  }

  export default Footer
