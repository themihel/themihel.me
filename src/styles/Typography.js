import { createGlobalStyle } from 'styled-components';
import { device } from '../utils/device';

const Typography = createGlobalStyle`
/* roboto-300 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v30-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v30-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v30-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v30-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}

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
