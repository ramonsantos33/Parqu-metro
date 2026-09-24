<h1 align="center">🅿️ Parquímetro Digital</h1>

<p align="center">
  Uma aplicação simples para calcular o tempo de estacionamento e o troco com base no valor inserido.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</p>

---

## 🚗 Sobre o projeto

Este projeto foi desenvolvido durante meus estudos no curso de **Desenvolvedor Full Stack Python da EBAC**.

A proposta foi criar uma aplicação que simula um parquímetro. O usuário informa quanto deseja utilizar e o sistema identifica automaticamente qual período de estacionamento está disponível.

Além do tempo, a aplicação também informa o valor utilizado e calcula o troco quando necessário.

---

## ⚙️ Como funciona

O sistema trabalha com três faixas de estacionamento:

| 💰 Valor | ⏱️ Tempo disponível |
| :---: | :---: |
| R$ 1,00 | 30 minutos |
| R$ 1,75 | 60 minutos |
| R$ 3,00 | 120 minutos |

Caso seja informado um valor entre duas tarifas, o sistema utiliza a maior tarifa possível e devolve a diferença como troco.

> ⚠️ Valores menores que **R$ 1,00** não permitem iniciar o estacionamento.

---

## ✨ Recursos da aplicação

🚘 Cálculo automático do período de estacionamento  
💵 Cálculo de troco  
⚠️ Validação para valores inválidos ou insuficientes  
🖱️ Tarifas que podem ser selecionadas com um clique  
⌨️ Possibilidade de calcular utilizando a tecla Enter  
📱 Layout adaptável para celulares e computadores  
🎨 Interface moderna desenvolvida com CSS

---

## 🧠 Programação Orientada a Objetos

Uma das propostas principais desta atividade foi aplicar conceitos de **POO com JavaScript**.

Para isso, foi criada a classe:

```javascript
class Parquimetro {
  // regras do estacionamento
}

## 🚀 Teste o projeto

Quer ver o parquímetro funcionando na prática?

A aplicação está publicada no GitHub Pages e pode ser testada diretamente pelo navegador.

👉 [Clique aqui para testar o Parquímetro](https://ramonsantos33.github.io/Parqu-metro/)

### 🧪 Sugestões de teste

Você pode experimentar alguns valores para verificar o funcionamento da aplicação:

- `R$ 0,50` → valor insuficiente
- `R$ 1,00` → 30 minutos
- `R$ 1,50` → 30 minutos + troco
- `R$ 1,75` → 60 minutos
- `R$ 2,00` → 60 minutos + troco
- `R$ 3,00` → 120 minutos

A aplicação calcula automaticamente o tempo disponível para estacionamento e informa o troco quando necessário.
