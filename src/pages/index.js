import React from 'react'
import Link from 'gatsby-link'
import Bootstrap from 'bootstrap'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Featured from '../components/featured'


const IndexPage = () => (
  <div>
    <Navigation></Navigation>
    <Hero></Hero>
    <Featured></Featured>
  </div>
)

export default IndexPage
