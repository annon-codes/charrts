import fs from 'fs-extra'
import { Chart } from "../../interfaces";

export default (charts: Chart[]) => {
    fs.writeFile("all-charts.json", charts);
    return charts;
}