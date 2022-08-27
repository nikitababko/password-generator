export const getFactor = <T>(value: T): number => {
    const v = Number(typeof value === 'string' ? value.length : value);

    return Math.floor(Math.random() * v);
};
