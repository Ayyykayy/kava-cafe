// Every image in src/assets/** is addressable by file name: img['french-toast']. Replace files, keep names.
const m = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
export const img = Object.fromEntries(Object.entries(m).map(([k, v]) => [k.split('/').pop().replace(/\.\w+$/, ''), v]))
