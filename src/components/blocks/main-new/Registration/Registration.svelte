<script>
	import './scss/registration.scss';
	import './scss/form-glow.scss';
	import Form from './Form.svelte';
	export let content;
	const { title, caption, labels, terms, social_signin, button } = content;
</script>

<div class="registration-wrap section-padding" id="registration">
	<section class="registration">
		<div class="form-wrap">
			<h2>{title}</h2>
			<h5>{caption}</h5>

			<Form {button} {labels} {terms} {social_signin} />
		</div>
	</section>
</div>
