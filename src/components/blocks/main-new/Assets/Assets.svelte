<script>
	import { SwiperSlide } from 'swiper/svelte';
	import Overlay from '$common/Overlay/Overlay.svelte';
	import Slider from '$common/Slider/Slider.svelte';
	import ButtonArrow from '$common/Buttons/ButtonArrow.svelte';
	import AssetSlide from './AssetSlide.svelte';

	import './scss/assets.scss';
	import './scss/asset-slide.scss';

	export let content;

	const { title, caption, button } = content;
</script>

<div class="assets-wrap" id="assets">
	<section class="assets slider-title">
		<div class="assets-text">
			<h2>{@html title}</h2>
			<div class="text-l">{caption}</div>
		</div>
		<div class="swiper-nav">
			<div class="swiper-button-prev"><ButtonArrow /></div>
			<div class="swiper-button-next"><ButtonArrow isNext /></div>
		</div>
	</section>
	<div class="assets-slider common-slider">
		<Slider
			navigationButtonsClasses={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
		>
			{#each [0, 1, 2, 3, 4, 5, 6, 7] as _}
				<SwiperSlide>
					<AssetSlide {button} />
				</SwiperSlide>
			{/each}
		</Slider>
	</div>
	<section class="slider-xxs">
		<Overlay>
			<ul class="list">
				{#each [0, 1, 2, 3, 4, 5, 6, 7] as _}
					<li>
						<AssetSlide {button} />
					</li>
				{/each}
			</ul>
		</Overlay>
	</section>
</div>
