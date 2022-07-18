import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

import Tartares from './Tartares'
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
            <Tab label="Table D'Hote" {...a11yProps(0)} />
            <Tab label="Appetizers" {...a11yProps(1)} />
            <Tab label="Salads" {...a11yProps(2)} />
            <Tab label="Tartares" {...a11yProps(3)} />
            <Tab label="House Maki" {...a11yProps(4)} />
            <Tab label="Nigiri & Sashimi" {...a11yProps(5)} />
            <Tab label="Hosomaki 6mcx/pcs" {...a11yProps(6)} />
            <Tab label="Maki" {...a11yProps(7)} />
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className='panel'>
            <Table />
            <table>
                <tr>
                    <td>Sushi Apero<br /><em>8mcx maki & nigiri</em></td>
                </tr>
                <tr>
                    <td>Sushi Solo<br /><em>16mcx maki, hosomaki & nigiri</em></td>
                </tr>
                <tr>
                    <td>Sushi Duo<br /><em>32mcx maki, hosomaki & nigiri</em></td>
                </tr>
                <tr>
                    <td>Bol <b>Avocado</b> Bowl<br /><em>Bol de riz avec variété de sashimis, tartares et légumes<br />Bowl of rice with a variety of sashimi, tartars, and vegetables</em></td>
                </tr>
                <tr>
                    <td>Bol <b>Avocado</b> Bowl<br /><em>Tout cuit<br />All cooked</em></td>
                </tr>
                <tr>
                    <td>Bol végétarien <b>Avocado</b> vegetarian Bowl<br /><em>Bol de riz avec variété de sashimis, tartares et légumes<br />Bowl of rice with a variety of sashimi, tartars, and vegetables</em></td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={1} className='panel'>
            <Appetizers />
            <table>
                <tr>
                    <td>Soupe Miso Soup</td>
                </tr>
                <tr>
                    <td>Salade Japonaise | Japanese Salad</td>
                </tr>
                <tr>
                    <td>Salade Wakame Salad</td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={2} className='panel'>
        <Salads />
            <table>
                <tr>
                    <td>Salade de Fruits de Mers Asiatique | Asian Seafood Salad<br /><em>Crevettes, homard, saumon fumé et bâtonnet de crabe<br />Shrimp, lobster, smoked salmon, and crab stick</em></td>
                </tr>
                <tr>
                    <td>Salade Magique<br /><em>Verdure, fruits et légumes du marché, choix de vinaigrette<br />Mixed greens with market fruits and vegetables, choice of dressing</em></td>
                </tr>
                <tr>
                    <td>Salade de Sashimi salad<br /><em>10 mcx choix du chef, choix de vinaigrette<br />10 pieces, chef choice, choice of dressing</em></td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={3} className='panel'>
        <Tartares />
        <table>
                <tr>
                    <td>Tartare de Saumon | Salmon Tartar<br /><em>Saumon, concombre, tempura, sauce épicée<br />Salmon, cucumber, tempura, spicy sauce</em></td>
                </tr>
                <tr>
                    <td>Tartare de <strong>Avocado</strong> Tartar<br /><em>Saumon et pétoncle épicés, homard au wasabi, tempura et sauce sucrée<br />Spicy scallops and salmon, wasabi lobster, tempura, and sweet sauce</em></td>
                </tr>
                <tr>
                    <td>Tartare St-Laurent Tartar<br /><em>Saumon épicé, bleuets, tempura, sauce sucrée<br />Spicy salmon, blueberry, tempura, sweet sauce</em></td>
                </tr>
                <tr>
                    <td>Ceviche de pétoncles | Scallop ceviche<br /><em>Pétoncles, sauce yuzu, oignons rouges, tomates cerises<br />Scallops, yuzu sauce, red onions, cherry tomatoes</em></td>
                </tr>
                <tr>
                    <td>La galette tartare | Tartare cake<br /><em>Riz, saumon et crevettes nordiques epicés, riz soufflé, tobiko, et sauce sucrée<br />Rice, spicy salmon and nordic shrimps, puffed rice, tobiko, and sweet sauce</em></td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={4} className='panel'>
            <Maki />
            <table>
                <tr>
                    <td>Tessy<br /><em>Petoncles épicés, riz et framboises roulés dans du papier de riz<br />Spicy scallps, rice and raspberries rolled in rice paper</em></td>
                </tr>
                <tr>
                    <td>Maki St-Laurent<br /><em>Saumon épicé, riz, bleuets, avocat, oignons verts et sauce teriyaki roulés dans du papier de riz<br />Spicy salmon, rice, blueberries, avocado, green onions and terikyaki sauce rolled in rice paper</em></td>
                </tr>
                <tr>
                    <td>Asian Twist<br /><em>Petoncles épicés, riz, bleuets et tempura roulés dans du papier soya et garni de poire asiatique, de homard épicé avec sirop d’érable et sésame<br />Spicy scallops, rice, blueberries and tempura rolled in soy paper and garnished with asian pear and lobster with maple syrup and sesame</em></td>
       
                </tr>
                <tr>
                    <td>New Zealander<br /><em>Simili crabe, riz et tempura roulés dans du papier soya et garni de kiwi, de kanikama épicé avec caviar, sésame et sauce teriaki<br />Crab stick, rice and tempura rolled in soy paper and garnished with kiwi, spicy kanikama, caviar, sesame and teriyaki sauce</em></td>
       
                </tr>
                <tr>
                    <td>Barenaked<br /><em>Homard et pétoncles épicés roulés dans du saumon en sashimis et du papier de riz<br />Spicy lobster and scallops rolled in salmon sashimis and rice paper</em></td>
     
                </tr>
                <tr>
                    <td>Cynthia<br /><em>Thon, riz, avocat et homard au wasabi roulés dans du papier de riz et garni de tartar de thon, oignons et tempura, sauces sésame et sucrée<br />Tuna, lobster, rice and avocado rolled in rice paper and topped with tuna tartar, onions, and tempura, with sweet and sesame sauces</em></td>
    
                </tr>
                <tr>
                    <td>Gaia Maki<br /><em>Riz, laitue, tofu, avocat, tempura, bleuets, concombres et mayonnaise vegan epicée dans du papier de riz<br />Rice, lettuce, tofu, avocado, tempura, blueberries, cucumber with spicy vegan mayo in rice paper</em></td>
         
                </tr>
                <tr>
                    <td>Lisabel<br /><em>Intérieur: saumon, goberge épicée, concombre, riz, extérieur: crevettes nordiques, wakame, oignon vert, tobiko, riz soufflé, servi sur mayo épicée <br /> Inside: salmon, spicy pollock, cucumber, rice, outside: nordic shrimps, wakame, green onions, tobiko, puffed rice, served on spicy mayo </em></td>
                </tr>
                <tr>
                    <td>Nantucket<br /><em>Saumon, algues marinées, avocat<br />Salmon, pickled seaweed, avocado</em></td>
                </tr>
                <tr>
                    <td>Coup de Coeur Matane | Matane Crush<br /><em>Riz, laitue, crevettes de Matane, oshinko, crevette   <br />Rice, lettuce, matane shrimp, oshinko, shrimp </em></td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={5} className='panel'>
            <Nigiri />
            <table>
                <tr>
                    <td>Sake<br /><em>Saumon<br />Salmon</em></td>
                </tr>
                <tr>
                    <td>Saba<br /><em>Maquereau<br />Mackerel</em></td>
                </tr>
                <tr>
                    <td>Unagi<br /><em>Anguille grillé<br />Grilled eel</em></td>
                </tr>
                <tr>
                    <td>Ebi<br /><em>Crevette cuite<br />Cooked shrimp</em></td>
          
                </tr>
                <tr>
                    <td>Kanikama<br /><em>Simili crabe<br />Pollock</em></td>

                </tr>
                <tr>
                    <td>Escolar<br /><em>Rouvet<br />Butterfish</em></td>

                </tr>
                <tr>
                    <td>Tamago<br /><em>Omelette Japonnaise<br />Japanese omelet</em></td>
            
                </tr>
                <tr>
                    <td>Vegetarian<br /><em>Choix du chef<br />Chef's choice</em></td>
     
                </tr>
                <tr>
                    <td>Maritime<br /><em>Homard sauce wasabi<br />Lobster wasabi sauce</em></td>

                </tr>
                <tr>
                    <td>Spicy Maguro<br /><em>Thon épicé<br />Spicy tuna</em></td>
 
                </tr>
                <tr>
                    <td>Spicy Sake<br /><em>Saumon épicé<br />Spicy salmon</em></td>
           
                </tr>
                <tr>
                    <td>Spicy Kanikama<br /><em>Simili crabe épicé et caviar<br />Spicy pollock and caviar</em></td>
            
                </tr>
                <tr>
                    <td>Hotate<br /><em>Petoncle épicé<br />Spicy scallops</em></td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={6} className='panel'>
            <Hosomaki />
            <table>
                <tr>
                    <td>Sake<br /><em>Saumon<br />Salmon</em></td>
       
                </tr>
                <tr>
                    <td>Tekka<br /><em>Thon<br />Tuna</em></td>
        
                </tr>
                <tr>
                    <td>Escolar<br /><em>Rouvet<br />Butterfish</em></td>
       
                </tr>
                <tr>
                    <td>Tamago<br /><em>Omelette<br />Omelet</em></td>
     
                </tr>
                <tr>
                    <td>Kappa<br /><em>Concombre<br />Cucumber</em></td>
             
                </tr>
                <tr>
                    <td>Avocado<br /><em>Avocat<br />Avocado</em></td>
                </tr>
                <tr>
                    <td>Et plus! And more!</td>
                </tr>
            </table>
        </TabPanel>
        <TabPanel value={value} index={7} className='panel'>
            <Maki2 />
            <table>
                <tr>
                    <td>California<br /><em>Simili crabe, omelette japonaise, concombre, avocat, mayonnaise, massago<br />Pollock, japanese omelet, cucumber, avocado, mayonnaise, massago</em></td>
            
                </tr>
                <tr>
                    <td>Pointe-Claire<br /><em>Extérieur : thon épicé • intérieur : crevettes, asperges, teriaki<br />Outside : spicy tuna • inside : shrimp, asparagus, teriaki</em></td>
            
                </tr>
                <tr>
                    <td>Kamikaze Saumon<br /><em>Saumon épicé, massago, avocat, concombre<br />spicy salmon, massago, avocado, cucumber</em></td>
                   
                </tr>
                <tr>
                    <td>Kamikaze Thon<br /><em>Thon épicé, massago, avocat, concombre<br />spicy tuna, massago, avocado, cucumber</em></td>
             
                </tr>
                <tr>
                    <td>Avocado<br /><em>Saumon, pétoncles, homard, laitue, oignon vert, sauce épicée, teriaki<br />salmon, scallops, lobster, green onion, spicy sauce, lettuce, teriaki</em></td>
            
                </tr>
                <tr>
                    <td>Osaka<br /><em>Anguilles grillées, simili crabe, tobiko, concombre, patate douce<br />grilled eel, pollock, tobiko, cucumber, sweet potato</em></td>
                 </tr>
                 <tr>
                    <td>Kyoto<br /><em>Crevette, concombre,tobiko, riz, mayonnaise, riz soufflé <br />Shrimp, cucumber, tobiko, rice, mayonnaise, puffed rice </em></td>
                 </tr>
                <tr>
                    <td>Homard<br /><em>Homard, concombre, tobiko, sauce wasabi, laitue<br />Lobster, cucmber, tobiko, wasabi sauce, lettuce</em></td>
            
                </tr>
                <tr>
                    <td>Hotate<br /><em>Petoncles, ruiz, asperges, tobiko, riz soufflé <br /> Scallops, rice, asparagus, tobiko, puffed rice</em></td>
            
                </tr>
                <tr>
                    <td>Magic Garden<br /><em>Champignons, concombre, asperge, patate douce, sauce au sésame<br />mushrooms, cucumber, asparagus, sweet potato, sésame sauce</em></td>
         
                </tr>
                <tr>
                    <td>Vegetarien<br /><em>Concombre, radis mariné, wakame, avocat<br />cucumber, pickled radish, wakame, avocado</em></td>
                 
                </tr>
                <tr>
                    <td>Vegan<br /><em>Tofu, concombre, avocat, patate douce, sauce teriaki<br />tofu, cucumber, avocado, sweet potato, teriaki sauce</em></td>
           
                </tr>
            </table>
        </TabPanel>
    </div>
    );
}

  export default MenuTabs
