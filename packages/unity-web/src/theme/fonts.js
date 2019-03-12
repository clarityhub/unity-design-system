import { variants, sizes } from '@clarityhub/unity-core/lib/typography';
import colors from '@clarityhub/unity-core/lib/colors';
import { darken } from '@clarityhub/unity-core/lib/utilities/color';

export const types = {
	h1: `
        ${variants.heading.string}

        font-size: ${sizes.h1.rem}rem;
        line-height: ${sizes.h1.lineHeight.unitless};
    `,
	h2: `
        ${variants.heading.string}

        font-size: ${sizes.h2.rem}rem;
        line-height: ${sizes.h2.lineHeight.unitless};
        padding-bottom: 1rem;
        padding-top: 3rem;
    `,
	h3: `
        ${variants.heading.string}

        font-size: ${sizes.h3.rem}rem;
        line-height: ${sizes.h3.lineHeight.unitless};
        padding-bottom: 1rem;
        padding-top: 3rem;
    `,
	h4: `
        ${variants.secondary.string}

        font-size: ${sizes.h4.rem}rem;
        line-height: ${sizes.h4.lineHeight.unitless};
    `,
	h5: `
        ${variants.secondary.string}

        font-size: ${sizes.h5.rem}rem;
        line-height: ${sizes.h5.lineHeight.unitless};
    `,
	h6: `
        ${variants.secondary.string}

        font-size: ${sizes.h6.rem}rem;
        line-height: ${sizes.h6.lineHeight.unitless};
    `,
	p: `
        ${variants.readable.string}

        font-size: ${sizes.p.rem}rem;
        line-height: ${sizes.p.lineHeight.unitless};

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
        ${variants.text.string}

        font-size: ${sizes.text.rem}rem;
        line-height: ${sizes.text.lineHeight.unitless};

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
	text2: `
        ${variants.text.string}

        font-size: ${sizes.text2.rem}rem;
        line-height: ${sizes.text2.lineHeight.unitless};
        font-weight: 400;

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
	sectionLabel: `
        ${variants.text.string}

        color: ${colors.darkGray.default};
        font-size: 1rem;
        line-height: 1.4;
    `,
	subtext: `
        font-family: 'Crimson Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

        font-size: ${sizes.subtext.rem}rem;
        line-height: ${sizes.subtext.lineHeight.unitless};
        color: ${colors.darkGray.default};
        font-style: italic;

        & + & {
            margin-top: 1.6rem;
        }
    `,
	link: `
        border-bottom: 1px solid ${colors.primary.default};
        color: ${colors.primary.default};
        display: inline-block;
        text-decoration: none;

        &:hover,
        &:active {
            border-bottom: 2px solid ${colors.primary.default};
            border-bottom-width: 2px;
            color: ${colors.primary.default};
            margin-bottom: -1px;
            text-decoration: none;
        }

        &:visited {
            border-bottom: 1px solid ${darken(colors.primary.default, 0.2)};
            color: ${darken(colors.primary.default, 0.2)};
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
        color: ${colors.dove.default};
        cursor: pointer;
        display: block;
        font-size: ${14 / 16}rem;
        line-height: ${26 / 16}rem;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: color 0.3s;
        transition-property: color;
        letter-spacing: 0.8px !important;

        &:visited {
            color: ${colors.dove.default} !important;
        }

        &::before {
            background: ${colors.dove.default};
            bottom: -6px;
            content: '';
            height: 2px;
            left: 0;
            position: absolute;
            transform: scale3d(0, 0.4, 1);
            transition: transform 0.1s;
            width: 100%;
        }

        &.active,
        &:hover,
        &:focus {
            &::before {
                transform: scale3d(0.8, 0.4, 1);
                transition-duration: 0.3s;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            }
        }
    `,
};
