import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  // height:18rem;
  display: flex;
  flex-direction: column;
  font-family: "EB Garamond", serif;

  .logo {
    font-size: 1.4rem;
    color: var(--white);
    text-transform: uppercase;
    span {
      color: red;
    }
  }

  h3 {
    font-size: 0.7rem;
    text-transform: uppercase;
    color: var(--white);
  }
  .footer {
    display: flex;
    width: 100%;
    height: 18rem;
    align-items: center;
    border-bottom: 1px solid var(--darkGrey);

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      height: 12rem;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
    }
  }
  .footer__logo,
  .footer__recent,
  .footer__feed {
    width: 27%;
    height: 18rem;
    display: flex;

    flex-direction: column;
    border-right: 1px solid var(--darkGrey);

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
      border-right: none;
    }
  }
  .footer__logo {
    padding-top: 7rem;
    align-items: center;

    @media only screen and (max-width: 768px) {
      padding-top: 3rem;
    }
  }
  .icons__box {
    color: var(--white);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 45%;
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
    padding: 1.5rem;
    display: flex;
    flex-direction: column;

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
      display: none;
    }

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
      padding: 0.9rem;

      .head {
        font-size: 0.7rem;
        font-weight: 400;
        margin-bottom: 0.1rem;

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          font-size: 0.6rem;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          font-size: 0.6rem;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          font-size: 0.6rem;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          font-size: 0.6rem;
        }
        @media only screen and (min-width: 1200px) {
          font-size: 0.7rem;
          font-weight: 400;
          margin-bottom: 0.1rem;
        }
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

    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    /* align-items: center; */

    @media only screen and (max-width: 768px) {
      display: none;
    }

    &--txt {
      color: var(--grey);
      display: flex;
      justify-content: space-between;
      width: 100%;
      /* margin-bottom: -0.3rem; */

      p {
        font-size: 0.8rem;
      }
    }
  }
  .footer__feed {
    color: var(--grey);
    padding: 1.5rem;
    border-left: 1px solid var(--darkGrey);
    .twitter {
      color: red;
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .footer__comment {
    background: black;
    height: 5rem;
    display: flex;

    padding: 1rem;
    align-self: center;
    color: var(--grey);

    @media only screen and (max-width: 768px) {
    }

    // text-align:center;
    p {
      font-size: 0.75rem;
      color: var(--grey);
      text-align: center;
    }
    a {
      color: var(--Blue-Gray);
    }
  }
`;
