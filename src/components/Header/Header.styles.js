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
  height: 95vh;
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
    height: 7rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    align-items: center;
    border-bottom: 1px solid var(--grey);
    align-items: center;

    @media only screen and (max-width: 600px) {
      height: 4.5rem;
      padding: 0 2rem;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      height: 5rem;
      align-items: center;
      padding: 0 2rem;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      height: 5rem;
      align-items: center;
      padding: 0 2rem;
    }
    @media only screen and (min-width: 850px) {
      // flex-direction: column;
      height: 5.5rem;
      align-items: center;
      padding: 1rem 2rem;

      /* align-items: flex-start; */
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      height: 6rem;
      align-items: center;
      padding: 1rem 2rem;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      align-items: center;
      height: 7rem;
      padding: 0 3rem;
    }

    .logo {
      font-size: 1.7rem;

      @media only screen and (max-width: 600px) {
        order: -1;
        align-self: flex-start;
        font-size: 1.35rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        order: -1;
        align-self: flex-start;
        font-size: 1.4rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        font-size: 1.45rem;
      }
      @media only screen and (min-width: 850px) {
        order: -1;
        align-self: flex-start;
        font-size: 1.5rem;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        order: 0;
        align-self: center;
        font-size: 1.6rem;
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        font-size: 1.7rem;
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
        font-size: 0.95rem;
      }
    }
    .weather {
      display: flex;

      p {
        font-size: 11px;
        font-weight: 400;
        @media only screen and (max-width: 600px) {
          font-size: 10px;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          font-size: 11px;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          font-size: 11px;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          font-size: 11px;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          font-size: 11px;
        }
      }

      @media only screen and (max-width: 600px) {
        margin-top: -0.8rem;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        margin-top: -1rem;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        margin-top: -1rem;
      }
      @media only screen and (max-width: 850px) {
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
        font-size: 11px;
        font-weight: 400;
        @media only screen and (max-width: 600px) {
          font-size: 10px;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          font-size: 11px;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          font-size: 11px;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          font-size: 11px;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          font-size: 11px;
        }
      }
      .top {
        @media only screen and (max-width: 850px) {
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
    padding: 1.5rem 2rem;
    // align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      padding: 1rem 2rem;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      flex-direction: column;
      padding: 1rem 2rem;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      padding: 1.1rem 2rem;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      flex-direction: row;
      align-items: center;
      padding: 1.2rem 2rem;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      flex-direction: row;
      align-items: center;
      padding: 1.5rem 2rem;
    }

    .nav-btn {
      display: flex;
      align-items: center;
      overflow-x: auto;
      scroll-behavior: smooth;
      overscroll-behavior-inline: contain;
      scroll-snap-type: inline mandatory;
      padding: 0.5rem;
      width: 90%;
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
        font-size: 0.7rem;
        display: block;

        @media only screen and (max-width: 600px) {
          font-size: 70%;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          font-size: 75%;
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
          font-size: 85%;
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
        @media only screen and (max-width: 600px) {
          display: none;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          display: none;
        }

        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          display: flex;
          align-items: center;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          display: flex;
          align-items: center;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          display: flex;
          align-items: center;
        }
      }
      .input-search {
        height: 1rem;
        width: 12rem;
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
        /* box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),
          inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),
          inset -1px -2px 2px 0px rgba(77, 71, 100, 0.4);
        transition: all 0.2s ease-in-out; */

        &:focus,
        &:active {
          width: 14rem;
          outline: none;
          /* box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),
            inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),
            inset -1px -2px 2px 0px rgba(77, 71, 100, 0.4),
            5px 5px 10px 2.5px rgba(0, 0, 0, 0.2),
            -5px -5px 10px 2.5px rgba(77, 71, 100, 0.4),
            -1px -1px 4px 2px rgba(77, 71, 100, 0.4); */
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
      padding: 1.5rem 1.5rem;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding: 1.5rem 1.5rem;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      padding: 1.5rem 2rem;
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
      width: 50%;
      align-content: space-around;
      flex-direction: column;
      height: 100%;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        width: 100%;
      }
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        width: 50%;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        width: 50%;
      }

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        width: 46%;
      }
      .heading {
        margin-bottom: -1rem;
        display: flex;
        align-items: center;
        text-transform: uppercase;

        p {
          color: var(--grey);
          @media only screen and (max-width: 600px) {
            font-size: 70%;
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
            font-size: 1.15rem;
            line-height: 1.2;
            font-weight: 600;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            font-size: 1.3rem;
            line-height: 1.2;
            font-weight: 600;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            font-size: 1.4rem;
            line-height: 1.2;
            font-weight: 600;
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            font-size: 1.5rem;
            line-height: 1.2;
            font-weight: 600;
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
          font-size: 0.7rem;
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
          width: 85%;
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          width: 70%;
        }
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          width: 70%;
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          width: 70%;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          width: 62%;
        }
        p {
          font-size: 0.8rem;
          font-weight: 400;
          text-transform: uppercase;
          @media only screen and (max-width: 600px) {
            font-size: 0.6rem;
            font-weight: 400;
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            font-size: 0.6rem;
            font-weight: 400;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            font-size: 0.65rem;
            font-weight: 400;
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            font-size: 0.75rem;
            font-weight: 400;
          }

          /* Extra large devices (large laptops and desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
            font-size: 0.8rem;
            font-weight: 400;
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
        /* border: 1px solid var(--grey); */
        display: block;
        height: 2.8rem;
        width: 2.8rem;
        border: 1px solid #333;
        background: rgba(0, 0, 0, 1);
        /* background: #20222d; */
        /* box-shadow: -1px -1px 4px 0 rgba(99, 99, 99, 1),
          1px 1px 4px 0 rgba(0, 0, 0, 1); */
        transition: all 0.3s ease-in-out;
        color: var(--grey);
        margin-right: 1.3rem;
        border-radius: 50%;
        transition: all 0.3s;

        :hover {
          color: var(--white);
          border: 2px solid var(--white);
          transform: scale(1.3);
          cursor: pointer;
          /* box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 1),
            inset -1px -1px 4px 0 rgba(99, 99, 99, 1); */
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
        /* box-shadow: -1px -1px 4px 0 rgba(99, 99, 99, 1),
          1px 1px 4px 0 rgba(0, 0, 0, 1); */
        margin-bottom: 0.7rem;

        &:hover {
          cursor: pointer;
          /* box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 1),
            inset -1px -1px 4px 0 rgba(99, 99, 99, 1); */
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
