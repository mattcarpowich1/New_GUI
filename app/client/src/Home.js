import React from 'react'
import TabList from './components/TabList'
import Tab from './components/Tab'
import { genId } from './utils'
import { connect } from 'react-redux'

const Home = props => {
  const ID = genId()
  return (
    <div className='container'>
      <TabList>
        <Tab id={ID.next().value}>
          CREATE
        </Tab>
        <Tab id={ID.next().value}>
          JOIN
        </Tab>
      </TabList>
    </div>
  )
}

export default Home
