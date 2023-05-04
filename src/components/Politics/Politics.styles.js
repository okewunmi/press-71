import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem 5rem;
  /* background: rgba(232, 233, 237, 1); */

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
export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 13px;
  place-items: center;

  .politic__box {
    background: rgba(232, 233, 237, 1);
    max-height: 13rem;
    width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.5rem;

    &__img {
      display: flex;
      padding: 0.5rem 0 0.5rem 1rem;
      justify-content: flex-start;
      align-items: center;
    }
    &--img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      border: 3px solid red;
    }
    &--txt {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    &--name {
      font-weight: bold;
      font-size: 0.75rem;
    }
    &--time {
      font-weight: bold;
      color: var(--Blue-Gray);
      font-size: 0.7rem;
      margin-top: -0.4rem;
    }
    &--paragraph {
      padding: 0 0.9rem;
      font-weight: bold;
      font-size: 0.8rem;
      margin-top: -0.1rem;

      a {
        color: var(--black);
      }
    }
    &--comment {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 0.6rem;

      background: var(--Blue-Gray);
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;

      /* .icon__like {
        color: white;

        :visited,
        :hover,
        :active,
        :focus {
          color: black;
        }
      /* }  */
      button {
        outline: none;
        border: none;
        background: none;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;
