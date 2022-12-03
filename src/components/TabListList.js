import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListListOrder from './ListListOrder';
import ListListPrep from './ListListPrep';

export default function TabListList() {
  return (
    <div>
      <Tabs>
    <TabList >
      <Tab>Orderlists</Tab>
      <Tab>Preplists</Tab>
    </TabList>

    <TabPanel>
      <ListListOrder/>
    </TabPanel>
    <TabPanel>
      <ListListPrep/>
    </TabPanel>
  </Tabs>
    </div>
  )
}
