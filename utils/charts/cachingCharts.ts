import fs from 'fs-extra'
import { Chart } from "../../interfaces";

export default (charts: Chart[]) => {
    fs.writeFile("content/all-charts.json", JSON.stringify(charts));
    return charts;
}