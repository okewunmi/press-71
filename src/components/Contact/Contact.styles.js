import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 3rem 5rem;
  background: rgba(232, 233, 237, 1);

  .contact {
    display: flex;
    justify-content: space-between;

    .newsletter {
      padding: 1rem 3rem;
    }
    .podcast {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      .txt {
        text-align: center;
        word-spacing: 1px;
      }
      .space-around {
        padding: 0 1rem;
      }
      .coloured {
        color: var(--Blue-Gray);
      }
      .name {
        font-size: 0.8rem;
        text-transform: uppercase;
      }
    }
    .box {
      width: 23.5rem;
      height: 13rem;
      border: 1px solid var(--grey);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .head {
        display: flex;
        flex-direction: column;
        align-items: center;

        .heading {
        }
        p {
          font-size: 0.8rem;
          font-weight: light;
          color: var(--grey);
          margin-top: -0.4rem;
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;

      input {
        width: 17rem;
        height: 2.2rem;
        padding: 1rem;
        outline: none;
        transition: var(--transition);
        border: 1px solid var(--grey);
        :focus {
          border: 2px solid var(--Blue-Gray);
        }
      }
    }
    .btn-contact {
      width: 17rem;
      height: 2.2rem;
      margin-top: -0.5rem;
      background: black;
      color: var(--white);
      font-weight: bold;
      font-size: 0.8rem;
      text-transform: uppercase;
      border: none;
      transition: var(--transition);
      cursor: pointer;
      :hover {
        color: var(--Blue-Gray);
      }
    }
  }
  .social {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.2rem 3.2rem;

    /* align-items: center; */
    &-group {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: -0.8rem;
    }
    &-icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid var(--grey);
      width: 100%;
      padding: 0rem 1rem;
      height: 1.8rem;
      margin-bottom: 0.6rem;

      p {
        font-size: 0.8rem;
        /* color: var(--black); */
      }
    }
  }
  .grey {
    color: var(--grey);
  }
  .blue-grey {
    color: var(--Blue-Gray);
  }
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
`;
