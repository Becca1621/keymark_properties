
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				luxury: {
					gold: '#D4AF37',
					charcoal: '#333333',
					cream: '#F5F5F0',
					light: '#F9F9F7',
					dark: '#1A1A1A',
					green: '#8FBC8F',  // Original light green color
					lime: '#C1E1C1',   // Added light lime green color
					gray: '#8E9196',   // Gray accent color
					softgray: '#F1F0FB', // Added soft gray for subtle backgrounds
					darkgray: '#444444', // Darker gray for ombre effect
					mediumgray: '#666666', // Medium gray for gradients
					neutral: {
						100: '#F9F9F7', // Softest white
						200: '#F5F5F0', // Cream
						300: '#E6E6E0', // Light cream
						400: '#C8C8C9', // Light gray
						500: '#8E9196', // Medium gray
						600: '#666666', // Dark gray
						700: '#444444', // Charcoal gray
						800: '#333333', // Dark charcoal
						900: '#1A1A1A', // Near black
					}
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				serif: ['Playfair Display', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
			},
			boxShadow: {
				'elegant': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
			},
			backgroundImage: {
				'ombre-dark-green': 'linear-gradient(135deg, #333333 0%, #8FBC8F 100%)',
				'ombre-green-dark': 'linear-gradient(135deg, #8FBC8F 0%, #333333 100%)',
				'ombre-gray-green': 'linear-gradient(135deg, #444444 0%, #C1E1C1 100%)',
				'ombre-green-gray': 'linear-gradient(135deg, #C1E1C1 0%, #444444 100%)',
				'ombre-charcoal-cream': 'linear-gradient(135deg, #333333 0%, #F5F5F0 100%)',
				'ombre-cream-charcoal': 'linear-gradient(135deg, #F5F5F0 0%, #333333 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
