import React, { Component } from 'react';
import './navTools.css';
import Collapsible from 'react-collapsible';

export default class NavTools extends Component {
  render() {
    return (
      <div className="navTool">
        <h3>Outils markdown</h3>
        <Collapsible trigger="Mise en forme" className="titleTool">
          <p>Gras</p>
          <p>Italique</p>
        </Collapsible>
        <Collapsible trigger="Titres" className="titleTool">
          <p>&lt; H1 &gt;</p>
          <p>&lt; H2 &gt;</p>
          <p>&lt; H3 &gt;</p>
          <p>&lt; H4 &gt;</p>
          <p>&lt; H5 &gt;</p>
          <p>&lt; H6 &gt;</p>
        </Collapsible>
        <Collapsible trigger="Listes" className="titleTool">
          <p>Listes à puces</p>
          <p>Listes numérotées</p>
          <p>Listes imbriquées</p>
        </Collapsible>
        <Collapsible trigger="Blocs" className="titleTool">
          <p>Blocs de citation</p>
          <p>Code incorporé</p>
          <p>Blocs de code</p>
        </Collapsible>
        <Collapsible trigger="Liens" className="titleTool">
          <p>Liens vers les tickets</p>
          <p>Images servant de liens</p>
        </Collapsible>
        <Collapsible trigger="Images" className="titleTool"></Collapsible>
        <Collapsible trigger="Mise en page" className="titleTool">
          <p>Ligne de séparation horizontale</p>
          <p>Italique</p>
        </Collapsible>
      </div>
    );
  }
}
