<script>
	import { Line } from 'svelte-chartjs';
	import { onMount } from 'svelte';
	import { data } from './data.js';

	import icon from './img/icon.png';

	import {
		Chart as ChartJS,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	ChartJS.register(Legend, LineElement, LinearScale, PointElement, CategoryScale);

	let isMounted = false;

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			x: {
				display: false,
				grid: {
					display: false
				}
			},
			y: {
				display: false,
				grid: {
					display: false
				}
			}
		}
	};
	export let button;

	onMount(() => {
		isMounted = true;
	});
</script>

<div class="slide-wrap">
	<div class="asset-slide">
		<div class="asset-slide-border"></div>
		<div class="asset-slide-content">
			<div class="asset-slide-title">
				<div class="asset-slide-logo">
					<!-- TODO change alt -->
					<img src={icon} alt="Corporation" />
				</div>
				<div class="asset-slide-title-text">
					<h5>NVIDIA</h5>
					<div class="text-m">Corporation</div>
				</div>
			</div>
			<div class="asset-slide-chart-wrap">
				<div class="asset-slide-chart">
					{#if isMounted}
						<Line {data} options={chartOptions} width="100%" height="auto" />
					{/if}
				</div>
			</div>
			<div class="asset-slide-numbers">
				<div class="text-xl">+32%</div>
				<div class="text-m">1 month change</div>
			</div>
			<div class="button-wrap">
				<div class="button button-large button-primary">{button}</div>
			</div>
		</div>
	</div>
</div>
