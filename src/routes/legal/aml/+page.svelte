<script>
	import meta_img from '$lib/images/meta__img.jpg';
	const title = 'Casatrade - online trading platform for beginners';
	const desc = 'Online trading platform for beginners. Trade online—Stocks and Cryptocurrency';
	import Legal from '../../../components/common/Legal/Legal.svelte';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta_img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta_img} />
</svelte:head>

<Legal index={0} />
