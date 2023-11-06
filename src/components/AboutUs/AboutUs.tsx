import Card from 'react-bootstrap/Card';

const AboutUs = () => {
    return (
        <>
            <h1 style={{margin: '20px'}} >Sobre Nosotros</h1>
            <p style={{margin: '20px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum repudiandae illo qui veniam, doloribus, saepe beatae quam aliquid est rerum sunt harum consequatur quasi hic impedit autem quas recusandae!</p>
            <div 
            style={{
                display: 'flex', margin: '15px',
                justifyContent: 'center' 
            }}
            > 
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src="https://img.asmedia.epimg.net/resizer/uU6dxmYRMzrUuT0j5LDJ-oHvwM0=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/JNRQTA3N6NIFLDNS7JSXJZFG5A.jpg" /> 
                <Card.Body>
                    <Card.Title>Disfraz Chucky</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card> 
                
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNZXmFwznv3EdWcYIWhRcDCOaaDZIIkv8ug&usqp=CAU"/> 
                <Card.Body>
                    <Card.Title>Disfraz Esqueleto</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src=" https://s1.eestatic.com/2019/10/28/sociedad/consumo/consumo_440217467_136470020_1280x1706.jpg" /> 
                <Card.Body>
                    <Card.Title>Disfraz Coco (de Disney)</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            
        </>
    );
}

export default AboutUs;