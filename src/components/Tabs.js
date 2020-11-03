import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import './Tabs.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: 700,
    },
    panel: {
        overflowY: 'auto',
        width: '75%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    cells: {
        border: '1px solid #dddddd',
        padding: '8px',
    }
  }));
  
function MenuTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <div className={classes.root}>
        <Tabs
            orientation="vertical"
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="Tabs"
            className={classes.tabs}
        >
            <Tab label="Table D'Hote" {...a11yProps(0)} />
            <Tab label="Appetizers" {...a11yProps(1)} />
            <Tab label="Meal Size Salads" {...a11yProps(2)} />
            <Tab label="Tartares" {...a11yProps(3)} />
            <Tab label="House Maki" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.panel}>
            <table>
                <tr>
                    <td>Sushi Apero<br /><em>8pc maki & nigiri chef's choice</em></td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Sushi Solo<br /><em>16pc maki & nigiri chef's choice</em></td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>Sushi Duo<br /><em>32pc maki & nigiri chef's choice</em></td>
                    <td>56</td>
                </tr>
                <tr>
                    <td>Avocado Bowl<br /><em>Bowl of rice with a variety of sashimi, tartars, and vegetables</em></td>
                    <td>28</td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.panel}>
            <table>
                <tr>
                    <td>Miso Soup<br /><em>Pick-up only</em></td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Japenese Salad</td>
                    <td>5 / 8</td>
                </tr>
                <tr>
                    <td>Wakame Salad (Vegan)</td>
                    <td>9</td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.panel}>
            <table>
                <tr>
                    <td>Asian Seafood Salad<br /><em>Shrimp, lobster, smoked salmon, and crab stick</em></td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>Salade Magique<br /><em>Mixed greens with market fruits and vegetables, choice of dressing</em></td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>Sashimi salad<br /><em>10 pieces, chef choice, choice of dressing</em></td>
                    <td>17</td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.panel}>
        <table>
                <tr>
                    <td>Salmon Tartar<br /><em>Salmon, cucumber, tempura, spicy sauce</em></td>
                    <td>14</td>
                </tr>
                <tr>
                    <td><strong>Avocado</strong> Tartar<br /><em>Spicy scallops and salmon, wasabi lobster, tempura, and sweet sauce</em></td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>St-Laurent Tartar<br /><em>Spicy salmon, blueberry, tempura, sweet sauce</em></td>
                    <td>17</td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.panel}>
            <table>
                <tr>
                    <td>Tessy<br /><em>Spicy scallps, rice and raspberries rolled in rice paper (6 pcs)</em></td>
                    <td>13.5</td>
                </tr>
                <tr>
                    <td>Maki St-Laurent<br /><em>Spicy salmon, rice, blueberries, avocado, green onions and terikyaki sauce rolled in rice paper (6 pcs)</em></td>
                    <td>12.5</td>
                </tr>
                <tr>
                    <td>Asian Twist<br /><em>Spicy scallops, rice, blueberries and tempura rolled in soy paper and garnished with asian pear and lobster with maple syrup and sesame (8 pcs)</em></td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>New Zealander<br /><em>Crab stick, rice and tempura rolled in soy paper and garnished with kiwi, spicy kanikama, caviar, sesame and teriyaki sauce (8 pcs)</em></td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>Barenaked<br /><em>Spicy lobster and scallops rolled in salmon sashimis and rice paper (6 pcs)</em></td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>Cynthia<br /><em>Tuna, lobster, rice and avocado rolled in rice paper and topped with tuna tartar, onions, and tempura, with sweet and sesame sauces (6 pcs)</em></td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Gaia Maki (vegan)<br /><em>Rice, lettuce, tofu, avocado, tempura, blueberries, cucumber with spicy vegan mayo in rice paper</em></td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>Sashimi Straight Up<br /><em>Chef's choice (15 pcs)</em></td>
                    <td>28</td>
                </tr>
            </table>
        </TabPanel>
    </div>
    );
}

  export default MenuTabs