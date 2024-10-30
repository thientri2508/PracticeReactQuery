module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
		boxShadow: {
			'custom-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
			'custom-shadow-inp': '0 0 6px 1px rgba(225, 100, 100, 0.923)',
		},
		screens: {
		'mini': '350px',
		'tb': '800px',
		'tb1': '880px',
        'xl': '1290px',
      	},
		}
	},
	plugins: []
}