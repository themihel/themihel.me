import { createGlobalStyle } from 'styled-components';
import { device } from '../utils/device';

const Typography = createGlobalStyle`
  body {
    font-family: roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 4px;

    @media ${device.screenSmMin} {
      font-size: 45px;
      margin-bottom: 8px;
    }

    @media ${device.screenMdMin} {
      font-size: 40px;
      margin-bottom: 4px;
    }
  }

  h2 {
    font-size: 18px;

    @media ${device.screenSmMin} {
      font-size: 28px;
    }

    @media ${device.screenMdMin} {
      font-size: 24px;
    }
  }

  h3 {
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 20px;
    text-align: center;
    text-transform: uppercase;

    @media ${device.screenSmMin} {
      margin-top: 40px;
      font-size: 45px;
      margin-bottom: 20px;
    }
  }

  h4 {
    font-size: 30px;
    margin-bottom: 15px;
    margin-top: 10px;

    small {
      font-size: 10px;
    }

    @media ${device.screenSmMin} {
      margin-bottom: 25px;
      margin-top: 0;
    }
  }

  h5 {
    font-size: 20px;

    @media ${device.screenSmMin} {
      margin-bottom: 20px;
    }
  }
`;

export default Typography;
