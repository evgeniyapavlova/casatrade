<script>
	import { device, isDesktop } from '$lib/stores/isDesktop';
	import './scss/trade.scss';
	import './scss/platform.scss';
	import GooglePlayBtn from './img/GooglePlayBtn.svelte';
	import AppStoreBtn from './img/AppStoreBtn.svelte';

	import bgr from './img/desktop.webp';
	import ios from './img/ios.webp';
	import android from './img/android.webp';
	import LazyImg from '$common/LazyImg.svelte';

	export let content;
	const { title, buttons } = content;
</script>

<div class="trade-wrap bgr-shadow-wrap">
	<section class="trade section-padding" id="trade">
		<h2>{title}</h2>
		<div class="platform-img-container">
			<div class="platform-img-desktop">
				<LazyImg alt="Platform Desktop" src={bgr} />
			</div>
			<div class="platform-img platform-img-ios" class:content-hidden={$device === 'android'}>
				<LazyImg alt="Platform iOS" src={ios} />
			</div>
			<div class="platform-img platform-img-android" class:content-hidden={$device === 'ios'}>
				<LazyImg alt="Platform Android" src={android} />
			</div>
		</div>

		<div class="trade-content">
			<div class="buttons-wrap buttons-wrap-apps">
				{#each buttons as button, index}
					<div
						class="button button-large button-secondary"
						class:content-hidden={!$isDesktop && index === 0}
					>
						{button}
					</div>
				{/each}
			</div>

			<div class="buttons-blocks-divider"></div>

			<div class="buttons-wrap buttons-wrap-mobile-apps">
				<button class:content-hidden={$device === 'android'}> <AppStoreBtn /></button>
				<button class:content-hidden={$device === 'ios'}> <GooglePlayBtn /></button>
			</div>
		</div>
	</section>
</div>
