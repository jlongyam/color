import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import { babel } from '@rollup/plugin-babel';

const plugin = [
	resolve(),
	commonjs(),
	buble()
];

export default [{
	input: './src/color.js',
	output: {
		file: './dist/color.cjs',
		format: 'cjs'
	},
	plugins: plugin
}, {
	input: './src/color.js',
	output: {
		file: './dist/color.js',
		format: 'iife',
		name: 'color'
	},
	plugins: plugin
}]