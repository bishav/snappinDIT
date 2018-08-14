function initSnapIn(snapInObject) {
    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', snapInObject.snapInJs);
        s.onload = function () {
            initESW(null);
        };
        document.body.appendChild(s);
    } else {
        initESW(snapInObject.serviceForceURL);
    }

}

function triggerSnapin(snapInObject) {
        initESW = function (gslbBaseURL) {
            embedded_svc.settings.displayHelpButton = true; //Or false
           // embedded_svc.settings.language = translatedLabels.language; //"";//For example, enter 'en' or 'en-US'
            embedded_svc.settings.storageDomain = snapInObject.domainName; //localhost
            // embedded_svc.settings.widgetWidth = snapInObject.widgetSize.width;
            // embedded_svc.settings.widgetHeight = "646px";//snapInObject.widgetSize.height;
            embedded_svc.settings.defaultMinimizedText = 'Chat Now';//Chat with an expert
            embedded_svc.settings.extraPrechatFormDetails = [
                { "label": "FirstName", "transcriptFields": ["FirstName__c"] },
                { "label": "LastName", "transcriptFields": ["LastName__c"] },
                { "label": "Subject", "value": snapInObject.issueVal, "transcriptFields": ["Issue__c"] },
                { "label": "Service Tag", "value": snapInObject.serviceTag, "transcriptFields": ["Service_Tag__c"] },
                { "label": "AccountNumber", "value": snapInObject.customernumber, "transcriptFields": ["CustomerNumber__c"] },
                { "label": "Account BUID", "value": snapInObject.BUID, "transcriptFields": ["CustomerBUID__c"] }
            ];

            embedded_svc.settings.extraPrechatInfo = [{
                "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": true,
                    "fieldName": "LastName",
                    "isExactMatch": true,
                    "label": "Last Name"
                }, {
                    "doCreate": false,
                    "doFind": true,
                    "fieldName": "FirstName",
                    "isExactMatch": true,
                    "label": "First Name"
                }, {
                    "doCreate": false,
                    "doFind": true,
                    "fieldName": "Email",
                    "isExactMatch": true,
                    "label": "Email"
                }, {
                    "doCreate": false,
                    "doFind": true,
                    "fieldName": "Primary_Phone__c",
                    "isExactMatch": true,
                    "label": "Primary Phone Number"
                }],
                "entityName": "Contact",
                "saveToTranscript": ""
            }, {
                "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": true,
                    "fieldName": "Name",
                    "isExactMatch": true,
                    "label": "Service Tag"
                }],
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

            embedded_svc.settings.enabledFeatures = ['LiveAgent'];
            embedded_svc.settings.entryFeature = 'LiveAgent';

            //prePopulate Fields
            var firstNameVal = null, lastNameVal = null, emailAddVal = null, primePhoneVal = null;
            if ("firstName" in snapInObject) firstNameVal = snapInObject.firstName;
            if ("lastName" in snapInObject) lastNameVal = snapInObject.lastName;
            if ("email" in snapInObject) emailAddVal = snapInObject.email;
            if ("phoneNo" in snapInObject) primePhoneVal = snapInObject.phoneNo;
            embedded_svc.settings.prepopulatedPrechatFields = {
                FirstName: firstNameVal,
                LastName: lastNameVal,
                Email: emailAddVal,
                Primary_Phone__c: primePhoneVal
            };

            // if(snapInObject.issueVal.length > 0)
            //  embedded_svc.settings.prepopulatedPrechatFields = {Issue_Description__c: snapInObject.issueVal}; 

            embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, { baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL, deploymentId: snapInObject.deploymentId, buttonId: snapInObject.buttonId, baseLiveAgentURL: snapInObject.baseLiveAgentURL, eswLiveAgentDevName: snapInObject.LiveAgentDevName, isOfflineSupportEnabled: false });
        };
        initSnapIn(snapInObject);
}