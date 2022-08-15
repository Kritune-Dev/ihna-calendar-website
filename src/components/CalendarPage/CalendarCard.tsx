import React, { Component } from 'react'
import { Calendrier } from '../../types/Data'

class CalendarCard extends Component<Calendrier> {
  constructor(props: Calendrier) {
    super(props)
  }

  render() {
    const link = `https://calendar.google.com/calendar/embed?src=${this.props.calendarId}&ctz=Europe/Paris`
    const linkDirect = 'https://calendar.google.com/calendar/u/0/r?cid=' + this.props.calendarId
    return (
      <div>
        <h2>{this.props.groupe}</h2>
        <p>{this.props.update ? "A jour 🟢" : "Pas à jour 🔴"}</p>
        <a href={linkDirect} target="_blank" rel="noopener noreferrer">Cliquez ici pour avoir acces au calendrier</a>
      </div>    
    )
  }
}

export default CalendarCard

