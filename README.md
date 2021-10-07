# tailwindcss-animation

TailwindCSS plugin with varous animation utilities.

## Install

```shell
npm install tailwindcss-animation
yarn add tailwindcss-animation
```

## Configuration

tailwind.config.js
```js
{
    theme: {
        extend: {
            animationDelay: {
                2000: '2000ms',
            },
            animationDuration: {
                2000: '2000ms',
            },
            animationIteration: {
                '10x': '10',
            },
            animationTiming: {
                cubic: 'cubic-bezier(0, 0, 0.2, 1)',
            },
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
    plugins: [
        require('tailwindcss-animation'),
    ],
}
```

## Usage

## Animation delay

| Class                | Properties               |
| -------------------- | ------------------------ |
| animation-delay-none | animation-delay: 0ms;    |
| animation-delay-100  | animation-delay: 100ms;  |
| animation-delay-200  | animation-delay: 200ms;  |
| animation-delay-300  | animation-delay: 300ms;  |
| animation-delay-400  | animation-delay: 400ms;  |
| animation-delay-500  | animation-delay: 500ms;  |
| animation-delay-600  | animation-delay: 600ms;  |
| animation-delay-700  | animation-delay: 700ms;  |
| animation-delay-800  | animation-delay: 800ms;  |
| animation-delay-900  | animation-delay: 900ms;  |
| animation-delay-100  | animation-delay: 1000ms; |

## Animation duration

| Class                   | Properties                  |
| ----------------------- | --------------------------- |
| animation-duration-none | animation-duration: 0ms;    |
| animation-duration-100  | animation-duration: 100ms;  |
| animation-duration-200  | animation-duration: 200ms;  |
| animation-duration-300  | animation-duration: 300ms;  |
| animation-duration-400  | animation-duration: 400ms;  |
| animation-duration-500  | animation-duration: 500ms;  |
| animation-duration-600  | animation-duration: 600ms;  |
| animation-duration-700  | animation-duration: 700ms;  |
| animation-duration-800  | animation-duration: 800ms;  |
| animation-duration-900  | animation-duration: 900ms;  |
| animation-duration-100  | animation-duration: 1000ms; |

## Animation iteration

| Class                        | Properties                           |
| ---------------------------- | ------------------------------------ |
| animation-iteration-none     | animation-iteration-count: 0;        |
| animation-iteration-1x       | animation-iteration-count: 1;        |
| animation-iteration-2x       | animation-iteration-count: 2;        |
| animation-iteration-infinite | animation-iteration-count: infinite; |

## Animation timing

| Class                        | Properties                              |
| ---------------------------- | --------------------------------------- |
| animation-timing-ease        | animation-timing-function: ease;        |
| animation-timing-ease-in     | animation-timing-function: ease-in;     |
| animation-timing-ease-out    | animation-timing-function: ease-out;    |
| animation-timing-ease-in-out | animation-timing-function: ease-in-out; |

## Animation direction

| Class                                 | Properties                              |
| ------------------------------------- | --------------------------------------- |
| animation-direction-normal            | animation-direction: normal;            |
| animation-direction-reverse           | animation-direction: reverse;           |
| animation-direction-alternate         | animation-direction: alternate;         |
| animation-direction-alternate-reverse | animation-direction: alternate-reverse; |

## Animation fill mode

| Class                    | Properties                      |
| ------------------------ | ------------------------------- |
| animation-fill-none      | animation-fill-mode: none;      |
| animation-fill-forwards  | animation-fill-mode: forwards;  |
| animation-fill-backwards | animation-fill-mode: backwards; |
| animation-fill-both      | animation-fill-mode: both;      |

## Animation play state

| Class                    | Properties                     |
| ------------------------ | ------------------------------ |
| animation-state-paused   | animation-play-state: paused;  |
| animation-state-running  | animation-play-state: running; |
