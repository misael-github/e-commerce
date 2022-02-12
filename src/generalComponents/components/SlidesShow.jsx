// import arrowLeft from "../../assets/iconmonstr-angel-left-thin.svg".
import { ReactComponent as ArrowLeft } from "../../assets/iconmonstr-angel-left-thin.svg";
import { ReactComponent as ArrowRight } from "../../assets/iconmonstr-angel-right-thin.svg";
import styled from "styled-components";
import "../styles/slidesShow.css";
import { useRef, useEffect, useCallback } from "react";

const SlideShow = ({children, controls = true, autoplay= true, velocity = 3000, interval = 3000}) => {
  // Devuelve un objeto con la propiedad current.
  const slideshow = useRef(null);
  const intervalSlidershow = useRef(null);

  const following = useCallback(() => {

       // Condicional para que no se rompa el codigo si no hay slides.
       if (slideshow.current.children.length > 0) {
         // Obtenemos el primer elemento del slide show.
         const firstElement = slideshow.current.children[0];
   
         // Establecemos la transition para el slideshow.
         slideshow.current.style.transition = `${velocity}ms ease-out all`;
   
         // Obtenemos el ancho del slideshow.
         const sizeSlide = slideshow.current.children[0].offsetWidth;
   
         // Movemos el slideshow.
         slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
   
         const transition = () => {
           // Reiniciamos la posicón de slideshow.
           slideshow.current.style.transition = "none";
           slideshow.current.style.transform = `translateX(0)`;
   
           // Tomamos el primer elemento y lo mandamos al final.
           slideshow.current.appendChild(firstElement);
   
           slideshow.current.removeEventListener("transitionend", transition);
         };
   
         // EventListener para cuando termina la transition
         slideshow.current.addEventListener("transitionend", transition);
        }
  }, [])

  const previous = () => {
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow
      const index = slideshow.current.children.length - 1;
      const latestElement = slideshow.current.children[index];
      slideshow.current.insertBefore(
        latestElement,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      const sizeSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${velocity}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
      if(autoplay){
          intervalSlidershow.current = setInterval(() => {
            following();
          }, interval);
      
          // Eliminamos los intervalos
          slideshow.current.addEventListener("mouseenter", () => {
            clearInterval(intervalSlidershow.current);
          });
      
          // Reanudamos el intervalo cuando saquen el cursor del slider
          slideshow.current.addEventListener("mouseleave", () => {
            intervalSlidershow.current = setInterval(() => {
              following();
            }, interval);
          });
      }
  }, [autoplay, interval, velocity]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideShow ref={slideshow}>
          {children}
      </ContenedorSlideShow>
      { controls && <Controles>
        <Boton className="button-arrow-slide" onClick={previous}>
          <ArrowLeft></ArrowLeft>
        </Boton>
        <Boton derecho className="button-arrow-slide" onClick={following}>
          <ArrowRight></ArrowRight>
        </Boton>
      </Controles>}
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;
const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;
const Slide = styled.div`
min-width:100% ;
overflow:hidden;
transition: .3s ease all:
z-index:10;
max-height: 400px;
position:relative;

img{
    width:100%;
    vertical-align:top;
}
`;
const TextoSlide = styled.div`
  background: ${(props) =>
    props.backgrounColor ? props.backgrounColor : "rgba(0, 0, 0, .3)"};
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  width: 100%;
  padding: 0px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 700px) {
    position: relative;
    background: #000;
    padding: 1px 60px;
  }
`;
const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  // &:hover{
  //     background:rgba(0, 0, 0, .2);
  //     path{ // Etiqueta de svg para acceder y modificar sus propiedades
  //         fill:#fff;// Propiedad con la que cambiamos el color del svg
  //     }
  // }

  path {
    // Le agregamos un filtro en el borde
    filter: ${(props) =>
      props.derecho
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }

  ${(props) => (props.derecho ? "right:0" : "left:0")}
`;

export { SlideShow, Slide, TextoSlide };
