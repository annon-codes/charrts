import React from 'react'
import Image from "next/image"
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
            <Image src={"/" + image} alt={description} layout="intrinsic" width={1920} height={1080} />
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
