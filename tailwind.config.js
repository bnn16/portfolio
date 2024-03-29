/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      deep: '#252422',
      accent: '#FFFCF2',
      'accent-light': '#CCC5B9',
      flame: '#EB5E28',
      'flame-dark': '#C8491E',
      'background-light': '#403D39',
      'background-dark': '#2D2B27',
      get: '#00FF00',
      post: '#f7b32b',
      put: '#e1e11e',
      delete: '#df202f',
      patch: '#e1e11e',
      grey: '#c5c5c5',
    },
    extend: {},
  },
  plugins: [],
};
