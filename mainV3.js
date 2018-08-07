var snapinChatIssueType, snapinChatServiceTag, snapinChatProductName=null/*, triggerChatButtonId=null*/;
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

    //Retain objects for retain chat
    if(snapInObject == undefined) {
        var snapInObjectGlobal = localStorage.getItem("snapInObjectSession");
        snapInObject = JSON.parse(snapInObjectGlobal);
    }else{
        snapInObject["snapinSessionAvailable"] = true;
        var snapInObjectGlobal = JSON.stringify(snapInObject);
        localStorage.setItem("snapInObjectSession",snapInObjectGlobal);
    }
    if((snapInObject != undefined) && (snapInObject.snapinSessionAvailable)) {
        console.log(snapInObjectGlobal);
        console.log(snapInObject);
        initESW = function(gslbBaseURL) {
            snapinChatIssueType = snapInObject.issueVal;
            snapinChatServiceTag = snapInObject.serviceTag;
            if("productName" in snapInObject)snapinChatProductName = snapInObject.productName;
            //triggerChatButtonId = snapInObject.triggerChatButtonId;//Removing code for temp
            
            //Open chat box without clicking on the button
            eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
    
            embedded_svc.settings.displayHelpButton = true; //Or false
            translatedLabels = "en";//translation(snapInObject.language);//Removing code for temp
            embedded_svc.settings.language = translatedLabels.language; //"";//For example, enter 'en' or 'en-US'
            embedded_svc.settings.storageDomain = snapInObject.domainName; //localhost
           // embedded_svc.settings.widgetWidth = snapInObject.widgetSize.width;
          // embedded_svc.settings.widgetHeight = "646px";//snapInObject.widgetSize.height;
           embedded_svc.settings.defaultMinimizedText = 'Chat Now';//Chat with an expert
          
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
                            },{
                                "doCreate":false,
                                "doFind":true,
                                "fieldName":"Primary_Phone__c",
                                "isExactMatch":true,
                                "label":"Primary Phone Number"
                            }],
                            "entityName":"Contact", 
                            "saveToTranscript": ""
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
            
            //prePopulate Fields
            var firstNameVal = null, lastNameVal = null, emailAddVal=null, primePhoneVal=null;
            if("firstName" in snapInObject)firstNameVal = snapInObject.firstName;
            if("lastName" in snapInObject)lastNameVal = snapInObject.lastName;
            if("email" in snapInObject)emailAddVal = snapInObject.email;
            if("phoneNo" in snapInObject)primePhoneVal = snapInObject.phoneNo;
            embedded_svc.settings.prepopulatedPrechatFields = {
                FirstName: firstNameVal,
                LastName: lastNameVal,
                Email: emailAddVal,
                Primary_Phone__c: primePhoneVal
            };    
            
            // if(snapInObject.issueVal.length > 0)
            //  embedded_svc.settings.prepopulatedPrechatFields = {Issue_Description__c: snapInObject.issueVal}; 
    
           embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, { baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL, deploymentId:  snapInObject.deploymentId, buttonId: snapInObject.buttonId, baseLiveAgentURL: snapInObject.baseLiveAgentURL, eswLiveAgentDevName: snapInObject.LiveAgentDevName, isOfflineSupportEnabled: false}); }; 
            initSnapIn(snapInObject); 

    }
   
    }

function triggerResumeSnapin(snapInObject) {  
    var initESW = function(gslbBaseURL) {
        snapinChatIssueType = snapInObject.issueVal;
        snapinChatServiceTag = snapInObject.serviceTag;
        if("productName" in snapInObject)snapinChatProductName = snapInObject.productName;
        //triggerChatButtonId = snapInObject.triggerChatButtonId;//Removing code for temp

        //Open chat box without clicking on the button
        eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);

        embedded_svc.settings.displayHelpButton = true; //Or false
        translatedLabels = translation("en");//translation(snapInObject.language);//Removing code for temp
        embedded_svc.settings.language = translatedLabels.language; //"";//For example, enter 'en' or 'en-US'
       // embedded_svc.settings.initialInteractionState = "WAITING";
        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';
        embedded_svc.settings.storageDomain = snapInObject.domainName;
        //embedded_svc.settings.widgetHeight = "646px";//snapInObject.widgetSize.height;
       embedded_svc.settings.defaultMinimizedText = 'Chat Now';//Chat with an expert
        embedded_svc.settings.extraPrechatFormDetails = [{
            "label":"Delta Sr",
            "value": snapInObject.srNumber,
            "transcriptFields":[ "Delta_SR__c" ]
        },
        { "label":"First Name", "name":"FirstName", "value":snapInObject.firstName, "displayToAgent":true },
        { "label":"Last Name", "value":snapInObject.lastName, "displayToAgent":true }];
        
        embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, { baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL, deploymentId:  snapInObject.deploymentId, buttonId: snapInObject.buttonId, baseLiveAgentURL: snapInObject.baseLiveAgentURL, eswLiveAgentDevName: snapInObject.LiveAgentDevName, isOfflineSupportEnabled: false}); }; if(!window.embedded_svc){var s=document.createElement('script');s.setAttribute('src',snapInObject.snapInJs);s.onload=function(){initESW(null,snapInObject.srNumber);};document.body.appendChild(s);}else{initESW(snapInObject.serviceForceURL,snapInObject.srNumber);}
       //embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.resumeChatComponentName, { baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL, deploymentId:  snapInObject.deploymentId, buttonId: snapInObject.resumeChatButtonId, baseLiveAgentURL: snapInObject.baseLiveAgentURL, eswLiveAgentDevName: snapInObject.resumeChatLiveAgentDevName, isOfflineSupportEnabled: false}); }; if(!window.embedded_svc){var s=document.createElement('script');s.setAttribute('src',snapInObject.snapInJs);s.onload=function(){initESW(null,snapInObject.srNumber);};document.body.appendChild(s);}else{initESW(snapInObject.serviceForceURL,snapInObject.srNumber);}

    }

//Open chat box without clicking on the button
eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);

eleExist(".dockableContainer .ended.embeddedServiceLiveAgentStateChatMessage", chatEnded);
//$("body").on("click",".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingCancelChat",function(){ localStorage.removeItem("snapInObjectSession")});
eleExist(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingCancelChat", chatEndedOnWaiting);
//BNR
$("body").on("click", ".embeddedServiceHelpButton > .helpButton", function(){
    eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c",addCharectorRemaining);
});

//BNR
function chatClick(eleSelector, findingEle) {
    if( $(eleSelector).text() === 'Chat Now' ) {
        $(eleSelector).click();
        eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c",addCharectorRemaining);

        clearInterval(findingEle);
    }
}
function chatEndedOnWaiting(eleSelector, findingEle){
    $(eleSelector).click(function(){
        removeVirtualSnapInObjectSession();
        //localStorage.removeItem("snapInObjectSession");
    });
    clearInterval(findingEle);
}
function chatEnded(eleSelector, findingEle){
    removeVirtualSnapInObjectSession();
    //localStorage.removeItem("snapInObjectSession");
    clearInterval(findingEle);
}

function removeVirtualSnapInObjectSession(){
    var snapInObjectGlobal = localStorage.getItem("snapInObjectSession");
    snapInObject = JSON.parse(snapInObjectGlobal);
    snapInObject["snapinSessionAvailable"] = false;
    snapInObjectGlobal = JSON.stringify(snapInObject);
    localStorage.setItem("snapInObjectSession",snapInObjectGlobal);
}
/*function checkAgentOffline(eleSelector, findingEle){
    if($(eleSelector).text() === 'Agent Offline'){
        $("#"+triggerChatButtonId).attr("disabled", "disabled");
    }else{
        $("#"+triggerChatButtonId).attr("disabled", false);
    }
}*/

function addCharectorRemaining(eleSelector, findingEle){
    if($("#snappinCharCounter").length == 0){
        var currentCharLength =  $(eleSelector).val().length;
        var maxCharLength = 255;
        $(eleSelector).after("<div id='snappinCharCounter' style='text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px;color: #767676;float: right;'>"+currentCharLength+" / "+maxCharLength+" characters</div>")
         $(eleSelector).on('keyup', function() {
            currentCharLength = this.value.length
            $("#snappinCharCounter").text(currentCharLength+" / "+maxCharLength+" characters");
        });

        $(".formContent.embeddedServiceSidebarForm").append("<div style='font-size: .75em;color:#767676;text-align: left;margin: 2em 1.75em'><b>Your privacy is important to us.</b> We will only use your information to process your request. We will not share it with anyone. To learn more about how we use and protect your data, see the <a href='https://www.dell.com/learn/policies-privacy?s=corp'>Dell Privacy Statement</a>.</div>");

        keypressFieldValidation();
        
        showAdditionalDetailsInUi();
    }
    /*$("#"+triggerChatButtonId).attr("disabled", false);*/
    eleExist('.helpButtonDisabled #helpButtonSpan > .message', chatClick);
    clearInterval(findingEle);
}


function showAdditionalDetailsInUi(){
    if(snapinChatProductName == null)
        $(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList").prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #767676;"><div><b>Service Tag:</b> '+snapinChatServiceTag+'</div><div><b>Issue:</b> '+snapinChatIssueType+'</div></div>');
    else
        $(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList").prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #767676;"><div style="font-size: 1.2em;">'+snapinChatProductName+'</div><div><b>Service Tag:</b> '+snapinChatServiceTag+'</div><div><b>Issue:</b> '+snapinChatIssueType+'</div></div>');

}
function keypressFieldValidation(){
    //User can put only numbers
    $('.sidebarBody .Primary_Phone__c').keypress(function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);
        
            a.push(45);
            //a.push(40);
            //a.push(41);

        if (!(a.indexOf(k)>=0))
            e.preventDefault();
    });
    $('.sidebarBody .FirstName, .sidebarBody .LastName').keypress(function(e) {
        var a = [];
        var k = e.which;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123)))
            e.preventDefault();
    });
    $('.sidebarBody .Email.slds-style-inputtext').keypress(function(e) {
        var a = [];
        var k = e.which;
        if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 48 && k < 58) || (k == 45) || (k == 46) || (k == 95)))
            e.preventDefault();
    });
    $('.sidebarBody .Issue_Description__c').keypress(function(e) {
        var a = [];
        var k = e.which;
        if (k == 62 || k == 60)
            e.preventDefault();
    });
     
    $(".sidebarBody .Primary_Phone__c").bind("paste", function(e){
        var pastedData = e.originalEvent.clipboardData.getData('text');
        if(/^[0-9-]*$/.test(pastedData) == false){
            e = e || event;
            e.preventDefault();
            alert("You are trying to paste an invalid text.");
        }
    });
    $(".sidebarBody .FirstName, .sidebarBody .LastName").bind("paste", function(e){
        var pastedData = e.originalEvent.clipboardData.getData('text');
        if(/^[a-zA-Z ]*$/.test(pastedData) == false){
            e = e || event;
            e.preventDefault();
            alert("You are trying to paste an invalid text.");
        }	
    });
    $(".sidebarBody .Issue_Description__c").bind("paste", function(e){
        var pastedData = e.originalEvent.clipboardData.getData('text');
        if(pastedData.includes('<') || pastedData.includes('>') ){
            e = e || event;
            e.preventDefault();
            alert("You are trying to paste an invalid text.");
        }
    });
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


function triggerChatBot(chatBotObject){
    debugger;
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
    
        //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
        //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)
    
        //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
        //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)
    
        // Settings for Live Agent
        embedded_svc.settings.avatarImgURL = '';
        embedded_svc.settings.prechatBackgroundImgURL = '';
        embedded_svc.settings.waitingStateBackgroundImgURL = '';
        embedded_svc.settings.smallCompanyLogoImgURL = '';
        //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
        // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
        //Returns a valid button ID.
        //};

        /*embedded_svc.settings.prepopulatedPrechatFields = {
            Issue_Description__c: snapInObject.issueVal,
            FirstName: snapInObject.firstName,
            LastName: snapInObject.lastName,
            Primary_Phone__c: snapInObject.primPhone,
            Email: snapInObject.emailAdd
        };*/
    
        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';
        //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
    
        embedded_svc.init(chatBotObject.chatBotInitURL, chatBotObject.chatBotLAURL, gslbBaseURL, chatBotObject.organizationId, chatBotObject.componentName, { 
            baseLiveAgentContentURL: chatBotObject.baseLiveAgentContentURL,
            deploymentId: chatBotObject.deploymentId, 
            buttonId: chatBotObject.buttonId, 
            baseLiveAgentURL: chatBotObject.baseLiveAgentURL, 
            eswLiveAgentDevName: chatBotObject.LiveAgentDevName, 
            isOfflineSupportEnabled: false}); };
            if (!window.embedded_svc) { var s = document.createElement('script'); s.setAttribute('src',  chatBotObject.snapInJs); s.onload = function() { initESW(null); }; document.body.appendChild(s); } else {
                initESW(chatBotObject.serviceForceURL); }
}