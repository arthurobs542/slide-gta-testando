//criando o DOM

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.getElementById("slides");
  const images = slides.children;
  const totalSlides = images.length;
  let index = 0;

  //constante proximo slide
  const nextSlide = () => {
    index = (index + 1) % totalSlides;
    updateSlides();
  };

  //constante para voltar o slide
  const prevSlide = () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlides(); //fução que atualiza os slides
  };

  const updateSlides = () => {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
  };

  //aqui pra lincar o botão com o proximo as funções
  document.getElementById("prox").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);
  //   setInterval(nextSlide, 6000); // Troca automática a cada 3 segundos
});
