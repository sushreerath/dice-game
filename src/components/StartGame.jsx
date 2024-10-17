import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <StyledImage src="images/dice.jpeg" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

// Styled Components
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 72px;
      font-weight: bold;
      letter-spacing: 2px;
      color: #ffcc00; 
      text-transform: uppercase;
      text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5); 
      margin: 0;
      padding: 10px 0;
    }
  }
`;

const StyledImage = styled.img`
  width: 65%;
  height: auto;
  object-fit: cover;
  margin-left: 100px;
`;
