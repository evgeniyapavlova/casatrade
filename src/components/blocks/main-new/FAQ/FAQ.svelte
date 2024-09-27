<script>
	import Overlay from '$common/Overlay/Overlay.svelte';
	import FaqItem from './FAQItem.svelte';
	export let content;
	import './scss/faq.scss';

	const { title, items } = content;
</script>

<div class="faq-wrap bgr-shadow-wrap section-padding" id="faq">
	<section class="faq">
		<h2>{title}</h2>
		<div class="content-mobile">
			<Overlay>
				<ul class="list">
					{#each items as { q, a }, index}
						<FaqItem isMobile {q} {a} />
					{/each}
				</ul>
			</Overlay>
		</div>

		<div class="content-desktop">
			<div class="list-wrap-inner">
				<ul class="list">
					{#each items.slice(0, 3) as { q, a }, index}
						<FaqItem open={index === 0} {q} {a} />
					{/each}
				</ul>
				<ul class="list">
					{#each items.slice(3, 6) as { q, a }}
						<FaqItem {q} {a} />
					{/each}
				</ul>
			</div>
		</div>
	</section>
</div>
