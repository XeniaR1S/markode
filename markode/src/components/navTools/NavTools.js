import React, { Component } from 'react';
import '../../App.css';

export default class NavTools extends Component {
  render() {
    return (
      <div className="navTool">
        <h3 className="titleTool">Outils markdown</h3>
        <div className="accordion">
          {/* //////////////////////////////////////////// TEXTES /////////////////////////////// */}
          <section id="item1">
            <a href="#item1">
              <h3>Texte</h3>
            </a>
            {/* ------------------------ H1 ------------------------ */}
            <button onClick={this.props.onClickAttribut} value="# ">
              &lt;H1&gt;
            </button>
            {/* ------------------------ H2 ------------------------*/}
            <button onClick={this.props.onClickAttribut} value="## ">
              &lt;H2&gt;
            </button>
            {/* ------------------------ H3 ------------------------ */}
            <button onClick={this.props.onClickAttribut} value="### ">
              &lt;H3&gt;
            </button>
            {/* ------------------------ H4 ------------------------ */}
            <button onClick={this.props.onClickAttribut} value="#### ">
              &lt;H4&gt;
            </button>
            {/* ------------------------ H5 ------------------------ */}
            <button onClick={this.props.onClickAttribut} value="##### ">
              &lt;H5&gt;
            </button>
            {/* ------------------------ H6 ------------------------ */}
            <button onClick={this.props.onClickAttribut} value="###### ">
              &lt;H6&gt;
            </button>
          </section>

          {/* //////////////////////////////////////////// LISTES /////////////////////////////// */}
          <section id="item2">
            <a href="#item2">
              <h3>Listes</h3>
            </a>
            <button onClick={this.props.onClickAttribut} value="1. ">
              Listes numérotées
            </button>
            <button onClick={this.props.onClickAttribut} value="* ">
              Listes à puces
            </button>
          </section>

          {/* //////////////////////////////////////////// BLOCS /////////////////////////////// */}
          <section id="item3">
            <a href="#item3">
              <h3>Blocs</h3>
            </a>
            <button onClick={this.props.onClickAttribut} value="![alt](src)">
              Image
            </button>
            <button
              onClick={this.props.onClickAttribut}
              value="```votre code```"
            >
              Blocs de code
            </button>
          </section>

          {/* //////////////////////////////////////// MISE EN FORME /////////////////////////////// */}
          <section id="item4">
            <a href="#item4">
              <h3>Mise en forme</h3>
            </a>
            <button onClick={this.props.onClickAttribut} value="** **">
              Gras
            </button>
            <button onClick={this.props.onClickAttribut} value="* *">
              Italique
            </button>
            <button onClick={this.props.onClickAttribut} value="*** ****">
              Gras + Italique
            </button>
            <button onClick={this.props.onClickAttribut} value="` `">
              Arrière-plan gris
            </button>
            <button onClick={this.props.onClickAttribut} value=">">
              Citation
            </button>
          </section>

          {/* //////////////////////////////////////// MISE EN PAGE /////////////////////////////// */}
          <section id="item5">
            <a href="#item5">
              <h3>Mise en page</h3>
            </a>
            <button onClick={this.props.onClickAttribut} value="___">
              Ligne de séparation horizontale
            </button>
          </section>
        </div>
      </div>
    );
  }
}
