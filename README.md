# 🚀 Sistema de Boas-Vindas - API de Email  

---

## 📌 Como a API funciona  

### 🏗 Arquitetura Geral  
Esta é uma API REST simples construída em **Node.js** que permite enviar emails de boas-vindas personalizados.  
O sistema é composto por:  

1. **Backend (`server.js`)** → Servidor Express que processa as requisições  
2. **Frontend (`public/`)** → Interface web para envio de emails  
3. **Templates (`mensagem.js`)** → Arquivo com os modelos de email  
4. **Configuração (`.env`)** → Variáveis de ambiente  

---

### 🔄 Fluxo de Funcionamento  
1. Usuário acessa **http://localhost:3000**  
2. Preenche formulário com **nome** e **email**  
3. Frontend envia `POST` para **/send-welcome**  
4. Backend valida os dados  
5. Backend substitui `{{nome}}` no template  
6. Backend envia email via **Resend**  
7. Backend retorna sucesso/erro  
8. Frontend exibe mensagem ao usuário  

---

### 📡 Endpoints da API  

**POST /send-welcome**  
- **Função:** Enviar email de boas-vindas  
- **Dados:** `{ "nome": "João", "email": "joao@email.com" }`  
- **Retorno:** `{ "sucesso": true, "mensagem": "Email enviado!" }`  

**GET /api/status**  
- **Função:** Verificar se a API está funcionando  
- **Retorno:** `{ "status": "online", "mensagem": "Sistema funcionando!" }`  

**GET /**  
- **Função:** Servir a página web do formulário  

---

### 📨 Sistema de Templates  
> 💡 **Dica:**  
> - Arquivo **mensagem.js** contém o modelo do email  
> - A variável `{{nome}}` é substituída pelo nome real do usuário  
> - Suporte a **texto simples** e **HTML**  

---

## ⚙️ Como rodar na sua máquina  

### 🔑 Pré-requisitos  
- **Node.js** (versão 16 ou superior)  
- **npm** (gerenciador de pacotes)  
- Conta no **Resend** (para envio de emails)  

---

### ▶️ Passos  

**1. Preparar o ambiente**  
```bash
node --version
npm --version
````

**2. Instalar dependências**

```bash
cd "caminho/para/API_EMAIL"
npm install
```

**3. Configurar variáveis de ambiente**
Criar `.env` na raiz do projeto:

```env
PORT=3000
RESEND_API_KEY=sua_chave_do_resend_aqui
FROM_EMAIL=seu_email@resend.dev
NODE_ENV=development
```

**4. Obter chave do Resend**

> 📝 **Passos importantes:**
>
> 1. Acesse: [https://resend.com](https://resend.com)
> 2. Crie uma conta gratuita
> 3. Vá em **API Keys**
> 4. Gere uma chave
> 5. Cole no arquivo `.env`

**5. Executar a aplicação**

```bash
# Desenvolvimento (reload automático)
npm run dev

# Produção
npm start
```

**6. Testar a API**

* Via navegador: `http://localhost:3000`
* Via Postman:

  ```http
  POST http://localhost:3000/send-welcome
  Content-Type: application/json

  {
    "nome": "Teste",
    "email": "test@exemplo.com"
  }
  ```
* Verificar status: `http://localhost:3000/api/status`

---

## 📂 Estrutura do Projeto

```
API_EMAIL/
├── server.js          # Servidor principal
├── mensagem.js        # Templates de email
├── package.json       # Dependências e scripts
├── .env               # Configurações (não versionar)
└── public/            # Frontend
    ├── index.html     # Formulário web
    ├── style.css      # Estilos
    └── script.js      # JavaScript do frontend
```

---

## 🔧 Comandos úteis

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Modo produção
npm start

# Testar status
curl http://localhost:3000/api/status
```

---

## 🎨 Personalização

> 🎨 **Customizações possíveis:**
>
> * **Template do email** → editar `mensagem.js`
> * **Porta da API** → alterar `PORT=3000` no `.env`
> * **Visual** → editar `public/style.css`

---

## ❗ Possíveis erros

⚠️ **Erro "Cannot find module"**

```bash
npm install
```

⚠️ **Erro "EADDRINUSE" (porta ocupada)**

* Altere a porta no `.env`
* Ou finalize processo existente

🚫 **Email não enviado**

* Verifique se `RESEND_API_KEY` está correto
* Confirme se `FROM_EMAIL` está configurado no Resend

🔥 **Servidor não inicia**

* Verifique se `.env` existe
* Confirme se todas as variáveis estão definidas
# donate-system
