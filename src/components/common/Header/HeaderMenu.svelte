<script>
	import './scss/header-menu.scss';
	import LangSwitcher from './LangSwitcher.svelte';
	export let items;
</script>

<div class="header-menu">
	{#each items as item}
		<button class="nav-link nav-link-text">{item}</button>
	{/each}
	<div class="divider"></div>
	<LangSwitcher />
</div>
