// tailwind config
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // custom colors
      colors: {
        parchment: '#B69E83',
        earth: '#3A261A',
        accent: '#FFD700',
        dark: '#111111',
      },
      // font stacks
      fontFamily: {
        serif: ['"IM Fell English"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        display: ['"Alegreya SC"', 'serif'],
      },
      // background images
      backgroundImage: {
        'fantasy': "url('https://static1.squarespace.com/static/603cb2299959d83fcdc26265/t/650788d1eaae9611a40d9d44/1694992595828/WebsiteBackground.png')",
        'trim-top': "url('https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/88120374-9e84-4dee-a210-31ff34029c13/TrimTop.png')",
        'trim-bottom': "url('https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/55669e01-35f2-4483-8c9c-520ac4edc6e5/TrimBottom.png')",
        'vines': "url('https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/6774a81a-b248-4734-b9cb-6fa7da9e8ae6/WebsiteVines.png')",
      }
    },
  },
  plugins: [],
}
