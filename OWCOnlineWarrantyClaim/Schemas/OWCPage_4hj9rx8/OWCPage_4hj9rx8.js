define("OWCPage_4hj9rx8", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true,
					"headingLevel": "label"
				}
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "insert",
				"name": "GridContainer_vuhlek9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Casual",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.OWCPartsInfoDS_OWCCasualCheck_ohn1jss",
					"labelPosition": "above",
					"control": "$OWCPartsInfoDS_OWCCasualCheck_ohn1jss",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vuhlek9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PartsList",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCPartsInfoDS_OWCPartsList_l9qd3hc",
					"labelPosition": "above",
					"control": "$OWCPartsInfoDS_OWCPartsList_l9qd3hc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_vuhlek9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Quantity",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCPartsInfoDS_OWCQuantity_zqkg4xf",
					"labelPosition": "above",
					"control": "$OWCPartsInfoDS_OWCQuantity_zqkg4xf"
				},
				"parentName": "GridContainer_vuhlek9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MarkUp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCPartsInfoDS_OWCMarkUp_xlmcgq0",
					"labelPosition": "above",
					"control": "$OWCPartsInfoDS_OWCMarkUp_xlmcgq0"
				},
				"parentName": "GridContainer_vuhlek9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UnitPrice",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCPartsInfoDS_OWCUnitPrice_2fcosdo",
					"labelPosition": "above",
					"control": "$OWCPartsInfoDS_OWCUnitPrice_2fcosdo"
				},
				"parentName": "GridContainer_vuhlek9",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "InvoiceNumber",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCPartsInfoDS_OWCInvoiceNumber_e9ap9jm",
					"labelPosition": "above",
					"control": "$OWCPartsInfoDS_OWCInvoiceNumber_e9ap9jm"
				},
				"parentName": "GridContainer_vuhlek9",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_fl4u0bm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Description",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCPartsInfoDS_OWCDescription_iyiebmo",
					"labelPosition": "above",
					"control": "$OWCPartsInfoDS_OWCDescription_iyiebmo",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_fl4u0bm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Amount",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCPartsInfoDS_OWCAmount_g4xbuiz",
					"labelPosition": "above",
					"control": "$OWCPartsInfoDS_OWCAmount_g4xbuiz"
				},
				"parentName": "GridContainer_fl4u0bm",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"OWCPartsInfoDS_OWCCasualCheck_ohn1jss": {
						"modelConfig": {
							"path": "OWCPartsInfoDS.OWCCasualCheck"
						}
					},
					"OWCPartsInfoDS_OWCQuantity_zqkg4xf": {
						"modelConfig": {
							"path": "OWCPartsInfoDS.OWCQuantity"
						}
					},
					"OWCPartsInfoDS_OWCPartsList_l9qd3hc": {
						"modelConfig": {
							"path": "OWCPartsInfoDS.OWCPartsList"
						}
					},
					"OWCPartsInfoDS_OWCMarkUp_xlmcgq0": {
						"modelConfig": {
							"path": "OWCPartsInfoDS.OWCMarkUp"
						}
					},
					"OWCPartsInfoDS_OWCUnitPrice_2fcosdo": {
						"modelConfig": {
							"path": "OWCPartsInfoDS.OWCUnitPrice"
						}
					},
					"OWCPartsInfoDS_OWCInvoiceNumber_e9ap9jm": {
						"modelConfig": {
							"path": "OWCPartsInfoDS.OWCInvoiceNumber"
						}
					},
					"OWCPartsInfoDS_OWCDescription_iyiebmo": {
						"modelConfig": {
							"path": "OWCPartsInfoDS.OWCDescription"
						}
					},
					"OWCPartsInfoDS_OWCAmount_g4xbuiz": {
						"modelConfig": {
							"path": "OWCPartsInfoDS.OWCAmount"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"OWCPartsInfoDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "OWCPartsInfo",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "OWCPartsInfoDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});