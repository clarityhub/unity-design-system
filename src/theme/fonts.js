import colors from './colors';
import { darken } from '../utilities/color';

/**
 * List of Google Fonts that must be loaded
 */
export const families = [
    'Crimson Text:300,400,600,700',
    'Roboto:400,800',
    'Open Sans:300,400,600,700',
];

export const variants = {
    heading: `
        font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
        font-weight: 400;
    `,
    secondary: `
        font-family 'Roboto', Arial, sans-serif;
        font-weight: 400;
    `,
    text: `
        font-family: 'Helvetica Neue', Arial, sand-serif;
        font-weight: 300;
        line-height: 1rem;

        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            letter-spacing: 0.1px;
        }

        -webkit-font-smoothing: auto;
        -moz-osx-font-smoothing: auto;
        letter-spacing: 0.2px;
    `,
    readable: `
        font-family: 'Crimson Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    `,
    button: `
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 400;
        letter-spacing: 0.2px;
    `
};

export const colorStyles = {
    white: `
        color: ${colors.white};
    `,
    dove: `
        color: ${colors.dove};
    `,
    muted: `
        color: ${colors.muted};
    `,
    gray: `
        color: ${colors.gray};
    `,
    dark: `
        color: ${colors.dark};
    `,
    black: `
        color: ${colors.black};
    `,
};

export const types = {
    h1: `
        ${variants.heading}

        font-size: ${32 / 16}rem;
        line-height: 1.4;
    `,
    h2: `
        ${variants.heading}

        font-size: ${26 / 16}rem;
        line-height: 1.4;
        padding-bottom: 1rem;
        padding-top: 3rem;
    `,
    h3: `
        ${variants.heading}

        font-size: ${21 / 16}rem;
        line-height: 1.2;
        padding-bottom: 1rem;
        padding-top: 3rem;
    `,
    h4: `
        ${variants.secondary}

        font-size: ${19 / 16}rem;
        line-height: 1.2;
    `,
    h5: `
        ${variants.secondary}

        font-size: ${16 / 16}rem;
        line-height: 1.2;
    `,
    p: `
        ${variants.readable}

        font-size: ${21 / 16}rem;
        line-height: 1.6;

        & + & {
            margin-top: 1.6rem;
        }

        strong,
        b {
            font-weight: 800;
        }

        i,
        em {
            font-style: italic;
        }
    `,
    text: `
        ${variants.text}

        font-size: 1.1rem;
        line-height: 1.6;

        & + & {
            margin-top: 1.6rem;
        }

        strong,
        b {
            font-weight: 800;
        }

        i,
        em {
            font-style: italic;
        }
    `,
    subtext: `
        font-family: 'Crimson Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

        font-size: ${16 / 16}rem;
        line-height: 1.4;
        color: ${colors.smoke};
        font-style: italic;

        & + & {
            margin-top: 1.6rem;
        }
    `,
    link: `
        border-bottom: 1px solid ${colors.primary};
        color: ${colors.primary};
        display: inline-block;
        text-decoration: none;

        &:hover,
        &:active {
            border-bottom: 2px solid ${colors.primary};
            border-bottom-width: 2px;
            color: ${colors.primary};
            margin-bottom: -1px;
            text-decoration: none;
        }

        &:visited {
            border-bottom: 1px solid ${darken(colors.primary, 0.2)};
            color: ${darken(colors.primary, 0.2)};
            text-decoration: none;

            &:hover,
            &:active {
                margin-bottom: 0;
            }
        }
    `,
    blockLink: `
        -khtml-user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-touch-callout: none;
        border: 0 !important;
        color: ${colors.wash};
        cursor: pointer;
        display: block;
        font-size: ${14 / 16}rem;
        line-height: ${26 / 16}rem;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: color 0.3s;
        transition-property: color;

        &:visited {
            color: ${colors.light} !important;
        }

        &::before {
            background: ${colors.wash};
            bottom: -2px;
            content: '';
            height: 2px;
            left: 0;
            position: absolute;
            transform: scale3d(0, 0.4, 1);
            transition: transform 0.1s;
            width: 100%;
        }

        &:hover,
        &:focus {
            &::before {
                transform: scale3d(0.5, 0.4, 1);
                transition-duration: 0.3s;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            }
        }
    `
};
