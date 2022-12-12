import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function TabDialog(props) {
  return (
    <div>
      <Tabs className="tabcontainer">
        <TabList className="tabs">
          <Tab className="tab">Orderlist</Tab>
          <Tab className="tab">Preplist</Tab>
        </TabList>

        <TabPanel className="tabpanel">
          <label>
            {console.log(props.list)}
            {props.list}
          </label>
        </TabPanel>
        <TabPanel className="tabpanel">
          <div>Check ingredients to see Order list.</div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
