<script>
	import { onMount } from 'svelte';
	import { Swiper } from 'swiper/svelte';
	import { Mousewheel, Navigation, EffectCreative } from 'swiper';

	export let navigationButtonsClasses;
	const { nextEl, prevEl } = navigationButtonsClasses;

	let isStyleLoaded = false;

	async function loadStyle() {
		if (!isStyleLoaded) {
			await import('swiper/css');
			await import('swiper/css/effect-creative');
			await import('swiper/css/mousewheel');
			await import('./scss/slider.scss');

			isStyleLoaded = true;
		}
	}
	onMount(() => {
		loadStyle();
	});
</script>

<div class="swiper-desktop">
	<Swiper
		effect="creative"
		creativeEffect={{
			limitProgress: 3,
			prev: {
				translate: ['-100%', 0, -500],
				opacity: 0
			},
			next: {
				translate: ['100%', 0, 0]
			},
			nextPlus: {
				translate: ['200%', 0, 0],
				opacity: 0
			}
		}}
		modules={[Mousewheel, Navigation, EffectCreative]}
		direction="horizontal"
		slidesPerView="auto"
		mousewheel={{
			releaseOnEdges: true,
			thresholdTime: 600,
			forceToAxis: true,
			thresholdDelta: 10
		}}
		centeredSlides
		grabCursor
		speed={850}
		navigation={{
			nextEl,
			prevEl
		}}
		observer={false}
		observeSlideChildren={false}
	>
		<slot />
	</Swiper>
</div>
<div class="swiper-mobile">
	<Swiper
		modules={[Mousewheel, Navigation, EffectCreative]}
		direction="horizontal"
		slidesPerView="auto"
		mousewheel={{
			releaseOnEdges: true,
			thresholdTime: 600,
			forceToAxis: true,
			thresholdDelta: 10
		}}
		grabCursor
		speed={850}
		navigation={{
			nextEl,
			prevEl
		}}
		observer={false}
		observeSlideChildren={false}
	>
		<slot />
	</Swiper>
</div>
