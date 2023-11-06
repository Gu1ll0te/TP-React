import Carousel from "react-bootstrap/esm/Carousel"

const CarouselHome = () => {

    return (
        <Carousel>
        <Carousel.Item>
            <img 
            className="d-block w=100"
            style={{maxHeight:"500px", objectFit:'cover'}}
            src="https://img.freepik.com/foto-gratis/escena-halloween-hd-calabazas-murcielagos-luna-llena-fondo_1409-4937.jpg" 
            alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Halloween</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
            <img 
            className="d-block w=100"
            style={{maxHeight:"500px", objectFit:'cover'}}
            src="https://media.glamour.mx/photos/635a885f4bf1c58ff7314bee/4:3/w_3297,h_2473,c_limit/halloween-ku%CC%88rbis-schnitzen-hack-trick-viral-gettyimages-613872668.jpg" 
            alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Halloween</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
            <img 
            className="d-block w=100"
            style={{maxHeight:"500px", objectFit:'cover'}}
            src="https://www.cronista.com/files/image/391/391740/61786a7c6d36e_600_315!.jpg?s=db5173c1e436ce32dad68d7dfd8d7885&d=1698726757" 
            alt="Third slide" />    
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
             Halloween
            </p>
          </Carousel.Caption>

        </Carousel.Item>

        </Carousel>
    )

}

export default CarouselHome