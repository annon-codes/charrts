import { NextApiRequest, NextApiResponse } from "next";
import charts from "../../content/all-charts.json"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { phrase } = req.query;
    if (phrase) {
        res.json(charts.filter(chart => chart.title.toLowerCase().includes((phrase as string).toLowerCase())))
    } else
        res.json(charts);
}