//liveagent init
function initLiveAgent(buttonId, deploymentId, organizationId) {
    $.getScript('https://c.la4-c1cs-phx.salesforceliveagent.com/content/g/js/43.0/deployment.js', function() {
        liveagent.init('https://d.la4-c1cs-phx.salesforceliveagent.com/chat', deploymentId, organizationId);
        if (!window._laq) { 
            window._laq = []; 
        }
        window._laq.push(function() {
            liveagent.showWhenOnline(buttonId, document.getElementById('liveagent_button_online_' + buttonId));
            liveagent.showWhenOffline(buttonId, document.getElementById('liveagent_button_offline_' + buttonId));
        });
    });
}

// starting live agent chat
function startLiveAgentChat(buttonId) {
    liveagent.startChat(buttonId);
}

//SnapIn code inititation
function initSnapIn(deploymentId, buttonId, serviceTagVal, issueVal, browserLang, descriptionText) {
    if (!window.embedded_svc) { 
        var s = document.createElement('script');
        debugger;
        s.setAttribute('src', 'https://dellservices--DEV3.cs20.my.salesforce.com/embeddedservice/5.0/esw.min.js');
        s.onload = function() { 
            
        }; 
        $.getScript('https://dellservices--DEV3.cs20.my.salesforce.com/embeddedservice/5.0/esw.min.js', function()
        {
            triggerSnapIn(null, deploymentId, buttonId, serviceTagVal, issueVal, browserLang, descriptionText); 
        });
        debugger;
        document.body.appendChild(s);
    } else { 
        triggerSnapIn('https://service.force.com', deploymentId, buttonId, serviceTagVal, issueVal, browserLang, descriptionText);
    }
}

//main trigger point for snapIN and configuration
function triggerSnapIn(gslbBaseURL, deploymentId, buttonId, serviceTagVal, issueVal, browserLang, descriptionText) {
    embedded_svc.settings.displayHelpButton = true;
    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';
    if( serviceTagVal === '29VZS71' ) {
        embedded_svc.settings.prepopulatedPrechatFields = {
            FirstName: "John",
            LastName: "Doe"
        }  
    }      
    if( browserLang === 'ja' ) {
        embedded_svc.settings.extraPrechatFormDetails = [
                                                {"label":"名", "transcriptFields":["FirstName__c"]},
                                                {"label":"姓", "transcriptFields":["LastName__c"]},
                                                {"label":"主に使う電話番号", "transcriptFields":["ContactNumber__c"]},
                                                {"label":"メール", "transcriptFields":["Email__c"]},
                                                {"label":"Subject", "value":issueVal, "transcriptFields":["Issue__c"]},
                                                {"label":"Service Tag", "value":serviceTagVal, "transcriptFields":["Service_Tag__c"]},
                                                {"label":"問題の記述", "transcriptFields":["Description__c"]},
                                                {"label":"AccountNumber", "transcriptFields":["CustomerNumber__c"]},
                                                {"label":"Account BUID", "transcriptFields":["CustomerBUID__c"]},
                                                ]; 

        embedded_svc.settings.extraPrechatInfo = [{
                    "entityFieldMaps": [{
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"LastName",
                        "isExactMatch":true,
                        "label":"姓"
                    }, {
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"FirstName",
                        "isExactMatch":true,
                        "label":"名"
                    }, {
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"Email",
                        "isExactMatch":true,
                        "label":"メール"
                    }, {
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"Primary_Phone__c",
                        "isExactMatch":true,
                        "label":"主に使う電話番号"
                    }],
                    "entityName":"Contact"
                },{
                    "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": true,
                    "fieldName": "Name",
                    "isExactMatch": true,
                    "label": "Service Tag"
                    }],
                    "entityName": "Asset",
                    "saveToTranscript": "Asset__c"
                },{
                    "entityFieldMaps": [{
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"Issue_Description__c",
                        "isExactMatch":true,
                        "label":"問題の記述"
                    }
                    ],
                    "entityName":"Case"
                }
            ];  
    } else {
        embedded_svc.settings.extraPrechatFormDetails = [
                                                {"label":"First Name", "transcriptFields":["FirstName__c"]},
                                                {"label":"Last Name", "transcriptFields":["LastName__c"]},
                                                {"label":"Primary Phone Number", "transcriptFields":["ContactNumber__c"]},
                                                {"label":"Email Address", "transcriptFields":["Email__c"]},
                                                {"label":"Subject", "value":issueVal, "transcriptFields":["Issue__c"]},
                                                {"label":"Service Tag", "value":serviceTagVal, "transcriptFields":["Service_Tag__c"]},
                                                {"label":"Issue Description", "transcriptFields":["Description__c"]},
                                                {"label":"AccountNumber", "transcriptFields":["CustomerNumber__c"]},
                                                {"label":"Account BUID", "transcriptFields":["CustomerBUID__c"]}
                                                ]; 
// ,{"label":"Long Description", "value":descriptionText, "transcriptFields":["Long_Description__c"]}
        embedded_svc.settings.extraPrechatInfo = [{
                    "entityFieldMaps": [{
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"LastName",
                        "isExactMatch":true,
                        "label":"Last Name"
                    }, {
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"FirstName",
                        "isExactMatch":true,
                        "label":"First Name"
                    }, {
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"Email",
                        "isExactMatch":true,
                        "label":"Email"
                    }, {
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"Primary_Phone__c",
                        "isExactMatch":true,
                        "label":"Primary Phone Number"
                    }],
                    "entityName":"Contact"
                },{
                    "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": true,
                    "fieldName": "Name",
                    "isExactMatch": true,
                    "label": "Service Tag"
                    }],
                    "entityName": "Asset",
                    "saveToTranscript": "Asset__c"
                },{
                    "entityFieldMaps": [{
                        "doCreate":false,
                        "doFind":true,
                        "fieldName":"Issue_Description__c",
                        "isExactMatch":true,
                        "label":"Issue Description"
                    }
                    ],
                    "entityName":"Case"
                }
            ];  
    }                                        
    embedded_svc.init('https://dellservices--DEV3.cs20.my.salesforce.com', 'https://dev3-dev2-dellservices--dev2.cs20.force.com/LA', gslbBaseURL, '00Dm0000000DQXs', 'Test_Snap_In', { 
        baseLiveAgentContentURL: 'https://c.la4-c1cs-phx.salesforceliveagent.com/content', 
        deploymentId: '572m00000004Ckx', 
        buttonId: '573m00000004DC9', 
        baseLiveAgentURL: 'https://d.la4-c1cs-phx.salesforceliveagent.com/chat', 
        eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04Im0000000001iEAA_16369f295e6', 
        isOfflineSupportEnabled: false
    }); 
};