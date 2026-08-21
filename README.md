# Clone — free.cabreloa.com.br

Cópia estática da LP "Grupo do Mago". O original é uma SPA React (Vite/Lovable);
aqui está tudo em HTML + CSS + JS puro, sem build, sem dependência.

## Estrutura

```
clone-cabreloa/
├── index.html         → a página inteira (DOM renderizado do original)
├── config.js          → ÚNICO arquivo que você edita pra trocar de afiliado
├── assets/
│   ├── index.css      → CSS original da página (build Tailwind, 66 KB)
│   └── app.js         → contador, toast, reveal e CTA fixo (reescritos em JS puro)
└── img/               → hero mobile, hero desktop, foto do "sobre", favicon
```

## Rodar local

```bash
npx --yes serve -l 4173 clone-cabreloa
```

Ou só abrir `index.html` no navegador — os caminhos são todos relativos.

## Trocar pra outro afiliado

Tudo em `config.js`:

- `ctaUrl` — link de destino dos 3 botões (hoje é placeholder)
- `vagas` / `regiao` — barra verde do topo
- `countdownSeconds` — contador da vaga (original: 60s)
- `socialProof` — nomes, texto e tempos do toast

O que **não** está no config e você troca direto no `index.html`: títulos, textos,
imagens em `img/` e o `<title>`/meta tags do `<head>`.

## O que mudou em relação ao original

| Item | Original | Clone |
|---|---|---|
| Renderização | React (bundle 437 KB) | HTML estático |
| Barra do topo | região por geo-IP | texto fixo em `config.js` |
| GA4 / Meta Pixel / Trackgram | ativos | **removidos** — cole os seus no `<head>` |
| Link dos CTAs | `t.me/cabreloafree?site_id=db648fb0-a2d0-4e64-a603-f7a597c47fc4` | placeholder no `config.js` |
| Contador, toast, reveal, CTA fixo | React | JS puro em `assets/app.js` |
| Fontes | Google Fonts | Google Fonts (igual) |

## Fidelidade verificada

Comparado o clone com o original no navegador:

- estilos computados do H1 e do botão CTA: **idênticos**
- altura do hero: 630px nos dois
- 4 cards de benefício nos dois
- texto renderizado: 1941 vs 1945 caracteres — a diferença de 4 é só
  `RIO DE JANEIRO` (geo-IP) contra `tua região` (fixo)
- nenhuma imagem quebrada, nenhum erro de console

## Deploy na Vercel

O projeto já está configurado. Ao criar o projeto na Vercel:

1. **Import Git Repository** → `natanferreira-commits/freecabreloa`
2. **Framework Preset:** `Other` (a Vercel detecta sozinha pelo `vercel.json`)
3. **Build Command:** deixar **vazio**
4. **Output Directory:** `.` (raiz)
5. Deploy

Não há variáveis de ambiente pra configurar.

### Por que não existe `package.json` aqui

De propósito. Se um `package.json` aparecer na raiz, a Vercel tenta rodar um
build e o deploy quebra — o site é estático puro. Não adicione um.

### O que o `vercel.json` faz

- `index.html` e `config.js` sem cache (pra editar e ver na hora)
- `assets/` com cache de 1h + stale-while-revalidate
- `img/` com cache de 1 dia + stale-while-revalidate
- `cleanUrls` ligado

O `assets/index.js` (bundle React original) está no `.vercelignore` — fica no
repo como referência, mas não vai pro deploy.

## Antes de colocar tráfego

- [ ] Trocar `ctaUrl` no `config.js` (hoje é `t.me/SEU_CANAL_AQUI`)
- [ ] Colar os pixels próprios (GA4, Meta Pixel, Trackgram) no `<head>` do `index.html`
- [ ] Se a LP for pra outro afiliado: trocar as imagens em `img/`, os textos e
      o `<title>`/meta tags — as fotos são a cara do Cabreloa
- [ ] Conferir o domínio na Vercel
