import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"
import { Button } from "@react-md/button"
import { FontIcon } from "@react-md/icon"
import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import CreatableSelect from "react-select/creatable"

const createOption = label => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
})

const defaultOptions = [
  createOption("One"),
  createOption("Two"),
  createOption("Three"),
]

export default class CreatableAdvancedSelect extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      isLoading: false,
      options: defaultOptions,
      value: undefined,
      copied: false,
    }

    this.handleChange = (newValue, actionMeta) => {
      console.group("Value Changed")
      console.log(newValue)
      console.log(`action: ${actionMeta.action}`)
      console.groupEnd()
      this.setState({ value: newValue })
    }

    this.handleCreate = inputValue => {
      this.setState({ isLoading: true })
      console.group("Option created")
      console.log("Wait a moment...")
      setTimeout(() => {
        const { options } = this.state
        const newOption = createOption(inputValue)
        console.log(newOption)
        console.groupEnd()
        this.setState({
          isLoading: false,
          options: [...options, newOption],
          value: newOption,
        })
      }, 1000)
    }
  }

  render() {
    const { isLoading, options, value } = this.state

    return (
      <div className="mt-1 relative">
        <div className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md">
          <CreatableSelect
            isClearable
            isDisabled={isLoading}
            isLoading={isLoading}
            onChange={this.handleChange}
            onCreateOption={this.handleCreate}
            options={options}
            value={value}
          />
        </div>
        <div className="text-gray-100">
          <CopyToClipboard
            text={this.state.value}
            onCopy={() => this.setState({ copied: true })}
          >
            <button className="border rounded-md border-orange-400 hover:border-orange-500 hover:bg-orange-500 hover:bg-opacity-30 text-gray-200 hover:text-gray-300 focus:outline-none px-3 py-2 m-2">
              Copy to clipboard with button
            </button>
          </CopyToClipboard>
        </div>
        <div className="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">
            <CopyToClipboard
              text={value}
              onCopy={() => this.setState({ copied: true })}
            >
              <Button
                theme="secondary"
                buttonType="icon"
                aria-label="copy-text"
              >
                {this.state.copied ? (
                  <AssignmentTurnedInIcon />
                ) : (
                  <FontIcon>content_paste</FontIcon>
                )}
              </Button>
            </CopyToClipboard>
          </span>
        </div>
      </div>
    )
  }
}
