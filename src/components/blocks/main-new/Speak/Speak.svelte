<script>
	import { SwiperSlide } from 'swiper/svelte';
	import Slider from '$common/Slider/Slider.svelte';
	import Overlay from '$common/Overlay/Overlay.svelte';
	import SpeakSlide from './SpeakSlide.svelte';
	import traderImg1 from './img/trader1.jpg';
	import traderImg2 from './img/trader2.jpg';
	import traderImg3 from './img/trader3.jpg';
	import './scss/speak.scss';
	import ButtonArrow from '$common/Buttons/ButtonArrow.svelte';

	const images = [traderImg1, traderImg2, traderImg3];

	export let content;
	const { title, caption, traders } = content;
</script>

<div class="speak-wrap">
	<section class="speak slider-title">
		<div class="speak-text">
			<h2>
				{title}
			</h2>
			<div class="text-l">{caption}</div>
		</div>
		<div class="swiper-nav">
			<div class="swiper-button-prev-2"><ButtonArrow /></div>
			<div class="swiper-button-next-2"><ButtonArrow isNext /></div>
		</div>
	</section>
	<div class="speak-slider common-slider">
		<Slider
			navigationButtonsClasses={{
				nextEl: '.swiper-button-next-2',
				prevEl: '.swiper-button-prev-2'
			}}
		>
			{#each traders as { name, role }, index}
				<SwiperSlide>
					<SpeakSlide {name} {role} image={images[index]} />
				</SwiperSlide>
			{/each}
		</Slider>
	</div>
	<section class="slider-xxs">
		<Overlay>
			<ul class="list">
				{#each traders as { name, role }, index}
					<li>
						<SpeakSlide {name} {role} image={images[index]} />
					</li>
				{/each}
			</ul>
		</Overlay>
	</section>
</div>
