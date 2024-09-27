<script>
	import PdfIcon from './img/pdf_icon.svelte';

	export let link;
</script>

<div class="label"><slot /></div>
<br />
<a href={link} target="_blank" class="pdf-download" alt="Download PDF"> <PdfIcon /> <slot />.pdf</a>

<style>
	a {
		color: var(--primary);
		transition: color ease-out 0.2s;

		align-items: center;
		justify-content: flex-start;
		margin-bottom: 8px;
		font-weight: 600;
		text-decoration: none;
		font-size: 20px;
		display: flex;
		gap: 12px;
	}
	a:hover {
		color: white;
	}
	:global(.pdf-download a:hover svg) {
		fill: white !important;
	}
	:global(.pdf-download a svg) {
		transition: fill ease-out 0.2s;
	}
	.label {
		font-size: 24px;
		margin-bottom: 15px;
	}
</style>
