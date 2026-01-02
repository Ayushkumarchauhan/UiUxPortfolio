// /** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

// module.exports = {
// 	// content: ["./src/**/*.{html,js,php}"],
// 	content: [
// 		"./src/**/*.{html,js,php}",
// 		"./build/**/*.{html,js,php}",
// 		"./dist/**/*.{html,js,php}"
// 	],
// 	darkMode: "class",
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: "1.5rem",
// 		},
// 		extend: {
// 			screens: {
// 				"2xl": "1320px",
// 			},
// 			fontFamily: {
// 				sans: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
// 			},
// 			colors: {
// 				primary: "#FFD742",    // Brand Yellow
// 				secondary: "#4F46E5",  // indigo
// 				accent: "#E11D48",     // red/pink
// 				success: "#22C55E",    // green
// 				warning: "#FACC15",    // yellow
// 				dark: "#1A1F2C",
// 				"dark-2": "#0E1018",
// 				light: "#F0F2F5",
// 				muted: "#576076",
// 			},
// 			aspectRatio: {
// 				"6/4": "6 / 4",
// 			},

// 			animation: {
// 				"infinite-scroll": "scroll 10s linear infinite",
// 				"scrollY": "scrollY 10s linear infinite",
// 				'spin-slow': 'spin 10s linear infinite',
// 				'spin-very-slow': 'spin 90s linear infinite',
// 			},

// 			keyframes: {
// 				scroll: {
// 					from: { transform: "translateX(0)" },
// 					to: { transform: "translateX(calc(-100% - 1.5rem))" },
// 				},
// 				scrollY: {
// 					from: { transform: "translateY(0)" },
// 					to: { transform: "translateY(calc(-100% - 1rem))" },
// 				},
// 			},
// 		},
// 	},
// 	plugins: [require("preline/plugin"), require("@tailwindcss/typography")],
// };


// tailwind.config.js (UPDATED)


/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/**/*.{html,js,php}",
        "./build/**/*.{html,js,php}",
        "./dist/**/*.{html,js,php}"
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
        },
        extend: {
            screens: {
                "2xl": "1320px",
            },
            fontFamily: {
                sans: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#FFD742",    // Brand Yellow
                secondary: "#4F46E5",  // indigo
                accent: "#E11D48",     // red/pink
                success: "#22C55E",    // green
                warning: "#FACC15",    // yellow
                dark: "#1A1F2C",
                "dark-2": "#0E1018",
                light: "#F0F2F5",
                muted: "#576076",
            },
            aspectRatio: {
                "6/4": "6 / 4",
            },
            animation: {
                "infinite-scroll": "scroll 10s linear infinite",
                "scrollY": "scrollY 10s linear infinite",
                'spin-slow': 'spin 10s linear infinite',
                'spin-very-slow': 'spin 90s linear infinite',
                'wave': 'wave 2.5s infinite',  // Wave animation for hand
            },
            keyframes: {
                scroll: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - 1.5rem))" },
                },
                scrollY: {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - 1rem))" },
                },
                wave: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '10%, 30%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10deg)' },
                },
            },
        },
    },
    plugins: [
        require("preline/plugin"), 
        require("@tailwindcss/typography"),
        
        // Custom Button Components
        function({ addComponents }) {
            addComponents({
                // ============================================
                // PRIMARY BUTTONS (Yellow with WHITE text)
                // ============================================
                '.btn-primary-lg': {
                    '@apply inline-flex items-center justify-center gap-x-2 rounded-xl border border-transparent bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50': {},
                },
                '.btn-primary': {
                    '@apply inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50': {},
                },
                '.btn-primary-sm': {
                    '@apply inline-flex items-center justify-center gap-1.5 rounded-lg border border-transparent bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-primary/20 transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50': {},
                },
                
                // ============================================
                // SECONDARY BUTTONS (Border with hover effects)
                // ============================================
                '.btn-secondary-lg': {
                    '@apply inline-flex items-center justify-center gap-x-2 rounded-xl border-2 border-light bg-transparent px-6 py-4 text-base font-semibold text-dark transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark-2 dark:text-light/70 dark:hover:border-primary dark:hover:bg-dark dark:hover:text-primary': {},
                },
                '.btn-secondary': {
                    '@apply inline-flex items-center justify-center gap-2 rounded-lg border-2 border-light bg-transparent px-5 py-3 text-sm font-semibold text-dark transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark-2 dark:text-light/70 dark:hover:border-primary dark:hover:bg-dark-2 dark:hover:text-primary': {},
                },
                '.btn-secondary-sm': {
                    '@apply inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-light bg-transparent px-4 py-2 text-xs font-semibold text-dark transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 dark:border-dark-2 dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary': {},
                },
                
                // ============================================
                // TERTIARY BUTTONS (Subtle/Low emphasis)
                // ============================================
                '.btn-tertiary-lg': {
                    '@apply inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-transparent px-6 py-4 text-base font-medium text-muted transition-all duration-300 hover:border-dark hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark-2 dark:text-slate-400 dark:hover:border-light/20 dark:hover:bg-dark-2 dark:hover:text-light': {},
                },
                '.btn-tertiary': {
                    '@apply inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-200 bg-transparent px-5 py-3 text-sm font-medium text-muted transition-all duration-300 hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark-2 dark:text-slate-400 dark:hover:bg-dark-2 dark:hover:text-light': {},
                },
                '.btn-tertiary-sm': {
                    '@apply inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-transparent px-4 py-2 text-xs font-medium text-muted transition-all duration-200 hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 dark:border-dark-2 dark:text-slate-400 dark:hover:bg-dark-2': {},
                },
                
                // ============================================
                // ICON BUTTONS (Social icons - Exact match)
                // ============================================
                '.btn-icon': {
                    '@apply flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-200 bg-transparent text-slate-600 transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-dark-2 dark:bg-dark-2 dark:text-slate-400 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white': {},
                },
                '.btn-icon-sm': {
                    '@apply flex h-9 w-9 items-center justify-center rounded-lg border-2 border-slate-200 bg-transparent text-slate-600 transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:border-dark-2 dark:bg-dark-2 dark:text-slate-400 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white': {},
                },
            })
        }
    ],
};

