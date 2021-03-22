import React from "react";
import Layout from "../components/Layout";
import { Chart } from "../interfaces";
import getAllCharts from "../utils/getCharts";

interface Props {
    charts: Chart[]
}

export default function Home({ charts }: Props) {
    return (
        <Layout title={"Look at these charts!"} className="container p-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {charts.map(({ title, image, description }, idx) => (
                    <a key={idx} href={title.split(" ").join("-")}>
                        <p className="capitalize w-80 md:w-52 truncate text-2xl">{title}</p>
                        <img src={image} alt={description} />
                    </a>
                ))}
            </div>
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
