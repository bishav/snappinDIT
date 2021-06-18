/******************************************************************************
*******************************************************************************
The following Java script file is ment only for Lightning Agent CARE Chat.
File Name: orderSupportChat
Maintained by: Bishav N R
Hosted by: eSupport Order Support Team
*******************************************************************************
******************************************************************************/

//[Function Description: Used to initiate CARE Agent Snapin Chat. The function also insures multiple chats cannot be initiated at the same time. It insures chat is retained when customer navigates to a different page.]
//[Initialization: It is initiated by eSupport team when some one clicks on Start chat from eSupportCare page which is not related to Bot.]
//[Arguments: {orderSnapinObject: Contains all the appsetting values related to the environment, which build link between eSupport and Lightning environmnet; It also contains any aditional values sent by eSupport like Customer Details, Order Details, Customer page language,etc.}]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: Null]
function triggerOrderSnapin(orderSnapinObject, orderSnapinLabelObj){
    var snapinExists = document.querySelector(".embeddedServiceSidebar"), custCarePrechatForm = document.getElementById("cusCAREPreChatSnapinDom");
    if ((!snapinExists || (snapinExists && window.getComputedStyle(snapinExists).display == 'none')) && !custCarePrechatForm){
        orderSnapinObject = create_snapinCareChatUuid(orderSnapinObject); //FY22-0203 Story #9747941: Start Speinklar Chat [START] //UUID creation
        createCusCAREpreChatSnapinDom(orderSnapinObject, orderSnapinLabelObj);
        prePopulateCustCarePreFormValues(orderSnapinObject);
        //FY21-0102 STORY 9679921: Make "Problem Description" mandatory [START]
        removeDomElementbyId("issueDescIsOptionalInCare");
        //FY21-0102 STORY 9679921: Make "Problem Description" mandatory [END]
        custCarePreFormShowIssueDetailsCharRemainingOnKeyUp(orderSnapinLabelObj);
        custCarePreChatKeypressFieldValidation(orderSnapinLabelObj);
        document.getElementById("cusCAREPreChat-minimize-btn").addEventListener("click", minimizeCustCAREPrechat);
        document.getElementById("cusCAREPreChat-close-btn").addEventListener("click", function () {assignCarePropVal("890.130.145","890.130.156"); closeCustCAREPrechat(orderSnapinLabelObj); });// FY20-1101 STORY 7089672
        document.getElementById("cusCAREPreChat-helpButtonEnabled").addEventListener("click", function () {assignCarePropVal("890.130.144","890.130.155"); maximizeCustCAREPrechat(); });  // FY20-1101 STORY 7089672
        document.getElementById("cusCAREPreChat-startChat").addEventListener("click", function () { startCAREChat(orderSnapinObject, orderSnapinLabelObj) });
    }else{
        //If the form is already avilable[START] 
        var serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
        minimizedDefaultUI =  document.querySelector(".embeddedServiceSidebar .embeddedServiceSidebarMinimizedDefaultUI"),
        chatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        if (!chatStarted){
            if  (serviceSidebar && serviceSidebar.style.display == "none"){//if prechat form is open: Open custom prechat form
                prePopulateCustCarePreFormValues(orderSnapinObject);
                // FY20-1101 STORY 7089672 [START]
                maximizeCustCAREPrechat();
                // FY20-1101 STORY 7089672 [END]

            } 
            else if(minimizedDefaultUI)//If chat has already started try to maximize the chat window
                minimizedDefaultUI.click();
            else{//If chat has not yet initiated still open prechat form
                prePopulateCustCarePreFormValues(orderSnapinObject);
                // FY20-1101 STORY 7089672 [START]
                maximizeCustCAREPrechat();
                // FY20-1101 STORY 7089672 [END]
                document.getElementById("cusCAREPreChat-minimize-btn").style.display = 'block';
                document.getElementById("cusCAREPreChat-close-btn").style.display = 'block';
            } 
         //If the form is already avilable[END]
        }
    }
    //initiate Chat
    initiateChatCARE(orderSnapinObject, orderSnapinLabelObj);
    assignCarePropVal("890.130.142","890.130.153");// FY20-1101 STORY 7089672
    
}

//[Function Description: Used for building custom prechat form, the custom prechat form helps on 1. lightning chat performance improvement, 2. Customize user prechat form user experience as per business requirement.]
//[Initialization: Form triggerOrderSnapin function.]
//[Arguments: {orderSnapinObject: It  contains any aditional values sent by eSupport like Customer Details, Order Details, Customer page language, which helps to prefill the values in prechat form.}]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: null]
function createCusCAREpreChatSnapinDom(orderSnapinObject, orderSnapinLabelObj){
    //Add order number[START]
        //Add order number and other checks[START]
        var firstHeaderLable="",secondHeaderLable="",thirdHeaderLable="",headerLableDom, pleaseFillFormMsg = orderSnapinLabelObj.orderPreChatHeader, orderInputField="";
        switch (orderSnapinObject.viewType) {
            case "Order":
                if ("DPId" in orderSnapinObject && orderSnapinObject.DPId)
                    secondHeaderLable = '<div> <b>'+orderSnapinLabelObj.DPId +':</b> '+orderSnapinObject.DPId+'</div>';
                else  if ("irnNumber" in orderSnapinObject && orderSnapinObject.irnNumber)
                    secondHeaderLable = '<div> <b>'+orderSnapinLabelObj.irnNumber +':</b> '+orderSnapinObject.irnNumber+'</div>';
                else
                    secondHeaderLable = '';
    
                if ("orderNumber" in orderSnapinObject && orderSnapinObject.orderNumber)
                    firstHeaderLable ='<div> <b>'+orderSnapinLabelObj.orderNumber +':</b> '+orderSnapinObject.orderNumber+'</div>';
                else
                    firstHeaderLable = '';
                break;
            case "DPid":
                if ("DPId" in orderSnapinObject && orderSnapinObject.DPId)
                    firstHeaderLable = '<div> <b>'+orderSnapinLabelObj.DPId +':</b> '+orderSnapinObject.DPId+'</div>';
                else  if ("irnNumber" in orderSnapinObject && orderSnapinObject.irnNumber)
                    firstHeaderLable = '<div> <b>'+orderSnapinLabelObj.irnNumber +':</b> '+orderSnapinObject.irnNumber+'</div>';
                else
                    firstHeaderLable = '';
                    break;
            case "CustomerNumber":
                if ("customerNumber" in orderSnapinObject && orderSnapinObject.customerNumber)
                    firstHeaderLable ='<div> <b>'+orderSnapinLabelObj.customerNumber +':</b> '+orderSnapinObject.customerNumber+'</div>';
                else
                    firstHeaderLable = '';
                break;
            case "PONumber":
                if ("poNumber" in orderSnapinObject && orderSnapinObject.poNumber)
                    firstHeaderLable ='<div> <b>'+orderSnapinLabelObj.poNumber +':</b> '+orderSnapinObject.poNumber+'</div>';
                else
                    firstHeaderLable = '';
                break;
            case "GeneralChat":
            case "":
                    firstHeaderLable = '';
                break;
        }
        if("issueType" in orderSnapinObject && orderSnapinObject.issueType != "" && orderSnapinObject.issueType != null && orderSnapinObject.issueType != undefined && "issueType" in orderSnapinLabelObj && orderSnapinLabelObj.issueType != "" && orderSnapinLabelObj.issueType != null && orderSnapinLabelObj.issueType != undefined && orderSnapinObject.issueType !='None')
            thirdHeaderLable ='<div id="careIssueTypeDom" assignedCareBtn="'+orderSnapinObject.buttonId+'"> <b>'+orderSnapinLabelObj.issueType +': </b><span id="careIssueTypeLabVal">'+orderSnapinObject.issueType+'</span></div>';
        
       if(orderSnapinObject.viewType == "GeneralChat"){
            headerLableDom = '<div id="readonlyCAREPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 17px 5px 7px .75em;text-align: left;position: relative;font-size: 1.2em;color: #666;font-weight: 100;">'+pleaseFillFormMsg+'</div>';
            orderInputField = '<li class="cusPreChat-inputOrderNum cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputOrderNum cusPreChat-uiInput--default cusPreChat-uiInput--input"><label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"><span>'+orderSnapinLabelObj.lblOrdNoOptional+' </span><span>'+orderSnapinLabelObj.optional+'</span></label><input id="cusCAREPreChat-OrderNum" class="cusPreChat-OrderNum form-control cusPreChat-input" maxlength="15" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div></li>';
        }else  if (firstHeaderLable !='' || secondHeaderLable !='' || thirdHeaderLable !='')
            headerLableDom ='<div id="readonlyCAREPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 8px 1.5em 0px 1em; text-align: left;position: relative;font-size: .75em;color: #444444;">'+firstHeaderLable+secondHeaderLable+thirdHeaderLable+'</div>';
    

         //Add order number and other checks[END]
    // Add order number[END]

    var domEle = '<div id="cusCAREPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer"><div class="cusPreChat-embeddedServiceSidebarHeader"><div class="cusPreChat-shortHeader"><div class="cusPreChat-shortHeaderContent"> <h2 class="cusPreChat-headerText"><div class="cusPreChat-headerTextContent"> <span id="cusCAREPreChat-headerTextLabel">' + orderSnapinLabelObj.chatHeader + '</span> <span id="cusCAREPreChat-headerSubtext"> </span></div></h2><button id="cusCAREPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" data-key="minimize_window" aria-hidden="true" viewBox="0 0 52 52" class="slds-icon slds-icon-text-default slds-icon_x-small"><g><path d="M50 48.5c0 .8-.7 1.5-1.5 1.5h-45c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h45c.8 0 1.5.7 1.5 1.5v3z"></path></g></svg> </span> </button> <button id="cusCAREPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button></div></div></div><div class="cusPreChat-sidebarBody"><div id="cusCAREPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusCAREPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">' + orderSnapinLabelObj.chatUnavailableMessage + '</div><div> <button id="cusCAREPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat</span> </button></div></div><div id="cusCAREPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"><div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"><div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"><div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"><div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"><ul class="cusPreChat-fieldList">'+headerLableDom+'<li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">' + orderSnapinLabelObj.firstName + '</span> </label> <input id="cusCAREPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div> </span></li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">' + orderSnapinLabelObj.lastName + '</span> </label> <input id="cusCAREPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div> </span></li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>' + orderSnapinLabelObj.emailAddress + '</span> </label> <input id="cusCAREPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>' + orderSnapinLabelObj.phoneNumber + '</span> </label> <input id="cusCAREPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"></div></li>'+orderInputField+'<li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="CareIssue_Description_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>' + orderSnapinLabelObj.issueDescription + '</span> </label><textarea id="cusCAREPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input" maxlength="' + orderSnapinLabelObj.issueDescriptionLength + '" type="text" aria-describedby="" placeholder="" required=""></textarea><div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / ' + orderSnapinLabelObj.issueDescriptionLength + ' ' + orderSnapinLabelObj.characters + '</div></div></li></ul><div style="font-size: 12px;color:#767676;text-align: left;margin: 2.5em 1.75em; font-style: italic;color:#444444;">' + orderSnapinLabelObj.customerPrivacyDesc + '</div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusCAREPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">' + orderSnapinLabelObj.startChat + '</span> </button></div></div></div></div></div></div></div></div><div id="cusCAREPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"><div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusCAREPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)"> <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span><div class="cusPreChat-helpButtonLabel" id="cusCAREPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">' + orderSnapinLabelObj.chatHeader + '</span></div> </button></div></div>';
    var body = document.body || document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('beforeend', domEle);
}

//[Function Description: Minimizes prechat form when customer clicks on minimize button.]
//[Initialization: Form triggerOrderSnapin function. After the prechat from has been rendered in UI]
//[Arguments: null]
//[Return: null]
function minimizeCustCAREPrechat(){
    assignCarePropVal("890.130.143","890.130.154");// FY20-1101 STORY 7089672
    document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = 'block';
    document.getElementById("cusCAREPreChatSnapinDom").style.display = 'none';
}

//[Function Description: Close/Hide Prechat form  when customer clicks on close button.]
//[Initialization: Form triggerOrderSnapin function. After the prechat from has been rendered in UI]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: null]
function closeCustCAREPrechat(orderSnapinLabelObj){
    document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = 'none';
    document.getElementById("cusCAREPreChatSnapinDom").style.display = 'none';

    var errorMsgs = document.querySelectorAll(".cusPreChat-has-error");
    errorMsgs.forEach(function (errorMsg) {
        removeDomElementbyId(errorMsg.id);// FY20-1102 DEFECT 7204725
    });
    removecustCareFormValues();
    custCarePreFormShowIssueDetailsCharRemaining(orderSnapinLabelObj);

}

//[Function Description: Remove prechat form values when prechat form is closed or chat is ended.]
//[Initialization: {From closeCustCAREPrechat function}]
//[Initialization: {Form startCAREChat function: If the chat initiate between an agent and customer succfully}]
//[Arguments: null]
//[Return: null]
function removecustCareFormValues() {
    inputFields = document.querySelectorAll(".cusPreChat-input");
    inputFields.forEach(function (inputField) {
        if (inputField.value)
            inputField.value = "";
    });
}

//[Function Description: Maximize Prechat form when customer clicks on minimized button or clicks on Start chat button for second time on eSupport end.]
//[Initialization: Form triggerOrderSnapin function: After the prechat from has been rendered in UI]
//[Arguments: null]
//[Return: null]
function maximizeCustCAREPrechat(){
    document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = 'none';
    document.getElementById("cusCAREPreChatSnapinDom").style.display = 'block';
}

//[Function Description: Checks if the Agent Chat CARE is initiates or not. If it is initiated, it opens existing chat. Else start's a new lightning chat connection]
//[Initialization: Form triggerOrderSnapin function: This is triggred at the end in the backgroung to check if there is any existing Lignting Chat connection]
//[Arguments: {orderSnapinObject: Contains all the appsetting values related to the environment, which build link between eSupport and Lightning environmnet; It also contains any aditional values sent by eSupport like Customer Details, Order Details, Customer page language,etc.}]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: Null]
function initiateChatCARE(orderSnapinObject, orderSnapinLabelObj){
    var snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
    if (!snapinAlreadyInitiated){
        initOrderSnapin(orderSnapinObject, orderSnapinLabelObj);
    }
}

//[Function Description: Stabilish connection between eSupport and SFDC lightning chat]
//[Initialization: Form initiateChatCARE function: This established connection between correct environments in lightning and eSupport. Send Additional information back to lightning throught snapIn connection]
//[Arguments: {orderSnapinObject: Contains all the appsetting values related to the environment, which build link between eSupport and Lightning environmnet; It also contains any aditional values sent by eSupport like Customer Details, Order Details, Customer page language,etc.}]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: Null]
function initOrderSnapin(orderSnapinObject, orderSnapinLabelObj){
    snapinCAREPageObserver("body", orderSnapinLabelObj);
    snapInCareClickListners();// FY20-1101 STORY 7089672
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; //Or false
        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';
        if ("language" in orderSnapinObject)
            translatedLabels = translationCare(orderSnapinObject.language);
        else
            translatedLabels = translationCare("en");
        embedded_svc.settings.language = translatedLabels.language;
        var issueVal
        if("issueType" in orderSnapinObject && orderSnapinObject.issueType != "" && orderSnapinObject.issueType != null && orderSnapinObject.issueType != undefined && orderSnapinObject.issueType !='None')
            issueVal = orderSnapinObject.issueType;
        else
            issueVal = "None";

        if("orderNumber" in orderSnapinObject && orderSnapinObject.orderNumber != ""){
            //Order Number and BUID merger[START]
            if (orderSnapinObject.BUID){
                sendOrderNumber = orderSnapinObject.orderNumber+'-'+orderSnapinObject.BUID;
            }
            else{
                sendOrderNumber = orderSnapinObject.orderNumber;
            }
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
                },{
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
                },  {
                    "label": "Subject",
                    "value": issueVal,
                    "transcriptFields": ["Issue__c"]
                }//FY22-0203 Story #9747941: Start Speinklar Chat [START] 
                ,  { 
                    "label": "Sprinklr Chatbot Routed", 
                    "value": false, 
                    "transcriptFields": ["Sprinklr_Chatbot_Routed__c"] 
                }, { 
                    "label": "Case Number", 
                    "value": "", 
                    "transcriptFields": ["Case_Number__c"] 
                }
                //FY22-0203 Story #9747941: Start Speinklar Chat [END] 
            ];

            embedded_svc.settings.extraPrechatInfo = [{
                "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "LastName",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.lastName
                }, {
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "FirstName",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.firstName
                }, {
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "Email",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.emailAdd
                }, {
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "Primary_Phone__c",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.primPhone
                }
                ],
                "entityName": "Contact",
                "saveToTranscript": ""
            }, {
                "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "External_ID__c",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": "Order Number"
                }
                ],
                "entityName": "Order",
                "saveToTranscript": "OrderNumber__c"
            }, {
                "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "Issue_Description__c",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.issueDesc
                }
                //FY21-0502 Defect #8096827 [START]
                ,{
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "CARE_Chat_Order_Number__c",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": "CARE Chat Order Number"
                }//FY21-0502 Defect #8096827 [END]
                ],
                "entityName": "Case"
            }
            ];
        }else{
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
                },{
                    "label": "Chat Source",
                    "value": 'CARE',
                    "transcriptFields": ["Chat_Source__c"]
                },{
                    "label": translatedLabels.issueDesc,
                    "transcriptFields": ["Description__c"]
                }, {
                    "label": "CARE Chat Order Number",
                    "transcriptFields": ["Order_Number__c"]
                }
            ];

            embedded_svc.settings.extraPrechatInfo = [{
                "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "LastName",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.lastName
                }, {
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "FirstName",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.firstName
                }, {
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "Email",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.emailAdd
                }, {
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "Primary_Phone__c",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.primPhone
                }
                ],
                "entityName": "Contact",
                "saveToTranscript": ""
            }, 
            {
                "entityFieldMaps": [{
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "Issue_Description__c",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": translatedLabels.issueDesc
                },{
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "CARE_Chat_Order_Number__c",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": "CARE Chat Order Number"
                }
                ],
                "entityName": "Case",
                "saveToTranscript": ""
            }
            ];

        }

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
 if ("c_orderNumber" in orderSnapinObject)
     orderNumber = orderSnapinObject.c_orderNumber;
 else
    orderNumber = "";
    embedded_svc.settings.prepopulatedPrechatFields = {
        FirstName: firstNameVal,
        LastName: lastNameVal,
        Email: emailAddVal,
        Primary_Phone__c: primePhoneVal,
        Issue_Description__c: issueDescription,
        CARE_Chat_Order_Number__c: orderNumber
    };
//Prefill prechat form[END]
//snapinEventHandler[START]
embedded_svc.addEventHandler("onConnectionError", function (data) {
    snapinCAREChatInitiatedState(false);
    assignCarePropVal("890.130.154", "890.130.164", "SNAPIN: Chat Ended", "SNAPIN: Chat Ended");//FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter
});
embedded_svc.addEventHandler("onIdleTimeoutOccurred", function (data) {
    sessionStorage.removeItem("snapInCareObjectSession");
    assignCarePropVal("890.130.154", "890.130.164", "SNAPIN: Chat Ended", "SNAPIN: Chat Ended");//FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter
});
embedded_svc.addEventHandler("onChatEndedByChasitor", function (data) {
    sessionStorage.removeItem("snapInCareObjectSession");
    assignCarePropVal("890.130.154", "890.130.164", "SNAPIN: Chat Ended", "SNAPIN: Chat Ended");//FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter
});

embedded_svc.addEventHandler("onChatEndedByAgent", function (data) {
    sessionStorage.removeItem("snapInCareObjectSession");
    assignCarePropVal("890.130.154", "890.130.164", "SNAPIN: Chat Ended", "SNAPIN: Chat Ended");//FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter
});
embedded_svc.addEventHandler("onAgentMessage", function(data) {
    snapinCAREChatInitiatedState(true);
});
embedded_svc.addEventHandler("onChasitorMessage", function(data) {
    snapinCAREChatInitiatedState(true);//Fix for defect 7030965
});
//FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter [START]
embedded_svc.addEventHandler("onChatEstablished", function (data) {
    assignCarePropVal("890.130.152", "890.130.163", "SNAPIN: Chat Started", "SNAPIN: Chat Started");
});
//FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter [END]

//snapinEventHandler[END]
//Defect fix for 7041092 switch Button [START]
embedded_svc.settings.directToButtonRouting = function() {      
    if (document.getElementById("careIssueTypeDom")){
        var newBtnID = document.getElementById("careIssueTypeDom").getAttribute("assignedCareBtn");
        if (newBtnID){
            snapInCareObject = sendGlobalSnapinCareObjToJson();
            snapInCareObject.buttonId = newBtnID;
            saveGlobalSnapinCareObjToSession(snapInCareObject);
            return newBtnID;
        } 

    }  
}
//Defect fix for 7041092 switch Button [END]

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
    var snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
    if (!snapinAlreadyInitiated) {
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
}

//[Function Description: Start chat between agetn any customer after prechat form is successfully filled]
//[Initialization: Form triggerOrderSnapin function: When a custome clicks on Start chant button form Prechat form.]
//[Arguments: {orderSnapinObject: Contains all the appsetting values related to the environment, which build link between eSupport and Lightning environmnet; It also contains any aditional values sent by eSupport like Customer Details, Order Details, Customer page language,etc.}]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: Null]
function startCAREChat(orderSnapinObject, orderSnapinLabelObj){
    if(custCarePreFormValidation(orderSnapinLabelObj)){
        loadingSnapinCareQueue();//FY22: Performance Unit testing
        //FY22-0203 : Defect Fix 9916105 [START]
        setTimeout(function(){ 
            assignCarePropVal("890.130.148","890.130.159");// FY20-1101 STORY 7089672
            orderSnapinObject = addCustCareFormDetailsTo(orderSnapinObject);
            saveGlobalSnapinCareObjToSession(orderSnapinObject);
            //FY21-1003 Story #9060750: GBS Care - Chat - Pre-chat Form Agent Availability Check [START]         
            if (checkSnapinCareQueueStatus(orderSnapinObject) == 1) {
                //FY22-0203 Story #9747941: Start Speinklar Chat [START] 
                if("isVirtualAgentEnabled" in orderSnapinObject && orderSnapinObject.isVirtualAgentEnabled && checkSprinklrCAREChatBot(orderSnapinObject)){
                    startCareChatBotSprinklr(orderSnapinObject);// Function belongs to eSupport
                }else{
                    eleExistCareWithVariable('.embeddedServiceSidebar .startButton', CareChatStarted, orderSnapinObject);
                    removecustCareFormValues();// FY20-1101 DEFECT 7204725
                }
                //FY22-0203 Story #9747941: Start Speinklar Chat [END] 
            } else {
                careAgentUnavailableMsg();
            }
            //FY21-1003 Story #9060750: GBS Care - Chat - Pre-chat Form Agent Availability Check [END]
        }, 100);
        //FY22-0203 : Defect Fix 9916105 [END]
    }
}

//[Function Description: Show loading before customer is connected on Lightning Chat Queue in case there is some buffer time]
//[Initialization: Form startCAREChat function: run as soon as all the prechat form validation is successfully completed]
//[Arguments: Null]
//[Return: Null]
function loadingSnapinCareQueue() {
    if(document.getElementById("cusCAREPreChatSnapinDom")){
        document.getElementById("cusCAREPreChat-sidebarLoadingIndicator").style.display = 'flex';
        document.getElementById("cusCAREPreChat-hideWhileLoading").style.display = 'none';
        document.getElementById("cusCAREPreChat-minimize-btn").style.display = 'none';
        document.getElementById("cusCAREPreChat-close-btn").style.display = 'none';
        removeCareLoaderIn10();
    }
}

//[Function Description: If connecting to a queue takes more than 30 seconds consider agents are offline.]
//[Initialization: Form loadingSnapinCareQueue function: Wait for 30 seconds on loading page.]
//[Arguments: Null]
//[Return: Null]
function removeCareLoaderIn10(){
    setTimeout(function () {
        careAgentUnavailableMsg();//FY21-1003 Story #9060750: GBS Care - Chat - Pre-chat Form Agent Availability Check
    }, 30000);
}

//[Function Description: Remove/Hide loading icon when required.]
//[Initialization: Form snapinCAREPageObserver function: Remove/Hide loader when observer chases a chat is on queue.]
//[Arguments: Null]
//[Return: Null]
function snapinCareQueueLoaded() {
    //DEFECT #7163760 [START]
    if(document.querySelector(".embeddedServiceSidebar") && document.getElementById("cusCAREPreChatSnapinDom")){
        document.getElementById("cusCAREPreChat-sidebarLoadingIndicator").style.display = 'none';
        document.getElementById("cusCAREPreChat-hideWhileLoading").style.display = 'block';
        document.getElementById("cusCAREPreChat-minimize-btn").style.display = 'block';
        document.getElementById("cusCAREPreChat-close-btn").style.display = 'block';
        
        document.querySelector(".embeddedServiceSidebar").style.display = 'block';
        document.getElementById("cusCAREPreChatSnapinDom").style.display = 'none';
        document.getElementById("cusCAREPreChat-alertMsgContainer").style.display = 'none';
    }
    //DEFECT #7163760 [END]
    //Close prechat form [Start]
    serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
    serviceSidebar.style.display = "block";
    //Close prechat form [end]
}

//[Function Description: Check if the Chat is established between customer and agent]
//[Initialization: Form startCAREChat function: Keepchecking if chat has been stablished.]
//[Arguments: {eleSelector: If the eleSelector DOM element exists}]
//[Arguments: {findingEle: Stop checking vor the DOM element by clearing interval for findingEle}]
//[Arguments: {orderSnapinObject: Contains all the appsetting values related to the environment, which build link between eSupport and Lightning environmnet; It also contains any aditional values sent by eSupport like Customer Details, Order Details, Customer page language,etc.}]
//[Return: Null]
function CareChatStarted(eleSelector, findingEle, orderSnapinObject) {
    try {
        changeCarePrechatValues(orderSnapinObject);
        document.querySelector(" .embeddedServiceSidebar .dockableContainer .prechatUI  .embeddedServiceSidebarForm .embeddedServiceSidebarButton").click();
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}

//[Function Description: Changes shapInObject values in session based on what was typed by customer in the prechat form.]
//[Initialization: Form CareChatStarted function: Send correct information to Agent once connection is established.]
//[Arguments: {orderSnapinObject:It also contains any aditional values sent by eSupport/customer like Customer Details, Order Details, Customer page language,etc.}]
//[Return: Null]
function changeCarePrechatValues(snapInObject) {
    var state = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState();
    var prechatFields = state.get("v.prechatFields");
    prechatFields.forEach(function (prechatField) {
        if (prechatField.name === "FirstName") {
            prechatField.value = snapInObject.c_firstName
        } else if (prechatField.name === "LastName") {
            prechatField.value = snapInObject.c_lastName
        } else if (prechatField.name === "Email") {
            prechatField.value = snapInObject.c_email
        } else if (prechatField.name === "Primary_Phone__c") {
             phone = snapInObject.c_phoneNo;
             prechatField.value = phone.replace(/[&\/\\#!@,+$~%.'":*?<>{}^a-zA-Z]/g, ''); //DEFECT 6745488
        } else if (prechatField.name === "Issue_Description__c") {
            prechatField.value = snapInObject.c_issueDescription
         }else if (prechatField.name === "CARE_Chat_Order_Number__c" && snapInObject.c_orderNumber) {
            prechatField.value = snapInObject.c_orderNumber
         }
    });
    state.set("v.prechatFields", prechatFields);
}

//[Function Description: Save new customer details in session for future use, example: if there is any navigation change or Page refresh]
//[Initialization: Form startCAREChat function: To save correct information on sesson storage.]
//[Arguments: {orderSnapinObject:It also contains any aditional values sent by eSupport/customer like Customer Details, Order Details, Customer page language,etc.}]
//[Return: snapInObject: With new details shared by Customers on the Custom prechat form]
function addCustCareFormDetailsTo(snapInObject) {
    snapInObject.c_firstName = document.getElementById("cusCAREPreChat-FirstName").value;
    snapInObject.c_lastName = document.getElementById("cusCAREPreChat-LastName").value;
    snapInObject.c_email = document.getElementById("cusCAREPreChat-Email").value;
    snapInObject.c_phoneNo = document.getElementById("cusCAREPreChat-Phone").value;
    snapInObject.c_issueDescription = document.getElementById('cusCAREPreChat-IssueDescription').value;
    if(document.getElementById('cusCAREPreChat-OrderNum'))
        snapInObject.c_orderNumber = document.getElementById('cusCAREPreChat-OrderNum').value;
    if(document.getElementById("careIssueTypeLabVal")){
        snapInObject.issueType = document.getElementById("careIssueTypeLabVal").innerText;
        snapInObject.buttonId = document.getElementById("careIssueTypeDom").getAttribute("assignedCareBtn");
    }
    return snapInObject;
}

//[Function Description: Show details on Custom Prechat form input field if sent by eSupport or saved from previous chat]
//[Initialization: Form triggerOrderSnapin function: To show the details in UI based on saved values in sesson storage]
//[Arguments: {orderSnapinObject:It also contains any aditional values sent by eSupport/customer like Customer Details, Order Details, Customer page language,etc.}]
//[Return: Null]
function prePopulateCustCarePreFormValues(snapInObject) {
    if ("firstName" in snapInObject && snapInObject.firstName !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusCAREPreChat-FirstName").value = snapInObject.firstName;
    if ("lastName" in snapInObject && snapInObject.lastName !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusCAREPreChat-LastName").value = snapInObject.lastName;
    if ("emailAddress" in snapInObject && snapInObject.emailAddress !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusCAREPreChat-Email").value = snapInObject.emailAddress;
    if ("phoneNumber" in snapInObject && snapInObject.phoneNumber !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusCAREPreChat-Phone").value = snapInObject.phoneNumber;
    if ("issueDescription" in snapInObject && snapInObject.issueDescription !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusCAREPreChat-IssueDescription").value = snapInObject.issueDescription;
}

//Prechat  Validation [START]

//[Function Description: Check if any required field is empty in prechat form]
//[Initialization: Form custCarePreFormValidation function: TO check if each mandatory input values are empty]
//[Arguments: {domElement:Element that needs to be checked}]
//[Arguments: {requiredValue:Message to be displayed to the customer}]
//[Return: false: cannot start chat unless required values are filled]
function cusCarePreChatEleIsEmpty(domElement, requiredValue) {
    cusCarePreChatErrorMsgPlaceholder(domElement, requiredValue);
    return false;
}

//[Function Description: Check if email is valid and is not blacklisted]
//[Initialization: Form custCarePreFormValidation function: To check if chat can be started with the provided email ID]
//[Arguments: {domElement:Element that needs to be checked}]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: false: cannot start chat without valid email address]
function cusCarePreChatInvalidEmail(domElement, orderSnapinLabelObj) {
    if (!cusCarePreChatvalidateEmail(domElement.value) || cusCarePreChatBlockListEmailValidation(domElement.value, orderSnapinLabelObj.blocklistEmails)) {
        cusCarePreChatErrorMsgPlaceholder(domElement, orderSnapinLabelObj.emailValidation);
        return false;
    }
}

//[Function Description: Check if email is valid]
//[Initialization: Form cusCarePreChatInvalidEmail function: Validity of the email]
//[Arguments: {email:Input email}]
//[Return: true or false: depending on the validity of the email]
function cusCarePreChatvalidateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//[Function Description: Check if email with blacklist]
//[Initialization: Form cusCarePreChatInvalidEmail function: is blacklisted or not]
//[Arguments: {email:Input email}]
//[Arguments: {blockList:list of emails that are black listed}]
//[Return: true or false: depending on the validity of the blacklisted email]
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

//[Function Description: Show error message in Prechat form UI]
//[Initialization: Message displayed in from many places. Example: cusCarePreChatInvalidEmail, cusCarePreChatInvalidEmail]
//[Arguments: {domElement:Element that needs to be checked}]
//[Arguments: {message: error message that is to be displayed}]
//[Return: Null]
function cusCarePreChatErrorMsgPlaceholder(domElement, message) {
    try {
        var referenceNode = domElement.parentNode;
        var el = document.createElement("ul");
        el.innerHTML = '<li class="cusPreChat-form-element__help">' + message + '</li>';
        el.id = 'ErrMsg_' + domElement.id;
        el.className = "cusPreChat-has-error cusPreChat-uiInput";
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    } catch (e) {
        console.log(e);
    }
}

//[Function Description: Validate all the fields before adding customer to the queue]
//[Initialization: Form startCAREChat function: if we are good to connect to chat queue]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: true or false: If we are good the connect to agetn queue or not]
function custCarePreFormValidation(orderSnapinLabelObj) {
    var acceptForm,
        firstNameDOM = document.getElementById("cusCAREPreChat-FirstName"),
        lastNameDOM = document.getElementById("cusCAREPreChat-LastName"),
        emailDOM = document.getElementById("cusCAREPreChat-Email"),
        phoneDOM = document.getElementById("cusCAREPreChat-Phone"),
        IssueDescDOM = document.getElementById("cusCAREPreChat-IssueDescription");
        
    if (document.getElementById("ErrMsg_cusCAREPreChat-Email")) {
        var element = document.getElementById("ErrMsg_cusCAREPreChat-Email");
        element.parentNode.removeChild(element);
    }
    if (!emailDOM.value)
        acceptForm = cusCarePreChatEleIsEmpty(emailDOM, orderSnapinLabelObj.emailRequiredValidation);
    else
        acceptForm = cusCarePreChatInvalidEmail(emailDOM, orderSnapinLabelObj);


//FY22-0702 STORY 10577407: Auto Fill Validation on Pre Chat Form [START]

    /*
    if (document.getElementById("ErrMsg_cusCAREPreChat-FirstName") && !firstNameDOM.value) {
        acceptForm = false;
    } else if (!firstNameDOM.value)
        acceptForm = cusCarePreChatEleIsEmpty(firstNameDOM, orderSnapinLabelObj.firstNameValidation);
    else if (document.getElementById("ErrMsg_cusCAREPreChat-FirstName")) {
        var element = document.getElementById("ErrMsg_cusCAREPreChat-FirstName");
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 10071218
        if (checkErrMsgValidation(firstNameDOM, "FirstName", format, true)) ///FY20-1102 DEFECT 10071218
            acceptForm = false;
        else
            element.parentNode.removeChild(element);
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    else{
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(firstNameDOM, "FirstName", format, true)){
            cusCarePreChatErrorMsgPlaceholder(firstNameDOM, orderSnapinLabelObj.firstNameValidation);
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]

    if (document.getElementById("ErrMsg_cusCAREPreChat-LastName") && !lastNameDOM.value) {
        acceptForm = false;
    } else if (!lastNameDOM.value)
        acceptForm = cusCarePreChatEleIsEmpty(lastNameDOM, orderSnapinLabelObj.lastNameValidation);
    else if (document.getElementById("ErrMsg_cusCAREPreChat-LastName")) {
            var element = document.getElementById("ErrMsg_cusCAREPreChat-LastName");
            var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 10071218
            if (checkErrMsgValidation(firstNameDOM, "FirstName", format, true)) ///FY20-1102 DEFECT 10071218
                acceptForm = false;
            else
                element.parentNode.removeChild(element);
        }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    else{
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(lastNameDOM, "LastName", format, true)){
            cusCarePreChatErrorMsgPlaceholder(lastNameDOM, orderSnapinLabelObj.lastNameValidation);
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]
*/

    if (document.getElementById("ErrMsg_cusCAREPreChat-FirstName")) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (checkErrMsgValidation(firstNameDOM, "FirstName", format, true))
            acceptForm = false;
    } else if (!firstNameDOM.value)
        acceptForm = cusPreChatEleIsEmpty(firstNameDOM, orderSnapinLabelObj.firstNameValidation);
    else {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (checkErrMsgValidation(firstNameDOM, "FirstName", format, true)) {
            cusPreChatErrorMsgPlaceholder(firstNameDOM, orderSnapinLabelObj.firstNameInValid);
            acceptForm = false;
        }
    }

    if (document.getElementById("ErrMsg_cusCAREPreChat-LastName")) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (checkErrMsgValidation(lastNameDOM, "LastName", format, true))
            acceptForm = false;
    } else if (!lastNameDOM.value)
        acceptForm = cusPreChatEleIsEmpty(lastNameDOM, orderSnapinLabelObj.lastNameValidation);
    else {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (checkErrMsgValidation(lastNameDOM, "LastName", format, true)) {
            cusPreChatErrorMsgPlaceholder(lastNameDOM, orderSnapinLabelObj.lastNameInValid);
            acceptForm = false;
        }
    }
//FY22-0702 STORY 10577407: Auto Fill Validation on Pre Chat Form [END]	

    if (document.getElementById("ErrMsg_cusCAREPreChat-Phone") && !phoneDOM.value) {
        acceptForm = false;
    } else if (!phoneDOM.value)
        acceptForm = cusCarePreChatEleIsEmpty(phoneDOM, orderSnapinLabelObj.phoneRequiredValidation);
    else if (document.getElementById("ErrMsg_cusCAREPreChat-Phone")) {
            var element = document.getElementById("ErrMsg_cusCAREPreChat-Phone");
            var format = /^[0-9-]*$/; //FY20-1102 DEFECT 10071218
            if (checkErrMsgValidation(phoneDOM, "Phone", format, false)) //FY20-1102 DEFECT 10071218
                acceptForm = false;
            else
                element.parentNode.removeChild(element);
        }
     //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
     else{
        var formatPhoneCorrect = /^[0-9-]*$/;
        if (checkErrMsgValidation(phoneDOM, "Phone", formatPhoneCorrect, false)){
            cusPreChatErrorMsgPlaceholder(phoneDOM, orderSnapinLabelObj.phoneRequiredValidation);
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]
    if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription") && !IssueDescDOM.value) {
        acceptForm = false;
    } else if (!IssueDescDOM.value && !document.getElementById("issueDescIsOptionalInCare"))//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description
        acceptForm = cusCarePreChatEleIsEmpty(IssueDescDOM, orderSnapinLabelObj.issueDescriptionValidation);
    else if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription")) {
            var element = document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription");
            element.parentNode.removeChild(element);
        }
    if (acceptForm === undefined) acceptForm = true;
    return acceptForm;
}

//[Function Description: Any value intered in chat is valid or not fo the spacific field]
//[Initialization: Form startCAREChat function: If the key should be entered or not]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: null]
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
    if(document.getElementById("cusCAREPreChat-OrderNum"))
    document.getElementById("cusCAREPreChat-OrderNum").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123) || (k > 47 && k < 58) || k == 45  || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusCAREPreChat-OrderNum"))
            removeDomElementbyId("ErrMsg_cusCAREPreChat-OrderNum");
    }

    document.getElementById("cusCAREPreChat-FirstName").addEventListener("paste", function (e) {
        checkForSpecialCharAndText(e, "cusCAREPreChat-FirstName");
    });
    document.getElementById("cusCAREPreChat-LastName").addEventListener("paste", function (e) {
        checkForSpecialCharAndText(e, "cusCAREPreChat-LastName");
    });
    document.getElementById("cusCAREPreChat-IssueDescription").addEventListener("paste", function (e) {
        //FY22-0702 STORY 10571328: Copy Paste Validation on Pre Chat Form [START]
        /*
        var format = /[<>]/;
        //if (pastedText(e).includes('<') || pastedText(e).includes('>')) {
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(orderSnapinLabelObj.pasteInvalidTextMsg);
        } else*/ 
        //FY22-0702 STORY 10571328: Copy Paste Validation on Pre Chat Form [END]
        if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription"))
            removeDomElementbyId("ErrMsg_cusCAREPreChat-IssueDescription");
    });
    document.getElementById("cusCAREPreChat-Email").addEventListener("paste", function (e) {
        var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(orderSnapinLabelObj.emailValidation); //FY22-0702 STORY 10571328: Copy Paste Validation on Pre Chat Form
        } else if (document.getElementById("ErrMsg_cusCAREPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusCAREPreChat-Email");
    });
    document.getElementById("cusCAREPreChat-Phone").addEventListener("paste", function (e) {
        if (/^[0-9-]*$/.test(pastedText(e)) == false) {
            e.preventDefault();
            alert(orderSnapinLabelObj.phoneValidation); //FY22-0702 STORY 10571328: Copy Paste Validation on Pre Chat Form
        } else if (document.getElementById("ErrMsg_cusCAREPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusCAREPreChat-Phone");
    });
    if(document.getElementById("cusCAREPreChat-OrderNum"))
    document.getElementById("cusCAREPreChat-OrderNum").addEventListener("paste", function (e) {
        //FY22-0702 STORY 10571328: Copy Paste Validation on Pre Chat Form [START]
        /*var format = /[!@#$@%^&*()_+\=\[\]{};':"\\|,.<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(orderSnapinLabelObj.pasteInvalidTextMsg);
        } else*/ 
        //FY22-0702 STORY 10571328: Copy Paste Validation on Pre Chat Form [END]
        if (document.getElementById("ErrMsg_cusCAREPreChat-OrderNum"))
            removeDomElementbyId("ErrMsg_cusCAREPreChat-OrderNum");
    });
    
    //FY22-0302 STORY 9874555: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    document.getElementById("cusCAREPreChat-FirstName").addEventListener("change", function () {
        checkForSpecialCharAndText(this.value, this.id);
    });
    document.getElementById("cusCAREPreChat-LastName").addEventListener("change", function () {
        checkForSpecialCharAndText(this.value, this.id);
    });
    document.getElementById("cusCAREPreChat-IssueDescription").addEventListener("change", function () {
        if (this.value && document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription"))
            removeDomElementbyId("ErrMsg_cusCAREPreChat-IssueDescription");
    });
    document.getElementById("cusCAREPreChat-Email").addEventListener("change", function () {
        var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
        if(!format.test(this.value) && document.getElementById("ErrMsg_cusCAREPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusCAREPreChat-Email");
    });
    document.getElementById("cusCAREPreChat-Phone").addEventListener("change", function () {
        if (/^[0-9-]*$/.test(this.value) == true && document.getElementById("ErrMsg_cusCAREPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusCAREPreChat-Phone");
        else if (/^[0-9-]*$/.test(this.value) == false && !document.getElementById("ErrMsg_cusCAREPreChat-Phone"))
            cusCarePreChatErrorMsgPlaceholder(this, orderSnapinLabelObj.phoneValidation); //FY22-0702 STORY 10577407: Auto Fill Validation on Pre Chat Form
    });
    //FY22-0302 STORY 9874555: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]

    function checkForSpecialCharAndText(e, ele) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            //FY22-0702 STORY 10571328: Copy Paste Validation on Pre Chat Form[START]
            if (ele === "cusCAREPreChat-FirstName")
                alert(orderSnapinLabelObj.firstNameInValid);
            else if (ele === "cusCAREPreChat-LastName")
                alert(orderSnapinLabelObj.lastNameInValid);
            //FY22-0702 STORY 10571328: Copy Paste Validation on Pre Chat Form[END]
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

//[Function Description: Check is customer typed anything on Issue Description field in Prechat form.]
//[Initialization: Form triggerOrderSnapin function: to show total charector count and charector remaining]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: null]
function custCarePreFormShowIssueDetailsCharRemainingOnKeyUp(preChatlableObject) {
    try {
        document.getElementById("cusCAREPreChat-IssueDescription").onkeyup = function () {
            custCarePreFormShowIssueDetailsCharRemaining(preChatlableObject);
        };
    } catch (e) {
        console.log("Error in:" + e);
    }
}

//[Function Description: Charector count to be reduces or increased when customer types the Issue Description field in Prechat form.]
//[Initialization: Form custCarePreFormShowIssueDetailsCharRemainingOnKeyUp function: to show total charector count and charector remaining]
//[Arguments: {orderSnapinLabelObj: Prechat should support multiple languages. Hence, orderSnapinLabelObj contains all the lavel values that is sent via dell.com CMS team. Example: Prechat form Labels, Prechat form Error messages}]
//[Return: null]
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

//[Function Description: Update issue type in prechat form, if the issue type value is changed in eSupport page.]
//[Initialization: It is initiated by eSupport team when some one changes issue type]
//[Arguments: {issueType: New Issue type}]
//[Arguments: {buttonId: New button id to determin the queue}]
//[Return: Null]
function onCareIssueChange(issueType,buttonId){
    if(document.getElementById("cusCAREPreChatSnapinDom") && document.getElementById("careIssueTypeLabVal")){
		document.getElementById("careIssueTypeLabVal").innerText = issueType;
		document.getElementById("careIssueTypeDom").setAttribute("assignedCareBtn", buttonId);
    }
}


//FY22-0203 Story #9747941: Start Speinklar Chat [START] 
function checkSprinklrCAREChatBot(orderSnapinObject) {
    
    try {
        console.log("checkSprinklrCAREChatBot Object Values:", orderSnapinObject); //check in console if the values are coming correctly
        if (orderSnapinObject.orderNumber) {//Connect with eSupport what values needs to be sent
            var sprinklrChatBotVal = {
                "engine": "dell-orderintent",//Sprinklr defined engine Name
                "payloadTags": {
                    "lng": language,
                    "orderNumber": orderSnapinObject.orderNumber,
                    "issueType": orderSnapinObject.issueType, //This nedds to be passed by eSupport
                    "buid": orderSnapinObject.BUID,
                    "countryCode": (orderSnapinObject.countryCode != null && orderSnapinObject.countryCode !=undefined) ? orderSnapinObject.countryCode: null //Need to confirm with Smita. If required eSupport needs to pass it
                },
                "requestId": orderSnapinObject.uuid,
                "text": orderSnapinObject.c_issueDescription, //Need to be Mandatior as per story [To Do]
                "user_firstName": orderSnapinObject.c_firstName,
                "user_lastName": orderSnapinObject.c_lastName,
                "user_email": orderSnapinObject.c_email,
                "user_phoneNo": orderSnapinObject.c_phoneNo,
                "sprinklrURL": (orderSnapinObject.sprinklrOrderURL != null && orderSnapinObject.sprinklrOrderURL != undefined) ? orderSnapinObject.sprinklrOrderURL : null,//check with eSupport
                "intentApiURL": (orderSnapinObject.orderIntentApiURL != null && orderSnapinObject.orderIntentApiURL != undefined) ? orderSnapinObject.orderIntentApiURL : null,//check with eSupport
                "sprinklrLoadingMessage": (orderSnapinObject.sprinklrLoadingMessage != null && orderSnapinObject.sprinklrLoadingMessage != undefined) ? orderSnapinObject.sprinklrLoadingMessage : null//check with eSupport
            };
            var res = getSprinklrOrderIntent(sprinklrChatBotVal); //the function belongs to eSupport 
            return res;//If true open sprinklr chatBOt, If false open Snap-in
        } else {
            console.log("Sprinklr required Value is missing in orderSnapinObject. Pleae check the below object value", orderSnapinObject);
            return false;//open Snap-in
        }

    } catch (e) {
        console.log("checkSprinklrChatBot-Error:", e);
        return false;//open Snap-in
    }
}
function create_snapinCareChatUuid(orderSnapinObject) {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 18) % 18 | 0;
        dt = Math.floor(dt / 18);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(18);
    });
    orderSnapinObject.uuid = uuid;
    saveGlobalSnapinCareObjToSession(orderSnapinObject);
    return orderSnapinObject;
}
function triggerCareSnapinPostSprinkler(caseNumber) {
    assignCarePropVal("890.130.154","890.130.165","SNAPIN: Transferred by Sprinklr" ,"SNAPIN: Transferred by Sprinklr"); //FY22-0502: Story 10402957: Omniature extension for CARE Sprinklr BOT
    snapInCareObject = sendGlobalSnapinCareObjToJson();
    snapInCareObject.caseNumber = caseNumber;
    snapInCareObject.sprinklrChatbotRouted = true;
    saveGlobalSnapinCareObjToSession(snapInCareObject);
    connectToSnapInCareAgent(snapInCareObject);
}
function connectToSnapInCareAgent(snapInCareObject) {
    loadingSnapinCareQueue();//FY22-0203 : Sprinklr care bot Unit testing fix.
    pushValsToSnapinInitCare(snapInCareObject);
    if (checkSnapinCareQueueStatus(snapInCareObject) == 1) {
		eleExistCareWithVariable('.embeddedServiceSidebar .startButton', CareChatStarted, snapInCareObject);
        removecustCareFormValues();
    } else
        careAgentUnavailableMsg();
}
function pushValsToSnapinInitCare(snapInCareObject) {
    console.log("Final Value sent back to Lightning",snapInCareObject);
    var extraPrechatFormVals = embedded_svc.settings.extraPrechatFormDetails, i = 0;
    extraPrechatFormVals.forEach(function (extraPrechatFormVal) {
        var fieldAPI = extraPrechatFormVal.transcriptFields[0];
        switch (fieldAPI) {
            case "Sprinklr_Chatbot_Routed__c":
                 if (snapInCareObject.sprinklrChatbotRouted)
                    embedded_svc.settings.extraPrechatFormDetails[i].value = snapInCareObject.sprinklrChatbotRouted;
                else
                    embedded_svc.settings.extraPrechatFormDetails[i].value = false;
                break;
			case "Case_Number__c": 
                if (snapInCareObject.caseNumber)
                    embedded_svc.settings.extraPrechatFormDetails[i].value = snapInCareObject.caseNumber;
                else
                    embedded_svc.settings.extraPrechatFormDetails[i].value = "";
                break;
            //FY22-0203: Sprinklr Unit testing [Start]
            case "ContactNumber__c": 
                if (snapInCareObject.c_phoneNo)
                    embedded_svc.settings.extraPrechatFormDetails[i].value = snapInCareObject.c_phoneNo;
                else
                    embedded_svc.settings.extraPrechatFormDetails[i].value = "";
                break;
            //FY22-0203: Sprinklr Unit testing [END]
            default:
                break;
        }
        i++;
    });
}
function sprinklrCareChatEnded() {
    snapinCAREChatInitiatedState(false);
    var originalPrechatDOM = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
    var closeOriginalPrechatDOM = document.querySelector(".modalContainer  .dockableContainer .closeButton.headerItem");
    if (originalPrechatDOM && closeOriginalPrechatDOM)
        closeOriginalPrechatDOM.click();
    console.log("Sprinklr Care Chat ended Successfully");
    console.log(sendGlobalSnapinCareObjToJson());
    document.getElementById("cusCAREPreChatSnapinDom").remove();//FY22-0203 Unit test removing Prechat form and additional details along with it.
}
//FY22-0203 Story #9747941: Start Speinklar Chat [END]

///////////////
//Reusable code
//////////////
function isSnapinInitiated(){
try{
    snapInCareObject = sendGlobalSnapinCareObjToJson();
    if (snapInCareObject && "snapinCareChatInitiated" in snapInCareObject && snapInCareObject.snapinCareChatInitiated)
        return true;
    else
        return false;

}catch(e){
    console.log(e);
}
}

function snapinCAREChatInitiatedState(booleanValue){
snapInCareObject = sendGlobalSnapinCareObjToJson();
    if(snapInCareObject){
        snapInCareObject.snapinCareChatInitiated = booleanValue;
        saveGlobalSnapinCareObjToSession(snapInCareObject);
    }
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

function translationCare(lang) {
    var language = lang.replace("_", "-");
    language = language.toLowerCase();
    this.primPhone = "Primary Phone Number";
    this.issueDesc = "Issue Description";
    if (language == "de") {
        this.issue = "Issue";
        this.firstName = "Vorname";
        this.lastName = "Nachname";
        this.emailAdd = "E-Mail";
        this.characters = "characters";
        this.language = "de";
    } else if (language == "ja") {
        this.issue = "Issue";
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "メール";
        this.characters = "characters";
        this.language = "ja";
    } else if (language == "ko") {
        this.issue = "Issue";
        this.firstName = "이름(성 없이)"; // 2021 SFDC Summer Patch Issue
        this.lastName = "성";
        this.emailAdd = "이메일";
        this.characters = "characters";
        this.language = "ko";
    } else if (language == "es") {
        this.issue = "Issue";
        this.firstName = "Nombre";
        this.lastName = "Apellidos";
        this.emailAdd = "Correo electrónico";
        this.characters = "characters";
        this.language = "es";
    } else if (language == "zh" || language == "cn" || language == "zh-cn") {
        this.issue = "Issue";
        this.firstName = "名字"; // 2021 SFDC Summer Patch Issue
        this.lastName = "姓氏"; // 2021 SFDC Summer Patch Issue
        this.emailAdd = "电子邮件";
        this.characters = "characters";
        this.language = "zh-CN";
    } else if (language == "pt" || language == "pt-br") { //Language related issue FY21-0202- Defect 8062138
        this.issue = "Issue"; 
        this.firstName = "Primeiro Nome"; // 2021 SFDC Summer Patch Issue
        this.lastName = "Sobrenome";
        this.emailAdd = "Email";
        this.characters = "characters";
        this.language = "pt-br";
    } else if (language == "pt-pt") { //Language related issue FY21-0202- Defect 8062138
        this.issue = "Issue";
        this.characters = "characters";//Language related issue FY21-0202- Defect 8062138
        this.firstName = "Nome próprio";//Language related issue FY21-0202- Defect 8062138
        this.lastName = "Apelido";//Language related issue FY21-0202- Defect 8062138
        this.emailAdd = "E-mail";//Language related issue FY21-0202- Defect 8062138
        this.language = "pt-pt";//Language related issue FY21-0202- Defect 8062138
    } else if (language == "nl" || language == "nl-nl") {//Language related issue FY21-0202- Defect 8062138
        this.issue = "Issue";
        this.firstName = "Voornaam";
        this.lastName = "Achternaam";
        this.emailAdd = "E-mail";
        this.characters = "characters";
        this.language = "nl-NL";//Language related issue FY21-0202- Defect 8062138
    } else if (language == "fr") {
        this.issue = "Issue";
        this.firstName = "Prénom";
        this.lastName = "Nom";
        this.emailAdd = "Adresse e-mail";
        this.characters = "characters"
        this.language = "fr";
    } else {
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
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}
}

function snapinCAREPageObserver(eleSelector, orderSnapinLabelObj) {
try {
    snapInLoadingPrechatForm = document.querySelector(".modalContainer.loading.initialLoading");
    snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
    snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
    snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
    snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer");//Fix for defect 7030965
    snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
    snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
    snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
    if (snapInLoadingPrechatForm)
        snapInCurrentPage = "snapInLoadingPrechatForm";
    else if (snapInPrechatForm)
        snapInCurrentPage = "snapInPrechatForm";
    else if (snapInWaiting)
        snapInCurrentPage = "snapInWaiting";
    else if (snapInChatStarted)
        snapInCurrentPage = "snapInChatStarted";
    else if (snapInChatEnded)
    snapInCurrentPage = "snapInChatEnded";
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
                snapInLoadingPrechatForm = document.querySelector(".modalContainer.loading.initialLoading");
                snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
                snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
                snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
                snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer");//Fix for defect 7030965
                snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
                snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
                snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
                snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton");
                
                if (snapInLoadingPrechatForm && snapInCurrentPage != "snapInLoadingPrechatForm") {
                    snapInCurrentPage = "snapInLoadingPrechatForm";
                    //Hide prechatLoader form [Start]
                    serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
                    serviceSidebar.style.display = "none";
                     //Hide prechatLoader form [end]
                } else if (snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm") {
                    snapInCurrentPage = "snapInPrechatForm";
                    //Hide prechat form [Start]
                    serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
                    serviceSidebar.style.display = "none";
                     //Hide prechat form [end]
                } else if (snapInWaiting && snapInCurrentPage != "snapInWaiting") {
                    snapInCurrentPage = "snapInWaiting";
                    assignCarePropVal("890.130.149","890.130.160");// FY20-1101 STORY 7089672
                    snapinCareQueueLoaded();
                    eleExistCareWithVariable('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber', waitCareChatCounter); //FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter
                } else if (snapInChatStarted && snapInCurrentPage != "snapInChatStarted") {
                    snapInCurrentPage = "snapInChatStarted";
                    snapinCAREChatInitiatedState(true);//Fix for defect 7030965
                    snapinCareQueueLoaded();
                    addChatPrivacyInfoCARE(orderSnapinLabelObj);//FY21-0202 - preChatlableObject pulled from top
                } else if (snapInChatEnded && snapInCurrentPage != "snapInChatEnded") {//Fix for defect 7030965
                    snapInCurrentPage = "snapInChatEnded";
                    sessionStorage.removeItem("snapInCareObjectSession");
                    snapinCareQueueLoaded();
                } else if (snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug") {
                    snapInCurrentPage = "snapInConfirmationDialoug";
                    //FY22-0502: STORY 10402946: Remove "Start a New Chat" button from CARE prechat form [START]
                    var dialogueMsg = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer").innerText;
                    if (showsCareAgentOflineMsg(dialogueMsg)) {
                        document.querySelector(".dialog-button-0.embeddedServiceSidebarButton").style.display = 'none';
                    }
                    //FY22-0502: STORY 10402946: Remove "Start a New Chat" button from CARE prechat form [END]
                    //Fix for on click of (x) button from End Chat confirmation Page: FYI we have created a SFDC case 23872982 [START] 
                    var closeBtn = document.querySelector(".modalContainer .dockableContainer .embeddedServiceSidebarHeader .closeButton.headerItem");
                    if(closeBtn)//FY22-0203: Unit testing bug fix
                        closeBtn.addEventListener("click", function () {
                            if(!snapInConfirmationDialoug){
                                sessionStorage.removeItem("snapInCareObjectSession");
                            }    
                        });
                    //Fix for on click of (x) button from End Chat confirmation Page: FYI we have created a SFDC case 23872982 [END] 
                } else if (snapInEmbeddedServiceHelpBtn && window.getComputedStyle(snapInEmbeddedServiceHelpBtn).display === 'block') {

                    if (snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnDisabled") {
                        snapInCurrentPage = "snapInhelpBtnDisabled";

                    } else if (snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnEnabled") {
                        if (snapInCurrentPage === "snapInhelpBtnDisabled")
                            document.getElementById("cusCAREPreChatSnapinDom").style.display = "block";
                        snapInCurrentPage = "snapInhelpBtnEnabled";
                        //If the button is enabled open Prechat form by clicking on enabled button 
                        eleExistCare('.helpButtonEnabled #helpButtonSpan > .message', chatCareClick);//FY21-0702-Defect 902225:Unable to initiate a chat using IE

                    } else {
                        snapInCurrentPage = 'snapInNotAvilable';
                    }
                }
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

//FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter [START]
function waitCareChatCounter(eleSelector, findingEle, counterValue) {
    try {
        var currentcountVal = document.querySelector(eleSelector).innerText;
        if (counterValue != currentcountVal) {
            assignCarePropVal("890.130.151","890.130.162","SNAPIN: Queue number " + currentcountVal,"SNAPIN: Queue number " + currentcountVal);
            clearInterval(findingEle);
            if (currentcountVal > 0 && currentcountVal != "" && currentcountVal != null && currentcountVal != undefined && currentcountVal != ' ') {
                eleExistWithVariable('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber', waitCareChatCounter, document.querySelector('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber').innerText);
            }
        }
    } catch (e) {
        clearInterval(findingEle);
        console.log("Error in:" + e);
    }
}
//FY22-0502: Story 10402939: Omniature Extension for CARE Chats counter [END]

//FY22-0502: STORY 10402946: Remove "Start a New Chat" button from CARE prechat form [START]
function showsCareAgentOflineMsg(message){
    if(
        message.includes("Im Moment kann nicht gechattet werden. Versuchen Sie es später erneut.") ||
        message.includes("ただいまチャットできません。 後でもう一度お試しください。") ||
        message.includes("지금은 채팅을 할 수 없습니다. 나중에 다시 시도하십시오.") ||
        message.includes("No podemos chatear en estos momentos. Inténtelo de nuevo más tarde.") ||
        message.includes("我们现在无法聊天。 请稍后重试。") ||
        message.includes("我們目前無法聊天。 請稍後再試一次。") ||
        message.includes("Não podemos conversar neste momento. Tente novamente mais tarde.") ||
        message.includes("Não podemos conversar agora. Tente novamente mais tarde.") ||
        message.includes("We kunnen momenteel niet chatten. Probeer het later opnieuw.") ||
        message.includes("Nous ne pouvons pas discuter pour le moment. Veuillez réessayer ultérieurement.") ||
        message.includes("Vi kan ikke chatte lige nu. Prøv igen senere.") ||
        message.includes("Emme voi chatata juuri nyt. Yritä myöhemmin uudelleen.") ||
        message.includes("Non possiamo chattare al momento Riprova più tardi.") ||
        message.includes("Vi kan ikke chatte akkurat nå. Prøv på nytt senere.") ||
        message.includes("В настоящее время чат недоступен. Повторите попытку позже.") ||
        message.includes("Vi kan inte chatta just nu. Försök igen senare.") ||
        message.includes("เราไม่สามารถสนทนาได้ในตอนนี้ ลองอีกครั้งในภายหลัง") ||
        message.includes("Nie możemy w tej chwili rozmawiać na czacie Spróbuj ponownie później.") ||
        message.includes("Momenálne nemôžeme četovať. Skúste to znova.") ||
        message.includes("Não podemos conversar agora. Tente novamente mais tarde.") ||
        message.includes("We can't chat right now. Try again later.")
    ){
        return true;
    } else {
        return false;
    }
}
//FY22-0502: STORY 10402946: Remove "Start a New Chat" button from CARE prechat form [END]

//FY21-0702-Defect 902225:Unable to initiate a chat using IE[START]
function chatCareClick(eleSelector, findingEle) {
    try {
        if (document.querySelector(eleSelector)) {
            document.querySelector(eleSelector).click();
        }
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}

function eleExistCare(eleSelector, callbackFunc) {
    var findingEle = setInterval(function () {
        if (document.querySelector(eleSelector)) {
            try {
                callbackFunc(eleSelector, findingEle);
            } catch (e) {
                console.log('error in ' + callbackFunc + ' function: ' + e);
            }
        }
    }, 1000);
}
//FY21-0702-Defect 902225:Unable to initiate a chat using IE[END]

//FY21-0202 [START]

function addChatPrivacyInfoCARE(preChatlableObject){
    setTimeout(function(){
        var snapinChatPopUpMsgDom = document.getElementById("snapinChatPopUpMsg");
        var snapinChasnapinCHatEnded  = document.querySelector(".dockableContainer .chatMessage.ended");
        if (!snapinChatPopUpMsgDom){
            var snapinPopInputMsg;
            if(preChatlableObject && "chatPrivacyInfo" in preChatlableObject && preChatlableObject.snapinChatPopUpMsgDom)
                snapinPopInputMsg = preChatlableObject.snapinChatPopUpMsgDom;
            else
                snapinPopInputMsg = "Please do not share any payment or sensitive information in this chat window.";
            var newItem = document.createElement("DIV");
            newItem.id = 'snapinChatPopUpMsg';
            var embeddedSLAChatInput = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateChatInputFooter");
            embeddedSLAChatInput.parentNode.insertBefore(newItem, embeddedSLAChatInput);
            innerVal ='<span style="float: left;margin: 11px;fill:#0A6EBE;"><svg x="0px" y="0px" width="20px" height="20px" viewBox="0 0 416.979 416.979" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765   c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/></g></svg></span><span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon" id="btnCloseSnapinPopMsg" style="float:right;padding:5px;cursor:pointer;"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 120 120" style="fill:#333"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"></path></svg></span><p style="text-align:left;padding:7px;margin:0;font-size:13px;background:#DFF1FE;border-top:1px solid #0A6EBE;border-bottom:1px solid #0A6EBE;color:#333;">'+snapinPopInputMsg+'</p>';
            document.getElementById("snapinChatPopUpMsg").innerHTML=innerVal;

            var btnCloseSnapinPopMsg = document.getElementById("btnCloseSnapinPopMsg");
                    btnCloseSnapinPopMsg.addEventListener("click", function () {
                    document.getElementById("snapinChatPopUpMsg").style.display = "none";
                });
        }else if (snapinChasnapinCHatEnded){
            snapinChatPopUpMsgDom.style.display = "none";
        }
    }, 50);
}
//FY21-0202 [END]


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
        var css = '.embeddedServiceSidebarHeader,.embeddedServiceSidebarMinimizedDefaultUI{background-color:#00447C!important;border:1px!important}.embeddedServiceSidebarFormField .uiInput .uiLabel-left{padding-top:0!important;margin-top:11px;color:#444!important;font-weight:300!important}.embeddedServiceSidebarForm.formContent{background:#f1f1f1!important}.embeddedServiceHelpButton .helpButton .uiButton{background-color:#005290!important;font-family:"Salesforce Sans",sans-serif}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:#005290 solid 1px}.embeddedServiceSidebarForm .uiButton,.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important;border:none!important}.embeddedServiceSidebarForm.buttonWrapper{background:linear-gradient(to bottom,rgba(247,247,247,0) 0,rgba(247,247,247,1) calc(100% - 77px),rgba(247,247,247,1) 100%)}.embeddedServiceSidebarButton.uiButton--inverse{background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus{box-shadow:0 0 3px 0 #ddd!important}.embeddedServiceSidebarDialogState .dialogButton{border-radius:0!important}.embeddedServiceSidebarDialogState .dialogButton:not(:disabled):focus{text-decoration:none!important}.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select{color:#444!important}.embeddedServiceSidebarForm .fieldList{margin:12px 12px 0 0!important}.embeddedServiceLiveAgentStateChatHeaderOption .optionName{color:#fff!important;text-decoration:none!important}.embeddedServiceSidebarHeader .headerText{margin-bottom:0!important}.embeddedServiceSidebarMinimizedDefaultUI .minimizedImage{display:none!important}.embeddedServiceLiveAgentStateChatHeader.reconnecting.alert{background-color:#cb2b19!important;padding-top:46px!important}.embeddedServiceSidebarForm.buttonWrapper{background-color:#f1f1f1!important}.cusPreChat-modalContainer,.cusPreChat-shortHeader{font-weight:400;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus,.cusPreChat-headerItem:focus,.cusPreChat-headerItem:hover{outline:0}.cusPreChat-modalContainer{box-sizing:border-box;line-height:1.5;color:#212529;display:block;position:fixed;z-index:1001;font-family:"Salesforce Sans",sans-serif;top:0;font-size:16px;pointer-events:all;backface-visibility:hidden;text-align:left}.cusPreChat-modalContainer li,.cusPreChat-modalContainer ul{display:block;list-style:none}.cusPreChat-dockableContainer{width:320px;max-height:720px;border-radius:8px 8px 0 0;position:fixed;left:auto;bottom:0;right:20px;margin:0;height:90%;box-shadow:2px 2px 20px rgba(0,0,0,.2);z-index:15;text-align:center;overflow:hidden;max-width:40em;pointer-events:all}.cusPreChat-embeddedServiceSidebarHeader{position:absolute;top:0;width:100%;border-radius:8px 8px 0 0;background-color:#00447C;border:1px;text-align:center;pointer-events:all}.cusPreChat-shortHeader{color:#fff;border-radius:8px 8px 0 0;line-height:3;text-align:center;font-size:.875em;height:44px;clear:both;overflow:hidden;z-index:3;position:relative;transform:translate3d(0,0,0)}.cusPreChat-shortHeaderContent{position:relative;display:flex;height:100%}.cusPreChat-headerItem{color:#fff;font-size:1em;background:0 0;border:none}.cusPreChat-headerItem:focus:before,.cusPreChat-headerItem:hover:before{content:" ";position:absolute;background-color:#fff;opacity:.2;border-radius:4px;box-sizing:border-box;pointer-events:none;top:20%}.cusPreChat-closeButton,.cusPreChat-minimizeButton{transition:color .7s ease;padding:14px;line-height:0}.cusPreChat-minimizeButton:focus:before,.cusPreChat-minimizeButton:hover:before{right:48px;width:30px;height:60%}.cusPreChat-closeButton:focus:before,.cusPreChat-closeButton:hover:before{right:6px;width:30px;height:60%}.cusPreChat-assistiveText{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.cusPreChat-embeddedServiceIcon{display:flex}.cusPreChat-embeddedServiceIcon svg{display:inline-block;box-sizing:border-box;width:1em;height:1em;fill:#fff}.cusPreChat-headerText{color: #ffffff;margin: 0;align-self: center;flex-grow: 1;text-align: left;vertical-align: middle;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: inherit;font-weight: 400;letter-spacing: .025em;padding-left: 14px;}.cusPreChat-sidebarBody{position:absolute;width:100%;height:100%;top:44px;z-index:0;background-color:#f1f1f1;transform:translate3d(0,0,0);-webkit-overflow-scrolling:touch}.cusPreChat-sidebarLoadingIndicator{position:relative;height:100%;background-color:#fff}.cusPreChat-activeFeature{width:100%;height: 100%}.cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI{overflow:hidden;height:100%;position:absolute}.cusPreChat-formContent{width:320px;height:calc(100% - 98px);overflow-y:auto;position:relative;background-color:#f1f1f1;margin-bottom:81px;border-radius:0 0 8px 8px}.cusPreChat-fieldList{margin:5px 12px 0 0;padding:0}.cusPreChat-embeddedServiceSidebarFormField{display:block;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:40px;list-style:none;padding:0;box-sizing:border-box;margin-left:12px}.cusPreChat-embeddedServiceSidebarFormField.cusPreChat-inputSplitName{width:calc(50% - 12px);display:inline-block;vertical-align:top;margin-left:9px}.cusPreChat-split-field-container{margin-bottom:6px}.cusPreChat-uiInput{text-align:left}.cusPreChat-uiInput .cusPreChat-uiLabel-left{padding:0!important;color:#444!important;font-weight:300!important;position:relative;font-size:.75em;line-height:1.5;margin:11px .75em 2px 1px}.cusPreChat-uiInput .cusPreChat-required{position:absolute;color:#c23934;left:-6px;top:0}.cusPreChat-slds-style-inputtext{display:inline-block;line-height:30px;box-sizing:border-box;box-shadow:none;background-color:#fff;width:100%;height:44px !important;padding:0 12px !important;font-size:.875em;border:none !important;}.cusPreChat-slds-style-inputtext:focus{outline:0;box-shadow:0 0 2px 0 #007db8}.cusPreChat-buttonWrapper{text-align:center;padding:0px 24px 24px;margin:0;width:320px;position:fixed;box-sizing:border-box;bottom:44px; box-shadow: 0px -10px 5px rgba(241, 241, 241,0.7); background: #f1f1f1}.cusPreChat-embeddedServiceSidebarButton{background:#007db8;font-family:"Roboto Regular",sans-serif;border-radius:0!important;position:relative;border:none;text-shadow:none;box-shadow:none;transition:background .4s ease;color:#fff;font-size:1em;font-weight:400;width:100%;margin:0;height:44px;cursor:pointer}.cusPreChat-embeddedServiceSidebarButton:not(:disabled):focus,.cusPreChat-embeddedServiceSidebarButton:not(:disabled):hover{background:#004b6e}.cusPreChat-has-error{margin:0 0 0px;padding:0}.cusPreChat-has-error .cusPreChat-form-element__help{font-size:.75em;color:#c23934}.cusPreChat-embeddedServiceHelpButton{display:block;position:fixed;top:0;left:0;background:0 0;box-shadow:none;overflow:visible;z-index:1000;font-family:sans-serif}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:12px;right:12px;height:46px;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton{box-sizing:border-box;margin:0;padding:0 12px;height:46px;box-shadow:0 0 12px 0 rgba(0,0,0,.5);border-radius:23px;line-height:1;background:#007db8;font-size:.875em;color:#fff;font-weight:400;text-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-family:"Roboto Regular",sans-serif;width:168px;cursor:pointer;position:relative;border:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:hover::before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:23px;background-color:#000;opacity:.2;pointer-events:none}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton .cusPreChat-label{color:#fff}.cusPreChat-embeddedServiceHelpButton .cusPreChat-uiButton .cusPreChat-helpButtonLabel{position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%;line-height:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media only screen and (min-width:48em){.cusPreChat-embeddedServiceHelpButton{background-color:transparent}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:hover::before{border-radius:8px 8px 0 0}}.cusPreChat-sidebarLoadingIndicator{align-self:stretch;max-height:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;padding:0 24px}.cusPreChat-loadingBallContainer{display:inline-block}.cusPreChat-loadingBallContainer.cusPreChat-animated .cusPreChat-loadingBall{animation:cusPreChat-ballanimate 2.25s infinite ease-in-out;display:inline-block;width:1em;height:1em;border-radius:2em;font-size:8px;text-align:center;background:#0074bd;margin:3px}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-second{animation-name:cusPreChat-ballanimate-2}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-third{animation-name:cusPreChat-ballanimate-3}@keyframes cusPreChat-ballanimate{0%,32%{transform:scale(1)}16%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-2{32%,64%{transform:scale(1)}48%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-3{64%,96%{transform:scale(1)}80%{transform:scale(1.5)}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.cusPreChat-buttonWrapper{bottom: 3px;}}body.embeddedServicePreventScrolling {overflow: auto !important;position: inherit !important;}',
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

// FY20-1101 STORY 7089672 [START]
function assignCarePropVal(onOrderVal, yesOrderVal, onOrderMsg, yesOrderMsg){
	if (document.getElementById("cusCAREPreChat-OrderNum"))
		callDellmetricsTrack(onOrderVal, onOrderMsg);//No Order number
	else
		callDellmetricsTrack(yesOrderVal, yesOrderMsg);//With Order number
}

function snapInCareClickListners() {
    window.addEventListener("click", function (event) {
    try{//FY21-0702 DEFECT 9007902: Adding additional checks
        if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton")) {
            var clickedElement = event.target || event.srcElement;
             //FY21-0702: Prop value Fix [Start]
            if(clickedElement && clickedElement.tagName.toLowerCase() === 'embeddedservice-chat-header' && (closestByTagName(event.toElement, 'svg') || closestByTagName(event.toElement, 'button'))){//FY21-0702 DEFECT 9007902: Adding additional checks
                if(closestByTagName(event.toElement, 'svg').dataset.key === 'minimize_window' || closestByTagName(event.toElement, 'button').className === 'minimizeButton')
                    assignCarePropVal("890.130.143","890.130.154");// FY20-1101 STORY 7089672
                else if(closestByTagName(event.toElement, 'svg').dataset.key === 'close'  || closestByTagName(event.toElement, 'button').className === 'closeButton'){
                    assignCarePropVal("890.130.145","890.130.156");// FY20-1101 STORY 7089672
                }  
            }else if(clickedElement && clickedElement.tagName.toLowerCase() === 'embeddedservice-chat-input-footer-menu' && (closestByTagName(event.toElement, 'svg') || closestByTagName(event.toElement, 'button'))){//FY21-0702 DEFECT 9007902: Adding additional checks
                if(closestByTagName(event.toElement, 'svg').dataset.key === 'rows' || closestByTagName(event.toElement, 'button').className === 'slds-button slds-button_icon slds-button_icon-container-more slds-button_icon-large')
                    this.console.log("CARE: Hamburger Menu");//For future Prop values
                else{
                    var snapInfooterMenuElm= closestByTagName(event.toElement, 'a');
                    if(snapInfooterMenuElm != undefined && snapInfooterMenuElm != null && snapInfooterMenuElm.innerText)
                    this.console.log("CARE: '" + snapInfooterMenuElm.innerText + "' Button Clicked");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                }
            }else 
            //FY21-0702: Prop value Fix [END]
            if (closestByTagName(clickedElement, 'button') != null) {
                switch (closestByTagName(clickedElement, 'button').className) {
                    case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                        console.log("ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "dialogButton dialog-button-1 uiButton embeddedServiceSidebarButton":
                        console.log("ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                        console.log("ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                        console.log("ClickedOn Cancel Chat button while waiting in queue");
                        assignCarePropVal("890.130.150","890.130.161");// FY20-1101 STORY 7089672
                        break;
                    case "closeButton headerItem":
                        console.log("ClickedOn Close (x) button");
                        assignCarePropVal("890.130.145","890.130.156");// FY20-1101 STORY 7089672
                        break;
                    case "minimizeButton headerItem":
                        console.log("ClickedOn Minimize button");
                        assignCarePropVal("890.130.143","890.130.154");// FY20-1101 STORY 7089672
                        break;
                    case "sidebarHeader minimizedContainer helpButton embeddedServiceSidebarMinimizedDefaultUI":
                        console.log("ClickedOn Maximize button");
                        assignCarePropVal("890.130.144","890.130.155");// FY20-1101 STORY 7089672
                        break;
                    case "sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI":
                        console.log("ClickedOn Maximize button");
                        assignCarePropVal("890.130.144","890.130.155");// FY20-1101 STORY 7089672
                        break;
                    case "uiButton helpButtonEnabled":
                    case "uiButton no-hover helpButtonEnabled":
                        if (document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").innerText == "Chat Now") {
                            snapInCurrentPage = null;
                            if (document.getElementById("cusCAREPreChatSnapinDom").display === "none")
                            console.log("StartsChat for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);

                        } else if (document.getElementById("cusCAREPreChatSnapinDom").display === "none") 
                            console.log("AgentOffline for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
                        break;
                    default:
                        if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
                            console.log("ClickedOn " + closestByTagName(clickedElement, 'a').text);
                        }
                        break;
                }
            } else if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {

                console.log("ClickedOn " + closestByTagName(clickedElement, 'a').text);

            }
        }
    }catch(e){
        this.console.log("Error in function", e);
        }
        
    });
}
// FY20-1101 STORY 7089672 [END]

//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description [START]

function checkIfIssueDescIsOptionalInCare(orderSnapinObject, orderPreChatlableObject){
    if("issueType" in orderSnapinObject && orderSnapinObject.issueType != "" && orderSnapinObject.issueType != null && orderSnapinObject.issueType != undefined && orderSnapinObject.issueType !='None' && document.getElementById("CareIssue_Description_Cust_Label")){
        removeDomElementbyId("issueDescIsOptionalInCare");
        var optionalLabel = document.createElement('span');
        optionalLabel.id = 'issueDescIsOptionalInCare';
        optionalLabel.innerText = orderPreChatlableObject.optional;
        var Issue_Description_Cust_Label = document.getElementById("CareIssue_Description_Cust_Label");
        Issue_Description_Cust_Label.appendChild(optionalLabel);
        removeDomElementbyId("ErrMsg_cusCAREPreChat-IssueDescription");
    }else{
        removeDomElementbyId("issueDescIsOptionalInCare");
    }
}
//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description [END]

//FY21-1003 Story #9060750: GBS Care - Chat - Pre-chat Form Agent Availability Check [START]

function careAgentUnavailableMsg(){
    var cusPreChatSnapinDom = document.getElementById("cusCAREPreChat-sidebarLoadingIndicator");
    if (cusPreChatSnapinDom && window.getComputedStyle(cusPreChatSnapinDom).display != 'none') {
        document.getElementById("cusCAREPreChat-alertMsgContainer").style.display = "flex";
        document.getElementById("cusCAREPreChat-sidebarLoadingIndicator").style.display = 'none';
        document.getElementById("cusCAREPreChat-hideWhileLoading").style.display = 'none';
        document.getElementById("cusCAREPreChat-CloseChat").addEventListener("click", function () {
            document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = 'none';
            document.getElementById("cusCAREPreChat-alertMsgContainer").style.display = 'none';
            document.getElementById("cusCAREPreChat-alertMsgContainer").style.display = 'none';
            document.getElementById("cusCAREPreChat-hideWhileLoading").style.display = 'block';
            document.getElementById("cusCAREPreChatSnapinDom").style.display = 'none';
            document.getElementById("cusCAREPreChat-minimize-btn").style.display = 'block';//FY22-0203 Story #9747941: Start Speinklar Chat Unit test
            document.getElementById("cusCAREPreChat-close-btn").style.display = 'block';//FY22-0203 Story #9747941: Start Speinklar Chat Unit test

        });
    }
}

function checkSnapinCareQueueStatus(orderSnapinObject) {
    if (orderSnapinObject.checkQueueStatusInBizHoursUrl && orderSnapinObject.hoursOfOperation && orderSnapinObject.timeZone && (orderSnapinObject.checkQueueStatusInBizHoursUrl != "" || orderSnapinObject.checkQueueStatusInBizHoursUrl != null || orderSnapinObject.checkQueueStatusInBizHoursUrl != undifined) && (orderSnapinObject.hoursOfOperation != "" || orderSnapinObject.hoursOfOperation != null || orderSnapinObject.hoursOfOperation != undifined) && (orderSnapinObject.timeZone != "" || orderSnapinObject.timeZone != null || orderSnapinObject.timeZone != undifined)) { 
        return httpGetCareBusinessHrAgentAvailability(orderSnapinObject.checkQueueStatusInBizHoursUrl + "?chatHours=" + escape(orderSnapinObject.hoursOfOperation) + "&timeZone=" + escape(orderSnapinObject.timeZone) + "&buttonId=" + orderSnapinObject.buttonId);
    }else if("checkBtnAvailabilityUrl" in orderSnapinObject && orderSnapinObject.checkBtnAvailabilityUrl && orderSnapinObject.checkBtnAvailabilityUrl != ""){
        var btnAvailabilityResVal = httpGetCareAgentAvailability(orderSnapinObject.checkBtnAvailabilityUrl+orderSnapinObject.buttonId);
        if (btnAvailabilityResVal)
            return 1;
        else
            return 4;
    }else
        return 1;
}

function httpGetCareAgentAvailability(theUrl) {
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                returnValue = xmlHttp.responseText;
        }
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');
        xmlHttp.setRequestHeader("Content-Type", "application/text; charset=utf-8");
        xmlHttp.send(null);
        return returnValue;
    } catch (e) {
        console.log("Error in: " + e);
    }
}

function httpGetCareBusinessHrAgentAvailability(theUrl) {
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                returnValue = xmlHttp.responseText;
        }
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');
        xmlHttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xmlHttp.send(null);
        return returnValue;
    } catch (e) {
        console.log("Error in: " + e);
    }
}
//FY21-1003 Story #9060750: GBS Care - Chat - Pre-chat Form Agent Availability Check [END]
