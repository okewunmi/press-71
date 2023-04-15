import styled from "styled-components";
import photo from "../../assets/photo.jpg";

export const Wrapper = styled.div`
  background: radial-gradient(
      circle at center,
      rgba(169, 169, 169, 0.1) 15%,
      rgba(0, 0, 0) 60%
    ),
    url(${photo});
  /* background: #000; */
  background-size: 100%, cover;
  background-position: center;
  height: 97vh;

  color: #fff;

  .nav {
    height: 5.5rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
    align-items: center;
    border-bottom: 1px solid var(--grey);

    .logo {
      font-size: 1.6rem;
      span {
        color: red;
      }
    }
    .icon {
      color: var(--grey);
      padding-right: 5px;
      font-size: 1.3rem;
    }
    .weather {
      display: flex;
      .right {
        padding-right: 3rem;
      }
      .flex,
      .right {
        display: flex;
        align-items: center;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .nav-section {
    display: flex;
    padding: 1.5rem 5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .nav-btn {
      display: flex;
      align-items: center;

      button {
        outline: none;
        border: none;
        text-transform: uppercase;
        background: none;
        color: var(--white);
        transition: all 0.3s;
        padding: 0.5rem 0.6rem;
        font-size: 0.75rem;
        display: block;

        :hover {
          cursor: pointer;
          transform: scale(1.2);
          transform: translateY(-7px);
          color: var(--Blue-Gray);
          background: var(--white);
        }
      }
      div {
        display: flex;
        align-items: center;
      }
    }
    .nav-search {
      form {
        display: flex;
        align-items: center;
      }
      .input-search {
        height: 2rem;
        width: 12rem;
        border-radius: 1rem;
        padding: 1.1rem 1.1rem 1.1rem 2.5rem;
        color: var(--white);
        font-size: 0.9rem;
        font-weight: 200;
        z-index: 1;
        position: relative;
        transition: all 0.4s;
        border: none;
        background: #20222d;
        box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),
          inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),
          inset -1px -2px 2px 0px rgba(77, 71, 100, 0.4);
        transition: all 0.3s ease-in-out;

        &:focus,
        &:active {
          width: 20rem;
          outline: none;
          box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),
            inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),
            inset -1px -2px 2px 0px rgba(77, 71, 100, 0.4),
            5px 5px 10px 2.5px rgba(0, 0, 0, 0.2),
            -5px -5px 10px 2.5px rgba(77, 71, 100, 0.4),
            -1px -1px 4px 2px rgba(77, 71, 100, 0.4);
        }
      }
      &-btn {
        background: none;
        border: none;
        z-index: 10;
        padding-left: 0.7rem;
        cursor: pointer;
        color: var(--Blue-Gray);
        font-size: 1.2rem;
        position: absolute;
        align-self: center;
        display: flex;
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.2rem 5rem;

    .text {
      display: flex;
      width: 42%;
      align-content: space-around;
      flex-direction: column;
      height: 100%;

      .heading {
        margin-bottom: -1rem;
        display: flex;
        align-items: center;
        text-transform: uppercase;

        p {
          color: var(--grey);
        }
      }
      .title {
        &__head {
          font-size: 1.7rem;
          line-height: 1.3;
          font-weight: 500;
          a {
            text-decoration: none;
            color: var(--white);
          }
        }
        &__txt {
          width: 75%;
          margin-top: -1.3rem;
          font-size: 0.6rem;
          font-weight: 600;
          line-height: 1.6;
          word-spacing: 1px;
          letter-spacing: 1px;
          color: var(--grey);
        }
      }
      .info {
        margin-top: 1rem;
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 0.8rem;
          font-weight: 300;
          text-transform: uppercase;
        }

        &__time {
          display: flex;
          align-items: center;
        }
        span {
          color: var(--grey);
        }
      }
      .icon-2 {
        font-size: 1.7rem;
        margin-left: -10px;
      }
    }
    &__btn {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      .btn {
        border: 1px solid var(--grey);
        display: block;
        height: 2.8rem;
        width: 2.8rem;
        border: 1px solid #333;
        background: rgba(0, 0, 0, 1);
        /* background: #20222d; */
        box-shadow: -1px -1px 4px 0 rgba(99, 99, 99, 1),
          1px 1px 4px 0 rgba(0, 0, 0, 1);
        transition: all 0.3s ease-in-out;
        color: var(--grey);
        margin-right: 1rem;
        border-radius: 50%;
        transition: all 0.3s;

        :hover {
          color: var(--white);
          /* border: 2px solid var(--white); */
          cursor: pointer;
          box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 1),
            inset -1px -1px 4px 0 rgba(99, 99, 99, 1);
        }
      }
    }
    .Premium::-webkit-scrollbar {
      width: 9px;
    }

    .Premium::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 100px;
    }

    .Premium::-webkit-scrollbar-thumb {
      background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
      box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
      border-radius: 100px;
    }
    .Premium {
      display: flex;
      flex-direction: column;
      width: 30%;
      padding: 1rem 1.2rem;
      height: 20rem;
      overflow-y: auto;
      a {
        text-decoration: none;
        color: var(--white);
      }
      a:hover {
        cursor: pointer;
      }

      &__box {
        display: flex;
        align-items: center;
        padding: 0.5rem 0.8rem;
        /* background: rgba(0, 0, 0, 1); */
        border-radius: 0.4rem;
        border: 1px solid #333;
        box-shadow: -1px -1px 4px 0 rgba(99, 99, 99, 1),
          1px 1px 4px 0 rgba(0, 0, 0, 1);
        margin-bottom: 0.7rem;

        &:hover {
          cursor: pointer;
          box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 1),
            inset -1px -1px 4px 0 rgba(99, 99, 99, 1);
        }
      }
      &__img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: cover;
      }
      &__img--box {
        position: relative;
      }
      &__img--circle {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        background: red;
        color: var(--white);
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
      &__content {
        display: flex;
        flex-direction: column;

        padding-left: 0.8rem;
      }
      &__time {
        display: flex;
        justify-content: space-between;
        margin-bottom: -0.9rem;
        text-transform: uppercase;
        p {
          font-size: 0.7rem;
        }

        &-txt {
          font-size: 0.8rem;
          font-weight: 500;
        }
      }
      .blue-grey {
        color: var(--Blue-Gray);
      }
      .grey {
        color: var(--grey);
      }
      .red {
        color: red;
      }
    }
  }
`;
