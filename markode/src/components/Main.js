import React from 'react';
import NavTool from './navTools/NavTools';

function Main() {
  return (
    <div className="main">
      <NavTool />
      <div className="textBlocs">
        <div className="mdBox">
          <textarea className="textEditors" />
          <button className="editorButtons">Effacer tout</button>
        </div>
        <div className="htmlBox">
          <textarea className="textEditors" />
          <button className="editorButtons">Exporter</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
