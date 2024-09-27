<script>
	export let title, caption, illustration;
</script>

<li>
	<div class="shadow"></div>
	<div class="content">
		<h4>{title}</h4>
		<div class="text-m">{caption}</div>
	</div>
	{#if illustration}
		<div class="illustration">
			<img src={illustration} alt="" />
		</div>
	{/if}
</li>
