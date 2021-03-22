import Image from "next/image";
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
                    <div key={idx}>
                        <p className="capitalize w-80 md:w-52 truncate text-2xl">{title}</p>
                        <Image src={"/" + image} alt={description} layout="intrinsic" width={480} height={270} />
                    </div>
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
