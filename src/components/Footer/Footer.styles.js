import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  // height:18rem;
  display: flex;
  flex-direction: column;
  font-family: "EB Garamond", serif;

  .logo {
    font-size: 1.6rem;
    color: var(--white);
    text-transform: uppercase;
    span {
      color: red;
    }
  }

  h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--white);
  }
  .footer {
    display: flex;
    width: 100%;
    height: 18rem;
    border-bottom: 1px solid var(--darkGrey);
  }
  .footer__logo,
  .footer__recent,
  .footer__feed {
    width: 27%;
    height: 18rem;
    display: flex;

    flex-direction: column;
    border-right: 1px solid var(--darkGrey);
  }
  .footer__logo {
    padding-top: 7rem;
    align-items: center;
  }
  .icons__box {
    color: var(--white);
    display: flex;
    justify-content: space-between;
    width: 60%;
  }
  .icon {
    padding: 0.5rem;
    color: var(--white);
    border-radius: 50%;
    border: 2px solid var(--darkGrey);
    :hover {
      color: var(--Blue-Gray);
      cursor: pointer;
    }
  }
  .footer__recent {
    color: var(--white);
    padding: 2rem;
    display: flex;
    flex-direction: column;

    &--box {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.5rem;
      margin: 1rem 0;
    }
    &--img {
      height: 3.4rem;
      width: 3.4rem;
    }
    &--txt {
      display: flex;
      flex-direction: column;
      padding: 1rem;

      .head {
        font-size: 0.7rem;
        font-weight: 400;
        margin-bottom: 0.1rem;
      }
      .txt {
        font-size: 0.6rem;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--grey);
      }
    }
  }
  .footer__category {
    width: 19%;
    border-right: 1px solid var(--darkGrey);
    display: flex;
    flex-direction: column;
    padding: 2rem 2.4rem;
    align-items: center;

    &--txt {
      color: var(--grey);
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: -0.7rem;

      p {
        font-size: 0.8rem;
      }
    }
  }
  .footer__feed {
    color: var(--grey);
    padding: 2rem;
    .twitter {
      color: red;
    }
  }
  .footer__comment {
    background: black;
    height: 5rem;
    display: flex;
    padding: 2rem;
    align-self: center;

    // text-align:center;
    p {
      font-size: 0.8rem;
      color: var(--grey);
    }
  }
`;
