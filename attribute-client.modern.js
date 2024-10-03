function e() {
	return (
		(e =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = arguments[t];
					for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
				}
				return e;
			}),
		e.apply(this, arguments)
	);
}
function t(e = []) {
	return e
		.map((e) =>
			(function (e) {
				const t = document.cookie.match('(?:^|;) ?' + e + '=([^;]*)(?:;|$)');
				return t ? t[1] : null;
			})(e)
		)
		.every((e) => null !== e);
}
console.log('attribute-client v0.4'),
	(() => {
		var a;
		const r = [
				'aff',
				'afftrack',
				'aff_model',
				'retrack',
				'clickid',
				'fbclid',
				'gclid',
				'gbraid',
				'wbraid',
				'ttclid',
				'fingerprint',
				'utm_source',
				'utm_medium',
				'utm_campaign',
				'utm_network',
				'utm_placement',
				'utm_ad_position',
				'utm_creative',
				'utm_match_type',
				'utm_keyword',
				'utm_device',
				'utm_device_model',
				'utm_adwords_product_target_id',
				'utm_content',
				'utm_term'
			],
			n = 'https://casatrade.com/lp/attribute',
			o = ((null == (a = document.currentScript) ? void 0 : a.getAttribute('data-cookie')) || '')
				.split(',')
				.map((e) => e.trim())
				.filter((e) => '' !== e);
		function i(e) {
			const t = e.match('^(?:(?:http(?:s)?)?://)?([a-z0-9-]+(?:[.][a-z0-9-]+)+)');
			return t ? 'https://casatrade.com//lp/attribute' : '';
		}
		function c(e) {
			return new Promise((t) => setTimeout(t, e));
		}
		const d = {
			createTouch: async (e = {}) =>
				fetch('https://casatrade.com/lp/attribute/api/v2/touch', {
					method: 'POST',
					credentials: 'include',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(e)
				})
					.then((e) =>
						e.ok
							? e.json()
							: e.json().then((e) => {
									throw new Error(e.error);
								})
					)
					.catch((e) => (console.error(e), {})),
			createLead: async (e, t = null) =>
				fetch(e + 'https://casatrade.com/api/v2/lead', {
					method: 'POST',
					credentials: 'include',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ lead_id: t })
				})
					.then((e) =>
						e.ok
							? e.json()
							: e.json().then((e) => {
									throw new Error(e.error);
								})
					)
					.catch((e) => (console.error(e), {})),
			getLead: async (e) =>
				fetch(e + 'https://casatrade.com/api/v2/lead', { method: 'GET', credentials: 'include' })
					.then((e) =>
						e.ok
							? e.json()
							: e.json().then((e) => {
									throw new Error(e.error);
								})
					)
					.catch((e) => (console.error(e), {})),
			getAdDomains: async () =>
				fetch('https://casatrade.com/lp/attribute/api/v2/domain', {
					method: 'GET',
					credentials: 'include'
				})
					.then((e) =>
						e.ok
							? e.json()
							: e.json().then((e) => {
									throw new Error(e.error);
								})
					)
					.catch((e) => (console.error(e), {})),
			findLead: async (e) =>
				Promise.any(
					e.map(async (e) => {
						const t = await d.getLead(e);
						return t.lead_id ? Promise.resolve(t) : Promise.reject('no lead');
					})
				).catch(() => ({}))
		};
		(async () => {
			let a = await d.getLead(n);
			a.lead_id
				? await d.createLead(n, a.lead_id)
				: await (async function () {
						const e = await d.getAdDomains(),
							t = (e.platform_domains || []).map((e) => i(e)),
							a = (e.ad_campaign_domains || []).map((e) => i(e));
						let r = await d.findLead(t);
						if (r.lead_id) await d.createLead(n, r.lead_id);
						else if (((r = await d.findLead(a)), r.lead_id)) {
							await d.createLead(n, r.lead_id);
							for (const e of t) await d.createLead(e, r.lead_id);
						} else {
							r = await d.createLead(n);
							for (const e of t) await d.createLead(e, r.lead_id);
						}
					})(),
				await (async function () {
					if (o.length > 0) {
						const e = 8;
						for (let a = 1; a <= e && !t(o); a++) await c(500);
					}
				})(),
				d
					.createTouch(
						(function () {
							const e = new URLSearchParams(window.location.search),
								t = Object.fromEntries(Array.from(e.entries()).filter(([e, t]) => r.includes(e)));
							return '' != document.referrer && (t.referrer = document.referrer), t;
						})()
					)
					.then((t) => (window.attribute = e({}, window.attribute, { touch_id: t.touch_id })))
					.catch((e) => console.error('Error: ', e));
		})();
	})();
