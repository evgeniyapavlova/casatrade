<script>
	import Overlay from '../../../common/Overlay/Overlay.svelte';
	import './scss/find.scss';
	import FindListItem from './FindListItem.svelte';
	import illustration1 from './img/illustration1.png';
	import illustration2 from './img/illustration2.png';
	import illustration3 from './img/illustration3.png';

	export let content;
	const { title, items } = content;

	const illustrations = [illustration1, illustration2, illustration3];
</script>

<div class="find-wrap">
	<section class="find">
		<h2>{title}</h2>
		<Overlay>
			<!-- <div class="list-wrap full-w-xxs"> -->
			<ul class="list">
				{#each items as { title, caption }, index}
					<FindListItem illustration={illustrations[index]} {caption} {title} />
				{/each}
			</ul>
		</Overlay>
		<!-- </div> -->
	</section>
</div>
