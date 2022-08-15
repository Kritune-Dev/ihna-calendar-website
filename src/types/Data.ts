export default interface Calendrier {
  groupe: string,
  update: boolean,
  calendarId: string,
}

export default interface Data {
  dateOfLastCheck: number,
  result : Array<Calendrier>
}