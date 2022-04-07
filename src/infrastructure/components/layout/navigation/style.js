import styled from "styled-components";

const Navigation = styled.div`
  position: fixed;
  width: ${props => props.toogle ? "80px" : "300px"};
  height: 100%;
  background: var(--blue);
  border-left: 10px solid var(--blue);
  transition: 0.5s;
  overflow: hidden;
`;

const  Ul = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const  Li = styled.li`
  position: relative;
  width: 200%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  :hover {
    background: var(--white);
  }
  :hover a{
    color: var(--blue);
  }
  :hover a::before {
    content: " ";
    position: absolute;
    right: 0;
    top: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 35px 35px 0 10px var(--white);
    pointer-events: none;
  }
  :hover a::after {
    content: " ";
    position: absolute;
    right: 0;
    bottom: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 35px -35px 0 10px var(--white);
    pointer-events: none;
  }
  :nth-child(1) {
    margin-bottom: 40px;
    pointer-events: none;
  }
`;

const  Ancla = styled.a`
  position: relative;
  display: block;
  width: 50%;
  display: flex;
  text-decoration: none;
  color: var(--white);
  :hover a{
    color: var(--blue);
  }
`;

const  Icon = styled.span`
  position: relative;
  display: block;
  min-width: 60px;
  line-height: 70px;
  text-align: center;
  ion-icon{
    font-size: 1.75em;
  }
`;

const  Title = styled.span`
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
`;

export { Navigation, Ul, Li, Ancla, Icon, Title };