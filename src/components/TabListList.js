import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListListOrder from './ListListOrder';
import ListListPrep from './ListListPrep';

export default function TabListList() {
  return (
    <div>
      <Tabs className="tabcontainer">
        <TabList className="tabs">
          <Tab className="tab">Orderlists</Tab>
          <Tab className="tab">Preplists</Tab>
        </TabList>

        <TabPanel className="tabpanel">
          <ListListOrder />
        </TabPanel>
        <TabPanel className="tabpanel">
          <ListListPrep />
        </TabPanel>
      </Tabs>
    </div>
  )
}
