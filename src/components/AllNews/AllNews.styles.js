import styled from "styled-components";
export const Wrapper = styled.div`
  background: rgba(232, 233, 237, 1);
  /* padding: 0 4rem; */
  min-height: 10rem;
  color: #000;
  .container {
    width: 100%;
    display: flex;
    /* padding: 0 4rem; */
    border-bottom: 1px solid var(--grey);
    &-btn {
      width: 100%;
      padding: 1.7rem 0;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      outline: none;
      border: none;
      background: rgba(232, 233, 237, 1);
      transition: all 0.3s;

      :hover,
      :focus {
        cursor: pointer;
        background: var(--Blue-Gray);
      }
    }
    .right {
      border-right: 1px solid var(--grey);
    }
  }
  .pagination-btn {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;

    &__prev {
      padding: 0.4rem 0.8rem;
      color: red;
      font-weight: bold;
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
  .Premium__box {
    width: 19.2rem;
    height: 5.5rem;
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
      width: 19rem;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      width: 18rem;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      width: 18rem;
      padding: 0.2rem 0.5rem;
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
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    place-items: center;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }
  }
`;
