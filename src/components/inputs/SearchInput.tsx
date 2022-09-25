import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;

  .input-wrapper {
    padding: 0.4em 1em;
    background-color: var(--essential-base);
    border-radius: var(--radius-big);
    color: var(--text-press);
    display: flex;
    align-items: center;
    gap: 1em;
    min-width: 120px;
  }

  input[type="text"] {
    background-color: transparent;
    border: none;
    outline: none;
    width: 110%;
    text-overflow: ellipsis;
  }
  button {
    display: flex;
    color: var(--text-press);
    align-items: center;
    visibility: hidden;

    &.show {
      visibility: visible;
    }
  }
`;

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <StyledDiv>
      <div className="input-wrapper">
        <FiSearch size={"1.8em"} />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="What do you want to listen to?"
        />
        <button
          className={`${searchTerm !== "" ? "show" : ""}`}
          onClick={() => setSearchTerm("")}
        >
          <MdOutlineClear size={"1.8em"} />
        </button>
      </div>
    </StyledDiv>
  );
};

export default SearchInput;
