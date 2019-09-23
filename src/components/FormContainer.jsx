/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react'

const datas = require('./db.json')

const CheckboxOrRadioGroup = props => {
  const { title, options, setName, controlFunc, selectedOptions, type } = props
  return (
    <div>
      <label>{title}</label>
      <div className="checkbox-group">
        {options.map(e => {
          return (
            <label key={e}>
              <input
                className="form-checkbox"
                name={setName}
                onChange={controlFunc}
                value={e}
                checked={selectedOptions.indexOf(e) > -1}
                type={type}
              />
              {e}
            </label>
          )
        })}
      </div>
    </div>
  )
}

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
    const { selectedDep } = this.state
    const newSelection = e.target.value
    let newSelectionArray
    if (selectedDep.indexOf(newSelection) > -1) {
      newSelectionArray = selectedDep.filter(s => s !== newSelection)
      // console.log('test')
    } else {
      newSelectionArray = [...selectedDep, newSelection]
      console.log(newSelectionArray)
    }
    this.setState({ selectedDep: newSelectionArray })
  }

  render() {
    const { dependencies, selectedDep } = this.state
    return (
      <div>
        <CheckboxOrRadioGroup
          title="What dependencies you want to select?"
          setName="Deps"
          type="checkbox"
          controlFunc={this.handleDepSel}
          options={dependencies}
          selectedOptions={selectedDep}
        />
        <div>{selectedDep}</div>
      </div>
    )
  }
}
