define("OWCPage_qytwkzt", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "Input_i4b5jcp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVIN_cktoshr",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCVIN_cktoshr"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_w3l9a84",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVehicle_b4jspe4",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCVehicle_b4jspe4"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_r0l0wos",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCServiceAdvisorID_3us3ue1",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCServiceAdvisorID_3us3ue1"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_qqe4hkc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairOrderNumber_2sjoapv",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCRepairOrderNumber_2sjoapv"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_4r5z5ry",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairOrderOpenDate_wphdjx4",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCRepairOrderOpenDate_wphdjx4"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_0rmc3si",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCOdometerReadingatROOpen_by60x99",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCOdometerReadingatROOpen_by60x99"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_yzx8ao5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCSpecialUseVehicleDescription_cqcbt0p",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCSpecialUseVehicleDescription_cqcbt0p"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_mlcwfzm",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_ymjym4d",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_ymjym4d"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_i9k3m9l",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCLicenseState_6ictuza",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCLicenseState_6ictuza"
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
					"OWCRepairOrderDS_OWCVIN_cktoshr": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVIN"
						}
					},
					"OWCRepairOrderDS_OWCVehicle_b4jspe4": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVehicle"
						}
					},
					"OWCRepairOrderDS_OWCServiceAdvisorID_3us3ue1": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCServiceAdvisorID"
						}
					},
					"OWCRepairOrderDS_OWCRepairOrderNumber_2sjoapv": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairOrderNumber"
						}
					},
					"OWCRepairOrderDS_OWCRepairOrderOpenDate_wphdjx4": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairOrderOpenDate"
						}
					},
					"OWCRepairOrderDS_OWCOdometerReadingatROOpen_by60x99": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCOdometerReadingatROOpen"
						}
					},
					"OWCRepairOrderDS_OWCSpecialUseVehicleDescription_cqcbt0p": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCSpecialUseVehicleDescription"
						}
					},
					"OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_ymjym4d": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCEngineOperatingHoursatROOpen"
						}
					},
					"OWCRepairOrderDS_OWCLicenseState_6ictuza": {
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