(function () {
    var initESW;
    window.addEventListener("dragover", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    window.addEventListener("drop", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
	   if (!document.getElementById('snapinAdditionalScriptSrc')) {
        var sfdc_script = document.createElement('script');
        sfdc_script.setAttribute('src','https://service.force.com/embeddedservice/5.0/esw.min.js');
        sfdc_script.id = 'snapinAdditionalScriptSrc';
        sfdc_script.type = 'text/javascript';
        document.head.appendChild(sfdc_script);   
    }
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();
function triggerPartnerPortalSnapin(partnerPortalDetails) {
    try {            
			let sfdcSnapinDetails = {
				    snapInInitURL: 'https://dellservices.my.salesforce.com',
					snapInLAURL: 'https://dellservices.secure.force.com/LASnapIn',
					organizationId: '00D0b000000GaMp',
					componentName: 'Partner_Snap_In',
					baseLiveAgentContentURL: 'https://c.la3-c1-ia2.salesforceliveagent.com/content',
                    deploymentId: '5720b000000GneC',
                    baseLiveAgentURL: 'https://d.la3-c1-ia2.salesforceliveagent.com/chat',
                    eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I2R000000PAwuUAG_1703a86ec04',
					snapInJs: 'https://dellservices.my.salesforce.com/embeddedservice/5.0/esw.min.js',
					buttonId: routingConfig(partnerPortalDetails),
					issueSubject: partnerPortalDetails.productGroup +" - "+ partnerPortalDetails.productType,
					logsCollected: checkLogGrants(partnerPortalDetails),
					concatenatedDescription: concatenatDescription(partnerPortalDetails),
					caseSeverityTxt: convertToSeverity(partnerPortalDetails.caseSeverity),
					loginIdNoSpace: loginIdNoSpace(partnerPortalDetails.loginId),
					validFirstName: firstNameValidator(partnerPortalDetails),
					serviceForceURL: "https://service.force.com",
		}
            var initESW = function (gslbBaseURL) {
                embedded_svc.settings.displayHelpButton = false;
                embedded_svc.settings.language = "en";
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
                embedded_svc.settings.defaultMinimizedText = 'Chat Now';
                
                embedded_svc.settings.directToButtonRouting = routingConfig(partnerPortalDetails);

				 embedded_svc.settings.extraPrechatFormDetails = [{
						"label": "Type",
						"value": 'Partner',
						"transcriptFields": ["Type__c"]
					},{
						"label": "Chat Source",
						"value": 'Partner',
						"transcriptFields": ["Chat_Source__c"]
					},{
						"label": "Product Group / Vendor",
						"value": partnerPortalDetails.productGroup,
						"transcriptFields": ["PP_Vendor_Product_Group__c"]
					},{
						"label": "Product Type / Vendor List",
						"value": partnerPortalDetails.productType,
						"transcriptFields": ["PP_Vendor_List_Product_Type__c"]
					},{
						"label": "Service Tag",
						"value": partnerPortalDetails.serviceTag,
						"transcriptFields": ["Service_Tag__c"]
					},{
						"label": "Service Tag",
						"value": partnerPortalDetails.serviceTag,
						"transcriptFields": ["Asset__c"],
						"displayToAgent": false
					},
					{
						"label": "Subject",
						"value": sfdcSnapinDetails.issueSubject,
						"transcriptFields": ["Issue__c"]
					},{
						"label":  "Issue Description",
						"value": sfdcSnapinDetails.concatenatedDescription,
						"transcriptFields": ["Description__c"]
					},{
						"label":  "Description",
						"value": sfdcSnapinDetails.concatenatedDescription,
						"transcriptFields": ["Collaborate_Description__c"]
					},{
                        "label": "First Name",
                        "name": "FirstName",
						"value": sfdcSnapinDetails.validFirstName,
                        "transcriptFields": ["FirstName__c"],
                        "displayToAgent": true
                    },{
                        "label": "Last Name",
                        "value": partnerPortalDetails.lastName,
                        "transcriptFields": ["LastName__c"],
                        "displayToAgent": true
                    },{
                        "label": "Email Address",
                        "value": partnerPortalDetails.email,
                        "transcriptFields": ["Email__c"]
                    },{
                        "label": "Agent Name",
                        "value": sfdcSnapinDetails.loginIdNoSpace,
                        "transcriptFields": ["Agent_Name__c"],
                        "displayToAgent": true
					},{
						"label":  "Badge",
						"value":  partnerPortalDetails.badgeId,
						"transcriptFields": ["PP_Badge__c"]
					},{
						"label":  "Location",
						"value": partnerPortalDetails.region,
						"transcriptFields": ["PP_Location__c"]
					},{
						"label":  "Case Number From Partner",
						"value": partnerPortalDetails.caseOrSr,
						"transcriptFields": ["PP_Case_Number_From_Partner__c"]
					},{
						"label":  "Product",
						"value": partnerPortalDetails.productName,
						"transcriptFields": ["PP_Product__c"]
					},{
						"label":  "Case Severity",
						"value": sfdcSnapinDetails.caseSeverityTxt,
						"transcriptFields": ["PP_Case_Severity__c"]
					},{
						"label":  "Customer Waiting",
						"value": partnerPortalDetails.customerOnThePhone,
						"transcriptFields": ["PP_Customer_Waiting__c"]
					},{
						"label":  "Driver/Firmware Updated",
						"value": partnerPortalDetails.driverFirmwareUpdated,
						"transcriptFields": ["PP_Driver_Firmware_Updated__c"]
					},{
						"label":  "Logs Collected",
						"value": sfdcSnapinDetails.logsCollected,
						"transcriptFields": ["PP_Logs_Collected__c"]
					},{
						"label":  "Record Type",
						"value": "0122R000000VrtU", 
						"transcriptFields": ["RecordType"]
					}
				];
				 embedded_svc.settings.extraPrechatInfo = [{
					"entityFieldMaps": [{
						"doCreate": false,
						"doFind": true,
						"fieldName": "Name",
						"isExactMatch": true,
						"label": "Service Tag"
					}
					],
					"entityName": "Asset",
					"saveToTranscript": "Asset__c"
				}, {
					"entityFieldMaps": [{
						"doCreate": false,
						"doFind": true,
						"fieldName": "Issue_Description__c",
						"isExactMatch": true,
						"label": "Issue Description"
					}
				],
				"entityName": "Case"
				}
				];
				embedded_svc.addEventHandler("onChatRequestSuccess", function (data) {
                    $("body").on('DOMNodeRemoved', function(e) {
                        if(e.target.className){
                            className = e.target.className.split(" ");
                            if(className[0] === "modalContainer")
                                location.reload();
                        }	
                    });
               $('.overlay-content').hide();
                });

                embedded_svc.init(sfdcSnapinDetails.snapInInitURL, sfdcSnapinDetails.snapInLAURL, gslbBaseURL, sfdcSnapinDetails.organizationId, sfdcSnapinDetails.componentName, {
                    baseLiveAgentContentURL: sfdcSnapinDetails.baseLiveAgentContentURL,
                    deploymentId: sfdcSnapinDetails.deploymentId,
                    buttonId: sfdcSnapinDetails.buttonId,
                    baseLiveAgentURL: sfdcSnapinDetails.baseLiveAgentURL,
                    eswLiveAgentDevName: sfdcSnapinDetails.eswLiveAgentDevName,
                    isOfflineSupportEnabled: false
                });

                eleExist('#helpButtonSpan > .message', chatClick);
            };
            if (!window.embedded_svc) {
                var s = document.createElement('script');
                s.setAttribute('src', sfdcSnapinDetails.snapInJs);
                s.onload = function () {
                    initESW(null);
                };
                document.body.appendChild(s);
            } else {
                initESW(sfdcSnapinDetails.serviceForceURL);
            }
    } catch (e) {
        console.log("Error in: " + e);
    }
}


function chatClick(eleSelector, findingEle, waitCounter) {
    try {
            if (document.querySelector(eleSelector).innerText === 'Chat Now'){
                document.querySelector(eleSelector).click();
                clearInterval(findingEle);
            }
            else if (waitCounter > 20){
                clearInterval(findingEle);
                 
                var path = window.location.href;
                var result = path.substring(0, path.lastIndexOf('/'));
                window.open(result+"/closed.html", "_self"); 
            }else
                console.log("Searching for Agents... " + waitCounter);
    } catch (e) {
        console.log("Error in:" + e);
    }
}


function eleExist(eleSelector, callbackFunc) {
    let waitCounter = 0;
    var findingEle = setInterval(function () {
        if (document.querySelector(eleSelector)) {
            try {
                callbackFunc(eleSelector, findingEle,waitCounter++);
            } catch (e) {
                console.log('error in ' + callbackFunc + ' function: ' + e);
            }
        }
    }, 1000);
}

function checkLogGrants(partnerPortalDetails){
	let returnVal = convertSeparatorToMultiPickList(partnerPortalDetails.logTypes);
	return returnVal;

}

function convertSeparatorToMultiPickList(logTypes){
	var returnLogType;
	var logTypesArr = logTypes.split("Other: ");
	if(logTypesArr[1]){
		var logTypesArr1 = logTypesArr[1].replace(/[|]/g, "/");
		var logTypesArr3 = logTypesArr[0] + "Other: " + logTypesArr1;
		returnLogType = logTypesArr3.replace(/[|]/g, " ■ ");
	}else{
		var logTypesArr3 = logTypesArr[0]
		returnLogType = logTypesArr3.replace(/[|]/g, " ■ ");
	}
	return returnLogType;
}

function concatenatDescription(partnerPortalDetails){
	let description = partnerPortalDetails.issueDescription;
	return description;
}

function convertToSeverity(caseSeverity){
	let returnVal;
	switch(caseSeverity) {
		case "1":
			returnVal = "Critical";
			break;
		case "2":
			returnVal = "High";
			break;
		case "3":
			returnVal = "Medium";
			break;
		case "4":
			returnVal = "Low";
			break;
		default:
			returnVal = "Medium";
	}
	return returnVal;
}

function loginIdNoSpace(loginId){
	return loginId.replace(/[_]/g, " ");
}
function firstNameValidator(partnerPortalDetails){
	if (partnerPortalDetails.firstName && (partnerPortalDetails.firstName != null || partnerPortalDetails.firstName != undefined  || partnerPortalDetails.firstName != "" || partnerPortalDetails.firstName != " ")){
		return partnerPortalDetails.firstName;
	}else{
		return loginIdNoSpace(partnerPortalDetails.loginId);
	}
}
function routingConfig(partnerPortalDetails){
	var buttonID;
	if (partnerPortalDetails.productGroup === "GTT"){
		switch(partnerPortalDetails.productType) {
		  case "Global Tag Team":
			buttonID = "5730b000000PnCo";
			break;
		  case "LATAM Tag Team":
			buttonID = "5730b000000PnCp";
			break;
		  case "OEM Tag Team":
			buttonID = "5730b000000PnCn";
			break;
		  case "OEM":
			buttonID = "5730b000000PnCn";
			break;
		  case "Fed Tag Team":
			buttonID = "5730b000000PnCq";
			break;
		  default:
			buttonID = "5730b000000PnCo";
			}
	}else if (partnerPortalDetails.productGroup === "Mixed IP") {
		switch(partnerPortalDetails.productType) {
		  case "Azure":
			buttonID = "5731P000000TSWY";
			break;
		  case "PowerOne Network":
			buttonID = "5731P000000TSWP";
			break;
		  default:
			buttonID = "5731P000000TSWV";
			}
	}
	return buttonID;
}