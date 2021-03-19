import { createGlobalStyle } from 'styled-components'

import RobotoBlack from '../assets/fonts/Roboto/Roboto-Black.ttf';
import RobotoBlackItalic from '../assets/fonts/Roboto/Roboto-BlackItalic.ttf';
import RobotoBold from '../assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoBoldItalic from '../assets/fonts/Roboto/Roboto-BoldItalic.ttf';
import RobotoItalic from '../assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoLight from '../assets/fonts/Roboto/Roboto-Light.ttf';
import RobotoLightItalic from '../assets/fonts/Roboto/Roboto-LightItalic.ttf';
import RobotoMedium from '../assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoMediumItalic from '../assets/fonts/Roboto/Roboto-MediumItalic.ttf';
import RobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoThin from '../assets/fonts/Roboto/Roboto-Thin.ttf';
import RobotoThinItalic from '../assets/fonts/Roboto/Roboto-ThinItalic.ttf';

export const FontsDef = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlackItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightItalic}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThinItalic}) format('truetype');
    font-weight: 100;
    font-style: italic;
  }
`
