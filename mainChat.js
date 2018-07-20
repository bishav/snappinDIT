var issueType, serviceTag, triggerChatButtonId=null;
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

eleExist('.helpButtonLabel .message', checkAgentOffline);

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
        triggerChatButtonId = snapInObject.triggerChatButtonId;

        //Open chat box without clicking on the button
        eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);

        embedded_svc.settings.displayHelpButton = true; //Or false
        translatedLabels = translation(snapInObject.language);
        embedded_svc.settings.language = translatedLabels.language; //"";//For example, enter 'en' or 'en-US'
        embedded_svc.settings.storageDomain = snapInObject.domainName; //localhost
       // embedded_svc.settings.widgetWidth = snapInObject.widgetSize.width;
       embedded_svc.settings.widgetHeight = "532px";//snapInObject.widgetSize.height;
       //embedded_svc.settings.defaultMinimizedText = 'Chat Now';//Chat with an expert
       
       
      
        embedded_svc.settings.extraPrechatFormDetails = [
                                                    {"label": translatedLabels.firstName, "transcriptFields":["FirstName__c"]},
                                                    {"label": translatedLabels.lastName, "transcriptFields":["LastName__c"]},
                                                    {"label": translatedLabels.primPhone, "transcriptFields":["ContactNumber__c"]},
                                                    {"label":translatedLabels.emailAdd, "transcriptFields":["Email__c"]},
                                                    {"label":"Subject", "value": snapInObject.issueVal, "transcriptFields":["Issue__c"]},
                                                    {"label":"Service Tag", "value": snapInObject.serviceTag, "transcriptFields":["Service_Tag__c"]},
                                                    {"label": translatedLabels.issueDesc, "transcriptFields":["Description__c"]},
                                                    {"label":"AccountNumber", "value": snapInObject.customernumber, "transcriptFields":["CustomerNumber__c"]},
                                                    {"label":"Account BUID", "value": snapInObject.BUID, "transcriptFields":["CustomerBUID__c"]}
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
        issueType = snapInObject.issueVal;
        serviceTag = snapInObject.serviceTag;
        triggerChatButtonId = snapInObject.triggerChatButtonId;

        //Open chat box without clicking on the button
        eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);

        embedded_svc.settings.displayHelpButton = true; //Or false
        translatedLabels = translation(snapInObject.language);
        embedded_svc.settings.language = translatedLabels.language; //"";//For example, enter 'en' or 'en-US'
       // embedded_svc.settings.initialInteractionState = "WAITING";
        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';
        embedded_svc.settings.storageDomain = snapInObject.domainName;
        //embedded_svc.settings.defaultMinimizedText = 'Chat Now';//Chat with an expert
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

//Open chat box without clicking on the button
eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);

//BNR
$("body").on("click", ".embeddedServiceHelpButton > .helpButton", function(){
    eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c",addCharectorRemaining);
});

//BNR
function chatClick(eleSelector, findingEle) {
    if( $(eleSelector).text() === 'Chat with an Expert' ) {
        $(eleSelector).click();
        clearInterval(findingEle);
    }
}
function checkAgentOffline(eleSelector, findingEle){
    if($(eleSelector).text() === 'Agent Offline'){
        $("#"+triggerChatButtonId).attr("disabled", "disabled");
    }else{
        $("#"+triggerChatButtonId).attr("disabled", false);
    }
}

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
    $("#"+triggerChatButtonId).attr("disabled", false);
    //eleExist('.helpButtonDisabled #helpButtonSpan > .message', chatClick);
    clearInterval(findingEle);
}


function showAdditionalDetailsInUi(){
    $(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList").prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #444;"><div><b>Service Tag:</b> '+serviceTag+'</div><div><b>Issue:</b> '+issueType+'</div></div>');
   
}

function translation(language){
    if(language == "ja"){
        this.issue = "Issue";
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "メール";
        this.primPhone = "主に使う電話番号";
        this.issueDesc = "問題の説明";
        this.characters = "characters";
        this.language = "ja";
    }else if(language == "ko"){
        this.issue = "Issue";
        this.firstName = "이름";
        this.lastName = "성";
        this.emailAdd = "이메일";
        this.primPhone = "기본 전화 번호";
        this.issueDesc = "문제 설명";
        this.characters = "characters";
        this.language = "ko";
    }else if(language == "es"){
        this.issue = "Issue";
        this.firstName = "Nombre";
        this.lastName = "Apellidos";
        this.emailAdd = "Correo electrónico";
        this.primPhone = "Número de teléfono primario";
        this.issueDesc = "descripcion del problema";
        this.characters = "characters";
        this.language = "es";
    }else if(language == "es_MX"){
        this.issue = "Issue";
        this.firstName = "Nombre";
        this.lastName = "Apellidos";
        this.emailAdd = "Correo electrónico";
        this.primPhone = "Primary Phone Number";
        this.issueDesc = "Issue Description";
        this.characters = "characters";
        this.language = "es_MX";
    }else if(language == "zh-CN"){
        this.issue = "Issue";
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "电子邮件";
        this.primPhone = "最常用的电话号码";
        this.issueDesc = "问题说明";
        this.characters = "characters";
        this.language = "zh-CN";
    }else if(language == "pt"){
        this.issue = "Issue";
        this.firstName = "Nome";
        this.lastName = "Sobrenome";
        this.emailAdd = "Email";
        this.primPhone = "Número de Telefone Principal";
        this.issueDesc = "descrição do problema";
        this.characters = "characters";
        this.language = "pt";
    }else if(language == "pt_BR"){
        this.issue = "Issue";
        this.firstName = "Nome";
        this.lastName = "Sobrenome";
        this.emailAdd = "Email";
        this.primPhone = "Número de Telefone Principal";
        this.issueDesc = "descrição do problema";
        this.characters = "characters";
        this.language = "pt";
    }else if(language == "nl"){
        this.issue = "Issue";
        this.firstName = "Voornaam";
        this.lastName = "Achternaam";
        this.emailAdd = "E-mail";
        this.primPhone = "Primair telefoonnummer";
        this.issueDesc = "Probleem Beschrijving";
        this.characters = "characters";
        this.language = "nl";
    }else if(language == "nl_NL"){
        this.issue = "Issue";
        this.firstName = "Voornaam";
        this.lastName = "Achternaam";
        this.emailAdd = "E-mail";
        this.primPhone = "Primair telefoonnummer";
        this.issueDesc = "Probleem Beschrijving";
        this.characters = "characters";
        this.language = "nl";
    }else{
        this.issue = "Issue";
        this.firstName = "First Name";
        this.lastName = "Last Name";
        this.emailAdd = "Email Address";
        this.primPhone = "Primary Phone Number";
        this.issueDesc = "Issue Description";
        this.characters = "characters";
        this.language = "en";
    }
    return this;
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

function initResumeLiveAgent(liveAgentObject) {	
	if (!window._laq)  {
		window._laq  =  [];
	}
	    window._laq.push(function ()  {
		        liveagent.showWhenOnline(liveAgentObject.buttonId,  document.getElementById('liveagent_button_online_' + liveAgentObject.buttonId));
		        liveagent.showWhenOffline(liveAgentObject.buttonId,  document.getElementById('liveagent_button_offline_' + liveAgentObject.buttonId));
		    
	});

	    liveagent.addCustomDetail('deltaSr',  liveAgentObject.srNumber).saveToTranscript('Delta_Sr__c');
	    liveagent.findOrCreate("Case").map("Delta_SR__c", "deltaSr", true,  false,  true).showOnCreate();
	    liveagent.init(liveAgentObject.liveAgentInitUrl, liveAgentObject.deploymentId, liveAgentObject.organizationId);
	    liveagent.setName(liveAgentObject.firstName   +   ' '   +   liveAgentObject.lastName);
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


