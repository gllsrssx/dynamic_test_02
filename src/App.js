import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import { CAR_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA, WIKI_TEST1_DATA, PRODUCTS_TOETS_DATA } from "./data/data";
import { MenuCardPage } from "./pages/MenuCardPage";
import { PicturesPage } from "./pages/PicturesPage";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { NumbersPage } from "./pages/NumbersPage";
import { CarsPage } from "./pages/CarsPage";
import { PersonsPage } from "./pages/PersonsPage";
import { WikiPage } from "./pages/WikiPage";
import { EventAndStatePage } from "./pages/EventAndStatePage";
import { FavoriteNumberPage } from "./pages/FavoriteNumberPage";
import { InputPage } from "./pages/InputPage";
import { SearchPersonsPage } from "./pages/SearchPersonsPage";
import { ToetsPage } from "./pages/ToetsPage";
import { useLocalStorage } from "@uidotdev/usehooks";

function App() {
    const [defaultTab, setDefaultTab] = useLocalStorage("defaultTabIndex", 11);

    return (
        <Tabs defaultIndex={defaultTab}
            onSelect={(index) => setDefaultTab(index)}>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
                <Tab>numbers</Tab>
                <Tab>cars</Tab>
                <Tab>persons</Tab>
                <Tab>wiki</Tab>
                <Tab>events&state</Tab>
                <Tab>fav numbers</Tab>
                <Tab>input</Tab>
                <Tab>search</Tab>
                <Tab>toets</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA} />
            </TabPanel>
            <TabPanel>
                <PicturesPage />
            </TabPanel>
            <TabPanel>
                <NumbersPage numbers={NUMBER_DATA} />
            </TabPanel>
            <TabPanel>
                <CarsPage cars={CAR_DATA} />
            </TabPanel>
            <TabPanel>
                <PersonsPage persons={PERSON_DATA} />
            </TabPanel>
            <TabPanel>
                <WikiPage wikidata={WIKI_TEST1_DATA} />
            </TabPanel>
            <TabPanel>
                <EventAndStatePage />
            </TabPanel>
            <TabPanel>
                <FavoriteNumberPage numbers={NUMBER_DATA} />
            </TabPanel>
            <TabPanel>
                <InputPage />
            </TabPanel>
            <TabPanel>
                <SearchPersonsPage persons={PERSON_DATA} />
            </TabPanel>
            <TabPanel>
                <ToetsPage products={PRODUCTS_TOETS_DATA} />
            </TabPanel>
        </Tabs>
    );
}

export default App;
