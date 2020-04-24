# uqlibrary-receipt

[![Codeship Status for uqlibrary/uqlibrary-receipt](https://codeship.com/projects/2c7c8020-e4c4-0133-d510-569c79a00c74/status?branch=master)](https://codeship.com/projects/146461)
[![Dependency Status](https://david-dm.org/uqlibrary/uqlibrary-receipt.svg)](https://david-dm.org/uqlibrary/uqlibrary-receipt)
[![Dev Dependency Status](https://david-dm.org/uqlibrary/uqlibrary-receipt/dev-status.svg)](https://david-dm.org/uqlibrary/uqlibrary-receipt?type=dev)

A simple element that takes pulls apart the query string and shows a Payment Receipt page based on those values.

See [the full documentation](https://uqlibrary.github.io/uqlibrary-receipt/uqlibrary-receipt/).

## Getting Started

```sh
npm install -g bower web-component-tester polymer-cli
npm install
```

## Developing

- Please adhere to the Polymer code style guide provided at [Style Guide](http://polymerelements.github.io/style-guide/).
- Colors and common styles are imported (bower install) from [uqlibrary-styles](http://github.com/uqlibrary/uqlibrary-styles).
- A preview of the component can be viewed locally by running `npm start`. Use the second URL from the command output.
- GitHub pages should be updated after every commit to `master` branch by running `bin/generate-gh-pages.sh`

## Testing

Tests are run using the Web Component Tester.

```sh
npm test
```

## Query string variables

| Variable   | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| Success    | Either '1' or '0'. Determines whether the payment was successful |
| AmountPaid | The value that was paid in cents                                 |
| Receipt    | The receipt number of the transaction                            |
