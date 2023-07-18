import AppLayout from "./Layout/AppLayout";
import { styled } from "styled-components";

const StyledDiv = styled.div`
height: 100%;
`
function App() {
  return (
    <>
      <StyledDiv>
        <AppLayout />
      </StyledDiv>
    </>
  );
}

export default App;
