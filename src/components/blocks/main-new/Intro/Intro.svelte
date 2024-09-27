<script>
	import { onMount } from 'svelte';
	// import { gsap } from 'gsap';
	// import ScrollTrigger from 'gsap/ScrollTrigger';

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import img1 from './img/bgr-images/1.png';
	import img2 from './img/bgr-images/2.png';
	import img3 from './img/bgr-images/3.png';
	import img4 from './img/bgr-images/4.png';
	import img5 from './img/bgr-images/5.png';
	import img6 from './img/bgr-images/6.png';
	import img7 from './img/bgr-images/7.png';

	import { reg_link } from '$lib/stores/reg_link';
	import IntroQuotes from './IntroQuotes.svelte';
	import './scss/intro.scss';
	import './scss/bgr-images.scss';

	const bgrImages = [img1, img2, img3, img4, img5, img6, img7];
	export let content;
	const { h1, h1_caption, button_start, button_trade } = content;

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		gsap.to('h1', {
			y: -150,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: 'h1',
				start: 'top 150px',
				end: 'bottom 10px',
				scrub: true
			}
		});

		gsap.to('.intro-bgr-image', {
			y: -800,
			opacity: 0,
			duration: 1,
			stagger: 0.1,
			scrollTrigger: {
				trigger: '#intro-buttons-wrap',
				start: 'top 500px',
				scrub: true
				// markers: true
			}
		});
	});
</script>

<section class="intro">
	<div class="intro-bgr-images-wrap">
		{#each bgrImages as bgrImage, index}
			<img src={bgrImage} alt="" class="intro-bgr-image intro-bgr-image-{index + 1}" />
		{/each}
	</div>
	<h1>{@html h1}</h1>
	<div class="text-l">{@html h1_caption}</div>
	<div class="buttons-wrap" id="intro-buttons-wrap">
		<a href={$reg_link} class="button button-large button-secondary">{button_trade}</a>
		<a href={$reg_link} class="button button-large button-primary">{button_start}</a>
	</div>
	<IntroQuotes />
</section>
