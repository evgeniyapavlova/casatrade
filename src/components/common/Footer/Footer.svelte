<script>
	import { base } from '$app/paths';
	import Inst from './img/Inst.svelte';
	import Fb from './img/FB.svelte';
	import Tg from './img/TG.svelte';
	import LogoOneColor from '../LogoOneColor.svelte';

	import './scss/footer.scss';

	const socials = [
		{ img: Inst, link: 'https://www.instagram.com/casatradept' },
		{ img: Fb, link: 'https://www.facebook.com/profile.php?id=61565740520207&is_tour_dismissed' },

		{ img: Tg, link: 'https://t.me/casatrade_pt' }
	];

	export let content;

	const { info1, info2, warning, links } = content;
</script>

<footer class="bgr-shadow-wrap">
	<section class="text-xs">
		<div class="footer-top">
			<div class="logo-wrap">
				<LogoOneColor />
			</div>
			<div class="social-links footer-indent">
				{#each socials as { img, link }}
					<a href={link} class="social-link">
						<svelte:component this={img} />
					</a>
				{/each}
			</div>
		</div>
		<div class="footer-middle footer-indent">
			<div class="footer-middle-left">{@html info1}</div>
			<div class="footer-middle-right">{@html info2}</div>
			<div class="footer-middle-warning">
				{@html warning}
			</div>
		</div>
		<div class="footer-bottom">
			<div class="terms-links footer-indent">
				{#each links as link}
					<a href="{base}/">{link}</a>
				{/each}
			</div>
		</div>
	</section>
</footer>
