# mktomjml-compiler

MJML with 2 custom components

marketo-container
marketo-module

Utilizing standard MJML framework, and components.

## Getting started

A step-by-step tutorial is available [here](https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36).

* Clone the repo
* `npm install` inside
* Add your component inside `components` folder
* Add your component to the registrations in gulpfile.babel.js
* Use your own component in `index.mjml`
* `npm run build` to build, or `npm start` if you want to watch recompile on change you make (to your component or to `index.mjml`)
* The result will be outputted in `index.html`


## Later use of your component

### In Node.js
```js
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import MyComponent from './components/MyComponent'

registerComponent(MyComponent)

const { html, errors } = mjml2html(mjmlString)
```

### With the cli

Using custom components with the CLI is not ready yet.
