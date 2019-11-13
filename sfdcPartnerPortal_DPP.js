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


function triggerPartnerPortalSnapin(partnerPortalDetails, sfdcSnapinDetails) {
    try {            
			
            var initESW = function (gslbBaseURL) {
                embedded_svc.settings.displayHelpButton = false;//true;
                embedded_svc.settings.language = partnerPortalDetails.language;
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
                //embedded_svc.settings.storageDomain = sfdcSnapinDetails.domainName;
                embedded_svc.settings.defaultMinimizedText = 'Chat Now';
                
                embedded_svc.settings.directToButtonRouting = routingConfig(partnerPortalDetails.language);

				 embedded_svc.settings.extraPrechatFormDetails = [{
						"label": "Chat Source",
						"value": 'PP',
						"transcriptFields": ["Chat_Source__c"]
					},{
						"label": "Service Tag",
						"value": partnerPortalDetails.serviceTag,
						"transcriptFields": ["Service_Tag__c"]
					}, {
						"label": "Subject",
						"value": partnerPortalDetails.productType +" - "+ partnerPortalDetails.productGroup,
						"transcriptFields": ["Issue__c"]
					},{
						"label":  "Issue Description",
						"value": partnerPortalDetails.issueDescription,
						"transcriptFields": ["Description__c"]
					},{
                        "label": "First Name",
                        "name": "FirstName",
                        "value": partnerPortalDetails.firstName,
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
                        "value": partnerPortalDetails.firstName +" "+ partnerPortalDetails.lastName,
                        "transcriptFields": ["Agent_Name__c"],
                        "displayToAgent": true
                    },{
						"label":  "Description",
						"value": partnerPortalDetails.issueDescription,
						"transcriptFields": ["Collaborate_Description__c"]
					},{
						"label":  "Record Type",
						"value": "0120b000000IiF6",
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
                    let bgLoader = document.getElementById('overlay');
                    if(bgLoader)
                        bgLoader.style.display = "none"; 
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
                //alert("Sorry! No agents are currently online.");
                clearInterval(findingEle);
				alert("No Agents Avilable");
                /* 
                var path = window.location.href;
                var result = path.substring(0, path.lastIndexOf('/'));
                console.log(result);
                window.open(result+"/closed.html", "_self");
				*/
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


//Routing Config
function routingConfig(lang){
            if (lang && lang.toLowerCase() === 'en'){
                return '5730x000000Catz';
            }   
            else
                return '5730x000000CauE';
}