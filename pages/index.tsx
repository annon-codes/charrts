import Layout from "../components/Layout";
import { Chart } from "../interfaces";
import getAllCharts from "../utils/getCharts";

interface Props {
    charts: Chart[]
}

export default function Home({ charts }: Props) {
    return (
        <Layout title={"Look at these charts!"}>
            <article>
                <ul>
                    {charts?.map(({ title, image, description }, idx) => (
                        <li key={idx}>
                            <p>{title}</p>
                            <img src={image} alt={description} />
                        </li>
                    ))}
                </ul>
            </article>
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
