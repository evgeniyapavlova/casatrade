<script>
	import { base } from '$app/paths';
	import Logo from '../Logo.svelte';
	import HeaderMenu from './HeaderMenu.svelte';
	import { reg_link } from '$lib/stores/reg_link';

	import './scss/header.scss';

	export let content;
</script>

<div class="bgr-oval-wrap">
	<div class="bgr-oval"></div>
</div>
<div class="header-placement">
	<section class="header-wrap">
		<header>
			<a href="{base}/" class="logo-link"><Logo /></a>
			<HeaderMenu items={content.menu} />
			<a href={$reg_link} class="button button-tertiary button-medium">{content.button}</a>
		</header>
	</section>
</div>
