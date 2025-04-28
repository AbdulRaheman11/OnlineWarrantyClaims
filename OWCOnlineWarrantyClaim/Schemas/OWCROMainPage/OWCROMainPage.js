define("OWCROMainPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"visible": true,
					"color": "#CBE8FA",
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
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
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
				"name": "FlexContainer_6dv8sr9",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "large",
						"right": "medium",
						"bottom": "large",
						"left": "medium"
					},
					"alignItems": "center",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_zdqp8ew",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_zdqp8ew_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "FlexContainer_6dv8sr9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DealerName",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCDealer_9c0dkp5",
					"labelPosition": "hidden",
					"control": "$OWCRepairOrderDS_OWCDealer_9c0dkp5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_6dv8sr9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_uso8xv6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_uso8xv6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DealerName",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_yh616a8",
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
				"parentName": "FlexContainer_6dv8sr9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Status_Input",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCStatus_t6igczx",
					"labelPosition": "left",
					"control": "$OWCRepairOrderDS_OWCStatus_t6igczx",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_6dv8sr9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabPanel_dz1lhhg",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "fullyColored",
					"bodyBackgroundColor": "#FFFFFF",
					"tabTitleColor": "#000000",
					"selectedTabTitleColor": "#FD3F11",
					"headerBackgroundColor": "crt-color-celestial-blue-pastel",
					"underlineSelectedTabColor": "auto",
					"fitContent": true,
					"visible": true,
					"stretch": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RepairOrder_TabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(RepairOrder_TabContainer_caption)#",
					"iconPosition": "only-text",
					"visible": true,
					"icon": null
				},
				"parentName": "TabPanel_dz1lhhg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_y9s34g5",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)"
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
				},
				"parentName": "RepairOrder_TabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_esdqrzb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_esdqrzb_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "bold",
					"labelEllipsis": false,
					"labelColor": "#0557E4",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "GridContainer_y9s34g5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_qiqatku",
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
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_y9s34g5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "VINNumber_ComboBox",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVINNumber_wo6t4nm",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCVINNumber_wo6t4nm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VINName_ComboBox",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCVehicleName_krsjtk3",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCVehicleName_krsjtk3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceAdvisorID_Input",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCServiceAdvisorID_5q42n93",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCServiceAdvisorID_5q42n93",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RepairOrderNumber_Input",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairOrderNumber_5r3j20h",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCRepairOrderNumber_5r3j20h",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RepairOrderOpenDate_DateTimePicker",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairOrderOpenDate_zd54tve",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCRepairOrderOpenDate_zd54tve",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "OdometerReading_Input",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCOdometerReadingatROOpen_hru0bwf",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCOdometerReadingatROOpen_hru0bwf",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "SpecialUseVehicleDesc_Input",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCSpecialUseVehicleDescription_jslzod0",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCSpecialUseVehicleDescription_jslzod0",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "EngineOperatingHours_Number",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_110h10x",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_110h10x",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LicenseState_Input",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCLicenseState_knma57e",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCLicenseState_knma57e",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qiqatku",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "RepairLine_TabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(RepairLine_TabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "contact-icon"
				},
				"parentName": "TabPanel_dz1lhhg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_3tlqfup",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
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
				},
				"parentName": "RepairLine_TabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_o99n4tb",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)"
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
				},
				"parentName": "RepairLine_TabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_9m5fuin",
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
						"rowGap": "medium"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "small",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_o99n4tb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RepairLineNumber_Input",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairLineNumber_7v6l6ns",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCRepairLineNumber_7v6l6ns",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9m5fuin",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClaimType_ComboBox",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCClaimType_fn42j8s",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCClaimType_fn42j8s",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9m5fuin",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_esvrjr0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_esvrjr0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ClaimType_ComboBox",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubCode_Input",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCSubCode_7kzibgv",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCSubCode_7kzibgv",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9m5fuin",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RepairLineCompletionDate_DateTimePicker",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCRepairLineCompletionDate_7b2fx31",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCRepairLineCompletionDate_7b2fx31",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9m5fuin",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OdometerReadingatRepairCompletion",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCOdometerReadingatRepairCompletion_agzvhnt",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCOdometerReadingatRepairCompletion_agzvhnt",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9m5fuin",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CustomerConcernCode_Input",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCCustomerConcernCode_eyzmjw2",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCCustomerConcernCode_eyzmjw2",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9m5fuin",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_46gyvhu",
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
				"parentName": "GridContainer_9m5fuin",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ApprovalCode1_Input",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCApprovalCode1_4ey5ydh",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCApprovalCode1_4ey5ydh",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_46gyvhu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalCode2_Input",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCApprovalCode2_eql1q0t",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCApprovalCode2_eql1q0t",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_46gyvhu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PreDefinedRepairCode_Input",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCPreDefinedRepairCode_v8pdd7f",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCPreDefinedRepairCode_v8pdd7f"
				},
				"parentName": "GridContainer_9m5fuin",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "EngineOperatingHoursAtRepairCompletion",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OWCRepairOrderDS_OWCEngineOperatingHoursAtRepairCompletion_ltomu6b",
					"labelPosition": "above",
					"control": "$OWCRepairOrderDS_OWCEngineOperatingHoursAtRepairCompletion_ltomu6b",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_9m5fuin",
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
					"OWCRepairOrderDS_OWCDealer_9c0dkp5": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCDealer"
						}
					},
					"OWCRepairOrderDS_OWCVINNumber_wo6t4nm": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVINNumber"
						}
					},
					"OWCRepairOrderDS_OWCVehicleName_krsjtk3": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCVehicleName"
						}
					},
					"OWCRepairOrderDS_OWCServiceAdvisorID_5q42n93": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCServiceAdvisorID"
						}
					},
					"OWCRepairOrderDS_OWCRepairOrderNumber_5r3j20h": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairOrderNumber"
						}
					},
					"OWCRepairOrderDS_OWCRepairOrderOpenDate_zd54tve": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairOrderOpenDate"
						}
					},
					"OWCRepairOrderDS_OWCOdometerReadingatROOpen_hru0bwf": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCOdometerReadingatROOpen"
						}
					},
					"OWCRepairOrderDS_OWCSpecialUseVehicleDescription_jslzod0": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCSpecialUseVehicleDescription"
						}
					},
					"OWCRepairOrderDS_OWCEngineOperatingHoursatROOpen_110h10x": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCEngineOperatingHoursatROOpen"
						}
					},
					"OWCRepairOrderDS_OWCLicenseState_knma57e": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCLicenseState"
						}
					},
					"OWCRepairOrderDS_OWCStatus_t6igczx": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCStatus"
						}
					},
					"OWCRepairOrderDS_OWCRepairLineNumber_7v6l6ns": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairLineNumber"
						}
					},
					"OWCRepairOrderDS_OWCClaimType_fn42j8s": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCClaimType"
						}
					},
					"OWCRepairOrderDS_OWCSubCode_7kzibgv": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCSubCode"
						}
					},
					"OWCRepairOrderDS_OWCRepairLineCompletionDate_7b2fx31": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCRepairLineCompletionDate"
						}
					},
					"OWCRepairOrderDS_OWCOdometerReadingatRepairCompletion_agzvhnt": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCOdometerReadingatRepairCompletion"
						}
					},
					"OWCRepairOrderDS_OWCCustomerConcernCode_eyzmjw2": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCCustomerConcernCode"
						}
					},
					"OWCRepairOrderDS_OWCApprovalCode1_4ey5ydh": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCApprovalCode1"
						}
					},
					"OWCRepairOrderDS_OWCApprovalCode2_eql1q0t": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCApprovalCode2"
						}
					},
					"OWCRepairOrderDS_OWCPreDefinedRepairCode_v8pdd7f": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCPreDefinedRepairCode"
						}
					},
					"OWCRepairOrderDS_OWCEngineOperatingHoursAtRepairCompletion_ltomu6b": {
						"modelConfig": {
							"path": "OWCRepairOrderDS.OWCEngineOperatingHoursAtRepairCompletion"
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