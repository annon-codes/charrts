import fs from "fs"
import matter from "gray-matter";
import path from "path"
import { Chart } from "../interfaces"

const chartsPath = path.join(process.cwd(), "content", "charts");

export default function getAllCharts(): Chart[] {
    return fs.readdirSync(chartsPath)
        .map(filename => fs.readFileSync(path.join(chartsPath, filename)))
        .map(buffer => matter(buffer))
        .map(({ data }) => data as Chart)
}

export function getOne(slug: string): Chart {
    return matter(fs.readFileSync(path.join(chartsPath, slug + ".md"))).data as Chart;
}