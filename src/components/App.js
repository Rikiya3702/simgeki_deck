import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.scss'

import {
  input
  } from '../actions'

import {
  ITEM_S
  } from '../actions/'

class App extends Component {
render(){
  const props = this.props

  return (
<React.Fragment>
  <div id="App">
    <header>
      <h1>オンゲキ デッキ シミュレーター</h1>
      <hr />
    </header>
  </div>
</React.Fragment>
  )
}}

const validate = values => {
  const errors = {}
  return errors
}

const mapStateToProps = state => ({
  lv: state.input.lv,
 })

const mapDispatchToProps = ({
  input
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm( {validate, form: 'simgeki_deck'})(App))
