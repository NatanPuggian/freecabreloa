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

## Pendências

- Colar os pixels de tracking próprios antes de subir
- Se for reaproveitar as imagens, elas têm a cara do Cabreloa — trocar se a LP
  for pra outro afiliado
