import React from 'react'
import path from "path"
import fs from "fs"
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { Chart } from '../interfaces';
import { getOne } from '../utils/getCharts';

const chartsPath = path.join(process.cwd(), "content", "charts");

export default function ChartView({ title, image, description }: Chart) {
    return (
        <div>
            <p>{title}</p>
            <img src={image} alt={description} />
        </div>
    )
}

export async function getStaticProps({ params }: GetStaticPropsContext): Promise<{ props: Chart }> {
    return {
        props: getOne(params?.slug as string)
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: fs.readdirSync(chartsPath).map(filename => filename.replace(/\.md/, "")).map(slug => ({
            params: { slug }
        })),
        fallback: false
    }
}
