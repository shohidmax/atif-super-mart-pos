# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# atif-super-mart-pos




npm i --save-dev @types/png.js
for barcode 
https://www.telerik.com/kendo-react-ui/components/barcodes/export-options/
npm install --save @progress/kendo-react-barcodes @progress/kendo-drawing @progress/kendo-licensing
npm install --save @progress/kendo-react-barcodes @progress/kendo-drawing @progress/kendo-licensing
import { Barcode } from '@progress/kendo-react-barcodes';
https://www.npmjs.com/package/@progress/kendo-react-barcodes#react-barcode-component

<Barcode type="EAN13" value="123456789012" />;

111111111111

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Barcode, QRCode } from '@progress/kendo-react-barcodes';
const cardStyles = {
  width: '50%'
};
const App = () => <div className="k-card-deck">
    <div className="k-card k-text-center" style={cardStyles}>
      <div className="k-card-header">
        <div className="k-card-title">
          Barcode
        </div>
      </div>
      <div className="k-card-body">
        <Barcode type="code39" value="017934030" />
      </div>
    </div>

    <div className="k-card k-text-center" style={cardStyles}>
      <div className="k-card-header">
        <div className="k-card-title">
          QR Code
        </div>
      </div>
      <div className="k-card-body">
        <QRCode value="https://www.telerik.com/kendo-react-ui/components/barcodes/" />
      </div>
    </div>
  </div>;
ReactDOM.render(<App />, document.querySelector('my-app'));
111111111111111111111111111



,
        {
         "product_title": "BANGAS GRAND CHOICE 100GM",
         "product_barcode": 13256830406,
         "RPU": 20,
         "QTS": 8
        },
        {
         "product_title": "DR. H&H MORNINGA GINGER TEA 60G",
         "product_barcode": 16965020212,
         "RPU": 190,
         "QTS": 8
        },
        {
         "product_title": "KELLY'S FURNITURE CLEANEER 500ML",
         "product_barcode": 25784243658,
         "RPU": 165,
         "QTS": 9
        },
        {
         "product_title": "DREAM CANDY 1PCS",
         "product_barcode": 51759831201,
         "RPU": 20,
         "QTS": 8
        },
        {
         "product_title": "DOVE PINK BEAUTY CREAM 100GM",
         "product_barcode": 67238891183,
         "RPU": 90,
         "QTS": 5
        },
        {
         "product_title": "OLYMPIC TIP CRISPY SALTED 70GM",
         "product_barcode": 745114130624,
         "RPU": 15,
         "QTS": 5
        },
        {
         "product_title": "CUTE GLYCERINE 60G",
         "product_barcode": 745125066745,
         "RPU": 45,
         "QTS": 5
        },
        {
         "product_title": "CUTE AFTER SAVE LOTION 40ML",
         "product_barcode": 88021511088,
         "RPU": 45,
         "QTS": 3
        },
        {
         "product_title": "CUTE ROMANCE 60ML",
         "product_barcode": 88021511149,
         "RPU": 215,
         "QTS": 3
        },
        {
         "product_title": "CUTE ROMANCE 15ML",
         "product_barcode": 88021511156,
         "RPU": 80,
         "QTS": 3
        },
        {
         "product_title": "CUTE ANTI DANDRUF SHAMPOO 120ML",
         "product_barcode": 88021512832,
         "RPU": 100,
         "QTS": 9
        },
        {
         "product_title": "CUTE ROSE 75GM",
         "product_barcode": 88021512863,
         "RPU": 26,
         "QTS": 9
        },
        {
         "product_title": "CUTE JASMINE ENRICHED 125GM",
         "product_barcode": 88021513051,
         "RPU": 42,
         "QTS": 2
        },
        {
         "product_title": "CUTE JASMINE ENRICHED 75GM",
         "product_barcode": 88021513068,
         "RPU": 28,
         "QTS": 1
        },
        {
         "product_title": "NESTLE NESCAFE CLASSIC 1.5GM",
         "product_barcode": 1055359,
         "RPU": 5,
         "QTS": 5
        },
        {
         "product_title": "MODHUMOTY FLOOR CLEANER 500ML",
         "product_barcode": 1075495,
         "RPU": 115,
         "QTS": 7
        },
        {
         "product_title": "MODHUMOTY FLOOR CLEANER 1LIT",
         "product_barcode": 1075496,
         "RPU": 220,
         "QTS": 2
        },
        {
         "product_title": "MODHUMOTY TILES CLEANER 1LIT",
         "product_barcode": 1075497,
         "RPU": 125,
         "QTS": 3
        },
        {
         "product_title": "VIM MAJUNI JUMBO",
         "product_barcode": 1075511,
         "RPU": 25,
         "QTS": 1
        },
        {
         "product_title": "KHAN DAMP FIX 3IN1 1LIT",
         "product_barcode": 1075523,
         "RPU": 60,
         "QTS": 2
        },
        {
         "product_title": "ATIF SUPER MART SUGAR 1KG",
         "product_barcode": 1075541,
         "RPU": 80,
         "QTS": 5
        },
        {
         "product_title": "OLYMPIC ENERGY PLUS 24GM",
         "product_barcode": 1075567,
         "RPU": 5,
         "QTS": 2
        },
        {
         "product_title": "BD FOODS -MANGO PICKLE 400GM",
         "product_barcode": 1085600,
         "RPU": 120,
         "QTS": 2
        },
        {
         "product_title": "BD FOODS MANGO PICKLE 400GM",
         "product_barcode": 1085604,
         "RPU": 120,
         "QTS": 2
        },
        {
         "product_title": "MOWCHAK HONEY 1 STAR 250GM",
         "product_barcode": 1085613,
         "RPU": 180,
         "QTS": 3
        },
        {
         "product_title": "MODHUMOTI CHILLI POWDER 100GM",
         "product_barcode": 1085661,
         "RPU": 45,
         "QTS": 8
        }