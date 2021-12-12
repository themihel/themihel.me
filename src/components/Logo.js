import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../assets/logo/logo.svg';
import { device } from '../utils/device';

const LogoStyles = styled.div`
  .logo {
    position: absolute;
    left: 20px;
    top: 20px;

    width: 30px;
    fill: var(--primary-light);
    transition: all .3s ease-in-out;

    @media ${device.screenMdMin} {
      width: 40px;
    }

    &:hover {
      #top-left {
        animation: changecolor 3s infinite .2s;
      }

      #top-middle {
        animation: changecolor 5s infinite 1s;
      }

      #top-right {
        animation: changecolor 1.3s infinite .8s;
      }

      #middle-left {
        animation: changecolor 2s infinite .1s;
      }

      #middle-middle {
        animation: changecolor 1s infinite .7s;
      }

      #middle-right {
        animation: changecolor .8s infinite 2s;
      }

      #bottom-left {
        animation: changecolor 1.3s infinite;
      }

      #bottom-right {
        animation: changecolor .7s infinite .8s;
      }
    }
  }

  @keyframes changecolor {
   from {
     fill: var(--primary-light);
    }
   to {
    fill: var(--primary-dark);
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles>
      <LogoSVG className="logo" />
    </LogoStyles>
  );
}
