import React, { Component } from 'react';
import '../../App.css';
import Collapsible from 'react-collapsible';

export default class NavTools extends Component {
  render() {
    return (
      <div className="navTool">
        <h3 className="titleTool">Outils markdown</h3>
        <div className="accordion">
          <section id="item1">
            <a href="#item1">
              <h3>Texte</h3>
            </a>
            <h5>Gras</h5>
            <h5>Italique</h5>
            <h5>Souligné</h5>
            <h5>Barré</h5>
          </section>
          <section id="item2">
            <a href="#item2">
              <h3>Listes</h3>
            </a>
            <h5>Listes à puces</h5>
            <h5>Listes numérotées</h5>
            <h5>Listes imbriquées</h5>
          </section>
          <section id="item3">
            <a href="#item3">
              <h3>Mise en forme</h3>
            </a>
            <h5>Ligne de séparation horizontale</h5>
          </section>
          <section id="item4">
            <a href="#item4">
              <h3>Blocs</h3>
            </a>
            <h5>Blocs de citation</h5>
            <h5>Code incorporé</h5>
            <h5>Blocs de code</h5>
          </section>
        </div>
      </div>
    );
  }
}
