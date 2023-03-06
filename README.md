# tailwindcss-animation

TailwindCSS plugin with various animation utilities.

- [animationDelay](#animation-delay)
- [animationDuration](#animation-duration)
- [animationIteration](#animation-iteration-cout)
- [animationTiming](#animation-timing-function)
- [animationDirection](#animation-direction)
- [animationFillMode](#animation-fill-mode)
- [animationPlayState](#animation-play-state)

## Install

```shell
npm install tailwindcss-animation
yarn add tailwindcss-animation
```

## Configuration

tailwind.config.js
```js
{
    plugins: [
        require('tailwindcss-animation'),
    ],
}
```

## Extended configuration

Extending the properties is possible but not required due support for arbitrary values.

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
                10: '10',
            },
            animationTiming: {
                cubic: 'cubic-bezier(0, 0, 0.2, 1)',
            },
        },
    },
}
```

## Usage

```html
<div class="w-10 h-10 bg-blue-500 animate-spin timing-ease-in-out-quint animation-delay-100 animation-duration-200 fillmode-forwards playstate-running direction-alternate lg:animation-duration-[1200ms]"></div>
```

## Animation delay

Long variant: animation-delay-% \
Short variant: n/a

| Class                    | Properties               |
| ------------------------ | ------------------------ |
| animation-delay-none     | animation-delay: 0ms;    |
| animation-delay-100      | animation-delay: 100ms;  |
| animation-delay-200      | animation-delay: 200ms;  |
| animation-delay-300      | animation-delay: 300ms;  |
| animation-delay-400      | animation-delay: 400ms;  |
| animation-delay-500      | animation-delay: 500ms;  |
| animation-delay-600      | animation-delay: 600ms;  |
| animation-delay-700      | animation-delay: 700ms;  |
| animation-delay-800      | animation-delay: 800ms;  |
| animation-delay-900      | animation-delay: 900ms;  |
| animation-delay-1000     | animation-delay: 1000ms; |
| animation-delay-[1500ms] | animation-delay: 1500ms; |
| animation-delay-[2s]     | animation-delay: 2s;     |

## Animation duration

Long variant: animation-duration-% \
Short variant: n/a

| Class                       | Properties                  |
| --------------------------- | --------------------------- |
| animation-duration-none     | animation-duration: 0ms;    |
| animation-duration-100      | animation-duration: 100ms;  |
| animation-duration-200      | animation-duration: 200ms;  |
| animation-duration-300      | animation-duration: 300ms;  |
| animation-duration-400      | animation-duration: 400ms;  |
| animation-duration-500      | animation-duration: 500ms;  |
| animation-duration-600      | animation-duration: 600ms;  |
| animation-duration-700      | animation-duration: 700ms;  |
| animation-duration-800      | animation-duration: 800ms;  |
| animation-duration-900      | animation-duration: 900ms;  |
| animation-duration-1000     | animation-duration: 1000ms; |
| animation-duration-[1500ms] | animation-duration: 1500ms; |
| animation-duration-[2s]     | animation-duration: 2s;     |

## Animation iteration count

Long variant: animation-iteration-% \
Short variant: iterate-%

| Class            | Properties                           |
| ---------------- | ------------------------------------ |
| iterate-none     | animation-iteration-count: 0;        |
| iterate-1        | animation-iteration-count: 1;        |
| iterate-2        | animation-iteration-count: 2;        |
| iterate-[10]     | animation-iteration-count: 10;       |
| iterate-infinite | animation-iteration-count: infinite; |

## Animation timing function

Long variant: animation-timing-% \
Short variant: timing-%

| Class                                | Properties                                                  |
| ------------------------------------ | ----------------------------------------------------------- |
| timing-linear                        | animation-timing-function: linear;                          |
| timing-ease                          | animation-timing-function: ease;                            |
| timing-ease-in                       | animation-timing-function: ease-in;                         |
| timing-ease-out                      | animation-timing-function: ease-out;                        |
| timing-ease-in-out                   | animation-timing-function: ease-in-out;                     |
| timing-step-start                    | animation-timing-function: step-start;                      |
| timing-step-end                      | animation-timing-function: step-end;                        |
| timing-ease-in-out-back              | animation-timing-function: cubic-bezier(.68,-.55,.265,1.55) |
| timing-[cubic-bezier(0.1,0.7,1,0.1)] | animation-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);  |

## Animation direction

Long variant: animation-direction-% \
Short variant: direction-%

| Class                       | Properties                              |
| --------------------------- | --------------------------------------- |
| direction-normal            | animation-direction: normal;            |
| direction-reverse           | animation-direction: reverse;           |
| direction-alternate         | animation-direction: alternate;         |
| direction-alternate-reverse | animation-direction: alternate-reverse; |

## Animation fill mode

Long variant: animation-fill-% \
Short variant: fillmode-%

| Class                     | Properties                           |
| ------------------------- | ------------------------------------ |
| fillmode-none             | animation-fill-mode: none;           |
| fillmode-forwards         | animation-fill-mode: forwards;       |
| fillmode-backwards        | animation-fill-mode: backwards;      |
| fillmode-both             | animation-fill-mode: both;           |
| fillmode-[none,backwards] | animation-fill-mode: none, backwards |

## Animation play state

Long variant: animation-state-% \
Short variant: playstate-%

| Class              | Properties                     |
| ------------------ | ------------------------------ |
| playstate-paused   | animation-play-state: paused;  |
| playstate-running  | animation-play-state: running; |
