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

    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;

})();


function triggerPartnerPortalSnapin(partnerPortalDetails) {
    try {            
			let sfdcSnapinDetails = {
				/*
					//Chat 
					baseLiveAgentContentURL: 'https://c.la2-c1cs-ord.salesforceliveagent.com/content',
					deploymentId: '5720b000000CbfS',
					baseLiveAgentURL: 'https://d.la2-c1cs-ord.salesforceliveagent.com/chat',
					eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I0x0000008OPzEAM_16d81041603',             
                    componentName: "Partner_Portal_Snap_ins",
                    organizationId: "00D0x0000000WEw",
                    snapInInitURL: 'https://dellservices--Chat.my.salesforce.com',
                    snapInJs: "https://service.force.com/embeddedservice/5.0/esw.min.js",
                    snapInLAURL: 'https://chat-dellservices.cs95.force.com/LASnapIn', 
					
					//DEV2
					snapInInitURL: 'https://dellservices--DEV2.my.salesforce.com',
					snapInLAURL: 'https://dev2-dellservices.cs45.force.com/LASnapIn',
					organizationId: '00D8A00000057oF',
					componentName: 'Partner_Snap_In',
					baseLiveAgentContentURL: 'https://c.la2-c1cs-ph2.salesforceliveagent.com/content',
					deploymentId: '5720b000000GneC',
					baseLiveAgentURL: 'https://d.la2-c1cs-ph2.salesforceliveagent.com/chat',
					eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I8A0000004CE8UAM_16e214e1296',
					snapInJs: 'https://dellservices--DEV2.my.salesforce.com/embeddedservice/5.0/esw.min.js',
					
					
					
					//DEV1
					snapInInitURL: 'https://dellservices--dev1.my.salesforce.com',
					snapInLAURL: 'https://dev1-dellservices.cs4.force.com/LASnapIn',
					organizationId: '00DP0000003pGDL',
					componentName: 'Partner_Snap_In',
					baseLiveAgentContentURL: 'https://c.la1-c1cs-ia2.salesforceliveagent.com/content',
					deploymentId: '5720b000000GneC',
					baseLiveAgentURL: 'https://d.la1-c1cs-ia2.salesforceliveagent.com/chat',
					eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I2R000000PAwuUAG_1703a86ec04',
					snapInJs: 'https://dellservices--dev1.my.salesforce.com/embeddedservice/5.0/esw.min.js',
				*/	
					
					//SIT2
					baseLiveAgentContentURL: "https://c.la3-c1cs-ph2.salesforceliveagent.com/content",
					deploymentId: "5720b000000GneC",
					baseLiveAgentURL: "https://d.la3-c1cs-ph2.salesforceliveagent.com/chat",
					eswLiveAgentDevName: "EmbeddedServiceLiveAgent_Parent04I2h0000004CBOEA2_16e7ea2ec9b",
					componentName: "Partner_Snap_In",
					organizationId: "00D2h0000008aOa",
					snapInInitURL: "https://dellservices--SIT2.my.salesforce.com",
					snapInJs: "https://service.force.com/embeddedservice/5.0/esw.min.js",
					snapInLAURL: "https://sit2-dellservices.cs36.force.com/LASnapIn",
					recordType: "0122h0000009xf1",
					
					//Perf 1
					/*
					snapInInitURL: 'https://dellservices--Perf1.my.salesforce.com',
					snapInLAURL: 'https://perf1-dellservices.cs36.force.com/LASnapIn',
					organizationId: '00D2h0000000YBM',
					componentName: 'Partner_Snap_In',
					baseLiveAgentContentURL: 'https://c.la3-c2cs-ph2.salesforceliveagent.com/content',
                    deploymentId: '5720b000000GneC',
                    baseLiveAgentURL: 'https://d.la3-c2cs-ph2.salesforceliveagent.com/chat',
                    eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I2h0000004CBdEAM_16fd14e13a6',
					snapInJs: 'https://dellservices--Perf1.my.salesforce.com/embeddedservice/5.0/esw.min.js',
					*/
					//fixed object values
					buttonId: routingConfig(partnerPortalDetails),
					issueSubject: getProductGroup(partnerPortalDetails.productGroup) +" - "+ partnerPortalDetails.productType,
					//logsCollected: checkLogGrants(partnerPortalDetails),
					//logTypeMultiPickList: convertLogToMultiPickList(partnerPortalDetails),
					logsCollected: checkLogGrants(partnerPortalDetails),
					concatenatedDescription: concatenatDescription(partnerPortalDetails),
					caseSeverityTxt: convertToSeverity(partnerPortalDetails.caseSeverity),
					loginIdNoSpace: loginIdNoSpace(partnerPortalDetails.loginId),
					validFirstName: firstNameValidator(partnerPortalDetails),
					serviceForceURL: "https://service.force.com"
		}
            var initESW = function (gslbBaseURL) {
                embedded_svc.settings.displayHelpButton = false;//true;
                embedded_svc.settings.language = "en";
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
                //embedded_svc.settings.storageDomain = sfdcSnapinDetails.domainName;
                embedded_svc.settings.defaultMinimizedText = 'Chat Now';
                
                embedded_svc.settings.directToButtonRouting = routingConfig(partnerPortalDetails);

				 embedded_svc.settings.extraPrechatFormDetails = [{
						"label": "Type",
						"value": 'Partner',//Both
						"transcriptFields": ["Type__c"]
					},{
						"label": "Chat Source",
						"value": 'Partner',//Both
						"transcriptFields": ["Chat_Source__c"]
					},{
						"label": "Product Group / Vendor",
						"value": getProductGroup(partnerPortalDetails.productGroup),//Both
						"transcriptFields": ["PP_Vendor_Product_Group__c"]
					},{
						"label": "Product Type / Vendor List",
						"value": partnerPortalDetails.productType,//Both
						"transcriptFields": ["PP_Vendor_List_Product_Type__c"]
					},{
						"label": "Service Tag",
						"value": idBasedVal("ST",partnerPortalDetails),//Both
						"transcriptFields": ["Service_Tag__c"]
					},{
						"label": "Service Tag",
						"value": idBasedVal("ST",partnerPortalDetails),//Both
						"transcriptFields": ["Asset__c"],
						"displayToAgent": false
					},{
						"label": "Subject",
						"value": sfdcSnapinDetails.issueSubject,//Both
						"transcriptFields": ["Issue__c"]
					},{
						"label":  "Issue Description",
						"value": sfdcSnapinDetails.concatenatedDescription,//Both
						"transcriptFields": ["Description__c"]
					},{
						"label":  "Description",
						"value": sfdcSnapinDetails.concatenatedDescription,//Both
						"transcriptFields": ["Collaborate_Description__c"]
					},{
                        "label": "First Name",
                        "name": "FirstName",
						"value": sfdcSnapinDetails.validFirstName,//Both
                        "transcriptFields": ["FirstName__c"],
                        "displayToAgent": true
                    },{
                        "label": "Last Name",
                        "value": partnerPortalDetails.lastName,//Both
                        "transcriptFields": ["LastName__c"],
                        "displayToAgent": true
                    },{
                        "label": "Email Address",
                        "value": partnerPortalDetails.email,//Both
                        "transcriptFields": ["Email__c"]
                    },{
                        "label": "Agent Name",
                        "value": sfdcSnapinDetails.loginIdNoSpace,//Both
                        "transcriptFields": ["Agent_Name__c"],
                        "displayToAgent": true
					},{
						"label":  "Badge",
						"value":  partnerPortalDetails.badgeId,//Both
						"transcriptFields": ["PP_Badge__c"]
					},{
						"label":  "Location",
						"value": partnerPortalDetails.region,//Both
						"transcriptFields": ["PP_Location__c"]
					},{
						"label":  "Case Number From Partner",
						"value": idBasedVal("SR",partnerPortalDetails),//Both
						"transcriptFields": ["PP_Case_Number_From_Partner__c"]
					},{
						"label":  "Order Number",
						"value": idBasedVal("ON",partnerPortalDetails),//Both //New Field 
						"transcriptFields": ["Order_Number__c"]
					},{
						"label":  "CustomerNumber",
						"value": idBasedVal("CN",partnerPortalDetails),//Both //New Field 
						"transcriptFields": ["CustomerNumber__c"]
					},{
						"label":  "Product",
						"value": isRequiredForMixedIP(partnerPortalDetails.productGroup,partnerPortalDetails,"productName"),//Mixed IP only
						"transcriptFields": ["PP_Product__c"]
					},{
						"label":  "Case Severity",
						"value": isRequiredForMixedIP(partnerPortalDetails.productGroup, sfdcSnapinDetails,"caseSeverityTxt"),//Mixed IP only
						"transcriptFields": ["PP_Case_Severity__c"]
					},{
						"label":  "Customer Waiting",
						"value": isRequiredForMixedIP(partnerPortalDetails.productGroup,partnerPortalDetails,"customerOnThePhone"),//Mixed IP only
						"transcriptFields": ["PP_Customer_Waiting__c"]
					},{
						"label":  "Driver/Firmware Updated",
						"value": isRequiredForMixedIP(partnerPortalDetails.productGroup,partnerPortalDetails,"driverFirmwareUpdated"),//Mixed IP only
						"transcriptFields": ["PP_Driver_Firmware_Updated__c"]
					},{
						"label":  "Logs Collected",
						"value": isRequiredForMixedIP(partnerPortalDetails.productGroup,sfdcSnapinDetails,"logsCollected"),//Mixed IP only
						"transcriptFields": ["PP_Logs_Collected__c"]
					},{
						"label":  "Reason",
						"value": expandChatReason(isRequiredForGTT(partnerPortalDetails.productGroup,partnerPortalDetails,"chatReason")) ,//GTT only //New Field 
						"transcriptFields": ["Reason__c"]
					},{
						"label":  "Record Type",
						"value": sfdcSnapinDetails.recordType,//"0122R000000VrtU",//"0128A000000Jhee",//"0122h0000009xnl",//"0122h0000009xf1" ,//Record type id for partner//DEV2 = "0128A000000Jhee",
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
                /*
                    let bgLoader = document.getElementById('overlay');
                    if(bgLoader)
                        bgLoader.style.display = "none"; 
                */
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

//Click on chat button
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
                console.log(result);
                window.open(result+"/closed.html", "_self"); 
            }else
                console.log("Searching for Agents = " + waitCounter);
    } catch (e) {
        console.log("Error in:" + e);
    }
}

//If element Exist Run function
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


//Log Grants optimization
function checkLogGrants(partnerPortalDetails){
		let returnVal = convertSeparatorToMultiPickList(partnerPortalDetails.logTypes);
		return returnVal;
}

//Convert Log to Multi Pick List
/*function convertLogToMultiPickList(partnerPortalDetails){
	let returnVal;
		if (partnerPortalDetails.logsGathered)
			returnVal = convertSeparatorToMultiPickList(partnerPortalDetails.logTypes);
		else
			returnVal = null;
		return returnVal;
}*/

//Convert Sepatator to Semicolom
function convertSeparatorToMultiPickList(logTypes){
	var returnLogType;
	var logTypesArr = logTypes.split("Other: ");
	if(logTypesArr[1]){
		var logTypesArr1 = logTypesArr[1].replace(/[|]/g, "/");
		var logTypesArr3 = logTypesArr[0] + "Other: " + logTypesArr1;
		//returnLogType = logTypesArr3.replace(/[|]/g, ";");
		returnLogType = logTypesArr3.replace(/[|]/g, " ■ ");
	}else{
		var logTypesArr3 = logTypesArr[0]
		//returnLogType = logTypesArr3.replace(/[|]/g, ";");
		returnLogType = logTypesArr3.replace(/[|]/g, " ■ ");
	}
	return returnLogType;
}

//concatenat Description
function concatenatDescription(partnerPortalDetails){
	//let description = "Customer on the Phone? " + (partnerPortalDetails.customerOnThePhone ? "Yes" : "No") + " | Driver/Firmware updated? " + (partnerPortalDetails.driverFirmwareUpdated ? "Yes" : "No")  + " | Logs Collected? " + checkLogGrants(partnerPortalDetails) + (partnerPortalDetails.logsGathered ? " - " + convertLogToMultiPickList(partnerPortalDetails) : "") + " | Issue Description : "+ partnerPortalDetails.issueDescription;
	let description = partnerPortalDetails.issueDescription
	return description;
}

// Convert Sev to Priority
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

/*function chatSourceVal(productGroup){
	//var returnValue = "Partner-"+productGroup;
	var returnValue = productGroup;
	return returnValue;
}*/

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
	console.log(partnerPortalDetails);
	var buttonID;
	if (getProductGroup(partnerPortalDetails.productGroup) === "GTT"){
		//STORY 7592112: FY20_Channels : Chat : Partner Portal : GTT_Create Queues on Lightning [START]
		switch(partnerPortalDetails.productType) {
		  case "Global Tag Team":
			//buttonID = "5738A0000008Om2";//Old //GL_DB_INTB_MIX_CH_MU_BLND_GTT
			buttonID = "5730b000000PnCo";//New
			break;
		  case "LATAM Tag Team":
			  if(partnerPortalDetails.language === "ES")
				//buttonID = "573P0000000CbN1";//DEV1 "LA.DB.INTB.MIX.CH.ES.BLND.GTT"
				buttonID = "5732h0000008Ovh";//SIT2
			  else if(partnerPortalDetails.language === "PT")
				//buttonID = "573P0000000CbN6";//DEV1 "LA.DB.INTB.MIX.CH.PT.BLND.GTT"
				buttonID = "5732h0000008Ovm";

			  else
				//buttonID = "5738A0000008Olx";//Old //LA_DB_INTB_MIX_CH_MU_BLND_GTT
				buttonID = "5730b000000PnCp";//LA_DB_INTB_MIX_CH_MU_BLND_GTT
			break;
		  case "APJ Tag Team":
			  if(partnerPortalDetails.language === "CN")
				//buttonID = "573P0000000CbNB";//DEV1 "GL.DB.INTB.MIX.CH.ZH.BLND.GTT"
				buttonID = "5732h0000008Ovr"; //SIT2
			  else if(partnerPortalDetails.language === "JP")
				//buttonID = "573P0000000CbNG";//DEV1 "GL.DB.INTB.MIX.CH.JA.BLND.GTT" GL.DB.INTB.MIX.CH.JA.BLND.GTT
				buttonID = "5732h0000008Ovw";//SIT2

			break;
		  case "Global Tag Team Internal":
			//buttonID = "5732R000000XZHn";//DEV1 "GL_DB_INTB_MIX_CH_MU_BLND_L2_GTT"
			buttonID = "5732h0000008Ork"; //SIT2
			break;
		  case "OEM Tag Team":
		  case "OEM":
			//buttonID = "5738A0000008Om7";//Old  //DEV2 GL_DB_INTB_MIX_CH_EN_BLND_OEMGTT
			buttonID = "5730b000000PnCn";//New
			break;
		  case "Fed Tag Team":
			//buttonID = "5738A0000008OmH";//Old  //DEV2 NA_DB_INTB_MIX_CH_EN_BLND_FEDGTT
			buttonID = "5730b000000PnCq";//New
			break;
		  default:
			//buttonID = "5738A0000008Om2";//Old //DEV2 GL_DB_INTB_MIX_CH_MU_BLND_GTT
			buttonID = "5730b000000PnCo";//New
			}
		//STORY 7592112: FY20_Channels : Chat : Partner Portal : GTT_Create Queues on Lightning [END]
	}else if (partnerPortalDetails.productGroup === "Mixed IP") {
		//STORY 7248769 : FY20_Channels : Chat : Partner Portal : VCE_Create Queues on Lightning  [START]
		switch(partnerPortalDetails.productType) {
		  case "Azure":
			//buttonID = "5730R0000004FfB";//Old //DEV2 GL_DB_INTB_ENT_CH_EN_BLND_SST_MSFT
			buttonID = "5731P000000TSWY";//New
			break;
		  case "PowerOne Network":
			//buttonID = "5730R0000004Ff2";//Old //DEV2 GL_DB_INTB_ENT_CH_EN_BLND_NTWK
			buttonID = "5731P000000TSWP";//New
			break;
		  default:
			//buttonID = "5730R0000004Ff5";//Old //GL_DB_INTB_ENT_CH_EN_BLND_SRVR_CPSD
			buttonID = "5731P000000TSWV";//New
			}
		//STORY 7248769 : FY20_Channels : Chat : Partner Portal : VCE_Create Queues on Lightning  [END]
	}
	return buttonID; 
}

//Check identifierType and send the value [START]
function idBasedVal(idTypeVal,partnerPortalDetails){
	if(idTypeVal === partnerPortalDetails.identifierType)
		return partnerPortalDetails.identifier;
	else
		return "";
}
//Check identifierType and send the value [END]

//Check Product Group before pushing the values [START]
function getProductGroup(productGroup){
	if(productGroup === "GTT" || productGroup === "Tag Team")
		return "GTT";
	else if(document.getElementById("productGroup").value === "Mixed IP")
		return "Mixed IP";
 }
 //Check Product Group before pushing the values [END]

function isRequiredForGTT(productGroup,object,key){
	console.log(key,object[key]);
	if (getProductGroup(productGroup) === "GTT"&& object[key])
		return object[key];
	else
		return "";
}

function isRequiredForMixedIP(productGroup,object,key){
	console.log(key,object[key]);
	if (productGroup === "Mixed IP" && object[key])
		return object[key];
	else
		return "";
}

function expandChatReason(chatReason){
	let returnVal;
	switch(chatReason) {
		case "Ownership":
			returnVal = "Ownership Transfer";
			break;
		case "Proof":
			returnVal = "Proof of Purchase Adjustment (3rd party sale)";
			break;
		case "Entitlement":
			returnVal = "Entitlement Issue";
			break;
		case "Dispatch":
			returnVal = "Dispatch Issue";
			break;
		case "AssetUpdate":
			returnVal = "General Asset Data Update (Other)";
			break;
		default:
			returnVal = "";
	}
	return returnVal;
}
