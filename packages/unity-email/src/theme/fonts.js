import { variants, sizes } from '@clarityhub/unity-core/lib/typography';

export const types = {
	h1: Object.assign(
		{},
		variants.heading,
		{
			fontSize: `${sizes.h1.px}px`,
			lineHeight: `${sizes.h1.lineHeight.px}px`,
		}
	),
	h2: Object.assign(
		{},
		variants.heading,
		{
			fontSize: `${sizes.h2.px}px`,
			lineHeight: `${sizes.h2.lineHeight.px}px`,
		}
	),
	h3: Object.assign(
		{},
		variants.heading,
		{
			fontSize: `${sizes.h3.px}px`,
			lineHeight: `${sizes.h3.lineHeight.px}px`,
		}
	),
	h4: Object.assign(
		{},
		variants.secondary,
		{
			fontSize: `${sizes.h4.px}px`,
			lineHeight: `${sizes.h4.lineHeight.px}px`,
		}
	),
	h5: Object.assign(
		{},
		variants.secondary,
		{
			fontSize: `${sizes.h5.px}px`,
			lineHeight: `${sizes.h5.lineHeight.px}px`,
		}
	),
	h6: Object.assign(
		{},
		variants.secondary,
		{
			fontSize: `${sizes.h6.px}px`,
			lineHeight: `${sizes.h6.lineHeight.px}px`,
		}
	),
	p: Object.assign(
		{},
		variants.secondary,
		{
			fontSize: `${sizes.p.px}px`,
			lineHeight: `${sizes.p.lineHeight.px}px`,
		}
	),
	text: Object.assign(
		{},
		variants.text,
		{
			fontSize: `${sizes.text.px}px`,
			lineHeight: `${sizes.text.lineHeight.px}px`,
		}
	),
	text2: Object.assign(
		{},
		variants.text,
		{
			fontSize: `${sizes.text2.px}px`,
			lineHeight: `${sizes.text2.lineHeight.px}px`,
			fontWeight: 400,
		}
	),
	subtext: Object.assign(
		{},
		variants.readable,
		{
			fontSize: `${sizes.subtext.px}px`,
			lineHeight: `${sizes.subtext.lineHeight.px}px`,
			fontStyle: 'italic',
		}
	),
};
