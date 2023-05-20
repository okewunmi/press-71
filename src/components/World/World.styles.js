import styled from "styled-components";
import photo from "../../assets/img-5.jpg";

export const Wrapper = styled.div`
  padding: 3rem 5rem 7.5rem 5rem;
  background: rgba(232, 233, 237, 1);
  /* background: rgba(232, 233, 237, 0.3); */

  @media only screen and (max-width: 600px) {
    padding: 3rem 5rem 7.5rem 5rem;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding: 3rem 5rem 7.5rem 5rem;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 3rem 5rem 7.5rem 5rem;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 3rem 4rem 7.5rem 4rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 3rem 5rem 7.5rem 5rem;
  }

  .heading {
    display: flex;
    align-items: center;
    &--txt {
      font-size: 1.7rem;
      @media only screen and (max-width: 600px) {
        font-size: 1.3rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        font-size: 1.4rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        font-size: 1.5rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        font-size: 1.4rem;
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        font-size: 1.7rem;
      }
    }
  }
  .underline {
    width: 75%;
    border-bottom: 1px solid var(--lightGrey);

    @media only screen and (max-width: 600px) {
      width: 40%;
      border-bottom: 1px solid var(--lightGrey);
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      width: 45%;
      border-bottom: 1px solid var(--lightGrey);
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      width: 58%;
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
    }
  }
`;
export const Content = styled.div`
  /* height: 28.5rem; */
  padding-top: 0.5rem;
  background: (--white);
  display: flex;
  align-items: center;
  color: var(--black);
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  .minute {
    color: var(--grey);
  }
  .blue-grey {
    color: var(--Blue-Gray);
  }

  .center {
    width: 44%;
    height: 28.5rem;
    background: linear-gradient(
        to right bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.5)
      ),
      url(${photo});
    background-size: 100%, cover;
    background-position: center;
    display: flex;
    /* padding: 2rem; */
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    align-items: center;
    color: var(--white);

    @media only screen and (max-width: 600px) {
      display: none;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      display: none;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      display: none;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      display: none;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      width: 40%;
      height: 28.5rem;
      background: linear-gradient(
          to right bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.5)
        ),
        url(${photo});
      background-size: 100%, cover;
      background-position: center;
      display: flex;
      /* padding: 2rem; */
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      align-items: center;
      color: var(--white);
    }
    &__btn {
      width: 100%;
      display: flex;
      top: 50%;
      position: absolute;
      align-items: center;
      justify-content: space-between;
      transition: var(--transition);

      .btn--arrow {
        padding: 0.7rem 1rem;
        border: none;
        :hover {
          transform: scale(1.2);
          color: var(--white);
          border-radius: 2px;
          background: var(--grey);
          padding: 0.7rem 1.1rem;
        }
      }
    }

    &__text {
      /* background: var(--white); */
      background: rgba(232, 233, 237, 1);
      width: 80%;
      height: 9rem;
      top: 22rem;
      padding: 1rem 3.5rem;
      display: flex;
      position: absolute;
      flex-direction: column;
      align-items: center;

      &--link {
        color: var(--black);
        padding-top: 0.9rem;
        p {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
        }
      }
      &--box {
        background: red;
        margin-top: -2.3rem;
        width: 35%;
        text-align: center;
        p {
          font-size: 0.75rem;
          font-weight: 700;
        }
      }
    }
  }
  .left {
    width: 28%;
    height: 28.5rem;
    display: flex;
    flex-direction: column;
    color: var(--black);
    /* padding-right: 1.5rem; */

    @media only screen and (max-width: 600px) {
      width: 80%;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      width: 80%;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      width: 50%;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      width: 40%;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      width: 30%;
    }

    .text {
      a {
        text-decoration: none;
      }
    }
    &-text {
      font-size: 0.6rem;
      font-weight: 600;
    }
    &-head {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      color: var(--grey);
    }
    &-txt {
      color: black;
      margin-top: -0.8rem;

      &--head {
        color: black;
        font-size: 0.75rem;
        line-height: 1.1;
        font-weight: 600;
      }
    }
    &-icon {
      color: red;
      font-size: 1rem;
    }
    &-time {
      display: flex;
      /* width: 75%; */
      padding-right: 2rem;
      text-transform: uppercase;
      justify-content: space-between;
      margin-top: -0.6rem;
      border-bottom: 2px solid var(--lightGrey);

      p {
        font-size: 0.65rem;
        font-weight: bolder;
      }
      span {
        color: var(--Blue-Gray);
      }
    }
    .minute {
      color: var(--grey);
    }
    .blue-grey {
      color: var(--Blue-Gray);
    }
  }
  .padLeft {
    padding-left: 1.5rem;

    @media only screen and (max-width: 600px) {
      padding-left: 0;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding-left: 0;
      /* padding-left: 0; */
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
      padding-left: 0;
      margin-bottom: 1rem;

      /* padding-left: 1.5rem; */
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      padding-left: 1.5rem;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      padding-left: 1.5rem;
    }
  }
  .padRight {
    padding-right: 1rem;
    @media only screen and (max-width: 600px) {
      padding-right: 0;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding-right: 0;
      /* padding-left: 0; */
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
      padding-right: 0;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      padding-right: 1rem;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      padding-right: 1rem;
    }
  }
  .right {
    width: 28%;
    height: 28.5rem;
    /* padding-left: 1.5rem; */

    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
      width: 90%;
      margin-top: 2.5rem;
      padding-left: 0;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      width: 90%;
      margin-top: 2.5rem;
      margin-bottom: 1.2rem;
      /* padding-left: 0; */
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      width: 50%;
      margin-top: 0;
      /* padding-left: 1.5rem; */
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      width: 50%;
      margin-top: 0;
      /* padding-left: 1.5rem; */
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      width: 30%;
      /* padding-left: 1.5rem; */
    }

    .Premium__box {
      width: 95%;
      height: 6rem;
      display: flex;
      margin-bottom: 0.6rem;
      align-items: center;
      padding: 0.4rem 0.5rem;
      background: rgba(232, 233, 237, 1);
      border-radius: 0.3rem;
      border: 1px solid rgba(255, 255, 255, 1);
      box-shadow: 3px 2px 3px 0 rgba(196, 196, 196, 1),
        -3px -2px 5px 0 rgba(255, 255, 255, 1);
      transition: var(--transition);

      @media only screen and (max-width: 600px) {
        width: 92%;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        width: 92%;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        width: 93%;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        width: 96%;
      }
      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        width: 96%;
      }
      &:hover {
        cursor: pointer;
        box-shadow: inset 1px 1px 3px 0 rgba(196, 196, 196, 1),
          inset -1px -1px 3px 0 rgba(255, 255, 255, 1);
        color: rgba(0, 255, 255, 1);
        transform: translateX(1rem);
      }
      a {
        text-decoration: none;
      }
    }
    .Premium__img {
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 50%;
      border: 3px solid var(--Blue-Gray);
      object-fit: cover;
      @media only screen and (max-width: 600px) {
        width: 3.4rem;
        height: 3.4rem;
        border: 2px solid var(--Blue-Gray);
      }
    }
    .Premium__img--box {
      position: relative;
    }
    .Premium__img--circle {
      height: 1.4rem;
      width: 1.4rem;
      border-radius: 50%;
      background: red;
      color: var(--white);
      font-weight: bold;
      object-fit: cover;
      position: absolute;
      top: -2px;
      left: -5px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 0.6rem;
      }
    }
    .Premium__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 0.7rem;
    }
    .Premium__time {
      display: flex;
      justify-content: space-between;

      align-items: center;
      text-transform: uppercase;
      p {
        font-size: 0.6rem;
        font-weight: bold;
      }

      &-txt {
        font-size: 0.75rem;
        font-weight: 500;

        a {
          color: var(--black);
        }
      }
      .blue-grey {
        color: var(--Blue-Gray);
      }
      .grey {
        color: var(--grey);
      }
      .creator {
        /* width: 6rem; */
      }
    }
    .btn {
      display: flex;
      justify-content: space-around;
    }
    button {
      outline: none;

      padding: 0.5rem 0.8rem;
      text-transform: uppercase;
      border-radius: 3px;
      transition: all 0.3s;
      color: #3498db;
      box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
      // background: var(--grey);
      font-weight: bold;
      &:focus {
        color: #3498db;
        box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
      }
      /* color: var(--white);
        background-color: var(--black);
        transform: scale(1.2); */
    }
  }
`;
