function triggerOrderSnapin(orderSnapinObject, orderSnapinLabelObj){
        if(!document.getElementById("cusCAREPreChatSnapinDom")){
            createCusCAREpreChatSnapinDom(orderSnapinObject, orderSnapinLabelObj);
            prePopulateCustCarePreFormValues(orderSnapinObject);
            custCarePreFormShowIssueDetailsCharRemainingOnKeyUp(orderSnapinLabelObj);
            custCarePreChatKeypressFieldValidation(orderSnapinLabelObj);
            document.getElementById("cusCAREPreChat-minimize-btn").addEventListener("click", minimizeCustCAREPrechat);
            document.getElementById("cusCAREPreChat-close-btn").addEventListener("click", closeCustCAREPrechat);
            document.getElementById("cusCAREPreChat-helpButtonEnabled").addEventListener("click", maximizeCustCAREPrechat);
            document.getElementById("cusCAREPreChat-startChat").addEventListener("click", function () { startCAREChat(orderSnapinObject, orderSnapinLabelObj) });
        }else{
            //If the form is already avilable[START] 
            let serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
            minimizedDefaultUI =  document.querySelector(".embeddedServiceSidebar .embeddedServiceSidebarMinimizedDefaultUI");
            if  (serviceSidebar && serviceSidebar.style.display == "none") //if prechat form is open: Open custom prechat form
                document.getElementById("cusCAREPreChat-helpButtonEnabled").click();
            else if(minimizedDefaultUI)//If chat has already started try to maximize the chat window
                minimizedDefaultUI.click();
            else //If chat has not yet initiated still open prechat form
                document.getElementById("cusCAREPreChat-helpButtonEnabled").click();
             //If the form is already avilable[END]
            
        }


        //initiate Chat
        initiateChatCARE(orderSnapinObject);
    }
    
    function createCusCAREpreChatSnapinDom(orderSnapinObject, orderSnapinLabelObj){
        //Add order number[START]
        let orderNumberDom;
        if ("orderNumber" in orderSnapinObject && orderSnapinObject.orderNumber)
            orderNumberDom ='<div id="readonlyCAREPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 8px 1.5em 0px 1em; text-align: left;position: relative;font-size: .75em;color: #444444;"><div> <b>'+orderSnapinLabelObj.orderNumber +'</b> '+orderSnapinObject.orderNumber+'</div></div>';
        else
            orderNumberDom = '';
        // Add order number[END]

        let domEle = '<div id="cusCAREPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer"><div class="cusPreChat-embeddedServiceSidebarHeader"><div class="cusPreChat-shortHeader"><div class="cusPreChat-shortHeaderContent"> <button id="cusCAREPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> </path> </svg> </span> </button><h2 class="cusPreChat-headerText"><div class="cusPreChat-headerTextContent"> <span id="cusCAREPreChat-headerTextLabel">' + orderSnapinLabelObj.chatHeader + '</span> <span id="cusCAREPreChat-headerSubtext"> </span></div></h2> <button id="cusCAREPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button></div></div></div><div class="cusPreChat-sidebarBody"><div id="cusCAREPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusCAREPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">' + orderSnapinLabelObj.chatUnavailableMessage + '</div><div> <button id="cusCAREPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat</span> </button></div></div><div id="cusCAREPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"><div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"><div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"><div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"><div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"><ul class="cusPreChat-fieldList">'+orderNumberDom+'<li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">' + orderSnapinLabelObj.firstName + '</span> </label> <input id="cusCAREPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div> </span></li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">' + orderSnapinLabelObj.lastName + '</span> </label> <input id="cusCAREPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div> </span></li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>' + orderSnapinLabelObj.emailAddress + '</span> </label> <input id="cusCAREPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>' + orderSnapinLabelObj.phoneNumber + '</span> </label> <input id="cusCAREPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>' + orderSnapinLabelObj.issueDescription + '</span> </label><textarea id="cusCAREPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input" maxlength="' + orderSnapinLabelObj.issueDescriptionLength + '" type="text" aria-describedby="" placeholder="" required=""></textarea><div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / ' + orderSnapinLabelObj.issueDescriptionLength + ' ' + orderSnapinLabelObj.characters + '</div></div></li></ul><div style="font-size: 12px;color:#767676;text-align: left;margin: 2.5em 1.75em; font-style: italic;color:#444444;">' + orderSnapinLabelObj.customerPrivacyDesc + '</div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusCAREPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">' + orderSnapinLabelObj.startChat + '</span> </button></div></div></div></div></div></div></div></div><div id="cusCAREPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"><div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusCAREPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)"> <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span><div class="cusPreChat-helpButtonLabel" id="cusCAREPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">' + orderSnapinLabelObj.chatHeader + '</span></div> </button></div></div>';
        let body = document.body || document.getElementsByTagName('body')[0];
        body.insertAdjacentHTML('beforeend', domEle);
    }
    
    function minimizeCustCAREPrechat(){
        document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = 'block';
        document.getElementById("cusCAREPreChatSnapinDom").style.display = 'none';
    }
    
    function closeCustCAREPrechat(){
        document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = 'none';
        document.getElementById("cusCAREPreChatSnapinDom").style.display = 'none';
    }
    
    function maximizeCustCAREPrechat(){
        document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = 'none';
        document.getElementById("cusCAREPreChatSnapinDom").style.display = 'block';
    }

    function initiateChatCARE(orderSnapinObject){
        let snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
		if (!snapinAlreadyInitiated){
			initOrderSnapin(orderSnapinObject);
		}
	
    }

    function initOrderSnapin(orderSnapinObject){
        snapinCAREPageObserver("body");

        var initESW = function(gslbBaseURL) {
            embedded_svc.settings.displayHelpButton = true; //Or false
            embedded_svc.settings.enabledFeatures = ['LiveAgent'];
            embedded_svc.settings.entryFeature = 'LiveAgent';
            if ("language" in orderSnapinObject)
                translatedLabels = translation(orderSnapinObject.language);
            else
                translatedLabels = translation("en");
            embedded_svc.settings.language = translatedLabels.language;

            //Order Number and BUID merger[START]
            if (orderSnapinObject.BUID)
                sendOrderNumber = orderSnapinObject.orderNumber+'-'+orderSnapinObject.BUID;
            else
                sendOrderNumber = orderSnapinObject.orderNumber;
            //Order Number and BUID merger[END]

            embedded_svc.settings.extraPrechatFormDetails = [{
                "label": translatedLabels.firstName,
                "transcriptFields": ["FirstName__c"]
            }, {
                "label": translatedLabels.lastName,
                "transcriptFields": ["LastName__c"]
            }, {
                "label": translatedLabels.primPhone,
                "transcriptFields": ["ContactNumber__c"]
            }, {
                "label": translatedLabels.emailAdd,
                "transcriptFields": ["Email__c"]
            }, /*{
                "label": "Case Title",
                "transcriptFields": ["Issue__c"]
            },*/ 
            {
                "label": "Chat Source",
                "value": 'CARE',
                "transcriptFields": ["Chat_Source__c"]
            },{
                "label": "Order Number",
                "value": sendOrderNumber,
                "transcriptFields": ["Order_Number__c"]
            }, {
                "label": translatedLabels.issueDesc,
                "transcriptFields": ["Description__c"]
            }
    ];
    embedded_svc.settings.extraPrechatInfo = [{
        "entityFieldMaps": [{
            "doCreate": false,
            "doFind": true,
            "fieldName": "LastName",
            "isExactMatch": true,
            "label": translatedLabels.lastName
        }, {
            "doCreate": false,
            "doFind": true,
            "fieldName": "FirstName",
            "isExactMatch": true,
            "label": translatedLabels.firstName
        }, {
            "doCreate": false,
            "doFind": true,
            "fieldName": "Email",
            "isExactMatch": true,
            "label": translatedLabels.emailAdd
        }, {
            "doCreate": false,
            "doFind": true,
            "fieldName": "Primary_Phone__c",
            "isExactMatch": true,
            "label": translatedLabels.primPhone
        }
        ],
        "entityName": "Contact",
        "saveToTranscript": ""
    }, {
        "entityFieldMaps": [{
            "doCreate": false,
            "doFind": true,
            "fieldName": "OrderNumber__c",
            "isExactMatch": true,
            "label": "Order Number"
        }
        ],
        "entityName": "Order",
        "saveToTranscript": "OrderNumber__c"
    }, {
        "entityFieldMaps": [{
            "doCreate": false,
            "doFind": true,
            "fieldName": "Issue_Description__c",
            "isExactMatch": true,
            "label": translatedLabels.issueDesc
        }
        ],
        "entityName": "Case"
    }
    ];


    //Prefill prechat form[START]
    var firstNameVal = null,
        lastNameVal = null,
        emailAddVal = null,
        issueDescription = null,
        primePhoneVal = null,
        subject = null;
    if ("c_firstName" in orderSnapinObject)
        firstNameVal = orderSnapinObject.c_firstName;
    else
        firstNameVal = "FirstName";
    if ("c_lastName" in orderSnapinObject)
        lastNameVal = orderSnapinObject.c_lastName;
    else
        lastNameVal = "LastName";
    if ("c_email" in orderSnapinObject)
        emailAddVal = orderSnapinObject.c_email;
    else
        emailAddVal = "email@dell.com";
    if ("c_phoneNo" in orderSnapinObject)
        primePhoneVal = orderSnapinObject.c_phoneNo;
    else
        primePhoneVal = "123";
    if ("c_issueDescription" in orderSnapinObject)
        issueDescription = orderSnapinObject.c_issueDescription;
    else
        issueDescription = "issueDescription";
    if ("c_Subject" in orderSnapinObject)
        issueDescription = orderSnapinObject.c_issueDescription;
    else
        subject = "Testsubject";
        embedded_svc.settings.prepopulatedPrechatFields = {
            FirstName: firstNameVal,
            LastName: lastNameVal,
            Email: emailAddVal,
            Primary_Phone__c: primePhoneVal,
            Issue_Description__c: issueDescription,
            Subject: subject
        };
    //Prefill prechat form[END]
    //snapinEventHandler[START]
    embedded_svc.addEventHandler("onConnectionError", function (data) {
        snapinCAREChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onIdleTimeoutOccurred", function (data) {
        snapinCAREChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onChatEndedByChasitor", function (data) {
        snapinCAREChatInitiatedState(false);
    });

    embedded_svc.addEventHandler("onChatEndedByAgent", function (data) {
        snapinCAREChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onAgentMessage", function(data) {
        snapinCAREChatInitiatedState(true);
    });
    //snapinEventHandler[END]
            embedded_svc.init(
                orderSnapinObject.snapInInitURL,
                orderSnapinObject.snapInLAURL,
                gslbBaseURL,
                orderSnapinObject.organizationId,
                orderSnapinObject.componentName,
                {
                    baseLiveAgentContentURL: orderSnapinObject.baseLiveAgentContentURL,
                    deploymentId:  orderSnapinObject.deploymentId,
                    buttonId: orderSnapinObject.buttonId,
                    baseLiveAgentURL: orderSnapinObject.baseLiveAgentURL,
                    eswLiveAgentDevName: orderSnapinObject.LiveAgentDevName,
                    isOfflineSupportEnabled: false
                }
            );

        };
    
        if (!window.embedded_svc) {
            var s = document.createElement('script');
            s.setAttribute('src', orderSnapinObject.snapInJs);
            s.onload = function() {
                initESW(null);
            };
            document.body.appendChild(s);
        } else {
            initESW(orderSnapinObject.serviceForceURL);
        }   
    }

    function startCAREChat(orderSnapinObject, orderSnapinLabelObj){
        if(custCarePreFormValidation(orderSnapinLabelObj)){
            orderSnapinObject = addCustCareFormDetailsTo(orderSnapinObject);
            saveGlobalSnapinCareObjToSession(orderSnapinObject);
            closeCustCAREPrechat();
            //document.querySelector(" .embeddedServiceSidebar .dockableContainer .prechatUI  .embeddedServiceSidebarForm .embeddedServiceSidebarButton").click();
            eleExistCareWithVariable('.embeddedServiceSidebar .startButton', CareChatStarted, orderSnapinObject);
        }
    }
    function CareChatStarted(eleSelector, findingEle, orderSnapinObject) {
        try {
            changeCarePrechatValues(orderSnapinObject);
            document.querySelector(" .embeddedServiceSidebar .dockableContainer .prechatUI  .embeddedServiceSidebarForm .embeddedServiceSidebarButton").click();
            clearInterval(findingEle);
        } catch (e) {
            console.log("Error in:" + e);
        }
    }
    function changeCarePrechatValues(snapInObject) {
        let state = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState();
        let prechatFields = state.get("v.prechatFields");
        prechatFields.forEach(function (prechatField) {
            if (prechatField.name === "FirstName") {
                prechatField.value = snapInObject.c_firstName
            } else if (prechatField.name === "LastName") {
                prechatField.value = snapInObject.c_lastName
            } else if (prechatField.name === "Email") {
                prechatField.value = snapInObject.c_email
            } else if (prechatField.name === "Primary_Phone__c") {
                prechatField.value = snapInObject.c_phoneNo
            } else if (prechatField.name === "Issue_Description__c") {
                prechatField.value = snapInObject.c_issueDescription
            } else if (prechatField.name === "Subject") {
                prechatField.value = 'Test'
            }
        });
        state.set("v.prechatFields", prechatFields);
    }
    function addCustCareFormDetailsTo(snapInObject) {
        snapInObject.c_firstName = document.getElementById("cusCAREPreChat-FirstName").value;
        snapInObject.c_lastName = document.getElementById("cusCAREPreChat-LastName").value;
        snapInObject.c_email = document.getElementById("cusCAREPreChat-Email").value;
        snapInObject.c_phoneNo = document.getElementById("cusCAREPreChat-Phone").value;
        snapInObject.c_issueDescription = document.getElementById('cusCAREPreChat-IssueDescription').value;
        return snapInObject;
    }
    function prePopulateCustCarePreFormValues(snapInObject) {
        if ("firstName" in snapInObject)
            document.getElementById("cusCAREPreChat-FirstName").value = snapInObject.firstName;
        if ("lastName" in snapInObject)
            document.getElementById("cusCAREPreChat-LastName").value = snapInObject.lastName;
        if ("emailAddress" in snapInObject)
            document.getElementById("cusCAREPreChat-Email").value = snapInObject.emailAddress;
        if ("phoneNumber" in snapInObject)
            document.getElementById("cusCAREPreChat-Phone").value = snapInObject.phoneNumber;
        if ("issueDescription" in snapInObject)
            document.getElementById("cusCAREPreChat-IssueDescription").value = snapInObject.issueDescription;
    }
    //Prechat  Validation [START]
    function cusCarePreChatEleIsEmpty(domElement, requiredValue) {
        cusCarePreChatErrorMsgPlaceholder(domElement, requiredValue);
        return false;
    }
    function cusCarePreChatInvalidEmail(domElement, orderSnapinLabelObj) {
        if (!cusCarePreChatvalidateEmail(domElement.value) || cusCarePreChatBlockListEmailValidation(domElement.value, orderSnapinLabelObj.blocklistEmails)) {
            cusCarePreChatErrorMsgPlaceholder(domElement, orderSnapinLabelObj.emailValidation);
            return false;
        }
    }
    function cusCarePreChatvalidateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function cusCarePreChatBlockListEmailValidation(email, blockList) {
        var blockListArray = blockList.split('|');
        var email = email.toUpperCase();
        for (i = 0; i < blockListArray.length; i++) {
            var blockedEmailString = blockListArray[i];
            blockedEmailString = blockedEmailString.toUpperCase();
            if (email === blockedEmailString)
                return true;
        }
        return false;
    }
    function cusCarePreChatErrorMsgPlaceholder(domElement, message) {
        try {
            let referenceNode = domElement.parentNode;
            let el = document.createElement("ul");
            el.innerHTML = '<li class="cusPreChat-form-element__help">' + message + '</li>';
            el.id = 'ErrMsg_' + domElement.id;
            el.className = "cusPreChat-has-error cusPreChat-uiInput";
            referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        } catch (e) {
            console.log(e);
        }
    
    }
    function custCarePreFormValidation(orderSnapinLabelObj) {
        let acceptForm,
            firstNameDOM = document.getElementById("cusCAREPreChat-FirstName"),
            lastNameDOM = document.getElementById("cusCAREPreChat-LastName"),
            emailDOM = document.getElementById("cusCAREPreChat-Email"),
            phoneDOM = document.getElementById("cusCAREPreChat-Phone"),
            IssueDescDOM = document.getElementById("cusCAREPreChat-IssueDescription");
            
        if (document.getElementById("ErrMsg_cusCAREPreChat-Email")) {
            let element = document.getElementById("ErrMsg_cusCAREPreChat-Email");
            element.parentNode.removeChild(element);
        }
        if (!emailDOM.value)
            acceptForm = cusCarePreChatEleIsEmpty(emailDOM, orderSnapinLabelObj.emailRequiredValidation);
        else
            acceptForm = cusCarePreChatInvalidEmail(emailDOM, orderSnapinLabelObj);
    
        if (document.getElementById("ErrMsg_cusCAREPreChat-FirstName") && !firstNameDOM.value) {
            acceptForm = false;
        } else if (!firstNameDOM.value)
            acceptForm = cusCarePreChatEleIsEmpty(firstNameDOM, orderSnapinLabelObj.firstNameValidation);
        else if (document.getElementById("ErrMsg_cusCAREPreChat-FirstName")) {
            let element = document.getElementById("ErrMsg_cusCAREPreChat-FirstName");
            element.parentNode.removeChild(element);
        }

        if (document.getElementById("ErrMsg_cusCAREPreChat-LastName") && !lastNameDOM.value) {
            acceptForm = false;
        } else if (!lastNameDOM.value)
            acceptForm = cusCarePreChatEleIsEmpty(lastNameDOM, orderSnapinLabelObj.lastNameValidation);
        else if (document.getElementById("ErrMsg_cusCAREPreChat-LastName")) {
                let element = document.getElementById("ErrMsg_cusCAREPreChat-LastName");
                element.parentNode.removeChild(element);
            }
        if (document.getElementById("ErrMsg_cusCAREPreChat-Phone") && !phoneDOM.value) {
            acceptForm = false;
        } else if (!phoneDOM.value)
            acceptForm = cusCarePreChatEleIsEmpty(phoneDOM, orderSnapinLabelObj.phoneRequiredValidation);
        else if (document.getElementById("ErrMsg_cusCAREPreChat-Phone")) {
                let element = document.getElementById("ErrMsg_cusCAREPreChat-Phone");
                element.parentNode.removeChild(element);
            }
        if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription") && !IssueDescDOM.value) {
            acceptForm = false;
        } else if (!IssueDescDOM.value)
            acceptForm = cusCarePreChatEleIsEmpty(IssueDescDOM, orderSnapinLabelObj.issueDescriptionValidation);
        else if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription")) {
                let element = document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription");
                element.parentNode.removeChild(element);
            }
        if (acceptForm === undefined) acceptForm = true;
        return acceptForm;
    }
    function custCarePreChatKeypressFieldValidation(orderSnapinLabelObj) {
        document.getElementById("cusCAREPreChat-Phone").onkeypress = function (e) {
            var a = [];
            var k = e.which || e.keyCode;
            for (i = 48; i < 58; i++)
                a.push(i);
            a.push(45);
            a.push(8);
            a.push(9);
            if (!(a.indexOf(k) >= 0))
                e.preventDefault();
            else if (document.getElementById("ErrMsg_cusCAREPreChat-Phone"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-Phone");
        }
        document.getElementById('cusCAREPreChat-FirstName').onkeypress = function (e) {
            var a = [];
            var k = e.which || e.keyCode;
            if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
                e.preventDefault();
            else if (document.getElementById("ErrMsg_cusCAREPreChat-FirstName"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-FirstName");
        }
        document.getElementById('cusCAREPreChat-LastName').onkeypress = function (e) {
            var a = [];
            var k = e.which || e.keyCode;
            if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
                e.preventDefault();
            else if (document.getElementById("ErrMsg_cusCAREPreChat-LastName"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-LastName");
        }
        document.getElementById("cusCAREPreChat-Email").onkeypress = function (e) {
            var a = [];
            var k = e.which || e.keyCode;
            if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 47 && k < 58) || (k == 45) || (k == 46) || (k == 95) || k == 8 || k == 9))
                e.preventDefault();
            else if (document.getElementById("ErrMsg_cusCAREPreChat-Email"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-Email");
        }
        document.getElementById("cusCAREPreChat-IssueDescription").onkeypress = function (e) {
            var a = [];
            var k = e.which || e.keyCode;
            if (k == 62 || k == 60)
                e.preventDefault();
            else if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription")) {
                removeDomElementbyId("ErrMsg_cusCAREPreChat-IssueDescription");
            }
        }
    
        document.getElementById("cusCAREPreChat-FirstName").addEventListener("paste", function (e) {
            checkForSpecialCharAndText(e, "cusCAREPreChat-FirstName");
        });
        document.getElementById("cusCAREPreChat-LastName").addEventListener("paste", function (e) {
            checkForSpecialCharAndText(e, "cusCAREPreChat-LastName");
        });
        document.getElementById("cusCAREPreChat-IssueDescription").addEventListener("paste", function (e) {
            var format = /[<>]/;
            //if (pastedText(e).includes('<') || pastedText(e).includes('>')) {
            if (format.test(pastedText(e)) == true) {
                e.preventDefault();
                alert(orderSnapinLabelObj.pasteInvalidTextMsg);
            } else if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-IssueDescription");
        });
        document.getElementById("cusCAREPreChat-Email").addEventListener("paste", function (e) {
            var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
            if (format.test(pastedText(e)) == true) {
                e.preventDefault();
                alert(orderSnapinLabelObj.pasteInvalidTextMsg);
            } else if (document.getElementById("ErrMsg_cusCAREPreChat-Email"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-Email");
        });
        document.getElementById("cusCAREPreChat-Phone").addEventListener("paste", function (e) {
            if (/^[0-9-]*$/.test(pastedText(e)) == false) {
                e.preventDefault();
                alert(orderSnapinLabelObj.pasteInvalidTextMsg);
            } else if (document.getElementById("ErrMsg_cusCAREPreChat-Phone"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-Phone");
        });
        function checkForSpecialCharAndText(e, ele) {
            var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
            if (format.test(pastedText(e)) == true) {
                e.preventDefault();
                alert(orderSnapinLabelObj.pasteInvalidTextMsg);
            } else if (ele === "cusCAREPreChat-FirstName" && document.getElementById("ErrMsg_cusCAREPreChat-FirstName"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-FirstName");
            else if (ele === "cusCAREPreChat-LastName" && document.getElementById("ErrMsg_cusCAREPreChat-LastName"))
                removeDomElementbyId("ErrMsg_cusCAREPreChat-LastName");
        }
        function pastedText(e) {
            if (e.clipboardData && e.clipboardData.getData)
                return e.clipboardData.getData('text/plain');
            else
                return null;
        }
    
    }
    function custCarePreFormShowIssueDetailsCharRemainingOnKeyUp(preChatlableObject) {
        try {
            document.getElementById("cusCAREPreChat-IssueDescription").onkeyup = function () {
                custCarePreFormShowIssueDetailsCharRemaining(preChatlableObject);
            };
        } catch (e) {
            console.log("Error in:" + e);
        }
    }
    function custCarePreFormShowIssueDetailsCharRemaining(preChatlableObject) {
        maxCharLength = preChatlableObject.issueDescriptionLength, innerTextColor = "#767676", currentCharLength = document.getElementById("cusCAREPreChat-IssueDescription").value.length;
        document.getElementById("snappinCharCounter").innerText = currentCharLength + " / " + maxCharLength + " " + preChatlableObject.characters;
        if (currentCharLength === parseInt(maxCharLength)) {
            innerTextColor = "#c23934";
        } else {
            innerTextColor = "#767676";
        }
        document.getElementById("snappinCharCounter").style.color = innerTextColor;
    }
    //Prechat  Validation [END]
///////////////
//Reusable code
//////////////
function isSnapinInitiated(){
    snapInCareObject = sendGlobalSnapinCareObjToJson();
    if ("snapinCareChatInitiated" in snapInCareObject && snapInCareObject.snapinCareChatInitiated)
        return true;
    else
        return false;
}

function snapinCAREChatInitiatedState(booleanValue){
    snapInCareObject = sendGlobalSnapinCareObjToJson();
    snapInCareObject.snapinCareChatInitiated = booleanValue;
    saveGlobalSnapinCareObjToSession(snapInCareObject);
}
function sendGlobalSnapinCareObjToJson() {
    snapInCareObjectGlobal = sessionStorage.getItem("snapInCareObjectSession");
    snapInCareObject = JSON.parse(snapInCareObjectGlobal);
    return snapInCareObject;
}
function saveGlobalSnapinCareObjToSession(snapInCareObject) {
    if (snapInCareObject) {
        snapInCareObjectGlobal = JSON.stringify(snapInCareObject);
        sessionStorage.setItem("snapInCareObjectSession", snapInCareObjectGlobal);
    }
}
function translation(language) {
    if (language == "de") {
        this.issue = "Issue";
        this.firstName = "Vorname";
        this.lastName = "Nachname";
        this.emailAdd = "E-Mail";
        this.primPhone = "Primair telefoonnummer";
        this.issueDesc = "Probleem Beschrijving";
        this.characters = "characters";
        this.language = "de";
    } else if (language == "ja") {
        this.issue = "Issue";
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "メール";
        this.primPhone = "主に使う電話番号";
        this.issueDesc = "問題の説明";
        this.characters = "characters";
        this.language = "ja";
    } else if (language == "ko") {
        this.issue = "Issue";
        this.firstName = "이름";
        this.lastName = "성";
        this.emailAdd = "이메일";
        this.primPhone = "기본 전화 번호";
        this.issueDesc = "문제 설명";
        this.characters = "characters";
        this.language = "ko";
    } else if (language == "es") {
        this.issue = "Issue";
        this.firstName = "Nombre";
        this.lastName = "Apellidos";
        this.emailAdd = "Correo electrónico";
        this.primPhone = "Número de teléfono primario";
        this.issueDesc = "descripcion del problema";
        this.characters = "characters";
        this.language = "es";
    } else if (language == "cn") {
        this.issue = "Issue";
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "电子邮件";
        this.primPhone = "最常用的电话号码";
        this.issueDesc = "问题说明";
        this.characters = "characters";
        this.language = "zh-CN";
    } else if (language == "pt") {
        this.issue = "Issue";
        this.firstName = "Nome";
        this.lastName = "Sobrenome";
        this.emailAdd = "Email";
        this.primPhone = "Número de Telefone Principal";
        this.issueDesc = "descrição do problema";
        this.characters = "characters";
        this.language = "pt";
    } else if (language == "nl" || language == "nl_NL") {
        this.issue = "Issue";
        this.firstName = "Voornaam";
        this.lastName = "Achternaam";
        this.emailAdd = "E-mail";
        this.primPhone = "Primair telefoonnummer";
        this.issueDesc = "Probleem Beschrijving";
        this.characters = "characters";
        this.language = "nl";
    } else if (language == "fr") {
        this.issue = "Issue";
        this.firstName = "Prénom";
        this.lastName = "Nom";
        this.emailAdd = "Adresse e-mail";
        this.primPhone = "Numéro de téléphone principal";
        this.issueDesc = "Description du problème";
        this.characters = "characters"
        this.language = "fr";
    }else {
        this.issue = "Issue";
        this.firstName = "First Name";
        this.lastName = "Last Name";
        this.emailAdd = "Email Address";
        this.primPhone = "Primary Phone Number";
        this.issueDesc = "Issue Description";
        this.characters = "characters";
        this.language = "en";
    }
    console.log("Language = " + this.language);
    return this;
}
function removeDomElementbyId(id) {
    if (document.getElementById(id)) {
        let element = document.getElementById(id);
        element.parentNode.removeChild(element);
    }
}
function snapinCAREPageObserver(eleSelector) {
    try {
        snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
        snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
        snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
        snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
        snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
        if (snapInPrechatForm)
            snapInCurrentPage = "snapInPrechatForm";
        else if (snapInWaiting)
            snapInCurrentPage = "snapInWaiting";
        else if (snapInChatStarted)
            snapInCurrentPage = "snapInChatStarted";
        else if (snapInConfirmationDialoug)
            snapInCurrentPage = "snapInConfirmationDialoug";
        else if (snapInhelpBtnDisabled) {
            snapInCurrentPage = "snapInhelpBtnDisabled";
        } else if (snapInhelpBtnEnabled)
            snapInhelpBtnEnabled = "snapInhelpBtnEnabled";
        else
            snapInCurrentPage = null;
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var attributeChangeCallback = function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes.length > 0) {
                    snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
                    snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
                    snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
                    snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
                    snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
                    snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
                    snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton");
                    if (snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm") {
                        snapInCurrentPage = "snapInPrechatForm";
                        //Hide prechat form [Start]
                        serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
                        serviceSidebar.style.display = "none";
                         //Hide prechat form [end]
                    } else if (snapInWaiting && snapInCurrentPage != "snapInWaiting") {
                        snapInCurrentPage = "snapInWaiting";
                        //Show prechat form [Start]
                        serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
                        serviceSidebar.style.display = "block";
                         //Show prechat form [end]

                    } else if (snapInChatStarted && snapInCurrentPage != "snapInChatStarted") {
                        snapInCurrentPage = "snapInChatStarted";

                    } else if (snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug") {
                        snapInCurrentPage = "snapInConfirmationDialoug";
                    } else if (snapInEmbeddedServiceHelpBtn && window.getComputedStyle(snapInEmbeddedServiceHelpBtn).display === 'block') {

                        if (snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnDisabled") {
                            snapInCurrentPage = "snapInhelpBtnDisabled";

                        } else if (snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnEnabled") {
                            if (snapInCurrentPage === "snapInhelpBtnDisabled")
                                document.getElementById("cusPreChatSnapinDom").style.display = "block";
                            snapInCurrentPage = "snapInhelpBtnEnabled";
                            //If the button is enabled open Prechat form by clicking on enabled button
                            snapInhelpBtnEnabled.click();

                        } else {
                            snapInCurrentPage = 'snapInNotAvilable';
                        }
                    }
                    console.log("Your current page is: "+ snapInCurrentPage);
                }
            });
        }
        var observer = new MutationObserver(attributeChangeCallback);
        var domElement = document.querySelector(eleSelector);
        observer.observe(domElement, {
            childList: true,
            subtree: true
        });
    } catch (e) { console.log('Error in Observer - ' + e) }
}

function eleExistCareWithVariable(eleSelector, callbackFunc, value) {
    var findingEle = setInterval(function () {
        if (document.querySelector(eleSelector)) {
            try {
                callbackFunc(eleSelector, findingEle, value);
            } catch (e) {
                console.log('error in ' + callbackFunc + ' function: ' + e);
            }
        }
    }, 1000);
}
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

    if (!document.getElementById('snapinStyle')) {
        var css = '.embeddedServiceSidebarHeader,.embeddedServiceSidebarMinimizedDefaultUI{background-color:#00447C!important;border:1px!important}.embeddedServiceSidebarFormField .uiInput .uiLabel-left{padding-top:0!important;margin-top:11px;color:#444!important;font-weight:300!important}.embeddedServiceSidebarForm.formContent{background:#f1f1f1!important}.embeddedServiceHelpButton .helpButton .uiButton{background-color:#005290!important;font-family:"Salesforce Sans",sans-serif}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:#005290 solid 1px}.embeddedServiceSidebarForm .uiButton,.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important;border:none!important}.embeddedServiceSidebarForm.buttonWrapper{background:linear-gradient(to bottom,rgba(247,247,247,0) 0,rgba(247,247,247,1) calc(100% - 77px),rgba(247,247,247,1) 100%)}.embeddedServiceSidebarButton.uiButton--inverse{background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus{box-shadow:0 0 3px 0 #ddd!important}.embeddedServiceSidebarDialogState .dialogButton{border-radius:0!important}.embeddedServiceSidebarDialogState .dialogButton:not(:disabled):focus{text-decoration:none!important}.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select{color:#444!important}.embeddedServiceSidebarForm .fieldList{margin:12px 12px 0 0!important}.embeddedServiceLiveAgentStateChatHeaderOption .optionName{color:#fff!important;text-decoration:none!important}.embeddedServiceSidebarHeader .headerText{margin-bottom:0!important}.embeddedServiceSidebarMinimizedDefaultUI .minimizedImage{display:none!important}.embeddedServiceLiveAgentStateChatHeader.reconnecting.alert{background-color:#cb2b19!important;padding-top:46px!important}.embeddedServiceSidebarForm.buttonWrapper{background-color:#f1f1f1!important}.cusPreChat-modalContainer,.cusPreChat-shortHeader{font-weight:400;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus,.cusPreChat-headerItem:focus,.cusPreChat-headerItem:hover{outline:0}.cusPreChat-modalContainer{box-sizing:border-box;line-height:1.5;color:#212529;display:block;position:fixed;z-index:1001;font-family:"Salesforce Sans",sans-serif;top:0;font-size:16px;pointer-events:all;backface-visibility:hidden;text-align:left}.cusPreChat-modalContainer li,.cusPreChat-modalContainer ul{display:block;list-style:none}.cusPreChat-dockableContainer{width:320px;max-height:720px;border-radius:8px 8px 0 0;position:fixed;left:auto;bottom:0;right:20px;margin:0;height:90%;box-shadow:2px 2px 20px rgba(0,0,0,.2);z-index:15;text-align:center;overflow:hidden;max-width:40em;pointer-events:all}.cusPreChat-embeddedServiceSidebarHeader{position:absolute;top:0;width:100%;border-radius:8px 8px 0 0;background-color:#00447C;border:1px;text-align:center;pointer-events:all}.cusPreChat-shortHeader{color:#fff;border-radius:8px 8px 0 0;line-height:3;text-align:center;font-size:.875em;height:44px;clear:both;overflow:hidden;z-index:3;position:relative;transform:translate3d(0,0,0)}.cusPreChat-shortHeaderContent{position:relative;display:flex;height:100%}.cusPreChat-headerItem{color:#fff;font-size:1em;background:0 0;border:none}.cusPreChat-headerItem:focus:before,.cusPreChat-headerItem:hover:before{content:" ";position:absolute;background-color:#fff;opacity:.2;border-radius:4px;box-sizing:border-box;pointer-events:none;top:20%}.cusPreChat-closeButton,.cusPreChat-minimizeButton{transition:color .7s ease;padding:14px;line-height:0}.cusPreChat-minimizeButton:focus:before,.cusPreChat-minimizeButton:hover:before{left:6px;width:30px;height:60%}.cusPreChat-closeButton:focus:before,.cusPreChat-closeButton:hover:before{right:6px;width:30px;height:60%}.cusPreChat-assistiveText{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.cusPreChat-embeddedServiceIcon{display:flex}.cusPreChat-embeddedServiceIcon svg{display:inline-block;box-sizing:border-box;width:1em;height:1em;fill:#fff}.cusPreChat-headerText{display:flex;justify-content:center;align-items:center;flex-grow:1;align-self:stretch;width:calc(100% - 96px);color:#fff;text-decoration:none;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:1em}.cusPreChat-sidebarBody{position:absolute;width:100%;height:100%;top:44px;z-index:0;background-color:#f1f1f1;transform:translate3d(0,0,0);-webkit-overflow-scrolling:touch}.cusPreChat-sidebarLoadingIndicator{position:relative;height:100%;background-color:#fff}.cusPreChat-activeFeature{width:100%;height: 100%}.cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI{overflow:hidden;height:100%;position:absolute}.cusPreChat-formContent{width:320px;height:calc(100% - 98px);overflow-y:auto;position:relative;background-color:#f1f1f1;margin-bottom:81px;border-radius:0 0 8px 8px}.cusPreChat-fieldList{margin:5px 12px 0 0;padding:0}.cusPreChat-embeddedServiceSidebarFormField{display:block;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:40px;list-style:none;padding:0;box-sizing:border-box;margin-left:12px}.cusPreChat-embeddedServiceSidebarFormField.cusPreChat-inputSplitName{width:calc(50% - 12px);display:inline-block;vertical-align:top;margin-left:9px}.cusPreChat-split-field-container{margin-bottom:6px}.cusPreChat-uiInput{text-align:left}.cusPreChat-uiInput .cusPreChat-uiLabel-left{padding:0!important;color:#444!important;font-weight:300!important;position:relative;font-size:.75em;line-height:1.5;margin:11px .75em 2px 1px}.cusPreChat-uiInput .cusPreChat-required{position:absolute;color:#c23934;left:-6px;top:0}.cusPreChat-slds-style-inputtext{display:inline-block;line-height:30px;box-sizing:border-box;box-shadow:none;background-color:#fff;width:100%;height:44px !important;padding:0 12px !important;font-size:.875em;border:none !important;}.cusPreChat-slds-style-inputtext:focus{outline:0;box-shadow:0 0 2px 0 #007db8}.cusPreChat-buttonWrapper{text-align:center;padding:0px 24px 24px;margin:0;width:320px;position:fixed;box-sizing:border-box;bottom:44px; box-shadow: 0px -10px 5px rgba(241, 241, 241,0.7); background: #f1f1f1}.cusPreChat-embeddedServiceSidebarButton{background:#007db8;font-family:"Roboto Regular",sans-serif;border-radius:0!important;position:relative;border:none;text-shadow:none;box-shadow:none;transition:background .4s ease;color:#fff;font-size:1em;font-weight:400;width:100%;margin:0;height:44px;cursor:pointer}.cusPreChat-embeddedServiceSidebarButton:not(:disabled):focus,.cusPreChat-embeddedServiceSidebarButton:not(:disabled):hover{background:#004b6e}.cusPreChat-has-error{margin:0 0 0px;padding:0}.cusPreChat-has-error .cusPreChat-form-element__help{font-size:.75em;color:#c23934}.cusPreChat-embeddedServiceHelpButton{display:block;position:fixed;top:0;left:0;background:0 0;box-shadow:none;overflow:visible;z-index:1000;font-family:sans-serif}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:12px;right:12px;height:46px;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton{box-sizing:border-box;margin:0;padding:0 12px;height:46px;box-shadow:0 0 12px 0 rgba(0,0,0,.5);border-radius:23px;line-height:1;background:#007db8;font-size:.875em;color:#fff;font-weight:400;text-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-family:"Roboto Regular",sans-serif;width:168px;cursor:pointer;position:relative;border:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:hover::before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:23px;background-color:#000;opacity:.2;pointer-events:none}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton .cusPreChat-label{color:#fff}.cusPreChat-embeddedServiceHelpButton .cusPreChat-uiButton .cusPreChat-helpButtonLabel{position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%;line-height:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media only screen and (min-width:48em){.cusPreChat-embeddedServiceHelpButton{background-color:transparent}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:hover::before{border-radius:8px 8px 0 0}}.cusPreChat-sidebarLoadingIndicator{align-self:stretch;max-height:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;padding:0 24px}.cusPreChat-loadingBallContainer{display:inline-block}.cusPreChat-loadingBallContainer.cusPreChat-animated .cusPreChat-loadingBall{animation:cusPreChat-ballanimate 2.25s infinite ease-in-out;display:inline-block;width:1em;height:1em;border-radius:2em;font-size:8px;text-align:center;background:#0074bd;margin:3px}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-second{animation-name:cusPreChat-ballanimate-2}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-third{animation-name:cusPreChat-ballanimate-3}@keyframes cusPreChat-ballanimate{0%,32%{transform:scale(1)}16%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-2{32%,64%{transform:scale(1)}48%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-3{64%,96%{transform:scale(1)}80%{transform:scale(1.5)}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.cusPreChat-buttonWrapper{bottom: 3px;}}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'snapinStyle';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }

    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;

})();