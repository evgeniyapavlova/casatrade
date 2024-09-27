<script>
	import { slide } from 'svelte/transition';
	import './scss/faq-item.scss';

	export let q, a;
	export let open = false,
		isMobile = false;
	const handleClick = () => (open = !open);
</script>

{#if isMobile}
	<li>
		<div class="faq-item">
			<div class="shadow"></div>
			<h5>{q}</h5>
			<div class="text-m">{a}</div>
		</div>
	</li>
{:else}
	<li>
		<button aria-label="Open accordion item" on:click={handleClick} class="faq-item">
			<div class="shadow"></div>
			<h5>
				{q}
				<div class="arrow-wrap">
					<div class="{open ? 'item-open' : 'item-closed'} arrow"></div>
				</div>
			</h5>

			{#if open}
				<div class="text-m" transition:slide={{ duration: 200 }}>{a}</div>
			{/if}
		</button>
	</li>
{/if}
