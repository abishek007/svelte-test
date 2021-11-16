import App from './App.svelte';
import { addMessages, init, locale, register } from 'svelte-i18n'

let lang = 'en'
let languages = [
	{name: 'en', value: { "happy": "Happy" }},
	{name: 'tam', value: { "happy": "சந்தோஷமாக" }},
	{name: 'hi', value: { "happy": "प्रसन्न" }},
];

locale.subscribe((value) => {
	lang = value
})

console.log('lang :', lang)

/*
addMessages("en", {
	happy: "Happy"
})

languages.forEach((lan) => {
	if (lan.name !== 'en') {
		console.log('lan.name', lan.name)
		console.log('lan.value', lan.value)
		register(lan.name, () => import(`./${lan.name}.json`))
	}
})
*/


addMessages("en", {
  happy: "Happy"
})

addMessages("tam", {
  happy: "சந்தோஷமாக"
})

addMessages("hi", {
  happy: "प्रसन्न"
})


console.log('languages', languages)


init({ fallbackLocale: 'en', initialLocale: lang })

const app = new App({
	target: document.body,
	props: {
		languages,
	}
});

export default app;