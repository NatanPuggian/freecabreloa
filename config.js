/* ============================================================
   CONFIG DA LP — troque só aqui pra usar com outro afiliado
   ============================================================ */
window.LP_CONFIG = {
  // Link de destino de TODOS os botões.
  // Isto é o FALLBACK: o tracker.js do Trackgram sobrescreve o href
  // com o link rastreado do bot @cabreloafree_bot. Só vale se o
  // Trackgram não carregar (adblock, offline, erro de rede).
  ctaUrl: "https://t.me/cabreloafree_bot",

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
