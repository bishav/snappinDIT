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
            let buttonQueueId,
            if (partnerPortalDetails.language.toLowerCase() === 'en')
                buttonQueueId = '5730x000000Catz';
            else
                buttonQueueId = '5730x000000CauE';  

			let sfdcSnapinDetails = {
					buttonId: buttonQueueId,
					baseLiveAgentContentURL: 'https://c.la2-c1cs-ord.salesforceliveagent.com/content',
					deploymentId: '5720b000000CbfS',
					baseLiveAgentURL: 'https://d.la2-c1cs-ord.salesforceliveagent.com/chat',
					eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I0x0000008OPzEAM_16d81041603',             
                    componentName: "Partner_Portal_Snap_ins",
                    domainName:"localhost",//"https://solutions.one.dell.com",//
                    organizationId: "00D0x0000000WEw",
                    serviceForceURL: "https://service.force.com",
                    snapInInitURL: 'https://dellservices--Chat.my.salesforce.com',
                    snapInJs: "https://service.force.com/embeddedservice/5.0/esw.min.js",
                    snapInLAURL: 'https://chat-dellservices.cs95.force.com/LASnapIn', 
		}
            var initESW = function (gslbBaseURL) {
                embedded_svc.settings.displayHelpButton = true;
                embedded_svc.settings.language = "en";
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
                embedded_svc.settings.storageDomain = sfdcSnapinDetails.domainName;
                embedded_svc.settings.defaultMinimizedText = 'Chat Now';
				
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
				
                embedded_svc.init(sfdcSnapinDetails.snapInInitURL, sfdcSnapinDetails.snapInLAURL, gslbBaseURL, sfdcSnapinDetails.organizationId, sfdcSnapinDetails.componentName, {
                    baseLiveAgentContentURL: sfdcSnapinDetails.baseLiveAgentContentURL,
                    deploymentId: sfdcSnapinDetails.deploymentId,
                    buttonId: sfdcSnapinDetails.buttonId,
                    baseLiveAgentURL: sfdcSnapinDetails.baseLiveAgentURL,
                    eswLiveAgentDevName: sfdcSnapinDetails.eswLiveAgentDevName,
                    isOfflineSupportEnabled: false
                });
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
