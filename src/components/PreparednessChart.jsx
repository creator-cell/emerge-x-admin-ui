"use client"
import { Pie, PieChart, Cell, Sector } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    {
        browser: "Hazard and Risk Assessment",
        visitors: 20,
        fill: "rgba(254, 108, 108, 1)",
    },
    {
        browser: "Resource Inventory",
        visitors: 87,
        fill: "rgba(254, 184, 108, 1)",
    },
    {
        browser: "Communication Systems",
        visitors: 73,
        fill: "rgba(254, 108, 169, 1)",
    },
    { browser: "Emergency Plans", visitors: 30, fill: "rgba(108, 108, 254, 1)" },
];

const chartConfig = {
    visitors: { label: "Visitors" },
};


const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                cornerRadius={4}
            />
        </g>
    );
};

export function PreparednessChart() {
    return (
        <Card className="flex flex-col xl:flex-row items-center bg-transparent border-0 shadow-none py-0">
            {/* Chart Section */}
            <CardContent className="flex-1 p-0 border-0 shadow-none">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-square w-[200px] sm:h-[180px] md:w-[220px] md:h-[220px] relative"
                >
                    <PieChart width={220} height={220}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={2}
                            activeShape={renderActiveShape}
                            activeIndex={[0, 1, 2, 3]}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>

            {/* Data Section with Colored Bars */}
            <div className="flex flex-col gap-4 p-4">
                {chartData?.map((data) => (
                    <div
                        key={data.browser}
                        className="flex items-center justify-between w-full gap-10"
                    >
                        <div className="flex items-center gap-6">
                            <div
                                className="w-4 h-2 rounded-md"
                                style={{ backgroundColor: data.fill }}
                            />
                            <span className="text-sm text-muted-foreground">
                                {data.browser}
                            </span>
                        </div>
                        <div>
                            <span className="font-medium text-[16px]">{data.visitors}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}