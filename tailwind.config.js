module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,svg}'
  ],
  plugins: [],
  darkMode: 'media',
  theme: {
    colors: {
      white: '#fff',
      gray: {
        100: '#e5e5e5',
        200: '#cccccc',
        300: '#999',
        400: '#777',
        500: '#666',
        600: '#555',
        700: '#444',
        800: '#333',
        900: '#222',
        1000: '#111'
      },
      brown: {
        100: '#DDD5CB',
        300: '#C6B8A7',
        500: '#8D704F',
      },
      orange: '#8D704F',
      red: '#DD385F',
      green: '#66AC52'
    },
    extend: {
      colors: {
        'blue-primary': 'var(--blue-primary)',
        'blue-lighter-1': 'var(--blue-lighter-1)',
        'blue-lighter-2': 'var(--blue-lighter-2)',
        'blue-lighter-3': 'var(--blue-lighter-3)',
        'blue-lighter-4': 'var(--blue-lighter-4)',
        'blue-lighter-5': 'var(--blue-lighter-5)',
        'blue-lighter-6': 'var(--blue-lighter-6)',
        'blue-lighter-7': 'var(--blue-lighter-7)',
        'blue-lighter-8': 'var(--blue-lighter-8)',
        'blue-lighter-9': 'var(--blue-lighter-9)',
        'blue-lighter-10': 'var(--blue-lighter-10)',

        'green-primary': 'var(--green-primary)',
        'green-lighter-1': 'var(--green-lighter-1)',

        'golden-primary': 'var(--golden-primary)',
        'golden-darken-1': 'var(--golden-darken-1)',

        'red-primary': 'var(--red-primary)',
        'red-darken-1': 'var(--red-darken-1)',
      },
      spacing: {
        112: '28rem',
        144: '36rem'
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'input-range': '272px'
      },
      width: {
        102: '30rem',
        key: '72px',
        'login-img': '233px',
        input: '480px',
        'form-button': '480px',
        'right-panel': '120px',
        'right-panel-btn': '72px',
        'min-key': '30px'
      },
      height: {
        'login-img': '301px',
        'form-button': '72px'
      },
      fontSize: {
        form: ['24px', {
          lineHeight: '16px',
        }],
      },
      letterSpacing: {
        DEFAULT: '0.4px',
      },
      borderRadius: {
        DEFAULT: '10px',
        form: '8px'
      },
      margin: {
        '25px': '25px',
        '70px': '70px',
        '16px': '16px',
        '24px': '24px'
      },
      padding: {
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '24px': '24px',
        '154px': '154px'
      },
      maxWidth: {
        'login-logo': '800px',
        'login-logo-adapt': '400px',
        'login-logo-query': '1800px'
      },
      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      zIndex: {
        '-10': '-10'
      },
      rotate: {
        135: '135deg'
      },
      gridColumnEnd: {
        '-1': '-1'
      },
      boxShadow: {
        key: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'login-logo': '4px 0px 4px rgba(0, 0, 0, 0.25)',
        'form-button': '0px 2px 4px rgba(0, 0, 0, 0.5)',
        'form-input': 'inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(0, 0, 0, 0.25)'
      },
      top: {
        'form-input': '30%'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      visibility: ['group-hover'],
      display: ['group-hover'],
      saturate: ['hover'],
      brightness: ['hover']
    }
  }
}