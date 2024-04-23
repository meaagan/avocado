import styled from 'styled-components';
import { Link as GatsbyLink } from "gatsby";
import {
  AppBar,
  Container,
  List,
  Button
} from '@mui/material';

export const NavbarList = styled(List)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const AppBarStyled = styled(AppBar) `
  margin-bottom: 100%;
`;

export const StyledLink = styled(GatsbyLink)`
  margin: 0px 0.75em;
  ${props => props.theme.font_size.small};
  text-decoration: none;
  padding-left: 0.25em;
  padding-right: 0.25em;
`;

export const Brand = styled.figure`
  padding-top: 5px;
  width: 130px;
`;


export const OrderButton = styled(Button)`
  fontFamily:'inherit';
  color: 'rgba(255, 255, 255, 0.87)';
  backgroundColor: 'none';
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)';
    };
  border: '1px solid rgba(255,255, 255, 0.23)';
  `;

  export const NavButton = styled(Button)`
  fontFamily:'inherit';
  color: 'rgba(255, 255, 255, 0.87)';
  backgroundColor: 'none';
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)';
    };
  `;