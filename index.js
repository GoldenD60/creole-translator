translator = `
{
	"plurals":
	{
		"englishList":["ants", "cockroaches", "cockerels", "cats", "cows", "dogs", "hens", "goats", "horses", "spiders", "lizards", "moths", "butterflies", "snails", "pigeons", "mynah birds", "black parrots", "slugs", "tortoises", "turtles", "bulls", "sharks", "ducks", "turkeys", "geese", "guinia fowls", "bats", "owls", "grass snakes", "rats"],
		"creoleList": ["fourmi", "kankrela", "kok", "sat", "bef", "lisyen", "poul", "kabri", "seval", "bib", "lezar", "bigay", "papiyon", "kourpa", "pizon", "martin", "kato nwanr", "lalangmelani", "torti", "tortid'mer", "toro", "reken", "kannar", "denn", "zwa", "pentar", "sov souri", "ibou", "koulev", "lera"]
	},
	"non-plurals":
	{
		"englishList":["ant", "cockroach", "cockerel", "cat", "cow", "dog", "hen", "goat", "horse", "spider", "lizard", "moth", "butterfly", "snail", "pigeon", "mynah bird", "black parrot", "slug", "tortoise", "turtle", "bull", "shark", "duck", "turkey", "goose", "guinia fowl", "bat", "owl", "grass snake", "rat"],
		"creoleList": ["fourmi", "kankrela", "kok", "sat", "bef", "lisyen", "poul", "kabri", "seval", "bib", "lezar", "bigay", "papiyon", "kourpa", "pizon", "martin", "kato nwanr", "lalangmelani", "torti", "tortid'mer", "toro", "reken", "kannar", "denn", "zwa", "pentar", "sov souri", "ibou", "koulev", "lera"]
	}
}`
translator = JSON.parse(translator)

english = null
creole = null

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
	
	for (var i = 0; i < translator["plurals"]["englishList"].length; i++) {
		translated = translated.replace(" " + translator["plurals"]["englishList"][i] + " ", " " + translator["plurals"]["creoleList"][i] + " ")
		translated = translated.replace(" " + translator["non-plurals"]["englishList"][i] + " ", " " + translator["non-plurals"]["creoleList"][i] + " ")
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
	
	for (var i = 0; i < translator["non-plurals"]["englishList"].length; i++) {
		translated = translated.replace(" " + translator["non-plurals"]["creoleList"][i] + " ", " " + translator["non-plurals"]["englishList"][i] + " ")
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