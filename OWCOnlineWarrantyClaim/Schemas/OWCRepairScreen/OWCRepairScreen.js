define("OWCRepairScreen", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"clicked": {
						"request": "crt.SaveRecordRequest",
						"params": {
							"preventCardClose": true,
							"showSuccessMessage": true,
							"messageTextAfterCompletion": "#ResourceString(SaveButton_clicked_params_messageTextAfterCompletion)#"
						}
					},
					"color": "accent",
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "right-icon",
					"clickMode": "default",
					"icon": "download-button-icon"
				}
			},
			{
				"operation": "move",
				"name": "SaveButton",
				"parentName": "FlexContainer_emf6z1c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
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
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
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
				}
			},
			{
				"operation": "remove",
				"name": "CardContentWrapper"
			},
			{
				"operation": "remove",
				"name": "SideContainer"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "remove",
				"name": "CenterContainer"
			},
			{
				"operation": "remove",
				"name": "CardContentContainer"
			},
			{
				"operation": "remove",
				"name": "Tabs"
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab"
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "medium"
					},
					"visible": true,
					"color": "primary",
					"borderRadius": "small",
					"padding": {
						"top": "extra-small",
						"right": "medium",
						"bottom": "extra-small",
						"left": "medium"
					},
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "GeneralInfoTabContainer",
				"parentName": "GridContainer_ypiq58f",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "remove",
				"name": "CardToggleTabPanel"
			},
			{
				"operation": "remove",
				"name": "NextStepsTabContainer"
			},
			{
				"operation": "remove",
				"name": "NextStepsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "NextStepsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AddNextStepsButton"
			},
			{
				"operation": "remove",
				"name": "CreateTaskBtn"
			},
			{
				"operation": "remove",
				"name": "CreateEmailBtn"
			},
			{
				"operation": "remove",
				"name": "NextSteps"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "GridContainer_ga75inp",
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
				"name": "FlexContainer_zh6aa0m",
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
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "large",
						"right": "medium",
						"bottom": "large",
						"left": "medium"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_ga75inp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4frifr6",
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
					"alignItems": "center",
					"justifyContent": "end",
					"gap": "medium",
					"wrap": "wrap"
				},
				"parentName": "FlexContainer_zh6aa0m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_hyobih9",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_hyobih9_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "FlexContainer_4frifr6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_fd7rldi",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCDealer_9sjbs0a",
					"labelPosition": "hidden",
					"control": "$OWCRepairOrderDS_OWCDealer_9sjbs0a",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_zh6aa0m",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_em3bvn9",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_em3bvn9_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_fd7rldi",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status_Input",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCStatus_zd2m6n3",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCStatus_zd2m6n3",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_zh6aa0m",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ypiq58f",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "small",
						"rowGap": "small"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "medium",
						"left": "medium"
					},
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Label_tlu13ot",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_tlu13ot_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "bold",
					"labelEllipsis": false,
					"labelColor": "#1E53AE",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "GridContainer_ypiq58f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VINNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVINNumber_kp98g6b",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCVINNumber_kp98g6b",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(VINNumber_placeholder)#",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VehicleName",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVehicleName_au84q2y",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCVehicleName_au84q2y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(VehicleName_placeholder)#",
					"tooltip": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_xmfsbvg",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCServiceAdvisorID_pkcmvbu",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCServiceAdvisorID_pkcmvbu",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RepairOrderNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairOrderNumber_d7pgrxj",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCRepairOrderNumber_d7pgrxj",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RepairOrderOpenDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairOrderOpenDate_e4bha8v",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCRepairOrderOpenDate_e4bha8v",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_by8kvht",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCOdometerReadingatROOpen_toagi3n",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCOdometerReadingatROOpen_toagi3n",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_6asl5fk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCSpecialUseVehicleDescription_4cioemw",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCSpecialUseVehicleDescription_4cioemw",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_dpk6p2s",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_n8kcih5",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_n8kcih5",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_3px6zdm",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCLicenseState_fa442gn",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCLicenseState_fa442gn",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GridContainer_s4wckqm",
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
						"top": "small",
						"right": "medium",
						"bottom": "small",
						"left": "medium"
					},
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_n6v4w1z",
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
				"parentName": "GridContainer_s4wckqm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_yukkus9",
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
				"parentName": "GridContainer_n6v4w1z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_6tagjm8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_6tagjm8_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "back-button-icon",
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_yukkus9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_soul4gi",
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
				"parentName": "GridContainer_n6v4w1z",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "VIN_Cancel_Button",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(VIN_Cancel_Button_caption)#",
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
				"parentName": "FlexContainer_soul4gi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_emf6z1c",
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
				"parentName": "GridContainer_n6v4w1z",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_xr6nwh2",
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
				"parentName": "GridContainer_n6v4w1z",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NextButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(NextButton_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "right-icon",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "OWCRepairLinePage"
						}
					},
					"clickMode": "default",
					"icon": "send-test-email-icon"
				},
				"parentName": "FlexContainer_xr6nwh2",
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
					"OWCRepairOrderDS_OWCServiceAdvisorID_pkcmvbu": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCServiceAdvisorID"
						}
					},
					"OWCRepairOrderDS_OWCRepairOrderNumber_d7pgrxj": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairOrderNumber"
						}
					},
					"OWCRepairOrderDS_OWCRepairOrderOpenDate_e4bha8v": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairOrderOpenDate"
						}
					},
					"OWCRepairOrderDS_OWCOdometerReadingatROOpen_toagi3n": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCOdometerReadingatROOpen"
						}
					},
					"OWCRepairOrderDS_OWCSpecialUseVehicleDescription_4cioemw": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCSpecialUseVehicleDescription"
						}
					},
					"OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_n8kcih5": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCEngineOperatingHoursatROOpen"
						}
					},
					"OWCRepairOrderDS_OWCLicenseState_fa442gn": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCLicenseState"
						}
					},
					"OWCRepairOrderDS_OWCVINNumber_kp98g6b": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVINNumber"
						}
					},
					"OWCRepairOrderDS_OWCVehicleName_au84q2y": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVehicleName"
						}
					},
					"OWCRepairOrderDS_OWCDealer_9sjbs0a": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCDealer"
						}
					},
					"OWCRepairOrderDS_OWCStatus_zd2m6n3": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCStatus"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CardState"
				],
				"values": {
					"modelConfig": {}
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
							"attributes": {}
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