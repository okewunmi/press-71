import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 3rem 6rem;
  background: rgba(232, 233, 237, 1);

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 3rem 1rem;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding: 3rem 1rem;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 3rem 2rem;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 3rem 3rem;
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 3rem 5rem;
  }
  .contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      flex-direction: column;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      flex-direction: column;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      flex-direction: row;
    }
    @media only screen and (min-width: 1200px) {
      flex-direction: row;
    }

    .newsletter {
      padding: 1rem 3rem;

      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        padding: 1rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        padding: 1rem 1.8rem;
      }
      @media only screen and (min-width: 1200px) {
        padding: 1rem 2rem;
      }
    }

    .podcast {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        padding: 1rem 1.5rem;
      }

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
      width: 24rem;
      height: 13rem;
      border: 1px solid var(--grey);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 1rem;

      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        width: 23rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        width: 23rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        width: 28rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        width: 28rem;
      }
      @media only screen and (min-width: 1200px) {
        width: 24rem;
      }

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
        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          width: 25rem;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          width: 25rem;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          width: 17rem;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          width: 17rem;
        }
        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          width: 17rem;
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
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        width: 25rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        width: 25rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        width: 17rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        width: 17rem;
      }
      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        width: 17rem;
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
