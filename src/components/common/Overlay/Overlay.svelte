<script>
	import './overlay.scss';
</script>

<div class="overlay-wrap">
	<div class="overlay overlay-top"></div>
	<div class="list-wrap">
		<slot />
	</div>
	<div class="overlay overlay-bottom"></div>
</div>
