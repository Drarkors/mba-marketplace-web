/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'orange-base': '#F24D0D',
      'orange-dark': '#C43C08',
      'blue-light': '#D7EFF9',
      'blue-base': '#5EC5FD',
      'blue-dark': '#009CF0',
      white: '#FFFFFF',
      background: '#FBF4F4',
      shape: '#F5EAEA',
      'gray-100': '#ADADAD',
      'gray-200': '#949494',
      'gray-300': '#666666',
      'gray-400': '#3D3D3D',
      'gray-500': '#1D1D1D',
      danger: '#DC3545',
      success: '#28A745',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'Inter', 'sans-serif'],
      },
      lineHeight: 1.2,
      fontSize: {
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
      },
      borderWidth: {
        1: '1px',
      },
      backgroundImage: {
        bg: "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
}
