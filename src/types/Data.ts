interface Calendrier {
  groupe: string,
  update: boolean,
  calendarId: string,
}

interface Data {
  dateOfLastCheck: number,
  result : Array<Calendrier>
}

export type { Calendrier, Data };

