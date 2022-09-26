import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

export default {
    input: './src/index.ts',
    output: {
        dir: 'dist',
        sourcemap: true,
    },
    plugins: [
        typescript({
            tsconfig: './tsconfig.production.json',
            declaration: true,
            declarationDir: 'dist',
            exclude: ['tests', 'src/*.test.ts, src/*.spec.ts'],
        }),
        terser(),
        sizeSnapshot(),
    ],
};
