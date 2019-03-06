import Color from 'color';

const cache = {};

const perform = (operation, color, percentage) => {
    const key = `${operation}:${color}:${percentage}`;

    if (cache[key]) {
        return cache[key];
    }

    const c = Color(color)[operation](percentage).rgb().string();

    cache[key] = c;

    return c;
}

export const darken = (color, percentage = 0.1) => {
    return perform('darken', color, percentage);
};

export const lighten = (color, percentage = 0.1) => {
    return perform('lighten', color, percentage);
};

export const desaturate = (color, percentage = 0.1) => {
    return perform('desaturate', color, percentage);
};

export const opacify = (color, percentage = 0.1) => {
    const key = `opacify:${color}:${percentage}`;

    if (cache[key]) {
        return cache[key];
    }

    const arr = Color(color).rgb().array();
    arr.push(percentage);
    const c = `rgba(${arr.join(',')})`;

    cache[key] = c;

    return c;
};

