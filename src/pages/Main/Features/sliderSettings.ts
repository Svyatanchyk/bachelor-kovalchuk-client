export const SETTINGS = {
  adaptiveHeight: true,
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  centerPadding: "40px",
  centerMode: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "30px",
      },
    },
  ],
};
