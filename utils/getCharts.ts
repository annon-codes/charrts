import fs from "fs-extra"
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
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
    const { data, content } = matter(fs.readFileSync(path.join(chartsPath, slug + ".md")));
    return { ...data, mdx: await renderToString(content) } as Chart;
}

export async function getChartFilenames(): Promise<string[]> {
    await fs.ensureDir(chartsPath)
    return fs.readdirSync(chartsPath).map(filename => filename.replace(/\.md/, ""));
}