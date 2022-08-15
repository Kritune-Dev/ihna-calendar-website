import React, { Component } from 'react'
import { Calendrier } from '../../types/Data'

export default class CalendarItem extends Component<{groupe: string}> {
  constructor(props: Calendrier) {
    super(props)
  }

  render() {
    return (
      <div>{this.props.groupe}</div>
    )
  }
}
