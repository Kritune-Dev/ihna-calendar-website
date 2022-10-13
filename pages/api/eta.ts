import type { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from "dotenv";
import {Data} from "../../src/types/Data";
dotenv.config({ path: __dirname+'/.env' });


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await fetch("https://api.jsonbin.io/v3/b/6347d0232b3499323bdd0150", {
    method: "GET",
    headers: {
      'X-ACCESS-KEY': "$2b$10$YQ5fhDGfepujtL7tEESPmO7e.JJlhxuEEo2gffK7tibAYQn.Huhte",
      'X-Bin-Meta': 'false',
      "Content-Type": "application/json",
    },
  })
  
  const data = await response.json() as Data
  if (response.status === 200)
  {
    res.status(200).json(data)
  } else {
    res.status(500).json(data)
}}
