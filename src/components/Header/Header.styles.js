import styled from "styled-components";
import photo from "../../assets/photo.jpg";

export const Wrapper = styled.div`
  font-family: "EB Garamond", serif;
  background: radial-gradient(
      circle at center,
      rgba(169, 169, 169, 0.1) 15%,
      rgba(0, 0, 0) 60%
    ),
    url(${photo});
  /* background: #000; */
  background-size: 100%, cover;
  background-position: center;
  height: 90vh;
  @media only screen and (max-width: 600px) {
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 600px) {
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (max-width: 850px) {
    /* align-items: flex-start; */
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
  color: #fff;

  .nav {
    height: 5.5rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    align-items: center;
    border-bottom: 1px solid var(--grey);
    @media only screen and (max-width: 600px) {
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
    }
    @media only screen and (max-width: 850px) {
      flex-direction: column;

      /* align-items: flex-start; */
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
    }

    .logo {
      font-size: 1.5rem;
      @media only screen and (max-width: 600px) {
        order: -1;
        align-self: flex-start;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        order: -1;
        align-self: flex-start;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
      }
      @media only screen and (max-width: 850px) {
        order: -1;
        align-self: flex-start;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        order: 0;
        align-self: center;
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
      }
      span {
        color: red;
      }
    }
    .icon {
      color: var(--grey);
      padding-right: 5px;
      font-size: 1.1rem;
      @media only screen and (max-width: 850px) {
        font-size: 0.9rem;
      }
    }
    .weather {
      display: flex;
      @media only screen and (max-width: 600px) {
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
      }
      @media only screen and (max-width: 850px) {
        align-self: flex-end;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
      }
      .right {
        padding-right: 1.3rem;
      }
      .flex,
      .right {
        display: flex;
        align-items: center;
      }
      p {
        font-size: 12px;
        @media only screen and (max-width: 600px) {
          font-size: 9px;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          font-size: 9px;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          font-size: 10px;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          font-size: 11px;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          font-size: 12px;
        }
      }
      .top {
        @media only screen and (max-width: 850px) {
          margin-top: -5rem;
          display: none;
        }
      }
      .top-1 {
        @media only screen and (max-width: 850px) {
          margin-top: -6rem;
        }
      }
    }
  }
  .nav-section {
    display: flex;
    padding: 1.5rem 3rem;
    align-items: center;
    justify-content: space-between;

    .nav-btn {
      display: flex;
      align-items: center;
      overflow-x: auto;
      scroll-behavior: smooth;
      overscroll-behavior-inline: contain;
      scroll-snap-type: inline mandatory;
      padding: 0.5rem 0.7rem;
      width: 60%;
      padding-bottom: 0.7rem;

      .has-scrollbar::-webkit-scrollbar {
        width: 5px; /* for vertical scrollbar */
        height: 5px; /* for horizontal scrollbar */
      }

      .has-scrollbar::-webkit-scrollbar-track {
        background: red;
        border-radius: 5px;
      }

      .has-scrollbar::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 5px;
      }

      .has-scrollbar::-webkit-scrollbar-button {
        width: 20px;
      }

      button {
        outline: none;
        border: none;
        text-transform: uppercase;
        background: none;
        color: var(--white);
        transition: all 0.3s;
        padding: 0.4rem 0.5rem;
        font-size: 0.75rem;
        display: block;

        @media only screen and (max-width: 600px) {
          font-size: 60%;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          font-size: 65%;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          font-size: 75%;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          font-size: 80%;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          font-size: 90%;
        }

        :hover,
        :focus {
          cursor: pointer;
          transform: scale(1.1);
          transform: translateY(-7px);
          color: var(--Blue-Gray);
          background: var(--white);
          border-left: 0.1rem solid red;
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
        height: 1rem;
        width: 10rem;
        border-radius: 1rem;
        padding: 0.85rem 1rem 0.85rem 2rem;
        color: var(--white);
        font-size: 0.7rem;
        /* font-weight: 100; */
        z-index: 1;
        position: relative;
        transition: all 0.4s;
        border: none;
        background: #20222d;
        box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),
          inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),
          inset -1px -2px 2px 0px rgba(77, 71, 100, 0.4);
        transition: all 0.2s ease-in-out;

        &:focus,
        &:active {
          width: 12rem;
          outline: none;
          box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),
            inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),
            inset -1px -2px 2px 0px rgba(77, 71, 100, 0.4),
            5px 5px 10px 2.5px rgba(0, 0, 0, 0.2),
            -5px -5px 10px 2.5px rgba(77, 71, 100, 0.4),
            -1px -1px 4px 2px rgba(77, 71, 100, 0.4);
        }
        @media only screen and (max-width: 600px) {
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
        }
      }
      &-btn {
        background: none;
        border: none;
        z-index: 10;
        padding-left: 0.7rem;
        cursor: pointer;
        color: var(--Blue-Gray);
        font-size: 1rem;
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
    padding: 1.5rem 3rem;
    @media only screen and (max-width: 600px) {
      padding: 1.5rem 2rem;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding: 1.5rem 2rem;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      padding: 1.5rem 2.3rem;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      padding: 1.5rem 2.5rem;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      padding: 1.5rem 3rem;
    }

    .text {
      display: flex;
      width: 42%;
      align-content: space-around;
      flex-direction: column;
      height: 100%;

      @media only screen and (max-width: 600px) {
        width: 50%;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        width: 50%;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        width: 50%;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        width: 45%;
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        width: 42%;
      }
      .heading {
        margin-bottom: -1rem;
        display: flex;
        align-items: center;
        text-transform: uppercase;

        p {
          color: var(--grey);
          @media only screen and (max-width: 600px) {
            font-size: 75%;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            font-size: 75%;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            font-size: 80%;
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            font-size: 90%;
          }

          /* Extra large devices (large laptops and desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
            font-size: inherit;
          }
        }
      }
      .title {
        &__head {
          font-size: 1.9rem;
          line-height: 1.3;
          font-weight: 600;
          a {
            text-decoration: none;
            color: var(--white);
          }
          @media only screen and (max-width: 600px) {
            font-size: 1rem;
            line-height: 1.2;
            font-weight: 400;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            font-size: 1.2rem;
            line-height: 1.2;
            font-weight: 400;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            font-size: 1.4rem;
            line-height: 1.2;
            font-weight: 400;
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            font-size: 1.45rem;
            line-height: 1.2;
            font-weight: 500;
          }

          /* Extra large devices (large laptops and desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
            font-size: 1.6rem;
            line-height: 1.3;
            font-weight: 600;
          }
        }
        &__txt {
          width: 80%;
          margin-top: -1rem;
          font-size: 0.65rem;
          font-weight: 600;
          line-height: 1.4;
          word-spacing: 1px;
          color: var(--grey);
        }
      }
      .info {
        margin-top: 1rem;
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media only screen and (max-width: 600px) {
          width: 80%;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          width: 80%;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          width: 80%;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          width: 70%;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          width: 60%;
        }
        p {
          font-size: 0.8rem;
          font-weight: 300;
          text-transform: uppercase;
          @media only screen and (max-width: 600px) {
            font-size: 0.55rem;
            font-weight: 300;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            font-size: 0.55rem;
            font-weight: 300;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            font-size: 0.6rem;
            font-weight: 300;
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            font-size: 0.65rem;
            font-weight: 300;
          }

          /* Extra large devices (large laptops and desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
            font-size: 0.75rem;
            font-weight: 300;
          }
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
        font-size: 1.5rem;
        margin-left: -10px;
      }
    }
    &__btn {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      @media only screen and (max-width: 600px) {
        margin-top: 0.6rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        margin-top: 0.6rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        margin-top: 0.6rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        margin-top: 0.7rem;
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        margin-top: 1.2rem;
      }

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
        @media only screen and (max-width: 600px) {
          height: 2.1rem;
          width: 2.1rem;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          height: 2.2rem;
          width: 2.2rem;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          height: 2.4rem;
          width: 2.4rem;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          height: 2.4rem;
          width: 2.4rem;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          height: 2.4rem;
          width: 2.4rem;
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
      width: 28%;
      padding: 1.2rem 1.1rem;
      height: 10rem;
      overflow-y: auto;
      a {
        text-decoration: none;
        color: var(--white);
      }
      a:hover {
        cursor: pointer;
      }
      @media only screen and (max-width: 600px) {
        width: 50%;
        width: 45%;
        padding: 0.4rem;
        height: 5rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        width: 45%;
        padding: 0.4rem;
        height: 5rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        width: 42%;
        padding: 0.4rem;
        height: 5rem;
      }
      @media only screen and (min-width: 850px) {
        width: 38%;
        padding: 1rem;
        height: 7rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        width: 35%;
        padding: 1.1rem;
        height: 8rem;
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        width: 28%;
      }

      &__box {
        display: flex;
        align-items: center;
        padding: 0.5rem 0.8rem;
        background: rgba(0, 0, 0, 0.5);
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
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid var(--Blue-Gray);

        @media only screen and (max-width: 600px) {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid var(--Blue-Gray);
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--Blue-Gray);
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          width: 3.1rem;
          height: 3.1rem;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--Blue-Gray);
        }
        @media only screen and (min-width: 850px) {
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--Blue-Gray);
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          width: 3.3rem;
          height: 3.3rem;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--Blue-Gray);
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--Blue-Gray);
        }
      }

      &__img--box {
        position: relative;
      }
      &__img--circle {
        height: 1.3rem;
        width: 1.3rem;
        border-radius: 50%;
        background: red;
        color: var(--white);
        object-fit: cover;
        position: absolute;
        top: -2px;
        left: -3px;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          font-size: 0.6rem;
        }
        @media only screen and (max-width: 600px) {
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (max-width: 768px) {
          display: none;
        }
        @media only screen and (min-width: 850px) {
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
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
          font-size: 0.6rem;
        }

        &-txt {
          font-size: 0.7rem;
          font-weight: 300;
          @media only screen and (max-width: 600px) {
            font-size: 0.65rem;
            font-weight: 400;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            font-size: 0.65rem;
            font-weight: 400;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (max-width: 768px) {
            font-size: 0.65rem;
            font-weight: 400;
          }
          @media only screen and (min-width: 850px) {
            font-size: 0.65rem;
            font-weight: 400;
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            font-size: 0.7rem;
            font-weight: 400;
          }

          /* Extra large devices (large laptops and desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
            font-size: 0.7rem;
            font-weight: 400;
          }
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
