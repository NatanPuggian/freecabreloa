/* ============================================================
   CONFIG DA LP — troque só aqui pra usar com outro afiliado
   ============================================================ */
window.LP_CONFIG = {
  // FALLBACK dos botões — quase nunca é usado, e isso é de propósito.
  //
  // Quem manda no destino do clique é o Trackgram: o tracker.js reescreve
  // o href dos 3 CTAs em runtime, com o grupo que estiver amarrado ao
  // canal configurado no index.html (hoje canal 179). Comportamento
  // confirmado e intencional — para trocar o destino, mexa no painel do
  // Trackgram, não aqui.
  //
  // Este link só entra em ação se o tracker.js não carregar
  // (adblock, offline, erro de rede).
  ctaUrl: "https://telegram.me/+m75Z-mJHz7RjYTJh",

  // Barra fixa do topo
  vagas: 6,
  regiao: "tua região",          // o original troca por geo-IP; aqui é fixo

  // Contador da seção final (em segundos)
  countdownSeconds: 60,

  // Toast de prova social
  socialProof: {
    enabled: true,
    primeiroDelay: 9000,          // ms até o 1º toast
    duracao: 5000,                // ms que cada toast fica na tela
    intervalo: 13000,             // ms entre um toast e outro
    texto: "acabou de entrar no grupo",
    nomes: ["Thiago","Beatriz","Lucas","Amanda","Rafael","Juliana",
            "Bruno","Carla","Diego","Fernanda","Gabriel","Larissa",
            "Matheus","Patrícia","Rodrigo","Vitória"]
  }
};
