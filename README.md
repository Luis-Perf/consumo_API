# 💱 Dashboard & Conversor de Moedas

Aplicação front-end em React + Vite + Tailwind CSS com:

- **Dashboard de Cotações** em tempo real para pares **USD, EUR, GBP, JPY, AUD, CAD** (base BRL), consumindo a [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas).
- **Conversor Interativo** entre moedas (inclui BRL, USD, EUR, GBP, JPY, AUD, CAD) com taxas fictícias, para demonstração.
- Animações suaves de entrada e hover via **Framer Motion**.
- Layout responsivo e moderno, com cores personalizadas em **Tailwind**.

---

## 🚀 Tecnologias

- **React 18**  
- **Vite** (dev server ultrarrápido)  
- **Tailwind CSS** (estilização utilitária)  
- **Framer Motion** (animações)  
- **Fetch API** (cotações em tempo real)  
- **AwesomeAPI** (fonte de dados de câmbio)

---

## 📁 Estrutura

```
pretty-currency-dashboard-v2/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ index.css
   └─ components/
      ├─ Navbar.jsx
      ├─ Dashboard.jsx
      ├─ Converter.jsx
      └─ Sobre.jsx
```

---

## ⚙️ Instalação e Execução

1. Clone ou baixe este repositório.  
2. No terminal, dentro da pasta raiz, execute:
   ```bash
   npm install
   npm run dev
   ```
3. Abra no navegador: `http://localhost:5173`

---

## 🔍 Como Funciona

1. **Dashboard**  
   - Ao carregar, busca as cotações BRL→moeda (USD, EUR, …)  
   - Inverte a taxa para mostrar “1 unidade da moeda em R$”  
   - Exibe valor e variação 24h (`pctChange`) colorida (verde/vermelho).

2. **Conversor**  
   - Insira um valor, escolha “De” e “Para”  
   - Taxas fictícias definidas em código para demonstração  
   - Resultado exibido em tempo real abaixo do botão.

3. **Sobre**  
   - O Currency Dashboard foi criado para demonstrar de forma prática e visual o consumo de APIs de cotações em tempo real, aliado a um conversor interativo de moedas. O foco é em moedas fiduciárias (BRL, USD, EUR, GBP, JPY, AUD e CAD), exibindo valores atualizados e variação 24h diretamente da AwesomeAPI.

Tecnologias: React 18, Vite, Tailwind CSS e Framer Motion – escolhidas por sua performance, flexibilidade e facilidade de criar interfaces fluídas.

---

## 🛠️ Personalização

- **Novos pares**: edite o array `PAIRS` em `Dashboard.jsx` ou o array `moedas` em `Converter.jsx`.  
- **Estilos**: ajuste cores em `tailwind.config.js`.  
- **API real**: troque o endpoint em `Dashboard.jsx` por outra fonte (ex: ExchangeRate.host).

Este projeto foi feito para aprendizado e portfólio; melhorias são bem-vindas!

---
