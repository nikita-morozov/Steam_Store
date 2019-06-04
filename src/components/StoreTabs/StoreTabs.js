import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../StoreTabs/StoreTabs.css";
import Grid from '../Grid/Grid';

class StoreTabs extends React.Component {

  constructor(props) {
    super();
  }

render() {
  return (<Tabs >
    <TabList>
      <Tab>New and Trending</Tab>
      <Tab>Top Selling</Tab>
      <Tab>Popular Upcoming</Tab>
      <Tab>Specials</Tab>
    </TabList>

    <TabPanel>
      <Grid cartAdder={this.props.cartAdder} wishlistAdder={this.props.wishlistAdder}/>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
  )
}
}
export default StoreTabs;