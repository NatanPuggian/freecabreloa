/* ============================================================
   CONFIG DA LP — troque só aqui pra usar com outro afiliado
   ============================================================ */
window.LP_CONFIG = {
  // Link de destino de TODOS os botões: convite do grupo no Telegram.
  //
  // ATENCAO: hoje isto é só o FALLBACK. O tracker.js do Trackgram
  // sobrescreve o href em runtime com o deep-link do bot
  // (telegram.me/cabreloafree_bot?start=tg_XXXX). Ou seja, na prática
  // o clique vai pro BOT, não pra este convite — este link só entra em
  // ação se o Trackgram não carregar (adblock, offline, erro de rede).
  //
  // Se a intenção é o botão levar direto pro grupo, o Trackgram precisa
  // parar de reescrever os CTAs (ver nota no README).
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
