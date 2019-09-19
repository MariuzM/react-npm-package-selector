/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react'

const datas = require('./db.json')

const CheckboxOrRadioGroup = props => (
  <div>
    <label>{props.title}</label>
    <div className="checkbox-group">
      {props.options.map(e => {
        return (
          <label key={e}>
            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={e}
              checked={props.selectedOptions.indexOf(e) > -1}
              type={props.type}
            />
            {e}
          </label>
        )
      })}
    </div>
  </div>
)

export default class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dependencies: [],
      selectedDep: [],
    }
    this.handleDepSel = this.handleDepSel.bind(this)
  }

  componentDidMount() {
    const { dependencies } = datas
    this.setState({ dependencies })
  }

  handleDepSel(e) {
    const newSelection = e.target.value
    let newSelectionArray
    if (this.state.selectedDep.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedDep.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.selectedDep, newSelection]
    }
    this.setState({ selectedDep: newSelectionArray }, () =>
      console.log(this.state.selectedDep),
    )
  }

  render() {
    return (
      <div>
        <CheckboxOrRadioGroup
          title="What dependencies you want to select?"
          setName="Deps"
          type="checkbox"
          controlFunc={this.handleDepSel}
          options={this.state.dependencies}
          selectedOptions={this.state.selectedDep}
        />
        <div>{this.state.selectedDep}</div>
      </div>
    )
  }
}
