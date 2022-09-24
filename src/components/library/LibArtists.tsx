import styled from "styled-components";
import LibNoData from "./LibNoData";
import { FaUserPlus } from "react-icons/fa";

const StyledSection = styled.section`
  height: 100%;
`;

const LibArtists = () => {
  const data = null;

  return (
    <StyledSection>
      {data ? (
        <div className="grid"></div>
      ) : (
        <LibNoData
          icon={<FaUserPlus size={"5em"} />}
          title={"Start following your first artist"}
          text={"Follow artists you like, by pressing Follow button."}
          btnText={"Find artists"}
          onClick={() => {}}
        />
      )}
    </StyledSection>
  );
};

export default LibArtists;
