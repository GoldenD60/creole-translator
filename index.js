translator = `
{
	"nouns":
	{
		"plurals":
		{
			"englishList":["ants", "cockroaches", "cockerels", "cats", "cows", "dogs", "hens", "goats", "horses", "spiders", "lizards", "moths", "butterflies", "snails", "pigeons", "mynah birds", "parrots", "slugs", "tortoises", "turtles", "bulls", "sharks", "ducks", "turkeys", "geese", "guinia fowls", "bats", "owls", "grass snakes", "rats"],
			"creoleList": ["fourmi", "kankrela", "kok", "sat", "bef", "lisyen", "poul", "kabri", "seval", "bib", "lezar", "bigay", "papiyon", "kourpa", "pizon", "martin", "kato", "lalangmelani", "torti", "tortid'mer", "toro", "reken", "kannar", "denn", "zwa", "pentar", "sov souri", "ibou", "koulev", "lera"]
		},
		"non-plurals":
		{
			"englishList":["ant", "cockroach", "cockerel", "cat", "cow", "dog", "hen", "goat", "horse", "spider", "lizard", "moth", "butterfly", "snail", "pigeon", "mynah bird", "parrot", "slug", "tortoise", "turtle", "bull", "shark", "duck", "turkey", "goose", "guinia fowl", "bat", "owl", "grass snake", "rat"],
			"creoleList": ["fourmi", "kankrela", "kok", "sat", "bef", "lisyen", "poul", "kabri", "seval", "bib", "lezar", "bigay", "papiyon", "kourpa", "pizon", "martin", "kato", "lalangmelani", "torti", "tortid'mer", "toro", "reken", "kannar", "denn", "zwa", "pentar", "sov souri", "ibou", "koulev", "lera"]
		}
	},
	"adjectives":
	{
		"englishList":["black"],
		"creoleList":["nwanr"]
	}
}
`
translator = JSON.parse(translator)

english = null
creole = null
translated = null

function load() {
	english = document.getElementById("english")
	creole = document.getElementById("creole")
}

function updateCreole() {
	//translated = translator["creoleList"][translator["englishList"].indexOf(english.value)]
	translated = (" " + english.value.toLowerCase() + " ")
	// remove new lines
	.replace(/\n/g, " \\n ")
	// remove punctuation
	.replace(/\./g, " . ")
	.replace(/\,/g, " , ")
	.replace(/\!/g, " ! ")
	.replace(/\?/g, " ? ")

	for (var i = 0; i < translator["adjectives"]["englishList"].length; i++) {
		translator["adjectives"]["englishList"][i]
	}

	for (var i = 0; i < translator["nouns"]["plurals"]["englishList"].length; i++) {
		console.log(`The noun is ${translated.includes(translator["nouns"]["plurals"]["englishList"][i]) || translated.includes(translator["nouns"]["non-plurals"]["englishList"][i]) ? translator["nouns"]["non-plurals"]["englishList"][i] : "nothing"}`)
		translated = translated.replace(new RegExp(" " + translator["nouns"]["plurals"]["englishList"][i] + " ", "g"), " " + translator["nouns"]["plurals"]["creoleList"][i] + " ")
		translated = translated.replace(new RegExp(" " + translator["nouns"]["non-plurals"]["englishList"][i] + " ", "g"), " " + translator["nouns"]["non-plurals"]["creoleList"][i] + " ")
		translated = translated.replace(new RegExp(" " + translator["nouns"]["plurals"]["englishList"][i] + " ", "g"), " " + translator["nouns"]["plurals"]["creoleList"][i] + " ")
		translated = translated.replace(new RegExp(" " + translator["nouns"]["non-plurals"]["englishList"][i] + " ", "g"), " " + translator["nouns"]["non-plurals"]["creoleList"][i] + " ")
	}

	// re-add punctuation
	translated = translated.replace(/ \. /g, ".")
	.replace(/ \, /g, ",")
	.replace(/ \! /g, "!")
	.replace(/ \? /g, "?")
	// re-add new lines
	.replace(/ \\n /g, "\n")

	if (translated != null) {
		creole.value = translated.trim()
	}
	else {
		creole.value = english.value.trim()
	}
}

function updateEnglish() {
	//translated = translator["creoleList"][translator["englishList"].indexOf(english.value)]
	translated = (" " + creole.value.toLowerCase() + " ")
	// remove new lines
	.replace(/\n/g, " \\n ")
	// remove punctuation
	.replace(/\./g, " . ")
	.replace(/\,/g, " , ")
	.replace(/\!/g, " ! ")
	.replace(/\?/g, " ? ")
	
	for (var i = 0; i < translator["nouns"]["non-plurals"]["englishList"].length; i++) {
		translated = translated.replace(new RegExp(" " + translator["nouns"]["non-plurals"]["creoleList"][i] + " ", "g"), " " + translator["nouns"]["non-plurals"]["englishList"][i] + " ")
		translated = translated.replace(new RegExp(" " + translator["nouns"]["non-plurals"]["creoleList"][i] + " ", "g"), " " + translator["nouns"]["non-plurals"]["englishList"][i] + " ")
	}

	// re-add punctuation
	translated = translated.replace(/ \. /g, ".")
	.replace(/ \, /g, ",")
	.replace(/ \! /g, "!")
	.replace(/ \? /g, "?")
	// re-add new lines
	.replace(/ \\n /g, "\n")

	if (translated != null) {
		english.value = translated.trim()
	}
	else {
		english.value = creole.value.trim()
	}
}