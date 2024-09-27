<script>
	import borderPng from './img/border.png';
	import usd_icon from './img/usd_icon.png';
	import brl_icon from './img/brl_icon.png';
	import btc_icon from './img/btc_icon.png';

	import './scss/intro-quotes.scss';

	const items = [
		{ ticker: 'EUR/USD', price: '1.11 USD', flag: btc_icon },
		{ ticker: 'USD/BRL', price: '5.60 BRL', flag: btc_icon },
		{ ticker: 'BTC', price: '54 117 USD', flag: btc_icon }
	];
</script>

<div class="intro-quotes">
	{#each items as item}
		<div class="intro-quote-wrap">
			<div class="intro-quote-style intro-quote-bgr"></div>
			<div
				class="intro-quote-style intro-quote-border"
				style="background-image:url({borderPng});"
			></div>
			<div class="intro-quote">
				<img src={item.flag} alt="" />
				<div class="quote-text">
					<div class="quote-ticker text-m">{item.ticker}</div>
					<div class="quote-price text-s">{item.price}</div>
				</div>
			</div>
		</div>
	{/each}
</div>
