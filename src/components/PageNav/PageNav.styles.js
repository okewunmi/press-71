import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 3rem;
  background: var(--white);
  border-bottom: 1px solid var(--Blue-Gray);
  margin-bottom: 3rem;

  .nav-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10rem;

    &__box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      font-weight: bold;
      :not(:first-child) {
        border-left: 1px solid var(--Blue-Gray);
      }
      p {
        font-size: 0.8rem;
      }
      .Button__icons {
        font-size: 2.5rem;
        /* fill: var(--Blue-Gray); */
      }
      button {
        border: 1px solid var(--Blue-Gray);
        outline: none;
        padding: 0.55rem;
        border-radius: 100%;
        background: none;
        font-size: 0.8rem;
        animation: all 0.3s;
        color: grey;
        :hover {
          background: black;
          color: var(--white);
          border: 1px solid black;
          cursor: pointer;
        }
      }
    }
  }
`;
