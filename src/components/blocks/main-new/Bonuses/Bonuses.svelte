<script>
	import { base } from '$app/paths';
	import Overlay from '$common/Overlay/Overlay.svelte';

	import './scss/bonuses.scss';
	export let content;

	const { title, items, button, button_caption } = content;
</script>

<div class="bonuses-wrap bgr-shadow-wrap">
	<section class="bonuses section-padding" id="bonuses">
		<div class="content-inner">
			<h2>
				{title}
			</h2>

			<Overlay>
				<ul class="list">
					{#each items as { title, caption }, index}
						<li>
							<div class="shadow"></div>
							<div class="content">
								<h4>{title}</h4>
								<div class="text-m">{caption}</div>
							</div>
							<div class="illustration">
								<img
									src="{base}/images/bonuses/img{index + 1}/illustration{index + 1}_XL.webp"
									srcset="{base}/images/bonuses/img{index + 1}/illustration{index +
										1}_XS.webp 493w, {base}/images/bonuses/img{index + 1}/illustration{index +
										1}_S.webp 540w, {base}/images/bonuses/img{index + 1}/illustration{index +
										1}_M.webp 622w, {base}/images/bonuses/img{index + 1}/illustration{index +
										1}_L.webp 707w, {base}/images/bonuses/img{index + 1}/illustration{index +
										1}_XL.webp 855w"
									sizes="(max-width: 767px) 540px,          (max-width: 991px) 493px, (max-width: 1279px) 540px, (max-width: 1439px) 622px, (max-width: 1919px) 707px, 855px"
									alt="Bonuses illustration {index + 1}"
								/>
							</div>
						</li>
					{/each}
				</ul>
			</Overlay>

			<button class="button button-large button-primary">{button}</button>
			<div class="text-m">{button_caption}</div>
		</div>
	</section>
</div>
