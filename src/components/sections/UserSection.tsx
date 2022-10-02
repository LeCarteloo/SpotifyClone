import styled from "styled-components";
import UserBlock from "../blocks/UserBlock";

const StyledSection = styled.section`
  overflow: hidden;
  h2 {
    margin: 0.8em 0 0.8em 1.2em;
  }
  .user-list {
    display: flex;
    gap: 1.6em;
    overflow: auto;
    padding-bottom: 0.5em;
    min-height: 100%;
    margin: 0 1.9em;
    @media (max-width: 480px) {
      margin: 0;
      padding: 0 1.9em;
    }
  }
`;

interface UserSectionProps {
  title: string;
  type?: string;
  // Type any for testing later will be changed
  users: any;
}

const UserSection = ({ title, users, type = "Profile" }: UserSectionProps) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <div className="user-list">
        {users.map((user: any) => (
          <UserBlock
            key={user.id}
            id={user.id}
            img={user.img}
            name={user.name}
            type={type}
          />
        ))}
      </div>
    </StyledSection>
  );
};

export default UserSection;
