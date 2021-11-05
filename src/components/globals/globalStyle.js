import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Futura';
        src: url('https://res.cloudinary.com/wemakeart/raw/upload/v1634959203/github/brandon-williams/fonts/future-heavy-italic_my94j5.eot'); /* IE9 Compat Modes */
        src: url('https://res.cloudinary.com/wemakeart/raw/upload/v1634959203/github/brandon-williams/fonts/future-heavy-italic_my94j5.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('https://res.cloudinary.com/wemakeart/raw/upload/v1634959204/github/brandon-williams/fonts/future-heavy-italic_r2zwgp.woff') format('woff'), /* Modern Browsers */
            url('https://res.cloudinary.com/wemakeart/raw/upload/v1634959203/github/brandon-williams/fonts/future-heavy-italic_cn5ea6.ttf')  format('truetype'); /* Safari, Android, iOS */
    }

    * {
        font-family: "Futura", Arial, Helvetica, sans-serif;
    }

    html {
        margin: 0%;
        padding: 0%;
    }

    body {
        margin: 0%;
        padding: 0%;
    }

    img {
        max-width: 100%;
        display: block;
    }
`

export default GlobalStyle