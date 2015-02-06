/* We can add other JSONForm format definitions by using this syntax:
 * exports.bla = { ... };
 * Then, in another file we import this file and reference one of the format
 * specifications:
 * var jsonformformat = require('./jsonformformat.js');
 * var blaformat = jsonformformat.bla;
 *
 * The ordering of the fields are either determined by first the form and second by the schema.
 *
 *
 */
 
module.exports.prod = {
  "schema": {
  
	  /* Basic */
      "name": {
        "type": "string",
        "title": "Name *",
        "required": true
      },
      "specification": {
        "type": "string",
        "title": "Specification"
      },
      "synonyms": {
        "type": "string",
        "title": "Synonyms"
      },
      "name-english": {
        "type": "string",
        "title": "English Name"
      },
      "name-french": {
        "type": "string",
        "title": "French Name"
      },    
      "co2-value": {
        "type": "number",
        "title": "CO2-Value [kg CO2&Auml;q/kg] (*)",
		"description": "You can leave the CO2-value empty if this is a linked product."
      },      
      "id": {
        "type": "integer",
        "title": "ID *",
		/*"readonly": "readonly",*/
        "required": true
      },
	  "nutrition-id": {
	    "type": "string",
		"title": "Nutrition Data *"
	  },
	  "group-id": {
	    "type": "string",
		"title": "Product Group",
		"enum": Object.keys(ID_PROD).sort()
	  },
      "linked-id": {
        "type": "string",
        "title": "Linked with",
		"enum": Object.keys(ID_PROD).sort()
      },       
	  
	  /* Advanced */
      "tags": {
        "type": "string",
        "title": "Tags *",
        "required": true
      },
      "alternatives": {
        "type": "string",
        "title": "Alternatives"
      },
      "standard-origin": {
        "type": "string",
        "title": "Standard Origin"
      },
	  "origins": {
	    "type": "string",
		"title": "Possible origins"
	  },
      "production-names": {
        "type": "string",
        "title": "Production methods"
      },
      "production-values": {
        "type": "string",
        "title": "Production method parameters"
      },
      "production-methods": {
	    "type": "array",
		"title": "Production Methods",
		"items": {
		  "type": "string",
		  "title": "Production Method",
		  "enum": Object.keys(ID_PROC).sort()
		}
	  },
      "processing-names": {
        "type": "string",
        "title": "Degrees of processing"
      },
      "processing-values": {
        "type": "string",
        "title": "Degrees of processing parameters"
      },
      "processing-methods": {
	    "type": "array",
		"title": "Processing Methods",
		"items": {
		  "type": "string",
		  "title": "Processing Method",
		  "enum": Object.keys(ID_PROC).sort()
		}
	  },
      "conservation-names": {
        "type": "string",
        "title": "Preservation methods"
      },
      "conservation-values": {
        "type": "string",
        "title": "Preservation method parameters"
      },
      "preservation-methods": {
	    "type": "array",
		"title": "Preservation Methods",
		"items": {
		  "type": "string",
		  "title": "Preservation Method",
		  "enum": Object.keys(ID_PROC).sort()
		}
	  },	  
      "packaging-names": {
        "type": "string",
        "title": "Packaging"
      },
      "packaging-values": {
        "type": "string",
        "title": "Packaging parameters"
      },
      "packaging-methods": {
	    "type": "array",
		"title": "Packaging Methods",
		"items": {
		  "type": "string",
		  "title": "Packaging Method",
		  "enum": Object.keys(ID_PROC).sort()
		}
	  },	
      "season-begin": {
        "type": "string",
        "title": "Start of local season"
      },
      "season-end": {
        "type": "string",
        "title": "End of local season"
      },
      "combined-product": {
        "type": "boolean",
        "title": "Is a combined product"
      },
      "density": {
          "type": "number",
          "title": "Density [g/ml]"
      },
      "unit-weight": {
          "type": "number",
          "title": "Unit weight [g/piece]"
      },
      "quantity-comments": {
          "type": "textarea",
          "title": "Comments of density & unit weight"
      },
      "quantity-references": {
          "type": "textarea",
          "title": "References of density & unit weight"
      },
      "consistency": {
          "type": "string",
          "title": "Texture"
      },
      
      /* Documentation */
      "co2-calculation": {
        "type": "textarea",
        "title": "CO2 calculation path for basic CO2-value"
      },
      "calculation-process-documentation": {
        "type": "textarea",
        "title": "Calculation process documentation",
		"description": "Description of data used for CO2-calculation and important product traits"
      },	  
      "info-text": {
        "type": "string",
        "title": "Info text for cook"
      },
      "references": {
        "type": "textarea",
        "title": "References for basic CO2-value"
      }, 
	  "other-references": {
	    "type": "textarea",
	    "title": "Other references (not used)"
	  },
      "comments": {
        "type": "string",
        "title": "Comment"
      },
	  "co2-calculation-parameters": {
	    "type": "textarea",
		"title": "CO2 calculation path for different product parameters"
	  },
	  "references-parameters": {
	    "type": "string",
		"title": "References for product parameter calculation"
	  },
     "data-quality": {
        "type": "string",
        "title": "Data quality estimation"
      },      
      "author": {
        "type": "string",
        "title": "Last analyst initials"
      },	  
	  "delete": {
        "type": "boolean",
        "title": "To delete"
      }
    },
    
    "form": [
      {
        "type": "fieldset",
        "title": "Basic",
        "expandable": false,
        "items": [
          {
            "key": "name",
            "htmlClass": "h1 title heading",
            "formHtmlClass": "h1 title heading"
          },
          "specification",
          "synonyms",
          "name-english",
          "name-french",
          "co2-value",
		  {
		    "key": "id",
			"readonly": "readonly"
		  },
		  "nutrition-id",
		  {
		    "key": "group-id",
			"titleMap": ID_PROD
		  },
          {
		    "key": "linked-id",
			"titleMap": ID_PROD/*,
			"prepend":"<a onclick=\"window.open(\'http://edb.eaternity.ch/prose/#eaternity-agent/Eaternity-Datenbank/edit/gh-pages/_data/prods/\' + ID_PROD_FILE[document.getElementsByName(\'linked-id\')[0].value] + \'.json\', \'_blank\');\">Open</a>"*/
          },
        ]
      },
	  
      {
        "type": "fieldset",
        "title": "Advanced [+]",
        "expandable": true,
        "items": [
          "tags",
          "alternatives",
          "standard-origin",
          "origins",
          "production-names",
          "production-values",
          {
            "type": "fieldset",
			"title": "Production Methods [+]",
			"expandable": true,
			"items": [
              {
		        "key": "production-methods",
			    "type": "checkboxes",
			    "titleMap": ID_PROC
		      }			
			]
		  },
/*
          {
            "type": "fieldset",
			"title": "Production Methods Standard [+]",
			"expandable": true,
			"items": [
              {
		        "key": "production-methods",
			    "type": "checkboxes",
			    "titleMap": ID_PROC_STANDARD
		      }			
			]
		  },
		  {
            "type": "fieldset",
			"title": "Production Methods Non-Standard [+]",
			"expandable": true,
			"items": [
              {
		        "key": "production-methods",
			    "type": "checkboxes",
			    "titleMap": ID_PROC_NON_STANDARD
		      }			
			]
		  },
*/
          "processing-names",
          "processing-values",
          {
            "type": "fieldset",
			"title": "Processing Methods [+]",
			"expandable": true,
			"items": [
              {
		        "key": "processing-methods",
			    "type": "checkboxes",
			    "titleMap": ID_PROC
		      }			
			]
		  },
          "conservation-names",
          "conservation-values",
          {
            "type": "fieldset",
			"title": "Preservation Methods [+]",
			"expandable": true,
			"items": [
              {
		        "key": "preservation-methods",
			    "type": "checkboxes",
			    "titleMap": ID_PROC
		      }			
			]
		  },
          "packaging-names",
          "packaging-values",
          {
            "type": "fieldset",
			"title": "Packaging Methods [+]",
			"expandable": true,
			"items": [
              {
		        "key": "packaging-methods",
			    "type": "checkboxes",
			    "titleMap": ID_PROC
		      }			
			]
		  },
          "season-begin",
		  "season-end",
		  "combined-product",
          "density",
          "unit-weight",
          "quantity-comments",
          "quantity-references",
		  "consistency"
        ]
      },
      {
        "type": "fieldset",
        "title": "Documentation [+]",
        "expandable": true,
        "items": [
          "co2-calculation",
          "calculation-process-documentation",
          "info-text",
          "references",
          "other-references",
          "comments",
          "co2-calculation-parameters",
          "data-quality",
          "author",
          "delete"
        ]
      }  

	  /*,
	  // Hidden submit button
	  {
		"type": "submit",
		"title": "Hidden Button!",
		"htmlClass": "hide"
	  }*/
    ],
    
    // This will be injected when an edb file is loaded. It will contain the file's values.
    "value": null,
	
	// Not really necessary to set as default is true anyway
	"validate": true,
    
    "onSubmitValid": function(values) {
      // Nothing to do
    }
	
	/*
    "onSubmit": function(errors, values) {
      // Nothing to do
    }*/
};


module.exports.nutr = {

  "schema": {
    "id": {
      "type": "string",
      "title": "ID *",
      "required": true
    },
    "name": {
      "type": "string",
      "title": "Name *",
      "required": true
    },
    "country": {
      "type": "string",
      "title": "Country"
    },
	"comment": {
	  "type": "string",
	  "title": "Comment"
	},
    "nutr-vals": {
      "type": "array",
      "items": {
        "type": "object",
        "title": "Nutritional Value",
        "properties": {
          "component-id": {
            "type": "string",
            "title": "Component Id *"/*,
            "required": "true"*/
          },
          "value": {
            "type": "number",
            "title": "Value *"/*,
            "required": "true"*/
          },
          "unit": {
            "type": "string",
            "title": "Unit *"/*,
            "required": "true"*/
          }		  
        }
      }
    }
  },
  
  "form": [
    {
      "type": "fieldset",
      "title": "Basic",
      "expandable": false,
      "items": [
	    {
          "key": "name",
		  "htmlClass": "h1 title heading",
		  "formHtmlClass": "h1 title heading"
		},		  
		  
	    "id",
        "country",
		{
		  "key": "comment",
		  "type": "textarea"
		},
		{
		  "type": "fieldset",
		  "title": "Nutritional Values [+]",
		  "expandable": true,
		  "items": [
			{
			  "type": "array",
			  "items": {
				"type": "section",
				"items": [
				  {
					"type": "fieldset",
					"expandable": false,
					"items": [
					  {
					    "key": "nutr-vals[].component-id",
						"htmlClass": "h3 title heading",
						"formHtmlClass": "h3 title heading"
					  },
					  "nutr-vals[].value",
					  "nutr-vals[].unit"
					 ]
				  }
				]
			  }
			}		  
		  ]
		}
        /*{
          "type": "tabarray",
          "items": {
            "type": "section",
			"legend": "{{value}}",
            "items": [
			  {
			    "key": "nutr-vals[]",
			    "valueInLegend": "true"
			  }		
            ]
          }
        }*//*,
		// Hidden submit button
		{
		  "type": "submit",
		  "title": "Hidden Button!",
		  "htmlClass": "hide"
		}*/
	  ]
    }
  ],
  
  "value": null,
  
  // Not really necessary to set as default is true anyway
  "validate": true,
  
  /*
  "onSubmit": function(values) {
    //alert("onSubmit was called!");
	// Nothing to do
  }
  */

  "onSubmitValid": function(values) {
    //alert("onSubmitValid was called!");
	// Nothing to do
  }


};


module.exports.proc = {
  "schema": {
  
    "name": {
      "type": "string",
      "title": "Name *",
      "required": true
    },
    "id": {
      "type": "integer",
      "title": "ID *",
      "required": true
    },
	"description": {
	  "type": "textarea",
	  "title": "Description"
	},
    "co2-value": {
      "type": "number",
      "title": "CO2-Value [kg CO2&Auml;q/kg] *",
	  "required": true
    },	
	"parameter-name": {
	  "type": "string",
	  "title": "Parameter Name"
	},
    "references": {
      "type": "textarea",
      "title": "References"
    },
    "documentation": {
      "type": "textarea",
      "title": "Documentation"
    },	
    "is-standard-process-value": {
      "type": "boolean",
      "title": "Is Standard Process Value?"
    },
    "comment": {
      "type": "textarea",
      "title": "Comment"
    }	
  },
  
  "form": {
  
        "type": "fieldset",
        "title": "Basic",
        "expandable": false,
        "items": [
          {
            "key": "name",
            "htmlClass": "h1 title heading",
            "formHtmlClass": "h1 title heading"
          },
		  {
		    "key": "id",
			"readonly": "readonly"
		  },
          "description",
		  "co2-value",
		  "parameter-name",
		  "references",
		  "documentation",
		  "is-standard-process-value",
		  "comment"
		]
  },
  
  "value": null,
  
  "validate": true,
  
  "onSubmitValid": function(values) {
    //alert("onSubmitValid was called!");
    // Nothing to do
  }
};

// Add other JSONForm format definitions
// exports.ntr = { "schema": { ... }, "form": [ ... ], "value": null, "onSubmitValid": ... };