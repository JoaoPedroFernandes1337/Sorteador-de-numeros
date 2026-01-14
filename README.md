<h1 align="center"> Sorteador de Números </h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=status&message=concluido&color=GREEN&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Linguagem&message=JAVASCRIPT&color=yellow&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Estilo&message=CSS3&color=blue&style=for-the-badge"/>
</p>

<p align="center">
  <img src="img/ia.png" alt="Ilustração do Projeto" width="300px">
</p>

## 💻 Sobre o projeto

O **Sorteador de Números** é uma aplicação web desenvolvida para gerar números aleatórios dentro de um intervalo específico definido pelo usuário. 

O projeto foca na lógica de programação com JavaScript para resolver problemas comuns de validação, garantindo que o sorteio seja justo e livre de erros técnicos (como intervalos negativos ou repetição de números).

## ⚙️ Funcionalidades

- **Sorteio Personalizado:** O usuário define a quantidade de números, o valor inicial e o valor final.
- **Números Únicos:** A lógica implementada impede que o mesmo número seja sorteado mais de uma vez na mesma rodada.
- **Validações de Erro:**
  - Impede que o número inicial ("Do número") seja maior que o final ("Até o número").
  - Verifica se a quantidade de números a serem sorteados é possível dentro do intervalo escolhido (ex: pedir 5 números num intervalo de 1 a 3).
- **Controle de Estado:** O botão "Reiniciar" só é habilitado após um sorteio ser realizado.

## 🛠 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** - Design responsivo com Flexbox.
  - Uso de gradientes e sobreposição de imagens (`background-image`).
  - Fontes personalizadas ('Chakra Petch' e 'Inter').
- **JavaScript:** - Manipulação do DOM.
  - Lógica condicional (`if/else`) e laços de repetição (`while/for`).
  - Funções matemáticas (`Math.random`, `Math.floor`).

## 📂 Estrutura de Arquivos
```bash
/
├── img/
│   ├── code.png
│   ├── ia.png
│   └── Ruido.png
├── index.html
├── style.css
├── app.js
└── README.md
```

## 🚀 Como executar o projeto

1. Clone este repositório:
```bash
git clone https://github.com/JoaoPedroFernandes1337/Sorteador-de-numeros.git 
