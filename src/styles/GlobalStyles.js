import { createGlobalStyle } from 'styled-components';

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;


const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    font-family: ${props => props.theme.font};
    background-color: ${props => props.theme.color.primary} !important; 
    margin: 0;
    color: ${props => props.theme.color.white.dark};
  }



  h1, h2, h3 {
    color: ${props => props.theme.color.white.regular};
  }

  h2, h3 {
    ${props => props.theme.font_weight.regular};
  }

  h1 {
    ${props => props.theme.font_size.xlarge};
    ${props => props.theme.font_weight.regular};
  }

  h2 {
    ${props => props.theme.font_size.larger};
  }

  h3 {
    ${props => props.theme.font_size.large};
  }

  p {
    ${props => props.theme.font_size.regular};
    ${props => props.theme.font_weight.light};
    color: ${props => props.theme.color.white.dark};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      ${props => props.theme.font_size.larger};
    }

    h2 {
      ${props => props.theme.font_size.large};
    }

    h3 {
      ${props => props.theme.font_size.regular};
    }

    p {
      ${props => props.theme.font_size.small};
    }
  }

  a {
    cursor: pointer;
    color: white;
  }
`;

export default GlobalStyles;
