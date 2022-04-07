import styled from "styled-components";


const Card = styled.div`
  position: relative;
  background: var(--white);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  :hover{
    background: var(--blue);
  }
`;

const Numbers = styled.div`
  position: relative;
  font-weight: 500;
  font-size: 2.5em;
  color: var(--blue);
  :hover {
    color: var(--white);
  }
`;

const CardName = styled.div`
  color: var(--black2);
  font-size: 1.1em;
  margin-top: 5px;
  :hover {
    color: var(--white);
  }
`;

const Icon = styled.div`
  font-size: 3em;
  color: var(--black2);
  :hover {
    color: var(--white);
  }
`

export { Card, Numbers, CardName, Icon };
