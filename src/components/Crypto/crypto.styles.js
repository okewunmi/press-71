import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(232, 233, 237, 1);
  padding: 2rem 5rem;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 2rem 4rem;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding: 2rem 4rem;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 2rem 2.5rem;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 3rem 3rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 3rem 4rem;
  }

  h2 {
    text-transform: uppercase;
  }
  .heading {
    display: flex;
    align-items: center;

    &--txt {
      font-size: 1.7rem;
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        font-size: 1.1rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        font-size: 1.1rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        font-size: 1.3rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        font-size: 1.4rem;
      }
    }
  }
  .underline {
    width: 80%;
    border-bottom: 1px solid var(--lightGrey);
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      width: 60%;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      width: 60%;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      width: 70%;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      width: 80%;
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

export const Card = styled.div``;
export const Content = styled.div`
  /* padding: 5rem auto 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    place-items: center;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      place-items: center;
    }
  }
  .box-btn {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .page-btn {
    margin-top: 1rem;
    padding: 0.7rem 2rem;
    background: rgba(232, 233, 237, 1);
    border-radius: 0.4rem;
    border: 2px solid rgba(255, 255, 255, 1);
    box-shadow: 4px 3px 4px 0 rgba(196, 196, 196, 1),
      -4px -3px 6px 0 rgba(255, 255, 255, 1);
    cursor: pointer;
    text-align: center;
    transition: var(--transition);
    font-weight: bold;

    :active,
    :hover {
      box-shadow: inset 2px 2px 4px 0 rgba(196, 196, 196, 1),
        inset -2px -2px 4px 0 rgba(255, 255, 255, 1);
      color: red;
      cursor: pointer;
    }
  }

  .prev-btn,
  .next-btn {
    background: transparent;
    border-color: transparent;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    margin: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  .btn-box {
    align-self: center;
  }
`;
