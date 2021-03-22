import React from 'react'
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { Chart } from '../interfaces';
import { getChartFilenames, getOne } from '../utils/getCharts';
import hydrate from 'next-mdx-remote/hydrate';
import Layout from '../components/Layout';

export default function ChartView({ title, image, description, mdx }: Chart) {
    const content = mdx && hydrate(mdx);
    return (
        <Layout title={title} className="p-6 mx-auto container">
            <p className="text-center text-4xl pb-6">{title}</p>
            <div className="w-full md:w-4/5 mx-auto">
                <img className="mx-auto" src={image} alt={description} />
            </div>
            <article className="p-4 mx-auto prose dark:prose-dark">{content}</article>
        </Layout>
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
