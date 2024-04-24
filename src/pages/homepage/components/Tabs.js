import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

import Menu1 from './Menu1'
import Salads from './Salads'
import Maki from './Maki'
import Table from './Table'
import Appetizers from './Appetizers'
import Hosomaki from './Hosomaki'
import Maki2 from './Maki2'
import Nigiri from './Nigiri'
import './Tabs.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <p>{children}</p>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  
function MenuTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <div className='root'>
        <AppBar position="static">
        <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Tabs"
            className='tabs'
            scrollButtons="on"
        >
            <Tab label="Page 1" {...a11yProps(0)} />
            <Tab label="Page 2" {...a11yProps(1)} />
            <Tab label="Page 3" {...a11yProps(2)} />
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className='panel'>
            <Maki2 />
            <Menu1 />
        </TabPanel>
        <TabPanel value={value} index={1} className='panel'>

        </TabPanel>
        <TabPanel value={value} index={2} className='panel'>

        </TabPanel>
    </div>
    );
}

  export default MenuTabs
