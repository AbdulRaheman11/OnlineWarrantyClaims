define("OWCClaim_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "OWCROMainPage"
						}
					},
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "OWCRepairOrder"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "OWCRepairOrder"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_OWCRepairOrderNumber",
							"caption": "#ResourceString(PDS_OWCRepairOrderNumber)#",
							"dataValueType": 1,
							"width": 210
						},
						{
							"id": "2c626998-3d07-0869-5ad7-03dc4daea0e6",
							"code": "PDS_OWCVINNumber",
							"caption": "#ResourceString(PDS_OWCVINNumber)#",
							"dataValueType": 10,
							"width": 199
						},
						{
							"id": "d68c6005-1333-e3e0-5a9f-362880099043",
							"code": "PDS_OWCVehicleName",
							"caption": "#ResourceString(PDS_OWCVehicleName)#",
							"dataValueType": 10,
							"width": 180
						},
						{
							"id": "3c5dc934-47ba-b66c-14f2-33f952842366",
							"code": "PDS_OWCRepairOrderOpenDate",
							"caption": "#ResourceString(PDS_OWCRepairOrderOpenDate)#",
							"dataValueType": 8,
							"width": 210
						},
						{
							"id": "15dd4c9a-84f9-550f-3b46-b77ae5734680",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_OWCRepairOrderNumber": {
						"modelConfig": {
							"path": "PDS.OWCRepairOrderNumber"
						}
					},
					"PDS_OWCVINNumber": {
						"modelConfig": {
							"path": "PDS.OWCVINNumber"
						}
					},
					"PDS_OWCVehicleName": {
						"modelConfig": {
							"path": "PDS.OWCVehicleName"
						}
					},
					"PDS_OWCRepairOrderOpenDate": {
						"modelConfig": {
							"path": "PDS.OWCRepairOrderOpenDate"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
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
					"config"
				],
				"values": {
					"entitySchemaName": "OWCRepairOrder",
					"attributes": {
						"OWCRepairOrderNumber": {
							"path": "OWCRepairOrderNumber"
						},
						"OWCVINNumber": {
							"path": "OWCVINNumber"
						},
						"OWCVehicleName": {
							"path": "OWCVehicleName"
						},
						"OWCRepairOrderOpenDate": {
							"path": "OWCRepairOrderOpenDate"
						},
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"CreatedOn": {
							"path": "CreatedOn"
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