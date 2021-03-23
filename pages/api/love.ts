import { NextApiRequest, NextApiResponse } from "next";
import s from "../../test.json"

export default async (_req: NextApiRequest, res: NextApiResponse) => {
    res.json(s);
}