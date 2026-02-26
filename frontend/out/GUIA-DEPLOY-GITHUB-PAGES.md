# 🚀 Guia de Deploy - iStore no GitHub Pages

## 📦 Arquivos Prontos para Deploy

Todos os arquivos estáticos do seu site estão na pasta:
```
/app/frontend/out/
```

Também foi criado um arquivo compactado para download:
```
/app/frontend/istore-github-pages.tar.gz (819 KB)
```

---

## 🎯 Opção 1: GitHub Pages (Recomendado)

### Passo a Passo:

#### 1. Criar Repositório no GitHub

Acesse [GitHub](https://github.com) e crie um novo repositório:

**Opção A - Site Principal:**
- Nome: `seunome.github.io` (substitua `seunome` pelo seu username)
- Deixe público
- Não adicione README, .gitignore ou licença

**Opção B - Projeto Específico:**
- Nome: qualquer nome (ex: `istore`, `loja-apple`)
- Deixe público

#### 2. Fazer Upload dos Arquivos

**Via GitHub Web:**
1. Entre no repositório criado
2. Clique em "Add file" → "Upload files"
3. Arraste TODOS os arquivos da pasta `/app/frontend/out/`
4. Commit com mensagem: "Initial commit - iStore"

**Via Git (Terminal):**
```bash
# Entre na pasta out
cd /app/frontend/out

# Inicialize o Git
git init
git add .
git commit -m "Deploy iStore to GitHub Pages"

# Conecte ao repositório remoto
git remote add origin https://github.com/SEU_USERNAME/SEU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

#### 3. Configurar GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **Save**
5. Aguarde 2-5 minutos

#### 4. Acessar o Site

**Opção A (site principal):**
```
https://seunome.github.io
```

**Opção B (projeto específico):**
```
https://seunome.github.io/nome-do-repositorio
```

---

## ⚙️ Opção 2: Deploy com Projeto Específico (Subpasta)

Se você escolheu a Opção B (projeto específico), precisa ajustar uma configuração:

### Antes do Build:

1. Edite `/app/frontend/next.config.mjs`
2. Descomente e ajuste a linha:
```javascript
basePath: '/nome-do-seu-repositorio',
```

3. Rode o build novamente:
```bash
cd /app/frontend
yarn build
```

4. Os novos arquivos estarão em `/app/frontend/out/`
5. Faça upload conforme instruções acima

---

## 📥 Como Baixar os Arquivos

### Método 1: Arquivo Compactado

O arquivo `/app/frontend/istore-github-pages.tar.gz` está pronto para download.

Para extrair:
```bash
tar -xzf istore-github-pages.tar.gz
```

### Método 2: Copiar Pasta Completa

Todos os arquivos estão em:
```
/app/frontend/out/
```

Você pode copiar esta pasta inteira para seu computador.

---

## 🌐 Domínio Personalizado (Opcional)

### Para usar seu próprio domínio:

#### 1. Criar arquivo CNAME

Na raiz do repositório, crie um arquivo chamado `CNAME` com:
```
seudominio.com
```

#### 2. Configurar DNS

No seu provedor de domínio, adicione os seguintes registros:

**Para domínio raiz (seudominio.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**Para subdomínio (www.seudominio.com):**
```
Type: CNAME
Name: www
Value: seunome.github.io
```

#### 3. Aguardar Propagação

Pode levar de 24 a 48 horas para o DNS propagar completamente.

#### 4. Ativar HTTPS

No GitHub Pages Settings, marque **Enforce HTTPS** (após DNS propagar)

---

## ✅ Checklist de Deploy

- [ ] Repositório criado no GitHub
- [ ] Todos os arquivos da pasta `out/` foram enviados
- [ ] Arquivo `.nojekyll` está incluído (importante!)
- [ ] GitHub Pages configurado em Settings > Pages
- [ ] Branch e pasta corretos selecionados
- [ ] Aguardou 2-5 minutos para deploy
- [ ] Site acessível no endereço gerado

---

## 📁 Estrutura de Arquivos Necessários

```
Seu Repositório/
├── index.html              ← Página principal (OBRIGATÓRIO)
├── 404.html               ← Página de erro
├── .nojekyll              ← Arquivo especial (OBRIGATÓRIO)
├── _next/                 ← Assets do Next.js
│   ├── static/
│   └── ...
├── categoria/             ← Páginas de categorias
│   ├── mac.html
│   ├── iphone.html
│   └── ...
├── produto/               ← Páginas de produtos
│   ├── macbook-pro-16-m4-pro.html
│   └── ...
└── images/                ← Imagens dos produtos
```

---

## 🔧 Atualizando o Site

### Sempre que fizer alterações:

1. Edite os arquivos fonte em `/app/frontend/`
2. Rode o build:
```bash
cd /app/frontend
yarn build
```
3. Novos arquivos serão gerados em `/app/frontend/out/`
4. Faça upload dos novos arquivos para o GitHub
5. GitHub Pages atualizará automaticamente em ~2 minutos

---

## 🐛 Problemas Comuns

### Site não aparece após 5 minutos
- Verifique se GitHub Pages está ativado em Settings > Pages
- Confirme que a branch correta está selecionada
- Limpe o cache do navegador (Ctrl+Shift+R)

### Erro 404 nas páginas internas
- Certifique-se que o arquivo `.nojekyll` está presente
- Verifique se todos os arquivos HTML foram enviados

### Imagens não carregam
- Confirme que a pasta `images/` foi enviada
- Verifique se a pasta `_next/` completa está no repositório

### BasePath incorreto (Opção B)
- Se o site não carregar estilos, você precisa configurar o `basePath`
- Edite `next.config.mjs` e rode `yarn build` novamente

---

## 📱 WhatsApp Configurado

O site já está configurado para enviar pedidos via WhatsApp para:

**Número:** +55 48 99670-8490

### Para alterar o número:

1. Edite `/app/frontend/components/product-detail.tsx`
2. Edite `/app/frontend/components/cart-drawer.tsx`
3. Procure por: `5548996708490`
4. Substitua pelo novo número (formato: 5548999999999)
5. Rode `yarn build` novamente

---

## 🎨 Funcionalidades do Site

✅ Carrinho de compras funcional (localStorage)
✅ 10 produtos pré-cadastrados
✅ 5 categorias (Mac, iPhone, iPad, Watch, AirPods)
✅ Design responsivo (mobile e desktop)
✅ Integração com WhatsApp
✅ Sistema de cores e quantidades
✅ Páginas otimizadas para SEO
✅ Performance otimizada

---

## 💡 Dicas Importantes

1. **Sempre inclua o arquivo `.nojekyll`** - Sem ele, o GitHub Pages pode não funcionar corretamente

2. **Use basePath somente para projetos específicos** - Se seu repositório é `seunome.github.io`, NÃO use basePath

3. **Mantenha os nomes dos arquivos** - Não renomeie os arquivos HTML gerados

4. **Não edite os arquivos da pasta `out/`** - Sempre edite os arquivos fonte e rode build novamente

5. **Cache do navegador** - Se não ver mudanças, limpe o cache (Ctrl+Shift+R)

---

## 📞 Suporte Técnico

Se tiver dúvidas sobre o deploy, consulte:

- [Documentação GitHub Pages](https://docs.github.com/pages)
- [Guia Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

**Site gerado em:** 26 de Fevereiro de 2025
**Versão:** 1.0.0
**Tamanho total:** ~3-5 MB (incluindo todas as imagens)

---

## 🎉 Pronto!

Seu site está pronto para ser publicado no GitHub Pages. Siga as instruções acima e em poucos minutos estará online!
