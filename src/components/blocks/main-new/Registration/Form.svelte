<script>
	import { base } from '$app/paths';
	import './scss/form.scss';

	import Apple from './img/Apple.svelte';
	import Facebook from './img/Facbook.svelte';
	import Google from './img/Google.svelte';

	const socRegLogos = [Google, Facebook, Apple];

	export let button, labels, terms, social_signin;
</script>

<form action="" class="form">
	{#each labels as label}
		<div class="field-wrap">
			<label for="" class="form-label form-input-label">{label}</label>
			<input type="text" class="styled-input" />
			<!-- <div class="error-text">error</div> -->
		</div>
	{/each}

	<label class="form-terms">
		<input type="checkbox" />
		<span class="checkmark">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
			>
				<g clip-path="url(#clip0_141_8742)">
					<path
						d="M7.72919 14.5833L11.8125 18.6666L21.1459 9.33331"
						stroke="#F0F3F8"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_141_8742">
						<rect width="28" height="28" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</span>
		<span class="form-label"
			>{#each terms as term, index}{#if index === 1}<a href="{base}/" alt="">{term}</a>
				{:else if index === 3}<a href="{base}/" alt="">{term}</a>{:else}{@html term}{/if}
			{/each}</span
		>
	</label>
	<button class="button button-large button-primary">{button}</button>
	<div class="text-xs">{social_signin}</div>
	<div class="social-reg-buttons">
		{#each socRegLogos as item}
			<button class="button button-medium button-tertiary">
				<svelte:component this={item} />
			</button>
		{/each}
	</div>
</form>
