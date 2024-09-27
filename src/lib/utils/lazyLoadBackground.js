export const lazyLoadBackground = () => {
	const setBackgroundImage = (element) => {
		const bgImage = element.getAttribute('data-bgimage');
		if (bgImage) {
			element.style.backgroundImage = `url(${bgImage})`;
		}
	};

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setBackgroundImage(entry.target);
					observer.unobserve(entry.target);
				}
			});
		},
		{
			root: null,
			rootMargin: '992px 0px 0px 0px',
			threshold: 0
		}
	);

	const observeElements = () => {
		const elements = document.querySelectorAll('.has-bgr');
		elements.forEach((element) => {
			if (!element.style.backgroundImage) {
				observer.observe(element);
			}
		});
	};

	const mutationObserver = new MutationObserver(() => {
		observeElements();
	});

	mutationObserver.observe(document.body, {
		childList: true,
		subtree: true
	});

	observeElements();
};
