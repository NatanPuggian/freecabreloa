/* ============================================================
   CONFIG DA LP — troque só aqui pra usar com outro afiliado
   ============================================================ */
window.LP_CONFIG = {
  // Link de destino de TODOS os botões (Telegram, WhatsApp, casa, etc.)
  ctaUrl: "https://t.me/SEU_CANAL_AQUI",

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
