var issueType, serviceTag;
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
        issueType = snapInObject.issueVal;
        serviceTag = snapInObject.serviceTag;
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = snapInObject.language; //"";//For example, enter 'en' or 'en-US'
        //embedded_svc.settings.storageDomain = snapInObject.domainName; //localhost
       // embedded_svc.settings.widgetWidth = snapInObject.widgetSize.width;
       embedded_svc.settings.widgetHeight = "532px";//snapInObject.widgetSize.height;
       embedded_svc.settings.defaultMinimizedText = 'Chat Now';//Chat with an expert
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
        
        if(snapInObject.issueVal.length > 0)
            embedded_svc.settings.prepopulatedPrechatFields = {Issue_Description__c: snapInObject.issueVal}; 

       embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, { baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL, deploymentId:  snapInObject.deploymentId, buttonId: snapInObject.buttonId, baseLiveAgentURL: snapInObject.baseLiveAgentURL, eswLiveAgentDevName: snapInObject.LiveAgentDevName, isOfflineSupportEnabled: false}); }; 
        initSnapIn(snapInObject); 
    }

function triggerResumeSnapin(snapInObject) {  
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = snapInObject.language; //For example, enter 'en' or 'en-US'
       // embedded_svc.settings.initialInteractionState = "WAITING";
        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';
        embedded_svc.settings.storageDomain = snapInObject.domainName;
        embedded_svc.settings.defaultMinimizedText = 'Chat Now';//Chat with an expert
        embedded_svc.settings.extraPrechatFormDetails = [{
            "label":"Delta Sr",
            "value": snapInObject.srNumber,
            "transcriptFields":[ "Delta_SR__c" ]
        },
        { "label":"First Name", "name":"FirstName", "value":snapInObject.firstName, "displayToAgent":true },
        { "label":"Last Name", "value":snapInObject.lastName, "displayToAgent":true }];
        
        //embedded_svc.init('https://dellservices--DEV3.cs20.my.salesforce.com', 'https://dev3-dev2-dellservices--dev2.cs20.force.com/LASI1', gslbBaseURL, '00Dm0000000DQXs', 'Test_snapin_resumechat', { baseLiveAgentContentURL: 'https://c.la4-c1cs-phx.salesforceliveagent.com/content', deploymentId: deploymentId, buttonId: buttonId, baseLiveAgentURL: 'https://d.la4-c1cs-phx.salesforceliveagent.com/chat', eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04Im0000000001xEAA_1638222454e', isOfflineSupportEnabled: false}); };if (!window.embedded_svc) { var s = document.createElement('script'); s.setAttribute('src', 'https://dellservices--DEV3.cs20.my.salesforce.com/embeddedservice/5.0/esw.min.js'); s.onload = function() { initESW(null, srNumber); }; document.body.appendChild(s); } else { initESW('https://dellservices--DEV3.cs20.my.salesforce.com', srNumber); }
       // embedded_svc.init('https://dellservices--DIT4.cs11.my.salesforce.com','https://dit4-dellservices.cs11.force.com/LaSnapIn',gslbBaseURL,'00DZ000000NE2eh','Snap_Ins_Resume_chat',{baseLiveAgentContentURL:'https://c.la3-c2cs-phx.salesforceliveagent.com/content',deploymentId:deploymentId,buttonId:buttonId,baseLiveAgentURL:'https://d.la3-c2cs-phx.salesforceliveagent.com/chat',eswLiveAgentDevName:'EmbeddedServiceLiveAgent_Parent04IZ00000008OIUMA2_1648e3b61a5',isOfflineSupportEnabled:false});};if(!window.embedded_svc){var s=document.createElement('script');s.setAttribute('src','https://service.force.com/embeddedservice/5.0/esw.min.js');s.onload=function(){initESW(null,srNumber);};document.body.appendChild(s);}else{initESW('https://service.force.com',srNumber);}
        embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.resumeChatComponentName, { baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL, deploymentId:  snapInObject.deploymentId, buttonId: snapInObject.resumeChatButtonId, baseLiveAgentURL: snapInObject.baseLiveAgentURL, eswLiveAgentDevName: snapInObject.resumeChatLiveAgentDevName, isOfflineSupportEnabled: false}); }; if(!window.embedded_svc){var s=document.createElement('script');s.setAttribute('src',snapInObject.snapInJs);s.onload=function(){initESW(null,snapInObject.srNumber);};document.body.appendChild(s);}else{initESW(snapInObject.serviceForceURL,snapInObject.srNumber);}
}

//BNR
$("body").on("click", "#helpButtonSpan > .message", function(){
    eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c",addCharectorRemaining);
});

//BNR
function addCharectorRemaining(eleSelector, findingEle){
    if($("#snappinCharCounter").length == 0){
        var currentCharLength =  $(eleSelector).val().length;
        var maxCharLength = 255;
        $(eleSelector).after("<div id='snappinCharCounter' style='text-align:right; position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-bottom: 2px;color: #333333;margin-top: 4px;'>"+currentCharLength+" / "+maxCharLength+" characters</div>")
        $(eleSelector).on('keyup', function() {
            currentCharLength = this.value.length
            $("#snappinCharCounter").text(currentCharLength+" / "+maxCharLength+" characters");
        });
        showAdditionalDetailsInUi();
    }
    
    clearInterval(findingEle);
}

function showAdditionalDetailsInUi(){
    $(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList").prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #444;"><div><b>Service Tag:</b> '+serviceTag+'</div><div><b>Issue:</b> '+issueType+'</div></div>');
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
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML = this.responseText;
        alert(this.responseText);
      }
    };
    xhttp.open("POST", "https://esupportchatroute-ge4.ausvdc02.pcf.dell.com/servicecloud/chat/v1.0/route", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("country=USA&language=EN&premierType=PROSUPPORT&buid=11&shippedDate=&localChannel=26&companyNumber=26&containsValidServiceLevel=&familyName=Latitude&productCode=4LT&serviceTag=&oow=N&extra1=US");
}