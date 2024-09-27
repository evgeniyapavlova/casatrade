<script>
	import { base } from '$app/paths';
	import links from './links';
	import PdfDownload from './PdfDownload.svelte';
	export let index;
</script>

<section class="legal-links">
	<div class="all-links">
		{#each links as link}
			<a href="{base}{link.localPath}">{link.label}</a>
		{/each}
	</div>

	<div class="pdf-download">
		<PdfDownload link={links[index].link}>{links[index].label}</PdfDownload>
	</div>
</section>

<style>
	a {
		color: var(--primary);
		transition: color ease-out 0.2s;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 8px;
		font-weight: 600;
		text-decoration: none;
		gap: 12px;
	}

	:global(.all-links a:hover svg) {
		fill: white;
		transform: translateX(10px);
	}

	:global(.all-links a svg) {
		transition:
			color ease-out 0.2s,
			transform ease-out 0.2s;
	}

	a:hover {
		color: white;
	}
	section {
		padding-top: 120px;
		padding-bottom: 60px;
		display: flex;
		gap: 60px;
	}
</style>
