import React from "react";
import logo_josefas from "../imagens/logo_josefas.png"// Adicione a extensão da imagem correta

function Header() {
  return (
    <header>
      <nav> 
        <img src={logo_josefas} alt="Logo da Josefa's Petals"/>
        <ul>
          <li>Arranjos de Flores</li>
          <li>Buquês de Flores</li>
          <li>Monte Seu Presente</li>
          <li>Ocasiões</li>
          <li>Tipos de Flores</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;