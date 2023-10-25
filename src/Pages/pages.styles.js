import styled from "styled-components";

export const Nav = styled.div`
  background: var(--white);
  width: 60%;
  height: 7rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  align-items: center;
  border-bottom: 1px solid var(--grey);
  align-items: center;

  .logo {
    font-size: 1.65rem;

    span {
      color: red;
    }
  }
  .icon {
    color: var(--grey);
    padding-right: 5px;
    font-size: 1.1rem;
  }
  .weather {
    display: flex;

    p {
      font-size: 12px;
      font-weight: bolder;
    }

    .right {
      padding-right: 1.3rem;
    }
    .flex,
    .right {
      display: flex;
      align-items: center;
    }
    p {
      font-size: 12px;
      font-weight: bolder;
    }
  }
`;
