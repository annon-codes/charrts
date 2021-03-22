import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { Chart } from '../interfaces';
import { getChartFilenames, getOne } from '../utils/getCharts';

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
        props: await getOne(params?.slug as string)
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: (await getChartFilenames()).map(slug => ({
            params: { slug }
        })),
        fallback: false
    }
}
