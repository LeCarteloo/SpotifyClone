import styled from "styled-components";

type LibNoDataProps = {
  icon: JSX.Element;
  title: string;
  text: string;
  btnText: string;
  onClick: () => void;
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85vh;
  gap: 1em;
  margin-top: -5.5em;
  h1 {
    margin-bottom: 8px;
    margin-top: 20px;
    font-size: clamp(1.5em, 4vw, 2.2em);
    text-align: center;
  }
  span {
    margin-bottom: 32px;
    margin-top: 2em;
    text-align: center;
  }
  button {
    padding: 0.8em 2em;
    background-color: var(--text-base);
    color: var(--text-press);
    text-decoration: none;
    font-weight: 600;
    border-radius: var(--radius-big);
    ${({ theme }) => theme.mixins.scaleHover}
  }
`;

const LibNoData = ({ icon, title, text, btnText, onClick }: LibNoDataProps) => {
  return (
    <StyledDiv>
      {icon}
      <h1>{title}</h1>
      <span>{text}</span>
      <button onClick={onClick}>{btnText}</button>
    </StyledDiv>
  );
};

export default LibNoData;
