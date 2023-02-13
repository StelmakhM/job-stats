import { useState } from "react";
import { useSelector } from "react-redux";
import { AreaChartComponent, BarChartComponent } from "../";

import Wrapper from "./ChartsContainer.styled";

export default function ChartsContainer() {
	const [barChart, setBarChart] = useState(true);
	const { monthlyApplications: data } = useSelector((state) => state.allJobs);
	return (
		<Wrapper>
			<h4>Monthly applications</h4>
			<button type="button" onClick={() => setBarChart(!barChart)}>
				{barChart ? "Area Chart" : "Bar Chart"}
			</button>
			{barChart ? (
				<BarChartComponent data={data} />
			) : (
				<AreaChartComponent data={data} />
			)}
		</Wrapper>
	);
}
