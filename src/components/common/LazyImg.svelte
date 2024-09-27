<script>
	import { inview } from 'svelte-inview';

	let isInView;
	const options = {
		rootMargin: '500px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);

	export let src, alt;
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<img {src} {alt} />
	{:else}
		<slot />
	{/if}
</div>
