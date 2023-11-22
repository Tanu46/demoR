import React from 'react'

function Nav() {
  return (
      <>
           <div className="container">
      <h1>Filters</h1>
      <h3>Launch year</h3>
      <div className="left-corner">
        <div className="left">
          <ul>
            <li id="year">2006</li>
            <li>2008</li>
            <li>2010</li>
            <li>2012</li>
            <li>2014</li>
            <li>2016</li>
            <li>2018</li>
            <li>2020</li>
          </ul>
        </div>
        <div className="right">
          <li>2007</li>
          <li>2009</li>
          <li>2011</li>
          <li>2013</li>
          <li>2015</li>
          <li>2017</li>
          <li>2019</li>
        </div>
      </div>
      <h3>successful Launch</h3>
      <div className="successful">
        <li className="left">true</li>
        <li className="right">false</li>
      </div>
      <h3>successful landing</h3>
      <div className="landing">
        <li className="left">true</li>
        <li className="right">false</li>
      </div>
    </div>
      </>
  )
}

export default Nav
