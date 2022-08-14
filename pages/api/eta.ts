import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  dateOfLastCheck: number,
  result : Array<{
    groupe: string,
    update: boolean,
    calendarId: string,
  }>
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await fetch("https://api.jsonbin.io/v3/b/62f88b89e13e6063dc79ff90", {
    method: "GET",
    headers: {
      'X-Master-Key': '$2b$10$hthFJoHDMFksr3JY/9S8Xuuo.xoZP.wzymXJs9goxcSmTSd1HS.PC', 
      'X-Bin-Meta': 'false',
      "Content-Type": "application/json",
    },
  })
  
  const data = await response.json() as Data

  res.status(200).json(data);
}
