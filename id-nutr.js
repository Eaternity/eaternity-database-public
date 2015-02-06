---
---

// This is a global variable (because it is defined outside any function scope)
var ID_NUTR = {
	{% for nutr in site.data.nutrs %}
		'{{ nutr[1].id | escape }}':'{{ nutr[1].name | escape }}&emsp;{{ nutr[1].id | escape }}'{% unless forloop.last %},{% endunless %}
	{% endfor %}
};


