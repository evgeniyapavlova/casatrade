<script>
	export let isNext;
</script>

<button class="button button-secondary button-icon">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="36"
		height="36"
		viewBox="0 0 36 36"
		fill="none"
		style={isNext && 'transform: rotate(180deg);'}
	>
		<g clip-path="url(#clip0_8002_1020)">
			<path
				d="M30.375 18H5.625"
				stroke="#F0F3F8"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M15.75 7.875L5.625 18L15.75 28.125"
				stroke="#F0F3F8"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_8002_1020">
				<rect width="36" height="36" fill="white" transform="matrix(-1 0 0 1 36 0)" />
			</clipPath>
		</defs>
	</svg>
</button>
