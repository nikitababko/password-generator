import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/index.js',
    },
    plugins: [
        typescript({
            tsconfig: './tsconfig.production.json',

            exclude: ['tests', 'src/*.test.ts, src/*.spec.ts', 'src/index.dev.ts'],
        }),
        terser(),
        sizeSnapshot(),
    ],
};
