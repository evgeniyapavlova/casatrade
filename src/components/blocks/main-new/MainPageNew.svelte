<script>
	// import { onMount } from 'svelte';

	import Header from '../../common/Header/Header.svelte';
	import Intro from '../main-new/Intro/Intro.svelte';
	import Comfort from './Comfort/Comfort.svelte';
	import Assets from './Assets/Assets.svelte';
	import TradeAnytime from './Trade/Trade.svelte';
	import PaymentMethods from './PaymentMethods/PaymentMethods.svelte';
	import Speak from './Speak/Speak.svelte';
	import Bonuses from './Bonuses/Bonuses.svelte';
	import Find from './Find/Find.svelte';
	import Enter from './Enter/Enter.svelte';
	import Faq from './FAQ/FAQ.svelte';
	import Registration from './Registration/Registration.svelte';
	import Footer from '../../common/Footer/Footer.svelte';
	import translation from '$lib/translations/en.js';

	// let isTranslationLoaded = false,
	// 	translation = {};

	// async function loadTranslations() {
	// 	if (!isTranslationLoaded) {
	// 		const module = await import(`$lib/translations/${lang}.js`);
	// 		translation = module.default;
	// 		isTranslationLoaded = true;
	// 	}
	// }

	// onMount(async () => {
	// 	loadTranslations();
	// });

	// export let lang;
</script>

{#if translation?.header}
	<Header content={translation.header} />
{/if}

{#if translation?.intro}
	<Intro content={translation.intro} />
{/if}

<!-- {#if isTranslationLoaded} -->

<Comfort content={translation.comfort} />
<Assets content={translation.assets} />

<TradeAnytime content={translation.trade} />

<Find content={translation.find} />

<PaymentMethods content={translation.payment} />

<Speak content={translation.speak} />
<Bonuses content={translation.bonuses} />

<Enter content={translation.enter} />
<Faq content={translation.faq} />
<Registration content={translation.registration} />
<Footer content={translation.footer} />
<!-- {/if} -->
