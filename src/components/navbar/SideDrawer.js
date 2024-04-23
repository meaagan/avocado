import * as React from "react"
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
  } from '@mui/material';
import Menu from '@mui/material/Menu';
import { useState } from "react"

// const useStyles = makeStyles({
//     list: {
//       width: 250,
//     },
//     linkText: {
//       textDecoration: `none`,
//       textTransform: `uppercase`,
//       color: `black`,
//     },
//   })

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
              <a href={path} key={title}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </div>
      );

    return (
        <React.Fragment>
          <IconButton edge="start" onClick={toggleDrawer("right", true)} aria-label="menu">
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
export default SideDrawer