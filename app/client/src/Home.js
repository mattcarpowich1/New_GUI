import React from 'react'
import TabList from './TabList'
import Tab from './Tab'
import { connect } from 'react-redux'

const Home = props => (
  <div className='container'>
    <TabList>
      <Tab>CREATE</Tab>
      <Tab>JOIN</Tab>
    </TabList>
  </div>
)

export default Home