import React from "react";
import Layout from "../components/Layout";
import { Chart } from "../interfaces";
import getAllCharts from "../utils/getCharts";
import ChartGrid from "../components/ChartGrid";

interface Props {
    charts: Chart[]
}

export default function Home({ charts }: Props) {
    return (
        <Layout title={"Look at these charts!"} className="container p-6 mx-auto">
            <ChartGrid charts={charts} />
        </Layout>
    )
}

export async function getStaticProps(): Promise<{ props: Props; }> {
    return {
        props: {
            charts: await getAllCharts()
        }
    };
}
