---
---

// This is a global variable (because it is defined outside any function scope)
var ID_PROC = {
	{% for proc in site.data.procs %}
		'{{ proc[1].id | escape }}':'<a class=\"btn-link\" onclick=\"window.open(\'http://{{ site.edb_prose_domain_name }}/prose/#{{ site.github_edb_org_name }}/{{ site.github_edb_repo_name }}/edit/{{ site.github_edb_repo_branch_name }}/_data/procs/{{ proc[0] }}.json\', \'_blank\');\">{{ proc[1].name | escape }}&nbsp;({{ proc[1].co2-value }} kg CO2/kg)&nbsp;-&nbsp;{{ proc[1].id | escape }},&nbsp;{{ proc[0] }}.json</a>'{% unless forloop.last %},{% endunless %}
	{% endfor %}
};