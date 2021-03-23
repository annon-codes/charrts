import { GetServerSideProps } from 'next'
import React from 'react'
import ChartGrid from '../components/ChartGrid';
import Layout from '../components/Layout';
import { Chart } from '../interfaces';
import getAllCharts from '../utils/charts/getCharts';

interface Props {
    phrase: string
    charts: Chart[]
}

export default function SearchedCharts({ phrase, charts }: Props) {
    return (
        <Layout title={`"${phrase}"`} className="p-6 mx-auto container">
            <ChartGrid charts={charts} />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { phrase } = context.query;
    return { props: { phrase, charts: (await getAllCharts()).filter((chart) => chart.title.includes(phrase as string)) } };
}
