import styled from "styled-components";

export const Spinner = styled.div`
  border: 5px solid var(--Blue-Gray);
  border-top: 5px solid red;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  animation: animateSpinner 0.8s linear infinite;
  margin: 10px auto;

  @keyframes animateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
