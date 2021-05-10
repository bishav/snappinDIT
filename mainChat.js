var snapinChatGlobalIssueType, snapinChatGlobalServiceTag, snapinChatGlobalProductName = null, snapInCurrentPage = null, trackevent = true;
var coveoHeader = "", isCoveoSearchEnabled = false;

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

    if (!document.getElementById('snapinStyle')) {//FY21-0702: DEFECT 8910461 CSS fix: added new CSS
        var css = '.cusPreChat-FormBtns:hover, .cusPreChatFormBtns:hover .cusPreChat-FormBtnchild,.cusPreChatFormBtns:hover .cusPreChat-FormBtnchild path {color: #004071 !important;fill: #004071;}.cusPreChat-FormBtns, .cusPreChatFormBtns .cusPreChat-FormBtnchild, .cusPreChatFormBtns .cusPreChat-FormBtnchild path {color: #006BBD;fill: #006BBD;}.embeddedServiceSidebarHeader,.embeddedServiceSidebarMinimizedDefaultUI{background-color:#00447C!important;border:1px!important}.embeddedServiceSidebarFormField .uiInput .uiLabel-left{padding-top:0!important;margin-top:11px;color:#444!important;font-weight:300!important}.embeddedServiceSidebarForm.formContent{background:#f1f1f1!important}.embeddedServiceHelpButton .helpButton .uiButton{background-color:#005290!important;font-family:"Salesforce Sans",sans-serif}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:#005290 solid 1px}.embeddedServiceSidebarForm .uiButton,.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important;border:none!important}.embeddedServiceSidebarForm.buttonWrapper{background:linear-gradient(to bottom,rgba(247,247,247,0) 0,rgba(247,247,247,1) calc(100% - 77px),rgba(247,247,247,1) 100%)}.embeddedServiceSidebarButton.uiButton--inverse{background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus{box-shadow:0 0 3px 0 #ddd!important}.embeddedServiceSidebarDialogState .dialogButton{border-radius:0!important}.embeddedServiceSidebarDialogState .dialogButton:not(:disabled):focus{text-decoration:none!important}.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select{color:#444!important}.embeddedServiceSidebarForm .fieldList{margin:12px 12px 0 0!important}.embeddedServiceLiveAgentStateChatHeaderOption .optionName{color:#fff!important;text-decoration:none!important}.embeddedServiceSidebarHeader .headerText{margin-bottom:0!important}.embeddedServiceSidebarMinimizedDefaultUI .minimizedImage{display:none!important}.embeddedServiceLiveAgentStateChatHeader.reconnecting.alert{background-color:#cb2b19!important;padding-top:46px!important}.embeddedServiceSidebarForm.buttonWrapper{background-color:#f1f1f1!important}.cusPreChat-modalContainer,.cusPreChat-shortHeader{font-weight:400;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus,.cusPreChat-headerItem:focus,.cusPreChat-headerItem:hover{outline:0}.cusPreChat-modalContainer{box-sizing:border-box;line-height:1.5;color:#212529;display:block;position:fixed;z-index:5001;font-family:"Salesforce Sans",sans-serif;top:0;font-size:16px;pointer-events:all;backface-visibility:hidden;text-align:left}.cusPreChat-modalContainer li,.cusPreChat-modalContainer ul{display:block;list-style:none}.cusPreChat-dockableContainer{width:320px;max-height:720px;border-radius:8px 8px 0 0;position:fixed;left:auto;bottom:0;right:20px;margin:0;height:90%;box-shadow:2px 2px 20px rgba(0,0,0,.2);z-index:15;text-align:center;overflow:hidden;max-width:40em;pointer-events:all}.cusPreChat-embeddedServiceSidebarHeader{position:absolute;top:0;width:100%;border-radius:8px 8px 0 0;background-color:#00447C;border:1px;text-align:center;pointer-events:all}.cusPreChat-shortHeader{color:#fff;border-radius:8px 8px 0 0;line-height:3;text-align:center;font-size:.875em;height:44px;clear:both;overflow:hidden;z-index:3;position:relative;transform:translate3d(0,0,0)}.cusPreChat-shortHeaderContent{position:relative;display:flex;height:100%}.cusPreChat-headerItem{color:#fff;font-size:1em;background:0 0;border:none}.cusPreChat-headerItem:focus:before,.cusPreChat-headerItem:hover:before{content:" ";position:absolute;background-color:#fff;opacity:.2;border-radius:4px;box-sizing:border-box;pointer-events:none;top:20%}.cusPreChat-closeButton,.cusPreChat-minimizeButton{transition:color .7s ease;padding:14px;line-height:0}.cusPreChat-minimizeButton:focus:before,.cusPreChat-minimizeButton:hover:before{left:6px;width:30px;height:60%}.cusPreChat-closeButton:focus:before,.cusPreChat-closeButton:hover:before{right:6px;width:30px;height:60%}.cusPreChat-assistiveText{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.cusPreChat-embeddedServiceIcon{display:flex}.cusPreChat-embeddedServiceIcon svg{display:inline-block;box-sizing:border-box;width:1em;height:1em;fill:#fff}.cusPreChat-headerText{display:flex;justify-content:center;align-items:center;flex-grow:1;align-self:stretch;width:calc(100% - 96px);color:#fff;text-decoration:none;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:1em}.cusPreChat-sidebarBody{position:absolute;width:100%;height:100%;top:44px;z-index:0;background-color:#f1f1f1;transform:translate3d(0,0,0);-webkit-overflow-scrolling:touch}.cusPreChat-sidebarLoadingIndicator{position:relative;height:100%;background-color:#fff}.cusPreChat-activeFeature{width:100%;height: 100%}.cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI{overflow:hidden;height:100%;position:absolute}.cusPreChat-formContent{width:320px;height:calc(100% - 98px);overflow-y:auto;position:relative;background-color:#f1f1f1;margin-bottom:81px;border-radius:0 0 8px 8px}.cusPreChat-fieldList{margin:5px 12px 0 0;padding:0}.cusPreChat-embeddedServiceSidebarFormField{display:block;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:40px;list-style:none;padding:0;box-sizing:border-box;margin-left:12px}.cusPreChat-embeddedServiceSidebarFormField.cusPreChat-inputSplitName{width:calc(50% - 12px);display:inline-block;vertical-align:top;margin-left:9px}.cusPreChat-split-field-container{margin-bottom:6px}.cusPreChat-uiInput{text-align:left}.cusPreChat-uiInput .cusPreChat-uiLabel-left{padding:0!important;color:#444!important;font-weight:300!important;position:relative;font-size:.75em;line-height:1.5;margin:11px .75em 2px 1px}.cusPreChat-uiInput .cusPreChat-required{position:absolute;color:#c23934;left:-6px;top:0}.cusPreChat-slds-style-inputtext{display:inline-block;line-height:30px;box-sizing:border-box;box-shadow:none;background-color:#fff;width:100%;height:44px !important;padding:0 12px !important;font-size:.875em;border:none !important;}.cusPreChat-slds-style-inputtext:focus{outline:0;box-shadow:0 0 2px 0 #007db8}.cusPreChat-buttonWrapper{text-align:center;padding:0px 24px 24px;margin:0;width:320px;position:fixed;box-sizing:border-box;bottom:44px; box-shadow: 0px -10px 5px rgba(241, 241, 241,0.7); background: #f1f1f1}.cusPreChat-embeddedServiceSidebarButton{background:#007db8;font-family:"Roboto Regular",sans-serif;border-radius:0!important;position:relative;border:none;text-shadow:none;box-shadow:none;transition:background .4s ease;color:#fff;font-size:1em;font-weight:400;width:100%;margin:0;height:44px;cursor:pointer}.cusPreChat-embeddedServiceSidebarButton:not(:disabled):focus,.cusPreChat-embeddedServiceSidebarButton:not(:disabled):hover{background:#004b6e}.cusPreChat-has-error{margin:0 0 0px;padding:0}.cusPreChat-has-error .cusPreChat-form-element__help{font-size:.75em;color:#c23934}.cusPreChat-embeddedServiceHelpButton{display:block;position:fixed;top:0;left:0;background:0 0;box-shadow:none;overflow:visible;z-index:1000;font-family:sans-serif}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:12px;right:12px;height:46px;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton{box-sizing:border-box;margin:0;padding:0 12px;height:46px;box-shadow:0 0 12px 0 rgba(0,0,0,.5);border-radius:23px;line-height:1;background:#007db8;font-size:.875em;color:#fff;font-weight:400;text-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-family:"Roboto Regular",sans-serif;width:168px;cursor:pointer;position:relative;border:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:hover::before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:23px;background-color:#000;opacity:.2;pointer-events:none}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton .cusPreChat-label{color:#fff}.cusPreChat-embeddedServiceHelpButton .cusPreChat-uiButton .cusPreChat-helpButtonLabel{position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%;line-height:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media only screen and (min-width:48em){.cusPreChat-embeddedServiceHelpButton{background-color:transparent}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:hover::before{border-radius:8px 8px 0 0}}.cusPreChat-sidebarLoadingIndicator{align-self:stretch;max-height:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;padding:0 24px}.cusPreChat-loadingBallContainer{display:inline-block}.cusPreChat-loadingBallContainer.cusPreChat-animated .cusPreChat-loadingBall{animation:cusPreChat-ballanimate 2.25s infinite ease-in-out;display:inline-block;width:1em;height:1em;border-radius:2em;font-size:8px;text-align:center;background:#0074bd;margin:3px}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-second{animation-name:cusPreChat-ballanimate-2}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-third{animation-name:cusPreChat-ballanimate-3}@keyframes cusPreChat-ballanimate{0%,32%{transform:scale(1)}16%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-2{32%,64%{transform:scale(1)}48%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-3{64%,96%{transform:scale(1)}80%{transform:scale(1.5)}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.cusPreChat-buttonWrapper{bottom: 3px;}}body.embeddedServicePreventScrolling {overflow: auto !important;position: inherit !important;}.dockableContainer .endChatContainer .endChatButton.postChatButton{background:#007db8!important;border:none!important}.dockableContainer .endChatContainer .endChatButton.postChatButton span{color:#fff!important}.dockableContainer .endChatContainer .endChatButton.postChatButton:focus,.dockableContainer .endChatContainer .endChatButton.postChatButton:hover{background:#004b6e!important;text-decoration:none}.dockableContainer .endChatContainer .endChatButton.closeChatButton{color:#007db8;background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.dockableContainer .endChatContainer .endChatButton.closeChatButton span{color:#007db8}.dockableContainer .endChatContainer .endChatButton.closeChatButton span:hover{color:#007db8;text-decoration:underline} h2[embeddedService-chatHeader_chatHeader]{color: #fff !important;}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'snapinStyle';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
            //callDellmetricsTrackForBot("880.130.859"); //FY21-0502: Unwanted Prop values for CareBot
        }

        head.appendChild(style);
    }
    //FY21-0702 DEFECT 8897670 [START]
    /*if (!document.getElementById('snapinAdditionalScriptSrc')) {
        var sfdc_script = document.createElement('script');
        sfdc_script.setAttribute('src','https://service.force.com/embeddedservice/5.0/esw.min.js');
        sfdc_script.id = 'snapinAdditionalScriptSrc';
        sfdc_script.type = 'text/javascript';
        document.head.appendChild(sfdc_script);   
    }*/
    //FY21-0702 DEFECT 8897670 [END]
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;

})();

function hideDomObject(eleSelector, findingEle) {
    try {
        document.querySelector(eleSelector).style.display = 'none';
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function hideOtherDomObject(eleSelector, findingEle, otherDomEle) {
    try {
        document.querySelector(otherDomEle).style.display = 'none';
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function initSnapIn(snapInObject) {
    var snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
    if (!snapinAlreadyInitiated) {
        if (window.embedded_svc) {
            initOriginalESW(snapInObject.serviceForceURL, snapInObject);

        } else {
            var s = document.createElement('script');
            s.setAttribute('src', snapInObject.snapInJs);
            s.onload = function () {
                initOriginalESW(null, snapInObject);
            };
            document.body.appendChild(s);
        }
    }
}

function triggerSnapin(snapInObject, preChatlableObject) {
    try {
        if (!(sessionStorage.getItem("isChatBotActive") != null && sessionStorage.getItem("isChatBotActive") == "true")) {//Check if chat bot is Active
            if (typeof (isSnapinInitiated) == "function" && isSnapinInitiated()) {
                var orderSnapinObject = sendGlobalSnapinCareObjToJson();
                initiateChatCARE(orderSnapinObject);//orderRetain Chat
            } //FY22-0203: Sprinklr Chatbot : Retain Chat Context [START]
            else if(snapInObject === undefined && history.length > 1){
                snapInObject = sendGlobalSnapinObjToJson();
                if(isResumeSprinklr()){
                    resumeSprinklrTechChat(snapInObject);
                } else if (snapinChatGlobalObjNotEmpty() && "snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated) {
                    eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
                    pageObserverForProp20("body", preChatlableObject);
                    initSnapIn(snapInObject);
                }//FY22-0203: Sprinklr Chatbot : Retain Chat Context [END]
            } else if (snapInObject) {
                //FY22-0203: Sprinklr Chatbot : Reboot Chat Context [END]
                if(isRebootSprinklr(snapInObject)){
                    addPrefillDetailsForAgentTransfer(snapInObject); //FY22-0203: Defect 10071964
                    resumeSprinklrTechChat(snapInObject);
                }else
                //FY22-0203: Sprinklr Chatbot : Reboot Chat Context [END]
                if (!snapInObject.snapinButtonClicked && !snapinChatGlobalObjNotEmpty()) {//FY20-1102: DEFECT 7534816  Retain chat is not working properly
                    eleExist('.embeddedServiceHelpButton', hideDomObject);
                    //eleExist('.embeddedServiceSidebar', hideDomObject);
                    eleExistWithVariable('.modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI', hideOtherDomObject, '.embeddedServiceSidebar');
                    saveGlobalSnapinObjToSession(snapInObject);
                    //snapinChatInitiatedState(true); //Fix for defect [7030965]
                    //eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick); //DEFECT 7030965 for Bishav comment this
                    if (document.getElementById('cusPreChatSnapinDom'))
                        custPreChatShowAdditionalDetailsInUi(snapInObject, preChatlableObject);
                    initSnapIn(snapInObject);
                } else if (customChatNotCreated()) {
                    snapInObject = sendGlobalSnapinObjToJson();
                    snapInObject.snapinButtonClicked = true;
                    saveGlobalSnapinObjToSession(snapInObject);
                    appendCustPreChatSnapinDom(snapInObject, preChatlableObject)
                }
            }
        }

    } catch (e) {
        console.log("Error in: " + e);
    }
}
function customChatNotCreated() {
    var cusPreChatHelpBtn = document.getElementById('cusPreChat-embeddedServiceHelpButton');
    var snapinExists = document.querySelector(".embeddedServiceSidebar .dockableContainer");
    var chatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
    if (chatStarted)
        return false;
    else if (cusPreChatHelpBtn && window.getComputedStyle(cusPreChatHelpBtn).display != "none" && !snapinExists) {
        prechatSettingForEmc();//STORY 7193456: FY201101
        document.getElementById("cusPreChat-helpButtonEnabled").click();
        return false;
    } else
        return true;
}
function appendCustPreChatSnapinDom(snapInObject, preChatlableObject) {
    if (!document.getElementById('cusPreChatSnapinDom')) {
        //FY21-1201: Unit testing: Adding Close that lable[START]
        if (!("closeChat" in preChatlableObject && preChatlableObject.closeChat)) 
            preChatlableObject.closeChat = "Close Chat";
        //FY21-1201: Unit testing: Adding Close that lable[END]
        //STORY 7193456: FY201101[START]
        if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct) {
            preChatlableObject.serviceTag = preChatlableObject.serialNumber;
        }
        //STORY 7193456: FY201101[END]
        //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
        var domEle
        if(isHesAdminChat(snapInObject)){
            domEle = createHesAdminChat(preChatlableObject, snapInObject); //FY21-1003 Defect: 9547663 TextOverflow for static content.
        } else
            domEle = '<div id="cusPreChatSnapinDom" class="cusPreChat-modalContainer"> <div class="cusPreChat-dockableContainer"> <div class="cusPreChat-embeddedServiceSidebarHeader"> <div class="cusPreChat-shortHeader"> <div class="cusPreChat-shortHeaderContent"> <button id="cusPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> </path> </svg> </span> </button> <h2 class="cusPreChat-headerText"> <div class="cusPreChat-headerTextContent"> <span id="cusPreChat-headerTextLabel">' + preChatlableObject.chatHeader + '</span> <span id="cusPreChat-headerSubtext"> </span></div></h2> <button id="cusPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button> </div></div></div><div class="cusPreChat-sidebarBody"> <div id="cusPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"> <div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">' + preChatlableObject.chatUnavailableMessage + '</div><div><button id="cusPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">'+preChatlableObject.closeChat+'</span></button></div></div><div id="cusPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"> <div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"> <div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"> <div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"> <div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"> <ul class="cusPreChat-fieldList"><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">' + preChatlableObject.firstName + '</span></label> <input id="cusPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div></span> </li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">' + preChatlableObject.lastName + '</span> </label> <input id="cusPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div></span> </li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>' + preChatlableObject.emailAddress + '</span></label> <input id="cusPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="Primary_Phone_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>' + preChatlableObject.phoneNumber + '</span> <span id="primPhoneIsOptional"> ' + preChatlableObject.optional + '</span></label> <input id="cusPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputDispatchNum cusPreChat-embeddedServiceSidebarFormField" style="display:none;"> <div class="cusPreChat-uiInput cusPreChat-uiInputDispatchNum cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Dispatch_Number__c"> <span>'+ preChatlableObject.dispatchNumber +'</span> </label> <input id="cusPreChat-DispatchNum" class="cusPreChat-Dispatch_Number__c form-control cusPreChat-input" maxlength="15" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="Issue_Description_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>' + preChatlableObject.issueDescription + '</span> </label> <textarea id="cusPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input coveo-query" maxlength="' + preChatlableObject.issueDescriptionLength + '" type="text" aria-describedby="" placeholder="" required="" data-coveo-id="txtIssueDetails"></textarea><div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / ' + preChatlableObject.issueDescriptionLength + ' ' + preChatlableObject.characters + '</div></div></li></ul>  <div id="PrechatCoveo" style="display:none;"></div> <div style="font-size: 12px;color:#767676;text-align: left;margin: 2.5em 1.75em; font-style: italic;color:#444444;">' + preChatlableObject.customerPrivacyDesc + '</div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">' + preChatlableObject.startChat + '</span> </button></div></div></div></div></div></div></div></div><div id="cusPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"> <div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)" > <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span> <div class="cusPreChat-helpButtonLabel" id="cusPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">' + preChatlableObject.chatHeader + '</span></div></button> </div></div>'; //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form
        //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]
        var body = document.body || document.getElementsByTagName('body')[0];
        body.insertAdjacentHTML('beforeend', domEle);
        prePopulateCustPreFormValues(snapInObject);
        checkIfIssueDescIsOptional(snapInObject, preChatlableObject);//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description
        checkIfPrimPhoneNumIsOptional(snapInObject, preChatlableObject);//FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form
        custPreFormShowIssueDetailsCharRemainingOnKeyUp(preChatlableObject);
        custPreChatKeypressFieldValidation(preChatlableObject);
        custPreChatShowAdditionalDetailsInUi(snapInObject, preChatlableObject);
        snapInObject = create_snapinChatUuid(snapInObject); //FY21-0602:[Sprinklr Chat Bot] Reporting Story:  create UUID for reporting
        document.getElementById("cusPreChat-startChat").addEventListener("click", function () { custPrechatInitiateChat(snapInObject, preChatlableObject) });
        document.getElementById("cusPreChat-minimize-btn").addEventListener("click", function () {
            if(isWarrantyPartsReturnChat(snapInObject)) //FY21-1201: STORY 9602355
                callDellmetricsTrack("800.300.256", "SNAPIN-WarrantyReturn: Minimize");
            else
                callDellmetricsTrack("890.220.007", "SNAPIN: Minimize"); //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
            minimizeCustPrechat();
        });
        document.getElementById("cusPreChat-close-btn").addEventListener("click", function () {
            if(isWarrantyPartsReturnChat(snapInObject)) //FY21-1201: STORY 9602355
                callDellmetricsTrack("800.300.257", "SNAPIN-WarrantyReturn: Close (x)");
            else
                callDellmetricsTrack("890.220.006", "SNAPIN: Close (x)"); //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
            closeCustPrechat(preChatlableObject);
        });
        document.getElementById("cusPreChat-helpButtonEnabled").addEventListener("click", function () {
            callDellmetricsTrack("890.220.008", "SNAPIN: Maximize"); //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
            maximizeCustPrechat();
        });
        eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick); //DEFECT 7030965 for Bishav comment this

        /*if (typeof snapInObject.isPCFCall !== "undefined" && snapInObject.isPCFCall) {
            isPCFCall = snapInObject.isPCFCall;
        }*/

        if (snapInObject.isCoveoSearchEnabled === true) {
            httpCoveoGetAsync(snapInObject.coveoViewUrl + "?isheaderRequired=false", apendToAHoverDiv);
            coveoInit(snapInObject, preChatlableObject);
        }
    } else {
        var snapinExists = document.querySelector(".embeddedServiceSidebar"), custPrechatForm = document.getElementById("cusPreChatSnapinDom");
        if ((!snapinExists || (snapinExists && window.getComputedStyle(snapinExists).display == 'none')) && window.getComputedStyle(custPrechatForm).display == 'none')
            maximizeCustPrechat();
        //document.getElementById("cusPreChatSnapinDom").style.display = 'block';
        //if (document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className != "uiButton helpButtonEnabled")
        //    agentsOfflinePostChatForm();
        var element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if (element && !element.classList.contains("helpButtonEnabled"))
            agentsOfflinePostChatForm();

    }
    prechatSettingForEmc();//STORY 7193456: FY201101
    callDellmetricsTrack("890.220.010", "SNAPIN: Window Load"); //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
}

//STORY 7193456: FY201101[START]
function prechatSettingForEmc() {
    makeIdReadWrite("cusPreChat-FirstName");
    makeIdReadWrite("cusPreChat-LastName");
    makeIdReadWrite("cusPreChat-Email");
    makeIdReadWrite("cusPreChat-Phone");
    if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct) {
        makeIdReadOnlyIfHasVal("cusPreChat-FirstName");
        makeIdReadOnlyIfHasVal("cusPreChat-LastName");
        makeIdReadOnlyIfHasVal("cusPreChat-Email");
		if(!isHesAdminChat(snapInObject)) //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
			makeIdReadOnlyIfHasVal("cusPreChat-Phone");
    }
}
function makeIdReadOnlyIfHasVal(id) {
    if (document.getElementById(id) && document.getElementById(id).value) {
        document.getElementById(id).readOnly = true;
    } else {
        makeIdReadWrite(id)
    }
}
function makeIdReadWrite(id) {
    document.getElementById(id).readOnly = false;
}
//STORY 7193456: FY201101[END]
//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description [START]
function checkIfIssueDescIsOptional(snapInObject, preChatlableObject) {
    if ((("issueVal" in snapInObject && snapInObject.issueVal != "" && snapInObject.issueVal != null && snapInObject.issueVal != undefined && snapInObject.issueVal != 'None') || isWarrantyPartsReturnChat(snapInObject)) && document.getElementById("Issue_Description_Cust_Label")) { //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form
        removeDomElementbyId("issueDescIsOptional");
        var optionalLabel = document.createElement('span');
        optionalLabel.id = 'issueDescIsOptional';
		//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
        if(isHesAdminChat(snapInObject))
            optionalLabel.style = 'color: #767676;';
		//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]
        optionalLabel.innerText = preChatlableObject.optional;
        var Issue_Description_Cust_Label = document.getElementById("Issue_Description_Cust_Label");
        Issue_Description_Cust_Label.appendChild(optionalLabel);
        removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription");
    } else {
        removeDomElementbyId("issueDescIsOptional");
    }
}
//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description [END]
//Coveo Get code[START]
function httpCoveoGetAsync(theUrl, callback) {
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');//FY21-0702 eSupport call Changes
        xmlHttp.setRequestHeader("Content-Type", "text/plain; charset=utf-8"); //FY21-0702 eSupport call Changes 
        xmlHttp.setRequestHeader("X-Robots-Tag", "noindex" ); //FY21-1003 eSupport call Changes
        xmlHttp.send(null);
    } catch (e) {
        console.log("Error in: " + e);
    }
}
function apendToAHoverDiv(responseText) {
    // var coveoSearchPleaseHolder = document.getElementById("PrechatCoveo");
    $('#PrechatCoveo').append(responseText);
    // coveoSearchPleaseHolder.insertAdjacentHTML('beforeend', responseText);
}

function coveoInit(snapInObject, preChatlableObject) {
    try {
        if (snapInObject.isCoveoSearchEnabled === true) {
            isCoveoSearchEnabled = true;
            coveoHeader = preChatlableObject.coveoHeader;
            setTimeout(function () {
                $.getScript(snapInObject.coveoJsUrl, function () {
                    $.getScript(snapInObject.coveoDeflectionjs, function () {
                        var productId = ""
                        var isEmcProduct = false;
                        if (snapInObject.emcProductId) {
                            productId = snapInObject.emcProductId;
                            isEmcProduct = true;
                        }
                        else
                            productId = snapInObject.productCode;

                        InitiateCoveoSearch(productId, snapInObject.productName, snapInObject.categoryPath, isEmcProduct, "chat", '', snapInObject.issueVal);
                    });
                });

                $("#cusPreChat-IssueDescription").on("keyup", function () {
                    //0502: eSupport Unit testing Changes [Start]
                    //GetCoveoPopoverResult(snapInObject.coveoSetDelay);
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(GetCoveoPopoverResult(snapInObject.coveoSetDelay));
                        }, 2500);
                    });
                    //0502: eSupport Unit testing Changes [End]
                });

                $("#cusPreChat-IssueDescription").on("click", function () {
                    GetCoveoPopoverResult(snapInObject.coveoSetDelay);
                });

                $('div').on('scroll', function () {
                    if ($('#prechatCoveo').css('display') == 'block') {
                        GetCoveoPopoverResult(0);
                    }
                });

                $(window).on('scroll', function () {
                    if ($('#prechatCoveo').css('display') == 'block') {
                        GetCoveoPopoverResult(0);
                    }
                });

            }, 2000);
        }
    } catch (e) {
        console.log("Error in: " + e);
    }
}

function GetCoveoPopoverResult(timeout) {
    if (timeout === undefined || timeout === '')
        timeout = 1200;

    var textLength = $('#cusPreChat-IssueDescription').val().length;

    if (isCoveoSearchEnabled === true && textLength > 1 && $('#searchcoveoview').hasClass('coveo-hidden') === false && $('#searchcoveoview').find('div.CoveoResult').length !== 0) {
        setTimeout(function () {
            $('#cusPreChat-IssueDescription').popover(
                {
                    html: true,
                    container: 'body',
                    template: '<div class="popover popoverPosition" id="prechatCoveoPopover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>',
                    title: function () {
                        return "<b>" + coveoHeader + "</b><a href='javascript:void(0);' class='close' data-dismiss='alert'>&times;</a>"
                    },
                    content: function () {
                        return $('#searchCoveo').html()
                    },
                });
            $(document).off('click', '.popover .close').on("click", ".popover .close", function () {
                $(this).parents(".popover").popover('hide');
                callDellmetricsTrack("890.222.134");
            });
            $('#cusPreChat-IssueDescription').popover("show");
        }, timeout);// delay is required to snyc up with result.           
    }
    /*else if (isCoveoSearchEnabled === true && textLength > 1 && $('#search').hasClass('coveo-hidden') === false && $('#search').find('div.CoveoResult').length !== 0) {

        setTimeout(function () {
            $('#cusPreChat-IssueDescription').popover(
                {
                    html: true,
                    template: '<div class="popover" id="prechatCoveo"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                    title: function () {
                        return "<b>" + coveoHeader + "</b><button id='popovercloseid' type='button' data-dismiss='popover' class='close' onclick='$(&quot;#cusPreChat-IssueDescription&quot;).popover(&quot;hide&quot;)' return false;>&times;</button>"
                    },
                    content: function () {
                        return $('#searchCoveo').html()
                    },
                    container: 'body',
                    placement: 'left',
                }).data('bs.popover').tip().addClass('popoverPosition');

            $('#cusPreChat-IssueDescription').popover("show");
        }, timeout);// delay is required to snyc up with result.           
    }*/
    else {
        CoveoPopoverDispose();
    }
}

function CoveoPopoverDispose() {
    if (isCoveoSearchEnabled === true) {
        /*if (!isPCFCall)
            $('#cusPreChat-IssueDescription').popover('destroy');
        else*/
            $('#cusPreChat-IssueDescription').popover('dispose');
    }
}

//Coveo Get code[END]
function prePopulateCustPreFormValues(snapInObject) {
    if ("firstName" in snapInObject && snapInObject.firstName !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusPreChat-FirstName").value = snapInObject.firstName;
    if ("lastName" in snapInObject && snapInObject.lastName !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusPreChat-LastName").value = snapInObject.lastName;
    if ("email" in snapInObject && snapInObject.email !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusPreChat-Email").value = snapInObject.email;
    //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
    if (isHesAdminChat(snapInObject))
            hesAdminAltEmailInterationDesign(snapInObject);
    //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
    if ("phoneNo" in snapInObject && snapInObject.phoneNo !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusPreChat-Phone").value = snapInObject.phoneNo;
    if ("issueDescription" in snapInObject && snapInObject.issueDescription !== null) //FY22-0302: Defect 10194575 : Remove Null values 
        document.getElementById("cusPreChat-IssueDescription").value = snapInObject.issueDescription;
}
function custPreFormShowIssueDetailsCharRemainingOnKeyUp(preChatlableObject) {
    try {
        document.getElementById("cusPreChat-IssueDescription").onkeyup = function () {
            custPreFormShowIssueDetailsCharRemaining(preChatlableObject);
        };
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function custPreFormShowIssueDetailsCharRemaining(preChatlableObject) {
    maxCharLength = preChatlableObject.issueDescriptionLength, innerTextColor = "#767676", currentCharLength = document.getElementById("cusPreChat-IssueDescription").value.length;
    document.getElementById("snappinCharCounter").innerText = currentCharLength + " / " + maxCharLength + " " + preChatlableObject.characters;
    if (currentCharLength === parseInt(maxCharLength)) {
        innerTextColor = "#c23934";
    } else {
        innerTextColor = "#767676";
    }
    document.getElementById("snappinCharCounter").style.color = innerTextColor;
}
function custPreChatKeypressFieldValidation(preChatlableObject) {
 //FY21-1201 Story #9602589: Warranty Parts Return :Prechat Form Validations - Error State for Dispatch Number [START]   
 if(document.getElementById("cusPreChat-DispatchNum"))   
    document.getElementById("cusPreChat-DispatchNum").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        for (i = 48; i < 58; i++)
            a.push(i);

        if (!(a.indexOf(k) >= 0))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-DispatchNum"))
            removeDomElementbyId("ErrMsg_cusPreChat-DispatchNum");
    }
//FY21-1201 Story #9602589: Warranty Parts Return :Prechat Form Validations - Error State for Dispatch Number [END]
    document.getElementById("cusPreChat-Phone").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        for (i = 48; i < 58; i++)
            a.push(i);
        a.push(45);
        a.push(8);
        a.push(9);
        if (!(a.indexOf(k) >= 0))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusPreChat-Phone");
    }
    document.getElementById('cusPreChat-FirstName').onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-FirstName"))
            removeDomElementbyId("ErrMsg_cusPreChat-FirstName");
    }
    document.getElementById('cusPreChat-LastName').onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-LastName"))
            removeDomElementbyId("ErrMsg_cusPreChat-LastName");
    }
	
    document.getElementById("cusPreChat-Email").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 47 && k < 58) || (k == 45) || (k == 46) || (k == 95) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusPreChat-Email");
    }
	//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
	if(document.getElementById("cusPreChat-emptyAltEmail")){
		document.getElementById("cusPreChat-emptyAltEmail").onkeypress = function (e) {
			var a = [];
			var k = e.which || e.keyCode;
			if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 47 && k < 58) || (k == 45) || (k == 46) || (k == 95) || k == 8 || k == 9))
				e.preventDefault();
			else if (document.getElementById("ErrMsg_cusPreChat-emptyAltEmail"))
				removeDomElementbyId("ErrMsg_cusPreChat-emptyAltEmail");
		}
		document.getElementById("cusPreChat-emptyAltEmail").addEventListener("paste", function (e) {
			var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
			if (format.test(pastedText(e)) == true) {
				e.preventDefault();
				alert(preChatlableObject.pasteInvalidTextMsg);
			} else if (document.getElementById("ErrMsg_cusPreChat-emptyAltEmail"))
				removeDomElementbyId("ErrMsg_cusPreChat-emptyAltEmail");
		});
    }
    if(document.getElementById("cusPreChat-BrowserVer")){
        document.getElementById("cusPreChat-BrowserVer").onkeypress = function (e) {
			if (document.getElementById("ErrMsg_cusPreChat-BrowserVer"))
				removeDomElementbyId("ErrMsg_cusPreChat-BrowserVer");
        }
        document.getElementById("cusPreChat-BrowserVer").addEventListener("paste", function (e) {
			if (document.getElementById("ErrMsg_cusPreChat-BrowserVer"))
				removeDomElementbyId("ErrMsg_cusPreChat-BrowserVer");
		});
    }
	//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]
    document.getElementById("cusPreChat-IssueDescription").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (k == 62 || k == 60)
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-IssueDescription")) {
            removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription");
        }
    }

    document.getElementById("cusPreChat-FirstName").addEventListener("paste", function (e) {
        checkForSpecialCharAndText(e, "cusPreChat-FirstName");
    });
    document.getElementById("cusPreChat-LastName").addEventListener("paste", function (e) {
        checkForSpecialCharAndText(e, "cusPreChat-LastName");
    });
    document.getElementById("cusPreChat-IssueDescription").addEventListener("paste", function (e) {
        var format = /[<>]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(preChatlableObject.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusPreChat-IssueDescription"))
            removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription");
    });
    document.getElementById("cusPreChat-Email").addEventListener("paste", function (e) {
        var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(preChatlableObject.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusPreChat-Email");
    });
    document.getElementById("cusPreChat-Phone").addEventListener("paste", function (e) {
        if (/^[0-9-]*$/.test(pastedText(e)) == false) {
            e.preventDefault();
            alert(preChatlableObject.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusPreChat-Phone");
    });
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    document.getElementById("cusPreChat-FirstName").addEventListener("change", function () {
        checkForSpecialCharAndText(this.value, this.id);
    });
    document.getElementById("cusPreChat-LastName").addEventListener("change", function () {
        checkForSpecialCharAndText(this.value, this.id);
    });
    document.getElementById("cusPreChat-Email").addEventListener("change", function () {
        var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
        if(!format.test(this.value) && document.getElementById("ErrMsg_cusPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusPreChat-Email");
    });
    document.getElementById("cusPreChat-Phone").addEventListener("change", function () {
        if (/^[0-9-]*$/.test(this.value) == true && document.getElementById("ErrMsg_cusPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusPreChat-Phone");
        else if (/^[0-9-]*$/.test(this.value) == false && !document.getElementById("ErrMsg_cusPreChat-Phone"))
            cusPreChatErrorMsgPlaceholder(this, preChatlableObject.phoneRequiredValidation);
    });
    if(document.getElementById("cusPreChat-emptyAltEmail")){
		document.getElementById("cusPreChat-emptyAltEmail").addEventListener("change", function () {
            var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
            if(!format.test(this.value) && document.getElementById("ErrMsg_cusPreChat-emptyAltEmail"))
                removeDomElementbyId("ErrMsg_cusPreChat-emptyAltEmail");
        });
    }
    if(document.getElementById("cusPreChat-BrowserVer")){
        document.getElementById("cusPreChat-BrowserVer").addEventListener("change", function () {
            if(document.getElementById("ErrMsg_cusPreChat-BrowserVer"))
                removeDomElementbyId("ErrMsg_cusPreChat-BrowserVer");
        });
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]
    function checkForSpecialCharAndText(e, ele) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(preChatlableObject.pasteInvalidTextMsg);
        } else if (ele === "cusPreChat-FirstName" && document.getElementById("ErrMsg_cusPreChat-FirstName"))
            removeDomElementbyId("ErrMsg_cusPreChat-FirstName");
        else if (ele === "cusPreChat-LastName" && document.getElementById("ErrMsg_cusPreChat-LastName"))
            removeDomElementbyId("ErrMsg_cusPreChat-LastName");
    }
    function pastedText(e) {
        if (e.clipboardData && e.clipboardData.getData)
            return e.clipboardData.getData('text/plain');
        else
            return null;
    }

}
function custPreChatShowAdditionalDetailsInUi(snapInObject, preChatlableObject) {
    if (document.getElementById("readonlyPreChatContainer"))
        removeDomElement(document.getElementById("readonlyPreChatContainer"));
    var topFields = document.querySelector(".cusPreChat-sidebarBody .cusPreChat-prechatUI  .cusPreChat-embeddedServiceSidebarForm ul.cusPreChat-fieldList");
    var topFieldValues;
    checkIfIssueDescIsOptional(snapInObject, preChatlableObject);//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description
    checkIfPrimPhoneNumIsOptional(snapInObject, preChatlableObject);//FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form
    //STORY 7193456: FY201101[START]
    if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct) {
        preChatlableObject.serviceTag = preChatlableObject.serialNumber;
    }
    //STORY 7193456: FY201101[END]
    //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
    if(isHesAdminChat(snapInObject)){
        topFieldValues = createHesAdminChatTopField(snapInObject, preChatlableObject);
    }else
    //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]
    //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form [START]
    if(isWarrantyPartsReturnChat(snapInObject)){
        topFieldValues = ""; //Remove the Sub-Header details
        document.querySelector(".cusPreChat-inputDispatchNum.cusPreChat-embeddedServiceSidebarFormField").style.display = 'block'; //Make DIspatch Number field Visible.
    }else
    //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form [END]
    if (snapInObject.productName == null)
        topFieldValues = '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.2em; text-align: left;position: relative;font-size: .75em;color: #444444;margin-bottom: 0px;">' + getChatServiceTag(preChatlableObject.serviceTag, snapInObject.serviceTag) + '<div><b>' + preChatlableObject.issueType + ':</b> <span class="coveo-query" data-coveo-id="IssueDesc" id="preChatIssueDesc" style="font-size: 12px;">' + snapInObject.issueVal + '</span></div></div>';
    else
        topFieldValues = '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.2em; text-align: left;position: relative;font-size: .75em;color: #444444;"><div style="font-size: 1.2em;">' + snapInObject.productName + '</div>' + getChatServiceTag(preChatlableObject.serviceTag, snapInObject.serviceTag) + '<div><b>' + preChatlableObject.issueType + ':</b> <span class="coveo-query" data-coveo-id="IssueDesc" id="preChatIssueDesc" style="font-size:12px;">' + snapInObject.issueVal + '</span></div></div>';
    topFields.insertAdjacentHTML("afterbegin", topFieldValues);
}
function custPreFormValidation(preChatlableObject, snapInObject) {//FY21-1003: DEFECT 9566455 : "Please enter valid email address" coming for random emailid's in HES

    var acceptForm,
        firstNameDOM = document.getElementById("cusPreChat-FirstName"),
        lastNameDOM = document.getElementById("cusPreChat-LastName"),
        emailDOM = document.getElementById("cusPreChat-Email"),
        phoneDOM = document.getElementById("cusPreChat-Phone"),
        IssueDescDOM = document.getElementById("cusPreChat-IssueDescription");
    if (document.getElementById("ErrMsg_cusPreChat-Email")) {
        var element = document.getElementById("ErrMsg_cusPreChat-Email");
        element.parentNode.removeChild(element);
    }
    if (!emailDOM.value)
        acceptForm = cusPreChatEleIsEmpty(emailDOM, preChatlableObject.emailRequiredValidation);
    else if (!("isEmcProduct" in snapInObject && snapInObject.isEmcProduct))//FY21-1003: DEFECT 9566455 : "Please enter valid email address" coming for random emailid's in HES
        acceptForm = cusPreChatInvalidEmail(emailDOM, preChatlableObject);
	
	//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
    var alternateEmailDOM = document.getElementById("cusPreChat-emptyAltEmail");
    var alternateEmailParentDOM = document.querySelector(".cusPreChat-emptyAltEmail.cusPreChat-embeddedServiceSidebarFormField");//FY21-1003: DEFECT 9618679: Values should be retained even after collapsing the alternate email.
    if(alternateEmailDOM && alternateEmailParentDOM.style.display != "none"){//FY21-1003: DEFECT 9618679: Values should be retained even after collapsing the alternate email.
		if (document.getElementById("ErrMsg_cusPreChat-emptyAltEmail")) {
			var element = document.getElementById("ErrMsg_cusPreChat-emptyAltEmail");
			element.parentNode.removeChild(element);
		}
		if (alternateEmailDOM.value)
			acceptForm = cusPreChatInvalidEmail(alternateEmailDOM, preChatlableObject);
	}

	if(document.getElementById("cusPreChat-BrowserVer") && !document.getElementById("cusPreChat-BrowserVer").value && "browserVersionValidation" in preChatlableObject && preChatlableObject.browserVersionValidation){
        if(document.getElementById("ErrMsg_cusPreChat-BrowserVer"))
            removeDomElementbyId("ErrMsg_cusPreChat-BrowserVer");
        acceptForm = cusPreChatEleIsEmpty(document.getElementById("cusPreChat-BrowserVer"), preChatlableObject.browserVersionValidation);
    }
    //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]
    
    //FY21-1201 Story #9602589: Warranty Parts Return :Prechat Form Validations - Error State for Dispatch Number [START]
    if(isWarrantyPartsReturnChat(snapInObject) && document.getElementById("cusPreChat-DispatchNum") && document.querySelector(".cusPreChat-inputDispatchNum.cusPreChat-embeddedServiceSidebarFormField").style.display === "block"){
        var dispatchNumValid = true; //FY21-1201 Story #9602589: Unit test defect.
        if(document.getElementById("ErrMsg_cusPreChat-DispatchNum"))
            removeDomElementbyId("ErrMsg_cusPreChat-DispatchNum");
        var dispatchNumInputDom = document.getElementById("cusPreChat-DispatchNum");
        if (dispatchNumInputDom.value)
            dispatchNumValid = cusPreChatInvalidDispatchNum(document.getElementById("cusPreChat-DispatchNum"), preChatlableObject);
        else
            dispatchNumValid = cusPreChatEleIsEmpty(dispatchNumInputDom, preChatlableObject.dispatchNumberRequiredValidation);
        
        if(!dispatchNumValid)
            acceptForm = false;  
    }
    //FY21-1201 Story #9602589: Warranty Parts Return :Prechat Form Validations - Error State for Dispatch Number [END]

    if (document.getElementById("ErrMsg_cusPreChat-FirstName")) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(firstNameDOM, "FirstName", format, true)) //FY20-1102 DEFECT 7534877
            acceptForm = false;
    } else if (!firstNameDOM.value)
        acceptForm = cusPreChatEleIsEmpty(firstNameDOM, preChatlableObject.firstNameValidation);
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    else{
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(firstNameDOM, "FirstName", format, true)){
            cusPreChatErrorMsgPlaceholder(firstNameDOM, preChatlableObject.firstNameValidation);
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]

    if (document.getElementById("ErrMsg_cusPreChat-LastName")) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(lastNameDOM, "LastName", format, true)) //FY20-1102 DEFECT 7534877
            acceptForm = false;
    } else if (!lastNameDOM.value)
        acceptForm = cusPreChatEleIsEmpty(lastNameDOM, preChatlableObject.lastNameValidation);
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    else{
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(lastNameDOM, "LastName", format, true)){
            cusPreChatErrorMsgPlaceholder(lastNameDOM, preChatlableObject.lastNameValidation);
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]

    if (document.getElementById("ErrMsg_cusPreChat-Phone")) {
        var format = /^[0-9-]*$/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(phoneDOM, "Phone", format, false)) //FY20-1102 DEFECT 7534877
            acceptForm = false;
    } else if (!phoneDOM.value /*&& !isWarrantyPartsReturnChat(snapInObject)*/) //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form
        acceptForm = cusPreChatEleIsEmpty(phoneDOM, preChatlableObject.phoneRequiredValidation);
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    else{
        var formatPhoneCorrect = /^[0-9-]*$/;
        if (checkErrMsgValidation(phoneDOM, "Phone", formatPhoneCorrect, false)){
            cusPreChatErrorMsgPlaceholder(phoneDOM, preChatlableObject.phoneRequiredValidation);
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]
    if (document.getElementById("ErrMsg_cusPreChat-IssueDescription")) {
        acceptForm = false;
    } else if (!IssueDescDOM.value && !document.getElementById("issueDescIsOptional"))//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description
        acceptForm = cusPreChatEleIsEmpty(IssueDescDOM, preChatlableObject.issueDescriptionValidation);

    if (acceptForm === undefined) acceptForm = true;
    return acceptForm;
}
//FY21-0202 DEFECT 7980969 [START]
function getChatServiceTag(label, val) {
    if (val && val != null)
        return '<div><b>' + label + ':</b> ' + val + '</div>';
    else
        return '';
}
//FY21-0202 DEFECT 7980969 [END]

//FY20-1102 DEFECT 7534877 [START]		
function checkErrMsgValidation(fieldEle, fieldName, format, formatResult) {
    if ((fieldEle.value && format.test(fieldEle.value) == formatResult) || (!fieldEle.value)) {
        return true;
    } else {
        var idValue = "ErrMsg_cusPreChat-" + fieldName;
        var element = document.getElementById(idValue);
        if(element) //FY22-0302 STORY 10071218: Unit testing issue fix
            element.parentNode.removeChild(element);
        return false;
    }
}
//FY20-1102 DEFECT 7534877 [END]
function cusPreChatEleIsEmpty(domElement, requiredValue) {
    cusPreChatErrorMsgPlaceholder(domElement, requiredValue);
    return false;
}
function cusPreChatInvalidEmail(domElement, preChatlableObject) {
    if (!cusPreChatvalidateEmail(domElement.value) || cusPreChatBlockListEmailValidation(domElement.value, preChatlableObject.blocklistEmails)) {
        cusPreChatErrorMsgPlaceholder(domElement, preChatlableObject.emailValidation);
        return false;
    }
}
function cusPreChatvalidateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function cusPreChatBlockListEmailValidation(email, blockList) {
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
function cusPreChatErrorMsgPlaceholder(domElement, message) {
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
function removeDomElementbyId(id) {
    if (document.getElementById(id)) {
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
    }
}
function minimizeCustPrechat() {
    document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'block';
    document.getElementById("cusPreChatSnapinDom").style.display = 'none';

    CoveoPopoverDispose();
}
function closeCustPrechat(preChatlableObject) {
    //minimizeCustPrechat();
    document.getElementById("cusPreChatSnapinDom").style.display = 'none';
    CoveoPopoverDispose();
    var errorMsgs = document.querySelectorAll(".cusPreChat-has-error");
    errorMsgs.forEach(function (errorMsg) {
        removeDomElement(errorMsg)
    });
    removecustFormValues();
    custPreFormShowIssueDetailsCharRemaining(preChatlableObject);
    document.getElementById("cusPreChatSnapinDom").remove(); //FY21-1201: Edge case scenarios
    document.getElementById("cusPreChat-embeddedServiceHelpButton").remove(); //FY21-1201: Edge case scenarios
    CoveoPopoverDispose();
}
function maximizeCustPrechat() {
    var element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
    if ((element && !element.classList.contains("helpButtonEnabled")) || !element) {
        //if ((document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton') && document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className != "uiButton helpButtonEnabled") || (!document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton'))) {
        agentsOfflinePostChatForm();
    } else {
        document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = 'none';
        document.getElementById("cusPreChat-hideWhileLoading").style.display = 'block';
        document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'none';
        document.getElementById("cusPreChatSnapinDom").style.display = 'block';
        document.getElementById("cusPreChat-minimize-btn").style.display = 'block';
        document.getElementById("cusPreChat-close-btn").style.display = 'block';
    }
    if (document.querySelector(".embeddedServiceHelpButton"))
        document.querySelector(".embeddedServiceHelpButton").style.display = 'none';
}
function addCustFormDetailsTo(snapInObject) {
    snapInObject.c_firstName = document.getElementById("cusPreChat-FirstName").value;
    snapInObject.c_lastName = document.getElementById("cusPreChat-LastName").value;
    snapInObject.c_email = document.getElementById("cusPreChat-Email").value;
    snapInObject.c_phoneNo = document.getElementById("cusPreChat-Phone").value;
    snapInObject.c_issueDescription = document.getElementById('cusPreChat-IssueDescription').value;
	//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
	if(isHesAdminChat(snapInObject)){
		if(document.getElementById('cusPreChat-emptyAltEmail').value)
			snapInObject.c_alternateEmail = document.getElementById('cusPreChat-emptyAltEmail').value;
		else
			snapInObject.c_alternateEmail = document.getElementById('cusPreChat-prefillAltEmail').value;
		snapInObject.c_browserVer = document.getElementById('cusPreChat-BrowserVer').value;
		snapInObject.c_url = document.getElementById('cusPreChat-URL').value;
	}
    //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]
    //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form [START]
    if(isWarrantyPartsReturnChat(snapInObject)){
        snapInObject.c_dispatchNumber = document.getElementById('cusPreChat-DispatchNum').value;
        snapInObject.issueVal = snapInObject.issueType;
    }
    //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form [END]
    return snapInObject;
}
function removecustFormValues() {
    inputFields = document.querySelectorAll(".cusPreChat-input");
    inputFields.forEach(function (inputField) {
        if (inputField.value)
            inputField.value = "";
    });
    prePopulateCustPreFormValues(snapInObject);
}
/*function snapinChatGlobalObjNotEmpty() {
    snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
    if (snapInObjectGlobal != null)
        return true;
    else
        return false;
}*/

///Dont retain chat if false DEFECT 6944128 [Searching for another solution]
function snapinChatGlobalObjNotEmpty() {
    snapInObjectGlobal = sendGlobalSnapinObjToJson();
    if (snapInObjectGlobal != null && ("snapinChatInitiated" in snapInObjectGlobal) && snapInObjectGlobal.snapinChatInitiated)
        return true;
    else {
        if (snapInObjectGlobal != null)
            sessionStorage.removeItem("snapInObjectSession");
        return false;
    }
}
function saveGlobalSnapinObjToSession(snapInObject) {
    if (snapInObject) {
        snapInObjectGlobal = JSON.stringify(snapInObject);
        sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
    }
}
function sendGlobalSnapinObjToJson() {
    snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
    snapInObject = JSON.parse(snapInObjectGlobal);
    return snapInObject;
}
function loadingSnapinQueue() {
    displayEleById("cusPreChat-sidebarLoadingIndicator", "flex");
    displayEleById("cusPreChat-hideWhileLoading", "none");
    displayEleById("cusPreChat-minimize-btn", "none");
    displayEleById("cusPreChat-close-btn", "none");
    //snapinChatInitiatedState(true); //Fir for defect 7030965
    removeLoaderIn10();
}

function snapinQueueLoaded() {
    if (document.querySelector(".embeddedServiceSidebar") && document.getElementById("cusPreChatSnapinDom")) {
        document.querySelector(".embeddedServiceSidebar").style.display = 'block';
        displayEleById("cusPreChatSnapinDom", "none");
        displayEleById("cusPreChat-alertMsgContainer", "none");
        displayEleById("cusPreChat-hideWhileLoading", "block");
        displayEleById("cusPreChat-minimize-btn", "block");
        displayEleById("cusPreChat-close-btn", "block");
    }
}
//FY22-0203: Unit Testing [START]
function displayEleById(domEle, displayStyle){
    if(document.getElementById(domEle))
        document.getElementById(domEle).style.display = displayStyle;
}
//FY22-0203: Unit Testing [END]
function agentsOfflinePostChatForm() {
    snapinChatInitiatedState(false);
    document.getElementById("cusPreChatSnapinDom").style.display = 'block';
    document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = 'none';
    document.getElementById("cusPreChat-alertMsgContainer").style.display = 'flex';
    document.getElementById("cusPreChat-hideWhileLoading").style.display = 'none';
    document.getElementById("cusPreChat-minimize-btn").style.display = 'none';
    document.getElementById("cusPreChat-close-btn").style.display = 'none';
    document.getElementById("cusPreChat-CloseChat").addEventListener("click", function () {
        document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'none';
        document.getElementById("cusPreChat-alertMsgContainer").style.display = 'none';
        document.getElementById("cusPreChat-alertMsgContainer").style.display = 'none';
        document.getElementById("cusPreChat-hideWhileLoading").style.display = 'block';
        document.getElementById("cusPreChatSnapinDom").style.display = 'none';
    });
}
function removeLoaderIn10() {
    setTimeout(function () {
        //var cusPreChatSnapinDom = document.getElementById("cusPreChatSnapinDom");
        var cusPreChatSnapinDom = document.getElementById("cusPreChat-sidebarLoadingIndicator");
        if (cusPreChatSnapinDom && window.getComputedStyle(cusPreChatSnapinDom).display != 'none') {
            document.getElementById("cusPreChatSnapinDom").style.display = 'none';
            if (document.querySelector(".embeddedServiceHelpButton"))
                document.querySelector(".embeddedServiceHelpButton").style.display = 'block';
        }
        var element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if (element && !element.classList.contains("helpButtonEnabled"))
            //if (document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className != "uiButton helpButtonEnabled")
            snapinChatInitiatedState(false);
        hideResumeSnapinLoader();
    }, 30000);
}
function snapinChatInitiatedState(booleanValue) {
    snapInObject = sendGlobalSnapinObjToJson();
    if (snapInObject) {
        snapInObject.snapinChatInitiated = booleanValue;
        saveGlobalSnapinObjToSession(snapInObject);
    }
}
function custPrechatInitiateChat(snapInObject, preChatlableObject) {
    if (custPreFormValidation(preChatlableObject, snapInObject)) {//FY21-1003: DEFECT 9566455 : "Please enter valid email address" coming for random emailid's in HES
        snapInObject = addCustFormDetailsTo(snapInObject);
        snapInObject.sprinklrChatbotRouted = false;//FY21-0502:[Sprinklr Chat Bot] insure sprinklr routed is false in the start
        saveGlobalSnapinObjToSession(snapInObject);
        pageObserverForProp20("body", preChatlableObject);
        loadingSnapinQueue();
        removecustFormValues();
        custPreFormShowIssueDetailsCharRemaining(preChatlableObject);
        snapInObject = sendGlobalSnapinObjToJson();
        if(isWarrantyPartsReturnChat(snapInObject)) //FY21-1201: STORY 9602355
            callDellmetricsTrack("800.300.258", "SNAPIN-WarrantyReturn: Submit|Description=" + descriptionHasValue(snapInObject)); //FY20-1101 STORY 7128491 //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
        else
            callDellmetricsTrack("890.220.002", "SNAPIN: Submit|Description=" + descriptionHasValue(snapInObject)); //FY20-1101 STORY 7128491 //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
        //FY21-0502:[Sprinklr Chat Bot] Defect 8520090: Check for agent avilability after prechat form before connecting to sprinklr Bot [START]
        if (checkSnapinQueueStatus(snapInObject) == 1) {
            if (!checkSprinklrChatBot(snapInObject)) {//FY21-0502:[Sprinklr Chat Bot] If Normal snapIn chat has to open
                connectToSnapInAgent(snapInObject);////FY21-0502:[Sprinklr Chat Bot] New reusable methode to connect to snapin Agent
            } else {//FY21-0502:[Sprinklr Chat Bot] If SprinklrChatBot Has to open
                document.getElementById("cusPreChatSnapinDom").style.display = 'none';
                startSprinklr();
            }
        } else {
            agentsOfflinePostChatForm();
        }//FY21-0502:[Sprinklr Chat Bot] Defect 8520090: Check for agent avilability after prechat form before connecting to sprinklr Bot [END]
    }

    CoveoPopoverDispose();
}

//FY21-0602: Prop value Additional Setup for Description [START]
function descriptionHasValue(snapInObject) {
    if ("c_issueDescription" in snapInObject && snapInObject.c_issueDescription != "")
        return "True";
    else
        return "False";
}
//FY21-0602: Prop value Additional Setup [END]

///FY21-0502:[Sprinklr Chat Bot] Start either SprinklrChatBot or start Normal SnapIn Chat [START]
function checkSprinklrChatBot(snapInObject) {
    try {
        if (snapInObject.language && snapInObject.productCode && snapInObject.issueVal) {
            var sprinklrChatBotVal = {
                "engine": "dellintent",
                "payloadTags": {
                    "lng": snapInObject.language,
                    "productCode": snapInObject.productCode,
                    "productName": snapInObject.productName,
                    "issueType": snapInObject.issueType,
                    "issueVal": snapInObject.issueVal,
                    "serviceTag": snapInObject.serviceTag
                },
                "requestId": snapInObject.uuid,
                "text": snapInObject.c_issueDescription,
                "user_firstName": snapInObject.c_firstName,
                "user_lastName": snapInObject.c_lastName,
                "user_email": snapInObject.c_email,
                "user_phoneNo": snapInObject.c_phoneNo,
                "sprinklrURL": (snapInObject.sprinklrURL != null && snapInObject.sprinklrURL != undefined) ? snapInObject.sprinklrURL : null,
                "intentApiURL": (snapInObject.intentApiURL != null && snapInObject.intentApiURL != undefined) ? snapInObject.intentApiURL : null,
                "sprinklrLoadingMessage": (snapInObject.sprinklrLoadingMessage != null && snapInObject.sprinklrLoadingMessage != undefined) ? snapInObject.sprinklrLoadingMessage : null
            };
            var res = canSupportSprinklr(sprinklrChatBotVal);
            return res;//If true open sprinklr chatBOt, If false open Snap-in
        } else {
            console.log("Sprinklr required Value is missing in snapInObject. Pleae check the below object value", snapInObject);
            return false;//open Snap-in
        }

    } catch (e) {
        console.log("checkSprinklrChatBot-Error:", e);
        return false;//open Snap-in
    }
}
//FY21-0502:[Sprinklr Chat Bot] Start either SprinklrChatBot or start Normal SnapIn Chat [END]

//FY21-0502:[Sprinklr Chat Bot] If customer wants to talk to an agent after sprinklr chat bot is opened.[START]
function triggerSnapinPostSprinkler(sprinklrChatBotObject) {  
    callDellmetricsTrack("890.220.017", "SNAPIN: Transferred by Sprinklr"); //FY22-0502  Chat : Story 10402965: Omniature extension for Tech Sprinklr BOT
    snapInObject = sendGlobalSnapinObjToJson();
    snapInObject.caseNumber = sprinklrChatBotObject;
    snapInObject.sprinklrChatbotRouted = true;//FY21-0502:[Sprinklr Chat Bot] sprinkler chat bot reoted is true only in this scenario.
    saveGlobalSnapinObjToSession(snapInObject);//Added caseNumber to SnapInObject 
    //FY22-0203: Sprinklr Chatbot : Retain Chat Context [START]
    if(isResumeSprinklr()){
        document.getElementById("cusPreChatSnapinDom").style.display = "block";
    }
    //FY22-0203: Sprinklr Chatbot : Retain Chat Context [END]
    connectToSnapInAgent(snapInObject);
}
//FY21-0502:[Sprinklr Chat Bot] If customer wants to talk to an agent after sprinklr chat bot is opened.[END]

//FY21-0502:[Sprinklr Chat Bot] If sprinklr successfully ended the chat.[START]
function sprinklerChatEnded() {
    snapinChatInitiatedState(false);//Dont Initiate SnapIn Chat
    var originalPrechatDOM = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
    var closeOriginalPrechatDOM = document.querySelector(".modalContainer  .dockableContainer .closeButton.headerItem");
    if (originalPrechatDOM && closeOriginalPrechatDOM)
        closeOriginalPrechatDOM.click();
    //FY22:0203 [Sprinklr Chat Bot] Unit testing changes [START]
    if(document.getElementById("cusPreChatSnapinDom"))
        document.getElementById("cusPreChatSnapinDom").remove();
    //FY22:0203 [Sprinklr Chat Bot] Unit testing changes [END]
    console.log("Sprinklr Chat ended Successfully");
    console.log(sendGlobalSnapinObjToJson());
}
//FY21-0502:[Sprinklr Chat Bot] If sprinklr successfully ended the chat.[END]

//FY21-0502:[Sprinklr Chat Bot] Connect to and Agent[START]
function connectToSnapInAgent(snapInObject) {
    pushValsToSnapinInit(snapInObject);//FY21-0502:[Sprinklr Chat Bot] Send CaseNumberand other detailsback to Snap-in before connecting to an agent.
    if (checkSnapinQueueStatus(snapInObject) == 1) {//FY20-1102 Avilability and Business Hr Chack
        if (("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated) || ("snapinButtonClicked" in snapInObject && snapInObject.snapinButtonClicked))
            eleExistWithVariable('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
        eleExistWithVariable('.embeddedServiceSidebar .startButton', chatStarted, snapInObject);
    } else //FY20-1102 Avilability and Business Hr Chack
        agentsOfflinePostChatForm(); //FY20-1102 Avilability and Business Hr Chack
}
//FY21-0502:[Sprinklr Chat Bot] Connect to and Agent[END]

//FY21-0602:[Sprinklr Chat Bot] Reporting Story: create UUID for reporting [START]
function create_snapinChatUuid(snapInObject) {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 18) % 18 | 0;
        dt = Math.floor(dt / 18);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(18);
    });
    snapInObject.uuid = uuid;
    saveGlobalSnapinObjToSession(snapInObject);
    return snapInObject;
}
function append_snapinChatUuid(msg) {
    var snapInObject = sendGlobalSnapinObjToJson();
    if (snapInObject && 'uuid' in snapInObject) {
        var addUdid = "|UUID:" + snapInObject.uuid;
        var msgMaxChar = 100 - addUdid.length;
        if (msgMaxChar < msg.length) {
            msg.slice(0, msgMaxChar);
        }
        msg = msg + addUdid;
    }
    return msg;
}
//FY21-0602:[Sprinklr Chat Bot] Reporting Story:  create UUID for reporting [END]

//FY21-0502:[DEFECT 7917426] pushing new Values to SFDC if its changed[START]
function pushValsToSnapinInit(snapInObject) {
    var extraPrechatFormVals = embedded_svc.settings.extraPrechatFormDetails, i = 0;
    extraPrechatFormVals.forEach(function (extraPrechatFormVal) {
        var fieldAPI = extraPrechatFormVal.transcriptFields[0];
        //console.log("Values in forEach Condition:",embedded_svc.settings.extraPrechatFormDetails[i]);
        switch (fieldAPI) {
            case "Issue__c":
                if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct && "chatSeverity" in snapInObject) {//FY21-0502: DEFECT 8455167 value not mapping to chatSeverity for EMC [START]
                    embedded_svc.settings.extraPrechatFormDetails[i].value = snapInObject.chatSeverity + " " + snapInObject.issueVal;
                } else                                                                                               //FY21-0502: DEFECT 8455167 value not mapping to chatSeverity for EMC [END]
                    embedded_svc.settings.extraPrechatFormDetails[i].value = getTechSupportSubject(snapInObject); //FY21-0502: DEFECT 8624995 Check for DDS
                break;
            case "Issue_Key__c":
                embedded_svc.settings.extraPrechatFormDetails[i].value = getIssueTypeKey(snapInObject); //FY21-0502: DEFECT 8624995 Check for DDS
                break;
            case "Service_Tag__c":
                /* //FY210803: HES Story changes
                if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct && "cpid" in snapInObject) {//FY21-0502: DEFECT 8455167 value not mapping to CPID for EMC [START]
                    embedded_svc.settings.extraPrechatFormDetails[i].value = snapInObject.cpid;
                } else */                                                                                //FY21-0502: DEFECT 8455167 value not mapping to CPID for EMC [END]
                embedded_svc.settings.extraPrechatFormDetails[i].value = snapInObject.serviceTag;
                break;
            case "Case_Number__c": //FY21-0502:[Sprinklr Chat Bot] Sending Lightning Case Number from sprinklr to SFDC chat via eSupport
                if (snapInObject.caseNumber)
                    embedded_svc.settings.extraPrechatFormDetails[i].value = snapInObject.caseNumber;
                else
                    embedded_svc.settings.extraPrechatFormDetails[i].value = "";
                break;
            case "Sprinklr_Chatbot_Routed__c": //FY21-0502:[Sprinklr Chat Bot] Sending Lightning Case Number from sprinklr to SFDC chat via eSupport
                if (snapInObject.sprinklrChatbotRouted)
                    embedded_svc.settings.extraPrechatFormDetails[i].value = snapInObject.sprinklrChatbotRouted;
                else
                    embedded_svc.settings.extraPrechatFormDetails[i].value = false;
                break;
			//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
			case "Secondary_Email_Address__c":
                embedded_svc.settings.extraPrechatFormDetails[i].value = isHesAdminChat(snapInObject) ? snapInObject.c_alternateEmail : '';
                break;
			case "Web_Browser__c":
                embedded_svc.settings.extraPrechatFormDetails[i].value = isHesAdminChat(snapInObject) ? snapInObject.c_browserVer : '';
                break;
			case "URL__c":
                embedded_svc.settings.extraPrechatFormDetails[i].value = isHesAdminChat(snapInObject) ? snapInObject.c_url : '';
                break;
            //FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]
            //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form [START]
            case "PP_Work_Order_From_Partner__c":
                embedded_svc.settings.extraPrechatFormDetails[i].value = isWarrantyPartsReturnChat(snapInObject) ? snapInObject.c_dispatchNumber : '';
                break;
            //FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form [END]
            default:
                break;
        }
        i++;
    });
}
//FY21-0502:[DEFECT 7917426] pushing new Values to SFDC if its changed[END]

//FY20-1102 Avilability and Business Hr Chack [START]
function checkSnapinQueueStatus(snapInObject) {
    var returnValue;
    //FY21-0803: Story #8842192 check for HES/EMC products[START]
    function httpGetBusinessHrAgentAvailability(theUrl) {
        try {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    returnValue = xmlHttp.responseText;
            }
            xmlHttp.open("GET", theUrl, false); // true for asynchronous 
            xmlHttp.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');//FY21-0702 eSupport call Changes
            xmlHttp.setRequestHeader("Content-Type", "application/json; charset=utf-8"); //FY21-0702 eSupport call Changes
            xmlHttp.send(null);
            return returnValue;
        } catch (e) {
            console.log("Error in: " + e);
        }
    }
    function httpGetAgentAvailability(theUrl) {
        try {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
					returnValue = xmlHttp.responseText;
            }
            xmlHttp.open("GET", theUrl, false); // true for asynchronous 
            xmlHttp.setRequestHeader('HTTP_X_REQUESTED_WITH', 'XMLHttpRequest');//FY21-0702 eSupport call Changes
            xmlHttp.setRequestHeader("Content-Type", "application/text; charset=utf-8"); //FY21-0702 eSupport call Changes
            xmlHttp.send(null);
			return returnValue;
        } catch (e) {
            console.log("Error in: " + e);
        }
    }
    
    if (snapInObject.checkQueueStatusInBizHoursUrl && snapInObject.hoursOfOperation && snapInObject.timeZone && (snapInObject.checkQueueStatusInBizHoursUrl != "" || snapInObject.checkQueueStatusInBizHoursUrl != null || snapInObject.checkQueueStatusInBizHoursUrl != undifined) && (snapInObject.hoursOfOperation != "" || snapInObject.hoursOfOperation != null || snapInObject.hoursOfOperation != undifined) && (snapInObject.timeZone != "" || snapInObject.timeZone != null || snapInObject.timeZone != undifined)) { 
        return httpGetBusinessHrAgentAvailability(snapInObject.checkQueueStatusInBizHoursUrl + "?chatHours=" + escape(snapInObject.hoursOfOperation) + "&timeZone=" + escape(snapInObject.timeZone) + "&buttonId=" + snapInObject.buttonId);
    }
    //FY21-1201: Story #9475073: HES_Second Check for Business Hours and Agent Availability [START]
    else if(snapInObject.checkQueueStatusInBizHoursUrl && (snapInObject.checkQueueStatusInBizHoursUrl != "" || snapInObject.checkQueueStatusInBizHoursUrl != null || snapInObject.checkQueueStatusInBizHoursUrl != undifined)) { 
        return httpGetBusinessHrAgentAvailability(snapInObject.checkQueueStatusInBizHoursUrl + "?buttonId=" + snapInObject.buttonId);
    }
    //FY21-1201: Story #9475073: HES_Second Check for Business Hours and Agent Availability [END]
    else if("checkBtnAvailabilityUrl" in snapInObject && snapInObject.checkBtnAvailabilityUrl && snapInObject.checkBtnAvailabilityUrl != ""){
        var btnAvailabilityResVal = httpGetAgentAvailability(snapInObject.checkBtnAvailabilityUrl+snapInObject.buttonId);
        if (btnAvailabilityResVal){
            return 1;
        }else{
            return 4;
        }
    }
    //FY21-0803: Story #8842192 check for HES/EMC products[END]
    else
        return 1;
}
//FY20-1102 Avilability and Business Hr Chack [END]

function initOriginalESW(gslbBaseURL, snapInObject) {
    snapInClickListners();
    snapinChatGlobalServiceTag = snapInObject.serviceTag;
    snapinChatGlobalIssueType = snapInObject.issueVal;
    snapinChatGlobalProductName = snapInObject.productName;
    embedded_svc.settings.displayHelpButton = true;
    embedded_svc.settings.defaultMinimizedText = 'Chat Now';

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';
    //STORY 6929894[START]
    if ("routingModel" in snapInObject && snapInObject.routingModel && snapInObject.routingModel.toLowerCase() === "skillbased") {
        embedded_svc.settings.fallbackRouting = snapInObject.skillIds;
    }
    //STORY 6929894[END]
    if ("language" in snapInObject)
        translatedLabels = translation(snapInObject.language);
    else
        translatedLabels = translation("en");
    embedded_svc.settings.language = translatedLabels.language;

    //STORY 7193324: FY201101[START] //FY210803: HES Generic chat changes [START]
    var assetFieldName = "Name";
    if (snapInObject.isEmcProduct) {
        assetFieldName = "External_ID__c";
        embedded_svc.settings.extraPrechatFormDetails = [
            { "label": translatedLabels.firstName, "transcriptFields": ["FirstName__c"] },
            { "label": translatedLabels.lastName, "transcriptFields": ["LastName__c"] },
            { "label": translatedLabels.primPhone, "transcriptFields": ["ContactNumber__c"] },
            { "label": translatedLabels.emailAdd, "transcriptFields": ["Email__c"] },
            { "label": "Subject", "value": snapInObject.chatSeverity + " " + snapInObject.issueVal, "transcriptFields": ["Issue__c"] },
            { "label": translatedLabels.issueDesc, "transcriptFields": ["Description__c"] },
            { "label": "Case Number", "value": "", "transcriptFields": ["Case_Number__c"] }, //FY21-0502:[Sprinklr Chat Bot]: Adding new Field to be pushed to transcript
            { "label": "Sprinklr Chatbot Routed", "value": "", "transcriptFields": ["Sprinklr_Chatbot_Routed__c"] },//FY21-0502:[Sprinklr Chat Bot]: Adding new Field to be pushed to transcript
            { "label": "Service Tag", "value": "", "transcriptFields": ["Service_Tag__c"] },//FY21-0502:[Sprinklr Chat Bot]: Adding new Field to be pushed to transcript
            { "label": "SubIssue Key", "value": getIssueTypeKey(snapInObject), "transcriptFields": ["Issue_Key__c"] },//Story FY21-0502 Soty 8020202: Pass issue key to Lightnig for HES Chat
            { "label": "Chat Source", "value": 'EMC', "transcriptFields": ["Chat_Source__c"] },
            { "label": "Serial Number", "value": snapInObject.serviceTag, "transcriptFields": ["Serial_Number__c"] },
            { "label": "CPID", "value": snapInObject.cpid, "transcriptFields": ["CPID__c"] },
            { "label": "EPDM Id", "value": snapInObject.epdmId, "transcriptFields": ["EPDM_Id__c"] },
            { "label": "Product", "value": snapInObject.productName, "transcriptFields": ["Product_Name__c"] },
			//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
			{ "label": "Secondary Email Address", "value": "", "transcriptFields": ["Secondary_Email_Address__c"] },
			{ "label": "Web Browser", "value": "", "transcriptFields": ["Web_Browser__c"] },
			{ "label": "URL", "value": "", "transcriptFields": ["URL__c"] },
			//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]
            { "label": "Site Id", "value": snapInObject.siteId, "transcriptFields": ["Site_Id__c"] }
        ];
    } //STORY 7193324: FY201101[END] //FY210803: HES Generic chat changes [END] 
    else
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
        }, {// New filed
            "label": "Chat Source",
            "value": getTechSupportChatSource(snapInObject),//FY21-0202 Story STORY #7689121
            "transcriptFields": ["Chat_Source__c"]
        }, {	// New filed
            "label": "Subject",
            "value": getTechSupportSubject(snapInObject),//snapInObject.issueVal,//FY21-0202 Story STORY #7689121
            "transcriptFields": ["Issue__c"]
        },
        //Story #6614459: Skill Based: Resume Chat Option [START]
        {
            "label": "SubIssue Key",
            "value": getIssueTypeKey(snapInObject),
            "transcriptFields": ["Issue_Key__c"]
        },
        //Story #6614459: Skill Based: Resume Chat Option [END]
        {//FY21-0502:[Sprinklr Chat Bot]: Adding new Field to be pushed to transcript[START]
            "label": "Case Number",
            "value": "",
            "transcriptFields": ["Case_Number__c"]
        }, {
            "label": "Sprinklr Chatbot Routed",
            "value": false,
            "transcriptFields": ["Sprinklr_Chatbot_Routed__c"]
        },
        //FY21-0502:[Sprinklr Chat Bot]: Adding new Field to be pushed to transcript[END]
        {"label": "DPS Number","value": "","transcriptFields": ["PP_Work_Order_From_Partner__c"]},//FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form
        {
            "label": "Service Tag",
            "value": snapInObject.serviceTag,
            "transcriptFields": ["Service_Tag__c"]
        }, {
            "label": translatedLabels.issueDesc,
            "transcriptFields": ["Description__c"]
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
    }, {
        "entityFieldMaps": [{
            "doCreate": false,
            "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
            "fieldName": assetFieldName,//STORY 7193324: FY201101
            "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
            "label": "Service Tag"
        }
        ],
        "entityName": "Asset",
        "saveToTranscript": "Asset__c"
    }, {
        "entityFieldMaps": [{
            "doCreate": false,
            "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
            "fieldName": "Issue_Description__c",
            "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
            "label": translatedLabels.issueDesc
        }
        ],
        "entityName": "Case"
    }
    ];

    var firstNameVal = null,
        lastNameVal = null,
        emailAddVal = null,
        issueDescription = null,
        primePhoneVal = null;
    if ("c_firstName" in snapInObject)
        firstNameVal = snapInObject.c_firstName;
    else
        firstNameVal = "FirstName";
    if ("c_lastName" in snapInObject)
        lastNameVal = snapInObject.c_lastName;
    else
        lastNameVal = "LastName";
    if ("c_email" in snapInObject)
        emailAddVal = snapInObject.c_email;
    else
        emailAddVal = "email@dell.com";
    if ("c_phoneNo" in snapInObject)
        primePhoneVal = snapInObject.c_phoneNo;
    else
        primePhoneVal = "123";
    if ("c_issueDescription" in snapInObject)
        issueDescription = snapInObject.c_issueDescription;
    else
        issueDescription = "issueDescription";

    embedded_svc.settings.prepopulatedPrechatFields = {
        FirstName: firstNameVal,
        LastName: lastNameVal,
        Email: emailAddVal,
        Primary_Phone__c: primePhoneVal,
        Issue_Description__c: issueDescription
    };
    embedded_svc.addEventHandler("onConnectionError", function (data) {
        snapinChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onIdleTimeoutOccurred", function (data) {
        snapinChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onChatEndedByChasitor", function (data) {
        snapinChatInitiatedState(false);
        //callDellmetricsTrackForBot("880.130.860", data.liveAgentSessionKey); //FY21-0502: Unwanted Prop values for CareBot
    });

    embedded_svc.addEventHandler("onChatEndedByAgent", function (data) {
        snapinChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onChasitorMessage", function (data) {
        snapinChatInitiatedState(true);//Fix for defect 7030965
    });
    //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn [START]
    embedded_svc.addEventHandler("onChatEstablished", function (data) {
        callDellmetricsTrack("890.220.013", "SNAPIN: Chat Started");
    });
    //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn [END]
    //FY21-0202 Fix for defect 7917426 [START]
    /*embedded_svc.addEventHandler("onChatRequestSuccess", function(data) {
            $("body").on('DOMNodeRemoved', function(e) {
                if(e.target.className){
                    className = e.target.className.split(" ");
                    if(className[0] === "modalContainer")
                        sessionStorage.removeItem("snapInObjectSession");
                }	
            });
    });*/
    //FY21-0202 Fix for defect 7917426 [END]
    embedded_svc.addEventHandler("onAgentMessage", function (data) {
        snapinChatInitiatedState(true);
    });

    embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, {
        baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL,
        deploymentId: snapInObject.deploymentId,
        buttonId: snapInObject.buttonId,
        baseLiveAgentURL: snapInObject.baseLiveAgentURL,
        eswLiveAgentDevName: snapInObject.LiveAgentDevName,
        isOfflineSupportEnabled: false
    });
};
/*
function togglePrechatAndSnapin(targetNode) {
    if (document.getElementById("cusPreChatSnapinDom")) {
        if (targetNode === "snapInhelpBtnDisabled") {
            document.getElementById("cusPreChatSnapinDom").style.display = "none";
        } else if (targetNode === "snapInhelpBtnEnabled") {
            preChatCanvas = document.getElementById("cusPreChatSnapinDom");
            if (window.getComputedStyle(preChatCanvas).display === 'block') {
                if (document.querySelector(".helpButtonEnabled #helpButtonSpan > .message"))
                    document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").click();
            } else {
                snapinChatInitiatedState(false);
                //minimizeCustPrechat();
                
            }
        }
    } else if (snapinChatGlobalObjNotEmpty()) {
        snapinChatInitiatedState(false);
        if (!document.getElementById("cusPreChatSnapinDom")) {
            document.querySelector(".embeddedServiceHelpButton").style.display = 'none';
        }
    }
}
*/
//FY21-0202 Story STORY #7689121 [START]
function getTechSupportSubject(snapInObject) {
    //FY21-0202 Story Defectfix for Defect # 7977210 [START]
    /*if(("serviceTag" in snapInObject && snapInObject.serviceTag) || ("issueVal" in snapInObject && snapInObject.issueVal))
        return snapInObject.issueVal;
    else if("productFamily" in snapInObject)
        return snapInObject.productFamily;*/
    if ("productFamily" in snapInObject && snapInObject.productFamily === "security_dell_data" && "productName" in snapInObject)
        return "Dell Data Security";
    else if ("issueVal" in snapInObject && snapInObject.issueVal)
        return snapInObject.issueVal;
    //FY21-0202 Story Defectfix for Defect # 7977210 [END]
}
function getTechSupportChatSource(snapInObject) {
    if (("serviceTag" in snapInObject && snapInObject.serviceTag) || isWarrantyPartsReturnChat(snapInObject))//FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form
        return "Tech";
    else
        return "Product";
}
//FY21-0202 Story STORY #7689121 [END]

//Story #6614459: Skill Based: Resume Chat Option [START]
function getIssueTypeKey(snapInObject) {
    if ("issueType" in snapInObject && snapInObject.issueType) {
        return snapInObject.issueType;
    } else {
        return "";
    }
}
//Story #6614459: Skill Based: Resume Chat Option [END]
function triggerResumeSnapin(snapInObject) {
    try {
        if (snapinChatGlobalObjNotEmpty()) {
            showResumeSnapinLoader();
            var eleSelector = document.querySelector('.helpButtonEnabled #helpButtonSpan > .message');
            if (eleSelector.innerText === 'Chat Now')
                eleSelector.click();
        } else {
            pageObserverForProp20("body");
            snapInObject.snapinResumeChatInitiated = false;
            saveGlobalSnapinObjToSession(snapInObject);
            showResumeSnapinLoader();
            var initESW = function (gslbBaseURL) {
                snapinChatGlobalIssueType = snapInObject.issueVal;
                snapinChatGlobalServiceTag = snapInObject.serviceTag;
                if ("productName" in snapInObject)
                    snapinChatGlobalProductName = snapInObject.productName;
                eleExist('.helpButtonEnabled #helpButtonSpan > .message', resumeChatClick);
                embedded_svc.settings.displayHelpButton = true;
                //STORY 6929894[START]
                if ("routingModel" in snapInObject && snapInObject.routingModel && snapInObject.routingModel.toLowerCase() === "skillbased")
                    embedded_svc.settings.fallbackRouting = snapInObject.skillIds;
                //STORY 6929894[END]
                if ("language" in snapInObject)
                    translatedLabels = translation(snapInObject.language);
                else
                    translatedLabels = translation("en");
                embedded_svc.settings.language = translatedLabels.language;
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
                //embedded_svc.settings.storageDomain = snapInObject.domainName;
                embedded_svc.settings.defaultMinimizedText = 'Chat Now';
                embedded_svc.settings.extraPrechatFormDetails = [{
                    "label": "Delta Sr",
                    "value": snapInObject.srNumber,
                    "transcriptFields": ["Delta_SR__c"]
                }, {
                    "label": translatedLabels.firstName,
                    "name": "FirstName",
                    "value": snapInObject.firstName,
                    "displayToAgent": true
                }, {
                    "label": translatedLabels.lastName,
                    "value": snapInObject.lastName,
                    "displayToAgent": true
                }
                ];
                embedded_svc.settings.extraPrechatInfo = [{
                    "entityFieldMaps": [{
                        "doCreate": true,
                        "doFind": true,
                        "fieldName": "Delta_SR__c",
                        "isExactMatch": true,
                        "label": "Delta Sr"
                    }
                    ],
                    "entityName": "Case"
                }
                ];

                embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, {
                    baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL,
                    deploymentId: snapInObject.deploymentId,
                    buttonId: snapInObject.buttonId,
                    baseLiveAgentURL: snapInObject.baseLiveAgentURL,
                    eswLiveAgentDevName: snapInObject.LiveAgentDevName,
                    isOfflineSupportEnabled: false
                });
            };
            if (!window.embedded_svc) {
                var s = document.createElement('script');
                s.setAttribute('src', snapInObject.snapInJs);
                s.onload = function () {
                    initESW(null, snapInObject.srNumber);
                };
                document.body.appendChild(s);
            } else {
                initESW(snapInObject.serviceForceURL, snapInObject.srNumber);
            }
        }
    } catch (e) {
        console.log("Error in: " + e);
    }
}
function showResumeSnapinLoader() {
    snapInObject = sendGlobalSnapinObjToJson();
    if (!snapInObject.snapinResumeChatInitiated) {
        saveGlobalSnapinObjToSession(snapInObject);
        if (!document.getElementById('cusResumeSnapIn-loader')) {
            var domEle = '<div id="cusResumeSnapIn-loader" class="cusPreChat-embeddedServiceHelpButton"><div class="cusPreChat-helpButton" style="width: 168px;"><div class="cusPreChat-uiButton" style="cursor: default;"><div class="cusPreChat-helpButtonLabel"><span class="cusPreChat-message">Loading</span></div></div></div></div>';
            var body = document.body || document.getElementsByTagName('body')[0];
            body.insertAdjacentHTML('beforeend', domEle);
        } else {
            document.getElementById('cusResumeSnapIn-loader').style.display = 'block';
        }

    }
}
function hideResumeSnapinLoader() {
    if (document.getElementById('cusResumeSnapIn-loader')) {
        document.getElementById('cusResumeSnapIn-loader').style.display = 'none';
        snapInObject = sendGlobalSnapinObjToJson();
        snapInObject.snapinResumeChatInitiated = true;
        saveGlobalSnapinObjToSession(snapInObject);
    }
}
function chatClick(eleSelector, findingEle) {
    try {
        snapInObject = sendGlobalSnapinObjToJson();
        if (("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated && document.querySelector(eleSelector).innerText === 'Chat Now') || (document.querySelector(eleSelector).innerText === 'Chat Now')) {
            document.querySelector(eleSelector).click();
        }
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function resumeChatClick(eleSelector, findingEle) {
    try {
        if (document.querySelector(eleSelector).innerText === 'Chat Now') {
            document.querySelector(eleSelector).click();
        }
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function chatStarted(eleSelector, findingEle, snapInObject) {
    try {
        var element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if (element && element.classList.contains("helpButtonEnabled"))
            //if (document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className === "uiButton helpButtonEnabled")
            changePrechatValues(snapInObject, clickSnapinChatBtn);
        else {
            agentsOfflinePostChatForm();
            clearInterval(findingEle);
        }
        function clickSnapinChatBtn() {
            snapInObject = sendGlobalSnapinObjToJson();
            //if ("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated) {
            document.querySelector(eleSelector).click();
            clearInterval(findingEle);
            /*}else
                console.log("working");
            */
        }
        function changePrechatValues(snapInObject, callback) {
            var state = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState();
            var prechatFields = state.get("v.prechatFields");
            //Language Changes Not Required[START]
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
                }
            });

            //Language Changes Not Required[END]
            state.set("v.prechatFields", prechatFields);
            callback();
        }
    } catch (e) {
        console.log("Error in:" + e);
    }
}

function translation(lang) {
    var language = lang.replace("_", "-");
    language = language.toLowerCase();
    this.primPhone = "Primary Phone Number";
    this.issueDesc = "Issue Description";
    if (language == "de") {
        this.firstName = "Vorname";
        this.lastName = "Nachname";
        this.emailAdd = "E-Mail";
        //this.primPhone = "Primair telefoonnummer"; //FY21-0502: Story #8348201
        //this.issueDesc = "Probleem Beschrijving"; //FY21-0502: Story #8348201
        this.language = "de";
    } else if (language == "ja") {
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "メール";
        //this.primPhone = "主に使う電話番号"; //FY21-0502: Story #8348201
        //this.issueDesc = "問題の説明"; //FY21-0502: Story #8348201
        this.language = "ja";
    } else if (language == "ko") {
        this.firstName = "이름";
        this.lastName = "성";
        this.emailAdd = "이메일";
        //this.primPhone = "기본 전화 번호"; //FY21-0502: Story #8348201
        //this.issueDesc = "문제 설명"; //FY21-0502: Story #8348201
        this.language = "ko";
    } else if (language == "es") {
        this.firstName = "Nombre";
        this.lastName = "Apellidos";
        this.emailAdd = "Correo electrónico";
        //this.primPhone = "Número de teléfono primario"; //FY21-0502: Story #8348201
        //this.issueDesc = "descripcion del problema"; //FY21-0502: Story #8348201
        this.language = "es";
    } else if (language == "zh" || language == "cn" || language == "zh-cn") {
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "电子邮件";
        //this.primPhone = "最常用的电话号码"; //FY21-0502: Story #8348201
        //this.issueDesc = "问题说明"; //FY21-0502: Story #8348201
        this.language = "zh-CN";
    } else if (language == "zh-tw") {
        this.firstName = "名字";
        this.lastName = "姓氏";
        this.emailAdd = "電子郵件";
        this.language = "zh-TW";
    } else if (language == "pt-pt") { //Language related issue FY21-0202- Defect 8062138
        this.firstName = "Nome próprio";
        this.lastName = "Apelido";
        this.emailAdd = "E-mail";
        this.language = "pt-pt";
    } else if (language == "pt" || language == "pt-br") { //Language related issue FY21-0202- Defect 8062138
        this.firstName = "Nome";
        this.lastName = "Sobrenome";
        this.emailAdd = "Email";
        //this.primPhone = "Número de Telefone Principal"; //FY21-0502: Story #8348201
        //this.issueDesc = "descrição do problema"; //FY21-0502: Story #8348201
        this.language = "pt-br";
    } else if (language == "nl" || language == "nl-nl") {
        this.firstName = "Voornaam", this.lastName = "Achternaam",
            this.emailAdd = "E-mail";
        //this.primPhone = "Primair telefoonnummer"; //FY21-0502: Story #8348201
        //this.issueDesc = "Probleem Beschrijving";//FY21-0502: Story #8348201
        this.language = "nl-NL";//Language related issue FY21-0202
    } else if (language == "fr") {
        this.firstName = "Prénom";
        this.lastName = "Nom";
        this.emailAdd = "Adresse e-mail";
        this.language = "fr";
    } else if (language == "da") {
        this.firstName = "Fornavn";
        this.lastName = "Efternavn";
        this.emailAdd = "Mail";
        this.language = "da";
    } else if (language == "fi") {
        this.firstName = "Etunimi";
        this.lastName = "Sukunimi";
        this.emailAdd = "Sähköposti";
        this.language = "fi";
    } else if (language == "it") {
        this.firstName = "Nome";
        this.lastName = "Cognome";
        this.emailAdd = "Email";
        this.language = "it";
    } else if (language == "no") {
        this.firstName = "Fornavn";
        this.lastName = "Etternavn";
        this.emailAdd = "E-post";
        this.language = "no";
    } else if (language == "ru") {
        this.firstName = "Имя";
        this.lastName = "Фамилия";
        this.emailAdd = "Эл. почта";
        this.language = "ru";
    } else if (language == "sv") {
        this.firstName = "Förnamn";
        this.lastName = "Efternamn";
        this.emailAdd = "E-post";
        this.language = "sv";
    } else if (language == "th") {
        this.firstName = "ชื่อจริง";
        this.lastName = "นามสกุล";
        this.emailAdd = "อีเมล";
        this.language = "th";
    } else if (language == "pl") {
        this.firstName = "Imię";
        this.lastName = "Nazwisko";
        this.emailAdd = "E-mail";
        this.language = "pl";
    } else if (language == "sk") {
        this.firstName = "Meno";
        this.lastName = "Priezvisko";
        this.emailAdd = "E-mail";
        this.language = "sk";
    } else {
        this.firstName = "First Name";
        this.lastName = "Last Name";
        this.emailAdd = "Email Address";
        this.language = "en";
    }
    console.log("Language = " + this.language);
    return this;
}

var closestByTagName = function (el, closedElement) {
    try {
        var elParent = el;
        if (elParent) {
            var tagedVal = elParent.tagName;
            if (tagedVal)
                while (tagedVal.toLowerCase() != closedElement) {
                    elParent = elParent.parentNode;
                    if (elParent)
                        tagedVal = elParent.tagName;
                    if (!tagedVal) {
                        return el;
                    }
                }
        }

        return elParent;

    } catch (e) {
        console.log(e);
    }
}
function snapInClickListners() {
    window.addEventListener("click", function (event) {
        try {//FY21-0702 DEFECT 9007902: Adding additional checks
            if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton")) {
                var clickedElement = event.target || event.srcElement;
                //FY21-0702: Prop value Fix [Start]
                if (clickedElement && clickedElement.tagName.toLowerCase() === 'embeddedservice-chat-header' && (closestByTagName(event.toElement, 'svg') || closestByTagName(event.toElement, 'button'))) {//FY21-0702 DEFECT 9007902: Adding additional checks
                    if (closestByTagName(event.toElement, 'svg').dataset.key === 'minimize_window' || closestByTagName(event.toElement, 'button').className === 'minimizeButton'){
                        if(isWarrantyPartsReturnChat(snapInObject)) //FY21-1201: STORY 9602355
                            callDellmetricsTrack("800.300.256", "SNAPIN-WarrantyReturn: Minimize");
                        else
                            callDellmetricsTrack("890.220.007", "SNAPIN: Minimize");
                    }
                    else if (closestByTagName(event.toElement, 'svg').dataset.key === 'close' || closestByTagName(event.toElement, 'button').className === 'closeButton') {
                        if(isWarrantyPartsReturnChat(snapInObject)) //FY21-1201: STORY 9602355
                            callDellmetricsTrack("800.300.257", "SNAPIN-WarrantyReturn: Close (x)");
                        else
                            callDellmetricsTrack("890.220.006", "SNAPIN: Close (x)");
                        if (!document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer"))//Fix for on click of (x) button from End Chat confirmation Page: FYI we have created a SFDC case 23872982 
                            snapinChatInitiatedState(false);
                    }
                } else if (clickedElement && clickedElement.tagName.toLowerCase() === 'embeddedservice-chat-input-footer-menu' && (closestByTagName(event.toElement, 'svg') || closestByTagName(event.toElement, 'button'))) {//FY21-0702 DEFECT 9007902: Adding additional checks
                    if (closestByTagName(event.toElement, 'svg').dataset.key === 'rows' || closestByTagName(event.toElement, 'button').className === 'slds-button slds-button_icon slds-button_icon-container-more slds-button_icon-large')
                        callDellmetricsTrack("890.220.015", "SNAPIN: Hamburger Menu");
                    else {
                        var snapInfooterMenuElm = closestByTagName(event.toElement, 'a');
                        if (snapInfooterMenuElm != undefined && snapInfooterMenuElm != null && snapInfooterMenuElm.innerText)
                            callDellmetricsTrack("890.220.003", "SNAPIN: '" + snapInfooterMenuElm.innerText + "' Button Clicked");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                    }
                } else
                    //FY21-0702: Prop value Fix [END]
                    if (closestByTagName(clickedElement, 'button') != null && closestByTagName(clickedElement, 'button') != undefined) {
                        switch (closestByTagName(clickedElement, 'button').className) {
                            case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                            case "endChatButton postChatButton uiButton--default uiButton embeddedServiceSidebarButton": //FY21-0702: Prop value Fix
                            case "endChatButton saveTranscriptButton uiButton--inverse uiButton embeddedServiceSidebarButton": //FY21-0702: Prop value Fix 
                                callDellmetricsTrack("890.220.003", "SNAPIN: '" + clickedElement.innerText + "' Button Clicked");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                                break;
                            case "dialogButton dialog-button-1 uiButton embeddedServiceSidebarButton":
                                callDellmetricsTrack("890.220.004", "SNAPIN: '" + clickedElement.innerText + "' Button Clicked");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                                break;
                            case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                                callDellmetricsTrack("890.220.004", "SNAPIN: '" + clickedElement.innerText + "' Button Clicked");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                                break;
                            case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                                callDellmetricsTrack("890.220.005", "SNAPIN: Cancel Chat");
                                break;
                            case "closeButton": //FY21-0702: DomElement position change
                                if(isWarrantyPartsReturnChat(snapInObject)) //FY21-1201: STORY 9602355
                                    callDellmetricsTrack("800.300.257", "SNAPIN-WarrantyReturn: Close (x)");
                                else
                                    callDellmetricsTrack("890.220.006", "SNAPIN: Close (x)");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                                break;
                            case "minimizeButton": //FY21-0702: DomElement position change
                                if(isWarrantyPartsReturnChat(snapInObject)) //FY21-1201: STORY 9602355
                                    callDellmetricsTrack("800.300.256", "SNAPIN-WarrantyReturn: Minimize");
                                else
                                    callDellmetricsTrack("890.220.007", "SNAPIN: Minimize");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                                break;
                            case "sidebarHeader minimizedContainer helpButton embeddedServiceSidebarMinimizedDefaultUI":
                                callDellmetricsTrack("890.220.008", "SNAPIN: Maximize");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                                break;
                            case "sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI":
                                callDellmetricsTrack("890.220.008", "SNAPIN: Maximize");//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                                break;
                            /* FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn [START]
                            case "uiButton helpButtonEnabled":
                            case "uiButton no-hover helpButtonEnabled":
                                if (document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").innerText == "Chat Now") {
                                    snapInCurrentPage = null;
                                    if (document.getElementById("cusPreChatSnapinDom") && document.getElementById("cusPreChatSnapinDom").display === "none") //FY20-1101 STORY 7128491
                                        callDellmetricsTrack("890.220.001", "StartsChat for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
        
                                } else if (document.getElementById("cusPreChatSnapinDom") && document.getElementById("cusPreChatSnapinDom").display === "none") //FY20-1101 STORY 7128491
                                    callDellmetricsTrack("890.220.001", "AgentOffline for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
                                break;
                            FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn [END] */
                            default:
                                //FY21-0702- omnichar value
                                /*if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
                                    //callDellmetricsTrack("880.130.857", "ClickedOn " + closestByTagName(clickedElement, 'a').text); //FY21-0502: Unwanted Prop values for CareBot
                                    callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text); //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                                }*/

                                break;
                        }
                    } /*else if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {//FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn [START]
                //callDellmetricsTrack("880.130.857", "ClickedOn " + closestByTagName(clickedElement, 'a').text); //FY21-0502: Unwanted Prop values for CareBot
                callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text); 
            }*///FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn [END]
            }
        } catch (e) {
            this.console.log("Error in function", e);
        }
    });
}


function callDellmetricsTrack(propValue, message) {
    if (showsAgentOflineMsg(propValue, message)) {
        document.querySelector(".dialog-button-0.embeddedServiceSidebarButton").style.display = 'none';
    }
    if (typeof (dellmetricsTrack) == "function") {
        if (dellmetricsTrack) {
            if (trackevent) {
                if (message) {
                    message = append_snapinChatUuid(message);//FY21-0602:[Sprinklr Chat Bot] Reporting Story:  Append UUID for reporting
                    dellmetricsTrack(propValue, message);
                } else
                    dellmetricsTrack(propValue);
            } else {
                trackevent = true;
            }

        }
    }
}

function showsAgentOflineMsg(propValue, message) {
    if (propValue == "890.220.016" &&
        (
            //FY:21-0202 Fix for language related issues[START]
            /* message.includes("申し訳ありません。チャットすることができません。 しばらくしてからもう一度お試しください。") ||
            message.includes("죄송합니다. 현재 귀하와 채팅할 수 없습니다. 나중에 다시 시도해주십시오.") ||
            message.includes("Lo sentimos, no se puede abrir una sesión de chat. Vuelva más tarde o inténtelo de nuevo.") ||
            message.includes("抱歉，我们无法和您聊天。 请稍后回来或重试。") ||
            message.includes("Lamentamos não poder conversar com você. Volte mais tarde ou tente novamente.") ||
            message.includes("Es tut uns Leid, aber momentan können wir nicht mit Ihnen chatten. Versuchen Sie es später noch einmal.") ||
            message.includes("Sorry that we are not able to chat with you. Come back later or try again.")*/
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
            //FY:21-0202 Fix for language related issues[END]
        )
    ) {
        return true;
    } else {
        return false;
    }
}

function pageObserverForProp20(eleSelector, preChatlableObject) {
    try {
        snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
        snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
        snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer");//Fix for defect 7030965
        snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
        snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
        snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
        if (snapInPrechatForm)
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
            removeLoaderIn10();
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
                    snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer");//Fix for defect 7030965
                    snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
                    snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
                    snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
                    snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton");
                    if (snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm") {
                        snapInCurrentPage = "snapInPrechatForm";
                        //DEFECT 6915122[START]
                        document.querySelector(".modalContainer.embeddedServiceSidebar").style.display = "none";
                        snapinChatInitiatedState(false);
                        //DEFECT 6915122[END]
                    } else if (snapInWaiting && snapInCurrentPage != "snapInWaiting") {
                        snapInCurrentPage = "snapInWaiting";
                        callDellmetricsTrack("890.220.011", "SNAPIN: You are up next Window load"); //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                        snapinQueueLoaded();
                        hideResumeSnapinLoader();
                        snapinChatInitiatedState(false);
                        eleExistWithVariable('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber', waitChatCounter); //FY21-0702 dom element changes
                    } else if (snapInChatStarted && snapInCurrentPage != "snapInChatStarted") {
                        snapInCurrentPage = "snapInChatStarted";
                        snapinQueueLoaded();
                        //callDellmetricsTrack("890.220.013", "SNAPIN: Chat Started 1"); //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
                        hideResumeSnapinLoader();
                        snapinChatInitiatedState(true);
                        if(preChatlableObject) //FY22-0203: Unit Test Changes
                            addChatPrivacyInfo(preChatlableObject);//FY20-0202 - preChatlableObject pulled from top

                    } else if (snapInChatEnded && snapInCurrentPage != "snapInChatEnded") {//Fix for defect 7030965
                        snapInCurrentPage = "snapInChatEnded";
                        snapinQueueLoaded();
                        hideResumeSnapinLoader();
                        snapinChatInitiatedState(false);
                        callDellmetricsTrack("890.220.009", "SNAPIN: Chat Ended"); //FY21-702: Omnichar changes
                    } else if (snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug") {
                        snapInCurrentPage = "snapInConfirmationDialoug";
                        snapinQueueLoaded();
                        callDellmetricsTrack("890.220.016", document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer").innerText);
                        //Fix for on click of (x) button from End Chat confirmation Page: FYI we have created a SFDC case 23872982 [START] //FY21-0702: DomElement position change so the code is moved to different location
                        /*var closeBtn = document.querySelector(".modalContainer .dockableContainer .embeddedServiceSidebarHeader .closeButton"); 
                        if (closeBtn && !snapInConfirmationDialoug)
                            closeBtn.addEventListener("click", function () {
                                    snapinChatInitiatedState(false);
                            });
                        */
                        //Fix for on click of (x) button from End Chat confirmation Page: FYI we have created a SFDC case 23872982 [END] 

                        hideResumeSnapinLoader();
                    } else if (snapInEmbeddedServiceHelpBtn && window.getComputedStyle(snapInEmbeddedServiceHelpBtn).display === 'block') {

                        if (snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnDisabled") {
                            snapInCurrentPage = "snapInhelpBtnDisabled";
                            //togglePrechatAndSnapin(snapInCurrentPage);
                            snapInhelpBtnDisabled.style.display = "none";
                            removeLoaderIn10();
                        } else if (snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnEnabled") {
                            if (snapInCurrentPage === "snapInhelpBtnDisabled" && document.getElementById("cusCAREPreChatSnapinDom")) //FY21-0702 Unit Testing Additional check
                                document.getElementById("cusPreChatSnapinDom").style.display = "block";
                            snapInCurrentPage = "snapInhelpBtnEnabled";
                            //togglePrechatAndSnapin(snapInCurrentPage);
                            snapInhelpBtnEnabled.style.display = "none";
                        } else {
                            console.log("Snap-In: Not Loaded"); //FY21-0502: STORY 8443194: Prop value Fix for Tech SnapIn
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
//FY20-0202 [START]
function addChatPrivacyInfo(preChatlableObject) {
    setTimeout(function () {
        var snapinChatPopUpMsgDom = document.getElementById("snapinChatPopUpMsg");
        var snapinChasnapinCHatEnded = document.querySelector(".dockableContainer .chatMessage.ended");
        if (!snapinChatPopUpMsgDom) {
            var snapinPopInputMsg;
            if (preChatlableObject && "chatPrivacyInfo" in preChatlableObject && preChatlableObject.chatPrivacyInfo) //FY21-1003: Defect 9475200: Sensitive Information Banner Showing only in English 
                snapinPopInputMsg = preChatlableObject.chatPrivacyInfo; //FY21-1003: Defect 9475200: Sensitive Information Banner Showing only in English 
            else
                snapinPopInputMsg = "Please do not share any payment or sensitive information in this chat window.";
            var newItem = document.createElement("DIV");
            newItem.id = 'snapinChatPopUpMsg';
            var embeddedSLAChatInput = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateChatInputFooter");
            //embeddedSLAChatInput.insertBefore(newItem, embeddedSLAChatInput.childNodes[0]);
            if (embeddedSLAChatInput)//FY21-0502 Unit testing issue
                embeddedSLAChatInput.parentNode.insertBefore(newItem, embeddedSLAChatInput);
            innerVal = '<span style="float: left;margin: 11px;fill:#0A6EBE;"><svg x="0px" y="0px" width="20px" height="20px" viewBox="0 0 416.979 416.979" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765   c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/></g></svg></span><span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon" id="btnCloseSnapinPopMsg" style="float:right;padding:5px;cursor:pointer;"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 120 120" style="fill:#333"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"></path></svg></span><p style="text-align:left;padding:7px;margin:0;font-size:13px;background:#DFF1FE;border-top:1px solid #0A6EBE;border-bottom:1px solid #0A6EBE;color:#333;">' + snapinPopInputMsg + '</p>';
            if (document.getElementById("snapinChatPopUpMsg"))//FY21-0502 Unit testing.
                document.getElementById("snapinChatPopUpMsg").innerHTML = innerVal;

            var btnCloseSnapinPopMsg = document.getElementById("btnCloseSnapinPopMsg");
            if (btnCloseSnapinPopMsg) {//FY21-0702: DomElement position change
                btnCloseSnapinPopMsg.addEventListener("click", function () {
                    document.getElementById("snapinChatPopUpMsg").style.display = "none";
                });
            }
        } else if (snapinChasnapinCHatEnded) {
            snapinChatPopUpMsgDom.style.display = "none";
        }
    }, 50);
}
//FY20-0202 [END]
//FY21-0702 : Wait time changes [START]
function waitChatCounter(eleSelector, findingEle, counterValue) {
    try {
        var currentcountVal = document.querySelector(eleSelector).innerText;
        if (counterValue != currentcountVal) {
            callDellmetricsTrack("890.220.012", "SNAPIN: Queue number " + currentcountVal);
            clearInterval(findingEle);
            if (currentcountVal > 0 && currentcountVal != "" && currentcountVal != null && currentcountVal != undefined && currentcountVal != ' ') {
                eleExistWithVariable('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber', waitChatCounter, document.querySelector('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber').innerText);
            }
        }
    } catch (e) {
        clearInterval(findingEle);
        console.log("Error in:" + e);
    }
}
//FY21-0702 : Wait time changes [END]

function eleExistWithVariable(eleSelector, callbackFunc, value) {
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
function snapinPrechatLoaded(eleSelector, findingEle) {
    try {
        if (document.getElementById("loadingSnapinMsg"))
            removeDomElement(document.getElementById("loadingSnapinMsg"));
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}

function removeDomElement(DomElement) {
    DomElement.parentNode.removeChild(DomElement);
}

//FY22-0302: STORY 10004602: Remove Liveagent code from JS file [START]
/*
function initLiveAgent(liveAgentObject) {
    try {
        $.getScript(liveAgentObject.deploymentUrl, function () {
            liveagent.enableLogging();
            liveagent.init(liveAgentObject.liveAgentInitUrl, liveAgentObject.deploymentId, liveAgentObject.organizationId);
            if (!window._laq) {
                window._laq = [];
            }
            window._laq.push(function () {
                liveagent.showWhenOnline(liveAgentObject.buttonId, document.getElementById('liveagent_button_online_' + liveAgentObject.buttonId));
                liveagent.showWhenOffline(liveAgentObject.buttonId, document.getElementById('liveagent_button_offline_' + liveAgentObject.buttonId));
                if ("serviceTag" in liveAgentObject)
                    liveagent.addCustomDetail('serviceTag', liveAgentObject.serviceTag);
            });
        });
    } catch (e) {
        console.log('error:' + e);
    }
}
function initLiveAgentWithoutPrechatForm(liveAgentObject, callbackOnline, callbackOffline) {
    try {
        delete window.liveagent;
        delete window.liveAgentDeployment;
        $.getScript(liveAgentObject.deploymentUrl, function () {
            callDellmetricsTrack("890.220.078");
            liveagent.enableLogging();
            liveagent.init(liveAgentObject.liveAgentInitUrl, liveAgentObject.deploymentId, liveAgentObject.organizationId);
            if (!window._laq) {
                window._laq = [];
            }
            window._laq.push(function () {
                liveagent.showWhenOnline(liveAgentObject.buttonId, document.getElementById('liveagent_button_online_' + liveAgentObject.buttonId));
                liveagent.showWhenOffline(liveAgentObject.buttonId, document.getElementById('liveagent_button_offline_' + liveAgentObject.buttonId));
                if ("serviceTag" in liveAgentObject)
                    liveagent.addCustomDetail('serviceTag', liveAgentObject.serviceTag).saveToTranscript('Service_Tag__c');
                liveagent.addCustomDetail("Chat Source", "Tech").saveToTranscript('Chat_Source__c');//FY21-0202 Defect ID - Defect 8080327
                liveagent.addCustomDetail("First Name", liveAgentObject.firstName).saveToTranscript('FirstName__c');
                liveagent.addCustomDetail("Last Name", liveAgentObject.lastName).saveToTranscript('LastName__c');
                liveagent.addCustomDetail("Phone Number", liveAgentObject.phoneNumber).saveToTranscript('ContactNumber__c');
                liveagent.addCustomDetail("Email ID", liveAgentObject.emailId).saveToTranscript('Email__c');
                liveagent.addCustomDetail("Issue Type", liveAgentObject.issueType).saveToTranscript('Issue__c');
                liveagent.addCustomDetail("Issue Description", liveAgentObject.issueDescription).saveToTranscript('Description__c');
                liveagent.findOrCreate("Asset").map("Asset__c", liveAgentObject.serviceTag, true, false, false).showOnCreate();
                liveagent.setName(liveAgentObject.firstName + ' ' + liveAgentObject.lastName);
            });
            checkifLiveAgentButtonIsOnline(liveagent, liveAgentObject, callbackOnline, callbackOffline);
        });
    } catch (e) {
        console.log('error:' + e);
    }
}
function checkifLiveAgentButtonIsOnline(liveagent, liveAgentObject, callbackOnline, callbackOffline) {
    liveagent.addButtonEventHandler(liveAgentObject.buttonId, function (e) {
        if (e == liveagent.BUTTON_EVENT.BUTTON_AVAILABLE) {
            callbackOnline();
            return;
        } else if (e == liveagent.BUTTON_EVENT.BUTTON_UNAVAILABLE) {
            callbackOffline();
            return;
        }
    });
}
function initResumeLiveAgent(liveAgentObject) {
    if (!window._laq) {
        window._laq = [];
    }
    window._laq.push(function () {
        liveagent.showWhenOnline(liveAgentObject.buttonId, document.getElementById('liveagent_button_online_' + liveAgentObject.buttonId));
        liveagent.showWhenOffline(liveAgentObject.buttonId, document.getElementById('liveagent_button_offline_' + liveAgentObject.buttonId));
    });
    liveagent.addCustomDetail('deltaSr', liveAgentObject.srNumber).saveToTranscript('Delta_Sr__c');
    liveagent.findOrCreate("Case").map("Delta_SR__c", "deltaSr", true, false, true).showOnCreate();
    liveagent.init(liveAgentObject.liveAgentInitUrl, liveAgentObject.deploymentId, liveAgentObject.organizationId);
    liveagent.setName(liveAgentObject.firstName + ' ' + liveAgentObject.lastName);
}
function startLiveAgentChat(buttonId) {
    callDellmetricsTrack("890.220.077");
    liveagent.startChat(buttonId);
}
*/
//FY22-0302: STORY 10004602: Remove Liveagent code from JS file [END]

function eleExist(eleSelector, callbackFunc) {
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

//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [START]
function isHesAdminChat(snapInObject){
    // if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct && (!("epdmId" in snapInObject) || !snapInObject.epdmId) && "siteId" in snapInObject && snapInObject.siteId)
    //     return true; 
    // else
    //     return false; 
    if (("requestType" in snapInObject && snapInObject.requestType == "HES Admin Chat") && !("isTechChat" in snapInObject && snapInObject.isTechChat)) //FY21-1003: Defect #9532096 Admin prechat form is displaying for Licensing non install issue
        return true; 
    else
        return false; 
}

function createHesAdminChat(preChatlableObject, snapInObject){ //FY21-1003 Defect: 9547663 TextOverflow for static content.

    if("hesCustomNotice" in preChatlableObject && preChatlableObject.hesCustomNotice)
        hesCustomNoticeDom = '<li id ="cusPreChat-inputHesCustomNotice" class="cusPreChat-inputHesCustomNotice cusPreChat-embeddedServiceSidebarFormField" style="margin: 16px 0px 0px 16px;color: #000;font-size: 14px;"><div style="font-size: 14px;color:#767676;text-align: left;color: #000;font-family: inherit;">' +preChatlableObject.hesCustomNotice+ '</div></li>';
    else
		hesCustomNoticeDom = '';
	
	if(!("alternateEmail" in preChatlableObject) || !preChatlableObject.alternateEmail)
		preChatlableObject.alternateEmail ="Alternate Email";
	
	if(!("browserVersion" in preChatlableObject) || !preChatlableObject.browserVersion)
		preChatlableObject.browserVersion ="Browser version having the issue";
		
	if(!("browserVersionExample" in preChatlableObject) || !preChatlableObject.browserVersionExample)
		preChatlableObject.browserVersionExample ="Example: Firefox X.X";

	if(!("urlTriedToReach" in preChatlableObject) || !preChatlableObject.urlTriedToReach)
		preChatlableObject.urlTriedToReach ="URL you are trying to reach";
    
     //FY21-1003 Defect: 9547663 TextOverflow for static content.[START]
    staticEleWithToolTipStyling();
    var staticEleWithToolTip = '<li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" style="font-size: 16px;color: #000 !important;font-family: inherit;margin-bottom: 0px;margin-top: 16px;"> <span class="">' + preChatlableObject.firstName + '</span></label> <div class="cusPreChat-tooltip"><input id="cusPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true" readonly="" style="border: none;background: none;padding: 0px;height: 23px;color: #666;box-shadow: none;"><span class="cusPreChat-tooltiptext">'+snapInObject.firstName+'</span></div></div></span></li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName" style=" font-size: 16px; color: #000 !important; font-family: inherit; margin-bottom: 0px; margin-top: 16px; "> <span class="">' + preChatlableObject.lastName + '</span> </label> <div class="cusPreChat-tooltip"><input id="cusPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true" readonly="" style=" border: none; background: none; padding: 0px; height: 23px; color: #666; box-shadow: none; "><span class="cusPreChat-tooltiptext">'+snapInObject.lastName+'</span></div></div></span></li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email" style=" font-size: 16px; color: #000 !important; font-family: inherit; margin-bottom: 0px; margin-top: 16px; "> <span>' + preChatlableObject.emailAddress + '</span></label> <div class="cusPreChat-tooltip"><input id="cusPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true" readonly="" style=" border: none; background: none; padding: 0px; height: 23px; color: #666; box-shadow: none; "><span class="cusPreChat-tooltiptext">'+snapInObject.email+'</span></div></div></li>';
    var prechatformDesign = '<div id="cusPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer"><div class="cusPreChat-embeddedServiceSidebarHeader"> <div class="cusPreChat-shortHeader"> <div class="cusPreChat-shortHeaderContent"> <button id="cusPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> </path> </svg> </span> </button> <h2 class="cusPreChat-headerText"> <div class="cusPreChat-headerTextContent"> <span id="cusPreChat-headerTextLabel">' + preChatlableObject.chatHeader + '</span> <span id="cusPreChat-headerSubtext"> </span></div></h2> <button id="cusPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button> </div></div></div><div class="cusPreChat-sidebarBody"> <div id="cusPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"> <div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"> <div style="margin: 2.5em 1.75em;">' + preChatlableObject.chatUnavailableMessage + '</div><div><button id="cusPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">'+preChatlableObject.closeChat+'</span></button></div></div><div id="cusPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"> <div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"> <div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"> <div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"> <div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"> <ul class="cusPreChat-fieldList" style="margin: 0;"> <div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="text-align: left;position: relative;font-size: .75em;color: #444444;background: white;padding: 10px 12px;"> <div style="font-size: 18px;">Site Info Place Holder</div><div style="font-size: 14px;font-family: inherit;"><b>' + preChatlableObject.issueType + ':</b> <span class="coveo-query" data-coveo-id="IssueDesc" id="preChatIssueDesc" style="font-size: 14px;font-family: inherit;">' + snapInObject.issueType + '</span></div></div><div style="margin-right: 12px;">' + hesCustomNoticeDom + staticEleWithToolTip + '<li class="cusPreChat-showAltEmailField cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputshowAltEmailField cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="cusPreChat-showAltEmailFieldBtn" class="cusPreChat-FormBtns cusPreChat-form-element__label cusPreChat-uiLabel" style=" font-weight: 500 !important; font-size: 14px; font-family: inherit; font-style: normal; margin-top: 21px; color: #006BBD; cursor: pointer; margin-bottom: 0px; "> <div style=" float: left; margin: 0px 8px 0px 0px; "> <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="cusPreChat-FormBtnchild"> <path d="M15.4508 7.35001C15.0508 4.05001 12.3508 1.35001 8.95076 0.850006C8.65076 0.850006 8.25076 0.75 7.95076 0.75C3.45076 0.75 -0.049236 4.65 0.550764 9.25C0.950764 12.55 3.65076 15.25 7.05076 15.75C7.35076 15.75 7.75076 15.85 8.05076 15.85C12.4508 15.85 16.0508 11.95 15.4508 7.35001ZM12.8508 12.65C11.6508 14.05 9.85076 14.85 7.95076 14.85C7.65076 14.85 7.35076 14.85 7.05076 14.75C4.15076 14.35 1.85076 12.05 1.45076 9.15C1.25076 7.25 1.75076 5.45 3.05076 4.05C4.25076 2.65 6.05076 1.85001 7.95076 1.85001C8.25076 1.85001 8.55076 1.85 8.85076 1.95C11.7508 2.35 14.0508 4.65 14.4508 7.55C14.7508 9.35 14.1508 11.15 12.8508 12.65Z"></path> <path d="M8.55076 4.05H7.45076V7.75H3.85076V8.85001H7.45076V12.55H8.55076V8.85001H12.2508V7.75H8.55076V4.05Z"></path> </svg> </div><div style=" float: left; margin-top: 1px; "><span class="cusPreChat-FormBtnchild">' + preChatlableObject.alternateEmail + '</span><span style=" margin-left: 5px; color: #767676; ">' + preChatlableObject.optional + '</span></div></label> </div></li><li class="cusPreChat-emptyAltEmail cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiEmptyAltEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" style=" font-weight: 500 !important; font-size: 14px; font-family: inherit; color: #111 !important; font-style: normal; margin-top: 16px; "> <span>' + preChatlableObject.alternateEmail + '</span> </label> <input id="cusPreChat-emptyAltEmail" class=" form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true" style=" float: left; border-radius: 3px; background: #FFFFFF; /* Graphite #7070 */ border: 1px solid #707070; /* font-size: 16px; */ /* height: 40px; */ width: calc(100% - 25px); "> <div id="cusPreChat-hideAltEmailFieldBtn" style=" float: right; margin-top: 7px; cursor: pointer; " class="cusPreChat-FormBtns"> <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> <path d="M12.5 7.30005H3.5V8.30005H12.5V7.30005Z"></path> <path d="M8 0.300049C3.9 0.300049 0.5 3.70005 0.5 7.80005C0.5 11.9 3.9 15.3 8 15.3C12.1 15.3 15.5 11.9 15.5 7.80005C15.5 3.70005 12.1 0.300049 8 0.300049ZM8 14.3C4.4 14.3 1.5 11.4 1.5 7.80005C1.5 4.20005 4.4 1.30005 8 1.30005C11.6 1.30005 14.5 4.20005 14.5 7.80005C14.5 11.3 11.6 14.3 8 14.3Z"></path> </svg> </div><span></span> </div></li><li class="cusPreChat-prefillAltEmail cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiprefillAltEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" style=" font-weight: 500 !important; font-size: 14px; font-family: inherit; color: #111 !important; font-style: normal; margin-top: 16px; "> <span>' + preChatlableObject.alternateEmail + '</span> </label> <input id="cusPreChat-prefillAltEmail" class="form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true" style="border-radius: 3px; background: #FFFFFF; border: 1px solid #707070;"><span></span></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c" style=" font-weight: 500 !important; font-size: 14px; font-family: inherit; color: #111 !important; font-style: normal; margin-top: 16px; "> <span>' + preChatlableObject.phoneNumber + '</span> </label> <input id="cusPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true" style=" border-radius: 3px; border: 1px solid #707070; "></div></li><li class="cusPreChat-inputBrowser cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputBrowser cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" style=" font-weight: 500 !important; font-size: 14px; font-family: inherit; color: #111 !important; font-style: normal; margin-top: 16px; "> <span>'+preChatlableObject.browserVersion+'</span> </label> <input id="cusPreChat-BrowserVer" class="form-control cusPreChat-input" maxlength="50" type="text" aria-describedby="" placeholder="" required="" aria-required="true" style=" margin-bottom: 0; border-radius: 3px; background: #FFFFFF; border: 1px solid #707070; "> <div id="cusPrechatBrowserEx" style="font-family: inherit;text-align:right;position:relative;font-size: 14px;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 3px;float: right;color:#767676;">'+preChatlableObject.browserVersionExample+'</div></div></li><li class="cusPreChat-inputURL cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputURL cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" style=" font-weight: 500 !important; font-size: 14px; font-family: inherit; color: #111 !important; font-style: normal; margin-top: 16px; "> <span>' + preChatlableObject.urlTriedToReach + '</span><span style=" margin-left: 5px; color: #767676; ">' + preChatlableObject.optional + '</span> </label> <input id="cusPreChat-URL" class="cusPreChat-URLtryingfor form-control cusPreChat-input" maxlength="255" type="text" aria-describedby="" placeholder="" required="" aria-required="true" style=" border-radius: 3px; background: #FFFFFF; border: 1px solid #707070; "></div></li><li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="Issue_Description_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c" style=" font-weight: 500 !important; font-size: 14px; font-family: inherit; color: #111 !important; font-style: normal; margin-top: 16px; "> <span>' + preChatlableObject.issueDescription + '</span> <span id="issueDescIsOptional" style="color: #767676;">' + preChatlableObject.optional + '</span></label> <textarea id="cusPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input coveo-query" maxlength="35000" type="text" aria-describedby="" placeholder="" required="" data-coveo-id="txtIssueDetails" style=" border-radius: 3px; background: #FFFFFF; border: 1px solid #707070; "></textarea> <div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-bottom: 8px;float: right;color:#767676;">0 / ' + preChatlableObject.issueDescriptionLength + ' ' + preChatlableObject.characters + '</div></div></li></div></ul> <div id="PrechatCoveo" style="display:none;"></div><div style="font-size: 12px;font-style: normal !important;color:#767676;text-align: left;margin: 40px 1.75em 25px 1.75em;font-style: italic;color:#444444;text-decoration: none;font-family: inherit;">'+preChatlableObject.customerPrivacyDesc+'</div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm" style=" padding: 12px 24px 12px 24px; background-color: #fff; "> <button id="cusPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button" style=" border-radius: 4px !important; "> <span class="cusPreChat-label cusPreChat-bBody">' + preChatlableObject.startChat + '</span> </button></div></div></div></div></div></div><div id="cusPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"> <div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)" > <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span> <div class="cusPreChat-helpButtonLabel" id="cusPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">' + preChatlableObject.chatHeader + '</span></div></button> </div></div>';
    //FY21-1003 Defect: 9547663 TextOverflow for static content.[END]
    return prechatformDesign;
}

function createHesAdminChatTopField(snapInObject, preChatlableObject){
	var siteInfoDom = '';
    if(("siteName" in snapInObject && snapInObject.siteName)){
        siteInfoDom = '<div style="font-size: 18px;">'+snapInObject.siteId+' : '+snapInObject.siteName+'</div>';
    }else{
        siteInfoDom = '<div style="font-size: 18px;">'+snapInObject.siteId+'</div>';
    }

	var hesAdminChatTopFieldDom = '<div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="text-align: left;position: relative;font-size: .75em;color: #444444;background: white;padding: 10px 12px;">'+siteInfoDom+'<div style="font-size: 14px;font-family: inherit;"><b>' + preChatlableObject.issueType + ':</b> <span id="preChatIssueType_static" style="font-size: 14px;font-family: inherit;">' + snapInObject.issueVal + '</span></div></div>';
    return hesAdminChatTopFieldDom;
}

function hesAdminAltEmailInterationDesign(snapInObject){
    try{
        if ("alternateEmail" in snapInObject && snapInObject.alternateEmail){
            document.getElementById("cusPreChat-prefillAltEmail").value = snapInObject.alternateEmail;
            document.querySelector(".cusPreChat-uiprefillAltEmail").style.display = "block";
            document.querySelector(".cusPreChat-showAltEmailField").style.display = "none";
            document.querySelector(".cusPreChat-emptyAltEmail").style.display = "none";
        }else{
            document.getElementById("cusPreChat-emptyAltEmail").value = snapInObject.alternateEmail;
            document.querySelector(".cusPreChat-uiprefillAltEmail").style.display = "none";
            document.querySelector(".cusPreChat-showAltEmailField").style.display = "block";
            document.querySelector(".cusPreChat-emptyAltEmail").style.display = "none";

            document.getElementById("cusPreChat-showAltEmailFieldBtn").addEventListener("click", function () { 
                document.querySelector(".cusPreChat-showAltEmailField").style.display = "none";
                document.querySelector(".cusPreChat-emptyAltEmail").style.display = "block";
            });
            
            document.getElementById("cusPreChat-hideAltEmailFieldBtn").addEventListener("click", function () { 
                document.querySelector(".cusPreChat-showAltEmailField").style.display = "block";
                document.querySelector(".cusPreChat-emptyAltEmail").style.display = "none"; 
                //document.getElementById("cusPreChat-emptyAltEmail").value = null; //FY21-1003: DEFECT 9618679: Values should be retained even after collapsing the alternate email.
				if (document.getElementById("ErrMsg_cusPreChat-emptyAltEmail"))
					removeDomElementbyId("ErrMsg_cusPreChat-emptyAltEmail");
            });
        }
    }catch(e){
        console.log("Error On: "+e);
    }
}
//FY21-1003 Defect: 9547663 TextOverflow for static content.[START]
function staticEleWithToolTipStyling(){
    if (!document.getElementById('snapinToolTipCSS')) {//FY21-0702: DEFECT 8910461 CSS fix: added new CSS
        var css = '.cusPreChat-tooltip{position: relative; display: inline-block; width:100%}.cusPreChat-tooltip .cusPreChat-input{text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}.cusPreChat-tooltiptext{visibility:hidden; background-color: #f1f1f1; color: #666; border:none; text-align: center; padding: 0px; margin:0px; top:0px; left:0px; width:100%; text-align:left; word-wrap: break-word; position: absolute; z-index: 1;}.cusPreChat-tooltip:hover .cusPreChat-tooltiptext{visibility: visible;}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'snapinToolTipCSS';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }
}
//FY21-1003 Defect: 9547663 TextOverflow for static content.[END]

//FY21-1003 Story #9078562: HES Admin Chat Prechat form changes [END]

//FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form [START]	
function isWarrantyPartsReturnChat(snapInObject){ //Check if it is a Warranty Parts Return 
    if ("requestType" in snapInObject && snapInObject.requestType == "warrantyReturn")
        return true; 
    else
        return false; 
}
function checkIfPrimPhoneNumIsOptional(snapInObject, preChatlableObject) { //Check if Primery phone is invalid
    //Change in business requirement Story Phone number will always be mandatory
    /*if (isWarrantyPartsReturnChat(snapInObject) && document.getElementById("Primary_Phone_Cust_Label")) {
        removeDomElementbyId("ErrMsg_cusPreChat-Phone");
    } else {*/
        removeDomElementbyId("primPhoneIsOptional");
    //}
}

function cusPreChatInvalidDispatchNum(domElement, preChatlableObject) { //Check if Dispatch Number is Invalid
    if (!cusPreChatValidateNumeric(domElement.value) || !cusPreChatTextCharLimit(15,8,domElement.value)) {
        cusPreChatErrorMsgPlaceholder(domElement, preChatlableObject.dispatchNumberValidation);
        return false;
    }else
        return true;  
}

function cusPreChatValidateNumeric(val){ //Numeric values only check
	var letterNumber = /^[0-9]+$/;
	 if(val.match(letterNumber)) 
		return true;
	else
		return false;
}

function cusPreChatTextCharLimit(maxCharLim,minCharLim,val){//Charector limit Check
	if (val.length <= maxCharLim && val.length >= minCharLim)
		return true;
	else
		return false;
}
//FY21-1201 Story #9315449: Warranty Parts Return : Pre-Chat Form [END]

//FY22-0203: Sprinklr Chatbot : Retain Chat Context [START]
function isResumeSprinklr() {
    var sprinklrChatBotObjectString = sessionStorage.getItem("sprinklrChatBotObject");
    var sprinklrChatBotObject = JSON.parse(sprinklrChatBotObjectString);
    if (sprinklrChatBotObject && "userAuthToken" in sprinklrChatBotObject && sprinklrChatBotObject.userAuthToken && "sprinklrContextId" in sprinklrChatBotObject && sprinklrChatBotObject.sprinklrContextId)
        return true;
    else
        return false;
}
function isRebootSprinklr(snapInObject) {
    try{
    var sprinklrChatBotObjectString = sessionStorage.getItem("sprinklrChatBotObject");
    var sprinklrChatBotObject = JSON.parse(sprinklrChatBotObjectString);
    if ((!sprinklrChatBotObject || isResumeSprinklr()) && snapInObject && "applicationContext" in snapInObject && snapInObject.applicationContext === "SprinklrTechBot-ResumeChat"){
        var sprinklrChatBotObject = {
            payloadTags:{
                productName: snapInObject.productName ? snapInObject.productName: "",
                lng: snapInObject.language ? snapInObject.language: "",
                productCode: snapInObject.productCode ? snapInObject.productCode: "",
                issueType: snapInObject.issueType ? snapInObject.issueType: "",
                issueVal: snapInObject.issueVal ? snapInObject.issueVal: "",
                serviceTag: snapInObject.serviceTag ? snapInObject.serviceTag: ""
            },
            requestId: snapInObject.sprinklrRequestId ? snapInObject.sprinklrRequestId: "",
            text: snapInObject.issueDescription ? snapInObject.issueDescription: "",
            userAgent : navigator.userAgent,
            engine:'dellintent',
            sprinklrURL: snapInObject.sprinklrURL ? snapInObject.sprinklrURL: "",
            user_firstName:snapInObject.firstName ? snapInObject.firstName: "",
            user_lastName:snapInObject.lastName ? snapInObject.lastName: "",
            user_email:snapInObject.email ? snapInObject.email: "",
            user_phoneNo:snapInObject.phone ? snapInObject.phone: "",
            userAuthToken: snapInObject.sprinklrUserAuthToken ? snapInObject.sprinklrUserAuthToken: "",
            sprinklrContextId: snapInObject.sprinklrContextId ? snapInObject.sprinklrContextId: "",
            sprinklrLoadingMessage: snapInObject.sprinklrLoadingMessage ? snapInObject.sprinklrLoadingMessage: "",
            applicationContext: snapInObject.applicationContext ? snapInObject.applicationContext: ""
        };
        sessionStorage.setItem("sprinklrChatBotObject", JSON.stringify(sprinklrChatBotObject));
        return true;
    }
    else
        return false;
    }catch(e){
        console.log("Error in isRebootSprinklr function: ",e);
        return false;
    }
}

function resumeSprinklrTechChat(snapInObject){
    initSnapIn(snapInObject);//init Snapin
    eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);//Click on Start chat
    eleExist('.embeddedServiceHelpButton', hideDomObject);//hide original buttons
    eleExistWithVariable('.modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI', hideOtherDomObject, '.embeddedServiceSidebar');//hide original UI
    var loaderDomElement = '<div id="cusPreChatSnapinDom" class="cusPreChat-modalContainer" style="display: none;"> <div class="cusPreChat-dockableContainer"> <div class="cusPreChat-embeddedServiceSidebarHeader"> <div class="cusPreChat-shortHeader"> <div class="cusPreChat-shortHeaderContent">  <h2 class="cusPreChat-headerText"> <div class="cusPreChat-headerTextContent"> <span id="cusPreChat-headerTextLabel">Chat Now</span> <span id="cusPreChat-headerSubtext"> </span></div></h2>  </div></div></div><div class="cusPreChat-sidebarBody"> <div id="cusPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator"> <div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">Sorry Currently Chat is not Avilable</div><div><button id="cusPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat</span></button></div></div></div></div></div>';
    var body = document.body || document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('beforeend', loaderDomElement);
    pageObserverForProp20("body");
    startSprinklr();
}
//FY22-0203: Defect 10071964 [START]
function addPrefillDetailsForAgentTransfer(snapInObject) {
    snapInObject.c_firstName = snapInObject.firstName;
    snapInObject.c_lastName = snapInObject.lastName;
    snapInObject.c_email = snapInObject.email;
    snapInObject.c_phoneNo = snapInObject.phone;
    snapInObject.c_serviceTag = snapInObject.serviceTag;
	snapInObject.c_issueDescription = snapInObject.issueDescription;
	saveGlobalSnapinObjToSession(snapInObject);
}
//FY22-0203: Defect 10071964 [END]
//FY22-0203: Sprinklr Chatbot : Retain Chat Context [END]

/////////////////////////////ChatBot Code///////////////////////////////////
//0202 changes start
function isTechOrCare(chatBotObject) {
    //if (chatBotObject.applicationContext === "ChatBot-CareBot") {
    if (chatBotObject.applicationContext === "ChatBot-CareBot" || chatBotObject.applicationContext === "ChatBot-CareEnglish") {//FY21-0803 US Care bot
        return "CARE";
    } else
        return "Tech";
}//0202 changes end


function triggerChatBot(chatBotObject) {
    //Console.log(chatBotObject);
    onChatBotServiceTagChange();
    // Story 6535377 : Resume chat starts
    if ("applicationContext" in chatBotObject && chatBotObject.applicationContext === "ChatBot-ResumeChat") {
        //Need a loader and remove loader once the chatbot windo is visible.
        chatBotObject.c_firstName = chatBotObject.First_Name,
            chatBotObject.c_lastName = chatBotObject.Last_Name,
            chatBotObject.c_email = chatBotObject.Email,
            chatBotObject.c_phoneNo = chatBotObject.Phone,
            chatBotObject.c_serviceTag = chatBotObject.Service_Tag;
            chatBotObject.buid = chatBotObject.buid;
        chatBotObject.c_CARE_Chat_Order_Number = chatBotObject.CARE_Chat_Order_Number;
        saveGlobalSnapinBotObjToSession(chatBotObject);
        eleExistWithVariable('.embeddedServiceSidebar .startButton', ChatBotStarted, chatBotObject);
    } else {
        //Story 6535377 : Resume chat Ends 
        //If user clicks on Start chat
        chatBotObject.StepName_Manual_Bot = 'Details';
        openBotPrechatform(chatBotObject);
    }
    //Post eSupport's prechat form initiate chat in the background
    initiateChatBot(chatBotObject);
    HideLoadingImage();
}
function clickStartChatBot(eleSelector, findingEle) {
    document.querySelector(eleSelector).click();
    clearInterval(findingEle);
}
function initiateChatBot(chatBotObject) {
    if (chatBotObject == undefined && sessionStorage.getItem("chatBotObjectSession") != null) {
        chatBotObject = JSON.parse(sessionStorage.getItem("chatBotObjectSession"));
    } else {
        sessionStorage.setItem("chatBotObjectSession", JSON.stringify(chatBotObject));
        eleExist(".embeddedServiceHelpButton .helpButton .helpButtonEnabled", clickStartChatBot);
    }
    OmniChatBotTrackerListner();
    AddElementToPage();
    var initESW = function (gslbBaseURL) {
        //FIX for CSS related issue in Chat bot[START]
        if (!document.getElementById('chatBotStyle')) {
            //FY21-0602: Unit testing fix for Glitch issue. //FY21-0803: Defect #9075724 [START]
            var css = null
            if(isTechOrCare(chatBotObject) === 'CARE'){
                css = '.embeddedServiceLiveAgentStateChatHeader .message,.embeddedServiceLiveAgentStateChatHeaderOption .optionName,.embeddedServiceSidebarFormField .uiInput .uiLabel-left{font-size:.75em!important}.embeddedServiceLiveAgentStateChatPlaintextMessageDefaultUI.plaintextContent,.embeddedServiceSidebarDialogState #dialogTextBody,.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select,.embeddedServiceSidebarHeader .shortHeader,.embeddedServiceSidebarMinimizedDefaultUI .minimizedText{font-size:.875em!important}.embeddedServiceSidebar .headerItem,.embeddedServiceSidebarButton{font-size:1em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button__icon{width:1.5em!important;height:1.5em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button_icon-container-more{line-height:1.875em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-dropdown-trigger{padding:.5em .5em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .data-metrics={btnname:chgprod,appcode:880.130.862}';
            }else{
                css = '.embeddedServiceLiveAgentStateChatHeader .message,.embeddedServiceLiveAgentStateChatHeaderOption .optionName,.embeddedServiceSidebarFormField .uiInput .uiLabel-left{font-size:.75em!important}.embeddedServiceLiveAgentStateChatPlaintextMessageDefaultUI.plaintextContent,.embeddedServiceSidebarDialogState #dialogTextBody,.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select,.embeddedServiceSidebarHeader .shortHeader,.embeddedServiceSidebarMinimizedDefaultUI .minimizedText{font-size:.875em!important}.embeddedServiceSidebar .headerItem,.embeddedServiceSidebarButton{font-size:1em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button__icon{width:1.5em!important;height:1.5em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button_icon-container-more{line-height:1.875em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-dropdown-trigger{padding:.5em .5em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .data-metrics={btnname:chgprod,appcode:880.130.862}';
            }
            //FY21-0803: Defect #9075724 [START]
            head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'chatBotStyle';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
            HideLoader();
        }
        //FIX for CSS related issue in Chat bot[END]
        //snapinBotPageObserver('body');

        //FY21-0202 Story 7728368 [START]
        //FY21-0403 Defect 8363466 //First language needs to be translated. So moving this conditon on top
        if ("applicationContext" in chatBotObject && chatBotObject.applicationContext === "ChatBot-CareBot" && "language" in chatBotObject)
            translatedLabels = translation(chatBotObject.language);
        else
            translatedLabels = translation("en");

        embedded_svc.settings.language = translatedLabels.language;

        snapinBotPageObserver('body');
        var VA_FlagValues = null;//FY21-0803 US CARE BOT changes
        var chatBotForm = "ChatBot", phoenNumberValues = null;//FY21-0403 [Defect] prop 20 value change 
        if ("applicationContext" in chatBotObject && (chatBotObject.applicationContext === "ChatBot-CareBot" || chatBotObject.applicationContext === "ChatBot-CareEnglish")) {//FY21-0803 US Care bot
            chatBotForm = "Chatbot-CareBot";
            phoenNumberValues = { "label": translatedLabels.primPhone, "transcriptFields": ["ContactNumber__c"], "displayToAgent": true };//FY21-0403 [Defect] prop 20 value change //For Care
            if ('VA_Flag' in chatBotObject)
                VA_FlagValues = { "label": 'VA Flag', "value": chatBotObject.VA_Flag, "transcriptFields": ["VA_Flag__c"], "displayToAgent": true };//FY21-0803 US Care bot
            else
                VA_FlagValues = { "label": 'VA Flag', "value": false, "transcriptFields": ["VA_Flag__c"], "displayToAgent": true };//FY21-0803 US Care bot 
        } else {
            phoenNumberValues = { "label": "Phone", "transcriptFields": ["Phone"], "displayToAgent": true };//FY21-0403 [Defect] prop 20 value change //For tech
            if ('VA_Flag' in chatBotObject)
                VA_FlagValues = { "label": 'VA Flag', "value": chatBotObject.VA_Flag, "transcriptFields": ["VA_Flag__c"], "displayToAgent": true };//FY21-0803 US Care bot
            else
                VA_FlagValues = { "label": 'VA Flag', "value": false, "transcriptFields": ["VA_Flag__c"], "displayToAgent": true };//FY21-0803 US Care bot
        }
        //FY21-0202 Story 7728368 [END]

        embedded_svc.settings.displayHelpButton = false;
        embedded_svc.settings.extraPrechatFormDetails = [

            { "label": "Transcript From", "value": chatBotForm, "transcriptFields": ["Transcript_From__c"], "displayToAgent": true },
            { "label": "Chat Source", "value": isTechOrCare(chatBotObject), "transcriptFields": ["Chat_Source__c"] },
            { "label": "Service Tag",/* "value": chatBotObject.Service_Tag,*/ "transcriptFields": ["Service_Tag__c"], "displayToAgent": true },
            { "label": "CARE_Chat_Order_Number", "transcriptFields": ["CARE_Chat_Order_Number__c"], "displayToAgent": true }, // Change for BOT phone March 19 2020
            { "label": "Order Number", "value": appendBuidForCareBot(chatBotObject), "transcriptFields": ["Order_Number__c"] },//FY21-0602: Story #8151253 add BUID to order number
            { "label": "Issue", "value": selectIssueTypeForCareBot(chatBotObject), "transcriptFields": ["Issue__c"] },//FY21-0803: Defect #9058298 add Status if not avilable in bot
            //{ "label": translatedLabels.primPhone, /*"value": '00 61 2 9876', */"transcriptFields": ["ContactNumber__c"], "displayToAgent": true },
            phoenNumberValues,//FY21-0403 [Defect] prop 20 value change
            VA_FlagValues, //FY21-0803 US Care bot
            { "label": translatedLabels.firstName, /*"value": chatBotObject.FirstName, */"transcriptFields": ["FirstName__c"], "displayToAgent": true },
            { "label": translatedLabels.lastName, /*"value": chatBotObject.LastName, */"transcriptFields": ["LastName__c"], "displayToAgent": true },
            { "label": translatedLabels.emailAdd, /*"value":chatBotObject.Email,*/ "transcriptFields": ["Email__c"], "displayToAgent": true },
            { "label": "product_Model", "value": chatBotObject.product_Model, "transcriptFields": ["product_Model__c"], "displayToAgent": true },
            { "label": "Kb_Article", "value": chatBotObject.Kb_Article, "transcriptFields": ["KB__c"], "displayToAgent": true },
            { "label": "issue_Description", "value": chatBotObject.issue_Description, "transcriptFields": ["issue_Description__c"], "displayToAgent": true },
            { "label": "warranty_Details", "value": chatBotObject.warranty_Details, "transcriptFields": ["warranty_Details__c"], "displayToAgent": true },
            { "label": "windows_Version", "value": chatBotObject.windows_Version, "transcriptFields": ["windows_Version__c"], "displayToAgent": true },
            { "label": "BIOS_Version", "value": chatBotObject.BIOS_Version, "transcriptFields": ["BIOS_Version__c"], "displayToAgent": true },
            { "label": "recent_Software_Updated_Date", "value": chatBotObject.recent_Software_Updated_Date, "transcriptFields": ["recent_Software_Updated_Date__c"], "displayToAgent": true },
            { "label": "is_External_Peripherals_Connected", "value": chatBotObject.is_External_Peripherals_Connected, "transcriptFields": ["is_External_Peripherals_Connected__c"], "displayToAgent": true },
            { "label": "is_SA_Diagnostic_Passed", "value": chatBotObject.is_SA_Diagnostic_Passed, "transcriptFields": ["is_SA_Diagnostic_Passed__c"], "displayToAgent": true },
            { "label": "is_Error_Related_HWorSW", "value": chatBotObject.is_Error_Related_HWorSW, "transcriptFields": ["is_Error_Related_HWorSW__c"], "displayToAgent": true },
            { "label": "is_BIOSandDrivers_Updated", "value": chatBotObject.is_BIOSandDrivers_Updated, "transcriptFields": ["is_BIOSandDrivers_Updated__c"], "displayToAgent": true },
            { "label": "is_AnyAntivirus_Installed", "value": chatBotObject.is_AnyAntivirus_Installed, "transcriptFields": ["is_AnyAntivirus_Installed__c"], "displayToAgent": true },
            { "label": "is_Related_Heat_Issue", "value": chatBotObject.is_Related_Heat_Issue, "transcriptFields": ["is_Related_Heat_Issue__c"], "displayToAgent": true },
            { "label": "is_Warranty_Covered", "value": chatBotObject.is_Warranty_Covered, "transcriptFields": ["is_Warranty_Covered__c"], "displayToAgent": true },
            { "label": "is_HardDrive_Test_Passed", "value": chatBotObject.is_HardDrive_Test_Passed, "transcriptFields": ["is_HardDrive_Test_Passed__c"], "displayToAgent": true },
            { "label": "is_Memory_Test_Passed", "value": chatBotObject.is_Memory_Test_Passed, "transcriptFields": ["is_Memory_Test_Passed__c"], "displayToAgent": true },
            { "label": "is_MotherBoard_Test_Passed", "value": chatBotObject.is_MotherBoard_Test_Passed, "transcriptFields": ["is_MotherBoard_Test_Passed__c"], "displayToAgent": true },
            { "label": "is_HDD_IDE", "value": chatBotObject.is_HDD_IDE, "transcriptFields": ["is_HDD_IDE__c"], "displayToAgent": true },
            { "label": "last_time_scan_run", "value": chatBotObject.last_time_scan_run, "transcriptFields": ["last_time_scan_run__c"], "displayToAgent": true },
            { "label": "isDsdnstalled", "value": chatBotObject.isDsdnstalled, "transcriptFields": ["isDsdnstalled__c"], "displayToAgent": true },
            { "label": "isHwAlert", "value": chatBotObject.isHwAlert, "transcriptFields": ["isHwAlert__c"], "displayToAgent": true },
            { "label": "isSwAlert", "value": chatBotObject.isSwAlert, "transcriptFields": ["isSwAlert__c"], "displayToAgent": true },
            // { "label": "Application_Context", "value": chatBotObject.applicationContext, "transcriptFields": ["Application_Context__c"]/*, "displayToAgent": true */ },
            { "label": "Application_Context", "transcriptFields": ["Application_Context__c"], "displayToAgent": true },
            { "label": "StepName_Manual_Bot", "value": chatBotObject.StepName_Manual_Bot, "transcriptFields": ["StepName_Manual_Bot__c"], "displayToAgent": true },
            { "label": "Agent_QueueName", "value": chatBotObject.Agent_QueueName, "transcriptFields": ["Agent_QueueName__c"], "displayToAgent": true },
            { "label": "BotFutureUse_2", "value": chatBotObject.BotFutureUse_2, "transcriptFields": ["BotFutureUse_2__c"], "displayToAgent": true },


        ];
        var firstNameVal = null,
            lastNameVal = null,
            emailVal = null,
            primePhoneVal = null,
            ServiceTagVal = null,
            applicationContextval = null,
            CAREChatOrderNumberval = null;

        if ("First_Name" in chatBotObject)
            firstNameVal = chatBotObject.First_Name;
        else
            firstNameVal = "firstNameVal";

        if ("Last_Name" in chatBotObject)
            lastNameVal = chatBotObject.Last_Name;
        else
            lastNameVal = "lastNameVal";

        if ("Email" in chatBotObject)
            emailVal = chatBotObject.Email;
        else
            emailVal = "emailVal@dell.com";

        if ("Phone" in chatBotObject)
            primePhoneVal = chatBotObject.Phone;
        else
            primePhoneVal = "primePhoneVal";

        if ("Service_Tag" in chatBotObject)
            ServiceTagVal = chatBotObject.Service_Tag;
        else
            ServiceTagVal = "1234";

        if ("CARE_Chat_Order_Number" in chatBotObject)
            CAREChatOrderNumberval = chatBotObject.CARE_Chat_Order_Number;
        else
            CAREChatOrderNumberval = "123456";

        if ("applicationContext" in chatBotObject)
            applicationContextval = chatBotObject.applicationContext;
        else
            applicationContextval = "testing";

        embedded_svc.settings.prepopulatedPrechatFields = {
            FirstName: firstNameVal,
            LastName: lastNameVal,
            Email: emailVal,
            ContactNumber__c: primePhoneVal,//FY21-0403 [Defect] //For CARE
            Phone: primePhoneVal,//FY21-0403 [Defect] //For Tech
            Service_Tag__c: ServiceTagVal,
            Application_Context__c: applicationContextval,
            CARE_Chat_Order_Number__c: CAREChatOrderNumberval,
        };

        embedded_svc.settings.extraPrechatInfo = [{
            "entityFieldMaps": [{
                "doCreate": false,
                "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                "fieldName": "LastName",
                "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                "label": translatedLabels.lastName//"Last Name" //FY22-0502: Story #10491138: Add translate pre-chat info values for Einstein Care Bot
            }, {
                "doCreate": false,
                "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                "fieldName": "FirstName",
                "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                "label": translatedLabels.firstName//"First Name" //FY22-0502: Story #10491138: Add translate pre-chat info values for Einstein Care Bot
            }, {
                "doCreate": false,
                "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                "fieldName": "Email",
                "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                "label": translatedLabels.emailAdd//"Email Address" //FY22-0502: Story #10491138: Add translate pre-chat info values for Einstein Care Bot
            }],
            "entityName": "Contact",
            "saveToTranscript": "ContactId"
            //"linkToEntityName": "Live_Chat_Transcript"
        }, {
            "entityFieldMaps": [{
                "doCreate": false,
                "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                "fieldName": "Name",
                "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                "label": "Service Tag"
            }
            ],
            "entityName": "Asset",
            "saveToTranscript": "Asset__c"
        }, {
            "entityFieldMaps": [/*{
                        "doCreate": false,
                        "doFind": true,
                        "fieldName": "Issue_Description__c",
                        "isExactMatch": true,
                        "label": "Issue Description"
                }, */
                {
                    "doCreate": false,
                    "doFind": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "fieldName": "AssetId",
                    "isExactMatch": false,//FY21-0803: STORY #8742782: Change Do find to False in all places
                    "label": "Asset"
                }, {
                    "entityFieldMaps": [{
                        "doCreate": false,
                        "doFind": false,
                        "fieldName": "External_ID__c",//"Application_Context__c",//
                        "isExactMatch": false,
                        "label": "Application_Context"
                    }
                    ],
                    "entityName": "Case",
                    "saveToTranscript": "Application_Context__c"
                }
            ],
            "entityName": "Case"
            //  "saveToTranscript": ""
        }
        ];
        embedded_svc.settings.chatbotAvatarImgURL = 'https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product_images/esupport/icons/bot_icon_40x40.png.png';
        embedded_svc.settings.defaultMinimizedText = "Get Started";
        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';
        embedded_svc.init(chatBotObject.chatBotInitURL, chatBotObject.chatBotLAURL, gslbBaseURL, chatBotObject.organizationId, chatBotObject.componentName, {
            baseLiveAgentContentURL: chatBotObject.baseLiveAgentContentURL,
            deploymentId: chatBotObject.deploymentId,
            buttonId: chatBotObject.buttonId,
            baseLiveAgentURL: chatBotObject.baseLiveAgentURL,
            eswLiveAgentDevName: chatBotObject.LiveAgentDevName,
            isOfflineSupportEnabled: false
        });
        //This Call is to Open PreChat Form
        //eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatBotClick);
    };

    var snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
    if (!snapinAlreadyInitiated) {
        if (!window.embedded_svc) {
            var s = document.createElement('script');
            s.setAttribute('src', chatBotObject.snapInJs);
            s.onload = function () {
                initESW(null);
                ResgisterChatBotHandler();
                onBotStart();
            };
            document.body.appendChild(s);
        } else {
            initESW(chatBotObject.serviceForceURL);
            ResgisterChatBotHandler();
            onBotStart();
        }
    } else {
        ResgisterChatBotHandler();
        onBotStart();
    }
    HookClosePreChatForm();
}
//FY21-0602: Story #8151253 add BUID to order number [START]
function appendBuidForCareBot(chatBotObject) {
    var orderNumber = null;
    if ("buid" in chatBotObject && chatBotObject.buid)
        orderNumber = chatBotObject.CARE_Chat_Order_Number + '-' + chatBotObject.buid;
    else if (chatBotObject.applicationContext === "ChatBot-CareBot") {
        orderNumber = chatBotObject.CARE_Chat_Order_Number + '-3696'; //incase if buid is empty adding brazil buid.
    }
        else if (chatBotObject.applicationContext === "ChatBot-CareEnglish") {
                orderNumber = chatBotObject.CARE_Chat_Order_Number + '-11'; //incase if buid is empty adding US buid.
            }
    return orderNumber;
}
//FY21-0602: Story #8151253 add BUID to order number [START]
//FY21-0803: Defect #9058298 add Status if not avilable in bot [START]
function selectIssueTypeForCareBot(chatBotObject) {
    var issueType = null;
    if (chatBotObject.applicationContext === "ChatBot-CareBot") {
        issueType = 'Status do pedido';
    } else if (chatBotObject.applicationContext === "ChatBot-CareEnglish") {
        issueType = 'Order Status';
    }
    return issueType;
}
//FY21-0803: Defect #9058298 add Status if not avilable in bot [END]

function ResgisterChatBotHandler() {
    embedded_svc.addEventHandler("onAgentMessage", function (data) {
        console.log('onAgentMessage event triggerred');
        bindHandler();
        sessionStorage.setItem("isChatBotActive", 'true');
        isAgentEventTriggered = true;
    });
    embedded_svc.addEventHandler("onChatEndedByChasitor", function (data) {
        console.log('onChatEndedByChasitor event triggerred');
        callDellmetricsTrackForBot("880.130.860", data.liveAgentSessionKey);
        CloseAndClearChatBot();
        SetToDefaultValues();
    });
    embedded_svc.addEventHandler("onChatTransferSuccessful", function (data) {
        console.log('onChatTransferSuccessful event triggerred');
        EnableChatBotInput();
    });
    embedded_svc.addEventHandler("onChatEndedByAgent", function (data) {
        console.log('onChatEndedByAgent event triggerred');
        CloseAndClearChatBot();
        SetToDefaultValues();
    });
    embedded_svc.addEventHandler("onConnectionError", function (data) {
        console.log('onConnectionError event triggerred');
        CloseAndClearChatBot();
        SetToDefaultValues();
    });
    embedded_svc.addEventHandler("onIdleTimeoutOccurred", function (data) {
        console.log('onIdleTimeoutOccurred event triggerred');
        CloseAndClearChatBot();
        SetToDefaultValues();
    });

    embedded_svc.addEventHandler("onChatRequestSuccess", function (data) {
        console.log('onChatRequestSuccess event triggerred');
        SetToDefaultValues();
        sessionStorage.removeItem('GR_MessageCount');
        sessionStorage.removeItem('isChatBotActive');
        StoreChatBotSessionKey(data.liveAgentSessionKey);
        callDellmetricsTrackForBot("880.130.863", data.liveAgentSessionKey);
    });

    embedded_svc.addEventHandler("onChatReconnectSuccessful", function (data) {
        console.log('onChatReconnectSuccessful event triggerred');
        //ProcessChildMessageWithSucess();
    });

    embedded_svc.addEventHandler("onChatEstablished", function (data) {
        console.log('onChatEstablished event triggerred');
        callDellmetricsTrackForBot("880.130.864", data.liveAgentSessionKey);
        setTimeout(function () {
            var hamburgerMenuIconDOM = document.querySelector("embeddedservice-chat-input-footer-menu");//FY21-0403 [Defect-8363466] prop 20 value change
            if (hamburgerMenuIconDOM)
                hamburgerMenuIconDOM.addEventListener("click", function () {
                    callDellmetricsTrackForBot("880.130.861", data.liveAgentSessionKey);
                });
            //FY21-0702: Prop value Fix [START]
            /*
            var chatButtons = document.querySelectorAll(".embeddedServiceLiveAgentStateChatHeaderOption");

            chatButtons[0].addEventListener("click", function () {
                callDellmetricsTrackForBot("880.130.859", data.liveAgentSessionKey);
            });
            chatButtons[1].addEventListener("click", function () {
                callDellmetricsTrackForBot("880.130.860", data.liveAgentSessionKey);
            });
            */
            //FY21-0702: Prop value Fix [END]
        }, 300);

    });

    embedded_svc.addEventHandler("onChasitorMessage", function (data) {
        console.log('onChasitorMessage event triggerred');

        setTimeout(function () {
            var nodes = document.querySelectorAll(".chatContent");
            var lastmessage = nodes[nodes.length - 1];
            if (lastmessage.innerText === "Chat with Live Agent" || lastmessage.innerText === "Conversar com o Live Agent" || lastmessage.innerText === "Transfer to Agent")//FY21-0403 [Defect] prop 20 value change
                callDellmetricsTrackForBot("880.130.862", data.liveAgentSessionKey);
        }, 300);

    });
}

function OmniChatBotTrackerListner() {
    // clearInterval(findingEle);
    try {
        /*
        var my_elem = document.querySelector(eleSelector);

        var span = document.createElement('span');
        span.innerHTML = '<div  style= "color:Red;font-size: .75em;"> \xa0(Service Tags are 7-digit codes usually located on \xa0\xa0the back or bottom of Dell products.)</div>';
        span.iD = 'additionalHelpTest';

        my_elem.parentNode.insertBefore(span, my_elem);
        */
        //callDellmetricsTrackForBot("880.130.852");

        window.addEventListener("click", function (event) {
            try {//FY21-0702 DEFECT 9007902: Adding additional checks
                if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton")) {
                    var clickedElement = event.target || event.srcElement;
                    //FY21-0702: Prop value Fix [Start]
                    if (clickedElement && clickedElement.tagName.toLowerCase() === 'embeddedservice-chat-header' && (closestByTagName(event.toElement, 'svg') || closestByTagName(event.toElement, 'button'))) {//FY21-0702 DEFECT 9007902: Adding additional checks
                        if (closestByTagName(event.toElement, 'svg').dataset.key === 'minimize_window' || closestByTagName(event.toElement, 'button').className === 'minimizeButton')
                            callDellmetricsTrackForBot("880.130.854","Minimize");//Story 8233457: Prop Values Change for Einstein Bot
                        else if (closestByTagName(event.toElement, 'svg').dataset.key === 'close' || closestByTagName(event.toElement, 'button').className === 'closeButton')
                            callDellmetricsTrackForBot("880.130.855","Close");//Story 8233457: Prop Values Change for Einstein Bot
                    } else if (clickedElement && clickedElement.tagName.toLowerCase() === 'embeddedservice-chat-input-footer-menu' && (closestByTagName(event.toElement, 'svg') || closestByTagName(event.toElement, 'button'))) {//FY21-0702 DEFECT 9007902: Adding additional checks
                        if (closestByTagName(event.toElement, 'svg').dataset.key !== 'rows' && closestByTagName(event.toElement, 'button').className !== 'slds-button slds-button_icon slds-button_icon-container-more slds-button_icon-large') {
                            var snapInfooterMenuElm = closestByTagName(event.toElement, 'a');
                            if (snapInfooterMenuElm != undefined && snapInfooterMenuElm != null && snapInfooterMenuElm.innerText)
                                callDellmetricsTrackForBot("880.130.859","Save Transcript");//Story 8233457: Prop Values Change for Einstein Bot
                        }
                    } else
                        //FY21-0702: Prop value Fix [END]
                        if (clickedElement && closestByTagName(clickedElement, 'button') != null) {//FY21-0702 DEFECT 9007902: Adding additional checks
                            switch (closestByTagName(clickedElement, 'button').className) {
                                /*case "startButton uiButton--default uiButton embeddedServiceSidebarButton":
                                    callDellmetricsTrackForBot("880.130.853");
                                    break;*/
                                case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                                    callDellmetricsTrackForBot("880.130.856","Cancel Chat Request");//Story 8233457: Prop Values Change for Einstein Bot
                                    chasitorTextMaintainState();
                                    isBinded = false;
                                    bindHandler();

                                    break;
                                case "closeButton headerItem":
                                    callDellmetricsTrackForBot("880.130.855","Close");//Story 8233457: Prop Values Change for Einstein Bot
                                    break;
                                case "minimizeButton headerItem":
                                    callDellmetricsTrackForBot("880.130.854","Minimize");//Story 8233457: Prop Values Change for Einstein Bot
                                    break;
                                case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                                    if ((event.target.innerText === "Leave" || event.target.innerText === "Sair") && (event.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Leave?" || event.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Sair?"))//FY21-0403 [Defect] prop 20 value change
                                        callDellmetricsTrackForBot("880.130.857","Leave Chat");//Story 8233457: Prop Values Change for Einstein Bot
                                    break;
                                case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                                    if ((event.target.innerText === "Continue to Wait" || event.target.innerText === "Continuar esperando") && (event.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Leave?" || event.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Sair?"))//FY21-0403 [Defect] prop 20 value change
                                        callDellmetricsTrackForBot("880.130.858","Continue to Wait");//Story 8233457: Prop Values Change for Einstein Bot
                                    chasitorTextMaintainState();
                                    isBinded = false;
                                    bindHandler();
                                    break;
                            }
                        }
                }
            } catch (e) {
                this.console.log("function error", e)
            }
        });

    } catch (e) {
        console.log(e);

    }
}


function callDellmetricsTrackForBot(propValue, message) {
    if (typeof (dellmetricsTrack) == "function") {
        if (dellmetricsTrack) {
            if (message)
                dellmetricsTrack(propValue, message);//Story 8233457: Prop Values Change for Einstein Bot
            else
                dellmetricsTrack(propValue);
        }
    }
}

/*** Prechat Form Code [START] ****/
//Call this function on click of start chat
function openBotPrechatform(chatBotObject) {
    if (!document.getElementById("cusBotPreChatSnapinDom")) {
        callDellmetricsTrackForBot("880.130.852","Chat Window Load"); //Story 8233457: Prop Values Change for Einstein Bot
        createBotCustPreChat(chatBotObject);
    } else {
        //If the form is already avilable[START] 
        var serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
            minimizedDefaultUI = document.querySelector(".embeddedServiceSidebar .embeddedServiceSidebarMinimizedDefaultUI");
        if (serviceSidebar && serviceSidebar.style.display == "none") { //if prechat form is open: Open custom prechat form
            callDellmetricsTrackForBot("880.130.852","Chat Window Load"); //Story 8233457: Prop Values Change for Einstein Bot
            document.getElementById("cusBotPreChat-helpButtonEnabled").click();
        } else if (minimizedDefaultUI)//If chat has already started try to maximize the chat window
            minimizedDefaultUI.click();
        else //If chat has not yet initiated still open prechat form
            document.getElementById("cusBotPreChat-helpButtonEnabled").click();
        //If the form is already avilable[END]
    }
}
function createBotCustPreChat(chatBotObject) {
    var fixedLabelsDomEle = createFixedLabels(chatBotObject);
    //FY21-0202 Story 7728368 [START]
    if ("applicationContext" in chatBotObject && chatBotObject.applicationContext === "ChatBot-CareBot")
        var domEle = '<div id="cusBotPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer" style="max-height:520px;"><div class="cusPreChat-embeddedServiceSidebarHeader"><div class="cusPreChat-shortHeader"><div class="cusPreChat-shortHeaderContent"> <button id="cusBotPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> </path> </svg> </span> </button><h2 class="cusPreChat-headerText"><div class="cusPreChat-headerTextContent"> <span id="cusBotPreChat-headerTextLabel">Conversar Agora</span> <span id="cusBotPreChat-headerSubtext"> </span></div></h2> <button id="cusBotPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button></div></div></div><div class="cusPreChat-sidebarBody"><div id="cusBotPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusBotPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">Sorry, no agents are currently Avilable</div><div> <button id="cusBotPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat</span> </button></div></div><div id="cusBotPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"><div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"><div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"><div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"><div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"><ul id="cusBotPreChat-fieldList" class="cusPreChat-fieldList">' + fixedLabelsDomEle + '<li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">Nome</span> </label> <input id="cusBotPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div> </span></li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">Sobrenome</span> </label> <input id="cusBotPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div> </span></li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span>Email</span> </label> <input id="cusBotPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span>Número de Telefone Principal</span> </label> <input id="cusBotPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"></div></li></ul><div style="font-size: 12px;color:#767676;text-align: left;margin: 1em 1.75em; font-style: italic;color:#444444;" bis_skin_checked="1"><b>Sua privacidade é importante para nós.</b> Usaremos apenas suas informações para processar sua solicitação. Não o compartilharemos com ninguém. Para saber mais sobre como usamos e protegemos seus dados, consulte o&nbsp;<a target="_blank" href="//www.dell.com/learn/policies-privacy">Declaração de Privacidade da Dell.</a> </div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusBotPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">Iniciar bate-papo</span> </button></div></div></div></div></div></div></div></div><div id="cusBotPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"><div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusBotPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)"> <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span><div class="cusPreChat-helpButtonLabel" id="cusBotPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">Conversar Agora</span></div> </button></div></div>';
    else
        //FY21-0202 Story 7728368 [END]  
        var domEle = '<div id="cusBotPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer" style="max-height:520px;"><div class="cusPreChat-embeddedServiceSidebarHeader"><div class="cusPreChat-shortHeader"><div class="cusPreChat-shortHeaderContent"> <button id="cusBotPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> </path> </svg> </span> </button><h2 class="cusPreChat-headerText"><div class="cusPreChat-headerTextContent"> <span id="cusBotPreChat-headerTextLabel">Chat Now</span> <span id="cusBotPreChat-headerSubtext"> </span></div></h2> <button id="cusBotPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button></div></div></div><div class="cusPreChat-sidebarBody"><div id="cusBotPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusBotPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">Sorry, no agents are currently Avilable</div><div> <button id="cusBotPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat</span> </button></div></div><div id="cusBotPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"><div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"><div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"><div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"><div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"><ul id="cusBotPreChat-fieldList" class="cusPreChat-fieldList">' + fixedLabelsDomEle + '<li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">First Name</span> </label> <input id="cusBotPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div> </span></li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">Last Name</span> </label> <input id="cusBotPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div> </span></li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span>Email</span> </label> <input id="cusBotPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span>Phone Number</span> </label> <input id="cusBotPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"></div></li></ul><div style="font-size: 12px;color:#767676;text-align: left;margin: 1em 1.75em; font-style: italic;color:#444444;" bis_skin_checked="1"><b>Your privacy is important to us.</b> We will only use your information to process your request. We will not share it with anyone. To learn more about how we use and protect your data, see the&nbsp;<a target="_blank" href="//www.dell.com/learn/policies-privacy">Dell Privacy Statement.</a> </div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusBotPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">Start Chat</span> </button></div></div></div></div></div></div></div></div><div id="cusBotPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"><div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusBotPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)"> <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span><div class="cusPreChat-helpButtonLabel" id="cusBotPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">Chat Now</span></div> </button></div></div>';

    var body = document.body || document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('beforeend', domEle);

    document.getElementById("cusBotPreChat-minimize-btn").addEventListener("click", custMinimizeBtnClickedInBot);
    document.getElementById("cusBotPreChat-close-btn").addEventListener("click", custCloseBtnClickedInBot);
    document.getElementById("cusBotPreChat-helpButtonEnabled").addEventListener("click", maximizeCustBotPrechat);

    custBotPreChatKeypressFieldValidation();//Key press validation
    prePopulateCustBotPreFormValues(chatBotObject);
    document.getElementById("cusBotPreChat-startChat").addEventListener("click", function () { startSnapinChatBot(chatBotObject) });
}
function createFixedLabels(chatBotObject) {
    var product_ModelDomEle = '', issue_DescriptionDomEle = '';
    if ("applicationContext" in chatBotObject && chatBotObject.applicationContext !== "ChatBot-CareBot" && chatBotObject.applicationContext !== "ChatBot-CareEnglish")//FY21-0202 Story 7728368 [START] //FY21-0803 US Care bot
    {
        if ("product_Model" in chatBotObject && !(chatBotObject.product_Model === "" || chatBotObject.product_Model === null || chatBotObject.product_Model === undefined)) {
            product_ModelDomEle = '<div style="font-size: 1.2em;">' + chatBotObject.product_Model + '</div>';
        }
        if ("issue_Description" in chatBotObject && !(chatBotObject.issue_Description === "" || chatBotObject.issue_Description === null || chatBotObject.issue_Description === undefined)) {
            issue_DescriptionDomEle = '<div><b>Issue:</b> ' + chatBotObject.issue_Description + '</div>';
        }
        return '<div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 1em 0px 0px 15px; text-align: left;position: relative;font-size: .75em;color: #444444;" bis_skin_checked="1">' + product_ModelDomEle + issue_DescriptionDomEle + '<div> <b>Service Tag:</b> <span  id="botServiceTagLabel">' + chatBotObject.Service_Tag + '</span></div></div>';

    }
    //FY21-0202 Story 7728368  //FY21-0803 US Care bot [START]
    else {
        var orderIdLabel;
        if ("applicationContext" in chatBotObject && chatBotObject.applicationContext === "ChatBot-CareBot")
            orderIdLabel = "ID do pedido";
        else
            orderIdLabel = "Order ID";//FY21-0803 US Care bot
        return '<div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 1em 0px 0px 15px; text-align: left;position: relative;font-size: .75em;color: #444444;" bis_skin_checked="1">' + '<div> <b>' + orderIdLabel + ':</b> <span  id="botCareChatOrderNumberLabel">' + chatBotObject.CARE_Chat_Order_Number + '</span></div></div>';//FY21-0803 US Care bot
    }//FY21-0202 Story 7728368  //FY21-0803 US Care bot [END]
}
function startSnapinChatBot(chatBotObject) {
    if (chatBotFieldsValidated(chatBotObject)) {
        //loadingSnapinQueue
        callDellmetricsTrackForBot("880.130.853","Start Chat in Popup"); //Story 8233457: Prop Values Change for Einstein Bot
        loadingSnapinBotQueue();
        chatBotObject = addCustBotFormDetailsTo(chatBotObject);
        checkForCareCustomerVarification(chatBotObject); //FY21-0803 VA Flag Code chagnes for CARE BOT
        saveGlobalSnapinBotObjToSession(chatBotObject);
        eleExistWithVariable('.embeddedServiceSidebar .startButton', ChatBotStarted, chatBotObject);
    }
}
//FY21-0803 VA Flag Code chagnes for CARE BOT [START]
function checkForCareCustomerVarification(chatBotObject){
    var  isVarifiedVal;
    try{
        if (chatBotObject.applicationContext === "ChatBot-CareBot" || chatBotObject.applicationContext === "ChatBot-CareEnglish") {
            var careChatObj = {
                "Buid": chatBotObject.buid,
                "OrderNumber": chatBotObject.c_CARE_Chat_Order_Number,       
                "FirstName": chatBotObject.c_firstName,
                "LastName": chatBotObject.c_lastName,
                "EmailAddress": chatBotObject.c_email,
                "PhoneNumber": chatBotObject.c_phoneNo
            };   
        isVarifiedVal = IsVerifiedCareChat(careChatObj);
        }
    }catch(e){
        return isVarifiedVal = false;
        console.log("Error on checkForCareCustomerVarification",e);
    }
        pushVarifiedCustomerFlagToBot(isVarifiedVal);
}
function pushVarifiedCustomerFlagToBot(isVarifiedVal) {
    try{
        var extraPrechatFormVals = embedded_svc.settings.extraPrechatFormDetails, i = 0;
        if(extraPrechatFormVals){
            extraPrechatFormVals.forEach(function (extraPrechatFormVal) {
                var fieldAPI = extraPrechatFormVal.transcriptFields[0];
                if(fieldAPI === 'VA_Flag__c'){
                    embedded_svc.settings.extraPrechatFormDetails[i].value = isVarifiedVal;
                }
                i++;
            });
        }
    }catch(e){
        console.log("Error on pushVarifiedCustomerFlagToBot",e);
    }
}
//FY21-0803 VA Flag Code chagnes for CARE BOT [END]
function loadingSnapinBotQueue() {
    document.getElementById("cusBotPreChat-sidebarLoadingIndicator").style.display = 'flex';
    document.getElementById("cusBotPreChat-hideWhileLoading").style.display = 'none';
    document.getElementById("cusBotPreChat-minimize-btn").style.display = 'none';
    document.getElementById("cusBotPreChat-close-btn").style.display = 'none';
}
function snapinBotQueueLoaded() {
    try {
        if (document.getElementById("cusBotPreChat-sidebarLoadingIndicator")) {
            document.getElementById("cusBotPreChat-sidebarLoadingIndicator").style.display = 'none';
            document.getElementById("cusBotPreChat-hideWhileLoading").style.display = 'block';
            document.getElementById("cusBotPreChat-minimize-btn").style.display = 'block';
            document.getElementById("cusBotPreChat-close-btn").style.display = 'block';
            closeCustBotPrechat();
        }
        var serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
        if (serviceSidebar) {
            serviceSidebar.style.display = "block";
        }
    } catch (e) {
        console.log('Exception at method name snapinBotQueueLoaded :' + e);
    }
}
function ChatBotStarted(eleSelector, findingEle, chatBotObject) {
    try {
        changeBotPrechatValues(chatBotObject);
        document.querySelector(" .embeddedServiceSidebar .dockableContainer .prechatUI  .embeddedServiceSidebarForm .embeddedServiceSidebarButton").click();
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function changeBotPrechatValues(snapInObject) {
    var state = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState();
    var prechatFields = state.get("v.prechatFields");
    prechatFields.forEach(function (prechatField) {
        if (prechatField.name === "FirstName") {
            prechatField.value = snapInObject.c_firstName
        } else if (prechatField.name === "LastName") {
            prechatField.value = snapInObject.c_lastName
        } else if (prechatField.name === "Email") {
            prechatField.value = snapInObject.c_email
        } else if (prechatField.name === "Primary_Phone__c") { //FY21-0403 [Defect] prop 20 value change
            prechatField.value = snapInObject.c_phoneNo
        } else if (prechatField.name === "Phone") {//FY21-0403 [Defect] prop 20 value change
            prechatField.value = snapInObject.c_phoneNo
        } else if (prechatField.name === "Service_Tag__c") {
            prechatField.value = snapInObject.Service_Tag
        }
        else if (prechatField.name === "Application_Context__c") {
            prechatField.value = snapInObject.applicationContext
        } else if (prechatField.name === "CARE_Chat_Order_Number__c") {
            prechatField.value = snapInObject.CARE_Chat_Order_Number
        }
        else
            console.log("ValueName" + prechatField.name);
    });
    state.set("v.prechatFields", prechatFields);
}
function custMinimizeBtnClickedInBot() {
    callDellmetricsTrackForBot("880.130.854","Minimize");//Story 8233457: Prop Values Change for Einstein Bot
    minimizeCustBotPrechat();
}
function minimizeCustBotPrechat() {
    document.getElementById("cusBotPreChat-embeddedServiceHelpButton").style.display = 'block';
    document.getElementById("cusBotPreChatSnapinDom").style.display = 'none';
}
function custCloseBtnClickedInBot() {
    callDellmetricsTrackForBot("880.130.855","Close");//Story 8233457: Prop Values Change for Einstein Bot
    closeCustBotPrechat();
}
function closeCustBotPrechat() {
    document.getElementById("cusBotPreChat-embeddedServiceHelpButton").style.display = 'none';
    document.getElementById("cusBotPreChatSnapinDom").style.display = 'none';
}
function maximizeCustBotPrechat() {
    document.getElementById("cusBotPreChat-embeddedServiceHelpButton").style.display = 'none';
    document.getElementById("cusBotPreChatSnapinDom").style.display = 'block';
}

/**Code to Prepopulate prechat fields[START] **/
function prePopulateCustBotPreFormValues(chatBotObject) {
    if ("First_Name" in chatBotObject && chatBotObject.First_Name !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusBotPreChat-FirstName").value = chatBotObject.First_Name;
    if ("Last_Name" in chatBotObject && chatBotObject.Last_Name !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusBotPreChat-LastName").value = chatBotObject.Last_Name;
    if ("Email" in chatBotObject && chatBotObject.Email !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusBotPreChat-Email").value = chatBotObject.Email;
    if ("Phone" in chatBotObject && chatBotObject.Phone !== null) //FY22-0302: Defect 10194575 : Remove Null values
        document.getElementById("cusBotPreChat-Phone").value = chatBotObject.Phone;
    if ("Service_Tag" in chatBotObject && chatBotObject.Service_Tag !== null && document.getElementById("botServiceTagLabel")) {//FY22-0302: Defect 10194575 : Remove Null values
        // document.getElementById("cusBotPreChat-ServiceTag").value = chatBotObject.Service_Tag;
            document.getElementById("botServiceTagLabel").value = chatBotObject.Service_Tag;
    }
    if ("CARE_Chat_Order_Number" in chatBotObject && chatBotObject.CARE_Chat_Order_Number !== null && document.getElementById("botCareChatOrderNumberLabel")) {//FY22-0302: Defect 10194575 : Remove Null values
        console.log("chatBotObject.CARE_Chat_Order_Number", chatBotObject.CARE_Chat_Order_Number);
        // document.getElementById("cusBotPreChat-ServiceTag").value = chatBotObject.Service_Tag;
        document.getElementById("botCareChatOrderNumberLabel").innerText = chatBotObject.CARE_Chat_Order_Number;
    }

}
/**Code to Prepopulate prechat fields[END] **/
//BOT Validations[START]
function chatBotFieldsValidated(chatBotObject) {
    var acceptForm,
        firstNameDOM = document.getElementById("cusBotPreChat-FirstName"),
        lastNameDOM = document.getElementById("cusBotPreChat-LastName"),
        emailDOM = document.getElementById("cusBotPreChat-Email"),
        phoneDOM = document.getElementById("cusBotPreChat-Phone");
    //serviceTagDOM = document.getElementById("cusBotPreChat-ServiceTag");
    var msgRequiredField = "This is a required field",
        msgInvalidEmail = "Invalid Email id";
    if (chatBotObject.applicationContext === "ChatBot-CareBot") {
        msgRequiredField = "Este é um campo obrigatório";
        msgInvalidEmail = "ID de email inválido";
    }

    if (document.getElementById("ErrMsg_cusBotPreChat-Email")) {
        var element = document.getElementById("ErrMsg_cusBotPreChat-Email");
        element.parentNode.removeChild(element);
    }
    if (!emailDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(emailDOM, msgRequiredField);
    else
        acceptForm = cusBotPreChatInvalidEmail(emailDOM, msgInvalidEmail);

    if (document.getElementById("ErrMsg_cusBotPreChat-FirstName") && !firstNameDOM.value) {
        acceptForm = false;
    } else if (!firstNameDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(firstNameDOM, msgRequiredField);
    else if (document.getElementById("ErrMsg_cusBotPreChat-FirstName")) {
        var element = document.getElementById("ErrMsg_cusBotPreChat-FirstName");
        element.parentNode.removeChild(element);
    } 
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    else{
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkBotErrMsgValidation(firstNameDOM, "FirstName", format, true)){
            cusBotPreChatErrorMsgPlaceholder(firstNameDOM, msgRequiredField);
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]

    if (document.getElementById("ErrMsg_cusBotPreChat-LastName") && !lastNameDOM.value) {
        acceptForm = false;
    } else if (!lastNameDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(lastNameDOM, msgRequiredField);
    else if (document.getElementById("ErrMsg_cusBotPreChat-LastName")) {
        var element = document.getElementById("ErrMsg_cusBotPreChat-LastName");
        element.parentNode.removeChild(element);
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    else{
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkBotErrMsgValidation(lastNameDOM, "LastName", format, true)){
            cusBotPreChatErrorMsgPlaceholder(lastNameDOM, msgRequiredField); 
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]
    if (document.getElementById("ErrMsg_cusBotPreChat-Phone") && !phoneDOM.value) {
        acceptForm = false;
    } else if (!phoneDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(phoneDOM, msgRequiredField);
    else if (document.getElementById("ErrMsg_cusBotPreChat-Phone")) {
        var element = document.getElementById("ErrMsg_cusBotPreChat-Phone");
        element.parentNode.removeChild(element);
        //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [UNIT Test][START]
        var formatPhoneCorrect = /^[0-9-]*$/;
        if (checkBotErrMsgValidation(phoneDOM, "Phone", formatPhoneCorrect, false)){
            cusBotPreChatErrorMsgPlaceholder(phoneDOM, msgRequiredField); 
            acceptForm = false;
        } else{
            acceptForm = true;
        }
        //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [UNIT Test][END]

    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    else{
        var formatPhoneCorrect = /^[0-9-]*$/;
        if (checkBotErrMsgValidation(phoneDOM, "Phone", formatPhoneCorrect, false)){
            cusBotPreChatErrorMsgPlaceholder(phoneDOM, msgRequiredField); 
            acceptForm = false;
        }       
    }
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]
    /*
    if (document.getElementById("ErrMsg_cusBotPreChat-ServiceTag") && !serviceTagDOM.value) {
        acceptForm = false;
    } else if (!serviceTagDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(serviceTagDOM, "This is a required field");
    else if (document.getElementById("ErrMsg_cusBotPreChat-ServiceTag")) {
            var element = document.getElementById("ErrMsg_cusBotPreChat-ServiceTag");
            element.parentNode.removeChild(element);
        }
    */
    if (acceptForm === undefined) acceptForm = true;
    return acceptForm;
}
//FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]	
function checkBotErrMsgValidation(fieldEle, fieldName, format, formatResult) {
    if ((fieldEle.value && format.test(fieldEle.value) == formatResult) || (!fieldEle.value)) {
        return true;
    } else {
        var idValue = "ErrMsg_cusBotPreChat-" + fieldName;
        var element = document.getElementById(idValue);
        if(element)
            element.parentNode.removeChild(element);
        return false;
    }
}
//FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
function cusBotPreChatEleIsEmpty(domElement, errMessage) {
    cusBotPreChatErrorMsgPlaceholder(domElement, errMessage);
    return false;
}
function cusBotPreChatInvalidEmail(domElement, errMessage) {
    if (!cusBotPreChatvalidateEmail(domElement.value) /*|| cusBotPreChatBlockListEmailValidation(domElement.value, orderSnapinLabelObj.blocklistEmails)*/) {
        cusBotPreChatErrorMsgPlaceholder(domElement, errMessage);
        return false;
    }
}
function cusBotPreChatvalidateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function cusBotPreChatBlockListEmailValidation(email, blockList) {
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
function cusBotPreChatErrorMsgPlaceholder(domElement, message) {
    try {
        var referenceNode = domElement.parentNode;
        var el = document.createElement("ul");
        el.innerHTML = '<li class="cusPreChat-form-element__help">' + message + '</li>';
        el.id = 'ErrMsg_' + domElement.id;
        el.className = "cusPreChat-has-error cusPreChat-uiInput";
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    } catch (e) {
        Console.log(e);
    }

}
function custBotPreChatKeypressFieldValidation() {
    var msgRequiredField = "This is a required field",
        msgInvalidEmail = "Invalid Email id";
    if (typeof Application_Context !== 'undefined' && Application_Context === "ChatBot-CareBot") {
        msgRequiredField = "Este é um campo obrigatório";
        msgInvalidEmail = "ID de email inválido";
    }
    document.getElementById("cusBotPreChat-Phone").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        for (i = 48; i < 58; i++)
            a.push(i);
        a.push(45);
        a.push(8);
        a.push(9);
        if (!(a.indexOf(k) >= 0))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusBotPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-Phone");
    }
    document.getElementById('cusBotPreChat-FirstName').onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusBotPreChat-FirstName"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-FirstName");
    }
    document.getElementById('cusBotPreChat-LastName').onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusBotPreChat-LastName"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-LastName");
    }
    document.getElementById("cusBotPreChat-Email").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 47 && k < 58) || (k == 45) || (k == 46) || (k == 95) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusBotPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-Email");
    }
    /*document.getElementById("cusBotPreChat-ServiceTag").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123) || (k > 47 && k < 58) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusBotPreChat-ServiceTag")) {
            removeDomElementbyId("ErrMsg_cusBotPreChat-ServiceTag");
        }
    }*/

    document.getElementById("cusBotPreChat-FirstName").addEventListener("paste", function (e) {
        checkForSpecialCharAndText(e, "cusBotPreChat-FirstName");
    });
    document.getElementById("cusBotPreChat-LastName").addEventListener("paste", function (e) {
        checkForSpecialCharAndText(e, "cusBotPreChat-LastName");
    });
    /*document.getElementById("cusBotPreChat-ServiceTag").addEventListener("paste", function (e) {
        var format =/[!#$%^&*()+\=\[\]{};@-_.':"\\|,<>\/?]/;
        //if (pastedText(e).includes('<') || pastedText(e).includes('>')) {
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(orderSnapinLabelObj.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusBotPreChat-ServiceTag"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-ServiceTag");
    });*/
    document.getElementById("cusBotPreChat-Email").addEventListener("paste", function (e) {
        var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(orderSnapinLabelObj.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusBotPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-Email");
    });
    document.getElementById("cusBotPreChat-Phone").addEventListener("paste", function (e) {
        if (/^[0-9-]*$/.test(pastedText(e)) == false) {
            e.preventDefault();
            alert(orderSnapinLabelObj.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusBotPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-Phone");
    });
    function checkForSpecialCharAndText(e, ele) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(orderSnapinLabelObj.pasteInvalidTextMsg);
        } else if (ele === "cusBotPreChat-FirstName" && document.getElementById("ErrMsg_cusBotPreChat-FirstName"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-FirstName");
        else if (ele === "cusBotPreChat-LastName" && document.getElementById("ErrMsg_cusBotPreChat-LastName"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-LastName");
    }
    function pastedText(e) {
        if (e.clipboardData && e.clipboardData.getData)
            return e.clipboardData.getData('text/plain');
        else
            return null;
    }

    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [START]
    document.getElementById("cusBotPreChat-FirstName").addEventListener("change", function () {
        checkForSpecialCharAndText(this.value, this.id);
    });
    document.getElementById("cusBotPreChat-LastName").addEventListener("change", function () {
        checkForSpecialCharAndText(this.value, this.id);
    });
    document.getElementById("cusBotPreChat-Email").addEventListener("change", function () {
        var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
        if(!format.test(this.value) && document.getElementById("ErrMsg_cusBotPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-Email");
    });
    document.getElementById("cusBotPreChat-Phone").addEventListener("change", function () {
        if (/^[0-9-]*$/.test(this.value) == true && document.getElementById("ErrMsg_cusBotPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusBotPreChat-Phone");
        else if (/^[0-9-]*$/.test(this.value) == false && !document.getElementById("ErrMsg_cusBotPreChat-Phone")){
            cusBotPreChatErrorMsgPlaceholder(this, msgRequiredField);
        }
    });
    //FY22-0302 STORY 10071218: Pre-Chat Form validation message should go away in Auto-Fill scenario [END]

}
//BOT Validations[END]

function addCustBotFormDetailsTo(snapInObject) {
    snapInObject.c_firstName = document.getElementById("cusBotPreChat-FirstName").value;
    snapInObject.c_lastName = document.getElementById("cusBotPreChat-LastName").value;
    snapInObject.c_email = document.getElementById("cusBotPreChat-Email").value;
    snapInObject.c_phoneNo = document.getElementById("cusBotPreChat-Phone").value;
    if (document.getElementById('botServiceTagLabel'))
        snapInObject.c_serviceTag = document.getElementById('botServiceTagLabel').innerText;
    if (document.getElementById('botCareChatOrderNumberLabel'))
        snapInObject.c_CARE_Chat_Order_Number = document.getElementById('botCareChatOrderNumberLabel').innerText;
    return snapInObject;
}
function saveGlobalSnapinBotObjToSession(chatBotObject) {
    if (chatBotObject) {
        var chatBotObjectGlobal = JSON.stringify(chatBotObject);
        sessionStorage.setItem("chatBotObjectSession", chatBotObjectGlobal);
    }
}
/*** Prechat Form Code [END] ****/

/*****Obesrve ChatBot Page [START]*****/
function snapinBotPageObserver(eleSelector) {
    try {
        var snapInLoadingPrechatForm = document.querySelector(".modalContainer.loading.initialLoading");
        snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
        snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
        snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
        snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
        snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
        if (snapInLoadingPrechatForm)
            snapInCurrentPage = "snapInLoadingPrechatForm";
        else
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
                    snapInLoadingPrechatForm = document.querySelector(".modalContainer.loading.initialLoading");
                    snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
                    snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
                    snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
                    snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
                    snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
                    snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
                    snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton");
                    if (snapInLoadingPrechatForm && snapInCurrentPage != "snapInLoadingPrechatForm") {
                        snapInCurrentPage = "snapInLoadingPrechatForm";
                        serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
                        serviceSidebar.style.display = "none";
                    } else if (snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm") {
                        snapInCurrentPage = "snapInPrechatForm";
                        serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
                        serviceSidebar.style.display = "none";
                    } else if (snapInWaiting && snapInCurrentPage != "snapInWaiting") {
                        snapInCurrentPage = "snapInWaiting";
                        snapinBotQueueLoaded();
                    } else if (snapInChatStarted && snapInCurrentPage != "snapInChatStarted") {
                        snapInCurrentPage = "snapInChatStarted";
                        snapinBotQueueLoaded();
                    } else if (snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug") {
                        snapInCurrentPage = "snapInConfirmationDialoug";
                    } else if (snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnDisabled") {
                        snapInCurrentPage = "snapInhelpBtnDisabled";
                    } else if (snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnEnabled") {
                        snapInCurrentPage = "snapInhelpBtnEnabled";
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
    } catch (e) { Console.log('Error in Observer - ' + e) }
}
/*****Obesrve ChatBot Page [END]*****/

/****CODE FOR DIRECT LOADING OF PRECHAT FORM*********/
function chatBotClick(eleSelector, findingEle) {
    try {
        if (document.querySelector(eleSelector).innerText === 'Get Started') {
            document.querySelector(eleSelector).click();
        }
        clearInterval(findingEle);
    } catch (e) {
        Console.log("Error in:" + e);
    }
}
/****CODE FOR DIRECT LOADING OF PRECHAT FORM ENDS*********/
function onChatBotServiceTagChange() {
    var element = document.getElementById("cusBotPreChatSnapinDom");
    if (element) {
        element.parentNode.removeChild(element);
    }
}
