<script>
	import Footer from '../components/common/Footer/Footer.svelte';
	import { lazyLoadBackground } from '$lib/utils/lazyLoadBackground';
	import { onMount } from 'svelte';

	import '$lib/styles/_constants.scss';
	import './styles.scss';
	import '$lib/styles/buttons.scss';
	import '$lib/styles/typography.scss';

	let isStyleLoaded = false;

	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('../lib/styles/fonts.css');
			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
		lazyLoadBackground();
	});
</script>

<div class="app">
	<slot />
	<!-- <Footer /> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
