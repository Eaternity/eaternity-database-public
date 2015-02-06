---
---

// This is a global variable (because it is defined outside any function scope).
// Contains ID as key and 'name & specification & id' string as value.
var ID_PROD = {
    // The first entry in the list is "blank entry". Remove this (and make sure to place
	// the leading comma at the end inside the for loop) if "blank entry" is not an
	// acceptable choice for the user.
    '':''
	{% for prod in site.data.prods %}
		,'{{ prod[1].id | escape }}':'{{ prod[1].name | escape }}{% if prod[1].specification != null %}&nbsp;-&nbsp;{{ prod[1].specification | escape }}{% endif %}&nbsp;({{ prod[1].co2-value | escape }} kg CO2/kg)&nbsp;-&nbsp;{{ prod[1].id | escape }}'
	{% endfor %}
};

// Contains ID as key and filename as value
var ID_PROD_FILE = {
    // The first entry in the list is "blank entry". Remove this (and make sure to place
	// the leading comma at the end inside the for loop) if "blank entry" is not an
	// acceptable choice for the user.
    '':''
	{% for prod in site.data.prods %}
		,'{{ prod[1].id | escape }}':'{{ prod[0] }}'
	{% endfor %}
};


