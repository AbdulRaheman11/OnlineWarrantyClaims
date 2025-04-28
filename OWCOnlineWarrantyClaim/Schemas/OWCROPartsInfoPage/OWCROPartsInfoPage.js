define("OWCROPartsInfoPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"parentName": "FlexContainer_hd5w7d4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"caption": "#ResourceString(CancelButton_caption)#",
					"color": "outline",
					"size": "large",
					"iconPosition": "left-icon",
					"clickMode": "default",
					"icon": "close-button-icon"
				}
			},
			{
				"operation": "move",
				"name": "CancelButton",
				"parentName": "FlexContainer_u3e82fn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"color": "outline",
					"caption": "#ResourceString(CloseButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default",
					"icon": null
				}
			},
			{
				"operation": "move",
				"name": "CloseButton",
				"parentName": "MainHeaderTop",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"color": "#CCEDFC",
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_t2rn9j9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_t2rn9j9_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_6mwm7hw",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_t2rn9j9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_anc8fvv",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_6mwm7hw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_rtaz50f",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_rtaz50f_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "OWCPartsInfo",
							"defaultValues": [
								{
									"attributeName": "OWCRepairOrder",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_anc8fvv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_fvt0stk",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_t2rn9j9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VehiclePartsInfo_List",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_yowwbgw",
					"activeRow": "$GridDetail_yowwbgw_ActiveRow",
					"selectionState": "$GridDetail_yowwbgw_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_yowwbgw_SelectionState"
					},
					"primaryColumnName": "GridDetail_yowwbgwDS_Id",
					"columns": [
						{
							"id": "649922a5-8291-5921-afd1-da9eccd88d3f",
							"code": "GridDetail_yowwbgwDS_OWCCasual",
							"caption": "#ResourceString(GridDetail_yowwbgwDS_OWCCasual)#",
							"dataValueType": 28,
							"width": 153.98843383789062
						},
						{
							"id": "6156177e-e4bf-b7d3-20aa-f268079f14af",
							"code": "GridDetail_yowwbgwDS_OWCPartNumber",
							"caption": "#ResourceString(GridDetail_yowwbgwDS_OWCPartNumber)#",
							"dataValueType": 27,
							"width": 153.98843383789062
						},
						{
							"id": "eefe97b3-9fb3-41d4-63a0-2341ff490549",
							"code": "GridDetail_yowwbgwDS_OWCDescription",
							"caption": "#ResourceString(GridDetail_yowwbgwDS_OWCDescription)#",
							"dataValueType": 28,
							"width": 180.98843383789062
						},
						{
							"id": "f021c67b-3f7f-cc3b-9b3b-890d14c6abad",
							"code": "GridDetail_yowwbgwDS_OWCQuantity",
							"caption": "#ResourceString(GridDetail_yowwbgwDS_OWCQuantity)#",
							"dataValueType": 4,
							"width": 115.98843383789062
						},
						{
							"id": "1b876e98-720e-8068-ba47-fcb6797cbceb",
							"code": "GridDetail_yowwbgwDS_OWCUnitPrice",
							"caption": "#ResourceString(GridDetail_yowwbgwDS_OWCUnitPrice)#",
							"dataValueType": 32,
							"width": 122.98843383789062
						},
						{
							"id": "6c14d54e-ad0e-4589-cfe1-04d8a038f571",
							"code": "GridDetail_yowwbgwDS_OWCInvoiceNumber",
							"caption": "#ResourceString(GridDetail_yowwbgwDS_OWCInvoiceNumber)#",
							"dataValueType": 28,
							"width": 130.98843383789062
						},
						{
							"id": "0ac2a2a0-41bb-de30-4a0e-a31972ecdb1c",
							"code": "GridDetail_yowwbgwDS_OWCMarkUp",
							"caption": "#ResourceString(GridDetail_yowwbgwDS_OWCMarkUp)#",
							"dataValueType": 27,
							"width": 137.98843383789062
						},
						{
							"id": "5f831fa2-6ab8-5758-1522-bf0838ec5cd4",
							"code": "GridDetail_yowwbgwDS_OWCAmount",
							"caption": "#ResourceString(GridDetail_yowwbgwDS_OWCAmount)#",
							"dataValueType": 6
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_fvt0stk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_yowwbgw_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_yowwbgwDS",
							"filters": "$GridDetail_yowwbgw | crt.ToCollectionFilters : 'GridDetail_yowwbgw' : $GridDetail_yowwbgw_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_yowwbgw_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VehiclePartsInfo_List",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_yowwbgw_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_yowwbgwDS",
							"filters": "$GridDetail_yowwbgw | crt.ToCollectionFilters : 'GridDetail_yowwbgw' : $GridDetail_yowwbgw_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_yowwbgw_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_yowwbgw_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_yowwbgw_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VehiclePartsInfo_List",
							"filters": "$GridDetail_yowwbgw | crt.ToCollectionFilters : 'GridDetail_yowwbgw' : $GridDetail_yowwbgw_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_yowwbgw_SelectionState"
						}
					}
				},
				"parentName": "VehiclePartsInfo_List",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_yowwbgw_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_yowwbgwDS",
							"filters": "$GridDetail_yowwbgw | crt.ToCollectionFilters : 'GridDetail_yowwbgw' : $GridDetail_yowwbgw_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_yowwbgw_SelectionState"
						}
					}
				},
				"parentName": "VehiclePartsInfo_List",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_t45vvm8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
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
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_fm99io5",
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
						"top": "medium",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_pynevha",
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
				"parentName": "GridContainer_fm99io5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CloseButton_PartsInfo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CloseButton_PartsInfo_caption)#",
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
				"parentName": "FlexContainer_pynevha",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_u3e82fn",
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
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_fm99io5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_hd5w7d4",
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
				"parentName": "GridContainer_fm99io5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_qdz4grj",
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
				"parentName": "GridContainer_fm99io5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PartsInfo_Next_Button",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PartsInfo_Next_Button_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "right-icon",
					"visible": true,
					"icon": "send-test-email-icon"
				},
				"parentName": "FlexContainer_qdz4grj",
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
					"GridDetail_yowwbgw": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_yowwbgwDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_yowwbgwDS_OWCCasual": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.OWCCasual"
									}
								},
								"GridDetail_yowwbgwDS_OWCPartNumber": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.OWCPartNumber"
									}
								},
								"GridDetail_yowwbgwDS_OWCDescription": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.OWCDescription"
									}
								},
								"GridDetail_yowwbgwDS_OWCQuantity": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.OWCQuantity"
									}
								},
								"GridDetail_yowwbgwDS_OWCUnitPrice": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.OWCUnitPrice"
									}
								},
								"GridDetail_yowwbgwDS_OWCInvoiceNumber": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.OWCInvoiceNumber"
									}
								},
								"GridDetail_yowwbgwDS_OWCMarkUp": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.OWCMarkUp"
									}
								},
								"GridDetail_yowwbgwDS_OWCAmount": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.OWCAmount"
									}
								},
								"GridDetail_yowwbgwDS_Id": {
									"modelConfig": {
										"path": "GridDetail_yowwbgwDS.Id"
									}
								}
							}
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
						"GridDetail_yowwbgwDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "OWCPartsInfo",
								"attributes": {
									"OWCCasual": {
										"path": "OWCCasual"
									},
									"OWCPartNumber": {
										"path": "OWCPartNumber"
									},
									"OWCDescription": {
										"path": "OWCDescription"
									},
									"OWCQuantity": {
										"path": "OWCQuantity"
									},
									"OWCUnitPrice": {
										"path": "OWCUnitPrice"
									},
									"OWCInvoiceNumber": {
										"path": "OWCInvoiceNumber"
									},
									"OWCMarkUp": {
										"path": "OWCMarkUp"
									},
									"OWCAmount": {
										"path": "OWCAmount"
									}
								}
							}
						},
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
					},
					"primaryDataSourceName": "OWCRepairOrderDS",
					"dependencies": {
						"GridDetail_yowwbgwDS": [
							{
								"attributePath": "OWCRepairOrder",
								"relationPath": "OWCRepairOrderDS.Id"
							}
						]
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});