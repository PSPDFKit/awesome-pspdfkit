# PSPDFKit for Web Example – Vite.js

This example shows how to integrate [PSPDFKit for Web](https://pspdfkit.com/web/) into a [Vite.js](https://vitejs.dev/) with React app.

## Prerequisites

- [Node.js](http://nodejs.org/)

## Support, Issues and License Questions

PSPDFKit offers support for customers with an active SDK license via https://pspdfkit.com/support/request/

Are you [evaluating our SDK](https://pspdfkit.com/try/)? That's great, we're happy to help out! To make sure this is fast, please use a work email and have someone from your company fill out our sales form: https://pspdfkit.com/sales/

## Getting Started

Clone the repo:

```bash
git clone https://github.com/PSPDFKit/pspdfkit-web-example-vite.git
cd pspdfkit-web-example-vite
```

Install the project dependencies:

```shell script
npm install
```

## Running the Example

We are ready to launch the app! 🎉

```shell script
npm run dev
```

You can now open http://localhost:5173 in your browser and enjoy!

To create a production build of the app and serve it:

```shell script
npm run build
npm run preview
```

You can now preview your build http://localhost:4173 in your browser.

Enjoy 🍕

## React Component

The React component which implements the PSPDFKit for Web integration can be found at `src/components/PdfViewerComponent.jsx`.

In order to make the PSPDFKit SDK assets available they have to be copied from the `node_modules/pspdfkit/dist` folder to `public/pspdfkit-lib` folder. For that purpose this example uses a copy plugin which you can find at `vite.config.js`.

## License

This software is licensed under a [modified BSD license](LICENSE).

## Contributing

Please ensure
[you have signed our CLA](https://pspdfkit.com/guides/web/current/miscellaneous/contributing/) so that we can accept your contributions.
