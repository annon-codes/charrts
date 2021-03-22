import fs from "fs-extra"
import matter from "gray-matter";
import path from "path"
import { Chart } from "../interfaces"

const chartsPath = path.join(process.cwd(), "content", "charts");


export default async function getAllCharts(): Promise<Chart[]> {
    const filenames = (await getChartFilenames());
    const charts = filenames.map(name => getOne(name));
    return Promise.all(charts);
}

export async function getOne(slug: string): Promise<Chart> {
    await fs.ensureDir(chartsPath)
    return matter(fs.readFileSync(path.join(chartsPath, slug + ".md"))).data as Chart;
}

export async function getChartFilenames(): Promise<string[]> {
    await fs.ensureDir(chartsPath)
    return fs.readdirSync(chartsPath).map(filename => filename.replace(/\.md/, ""));
}