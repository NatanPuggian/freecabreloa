/* ============================================================
   Comportamentos da LP (reimplementados em JS puro).
   O original era React; aqui é estático — mesma aparência,
   mesmos efeitos, zero build.
   Edite os valores em config.js, não aqui.
   ============================================================ */
(function () {
  var C = window.LP_CONFIG || {};

  /* ---------- 1. Link dos CTAs ---------- */
  if (C.ctaUrl) {
    document.querySelectorAll('a[data-cta]').forEach(function (a) {
      a.href = C.ctaUrl;
    });
  }

  /* ---------- 2. Barra do topo ---------- */
  var elVagas = document.getElementById('vagas');
  var elRegiao = document.getElementById('regiao');
  if (elVagas && C.vagas != null) elVagas.textContent = C.vagas;
  if (elRegiao && C.regiao) elRegiao.textContent = C.regiao;

  /* ---------- 3. Reveal on scroll ---------- */
  var alvos = document.querySelectorAll('.reveal, .reveal-md, .reveal-sm');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    alvos.forEach(function (el) { io.observe(el); });
  } else {
    alvos.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 4. Contador da vaga ---------- */
  var elMin = document.getElementById('cd-min');
  var elSec = document.getElementById('cd-sec');
  if (elMin && elSec) {
    var restante = C.countdownSeconds || 60;
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    var pinta = function () {
      elMin.textContent = pad(Math.floor(restante / 60));
      elSec.textContent = pad(restante % 60);
    };
    pinta();
    var tick = setInterval(function () {
      restante--;
      if (restante <= 0) { restante = 0; clearInterval(tick); }
      pinta();
    }, 1000);
  }

  /* ---------- 5. Toast de prova social ---------- */
  var sp = C.socialProof || {};
  var toast = document.getElementById('social-toast');
  if (toast && sp.enabled !== false && sp.nomes && sp.nomes.length) {
    var elNome = document.getElementById('toast-nome');
    var elTexto = document.getElementById('toast-texto');
    if (elTexto && sp.texto) elTexto.textContent = sp.texto;

    var mostra = function () {
      elNome.textContent = sp.nomes[Math.floor(Math.random() * sp.nomes.length)];
      toast.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
      toast.classList.add('opacity-100', 'translate-y-0');
      setTimeout(function () {
        toast.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
        toast.classList.remove('opacity-100', 'translate-y-0');
      }, sp.duracao || 5000);
    };

    setTimeout(function () {
      mostra();
      setInterval(mostra, sp.intervalo || 13000);
    }, sp.primeiroDelay || 9000);
  }

  /* ---------- 6. CTA fixo no rodapé ---------- */
  var sticky = document.getElementById('sticky-cta');
  var ctaFinal = document.getElementById('final-cta-button');
  if (sticky) {
    var finalVisivel = false;
    if (ctaFinal && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (e) {
        finalVisivel = e[0].isIntersecting;
        atualiza();
      }, { threshold: 0.2 }).observe(ctaFinal);
    }
    var atualiza = function () {
      var passouHero = window.scrollY > window.innerHeight * 0.8;
      if (passouHero && !finalVisivel) {
        sticky.classList.remove('opacity-0', 'translate-y-full', 'pointer-events-none');
        sticky.classList.add('opacity-100', 'translate-y-0');
      } else {
        sticky.classList.add('opacity-0', 'translate-y-full', 'pointer-events-none');
        sticky.classList.remove('opacity-100', 'translate-y-0');
      }
    };
    window.addEventListener('scroll', atualiza, { passive: true });
    atualiza();
  }
})();
