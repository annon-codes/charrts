import { NextApiRequest, NextApiResponse } from "next"
import getAllCharts from "../../utils/getCharts"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { search } = req.query;
    console.log(search);
    res.json(await getAllCharts());
}