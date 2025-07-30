# 💱 CurrencyFlow – Dashboard & Conversor de Moedas

Aplicação front-end desenvolvida em **React + Vite + Tailwind CSS**, com um **Dashboard moderno em modo escuro fixo** e um **Conversor Interativo** usando taxas reais via [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas).

---

## ✨ **Funcionalidades**
- **Dashboard de Cotações**:
  - Mostra valores em tempo real para **USD, EUR, GBP, JPY, AUD, CAD** (base BRL).
  - Variação 24h com cores dinâmicas (verde/vermelho).
  - Mini-gráficos de tendência com **Recharts**.
- **Conversor Interativo**:
  - Conversão usando valores reais da AwesomeAPI.
  - Formatação monetária automática.
  - UI moderna, responsiva e em **Dark Mode**.
- **Interface elegante e responsiva**:
  - Desenvolvida com **Tailwind CSS**.
  - Animações suaves via **Framer Motion**.

---

## 🚀 **Tecnologias Utilizadas**
- **React 18**
- **Vite** (dev server rápido)
- **Tailwind CSS** (estilização utilitária)
- **Framer Motion** (animações)
- **Axios** (consumo da API)
- **Recharts** (gráficos)
- **AwesomeAPI** (cotações em tempo real)

---

## 📂 **Estrutura do Projeto**
```
currency-dashboard-v3-darkmode/
├─ index.html
├─ package.json
├─ tailwind.config.js
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

## ⚙️ **Instalação e Execução**
1. **Clone ou baixe** este repositório.
2. No terminal, acesse a pasta do projeto:
   ```bash
   cd currency-dashboard-v3-darkmode
   ```
3. Instale as dependências:
   ```bash
   npm install
   npm install recharts
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra no navegador:
   ```
   http://localhost:5173
   ```

---

## 🔍 **Como Funciona**
### **Dashboard**
- Busca cotações reais via **AwesomeAPI**.
- Exibe **valor atual em R$**, variação percentual e mini-gráficos.

### **Conversor**
- Permite converter entre **BRL, USD, EUR, GBP, JPY, AUD e CAD**.
- Usa valores reais da API.
- Formata automaticamente o resultado no padrão da moeda de destino.

---

## 🛠️ **Personalização**
- Para adicionar mais moedas, edite os arrays:
  - `PAIRS` em **Dashboard.jsx**
  - `CURRENCIES` em **Converter.jsx**
- Para alterar cores, personalize o arquivo **tailwind.config.js**.

---

## 📌 **Próximas Melhorias**
- Adicionar **bandeiras das moedas**.
- Histórico de cotações com gráficos detalhados.
- Deploy automático via **Vercel** ou **Netlify**.

---

## 📄 **Licença**
Este projeto é livre para uso educacional e pessoal. Melhorias são bem-vindas!
