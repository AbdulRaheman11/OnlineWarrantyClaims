define("OWCRepairScreen", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"clicked": {
						"request": "crt.SaveRecordRequest",
						"params": {
							"preventCardClose": true
						}
					},
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
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
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
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
						"rowGap": "none"
					},
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
				}
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
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "OWCProcess_70e9a1c",
							"processRunType": "RegardlessOfThePage",
							"saveAtProcessStart": true,
							"showNotification": true
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
				"name": "Input_pzxnydz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVIN_24otjz6",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCVIN_24otjz6"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_7sgw9q9",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVehicle_e8ts9nn",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCVehicle_e8ts9nn"
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
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCServiceAdvisorID_pkcmvbu"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_xcidwy1",
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
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCRepairOrderNumber_d7pgrxj"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_f9m6haj",
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
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCRepairOrderOpenDate_e4bha8v"
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
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCOdometerReadingatROOpen_toagi3n"
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
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCSpecialUseVehicleDescription_4cioemw"
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
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_n8kcih5"
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
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCLicenseState_fa442gn"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"OWCRepairOrderDS_OWCVIN_24otjz6": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVIN"
						}
					},
					"OWCRepairOrderDS_OWCVehicle_e8ts9nn": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVehicle"
						}
					},
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
							"entitySchemaName": "OWCRepairOrder"
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