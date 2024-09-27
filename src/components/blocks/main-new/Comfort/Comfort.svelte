<script>
	import icon1 from './img/icon1.svg';
	import icon2 from './img/icon2.svg';
	import icon3 from './img/icon3.svg';
	import icon4 from './img/icon4.svg';

	import './scss/comfort.scss';
	export let content;

	const icons = [icon1, icon3, icon2, icon4];

	const { title, items } = content;
</script>

<div class="comfort-wrap bgr-shadow-wrap">
	<section class="comfort section-padding" id="comfort">
		<h2>{title}</h2>
		<ul class="list">
			{#each items as { title, caption }, index}
				<li>
					<div class="li-title h3">
						<span>{title}</span>
						<div class="icon-wrap" data-index={index}><img src={icons[index]} alt="Icon" /></div>
					</div>
					<div class="text-l">{caption}</div>
				</li>
			{/each}
		</ul>
	</section>
</div>
