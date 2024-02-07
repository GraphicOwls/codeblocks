/** @format */

import { Crumb } from '@/app/_components/crumb-block'

export const Snippets = [
	{
		id: 1,
		name: 'Custom Accordion',
		image: '',
		description: '',
		fragments: [
			{
				id: 1,
				name: '</body>',
				language: 'html',
				codeString: `
<!-- CODECRUMBS ACCORDION -->
<script src="https://cdn.jsdelivr.net/gh/CodeCrumbsApp/accordion@latest/index.min.js"></script>
<script>
	window.CodeCrumbs.Accordion({
		oneOpen: true,
		speed: 600,
		easing: 'cubic-bezier(0.55, 0, 0.1, 1)',
		repositionOpenItem: false,
		repositionDistance: 300,
		repositionDelay: 300,
		classNames: {
			accordion: 'cc-accordion',
			item: 'cc-accordion-item',
			head: 'cc-accordion-header',
			body: 'cc-accordion-body',
			icon: 'cc-accordion-icon',
		},
	})
</script>
				`,
			},
			{
				id: 2,
				name: 'Proxy',
				language: 'html',
				codeString: `
<!-- CODECRUMBS PROXY -->
<script>
  !function(e,t){e[t]=new Proxy(e[t]||{},{get:(e,o)=>new Proxy(e[o]||function(){},{apply:(n,r,a)=>{const c=()=>e[o](...a);"complete"===document.readyState?c():document.addEventListener("readystatechange",(n=>{"complete"===n.target.readyState&&(e?.[o]?c():console.error(\`\${t}.\${o} is not a function. Did it load correctly from the CDN? If not, did you use the correct name.\`))}))}})})}(globalThis,"CodeCrumbs");
</script>
				`,
			},
		],
	},
	{
		id: 2,
		name: 'Custom Quantity Buttons',
		fragments: [
			{
				id: 1,
				name: '<head>',
				language: 'html',
				codeString: `
<!-- CUSTOM QUANTITY BUTTONS -->
<style>
	/* remove form styles & set margin at 0 */
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

input[type="number"] {
	-moz-appearance: textfield;
}
</style>
				`,
			},
			{
				id: 2,
				name: '</body>',
				language: 'html',
				codeString: `
<!-- CUSTOM QUANTITY BUTTONS --> 
<script src="https://cdn.jsdelivr.net/gh/CodeCrumbsApp/quantity-buttons@v0.1.4/index.min.js"></script>  
				
<script>
	window.CodeCrumbs.QuantityButtons({
		quantityGroupClass: 'q-group',
		quantityIncrementButtonClass: 'q-inc',
		quantityDecrementButtonClass: 'q-dec',
		quantityNumberFieldClass: 'q-num',
		disableDecrementAtOne: true,
	})
</script>
				`,
			},
			{
				id: 3,
				name: 'Proxy',
				language: 'html',
				codeString: `
<!-- CODECRUMBS PROXY -->
<script>
	!function(e,t){e[t]=new Proxy(e[t]||{},{get:(e,o)=>new Proxy(e[o]||function(){},{apply:(n,r,a)=>{const c=()=>e[o](...a);"complete"===document.readyState?c():document.addEventListener("readystatechange",(n=>{"complete"===n.target.readyState&&(e?.[o]?c():console.error(\`\${t}.\${o} is not a function. Did it load correctly from the CDN? If not, did you use the correct name.\`))}))}})})}(globalThis,"CodeCrumbs");
</script>
				`,
			},
		],
	},
] as unknown as Crumb[]
