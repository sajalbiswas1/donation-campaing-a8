import { Cell, Pie, PieChart } from "recharts";
import { getCard } from "../../localStorage";

const Statistics = () => {
    const ids = getCard()
    const basic = 12 - ids
    let data = [
        { "name": "Group A", "value": basic },
        { "name": "Group B", "value": ids }
    ];

    console.log(data)


    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className="flex justify-center w-10/12 m-auto">

            <div>
                <PieChart className="text-3xl font-bold" height={600} width={600}>
                    <Pie data={data} dataKey={"value"} nameKey={'name'} cx={"50%"} cy={"50%"} fill="#8884d8" label={renderCustomizedLabel} labelLine={false}>{data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}</Pie>

                </PieChart>
                <div className="flex gap-5">
                    <p className="font-normal text-lg flex items-center gap-5">Your Donation <span className=" h-3"><hr className="bg-[#00C49F] h-3 w-24 rounded-sm" /></span></p>
                    <p className="font-normal text-lg flex items-center gap-5">Total Donation <span><hr className="bg-[#FF444A] h-3 w-24 rounded-sm" /></span></p>
                </div>
            </div>


        </div>
    );
};

export default Statistics;