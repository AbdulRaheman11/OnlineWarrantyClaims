define("OWCRepairLinePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"visible": false,
					"alignItems": "stretch",
					"justifyContent": "start",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"visible": false,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4jnj2ii",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "#CCEDFC",
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
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_p8bpjbb",
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
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": false,
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_4jnj2ii",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_64l3vxy",
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
					"padding": {
						"top": "large",
						"right": "large",
						"bottom": "small",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_4jnj2ii",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_RepairLine",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_RepairLine_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "GridContainer_64l3vxy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_p96yb1d",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "medium"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "extra-small",
						"right": "extra-small",
						"bottom": "extra-small",
						"left": "extra-small"
					},
					"color": "primary",
					"borderRadius": "small",
					"visible": true,
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_64l3vxy",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_u367py6",
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
				"parentName": "GridContainer_p96yb1d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RO_RepairLineNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairLineNumber_2fu2i4g",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCRepairLineNumber_2fu2i4g",
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(RO_RepairLineNumber_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RO_ClaimTypeList",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCClaimType_t05ays7",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCClaimType_t05ays7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(RO_ClaimTypeList_placeholder)#",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RO_SubCode",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCSubCode_dgzt93e",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCSubCode_dgzt93e",
					"placeholder": "",
					"visible": true,
					"readonly": false,
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RO_RepairLineCompletionDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairLineCompletionDate_r8qyp5a",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCRepairLineCompletionDate_r8qyp5a",
					"pickerType": "date",
					"placeholder": "#ResourceString(RO_RepairLineCompletionDate_placeholder)#",
					"visible": true,
					"readonly": false,
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RO_OdometerReadingatRepairCompletion",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCOdometerReadingatRepairCompletion_mvqo5cs",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCOdometerReadingatRepairCompletion_mvqo5cs",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RO_CustomerConcernCode",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCCustomerConcernCode_sua9z7g",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCCustomerConcernCode_sua9z7g",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_zdw9anu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
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
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "RO_ApprovalCode1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCApprovalCode1_am439sw",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCApprovalCode1_am439sw",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_zdw9anu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RO_ApprovalCode2",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCApprovalCode2_2qt34c6",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCApprovalCode2_2qt34c6",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_zdw9anu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RO_PreDefinedRepairCode",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCPreDefinedRepairCode_ega4g9j",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCPreDefinedRepairCode_ega4g9j",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "RO_EngineOperatingHoursAtRepairCompletion",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCEngineOperatingHoursAtRepairCompletion_uoeqeg4",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCEngineOperatingHoursAtRepairCompletion_uoeqeg4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "RO_ConvoyDeliveryDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCConvoyDeliveryDate_ht6me1y",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCConvoyDeliveryDate_ht6me1y",
					"pickerType": "date",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "RO_ConditionCode",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCConditionCode_jlmzm66",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCConditionCode_jlmzm66",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "RO_CustomerParticipation",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCCustomerParticipation_xhxo8v0",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCCustomerParticipation_xhxo8v0",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "RO_DealerParticipation",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCDealerParticipation_wxfev7l",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCDealerParticipation_wxfev7l",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "RO_CustomerComments",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCCustomerComments_x0sn5e0",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCCustomerComments_x0sn5e0",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "RO_TechnicianComments",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCTechnicianComments_qmprhk1",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCTechnicianComments_qmprhk1",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_u367py6",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "GridContainer_fne5utx",
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
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_4jnj2ii",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_eg9ka6w",
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
				"parentName": "GridContainer_fne5utx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_u4vlll3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
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
					"justifyContent": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_eg9ka6w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Close_RL",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Close_RL_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default",
					"icon": "back-button-icon"
				},
				"parentName": "FlexContainer_u4vlll3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_k49ol2u",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_eg9ka6w",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_aalj0m3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_aalj0m3_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.CancelRecordChangesRequest"
					},
					"clickMode": "default",
					"icon": "close-button-icon"
				},
				"parentName": "FlexContainer_k49ol2u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zkbf4ou",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
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
				"parentName": "GridContainer_eg9ka6w",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Save_RL",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Save_RL_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "right-icon",
					"visible": true,
					"clicked": {
						"request": "crt.SaveRecordRequest",
						"params": {
							"showSuccessMessage": true,
							"preventCardClose": true
						}
					},
					"clickMode": "default",
					"icon": "download-button-icon"
				},
				"parentName": "FlexContainer_zkbf4ou",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2q9zrcv",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
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
					"justifyContent": "center",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_eg9ka6w",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Next_RL",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Next_RL_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "send-test-email-icon",
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "OWCROPartsInfoPage"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_2q9zrcv",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"OWCRepairOrderDS_OWCRepairLineNumber_2fu2i4g": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairLineNumber"
						}
					},
					"OWCRepairOrderDS_OWCClaimType_t05ays7": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCClaimType"
						}
					},
					"OWCRepairOrderDS_OWCSubCode_dgzt93e": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCSubCode"
						}
					},
					"OWCRepairOrderDS_OWCRepairLineCompletionDate_r8qyp5a": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairLineCompletionDate"
						}
					},
					"OWCRepairOrderDS_OWCOdometerReadingatRepairCompletion_mvqo5cs": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCOdometerReadingatRepairCompletion"
						}
					},
					"OWCRepairOrderDS_OWCCustomerConcernCode_sua9z7g": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCCustomerConcernCode"
						}
					},
					"OWCRepairOrderDS_OWCApprovalCode1_am439sw": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCApprovalCode1"
						}
					},
					"OWCRepairOrderDS_OWCApprovalCode2_2qt34c6": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCApprovalCode2"
						}
					},
					"OWCRepairOrderDS_OWCPreDefinedRepairCode_ega4g9j": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCPreDefinedRepairCode"
						}
					},
					"OWCRepairOrderDS_OWCEngineOperatingHoursAtRepairCompletion_uoeqeg4": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCEngineOperatingHoursAtRepairCompletion"
						}
					},
					"OWCRepairOrderDS_OWCConvoyDeliveryDate_ht6me1y": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCConvoyDeliveryDate"
						}
					},
					"OWCRepairOrderDS_OWCConditionCode_jlmzm66": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCConditionCode"
						}
					},
					"OWCRepairOrderDS_OWCCustomerParticipation_xhxo8v0": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCCustomerParticipation"
						}
					},
					"OWCRepairOrderDS_OWCDealerParticipation_wxfev7l": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCDealerParticipation"
						}
					},
					"OWCRepairOrderDS_OWCCustomerComments_x0sn5e0": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCCustomerComments"
						}
					},
					"OWCRepairOrderDS_OWCTechnicianComments_qmprhk1": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCTechnicianComments"
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
					"primaryDataSourceName": "OWCRepairOrderDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"OWCRepairOrderDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "OWCRepairOrder",
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
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});