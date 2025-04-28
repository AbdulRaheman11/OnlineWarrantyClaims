define("OWCRepairInfoLinewd", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"color": "accent",
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
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
				"name": "CardContentWrapper",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "CenterContainer",
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "partiallyColored",
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "organizational-structure-icon"
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "insert",
				"name": "Button_weiwysa",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_weiwysa_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "right-icon",
					"visible": true,
					"icon": "send-test-email-icon",
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "OWCPage_k3g3ip6"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_9org29j",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
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
					"borderRadius": "extra-small",
					"padding": {
						"top": "small",
						"right": "small",
						"bottom": "small",
						"left": "small"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_2nj3ati",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCRepairLineNumber_a7tuqbh",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCRepairLineNumber_a7tuqbh",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClaimTypeList",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCClaimTypeList_usizdns",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCClaimTypeList_usizdns",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_7uz6xn5",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCSubCode_dg7kk80",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCSubCode_dg7kk80",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_eits1z0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCRepairLineCompletionDate_akh09d7",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCRepairLineCompletionDate_akh09d7",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_xevxiwq",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCOdometerreadingatRepairCompletion_ov19ymb",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCOdometerreadingatRepairCompletion_ov19ymb",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_zk12ymg",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCCustomerConcernCode_sodzwnx",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCCustomerConcernCode_sodzwnx",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_n90x90h",
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
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_10h86jd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCApprovalCode1_7l8kczq",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCApprovalCode1_7l8kczq",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_n90x90h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_bgc2w50",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCApprovalCode2_xjfpffa",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCApprovalCode2_xjfpffa",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_n90x90h",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_3kjiy1k",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCPreDefinedRepairCode_yjgvv1p",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCPreDefinedRepairCode_yjgvv1p",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "NumberInput_5mqgkb9",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCEngineOperatingHoursatRepairCompletion_qroeeaf",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCEngineOperatingHoursatRepairCompletion_qroeeaf",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_e8jiv2i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCConvoyDeliveryDate_disfvar",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCConvoyDeliveryDate_disfvar",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "NumberInput_nnqrtmk",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCConditionCode_ee9f04c",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCConditionCode_ee9f04c",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Input_h83pc1m",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCCustomerParticipation_ma8dmlq",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCCustomerParticipation_ma8dmlq",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "Input_90godio",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCDealerParticipation_coti07v",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCDealerParticipation_coti07v",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "CustomerComments",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCCustomerComments_fmc33f8",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCCustomerComments_fmc33f8",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "TechnicianComments",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.OWCRepairOrderLineDS_OWCTechnicianComments_7elubow",
					"labelPosition": "above",
					"control": "$OWCRepairOrderLineDS_OWCTechnicianComments_7elubow",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9org29j",
				"propertyName": "items",
				"index": 14
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"OWCRepairOrderLineDS_OWCRepairLineNumber_a7tuqbh": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCRepairLineNumber"
						}
					},
					"OWCRepairOrderLineDS_OWCSubCode_dg7kk80": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCSubCode"
						}
					},
					"OWCRepairOrderLineDS_OWCRepairLineCompletionDate_akh09d7": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCRepairLineCompletionDate"
						}
					},
					"OWCRepairOrderLineDS_OWCOdometerreadingatRepairCompletion_ov19ymb": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCOdometerreadingatRepairCompletion"
						}
					},
					"OWCRepairOrderLineDS_OWCCustomerConcernCode_sodzwnx": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCCustomerConcernCode"
						}
					},
					"OWCRepairOrderLineDS_OWCApprovalCode1_7l8kczq": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCApprovalCode1"
						}
					},
					"OWCRepairOrderLineDS_OWCApprovalCode2_xjfpffa": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCApprovalCode2"
						}
					},
					"OWCRepairOrderLineDS_OWCEngineOperatingHoursatRepairCompletion_qroeeaf": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCEngineOperatingHoursatRepairCompletion"
						}
					},
					"OWCRepairOrderLineDS_OWCConvoyDeliveryDate_disfvar": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCConvoyDeliveryDate"
						}
					},
					"OWCRepairOrderLineDS_OWCConditionCode_ee9f04c": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCConditionCode"
						}
					},
					"OWCRepairOrderLineDS_OWCCustomerParticipation_ma8dmlq": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCCustomerParticipation"
						}
					},
					"OWCRepairOrderLineDS_OWCDealerParticipation_coti07v": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCDealerParticipation"
						}
					},
					"OWCRepairOrderLineDS_OWCPreDefinedRepairCode_yjgvv1p": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCPreDefinedRepairCode"
						}
					},
					"OWCRepairOrderLineDS_OWCCustomerComments_fmc33f8": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCCustomerComments"
						}
					},
					"OWCRepairOrderLineDS_OWCTechnicianComments_7elubow": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCTechnicianComments"
						}
					},
					"OWCRepairOrderLineDS_OWCClaimTypeList_usizdns": {
						"modelConfig": {
							"path": "OWCRepairOrderLineDS.OWCClaimTypeList"
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
					"primaryDataSourceName": "OWCRepairOrderLineDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"OWCRepairOrderLineDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "OWCRepairOrderLine"
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