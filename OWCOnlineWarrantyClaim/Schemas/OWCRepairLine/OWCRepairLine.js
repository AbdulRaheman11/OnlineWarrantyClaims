define("OWCRepairLine", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "Input_r30cbql",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVIN_y896q87",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCVIN_y896q87"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_t1y4ylu",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVehicle_6zww0hw",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCVehicle_6zww0hw"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_awm07qc",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCServiceAdvisorID_eifpd1k",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCServiceAdvisorID_eifpd1k"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_39q84rt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairOrderNumber_wnwyw0o",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCRepairOrderNumber_wnwyw0o"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_gm07ntj",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairOrderOpenDate_e8q4ugz",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCRepairOrderOpenDate_e8q4ugz"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_f9qqiyf",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCOdometerReadingatROOpen_27ibnkx",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCOdometerReadingatROOpen_27ibnkx"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_q0ndyl7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCSpecialUseVehicleDescription_u5ejeqd",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCSpecialUseVehicleDescription_u5ejeqd"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_iqa5non",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_l2ovl6f",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_l2ovl6f"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_dkr0v6d",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCLicenseState_ob5rqx0",
					"labelPosition": "auto",
					"control": "$OWCRepairOrderDS_OWCLicenseState_ob5rqx0"
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
					"OWCRepairOrderDS_OWCVIN_y896q87": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVIN"
						}
					},
					"OWCRepairOrderDS_OWCVehicle_6zww0hw": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVehicle"
						}
					},
					"OWCRepairOrderDS_OWCServiceAdvisorID_eifpd1k": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCServiceAdvisorID"
						}
					},
					"OWCRepairOrderDS_OWCRepairOrderNumber_wnwyw0o": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairOrderNumber"
						}
					},
					"OWCRepairOrderDS_OWCRepairOrderOpenDate_e8q4ugz": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairOrderOpenDate"
						}
					},
					"OWCRepairOrderDS_OWCOdometerReadingatROOpen_27ibnkx": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCOdometerReadingatROOpen"
						}
					},
					"OWCRepairOrderDS_OWCSpecialUseVehicleDescription_u5ejeqd": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCSpecialUseVehicleDescription"
						}
					},
					"OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_l2ovl6f": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCEngineOperatingHoursatROOpen"
						}
					},
					"OWCRepairOrderDS_OWCLicenseState_ob5rqx0": {
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