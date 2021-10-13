import React, { memo } from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
import './SkillChart.scss';
function SkillChart({ title, colors, series, labels, loading }) {
	const chartSettings = {
		series: series,
		options: {
			chart: {
				type: 'bar',
				height: 300,
			},
			plotOptions: {
				bar: {
					barHeight: '100%',
					distributed: true,
					horizontal: true,
					dataLabels: {
						position: 'bottom',
					},
				},
			},
			colors: [
				'#4E342E',
				'#E91E63',
				'#3949AB',
				'#00C853',
				'#A5978B',
				'#D84315',
				'#212121',
				'#FBC02D',
				'#EF5350',
				'#263238',
			],
			dataLabels: {
				enabled: true,
				textAnchor: 'start',
				style: {
					colors: ['#fff'],
					align: 'right',
				},
				formatter: function (val, opt) {
					return (
						opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
					);
				},
				offsetX: 0,
				dropShadow: {
					enabled: true,
				},
			},
			stroke: {
				width: 1,
				colors: ['#fff'],
			},
			xaxis: {
				categories: [
					'HTML5',
					'CSS',
					'Node',
					'PHP',
					'C#',
					'Python',
					'Javascript',
					'React',
					'Vue',
					'Angular',
					'MySql, SQL',
					'CI CD',
					'React Native',
				],
			},
			yaxis: {
				labels: {
					show: false,
				},
			},
			title: {
				text: 'Years of Experience',
				align: 'center',
				floating: true,
			},
			subtitle: {
				text: 'Tech-stack names as data labels inside bars',
				align: 'center',
			},
			tooltip: {
				theme: 'dark',
				x: {
					show: false,
				},
				y: {
					title: {
						formatter: function () {
							return '';
						},
					},
				},
			},
		},
	};

	// if (colors) {
	// 	/* Set colors for donut and Legend(s) */
	// 	chartSettings.options.colors = colors;
	// }

	return (
		<div className="pie-chart">
			<Chart
				className="chart"
				options={chartSettings.options}
				series={chartSettings.series}
				type="bar"
				height={500}
			/>
		</div>
	);
}

SkillChart.propTypes = {
	title: PropTypes.string.isRequired,
	colors: PropTypes.array,
	series: PropTypes.array,
	labels: PropTypes.array,
	loading: PropTypes.bool,
};

// mock-data
SkillChart.defaultProps = {
	title: 'Chart Title',
	colors: null,
	series: [
		{
			data: [10, 10, 6, 5, 3, 1, 10, 6, 1, 3, 10, 5, 2],
		},
	],
	labels: [],
	loading: false,
};

export default memo(SkillChart);
