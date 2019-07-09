var snapinChatGlobalIssueType, snapinChatGlobalServiceTag, snapinChatGlobalProductName = null, snapInCurrentPage = null, trackevent = true;
var coveoHeader = "", isCoveoSearchEnabled = false, isPCFCall = false;

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
    let snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
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
    try{
        if (!(sessionStorage.getItem("isChatBotActive") != null && sessionStorage.getItem("isChatBotActive") == "true")) {//Check if chat bot is Active
            if (typeof (isSnapinInitiated) == "function" && isSnapinInitiated()){
                let orderSnapinObject = sendGlobalSnapinCareObjToJson();
                initiateChatCARE(orderSnapinObject);//orderRetain Chat
            } else if (snapInObject === undefined && history.length > 1 && snapinChatGlobalObjNotEmpty()) {
                snapInObject = sendGlobalSnapinObjToJson();
                if ("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated) {
                    eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
                    pageObserverForProp20("body");
                    initSnapIn(snapInObject);
                }
            } else if (snapInObject) {
                if (!snapInObject.snapinButtonClicked) {
                    eleExist('.embeddedServiceHelpButton', hideDomObject);
                    //eleExist('.embeddedServiceSidebar', hideDomObject);
                    eleExistWithVariable('.modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI', hideOtherDomObject,'.embeddedServiceSidebar');
                    saveGlobalSnapinObjToSession(snapInObject);
                    snapinChatInitiatedState(true);
                    eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
                    if (document.getElementById('cusPreChatSnapinDom'))
                        custPreChatShowAdditionalDetailsInUi(snapInObject, preChatlableObject);
                    initSnapIn(snapInObject);
                } else if (customChatNotCreated()) {
                    snapInObject = sendGlobalSnapinObjToJson();
                    appendCustPreChatSnapinDom(snapInObject, preChatlableObject)
                }
            }
        }

    }catch(e){
        console.log("Error in: " + e);
    }
}
function customChatNotCreated() {
    let cusPreChatHelpBtn = document.getElementById('cusPreChat-embeddedServiceHelpButton');
    let snapinExists = document.querySelector(".embeddedServiceSidebar .dockableContainer");
    let chatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
    if (chatStarted)
        return false;        
    else if (cusPreChatHelpBtn && window.getComputedStyle(cusPreChatHelpBtn).display != "none" && !snapinExists) {
        document.getElementById("cusPreChat-helpButtonEnabled").click();
        return false;
    } else
        return true;
}
function appendCustPreChatSnapinDom(snapInObject, preChatlableObject) {
    if (!document.getElementById('cusPreChatSnapinDom')) {
        //BNR
        let domEle = '<div id="cusPreChatSnapinDom" class="cusPreChat-modalContainer"> <div class="cusPreChat-dockableContainer"> <div class="cusPreChat-embeddedServiceSidebarHeader"> <div class="cusPreChat-shortHeader"> <div class="cusPreChat-shortHeaderContent"> <button id="cusPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> </path> </svg> </span> </button> <h2 class="cusPreChat-headerText"> <div class="cusPreChat-headerTextContent"> <span id="cusPreChat-headerTextLabel">' + preChatlableObject.chatHeader + '</span> <span id="cusPreChat-headerSubtext"> </span></div></h2> <button id="cusPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button> </div></div></div><div class="cusPreChat-sidebarBody"> <div id="cusPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"> <div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">' + preChatlableObject.chatUnavailableMessage + '</div><div><button id="cusPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat</span></button></div></div><div id="cusPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"> <div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"> <div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"> <div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"> <div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"> <ul class="cusPreChat-fieldList"> <div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 0 1.5em 6px 1.5em; text-align: left;position: relative;font-size: .75em;color: #444444;"> <div style="font-size: 1.2em;">Precision M4500</div><div> <b>' + preChatlableObject.serviceTag + ':</b> 123432</div><div> <b>' + preChatlableObject.issueType + ':</b> Keyboard not working</div></div><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">' + preChatlableObject.firstName + '</span></label> <input id="cusPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div></span> </li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">' + preChatlableObject.lastName + '</span> </label> <input id="cusPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div></span> </li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>' + preChatlableObject.emailAddress + '</span></label> <input id="cusPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>' + preChatlableObject.phoneNumber + '</span> </label> <input id="cusPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>' + preChatlableObject.issueDescription + '</span> </label> <textarea id="cusPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input coveo-query" maxlength="' + preChatlableObject.issueDescriptionLength + '" type="text" aria-describedby="" placeholder="" required="" data-coveo-id="txtIssueDetails"></textarea><div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / ' + preChatlableObject.issueDescriptionLength + ' ' + preChatlableObject.characters + '</div></div></li></ul>  <div id="PrechatCoveo" style="display:none;"></div> <div style="font-size: 12px;color:#767676;text-align: left;margin: 2.5em 1.75em; font-style: italic;color:#444444;">' + preChatlableObject.customerPrivacyDesc + '</div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">' + preChatlableObject.startChat + '</span> </button></div></div></div></div></div></div></div></div><div id="cusPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"> <div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)" > <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span> <div class="cusPreChat-helpButtonLabel" id="cusPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">' + preChatlableObject.chatHeader + '</span></div></button> </div></div>';
        let body = document.body || document.getElementsByTagName('body')[0];
        body.insertAdjacentHTML('beforeend', domEle);
        prePopulateCustPreFormValues(snapInObject);
        custPreFormShowIssueDetailsCharRemainingOnKeyUp(preChatlableObject);
        custPreChatKeypressFieldValidation(preChatlableObject);
        custPreChatShowAdditionalDetailsInUi(snapInObject, preChatlableObject);
        document.getElementById("cusPreChat-startChat").addEventListener("click", function () { custPrechatInitiateChat(snapInObject, preChatlableObject) });
        document.getElementById("cusPreChat-minimize-btn").addEventListener("click", minimizeCustPrechat);
        document.getElementById("cusPreChat-close-btn").addEventListener("click", function () { closeCustPrechat(preChatlableObject) });
        document.getElementById("cusPreChat-helpButtonEnabled").addEventListener("click", maximizeCustPrechat);

        if (typeof snapInObject.isPCFCall !== "undefined" && snapInObject.isPCFCall) {
            isPCFCall = snapInObject.isPCFCall;
        }

        if (snapInObject.isCoveoSearchEnabled === true) {
            httpCoveoGetAsync(snapInObject.coveoViewUrl + "?isheaderRequired=false", apendToAHoverDiv);          
            coveoInit(snapInObject, preChatlableObject);
        }
    } else {
        //BNR
        let snapinExists = document.querySelector(".embeddedServiceSidebar"), custPrechatForm = document.getElementById("cusPreChatSnapinDom");
        if ((!snapinExists || (snapinExists && window.getComputedStyle(snapinExists).display == 'none')) && window.getComputedStyle(custPrechatForm).display == 'none')
            maximizeCustPrechat();
        //document.getElementById("cusPreChatSnapinDom").style.display = 'block';
        //if (document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className != "uiButton helpButtonEnabled")
        //    agentsOfflinePostChatForm();
		let element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if(element && !element.classList.contains("helpButtonEnabled"))
			agentsOfflinePostChatForm();

    }
    callDellmetricsTrack("890.220.010");
}
//Coveo Get code[START]
function httpCoveoGetAsync(theUrl, callback) {
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    } catch (e) {
        console.log("Error in: " + e);
    }
}
function apendToAHoverDiv(responseText) {
    // let coveoSearchPleaseHolder = document.getElementById("PrechatCoveo");
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
                    GetCoveoPopoverResult(snapInObject.coveoSetDelay);
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

    if (isPCFCall === true && isCoveoSearchEnabled === true && textLength > 1 && $('#searchcoveoview').hasClass('coveo-hidden') === false && $('#searchcoveoview').find('div.CoveoResult').length !== 0) {
        setTimeout(function () {
            $('#cusPreChat-IssueDescription').popover(
                {
                    html: true,
                    container: 'body',
                    template: '<div class="popover popoverPosition" id="prechatCoveoPopover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>',
                    title: function () {
                        return "<b>" + coveoHeader + "</b><a href='#' class='close' data-dismiss='alert'>&times;</a>"
                    },
                    content: function () {
                        return $('#searchCoveo').html()
                    },
                });
            $(document).on("click", ".popover .close", function () {
                $(this).parents(".popover").popover('hide');
            });
            $('#cusPreChat-IssueDescription').popover("show");
        }, timeout);// delay is required to snyc up with result.           
    }
    else if (isCoveoSearchEnabled === true && textLength > 1 && $('#search').hasClass('coveo-hidden') === false && $('#search').find('div.CoveoResult').length !== 0) {

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
    }
    else {
        CoveoPopoverDispose();
    }
}

function CoveoPopoverDispose() {
    if (isCoveoSearchEnabled === true) {
        if (!isPCFCall)
            $('#cusPreChat-IssueDescription').popover('destroy');
        else
            $('#cusPreChat-IssueDescription').popover('dispose');
    }
}

//Coveo Get code[END]
function prePopulateCustPreFormValues(snapInObject) {
    if ("firstName" in snapInObject)
        document.getElementById("cusPreChat-FirstName").value = snapInObject.firstName;
    if ("lastName" in snapInObject)
        document.getElementById("cusPreChat-LastName").value = snapInObject.lastName;
    if ("email" in snapInObject)
        document.getElementById("cusPreChat-Email").value = snapInObject.email;
    if ("phoneNo" in snapInObject)
        document.getElementById("cusPreChat-Phone").value = snapInObject.phoneNo;
    if ("issueDescription" in snapInObject)
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
    let topFields = document.querySelector(".cusPreChat-sidebarBody .cusPreChat-prechatUI  .cusPreChat-embeddedServiceSidebarForm ul.cusPreChat-fieldList");
    let topFieldValues;
    if (snapInObject.productName == null)
        topFieldValues = '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.2em; text-align: left;position: relative;font-size: .75em;color: #444444;margin-bottom: 0px;"><div><b>' + preChatlableObject.serviceTag + ':</b> ' + snapInObject.serviceTag + '</div><div><b>' + preChatlableObject.issueType + ':</b> <span class="coveo-query" data-coveo-id="IssueDesc" id="preChatIssueDesc" style="font-size: 12px;">' + snapInObject.issueVal + '</span></div></div>';
    else
        topFieldValues = '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.2em; text-align: left;position: relative;font-size: .75em;color: #444444;"><div style="font-size: 1.2em;">' + snapInObject.productName + '</div><div><b>' + preChatlableObject.serviceTag + ':</b> ' + snapInObject.serviceTag + '</div><div><b>' + preChatlableObject.issueType + ':</b> <span class="coveo-query" data-coveo-id="IssueDesc" id="preChatIssueDesc" style="font-size:12px;">' + snapInObject.issueVal + '</span></div></div>';
    topFields.insertAdjacentHTML("afterbegin", topFieldValues);
}
function custPreFormValidation(preChatlableObject) {

    let acceptForm,
        firstNameDOM = document.getElementById("cusPreChat-FirstName"),
        lastNameDOM = document.getElementById("cusPreChat-LastName"),
        emailDOM = document.getElementById("cusPreChat-Email"),
        phoneDOM = document.getElementById("cusPreChat-Phone"),
        IssueDescDOM = document.getElementById("cusPreChat-IssueDescription");

    if (document.getElementById("ErrMsg_cusPreChat-Email")) {
        let element = document.getElementById("ErrMsg_cusPreChat-Email");
        element.parentNode.removeChild(element);
    }
    if (!emailDOM.value)
        acceptForm = cusPreChatEleIsEmpty(emailDOM, preChatlableObject.emailRequiredValidation);
    else
        acceptForm = cusPreChatInvalidEmail(emailDOM, preChatlableObject);

    if (document.getElementById("ErrMsg_cusPreChat-FirstName")) {
        acceptForm = false;
    } else if (!firstNameDOM.value)
        acceptForm = cusPreChatEleIsEmpty(firstNameDOM, preChatlableObject.firstNameValidation);

    if (document.getElementById("ErrMsg_cusPreChat-LastName")) {
        acceptForm = false;
    } else if (!lastNameDOM.value)
        acceptForm = cusPreChatEleIsEmpty(lastNameDOM, preChatlableObject.lastNameValidation);

    if (document.getElementById("ErrMsg_cusPreChat-Phone")) {
        acceptForm = false;
    } else if (!phoneDOM.value)
        acceptForm = cusPreChatEleIsEmpty(phoneDOM, preChatlableObject.phoneRequiredValidation);

    if (document.getElementById("ErrMsg_cusPreChat-IssueDescription")) {
        acceptForm = false;
    } else if (!IssueDescDOM.value)
        acceptForm = cusPreChatEleIsEmpty(IssueDescDOM, preChatlableObject.issueDescriptionValidation);

    if (acceptForm === undefined) acceptForm = true;
    return acceptForm;
}
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
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
function removeDomElementbyId(id) {
    if (document.getElementById(id)) {
        let element = document.getElementById(id);
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
    let errorMsgs = document.querySelectorAll(".cusPreChat-has-error");
    errorMsgs.forEach(function (errorMsg) {
        removeDomElement(errorMsg)
    });
    removecustFormValues();
    custPreFormShowIssueDetailsCharRemaining(preChatlableObject);

    CoveoPopoverDispose();
}
function maximizeCustPrechat() {
    //BNR
	let element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
    if((element && !element.classList.contains("helpButtonEnabled")) || !element){
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
function snapinChatGlobalObjNotEmpty() {
    snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
    if (snapInObjectGlobal != null)
        return true;
    else
        return false;
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
    document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = 'flex';
    document.getElementById("cusPreChat-hideWhileLoading").style.display = 'none';
    document.getElementById("cusPreChat-minimize-btn").style.display = 'none';
    document.getElementById("cusPreChat-close-btn").style.display = 'none';
    snapinChatInitiatedState(true);
    removeLoaderIn10();
}

function snapinQueueLoaded() {
    if (document.querySelector(".embeddedServiceSidebar") && document.getElementById("cusPreChatSnapinDom")) {
        document.querySelector(".embeddedServiceSidebar").style.display = 'block';
        document.getElementById("cusPreChatSnapinDom").style.display = 'none';
        document.getElementById("cusPreChat-alertMsgContainer").style.display = 'none';
        document.getElementById("cusPreChat-hideWhileLoading").style.display = 'block';
        document.getElementById("cusPreChat-minimize-btn").style.display = 'block';
        document.getElementById("cusPreChat-close-btn").style.display = 'block';
    }
}
function agentsOfflinePostChatForm() {
    //BNR
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
    //BNR
    setTimeout(function () {
        //let cusPreChatSnapinDom = document.getElementById("cusPreChatSnapinDom");
		let cusPreChatSnapinDom = document.getElementById("cusPreChat-sidebarLoadingIndicator");
        if (cusPreChatSnapinDom && window.getComputedStyle(cusPreChatSnapinDom).display != 'none') {
            document.getElementById("cusPreChatSnapinDom").style.display = 'none';
            if (document.querySelector(".embeddedServiceHelpButton"))
                document.querySelector(".embeddedServiceHelpButton").style.display = 'block';
        }
        //BNR
		let element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if(element && !element.classList.contains("helpButtonEnabled")) 
        //if (document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className != "uiButton helpButtonEnabled")
            snapinChatInitiatedState(false);
        hideResumeSnapinLoader();
    }, 30000);
}
function snapinChatInitiatedState(booleanValue) {
    //BNR
    snapInObject = sendGlobalSnapinObjToJson();
    snapInObject.snapinChatInitiated = booleanValue;
    saveGlobalSnapinObjToSession(snapInObject);
}
function custPrechatInitiateChat(snapInObject, preChatlableObject) {
    if (custPreFormValidation(preChatlableObject)) {
        snapInObject = addCustFormDetailsTo(snapInObject);
        saveGlobalSnapinObjToSession(snapInObject);
        pageObserverForProp20("body");
        loadingSnapinQueue();
        //console.log("BNR-4");
        removecustFormValues();
        custPreFormShowIssueDetailsCharRemaining(preChatlableObject);
        snapInObject = sendGlobalSnapinObjToJson();
        if ("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated)
            eleExistWithVariable('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
        eleExistWithVariable('.embeddedServiceSidebar .startButton', chatStarted, snapInObject);
    }

    CoveoPopoverDispose();
}

function initOriginalESW(gslbBaseURL, snapInObject) {
    snapInClickListners();
    snapinChatGlobalServiceTag = snapInObject.serviceTag;
    snapinChatGlobalIssueType = snapInObject.issueVal;
    snapinChatGlobalProductName = snapInObject.productName;
    embedded_svc.settings.displayHelpButton = true;
    embedded_svc.settings.defaultMinimizedText = 'Chat Now';

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';

    if ("language" in snapInObject)
        translatedLabels = translation(snapInObject.language);
    else
        translatedLabels = translation("en");
    embedded_svc.settings.language = translatedLabels.language;
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
    }, {
        "label": "Subject",
        "value": snapInObject.issueVal,
        "transcriptFields": ["Issue__c"]
    }, {
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
    });

    embedded_svc.addEventHandler("onChatEndedByAgent", function (data) {
        snapinChatInitiatedState(false);
    });
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
function triggerResumeSnapin(snapInObject) {
    try {
        if (snapinChatGlobalObjNotEmpty()) {
            showResumeSnapinLoader();
            let eleSelector = document.querySelector('.helpButtonEnabled #helpButtonSpan > .message');
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
                if ("language" in snapInObject)
                    translatedLabels = translation(snapInObject.language);
                else
                    translatedLabels = translation("en");
                embedded_svc.settings.language = translatedLabels.language;
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
                embedded_svc.settings.storageDomain = snapInObject.domainName;
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
            let domEle = '<div id="cusResumeSnapIn-loader" class="cusPreChat-embeddedServiceHelpButton"><div class="cusPreChat-helpButton" style="width: 168px;"><div class="cusPreChat-uiButton" style="cursor: default;"><div class="cusPreChat-helpButtonLabel"><span class="cusPreChat-message">Loading</span></div></div></div></div>';
            let body = document.body || document.getElementsByTagName('body')[0];
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
        //BNR
        if (("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated && document.querySelector(eleSelector).innerText === 'Chat Now') || (document.querySelector(eleSelector).innerText === 'Chat Now')) {
            // console.log("BNRclicked-3");
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
        //BNR
		let element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if(element && element.classList.contains("helpButtonEnabled")) 
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
            let state = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState();
            let prechatFields = state.get("v.prechatFields");
            //BNR Language POC [START]
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
                }
            });
            /*
            prechatFields.forEach(function (prechatField) {
                if (prechatField.label === "First Name") {
                    prechatField.value = snapInObject.c_firstName
                } else if (prechatField.label === "Last Name") {
                    prechatField.value = snapInObject.c_lastName
                } else if (prechatField.label === "Email Address") {
                    prechatField.value = snapInObject.c_email
                } else if (prechatField.label === "Primary Phone Number") {
                    prechatField.value = snapInObject.c_phoneNo
                } else if (prechatField.label === "Issue Description") {
                    prechatField.value = snapInObject.c_issueDescription
                }
            });
            */
            //BNR Language POC [END]
            state.set("v.prechatFields", prechatFields);
            callback();
        }
    } catch (e) {
        console.log("Error in:" + e);
    }
}

function translation(lang) {
    let language = lang.replace("_", "-");
    language = language.toLowerCase();
    this.primPhone = "Primary Phone Number";
    this.issueDesc = "Issue Description";
    if (language == "de") {
        this.firstName = "Vorname";
        this.lastName = "Nachname";
        this.emailAdd = "E-Mail";
        this.primPhone = "Primair telefoonnummer";
        this.issueDesc = "Probleem Beschrijving";
        this.language = "de";
    } else if (language == "ja") {
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "メール";
        this.primPhone = "主に使う電話番号";
        this.issueDesc = "問題の説明";
        this.language = "ja";
    } else if (language == "ko") {
        this.firstName = "이름";
        this.lastName = "성";
        this.emailAdd = "이메일";
        this.primPhone = "기본 전화 번호";
        this.issueDesc = "문제 설명";
        this.language = "ko";
    } else if (language == "es") {
        this.firstName = "Nombre";
        this.lastName = "Apellidos";
        this.emailAdd = "Correo electrónico";
        this.primPhone = "Número de teléfono primario";
        this.issueDesc = "descripcion del problema";
        this.language = "es";
    } else if (language == "cn" || language == "zh-cn") {
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "电子邮件";
        this.primPhone = "最常用的电话号码";
        this.issueDesc = "问题说明";
        this.language = "zh-CN";
    } else if (language == "zh-tw") {
        this.firstName = "名字";
        this.lastName = "姓氏";
        this.emailAdd = "電子郵件";
        this.language = "zh-TW";
    } else if (language == "pt") {
        this.firstName = "Nome";
        this.lastName = "Sobrenome";
        this.emailAdd = "Email";
        this.primPhone = "Número de Telefone Principal";
        this.issueDesc = "descrição do problema";
        this.language = "pt";
    } else if (language == "pt-br") {
        this.firstName = "Nome";
        this.lastName = "Sobrenome";
        this.emailAdd = "Email";
        this.primPhone = "Número de Telefone Principal";
        this.issueDesc = "descrição do problema";
        this.language = "pt-br";
    } else if (language == "nl" || language == "nl-nl") {
        this.firstName = "Voornaam", this.lastName = "Achternaam",
            this.emailAdd = "E-mail";
        this.primPhone = "Primair telefoonnummer";
        this.issueDesc = "Probleem Beschrijving";
        this.language = "nl";
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
        if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton")) {
            var clickedElement = event.target || event.srcElement;
            if (closestByTagName(clickedElement, 'button') != null) {
                switch (closestByTagName(clickedElement, 'button').className) {
                    case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.003", "ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "dialogButton dialog-button-1 uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.004", "ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.004", "ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.005", "ClickedOn Cancel Chat button while waiting in queue");
                        break;
                    case "closeButton headerItem":
                        callDellmetricsTrack("890.220.006", "ClickedOn Close (x) button");
                        break;
                    case "minimizeButton headerItem":
                        callDellmetricsTrack("890.220.007", "ClickedOn Minimize button");
                        break;
                    case "sidebarHeader minimizedContainer helpButton embeddedServiceSidebarMinimizedDefaultUI":
                        callDellmetricsTrack("890.220.008", "ClickedOn Maximize button");
                        break;
                    case "sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI":
                        callDellmetricsTrack("890.220.008", "ClickedOn Maximize button");
                        break;
                    case "uiButton helpButtonEnabled":
                    case "uiButton no-hover helpButtonEnabled":
                        if (document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").innerText == "Chat Now") {
                            snapInCurrentPage = null;
                            callDellmetricsTrack("890.220.001", "StartsChat for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);

                        } else
                            callDellmetricsTrack("890.220.001", "AgentOffline for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
                        break;
                    default:
                        if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
                            callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text);
                        }
                        break;
                }
            } else if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {

                callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text);

            }
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
                if (message)
                    dellmetricsTrack(propValue, message);
                else
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
            message.includes("申し訳ありません。チャットすることができません。 しばらくしてからもう一度お試しください。") ||
            message.includes("죄송합니다. 현재 귀하와 채팅할 수 없습니다. 나중에 다시 시도해주십시오.") ||
            message.includes("Lo sentimos, no se puede abrir una sesión de chat. Vuelva más tarde o inténtelo de nuevo.") ||
            message.includes("抱歉，我们无法和您聊天。 请稍后回来或重试。") ||
            message.includes("Lamentamos não poder conversar com você. Volte mais tarde ou tente novamente.") ||
            message.includes("Es tut uns Leid, aber momentan können wir nicht mit Ihnen chatten. Versuchen Sie es später noch einmal.") ||
            message.includes("Sorry that we are not able to chat with you. Come back later or try again.")
        )
    ) {
        return true;
    } else {
        return false;
    }
}

function pageObserverForProp20(eleSelector) {
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
                    snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
                    snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
                    snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
                    snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton");
                    if (snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm") {
                        snapInCurrentPage = "snapInPrechatForm";
                        //BNR: DEFECT 6915122[START]
                        document.querySelector(".modalContainer.embeddedServiceSidebar").style.display = "none";
                        snapinChatInitiatedState(false);
                        //BNR: DEFECT 6915122[END]
                    } else if (snapInWaiting && snapInCurrentPage != "snapInWaiting") {
                        snapInCurrentPage = "snapInWaiting";
                        callDellmetricsTrack("890.220.011");
                        snapinQueueLoaded();
                        hideResumeSnapinLoader();
                        snapinChatInitiatedState(false);
                    } else if (snapInChatStarted && snapInCurrentPage != "snapInChatStarted") {
                        snapInCurrentPage = "snapInChatStarted";
                        snapinQueueLoaded();
                        callDellmetricsTrack("890.220.013");
                        hideResumeSnapinLoader();
                        // snapinChatInitiatedState(true);
                    } else if (snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug") {
                        snapInCurrentPage = "snapInConfirmationDialoug";
                        snapinQueueLoaded();
                        callDellmetricsTrack("890.220.016", document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer").innerText);
                        hideResumeSnapinLoader();
                    } else if (snapInEmbeddedServiceHelpBtn && window.getComputedStyle(snapInEmbeddedServiceHelpBtn).display === 'block') {

                        if (snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnDisabled") {
                            snapInCurrentPage = "snapInhelpBtnDisabled";
                            //togglePrechatAndSnapin(snapInCurrentPage);
                            snapInhelpBtnDisabled.style.display = "none";
                            removeLoaderIn10();
                        } else if (snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnEnabled") {
                            if (snapInCurrentPage === "snapInhelpBtnDisabled")
                                document.getElementById("cusPreChatSnapinDom").style.display = "block";
                            snapInCurrentPage = "snapInhelpBtnEnabled";
                            //togglePrechatAndSnapin(snapInCurrentPage);
                            snapInhelpBtnEnabled.style.display = "none";
                        } else {
                            console.log("Snap-In: Not Loaded");
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

function waitChatCounter(eleSelector, findingEle, counterValue) {
    try {
        if (typeof (dellmetricsTrack) == "function") {
            if (dellmetricsTrack) {
                if (counterValue != document.querySelector(eleSelector).innerText) {
                    dellmetricsTrack("890.220.012", "Queue number: " + document.querySelector(eleSelector).innerText);
                    clearInterval(findingEle);
                    if (document.querySelector(eleSelector).innerText > 0 && document.querySelector(eleSelector).innerText != "You're up next!") {
                        eleExistWithVariable('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .waitingStateContent .queuePositionContent .header', waitChatCounter, document.querySelector(eleSelector).innerText);
                    }
                }
            } else {
                clearInterval(findingEle);
            }
        } else {
            clearInterval(findingEle);
        }
    } catch (e) {
        console.log("Error in:" + e);
    }
}
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
            //BNR
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
    //BNR
    callDellmetricsTrack("890.220.077");
    liveagent.startChat(buttonId);
}
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

/////////////////////////////ChatBot Code///////////////////////////////////

function triggerChatBot(chatBotObject) {
    console.log(chatBotObject);
    //If user clicks on Start chat
    openBotPrechatform(chatBotObject);

    //Post eSupport's prechat form initiate chat in the background
    initiateChatBot(chatBotObject);
    HideLoadingImage();
}
function clickStartChatBot(eleSelector, findingEle) {
    document.querySelector(eleSelector).click();
    clearInterval(findingEle);
}
function initiateChatBot(chatBotObject) {
    //Clickstart chatr
    eleExist(".embeddedServiceHelpButton .helpButton .helpButtonEnabled", clickStartChatBot);
    OmniChatBotTrackerListner();
    AddElementToPage();
    //console.log(chatBotObject);
    if (chatBotObject == undefined && sessionStorage.getItem("chatBotObjectSession") != null) {
        chatBotObject = JSON.parse(sessionStorage.getItem("chatBotObjectSession"));
    } else {
        sessionStorage.setItem("chatBotObjectSession", JSON.stringify(chatBotObject));
        //sessionStorage.setItem("isChatBotActive", 'true');
    }
    var initESW = function (gslbBaseURL) {
        //FIX for CSS related issue in Chat bot[START]
        if (!document.getElementById('chatBotStyle')) {
            let css = '.embeddedServiceLiveAgentStateChatHeader .message,.embeddedServiceLiveAgentStateChatHeaderOption .optionName,.embeddedServiceSidebarFormField .uiInput .uiLabel-left{font-size:.75em!important}.embeddedServiceLiveAgentStateChatPlaintextMessageDefaultUI.plaintextContent,.embeddedServiceSidebarDialogState #dialogTextBody,.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select,.embeddedServiceSidebarHeader .shortHeader,.embeddedServiceSidebarMinimizedDefaultUI .minimizedText{font-size:.875em!important}.embeddedServiceSidebar .headerItem,.embeddedServiceSidebarButton{font-size:1em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button__icon{width:1.5em!important;height:1.5em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button_icon-container-more{line-height:1.875em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-dropdown-trigger{padding:.5em .5em!important}';
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
        }
        //FIX for CSS related issue in Chat bot[END]
        snapinBotPageObserver('body');
        embedded_svc.settings.displayHelpButton = false;
        //embedded_svc.settings.language = '';
        //embedded_svc.settings.avatarImgURL = '';
        //embedded_svc.settings.prechatBackgroundImgURL = '';
        //embedded_svc.settings.waitingStateBackgroundImgURL = '';
        //embedded_svc.settings.smallCompanyLogoImgURL = '';
        embedded_svc.settings.extraPrechatFormDetails = [

            { "label": "Transcript From", "value": "ChatBot", "transcriptFields": ["Transcript_From__c"], "displayToAgent": true },
            { "label": "Service Tag",/* "value": chatBotObject.Service_Tag,*/ "transcriptFields": ["Service_Tag__c"], "displayToAgent": true },
            { "label": "Phone", /*"value": '00 61 2 9876', */"transcriptFields": ["ContactNumber__c"], "displayToAgent": true },
            { "label": "First Name", /*"value": chatBotObject.FirstName, */"transcriptFields": ["FirstName__c"], "displayToAgent": true },
            { "label": "Last Name", /*"value": chatBotObject.LastName, */"transcriptFields": ["LastName__c"], "displayToAgent": true },
            { "label": "Email Address", /*"value":chatBotObject.Email,*/ "transcriptFields": ["Email__c"], "displayToAgent": true },
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
            { "label": "Application_Context", "value": chatBotObject.applicationContext, "transcriptFields": ["Application_Context__c"], "displayToAgent": true },
        ];
        var firstNameVal = null,
            lastNameVal = null,
            emailVal = null,
            primePhoneVal = null,
            ServiceTagVal = null;

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



        embedded_svc.settings.prepopulatedPrechatFields = {
            FirstName: firstNameVal,
            LastName: lastNameVal,
            Email: emailVal,
            Phone: primePhoneVal,
            Service_Tag__c: ServiceTagVal
        };

        embedded_svc.settings.extraPrechatInfo = [{
            "entityFieldMaps": [{
                "doCreate": true,
                "doFind": true,
                "fieldName": "LastName",
                "isExactMatch": true,
                "label": "Last Name"
            }, {
                "doCreate": true,
                "doFind": true,
                "fieldName": "FirstName",
                "isExactMatch": true,
                "label": "First Name"
            }, {
                "doCreate": true,
                "doFind": true,
                "fieldName": "Email",
                "isExactMatch": true,
                "label": "Email Address"
            }],
            "entityName": "Contact",
            "saveToTranscript": "ContactId"
            //"linkToEntityName": "Live_Chat_Transcript"
        }, {
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
            "entityFieldMaps": [/*{
                        "doCreate": false,
                        "doFind": true,
                        "fieldName": "Issue_Description__c",
                        "isExactMatch": true,
                        "label": "Issue Description"
                }, */
                {
                    "doCreate": false,
                    "doFind": true,
                    "fieldName": "AssetId",
                    "isExactMatch": true,
                    "label": "Asset"
                }
            ],
            "entityName": "Case"
            //  "saveToTranscript": ""
        }
        ];
        embedded_svc.settings.chatbotAvatarImgURL = 'https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product_images/esupport/icons/digital_resolution_ux_avatar_sm_v1.png';
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

    let snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
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
function ResgisterChatBotHandler() {
    embedded_svc.addEventHandler("onAgentMessage", function (data) {
        console.log('onAgentMessage event triggerred');
        bindHandler();
        sessionStorage.setItem("isChatBotActive", 'true');
    });
    embedded_svc.addEventHandler("onChatEndedByChasitor", function (data) {
        console.log('onChatEndedByChasitor event triggerred');
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
        StoreChatBotSessionKey(data.liveAgentSessionKey);
        callDellmetricsTrackForBot("880.130.863", data.liveAgentSessionKey);
    });

    embedded_svc.addEventHandler("onChatEstablished", function (data) {
        callDellmetricsTrackForBot("880.130.864", data.liveAgentSessionKey);
        setTimeout(function () {
            var hamburgerMenuIconDOM = document.querySelector(".slds-dropdown-trigger_click .slds-button.slds-button_icon.slds-button_icon-container-more");
            hamburgerMenuIconDOM.addEventListener("click", function () {
                callDellmetricsTrackForBot("880.130.861", data.liveAgentSessionKey);
            });
            var chatButtons = document.querySelectorAll(".embeddedServiceLiveAgentStateChatHeaderOption");

            chatButtons[0].addEventListener("click", function () {
                callDellmetricsTrackForBot("880.130.859", data.liveAgentSessionKey);
            });
            chatButtons[1].addEventListener("click", function () {
                callDellmetricsTrackForBot("880.130.860", data.liveAgentSessionKey);
            });
        }, 300);

    });

    embedded_svc.addEventHandler("onChasitorMessage", function (data) {


        setTimeout(function () {
            var nodes = document.querySelectorAll(".chatContent");
            var lastmessage = nodes[nodes.length - 1];
            if (lastmessage.innerText === "Transfer to Agent")
                callDellmetricsTrackForBot("880.130.862", data.liveAgentSessionKey);
        }, 300);

    });
}
//Not requiredfor now BNR
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
            if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton")) {
                var clickedElement = event.target || event.srcElement;
                if (closestByTagName(clickedElement, 'button') != null) {
                    switch (closestByTagName(clickedElement, 'button').className) {
                        /*case "startButton uiButton--default uiButton embeddedServiceSidebarButton":
                            callDellmetricsTrackForBot("880.130.853");
                            break;*/
                        case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                            callDellmetricsTrackForBot("880.130.856");
                            break;
                        case "closeButton headerItem":
                            callDellmetricsTrackForBot("880.130.855");
                            break;
                        case "minimizeButton headerItem":
                            callDellmetricsTrackForBot("880.130.854");
                            break;
                        case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                            if (event.target.innerText === "Leave" && event.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Leave?")
                                callDellmetricsTrackForBot("880.130.857");
                            break;
                        case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                            if (event.target.innerText === "Continue to Wait" && event.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Leave?")
                                callDellmetricsTrackForBot("880.130.858");
                            break;
                    }
                }
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
                dellmetricsTrack(propValue, "chatsessionid:" + message);
            else
                dellmetricsTrack(propValue);
        }
    }
}

/*** Prechat Form Code [START] ****/
//Call this function on click of start chat
function openBotPrechatform(chatBotObject) {
    if (!document.getElementById("cusBotPreChatSnapinDom")) {
        callDellmetricsTrackForBot("880.130.852");
        createBotCustPreChat(chatBotObject);
    } else {
        //If the form is already avilable[START] 
        let serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
            minimizedDefaultUI = document.querySelector(".embeddedServiceSidebar .embeddedServiceSidebarMinimizedDefaultUI");
        if (serviceSidebar && serviceSidebar.style.display == "none") { //if prechat form is open: Open custom prechat form
            callDellmetricsTrackForBot("880.130.852");
            document.getElementById("cusBotPreChat-helpButtonEnabled").click();
        } else if (minimizedDefaultUI)//If chat has already started try to maximize the chat window
            minimizedDefaultUI.click();
        else //If chat has not yet initiated still open prechat form
            document.getElementById("cusBotPreChat-helpButtonEnabled").click();
        //If the form is already avilable[END]
    }
}
function createBotCustPreChat(chatBotObject) {
    let fixedLabelsDomEle = createFixedLabels(chatBotObject);
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
    let product_ModelDomEle = '', issue_DescriptionDomEle = '';
    if ("product_Model" in chatBotObject && !(chatBotObject.product_Model === "" || chatBotObject.product_Model === null || chatBotObject.product_Model === undefined)) {
        product_ModelDomEle = '<div style="font-size: 1.2em;">' + chatBotObject.product_Model + '</div>';
    }
    if ("issue_Description" in chatBotObject && !(chatBotObject.issue_Description === "" || chatBotObject.issue_Description === null || chatBotObject.issue_Description === undefined)) {
        issue_DescriptionDomEle = '<div><b>Issue:</b> ' + chatBotObject.issue_Description + '</div>';
    }
    return '<div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 1em 0px 0px 15px; text-align: left;position: relative;font-size: .75em;color: #444444;" bis_skin_checked="1">' + product_ModelDomEle + issue_DescriptionDomEle + '<div> <b>Service Tag:</b> <span  id="botServiceTagLabel">' + chatBotObject.Service_Tag + '</span></div></div>';
}
function startSnapinChatBot(chatBotObject) {
    if (chatBotFieldsValidated()) {
        //loadingSnapinQueue
        callDellmetricsTrackForBot("880.130.853");
        loadingSnapinBotQueue();
        chatBotObject = addCustBotFormDetailsTo(chatBotObject);
        saveGlobalSnapinBotObjToSession(chatBotObject);
        eleExistWithVariable('.embeddedServiceSidebar .startButton', ChatBotStarted, chatBotObject);
    }
}
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
        let serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
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
    let state = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState();
    let prechatFields = state.get("v.prechatFields");
    prechatFields.forEach(function (prechatField) {
        if (prechatField.name === "FirstName") {
            prechatField.value = snapInObject.c_firstName
        } else if (prechatField.name === "LastName") {
            prechatField.value = snapInObject.c_lastName
        } else if (prechatField.name === "Email") {
            prechatField.value = snapInObject.c_email
        } else if (prechatField.name === "Phone") {
            prechatField.value = snapInObject.c_phoneNo
        } else if (prechatField.name === "Service_Tag__c") {
            prechatField.value = snapInObject.Service_Tag
        }
        else
            console.log("ValueName" + prechatField.name);
    });
    state.set("v.prechatFields", prechatFields);
}
function custMinimizeBtnClickedInBot() {
    callDellmetricsTrackForBot("880.130.854");
    minimizeCustBotPrechat();
}
function minimizeCustBotPrechat() {
    document.getElementById("cusBotPreChat-embeddedServiceHelpButton").style.display = 'block';
    document.getElementById("cusBotPreChatSnapinDom").style.display = 'none';
}
function custCloseBtnClickedInBot() {
    callDellmetricsTrackForBot("880.130.855");
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
    if ("First_Name" in chatBotObject)
        document.getElementById("cusBotPreChat-FirstName").value = chatBotObject.First_Name;
    if ("Last_Name" in chatBotObject)
        document.getElementById("cusBotPreChat-LastName").value = chatBotObject.Last_Name;
    if ("Email" in chatBotObject)
        document.getElementById("cusBotPreChat-Email").value = chatBotObject.Email;
    if ("Phone" in chatBotObject)
        document.getElementById("cusBotPreChat-Phone").value = chatBotObject.Phone;
    if ("Service_Tag" in chatBotObject) {
        // document.getElementById("cusBotPreChat-ServiceTag").value = chatBotObject.Service_Tag;
        document.getElementById("botServiceTagLabel").innerText = chatBotObject.Service_Tag;
    }

}
/**Code to Prepopulate prechat fields[END] **/
//BOT Validations[START]
function chatBotFieldsValidated() {
    let acceptForm,
        firstNameDOM = document.getElementById("cusBotPreChat-FirstName"),
        lastNameDOM = document.getElementById("cusBotPreChat-LastName"),
        emailDOM = document.getElementById("cusBotPreChat-Email"),
        phoneDOM = document.getElementById("cusBotPreChat-Phone");
    //serviceTagDOM = document.getElementById("cusBotPreChat-ServiceTag");

    if (document.getElementById("ErrMsg_cusBotPreChat-Email")) {
        let element = document.getElementById("ErrMsg_cusBotPreChat-Email");
        element.parentNode.removeChild(element);
    }
    if (!emailDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(emailDOM, "This is a required field");
    else
        acceptForm = cusBotPreChatInvalidEmail(emailDOM, "Invalid Email id");

    if (document.getElementById("ErrMsg_cusBotPreChat-FirstName") && !firstNameDOM.value) {
        acceptForm = false;
    } else if (!firstNameDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(firstNameDOM, "This is a required field");
    else if (document.getElementById("ErrMsg_cusBotPreChat-FirstName")) {
        let element = document.getElementById("ErrMsg_cusBotPreChat-FirstName");
        element.parentNode.removeChild(element);
    }

    if (document.getElementById("ErrMsg_cusBotPreChat-LastName") && !lastNameDOM.value) {
        acceptForm = false;
    } else if (!lastNameDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(lastNameDOM, "This is a required field");
    else if (document.getElementById("ErrMsg_cusBotPreChat-LastName")) {
        let element = document.getElementById("ErrMsg_cusBotPreChat-LastName");
        element.parentNode.removeChild(element);
    }
    if (document.getElementById("ErrMsg_cusBotPreChat-Phone") && !phoneDOM.value) {
        acceptForm = false;
    } else if (!phoneDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(phoneDOM, "This is a required field");
    else if (document.getElementById("ErrMsg_cusBotPreChat-Phone")) {
        let element = document.getElementById("ErrMsg_cusBotPreChat-Phone");
        element.parentNode.removeChild(element);
    }
    /*
    if (document.getElementById("ErrMsg_cusBotPreChat-ServiceTag") && !serviceTagDOM.value) {
        acceptForm = false;
    } else if (!serviceTagDOM.value)
        acceptForm = cusBotPreChatEleIsEmpty(serviceTagDOM, "This is a required field");
    else if (document.getElementById("ErrMsg_cusBotPreChat-ServiceTag")) {
            let element = document.getElementById("ErrMsg_cusBotPreChat-ServiceTag");
            element.parentNode.removeChild(element);
        }
    */
    if (acceptForm === undefined) acceptForm = true;
    return acceptForm;
}
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
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
function custBotPreChatKeypressFieldValidation() {
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

}
//BOT Validations[END]

function addCustBotFormDetailsTo(snapInObject) {
    snapInObject.c_firstName = document.getElementById("cusBotPreChat-FirstName").value;
    snapInObject.c_lastName = document.getElementById("cusBotPreChat-LastName").value;
    snapInObject.c_email = document.getElementById("cusBotPreChat-Email").value;
    snapInObject.c_phoneNo = document.getElementById("cusBotPreChat-Phone").value;
    snapInObject.c_serviceTag = document.getElementById('botServiceTagLabel').innerText;
    return snapInObject;
}
function saveGlobalSnapinBotObjToSession(chatBotObject) {
    if (chatBotObject) {
        let chatBotObjectGlobal = JSON.stringify(chatBotObject);
        sessionStorage.setItem("chatBotObjectSession", chatBotObjectGlobal);
    }
}
/*** Prechat Form Code [END] ****/

/*****Obesrve ChatBot Page [START]*****/
function snapinBotPageObserver(eleSelector) {
    try {
        let snapInLoadingPrechatForm = document.querySelector(".modalContainer.loading.initialLoading");
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
    } catch (e) { console.log('Error in Observer - ' + e) }
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
        console.log("Error in:" + e);
    }
}
/****CODE FOR DIRECT LOADING OF PRECHAT FORM ENDS*********/

