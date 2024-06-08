// footer.js
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide("#splide3", {
    type: "loop",
    classes: {
      arrow: "splide__arrow scale-150 bg-white scale-95 opacity-100 shadow-md",
      pagination: "splide__pagination top-[750px]",
      active: "splide__pagination__page bg-black",
      page: "splide__pagination__page h-6 w-6 shadow-md mx-2 md:mx-4",
    },
  });
  splide.mount();

  var reviews = new Splide("#reviews", {
    type: "loop",
    drag: "free",
    perPage: 4,
    classes: {
      arrow: "splide__arrow scale-150 bg-white scale-95 opacity-100 shadow-md",
      pagination: "splide__pagination top-[400px]",
      page: "splide__pagination__page h-6 w-6 border-2 border-slate-500 shadow-md mx-2 md:mx-4",
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 2,
      },
      1280: {
        perPage: 3,
      },
      1536: {
        perPage: 4,
      },
    },
  });
  reviews.mount();
});
