(function() {
    var initESW;

    window.addEventListener("dragover",function(e){
        e = e || event;
        e.preventDefault();
    },false);
    window.addEventListener("drop",function(e){
        e = e || event;
        e.preventDefault();
    },false);
})();

function initSnapIn(snapInObject) {
    if (!window.embedded_svc) { 
        var s = document.createElement('script'); 
        s.setAttribute('src', snapInObject.snapInJs); 
        s.onload = function() { 
            initESW(null); 
        }; 
        document.body.appendChild(s); 
    } else { 
        initESW(snapInObject.serviceForceURL); 
    }
}

function triggerSnapin(snapInObject) {
    initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
        embedded_svc.settings.storageDomain = snapInObject.domainName; //localhost
        embedded_svc.settings.widgetWidth = snapInObject.widgetSize.width;
        embedded_svc.settings.widgetHeight = snapInObject.widgetSize.height;

        embedded_svc.settings.extraPrechatFormDetails = [
                                                    {"label":"First Name", "transcriptFields":["FirstName__c"]},
                                                    {"label":"Last Name", "transcriptFields":["LastName__c"]},
                                                    {"label":"Primary Phone Number", "transcriptFields":["ContactNumber__c"]},
                                                    {"label":"Email Address", "transcriptFields":["Email__c"]},
                                                    {"label":"Subject", "value": snapInObject.issueVal, "transcriptFields":["Issue__c"]},
                                                    {"label":"Service Tag", "value": snapInObject.serviceTag, "transcriptFields":["Service_Tag__c"]},
                                                    {"label":"Issue Description", "transcriptFields":["Description__c"]},
                                                    {"label":"AccountNumber", "transcriptFields":["CustomerNumber__c"]},
                                                    {"label":"Account BUID", "transcriptFields":["CustomerBUID__c"]}
                                                    ]; 

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

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        //'https://dellservices--SIT2.cs18.my.salesforce.com', 'https://sit2-dellservices.cs18.force.com/LASnapIn'
        //'https://dellservices--DEV4.cs19.my.salesforce.com', 'https://dev4-dellservices.cs19.force.com/LASnapIn'
        //embedded_svc.init('https://dellservices--DEV4.cs19.my.salesforce.com', 'https://dev4-dellservices.cs19.force.com/LASnapIn', gslbBaseURL, '00D2900000096py', 'Snap_Ins_Chat_Deployment', { baseLiveAgentContentURL: 'https://c.la4-c1cs-phx.salesforceliveagent.com/content', deploymentId: '572290000008OcD', buttonId: '5730b000000CbhT', baseLiveAgentURL: 'https://d.la4-c1cs-phx.salesforceliveagent.com/chat', eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I290000004CBTEA2_1641ccdd070', isOfflineSupportEnabled: false}); }; 
        embedded_svc.init(snapInObject.SFDCURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, { baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL, deploymentId:  snapInObject.deploymentId, buttonId: snapInObject.buttonId, baseLiveAgentURL: snapInObject.baseLiveAgentURL, eswLiveAgentDevName: snapInObject.LiveAgentDevName, isOfflineSupportEnabled: false}); }; 
        initSnapIn(snapInObject);        
    }

function initLiveAgent(liveAgentObject) {
    $.getScript(liveAgentObject.deploymentUrl, function() {
        liveagent.enableLogging(); //Bishav new code to create log in console need to create a finction form our end as well.
        liveagent.init(liveAgentObject.liveAgentInitUrl, liveAgentObject.deploymentId, liveAgentObject.organizationId);
        if (!window._laq) { 
            window._laq = []; 
        }
        window._laq.push(function() {
            liveagent.showWhenOnline(liveAgentObject.buttonId, document.getElementById('liveagent_button_online_' + liveAgentObject.buttonId));
            liveagent.showWhenOffline(liveAgentObject.buttonId, document.getElementById('liveagent_button_offline_' + liveAgentObject.buttonId));
        });
    });
}

// starting live agent chat
function startLiveAgentChat(buttonId) {
    liveagent.startChat(buttonId);
}

function eleExist(eleSelector, callbackFunc) {
    var findingEle = setInterval(function() {
        if( $(eleSelector).length > 0 ) {
            try {
                callbackFunc(eleSelector, findingEle);
            } catch(e) {
                console.log('error in ' + callbackFunc + ' function: ' + e);
            }
        }
    }, 1000);
}

function detectScreen() {
    var windowWidth = window.outerWidth;
    var windowHeight = window.outerHeight;

    if( windowWidth > 1920 && windowHeight > 1080) {
        return { width: '350px', height: '500px' }
    } else if ( windowWidth > 1366 && windowHeight > 1080 ) {
        return { width: '300px', height: '450px' }
    } else {
        return { width: '250px', height: '400px' }
    }
}

function checkBusinessHrAvilability(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    console.log('changed');
    console.log(this);
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML =
       // this.responseText;
       console.log(this.responseText);
       return this.response.BusinessHours;
      }
    };
    xhttp.open("GET", "http://svc4-osb-sit4.us.dell.com/ServiceCloudCase/ChatQueueBusinessHours?buttonId=5733F000000001n", true);
    xhttp.setRequestHeader("Authorization", "Basic U0ZEQ0RldlBpbG90VXNlcjpTZXJ2aWNlQCMzMTk5IQ==");
    //xhttp.setRequestHeader("OAuthToken", "Bearer 00D4F0000008jtf!AQcAQHQhhvMyZO.dbEYX11EvSDubCv8G4AlPElgmdeEBES.NuKHq8FthDPQzguAArDP.uh_iXkZZZVtjC0HgS2vuDz3TYbLt");
    xhttp.send();
}