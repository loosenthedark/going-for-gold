## Testing

### Validation:

- [W3C](https://www.w3.org/)'s [Markup Validation Service](https://validator.w3.org/) was used to test the validity of all HTML used in this project. The code was [validated by direct input](https://validator.w3.org/#validate_by_input), and all suggested corrections were then made. As a result, all of the site's HTML source code now returns a "Document checking completed. No errors or warnings to show." message upon being passed through this validator, as is reflected in the following screenshot:

  - [index.html validation](docs/images/validation/html-validation.png)

- Likewise, the website's custom CSS stylesheet was checked for errors using [W3C](https://www.w3.org/)'s [CSS Validation Service](https://jigsaw.w3.org/css-validator/). Once again, [validation by direct input](https://jigsaw.w3.org/css-validator/#validate_by_input) was the preferred method selected, and all necessary changes were subsequently carried out. Consequently, the stylesheet now returns a "Congratulations! No error found." message upon being passed through this validator, as the following screenshot indicates:
  - [static/css/style.css validation](docs/images/validation/css-validation.png)
- The issue surrounding the incompatibility of `backdrop-filter` with the W3C validator appears to be [a well documented one](https://github.com/w3c/css-validator/issues/289). However, given that this property is present in the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) and [endorsed by CSS-Tricks](https://css-tricks.com/almanac/properties/b/backdrop-filter/), it has been used in this project in spite of the validator's error messages. Its [patchy browser support](https://caniuse.com/css-backdrop-filter) necessitated the use of a `@supports` query on [line 698](static/css/style.css) of the project's stylesheet (with a reasonable fallback option of an opaque background), as suggested in [this CSS-Tricks article](https://css-tricks.com/almanac/properties/b/backdrop-filter/)

- In a similar manner, all of the site's custom JavaScript/JSX files were validated against [JSHint](https://jshint.com/)'s error-detection tool, which is available both as an online linter and an IDE extension for real-time JS problem-solving. After heeding various warning and error messages, at the time of deployment each of these .js documents passed JSHint validation with just a handful of warnings detected.

|                                                                                                                                        |                                                                                                                                       |                                                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| ![](https://raw.githubusercontent.com/loosenthedark/brew-barberista-landing-page/main/docs/images/validation/html-validation-icon.png) | ![](https://raw.githubusercontent.com/loosenthedark/brew-barberista-landing-page/main/docs/images/validation/css-validation-icon.png) | ![](https://raw.githubusercontent.com/loosenthedark/brew-barberista-landing-page/main/docs/images/validation/js-validation-icon.png) |

### Responsiveness:

![Going for Gold Medallists page responsive above-the-fold device mockups viewed in the Responsively App browser](docs/images/screenshots/mockups/gfg-medallists-responsively.png)

- All testing was performed manually, and on a near-constant basis as the project evolved. [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2) served as an indispensable resource throughout this testing process, allowing incremental adjustments to be made to the site's infrastructure and layout. In addition, the [React Developer Tools DevTools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) was consulted extensively to inspect the internal hierarchies and structure of the app's component tree. The site's responsiveness was also closely monitored and rigorously tested from start to finish using the developer-oriented [Responsively App browser](https://responsively.app/).

| Devices               |                                                                         |                                                                         |                                                                         |                                                                         |                                                                         |                                                                         |                                                                         |                                                                         |                                                                         |                                                                          |                                                                          |                                                                          |
| :-------------------- | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :----------------------------------------------------------------------: | :----------------------------------------------------------------------: | :----------------------------------------------------------------------: |
| **Samsung Galaxy S5** | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-1.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-2.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-3.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-4.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-5.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-6.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-7.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-8.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-9.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-10.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-11.jpg) | ![](docs/images/responsiveness/devices/samsung/samsung-galaxy-s5-12.jpg) |
| **Huawei P20**        |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-1.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-2.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-3.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-4.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-5.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-6.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-7.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-8.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-9.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-10.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-11.jpg)     |     ![](docs/images/responsiveness/devices/huawei/huawei-p20-12.jpg)     |
| **Moto G4**           |       ![](docs/images/responsiveness/devices/moto/moto-g4-1.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-2.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-3.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-4.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-5.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-6.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-7.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-8.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-9.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-10.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-11.jpeg)       |       ![](docs/images/responsiveness/devices/moto/moto-g4-12.jpeg)       |
| **Kindle Fire HD**    |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-1.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-2.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-3.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-4.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-5.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-6.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-7.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-8.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-9.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-10.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-11.png)     |    ![](docs/images/responsiveness/devices/kindle/kindle-fire-12.png)     |
| **MacBook Pro**       |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-1.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-2.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-3.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-4.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-5.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-6.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-7.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-8.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-9.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-10.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-11.png)    |    ![](docs/images/responsiveness/devices/macbook/macbook-pro-12.png)    |
| **Acer ΛSPIRE**       |         ![](docs/images/responsiveness/devices/acer/acer-1.png)         |         ![](docs/images/responsiveness/devices/acer/acer-2.png)         |         ![](docs/images/responsiveness/devices/acer/acer-3.png)         |         ![](docs/images/responsiveness/devices/acer/acer-4.png)         |         ![](docs/images/responsiveness/devices/acer/acer-5.png)         |         ![](docs/images/responsiveness/devices/acer/acer-6.png)         |         ![](docs/images/responsiveness/devices/acer/acer-7.png)         |         ![](docs/images/responsiveness/devices/acer/acer-8.png)         |         ![](docs/images/responsiveness/devices/acer/acer-9.png)         |         ![](docs/images/responsiveness/devices/acer/acer-10.png)         |         ![](docs/images/responsiveness/devices/acer/acer-11.png)         |         ![](docs/images/responsiveness/devices/acer/acer-12.png)         |
| **Android Smart TV**  |    ![](docs/images/responsiveness/devices/android/android-tv-1.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-2.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-3.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-4.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-5.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-6.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-6.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-7.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-7.jpg)     |     ![](docs/images/responsiveness/devices/android/android-tv-8.jpg)     |     ![](docs/images/responsiveness/devices/android/android-tv-9.jpg)     |    ![](docs/images/responsiveness/devices/android/android-tv-10.jpg)     |