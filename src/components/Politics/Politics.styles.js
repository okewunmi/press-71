import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(232, 233, 237, 1);
  padding: 3rem 5rem;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 3rem 5rem;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding: 3rem 5rem;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 3rem 3.5rem;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 3rem 3rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 3rem 5rem;
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
      width: 40%;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 600px) {
      width: 45%;
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
export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 13px;
  place-items: center;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 15px;
    place-items: center;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 15px;
    /* place-items: center; */
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 15px;
    /* place-items: center; */
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 15px;
    /* place-items: center; */
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 14px;
    grid-row-gap: 13px;
    /* place-items: center; */
  }
  .Premium__box {
    width: 19.2rem;
    height: 7rem;
    display: flex;
    align-items: center;
    padding: 0.2rem 0.5rem;
    background: rgba(232, 233, 237, 1);
    border-radius: 0.4rem;
    border: 1px solid rgba(255, 255, 255, 1);
    box-shadow: 3px 2px 3px 0 rgba(196, 196, 196, 1),
      -3px -2px 5px 0 rgba(255, 255, 255, 1);

    &:hover {
      cursor: pointer;
      box-shadow: inset 1px 1px 3px 0 rgba(196, 196, 196, 1),
        inset -1px -1px 3px 0 rgba(255, 255, 255, 1);
      color: rgba(0, 255, 255, 1);
    }
    a {
      text-decoration: none;
    }
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      width: 25rem;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      width: 23rem;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      width: 21rem;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      width: 19rem;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      width: 21rem;
    }
  }
  .Premium__img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
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
    padding: 0 0.8rem;
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

  .politic__box {
    background: rgba(232, 233, 237, 1);
    max-height: 13rem;
    width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.5rem;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      width: 23rem;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      width: 22rem;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      width: 20rem;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      width: 19rem;
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      width: 16rem;
    }

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
