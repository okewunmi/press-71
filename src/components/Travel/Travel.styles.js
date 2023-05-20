import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(232, 233, 237, 1);
  padding: 2rem 4rem;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 1.2rem 6rem;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding: 1.5rem 6rem;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 1.5rem 3rem;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 2rem 3rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 2rem 4rem;
  }
  .heading {
    display: flex;
    align-items: center;
    &--txt {
      font-size: 1.7rem;
    }
  }
  .underline {
    width: 75%;
    border-bottom: 1px solid var(--lightGrey);
    @media only screen and (max-width: 600px) {
      display: none;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      width: 0%;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      width: 65%;
      border-bottom: 1px solid var(--lightGrey);
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      width: 70%;
      border-bottom: 1px solid var(--lightGrey);
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      width: 75%;
      border-bottom: 1px solid var(--lightGrey);
    }
  }
  .btn-box {
    display: flex;

    text-transform: uppercase;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 700;

    color: var(--black);
    &--cicle {
      margin-left: 0.8rem;
      outline: none;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 1);
      box-shadow: 3px 2px 3px 0 rgba(196, 196, 196, 1),
        -3px -2px 5px 0 rgba(255, 255, 255, 1);
      &:hover {
        cursor: pointer;
        box-shadow: inset 1px 1px 3px 0 rgba(196, 196, 196, 1),
          inset -1px -1px 3px 0 rgba(255, 255, 255, 1);
        color: rgba(0, 255, 255, 1);
      }
      &__black {
        border: 1px solid var(--grey);
        display: block;
        width: 2rem;
        height: 2rem;
        border: 1px solid #333;
        background: rgba(0, 0, 0, 1);
        box-shadow: -1px -1px 4px 0 rgba(99, 99, 99, 1),
          1px 1px 4px 0 rgba(0, 0, 0, 1);
        transition: all 0.3s ease-in-out;
        color: var(--grey);
        margin-left: 0.8rem;
        border-radius: 50%;
        transition: all 0.3s;

        :hover {
          color: var(--white);
          cursor: pointer;
          box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 1),
            inset -1px -1px 4px 0 rgba(99, 99, 99, 1);
        }
      }
    }
  }
`;
export const Card = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .white {
    color: var(--white);
  }
  .box-btn {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  .page-btn {
    padding: 0.7rem 2rem;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 1);
    border-radius: 0.4rem;
    border: 2px solid #333;
    box-shadow: -1px -1px 4px 0 rgba(99, 99, 99, 1),
      1px 1px 4px 0 rgba(0, 0, 0, 1);
    cursor: pointer;
    transition: var(--transition);
    font-weight: bold;

    :active,
    :hover {
      box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 1),
        inset -1px -1px 4px 0 rgba(99, 99, 99, 1);
      color: var(--white);
      cursor: pointer;
    }
  }
  .container {
    font-family: Flex;
    padding: 1.8rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      padding: 1.5rem 0;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, 1fr);
      place-items: center;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding: 1.5rem 0;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, 1fr);
      place-items: center;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      place-items: center;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      place-items: center;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      place-items: center;
    }

    &-txt {
      display: flex;
      background: linear-gradient(
        to right bottom,
        rgba(0, 0, 0, 1),
        rgba(99, 99, 99, 1)
      );
      padding: 1.4rem 2rem;
      flex-direction: column;
      height: 22rem;
      justify-content: space-between;
      width: 100%;
      color: var(--white);
      :hover {
        background: rgba(0, 0, 0, 0.9);
        cursor: pointer;
      }
      @media only screen and (max-width: 600px) {
        height: 18rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        padding: 1.3rem 2rem;
        height: 18rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        padding: 1.3rem 2rem;
        height: 20rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        padding: 1.3rem 2rem;
        height: 20rem;
      }

      &--head {
        display: flex;
        align-items: center;
        width: 100%;
        text-transform: uppercase;
        justify-content: space-between;
        p {
          font-weight: bold;
          font-size: 0.8rem;
          @media only screen and (max-width: 600px) {
            font-size: 0.6rem;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            font-size: 0.7rem;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            font-size: 0.7rem;
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            font-size: 0.75rem;
          }
        }
        .date {
          color: red;
        }
        .author {
          color: var(--grey);
        }
      }
      &--body {
        display: flex;
        flex-direction: column;

        a {
          color: var(--white);
          font-size: 1.2rem;
          @media only screen and (max-width: 600px) {
            font-size: 0.9rem;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            font-size: 0.9rem;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            font-size: 1rem;
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            font-size: 1rem;
          }
        }
        p {
          font-size: 0.7rem;
          color: var(--grey);
          margin-top: -0.1rem;
        }
      }
    }
    &-img {
      height: 100%;
      width: 100%;
      object-fit: fill;
      background: transparent;
    }
  }
`;
