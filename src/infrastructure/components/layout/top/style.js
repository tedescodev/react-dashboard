import styled from "styled-components";

const TopBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Toogle = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  cursor: pointer;
`;

const Search = styled.div`
  position: relative;
  width: 400px;
  margin: 0 10px;
  label {
    position: relative;
    width: 100%;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    padding: 5px 20px;
    padding-left: 35px;
    font-size: 18px;
    outline: none;
    border: 1px solid var(--black2);
  }
  ion-icon {
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 1.2em;
  }
`;

const UserImage = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: position;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { TopBar, Toogle, Search, UserImage };
