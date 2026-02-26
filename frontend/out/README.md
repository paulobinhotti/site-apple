# iStore - Site Estático para GitHub Pages

Este diretório contém a versão estática do site iStore, pronta para deploy no GitHub Pages.

## 📁 Estrutura

```
out/
├── index.html              # Página principal
├── 404.html               # Página de erro 404
├── .nojekyll              # Necessário para GitHub Pages
├── categoria/             # Páginas de categorias
│   ├── mac.html
│   ├── iphone.html
│   ├── ipad.html
│   ├── watch.html
│   └── airpods.html
├── produto/               # Páginas de produtos
│   ├── macbook-pro-16-m4-pro.html
│   ├── iphone-16-pro-max.html
│   └── ...
├── _next/                 # Assets do Next.js (CSS, JS)
└── images/                # Imagens dos produtos

```

## 🚀 Como fazer deploy no GitHub Pages

### Opção 1: Repositório Raiz (username.github.io)

1. Crie um repositório chamado `username.github.io` (substitua `username` pelo seu nome de usuário do GitHub)
2. Faça upload de **todos os arquivos** deste diretório `out/` para a raiz do repositório
3. Vá em **Settings** > **Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Selecione a branch **main** e a pasta **/ (root)**
6. Clique em **Save**
7. Aguarde alguns minutos e acesse: `https://username.github.io`

### Opção 2: Repositório com Nome Personalizado

1. Crie um repositório com qualquer nome (ex: `istore`)
2. **IMPORTANTE**: Se usar esta opção, você precisa ajustar o `basePath` no código:
   - Edite `/app/frontend/next.config.mjs`
   - Descomente e ajuste: `basePath: '/istore'` (use o nome do seu repositório)
   - Execute `yarn build` novamente
3. Faça upload de todos os arquivos do `out/` para o repositório
4. Vá em **Settings** > **Pages**
5. Configure como na Opção 1
6. Acesse: `https://username.github.io/istore`

### Opção 3: Usando Git

```bash
# No diretório out/
git init
git add .
git commit -m "Deploy iStore to GitHub Pages"
git branch -M main
git remote add origin https://github.com/username/repositorio.git
git push -u origin main
```

## ✅ Funcionalidades Incluídas

- ✅ Todas as páginas estáticas geradas
- ✅ Sistema de carrinho funcional (localStorage)
- ✅ Integração com WhatsApp
- ✅ Design responsivo
- ✅ Otimizado para performance
- ✅ SEO-friendly

## 📱 WhatsApp

O site está configurado para enviar mensagens para:
**+55 48 99670-8490**

Para alterar o número, edite os arquivos fonte em `/app/frontend/components/` e refaça o build.

## 🔄 Atualizando o Site

Sempre que fizer alterações no código fonte:

1. Execute `yarn build` na pasta `/app/frontend`
2. Os novos arquivos serão gerados em `/app/frontend/out`
3. Faça upload dos novos arquivos para o GitHub

## 🌐 Domínio Personalizado

Para usar um domínio próprio:

1. Crie um arquivo `CNAME` na raiz com seu domínio:
   ```
   seudominio.com
   ```
2. Configure os DNS do seu domínio para apontar para o GitHub Pages
3. Veja mais em: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## 🎨 Características

- **Next.js 16** - Exportado como site estático
- **React 19** - Interface moderna
- **Tailwind CSS 4.2** - Estilização responsiva
- **TypeScript** - Tipagem forte
- **Carrinho de Compras** - Com persistência local
- **WhatsApp Integration** - Checkout direto pelo WhatsApp

## 📦 Tamanho do Site

O site exportado tem aproximadamente 3-5 MB incluindo todas as imagens e assets.

## 🆘 Suporte

Se tiver problemas com o deploy:

1. Verifique se o arquivo `.nojekyll` está presente
2. Certifique-se de que todos os arquivos foram enviados
3. Aguarde 5-10 minutos após o primeiro deploy
4. Limpe o cache do navegador

---

**Site gerado em:** 26 de Fevereiro de 2025
**Versão:** 1.0.0
