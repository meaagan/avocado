import * as React from "react"
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu
  } from '@mui/material';
  import styled from 'styled-components';
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';

const SideDrawer = ({ navLinks }) => {
    const [state, setState] = useState({ right: false })
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
        return
        }
        setState({ [anchor]: open })
    }

    const sideDrawerList = anchor => (
        <div
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List component="nav">
            {navLinks.map(({ title, path }) => (
              <StyledLink href={path} key={title}>
                <ListItem>
                  <ListItemText disableTypography={false} primary={title} />
                </ListItem>
              </StyledLink>
            ))}
          </List>
        </div>
      );

    return (
        <React.Fragment>
          <IconButton edge="start" onClick={toggleDrawer("right", true)} aria-label="menu">
            <MenuIcon />
            <Menu />
          </IconButton>
            <Drawer
                anchor="right"
                open={state.right}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
            >
              {sideDrawerList("right")}
            </Drawer>
        </React.Fragment>
    )
}

const StyledLink = styled.a`
    color: black;
    font-family: 'inherit';
    text-decoration: none;
`

export default SideDrawer