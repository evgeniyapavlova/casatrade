<script>
	import iosImg from './img/ios_xl.webp';
	import Overlay from '$common/Overlay/Overlay.svelte';

	import './scss/enter.scss';
	import './scss/enter-list-item.scss';
	export let content;
	import LazyImg from '$common/LazyImg.svelte';
	const { title, steps, items } = content;
</script>

<div class="enter-wrap section-padding" id="enter">
	<section class="enter">
		<h2>{title}</h2>
		<div class="content-top-wrap">
			<div class="content">
				<ol class="list list-steps h3">
					{#each steps as { title, caption }}
						<div class="li-bgr">
							<li>
								<h3><span>{title}</span></h3>
								<div class="text-l">{caption}</div>
							</li>
						</div>
					{/each}
				</ol>
			</div>
			<div class="ios-image">
				<LazyImg src={iosImg} alt="iOS illustration" />
			</div>
		</div>
		<Overlay>
			<ul class="list list-items">
				{#each items as { title, caption }}
					<li>
						<div class="shadow"></div>
						<h4>{title}</h4>
						<div class="text-m">{caption}</div>
					</li>
				{/each}
			</ul></Overlay
		>
	</section>
</div>
