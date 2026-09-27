gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

function animarPagina() {
  // animação da seção hero
  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  // animação da seção cards
  gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cards",
      markers: false,
      start: "0% 80%",
      end: "100% 70%",
      scrub: true,
    },
  });

  gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".secaoObrigado ul",
      markers: false,
      start: "0% 80%",
      end: "100% 70%",
      scrub: 2,
    },
  });

  //animações footer
  gsap.from("footer", {
    y: "-30%",
    imediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      markers: false,
      scrub: true,
      invalidateOnRefresh: true,
      end: "100% 100%",
    },
  });

  //LETRAS ANIMADAS

  //SELECIONAR TODOS OS ELEMENTOS DA PÁGINA QUE TEM A CLASSE .textoSplit:
  const grupoTextoSplit = document.querySelectorAll(".textoSplit");

  //ANIMAR OS ELEMENTOS DE FORMA INDEPENDENTE:
  grupoTextoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
      type: "lines, words, chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textoUnicoSplit,
      },
    });
  });
}

//ANIMAR PRELOADER -> CRIAR TIMELINE (SEQUENCIA DE ANIMAÇÃO)

const tl = gsap.timeline({
  onComplete() {
    animarPagina()
    gsap.to("#preloader", {
      opacity: 0,
      onComplete() {
        gsap.to("#preloader", {
          display: "none",
        });
      },
    });
  },
});

tl.to("#preloader path", {
  strokeDashoffset: 0,
  duration: 1,
});

tl.to("#preloader path", {
  strokeDashoffset: 0,
  fill: "rgb(168, 19, 19)",
  duration: 0.5,
});

//CUPON DEVARTSTG
