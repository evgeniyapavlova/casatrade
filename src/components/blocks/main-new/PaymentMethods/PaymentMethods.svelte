<script>
	import AdvCash from './img/AdvCash.svg';
	import Boleto from './img/Boleto.svg';
	import BoletoRapido from './img/BoletoRapido.svg';
	import LoteriasCaixa from './img/LoteriasCaixa.svg';
	import MasterCard from './img/MasterCard.svg';
	import Neteller from './img/Neteller.svg';
	import PerfectMoney from './img/PerfectMoney.svg';
	import Pix from './img/Pix.svg';
	import Skrill from './img/Skrill.svg';
	import Ted from './img/Ted.svg';
	import Visa from './img/Visa.svg';
	import WebMoney from './img/WebMoney.svg';

	import './scss/payment.scss';
	import './scss/payment-shadow.scss';
	export let content;
	const { title } = content;

	const methodsImages = [
		PerfectMoney,
		Pix,
		Neteller,
		MasterCard,
		Skrill,
		Ted,
		Visa,
		WebMoney,
		LoteriasCaixa,
		AdvCash,
		Boleto,
		BoletoRapido
	];
</script>

<div class="payment-wrap bgr-shadow-wrap">
	<section class="payment section-padding">
		<h2>{title}</h2>
		<div class="list-wrap full-w-xxs">
			<ul class="list">
				{#each methodsImages as img}
					<li>
						<div class="bgr"></div>
						<img src={img} alt="" />
					</li>
				{/each}
			</ul>
		</div>
	</section>
</div>
