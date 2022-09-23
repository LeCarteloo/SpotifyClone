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
  height: 100%;
  gap: 1em;
  margin-top: -5.5em;
  h1 {
    margin-bottom: 8px;
    margin-top: 20px;
    font-size: 2.2em;
  }
  span {
    margin-bottom: 32px;
    margin-top: 2em;
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
      <button>{btnText}</button>
    </StyledDiv>
  );
};

export default LibNoData;
