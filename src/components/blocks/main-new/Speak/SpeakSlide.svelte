<script>
	import ButtonPlay from '$common/Buttons/ButtonPlay.svelte';
	import './scss/speak-slide.scss';
	export let name, role, image;
</script>

<div class="slide-wrap">
	<div class="speak-slide">
		<div class="photo has-bgr" data-bgimage={image}></div>
		<div class="content">
			<div class="content-inner">
				<h4>{name}</h4>
				<div class="text-m">{role}</div>
				<ButtonPlay />
			</div>
		</div>
	</div>
</div>
