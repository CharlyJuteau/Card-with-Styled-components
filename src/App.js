import styled from 'styled-components';

const Title = styled.h1`
font-weight:400;
text-align: center
`;


const CardBody = styled.div`
    border-radius: 5%;
    width: 18rem;
    overflow: hidden;
    box-shadow: 0px 0px 15px -5px;
    &:hover {
      background-color: #105b72c2;
      color: white;
      width: 45rem;
      height: 45rem;
    }
    

`;

const Image = styled.img`
position: relative;
overflow: hidden;
  height: 8rem;
  left: 20%;
`;

const Activities = styled.ul`
text-align: center;

`;

const Text = styled.p`
text-align: center;
`;

function App() {
  return (
    <CardBody>
        <Title>Nantes</Title>
        <Image src="https://www.flycorsair.com/sites/default/files/2022-06/AdobeStock_299134759_Editorial_Use_Only%20Nantes%20compresse.jpg" alt="Nantes" />
        <Activities>
          <li>
            Chateau des Ducs de Bretagne
          </li>
          <li>
            Machine de l'Ile
          </li>
        </Activities>
        <Text>Lorem Ipsum</Text>
    </CardBody>
  );
}

export default App;
