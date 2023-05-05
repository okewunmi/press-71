import styled from "styled-components";
import photo from "../../assets/img-5.jpg";

export const Wrapper = styled.div`
  padding: 3rem 5rem 7.5rem 5rem;
  background: rgba(232, 233, 237, 0.3);

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
  height: 28.5rem;
  padding-top: 0.5rem;
  background: (--white);
  display: flex;
  color: var(--black);
  justify-content: space-between;

  .minute {
    color: var(--grey);
  }
  .blue-grey {
    color: var(--Blue-Gray);
  }

  .center {
    width: 44%;
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
      background: var(--white);
      width: 80%;
      height: 9rem;
      top: 20rem;
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
    display: flex;
    flex-direction: column;
    color: var(--black);
    padding-right: 1.5rem;

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
      padding-right: 4rem;
      text-transform: uppercase;
      justify-content: space-between;
      margin-top: -0.6rem;
      border-bottom: 2px solid var(--lightGrey);

      p {
        font-size: 0.75rem;
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

  .right {
    width: 28%;
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;

    .Premium__box {
      width: 19rem;
      height: 7rem;
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
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 3px solid var(--Blue-Gray);
      object-fit: cover;
    }
    .Premium__img--box {
      position: relative;
    }
    .Premium__img--circle {
      height: 1.5rem;
      width: 1.5rem;
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
        font-size: 0.7rem;
      }
    }
    .Premium__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 0.4rem;
    }
    .Premium__time {
      display: flex;
      justify-content: space-between;
      /* margin-bottom: -1.2rem; */
      align-items: center;
      text-transform: uppercase;
      p {
        font-size: 0.54rem;
        font-weight: bold;
      }

      &-txt {
        font-size: 0.7rem;
        font-weight: 700;
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
      // border: none;
      outline: none;
      /* border: 1px solid var(--black); */
      /* color: var(--black); */
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
