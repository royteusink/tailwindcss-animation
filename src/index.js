const plugin = require('tailwindcss/plugin');

const config = {
  theme: {
    animationDelay: {
      none: '0ms',
      100: '100ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      800: '800ms',
      900: '900ms',
      1000: '1000ms',
    },
    animationDuration: {
      none: '0ms',
      100: '100ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      800: '800ms',
      900: '900ms',
      1000: '1000ms',
    },
    animationIteration: {
      none: '0',
      '1x': '1',
      '2x': '2',
      infinite: 'infinite',
    },
    animationTiming: {
      ease: 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    animationDirection: {
      normal: 'normal',
      reverse: 'reverse',
      alternate: 'alternate',
      'alternate-reverse': 'alternate-reverse',
    },
    animationFillMode: {
      none: 'none',
      forwards: 'forwards',
      backwards: 'backwards',
      both: 'both',
    },
    animationPlayState: {
      paused: 'paused',
      running: 'running',
    },
  },
  variants: {
    animationDelay: ['responsive'],
    animationDuration: ['responsive'],
    animationIteration: ['responsive'],
    animationTiming: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive'],
  },
};

const definePlugin = function({ addUtilities, theme, variants, e }) {

  const addCollection = function(themeProperty, classPrefix, cssProperty) {
    const collection = Object.entries(theme(themeProperty)).map(([key, value]) => {
      return {
        [`.${e(`${classPrefix}-${key}`)}`]: {
          [cssProperty]: `${value}`,
        },
      };
    });
    addUtilities(collection, variants(themeProperty));
  };

  addCollection('animationDelay', 'animation-delay', 'animation-delay');
  addCollection('animationDuration', 'animation-duration', 'animation-duration');
  addCollection('animationIteration', 'animation-iteration', 'animation-iteration-count');
  addCollection('animationTiming', 'animation-timing', 'animation-timing-function');
  addCollection('animationDirection', 'animation-direction', 'animation-direction');
  addCollection('animationFillMode', 'animation-fill', 'animation-fill-mode');
  addCollection('animationPlayState', 'animation-state', 'animation-play-state');
};

module.exports = plugin(definePlugin, config);
