import styled from "styled-components";
import photo from "../../assets/img-5.jpg";

export const Wrapper = styled.div`
  padding: 2.5rem 5rem;

  h2 {
    text-transform: uppercase;
  }
  .heading {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.8rem;

    &--txt {
      font-size: 1.8rem;
    }
  }
  .underline {
    width: 13.6rem;
    border-bottom: 3px solid red;
    margin-top: -1.4rem;
  }
`;
export const Content = styled.div`
  height: 25rem;
  background: (--white);
  display: flex;
  color: var(--black);
  justify-content: space-between;

  .center {
    width: 50%;
    background: linear-gradient(
        to right bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.5)
      ),
      url(${photo});
    background-size: 100%, cover;
    background-position: center;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    color: var(--white);

    &--box {
      background: red;
      padding: 0 1rem;
      display: flex;
      justify-content: flex-start;
      text-transform: uppercase;
      width: 6rem;
    }
    &--link {
      color: var(--white);
      p {
        font-size: 1.4rem;
        text-align: center;
      }
    }

    &--txt {
      font-size: 0.7rem;
      font-weight: bold;
    }
    &--time {
      display: flex;
      align-self: center;
      justify-content: space-evenly;
      text-transform: uppercase;
    }
  }
  .left {
    width: 25%;
    display: flex;
    flex-direction: column;
    color: var(--black);

    .text {
      padding-right: 1.3rem;
      padding-bottom: 1rem;
      a {
        text-decoration: none;
      }
    }
    &-text {
      font-size: 0.8rem;
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
      margin-top: -1rem;

      &--head {
        color: black;
        font-size: 0.9rem;
        line-height: 1.4;
        font-weight: 600;
      }
    }
    &-icon {
      color: red;
      font-size: 1rem;
    }
    &-time {
      display: flex;
      width: 80%;
      text-transform: uppercase;
      justify-content: space-between;
      margin-top: -0.9rem;

      p {
        font-size: 0.8rem;
        font-weight: bolder;
      }
      span {
        color: var(--Blue-Gray);
      }
    }
  }
  .minute {
    color: var(--grey);
  }
  .blue-grey {
    color: var(--Blue-Gray);
  }

  .right {
    width: 25%;
    padding-left: 1.3rem;
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
