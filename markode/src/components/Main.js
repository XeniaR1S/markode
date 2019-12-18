import React from 'react';

function Main() {
    return (
        <div className="main">
            <div className="textBlocs">
                <div className="mdBox">
                    <textarea className="textEditors"/>
                    <button>Effacer tout</button>                    
                </div>
                <div className="htmlBox">
                    <textarea className="textEditors"/>
                    <button>Exporter</button>    
                </div>
            </div>
        </div>
    )
}

export default Main;
