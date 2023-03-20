import "./Formulario.css";
import CampoTexto from "./../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-end",
    "Data-Science",
    "Devops",
    "UX e Desing",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido =>", nome, cargo, imagem, time);
  };

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto 
          valor={nome} 
          aoAlterado={valor => setNome(valor)} 
          label="Nome" 
          placeholder="nome" 
          obrigatorio={true} 
        />

        <CampoTexto 
          valor={cargo} 
          aoAlterado={cargo => setCargo(cargo)} 
          label="Cargo" 
          placeholder="cargo" 
          obrigatorio={true} 
        />
        
        <CampoTexto 
          valor={imagem} 
          aoAlterado={imagem => setImagem(imagem)} 
          label="Imagem" 
          placeholder="endereço de imagem" 
        />

        <ListaSuspensa 
          valor={time}
          aoAlterado={valor => setTime(valor)}
          label="Time" 
          itens={times} 
          obrigatorio={true} 
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
