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
      1: '1',
      2: '2',
      infinite: 'infinite',
    },
    animationTiming: {
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
      'step-start': 'step-start',
      'step-end': 'step-end',
      'ease-in-quad': 'cubic-bezier(.55,.085,.68,.53)',
      'ease-in-cubic': 'cubic-bezier(.55,.055,.675,.19)',
      'ease-in-quart': 'cubic-bezier(.895,.03,.685,.22)',
      'ease-in-quint': 'cubic-bezier(.755,.05,.855,.06)',
      'ease-in-sine': 'cubic-bezier(.47,0.000,.745,.715)',
      'ease-in-expo': 'cubic-bezier(.95,.05,.795,.035)',
      'ease-in-circ': 'cubic-bezier(.6,.04,.98,.335)',
      'ease-in-back': 'cubic-bezier(.6,-.28,.735,.045)',
      'ease-out-quad': 'cubic-bezier(.25,.46,.45,.94)',
      'ease-out-cubic': 'cubic-bezier(.215,.61,.355,1.000)',
      'ease-out-quart': 'cubic-bezier(.165,.84,.44,1.000)',
      'ease-out-quint': 'cubic-bezier(.23,1.000,.32,1.000)',
      'ease-out-sine': 'cubic-bezier(.39,.575,.565,1.000)',
      'ease-out-expo': 'cubic-bezier(.19,1.000,.22,1.000)',
      'ease-out-circ': 'cubic-bezier(.075,.82,.165,1.000)',
      'ease-out-back': 'cubic-bezier(.175,.885,.32,1.275)',
      'ease-in-out-quad': 'cubic-bezier(.455,.03,.515,.955)',
      'ease-in-out-cubic': 'cubic-bezier(.645,.045,.355,1.000)',
      'ease-in-out-quart': 'cubic-bezier(.77,0.000,.175,1.000)',
      'ease-in-out-quint': 'cubic-bezier(.86,0.000,.07,1.000)',
      'ease-in-out-sine': 'cubic-bezier(.445,.05,.55,.95)',
      'ease-in-out-expo': 'cubic-bezier(1.000,0.000,0.000,1.000)',
      'ease-in-out-circ': 'cubic-bezier(.785,.135,.15,.86)',
      'ease-in-out-back': 'cubic-bezier(.68,-.55,.265,1.55)',
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
};

const definePlugin = function({ matchUtilities, theme }) {
  const addCollection = function(themeProperty, classPrefixShort, classPrefix, cssProperty) {
    matchUtilities({
      [classPrefix]: (value) => ({ [cssProperty]: value }),
      [classPrefixShort]: (value) => ({ [cssProperty]: value })
    }, {
      values: theme(themeProperty)
    });
  };

  addCollection('animationDelay', 'animation-delay', 'animation-delay', 'animation-delay');
  addCollection('animationDuration', 'animation-duration', 'animation-duration', 'animation-duration');
  addCollection('animationIteration', 'iterate', 'animation-iteration', 'animation-iteration-count');
  addCollection('animationTiming', 'timing', 'animation-timing', 'animation-timing-function');
  addCollection('animationDirection', 'direction', 'animation-direction', 'animation-direction');
  addCollection('animationFillMode', 'fillmode', 'animation-fill', 'animation-fill-mode');
  addCollection('animationPlayState', 'playstate', 'animation-state', 'animation-play-state');
};

module.exports = plugin(definePlugin, config);
