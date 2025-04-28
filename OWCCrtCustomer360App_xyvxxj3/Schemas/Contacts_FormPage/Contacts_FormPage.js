define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"labelColor": "#181818",
					"visible": true,
					"headingLevel": "h2"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "OWCRepairScreen"
						}
					},
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "right-icon",
					"clickMode": "default",
					"icon": "send-test-email-icon"
				}
			},
			{
				"operation": "merge",
				"name": "SetRecordRightsButton",
				"values": {
					"caption": "#ResourceString(SetRecordRightsButton_caption)#",
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "MainHeaderBottom",
				"values": {
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToolsContainer",
				"values": {
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"direction": "row",
					"gap": "small",
					"wrap": "wrap"
				}
			},
			{
				"operation": "merge",
				"name": "SideContainer",
				"values": {
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"visible": false,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "AccountInfoContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "fullyColored",
					"visible": false,
					"stretch": true
				}
			},
			{
				"operation": "move",
				"name": "Tabs",
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "left-icon",
					"icon": "contact-icon"
				}
			},
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": false,
					"readonly": true
				}
			},
			{
				"operation": "move",
				"name": "Type",
				"parentName": "GridContainer_yoiarod",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": false,
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "Dear",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": false,
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "Gender",
				"values": {
					"visible": false,
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "SalutationType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": false,
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "Language",
				"values": {
					"visible": false,
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "AddressExpansionPanel",
				"values": {
					"visible": false,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "AddressList",
				"values": {
					"columns": [
						{
							"id": "f23578a3-5240-8392-aef6-3253dff5ae76",
							"code": "AddressListDS_AddressType",
							"caption": "#ResourceString(AddressListDS_AddressType)#",
							"dataValueType": 10
						},
						{
							"id": "4be2e359-5a70-b554-e073-8a29454f5534",
							"code": "AddressListDS_FullAddress",
							"caption": "#ResourceString(AddressListDS_FullAddress)#",
							"dataValueType": 29,
							"width": 426
						},
						{
							"id": "8da98b54-1433-0020-cd5b-1bf019a13f42",
							"code": "AddressListDS_Primary",
							"caption": "#ResourceString(AddressListDS_Primary)#",
							"dataValueType": 12
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "CareerExpansionPanel",
				"values": {
					"visible": false,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "TimelineTab"
			},
			{
				"operation": "remove",
				"name": "GridContainer_4fm3l31"
			},
			{
				"operation": "remove",
				"name": "Timeline"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Email"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Task"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Call"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_SysFile"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Feed"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_OmniChat"
			},
			{
				"operation": "insert",
				"name": "Label_uz0auxi",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_uz0auxi_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "bold",
					"labelEllipsis": false,
					"labelColor": "#D2310D",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "h2",
					"visible": false
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_yoiarod",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
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
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_bq9ys3x",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
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
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_10rrlso",
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
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "medium"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "small",
					"padding": {
						"top": "large",
						"right": "large",
						"bottom": "large",
						"left": "large"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_bq9ys3x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DealerName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Name_hermg4w",
					"labelPosition": "above",
					"control": "$PDS_Name_hermg4w",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_10rrlso",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_n1o3wtw",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_OWCDealerCodeOWCSuffix_qj2ind1",
					"labelPosition": "above",
					"control": "$PDS_OWCDealerCodeOWCSuffix_qj2ind1",
					"readonly": true,
					"multiline": false,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_10rrlso",
				"propertyName": "items",
				"index": 1
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
					"label": "$Resources.Strings.PDS_OWCDealerCode_gk1vous",
					"labelPosition": "above",
					"control": "$PDS_OWCDealerCode_gk1vous",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_10rrlso",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CountryCode",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(CountryCode_label)#",
					"control": "$PDS_CountryName_xcz63h4",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_10rrlso",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_smd3bfc",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_OWCDealerCodeDescription_71a4q3a",
					"labelPosition": "auto",
					"control": "$PDS_OWCDealerCodeDescription_71a4q3a",
					"readonly": true,
					"multiline": false,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
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
					"PDS_OWCDealerCode_gk1vous": {
						"modelConfig": {
							"path": "PDS.OWCDealerCode"
						}
					},
					"PDS_OWCDealerCodeDescription_71a4q3a": {
						"modelConfig": {
							"path": "PDS.OWCDealerCodeDescription_71a4q3a"
						}
					},
					"PDS_CountryName_xcz63h4": {
						"modelConfig": {
							"path": "PDS.CountryName_xcz63h4"
						}
					},
					"PDS_OWCDealerCodeOWCSuffix_qj2ind1": {
						"modelConfig": {
							"path": "PDS.OWCDealerCodeOWCSuffix_qj2ind1"
						}
					},
					"PDS_Name_hermg4w": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"OWCDealerCodeDescription_71a4q3a": {
						"path": "OWCDealerCode.Description",
						"type": "ForwardReference"
					},
					"CountryName_xcz63h4": {
						"path": "Country.Name",
						"type": "ForwardReference"
					},
					"OWCDealerCodeOWCSuffix_qj2ind1": {
						"path": "OWCDealerCode.OWCSuffix",
						"type": "ForwardReference"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});