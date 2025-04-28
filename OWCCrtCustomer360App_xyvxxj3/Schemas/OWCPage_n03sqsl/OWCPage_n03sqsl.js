define("OWCPage_n03sqsl", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"color": "#CCEDFC",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"borderRadius": "large"
				}
			},
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"labelThickness": "semibold",
					"labelTextAlign": "center",
					"visible": true,
					"headingLevel": "label"
				}
			},
			{
				"operation": "move",
				"name": "PageTitle",
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "remove",
				"name": "CloseButton"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"gap": {
						"columnGap": "medium",
						"rowGap": "extra-small"
					},
					"color": "#EDF8CB",
					"borderRadius": "large",
					"padding": {
						"top": "small",
						"right": "medium",
						"bottom": "small",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"caption": "#ResourceString(CancelButton_caption)#",
					"color": "warn",
					"size": "large",
					"iconPosition": "left-icon",
					"clickMode": "default",
					"icon": "close-button-icon"
				}
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "insert",
				"name": "FlexContainer_e1dms4g",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"alignItems": "stretch",
					"justifyContent": "end",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_hj9y7fq",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "primary",
					"borderRadius": "small",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_juu9v68",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_juu9v68_caption)#)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "#4F43C1",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": false
				},
				"parentName": "GridContainer_hj9y7fq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_uhckq8n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.ContactDS_Name_a277209",
					"labelPosition": "left",
					"control": "$ContactDS_Name_a277209",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DealerCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ContactDS_OWCDealerCode_0ds9lcf",
					"labelPosition": "left",
					"control": "$ContactDS_OWCDealerCode_0ds9lcf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_9ho90vw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.ContactDS_OWCDealerCodeOWCSuffix_wo9gaob",
					"control": "$ContactDS_OWCDealerCodeOWCSuffix_wo9gaob",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "left",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_5kr3oyf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_5kr3oyf_label)#",
					"control": "$ContactDS_CountryName_1mshyxf",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "left",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ContactDS_Name_a277209": {
						"modelConfig": {
							"path": "ContactDS.Name"
						}
					},
					"ContactDS_OWCDealerCode_0ds9lcf": {
						"modelConfig": {
							"path": "ContactDS.OWCDealerCode"
						}
					},
					"ContactDS_OWCDealerCodeOWCSuffix_wo9gaob": {
						"modelConfig": {
							"path": "ContactDS.OWCDealerCodeOWCSuffix_wo9gaob"
						}
					},
					"ContactDS_CountryName_1mshyxf": {
						"modelConfig": {
							"path": "ContactDS.CountryName_1mshyxf"
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
						"ContactDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "Contact",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										}
									}
								},
								"allowCopyingRecords": false,
								"attributes": {
									"OWCDealerCodeOWCSuffix_wo9gaob": {
										"path": "OWCDealerCode.OWCSuffix",
										"type": "ForwardReference"
									},
									"CountryName_1mshyxf": {
										"path": "Country.Name",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "ContactDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});