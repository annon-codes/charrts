import React from 'react'
import { Chart } from '../../interfaces'

interface Props {
    charts: Chart[]
}

export default function ChartGrid({ charts }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {charts.map(({ title, image, description }, idx) => (
                <a key={idx} href={title.split(" ").join("-")} className="flex flex-col">
                    <p className="capitalize w-80 md:w-52 truncate text-2xl">{title}</p>
                    <img src={image} alt={description} className="flex-grow" />
                </a>
            ))}
        </div>
    )
}
