var snapinChatGlobalIssueType, snapinChatGlobalServiceTag, snapinChatGlobalProductName = null, snapInCurrentPage = null, trackevent = true;
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
	
	if(!document.getElementById('snapinStyle')){
		var css = '.embeddedServiceSidebarHeader,.embeddedServiceSidebarMinimizedDefaultUI{background-color:#00447C!important;border:1px!important}.embeddedServiceSidebarFormField .uiInput .uiLabel-left{padding-top:0!important;margin-top:11px;color:#444!important;font-weight:300!important}.embeddedServiceSidebarForm.formContent{background:#f1f1f1!important}.embeddedServiceHelpButton .helpButton .uiButton{background-color:#005290!important;font-family:"Salesforce Sans",sans-serif}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:#005290 solid 1px}.embeddedServiceSidebarForm .uiButton,.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important;border:none!important}.embeddedServiceSidebarForm.buttonWrapper{background:linear-gradient(to bottom,rgba(247,247,247,0) 0,rgba(247,247,247,1) calc(100% - 77px),rgba(247,247,247,1) 100%)}.embeddedServiceSidebarButton.uiButton--inverse{background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus{box-shadow:0 0 3px 0 #ddd!important}.embeddedServiceSidebarDialogState .dialogButton{border-radius:0!important}.embeddedServiceSidebarDialogState .dialogButton:not(:disabled):focus{text-decoration:none!important}.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select{color:#444!important}.embeddedServiceSidebarForm .fieldList{margin:12px 12px 0 0!important}.embeddedServiceLiveAgentStateChatHeaderOption .optionName{color:#fff!important;text-decoration:none!important}.embeddedServiceSidebarHeader .headerText{margin-bottom:0!important}.embeddedServiceSidebarMinimizedDefaultUI .minimizedImage{display:none!important}.embeddedServiceLiveAgentStateChatHeader.reconnecting.alert{background-color:#cb2b19!important;padding-top:46px!important}.embeddedServiceSidebarForm.buttonWrapper{background-color:#f1f1f1!important}.cusPreChat-modalContainer,.cusPreChat-shortHeader{font-weight:400;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus,.cusPreChat-headerItem:focus,.cusPreChat-headerItem:hover{outline:0}.cusPreChat-modalContainer{box-sizing:border-box;line-height:1.5;color:#212529;display:block;position:fixed;z-index:1001;font-family:"Salesforce Sans",sans-serif;top:0;font-size:16px;pointer-events:all;backface-visibility:hidden;text-align:left}.cusPreChat-modalContainer li,.cusPreChat-modalContainer ul{display:block;list-style:none}.cusPreChat-dockableContainer{width:320px;max-height:720px;border-radius:8px 8px 0 0;position:fixed;left:auto;bottom:0;right:20px;margin:0;height:90%;box-shadow:2px 2px 20px rgba(0,0,0,.2);z-index:15;text-align:center;overflow:hidden;max-width:40em;pointer-events:all}.cusPreChat-embeddedServiceSidebarHeader{position:absolute;top:0;width:100%;border-radius:8px 8px 0 0;background-color:#00447C;border:1px;text-align:center;pointer-events:all}.cusPreChat-shortHeader{color:#fff;border-radius:8px 8px 0 0;line-height:3;text-align:center;font-size:.875em;height:44px;clear:both;overflow:hidden;z-index:3;position:relative;transform:translate3d(0,0,0)}.cusPreChat-shortHeaderContent{position:relative;display:flex;height:100%}.cusPreChat-headerItem{color:#fff;font-size:1em;background:0 0;border:none}.cusPreChat-headerItem:focus:before,.cusPreChat-headerItem:hover:before{content:" ";position:absolute;background-color:#fff;opacity:.2;border-radius:4px;box-sizing:border-box;pointer-events:none;top:20%}.cusPreChat-closeButton,.cusPreChat-minimizeButton{transition:color .7s ease;padding:14px;line-height:0}.cusPreChat-minimizeButton:focus:before,.cusPreChat-minimizeButton:hover:before{left:6px;width:30px;height:60%}.cusPreChat-closeButton:focus:before,.cusPreChat-closeButton:hover:before{right:6px;width:30px;height:60%}.cusPreChat-assistiveText{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.cusPreChat-embeddedServiceIcon{display:flex}.cusPreChat-embeddedServiceIcon svg{display:inline-block;box-sizing:border-box;width:1em;height:1em;fill:#fff}.cusPreChat-headerText{display:flex;justify-content:center;align-items:center;flex-grow:1;align-self:stretch;width:calc(100% - 96px);color:#fff;text-decoration:none;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:1em}.cusPreChat-sidebarBody{position:absolute;width:100%;height:100%;top:44px;z-index:0;background-color:#f1f1f1;transform:translate3d(0,0,0);-webkit-overflow-scrolling:touch}.cusPreChat-sidebarLoadingIndicator{position:relative;height:100%;background-color:#fff}.cusPreChat-activeFeature{width:100%;height: 100%}.cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI{overflow:hidden;height:100%;position:absolute}.cusPreChat-formContent{width:320px;height:calc(100% - 44px);overflow-y:auto;position:relative;background-color:#f1f1f1;margin-bottom:81px;border-radius:0 0 8px 8px}.cusPreChat-fieldList{margin:12px 12px 0 0;padding:0}.cusPreChat-embeddedServiceSidebarFormField{display:block;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0;padding-inline-start:40px;list-style:none;padding:0;box-sizing:border-box;margin-left:12px}.cusPreChat-embeddedServiceSidebarFormField.cusPreChat-inputSplitName{width:calc(50% - 12px);display:inline-block;vertical-align:top;margin-left:9px}.cusPreChat-split-field-container{margin-bottom:6px}.cusPreChat-uiInput{text-align:left}.cusPreChat-uiInput .cusPreChat-uiLabel-left{padding-top:0!important;color:#444!important;font-weight:300!important;position:relative;font-size:.75em;line-height:1.5;margin:11px .75em 2px .5em}.cusPreChat-uiInput .cusPreChat-required{position:absolute;color:#c23934;left:-6px;top:0}.cusPreChat-slds-style-inputtext{display:inline-block;line-height:30px;box-sizing:border-box;box-shadow:none;background-color:#fff;width:100%;height:44px !important;padding:0 12px !important;font-size:.875em;border:none !important;}.cusPreChat-slds-style-inputtext:focus{outline:0;box-shadow:0 0 2px 0 #007db8}.cusPreChat-buttonWrapper{text-align:center;padding:0px 24px 24px;margin:0;width:320px;position:fixed;box-sizing:border-box;bottom:44; box-shadow: 0px -10px 5px rgba(241, 241, 241,0.7); backdround: #f1f1f1}.cusPreChat-embeddedServiceSidebarButton{background:#007db8;font-family:"Roboto Regular",sans-serif;border-radius:0!important;position:relative;border:none;text-shadow:none;box-shadow:none;transition:background .4s ease;color:#fff;font-size:1em;font-weight:400;width:100%;margin:0;height:44px;cursor:pointer}.cusPreChat-embeddedServiceSidebarButton:not(:disabled):focus,.cusPreChat-embeddedServiceSidebarButton:not(:disabled):hover{background:#004b6e}.cusPreChat-has-error{margin:0 0 6px;padding:0}.cusPreChat-has-error .cusPreChat-form-element__help{font-size:.75em;margin-top:.5rem;color:#c23934}.cusPreChat-embeddedServiceHelpButton{display:block;position:fixed;top:0;left:0;background:0 0;box-shadow:none;overflow:visible;z-index:1000;font-family:sans-serif}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:12px;right:12px;height:46px;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton{box-sizing:border-box;margin:0;padding:0 12px;height:46px;box-shadow:0 0 12px 0 rgba(0,0,0,.5);border-radius:23px;line-height:1;background:#007db8;font-size:.875em;color:#fff;font-weight:400;text-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-family:"Roboto Regular",sans-serif;width:168px;cursor:pointer;position:relative;border:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:hover::before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:23px;background-color:#000;opacity:.2;pointer-events:none}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton .cusPreChat-label{color:#fff}.cusPreChat-embeddedServiceHelpButton .cusPreChat-uiButton .cusPreChat-helpButtonLabel{position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%;line-height:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media only screen and (min-width:48em){.cusPreChat-embeddedServiceHelpButton{background-color:transparent}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:hover::before{border-radius:8px 8px 0 0}}.cusPreChat-sidebarLoadingIndicator{align-self:stretch;max-height:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;padding:0 24px}.cusPreChat-loadingBallContainer{display:inline-block}.cusPreChat-loadingBallContainer.cusPreChat-animated .cusPreChat-loadingBall{animation:cusPreChat-ballanimate 2.25s infinite ease-in-out;display:inline-block;width:1em;height:1em;border-radius:2em;font-size:8px;text-align:center;background:#0074bd;margin:3px}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-second{animation-name:cusPreChat-ballanimate-2}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-third{animation-name:cusPreChat-ballanimate-3}@keyframes cusPreChat-ballanimate{0%,32%{transform:scale(1)}16%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-2{32%,64%{transform:scale(1)}48%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-3{64%,96%{transform:scale(1)}80%{transform:scale(1.5)}}',
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');
		style.type = 'text/css';
		style.id = 'snapinStyle';
		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}
	
		head.appendChild(style);
	}
})();

function hideDomObject(eleSelector, findingEle) {
	try{
		document.querySelector(eleSelector).style.display = 'none';
		clearInterval(findingEle);
	}catch(e){
		console.log("Error in:"+ e);
	}
}

function initSnapIn(snapInObject) {
	if (window.embedded_svc) {
		initOriginalESW(snapInObject.serviceForceURL,snapInObject);
		
	}else{
		var s = document.createElement('script');
		s.setAttribute('src', snapInObject.snapInJs);
		s.onload = function() {
			initOriginalESW(null,snapInObject);
		};
		document.body.appendChild(s);
	}
}

function triggerSnapin(snapInObject) {
	if(snapInObject === undefined && history.length > 1 && snapinChatGlobalObjNotEmpty()){
		snapInObject = sendGlobalSnapinObjToJson();
		if("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated){
			eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
			pageObserverForProp20("body");
			initSnapIn(snapInObject);
		}		
	}else if(snapInObject){
		if(!snapInObject.snapinButtonClicked){
			eleExist('.embeddedServiceHelpButton', hideDomObject);
			eleExist('.embeddedServiceSidebar', hideDomObject);
			saveGlobalSnapinObjToSession(snapInObject);
			eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
			if(document.getElementById('cusPreChatSnapinDom'))
				custPreChatShowAdditionalDetailsInUi(snapInObject);
			initSnapIn(snapInObject);
		}else if(customChatNotCreated()){
			snapInObject = sendGlobalSnapinObjToJson();
			appendCustPreChatSnapinDom(snapInObject);
		}
	}
}
function customChatNotCreated(){
	let cusPreChatHelpBtn = document.getElementById('cusPreChat-embeddedServiceHelpButton');
	if(cusPreChatHelpBtn && window.getComputedStyle(cusPreChatHelpBtn).display != "none"){
		document.getElementById("cusPreChat-helpButtonEnabled").click();
		return false;
	}else
		return true;
}
function appendCustPreChatSnapinDom(snapInObject){
	if(!document.getElementById('cusPreChatSnapinDom')){
		let domEle = '<div id="cusPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer"><div class="cusPreChat-embeddedServiceSidebarHeader"><div class="cusPreChat-shortHeader"><div class="cusPreChat-shortHeaderContent"> <button id="cusPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> </path> </svg> </span> </button><h2 class="cusPreChat-headerText"><div class="cusPreChat-headerTextContent"> <span id="cusPreChat-headerTextLabel">Chat Now</span> <span id="cusPreChat-headerSubtext"> </span></div></h2> <button id="cusPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button></div></div></div><div class="cusPreChat-sidebarBody"><div id="cusPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"><div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"><div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"><div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"><div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"><ul class="cusPreChat-fieldList"><div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 0 1.5em 6px 1.5em; text-align: left;position: relative;font-size: .75em;color: #444444;"><div style="font-size: 1.2em;">Precision M4500</div><div> <b>Service Tag:</b> 123432</div><div> <b>Issue:</b> Keyboard not working</div></div><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">First Name</span> <span class="cusPreChat-required">*</span> </label> <input id="cusPreChat-FirstName" class="cusPreChat-FirstName cusPreChat-slds-style-inputtext cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" id="FirstName" aria-required="true"></div></span></li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">Last Name</span> <span class="cusPreChat-required" aria-hidden="true">*</span> </label> <input id="cusPreChat-LastName" class="cusPreChat-LastName cusPreChat-slds-style-inputtext cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" id="LastName" aria-required="true"></div> </span></li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>Email Address</span> <span class="cusPreChat-required" aria-hidden="true">*</span> </label> <input id="cusPreChat-Email" class="cusPreChat-Email cusPreChat-slds-style-inputtext cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" id="Email" aria-required="true"></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>Primary Phone Number</span> <span class="cusPreChat-required" aria-hidden="true">*</span> </label> <input id="cusPreChat-Phone" class="cusPreChat-Primary_Phone__c cusPreChat-slds-style-inputtext cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" id="Primary_Phone__c" aria-required="true"></div></li><li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>Issue Description</span> <span class="cusPreChat-required" aria-hidden="true">*</span> </label> <input id="cusPreChat-IssueDescription" class="cusPreChat-Issue_Description__c cusPreChat-slds-style-inputtext cusPreChat-input" maxlength="255" type="text" aria-describedby="" placeholder="" required="" id="Issue_Description__c"><div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / 255 characters</div></div></li></ul><div style="font-size: 12px;color:#767676;text-align: left;margin: 2em 1.75em; font-style: italic;color:#444444;"><b>Your privacy is important to us.</b> We will only use your information to process your request. We will not share it with anyone. To learn more about how we use and protect your data, see the <a href="https://www.dell.com/learn/policies-privacy?s=corp">Dell Privacy Statement</a>.</div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">Start Chat</span> </button></div></div></div></div></div></div></div></div><div id="cusPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"><div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)" > <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span><div class="cusPreChat-helpButtonLabel" id="cusPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">Chat Now</span></div> </button></div></div>';
		let body = document.body || document.getElementsByTagName('body')[0];
		body.insertAdjacentHTML('beforeend', domEle);

		callDellmetricsTrack("890.220.010");
		prePopulateCustPreFormValues(snapInObject);
		custPreFormShowIssueDetailsCharRemainingOnKeyUp();
		custPreChatKeypressFieldValidation();
		custPreChatShowAdditionalDetailsInUi(snapInObject);
		document.getElementById("cusPreChat-startChat").addEventListener("click", function(){custPrechatInitiateChat(snapInObject)});
		document.getElementById("cusPreChat-minimize-btn").addEventListener("click", minimizeCustPrechat);
		document.getElementById("cusPreChat-close-btn").addEventListener("click", closeCustPrechat);
		document.getElementById("cusPreChat-helpButtonEnabled").addEventListener("click", maximizeCustPrechat);
	}else{
		console.log("show prechat for if hidden");
	}
}
function prePopulateCustPreFormValues(snapInObject){
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
function custPreFormShowIssueDetailsCharRemainingOnKeyUp() {
	try{	
			document.getElementById("cusPreChat-IssueDescription").onkeyup = function(){
				custPreFormShowIssueDetailsCharRemaining();
				};
				}catch(e){
		console.log("Error in:"+ e);
	}
}
function custPreFormShowIssueDetailsCharRemaining(){
	maxCharLength = 255, innerTextColor = "#767676",
	currentCharLength = document.getElementById("cusPreChat-IssueDescription").value.length;
	document.getElementById("snappinCharCounter").innerText = currentCharLength + " / " + maxCharLength + " characters";
	if(currentCharLength === maxCharLength){
		innerTextColor = "#c23934";
	}else{
		innerTextColor = "#767676";
	}
	document.getElementById("snappinCharCounter").style.color = innerTextColor;	
}
function custPreChatKeypressFieldValidation() {
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
		else if(document.getElementById("ErrMsg_"+e.path[0].id))
			removeDomElementbyId("ErrMsg_"+e.path[0].id);
	}
	document.getElementById('cusPreChat-FirstName').onkeypress = function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k==8 || k==9))
			e.preventDefault();
		else if(document.getElementById("ErrMsg_"+e.path[0].id))
			removeDomElementbyId("ErrMsg_"+e.path[0].id);
	}
	document.getElementById('cusPreChat-LastName').onkeypress = function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k==8 || k==9))
			e.preventDefault();
		else if(document.getElementById("ErrMsg_"+e.path[0].id))
			removeDomElementbyId("ErrMsg_"+e.path[0].id);
	}
	document.getElementById("cusPreChat-Email").onkeypress = function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 48 && k < 58) || (k == 45) || (k == 46) || (k == 95) || k==8 || k==9))
			e.preventDefault();
		else if(document.getElementById("ErrMsg_"+e.path[0].id))
			removeDomElementbyId("ErrMsg_"+e.path[0].id);
	}
	document.getElementById("cusPreChat-IssueDescription").onkeypress = function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (k == 62 || k == 60)
			e.preventDefault();
		else if(document.getElementById("ErrMsg_"+e.path[0].id)){
			removeDomElementbyId("ErrMsg_"+e.path[0].id);
		}
	}

	document.getElementById("cusPreChat-FirstName").addEventListener("paste", function (e) {
		checkForSpecialCharAndText(e);
	});
	document.getElementById("cusPreChat-LastName").addEventListener("paste", function (e) {
		checkForSpecialCharAndText(e);
	});
	document.getElementById("cusPreChat-IssueDescription").addEventListener("paste", function (e) {
		if (pastedText(e).includes('<') || pastedText(e).includes('>')) {
			e.preventDefault();
			alert("You are trying to paste an invalid text.");
		}else if(document.getElementById("ErrMsg_"+e.path[0].id))
		removeDomElementbyId("ErrMsg_"+e.path[0].id);
	});
	document.getElementById("cusPreChat-Email").addEventListener("paste", function (e) {
		var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
		if (format.test(pastedText(e)) == true) {
			e.preventDefault();
			alert("You are trying to paste an invalid text.");
		}else if(document.getElementById("ErrMsg_"+e.path[0].id))
		removeDomElementbyId("ErrMsg_"+e.path[0].id);
	});
	document.getElementById("cusPreChat-Phone").addEventListener("paste", function (e) {
		if (/^[0-9-]*$/.test(pastedText(e)) == false) {
			e.preventDefault();
			alert("You are trying to paste an invalid text.");
		}else if(document.getElementById("ErrMsg_"+e.path[0].id))
		removeDomElementbyId("ErrMsg_"+e.path[0].id);
	});
	function checkForSpecialCharAndText(e){
		var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if (format.test(pastedText(e)) == true) {
			e.preventDefault();
			alert("You are trying to paste an invalid text.");
		}else if(document.getElementById("ErrMsg_"+e.path[0].id))
			removeDomElementbyId("ErrMsg_"+e.path[0].id);
	}
	function pastedText(e){
		if (e.clipboardData && e.clipboardData.getData)
			return e.clipboardData.getData('text/plain');
		else
			return null;
	}
	
}
function custPreChatShowAdditionalDetailsInUi(snapInObject) {
	if(document.getElementById("readonlyPreChatContainer"))
		removeDomElement(document.getElementById("readonlyPreChatContainer"));
	let topFields = document.querySelector(".cusPreChat-sidebarBody .cusPreChat-prechatUI  .cusPreChat-embeddedServiceSidebarForm ul.cusPreChat-fieldList");
	let topFieldValues;
	if (snapInObject.productName == null)
		topFieldValues = '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.5em; text-align: left;position: relative;font-size: .75em;color: #444444;margin-bottom: 0px;"><div><b>Service Tag:</b> ' + snapInObject.serviceTag + '</div><div><b>Issue:</b> ' + snapInObject.issueVal + '</div></div>';
	else
		topFieldValues = '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.5em; text-align: left;position: relative;font-size: .75em;color: #444444;"><div style="font-size: 1.2em;">' + snapInObject.productName + '</div><div><b>Service Tag:</b> ' + snapInObject.serviceTag + '</div><div><b>Issue:</b> ' + snapInObject.issueVal + '</div></div>';
	topFields.insertAdjacentHTML("afterbegin", topFieldValues);
}
function custPreFormValidation(){
	
let acceptForm,
firstNameDOM = document.getElementById("cusPreChat-FirstName"),
lastNameDOM = document.getElementById("cusPreChat-LastName"),
emailDOM = document.getElementById("cusPreChat-Email"),
phoneDOM = document.getElementById("cusPreChat-Phone"),
IssueDescDOM = document.getElementById("cusPreChat-IssueDescription");

if(document.getElementById("ErrMsg_cusPreChat-Email")){
	let element = document.getElementById("ErrMsg_cusPreChat-Email");	
		element.parentNode.removeChild(element);
}
if(!emailDOM.value)
	acceptForm = cusPreChatEleIsEmpty(emailDOM);
else
	acceptForm = cusPreChatInvalidEmail(emailDOM);
	
if(document.getElementById("ErrMsg_cusPreChat-FirstName")){
	acceptForm = false;
}else if(!firstNameDOM.value)
	acceptForm = cusPreChatEleIsEmpty(firstNameDOM);

if(document.getElementById("ErrMsg_cusPreChat-LastName")){
	acceptForm = false;
}else if(!lastNameDOM.value)
	acceptForm = cusPreChatEleIsEmpty(lastNameDOM);

if(document.getElementById("ErrMsg_cusPreChat-Phone")){
	acceptForm = false;
}else if(!phoneDOM.value)
	acceptForm = cusPreChatEleIsEmpty(phoneDOM);

if(document.getElementById("ErrMsg_cusPreChat-IssueDescription")){
		acceptForm = false;
	}else if(!IssueDescDOM.value)
		acceptForm = cusPreChatEleIsEmpty(IssueDescDOM);

if(acceptForm === undefined)acceptForm = true;
return acceptForm;	
}
function cusPreChatEleIsEmpty(domElement){
	cusPreChatErrorMsgPlaceholder(domElement,"This field is required.");
	return false;
}
function cusPreChatInvalidEmail(domElement){
	if(!cusPreChatvalidateEmail(domElement.value)){
		cusPreChatErrorMsgPlaceholder(domElement,"Invalid Email Validation");
		return false;
	}
}
function  cusPreChatvalidateEmail(email) {
	let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
  }
function cusPreChatErrorMsgPlaceholder(domElement,message){
	try{
		let referenceNode = domElement.parentNode;
		let el = document.createElement("ul");
		el.innerHTML ='<li class="cusPreChat-form-element__help">'+message+'</li>';
		el.id = 'ErrMsg_'+domElement.id;
		el.className = "cusPreChat-has-error cusPreChat-uiInput";
		referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
	}catch(e){
		console.log(e);
	}
	
}
function removeDomElementbyId(id){
	if(document.getElementById(id)){
		let element = document.getElementById(id);
		element.parentNode.removeChild(element);
	}
}
function minimizeCustPrechat(){
	document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'block';
	document.getElementById("cusPreChatSnapinDom").style.display = 'none';
}
function closeCustPrechat(){
	minimizeCustPrechat();
	let errorMsgs = document.querySelectorAll(".cusPreChat-has-error");
	errorMsgs.forEach(function(errorMsg){
		removeDomElement(errorMsg)
	});
	inputFields = document.querySelectorAll(".cusPreChat-input");
	inputFields.forEach(function(inputField){
		if(inputField.value)
			inputField.value = null;
	});
	custPreFormShowIssueDetailsCharRemaining();
}
function maximizeCustPrechat(){
	document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = 'none';
	document.getElementById("cusPreChat-hideWhileLoading").style.display = 'block';
	document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'none';
	document.getElementById("cusPreChatSnapinDom").style.display = 'block';
	document.getElementById("cusPreChat-minimize-btn").style.display = 'block';
	document.getElementById("cusPreChat-close-btn").style.display = 'block';
	if(document.querySelector(".embeddedServiceHelpButton"))
		document.querySelector(".embeddedServiceHelpButton").style.display = 'none';

}
function addCustFormDetailsTo(snapInObject){
	snapInObject.firstName = document.getElementById("cusPreChat-FirstName").value;
	snapInObject.lastName = document.getElementById("cusPreChat-LastName").value;
	snapInObject.email = document.getElementById("cusPreChat-Email").value;
	snapInObject.phoneNo = 	document.getElementById("cusPreChat-Phone").value;
	snapInObject.issueDescription = document.getElementById('cusPreChat-IssueDescription').value;
	snapInObject.snapinChatInitiated = true; 
	return snapInObject;
}
function snapinChatGlobalObjNotEmpty(){
	snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
	if(snapInObjectGlobal != null)
		return true;
	else
		return false;
}
function saveGlobalSnapinObjToSession(snapInObject){
	if(snapInObject){
		snapInObjectGlobal = JSON.stringify(snapInObject);
		sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
	}	
}
function sendGlobalSnapinObjToJson(){
		snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
		snapInObject = JSON.parse(snapInObjectGlobal);
		return snapInObject;
}
function loadingSnapinQueue(){
	document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = 'flex';
	document.getElementById("cusPreChat-hideWhileLoading").style.display = 'none';
	document.getElementById("cusPreChat-minimize-btn").style.display = 'none';
	document.getElementById("cusPreChat-close-btn").style.display = 'none';
 }
 function snapinQueueLoaded(){
	if(document.querySelector(".embeddedServiceSidebar")){
		document.querySelector(".embeddedServiceSidebar").style.display = 'block';
		document.getElementById("cusPreChatSnapinDom").style.display = 'none';
	}
 }
 function removeLoaderIn10(){
	setTimeout(function(){
		let cusPreChatSnapinDom = document.getElementById("cusPreChatSnapinDom");
		if(cusPreChatSnapinDom && window.getComputedStyle(cusPreChatSnapinDom).display != 'none'){
			document.getElementById("cusPreChatSnapinDom").style.display = 'none';
			if(document.querySelector(".embeddedServiceHelpButton"))
				document.querySelector(".embeddedServiceHelpButton").style.display = 'block';
		}
	}, 10000);
}
function custPrechatInitiateChat(snapInObject) {
	if(custPreFormValidation()){
		snapInObject = addCustFormDetailsTo(snapInObject);
		saveGlobalSnapinObjToSession(snapInObject);
		pageObserverForProp20("body");
		loadingSnapinQueue();
		
		eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
		eleExistWithVariable('.embeddedServiceSidebar .startButton', chatStarted, snapInObject);
	}
}

function initOriginalESW(gslbBaseURL,snapInObject) {
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
			if ("firstName" in snapInObject)
				firstNameVal = snapInObject.firstName;
			else
				firstNameVal = "FirstName";
			if ("lastName" in snapInObject)
				lastNameVal = snapInObject.lastName;
			else
				lastNameVal =  "LastName";
			if ("email" in snapInObject)
				emailAddVal = snapInObject.email;
			else
				emailAddVal = "email@dell.com";
			if ("phoneNo" in snapInObject)
				primePhoneVal = snapInObject.phoneNo;
			else
				primePhoneVal = "123";
			if ("issueDescription" in snapInObject)
				issueDescription = snapInObject.issueDescription;
			else
			issueDescription = "issueDescription";

				embedded_svc.settings.prepopulatedPrechatFields = {
					FirstName: firstNameVal,
					LastName: lastNameVal,
					Email: emailAddVal,
					Primary_Phone__c: primePhoneVal,
					Issue_Description__c : issueDescription
				};
	embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, {
		baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL,
		deploymentId: snapInObject.deploymentId,
		buttonId: snapInObject.buttonId,
		baseLiveAgentURL: snapInObject.baseLiveAgentURL,
		eswLiveAgentDevName: snapInObject.LiveAgentDevName,
		isOfflineSupportEnabled: false
	});
};
 
function togglePrechatAndSnapin(targetNode){
		 if(document.getElementById("cusPreChatSnapinDom")){
			if(targetNode === "snapInhelpBtnDisabled"){
				document.getElementById("cusPreChatSnapinDom").style.display = "none";
			}else if(targetNode === "snapInhelpBtnEnabled"){
				preChatCanvas = document.getElementById("cusPreChatSnapinDom");
				if (window.getComputedStyle(preChatCanvas).display === 'block'){
				if(document.querySelector(".helpButtonEnabled #helpButtonSpan > .message"))
					document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").click();
				}else{
					snapInObject = sendGlobalSnapinObjToJson();
					snapInObject.snapinChatInitiated = false;
					saveGlobalSnapinObjToSession(snapInObject);
					minimizeCustPrechat();
				}
			}  
		 }else if(snapinChatGlobalObjNotEmpty()){
			snapInObject = sendGlobalSnapinObjToJson();
			snapInObject.snapinChatInitiated = false;
			saveGlobalSnapinObjToSession(snapInObject);
			if(!document.getElementById("cusPreChatSnapinDom")){
				document.querySelector(".embeddedServiceHelpButton").style.display = 'none';
			}
		 }
 }
function triggerResumeSnapin(snapInObject) {
	var initESW = function (gslbBaseURL) {
		snapinChatGlobalIssueType = snapInObject.issueVal;
		snapinChatGlobalServiceTag = snapInObject.serviceTag;
		if ("productName" in snapInObject)
			snapinChatGlobalProductName = snapInObject.productName;
		eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
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
                            "doCreate":true,
                            "doFind":true,
                            "fieldName":"Delta_SR__c",
                            "isExactMatch":true,
                            "label":"Delta Sr"
                        }
                        ],
                        "entityName":"Case"
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
function chatClick(eleSelector, findingEle) {
	try{
		if (document.querySelector(eleSelector).innerText === 'Chat Now') {
			document.querySelector(eleSelector).click();
		}
		clearInterval(findingEle);
	}catch(e){
		console.log("Error in:"+ e);
	}
}
function chatStarted(eleSelector, findingEle, snapInObject) {
	try{
		  changePrechatValues(snapInObject, clickSnapinChatBtn);
		  function clickSnapinChatBtn(){
			document.querySelector(eleSelector).click();
			clearInterval(findingEle);
		  }
		  function changePrechatValues(snapInObject, callback) {
			let state = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState();
			let prechatFields = state.get("v.prechatFields");
			prechatFields.forEach(function (prechatField) {
				console.log("prechatField object:");
				console.log(prechatField);
				if (prechatField.label === "First Name") {
					prechatField.value = snapInObject.firstName
				} else if (prechatField.label === "Last Name") {
					prechatField.value = snapInObject.lastName
				} else if (prechatField.label === "Email Address") {
					prechatField.value = snapInObject.email
				}else if (prechatField.label === "Primary Phone Number") {
					prechatField.value = snapInObject.phoneNo
				}else if (prechatField.label === "Issue Description") {
					prechatField.value = snapInObject.issueDescription
				}
			});	
			state.set("v.prechatFields", prechatFields);
			callback();
		}
	}catch(e){
		console.log("Error in:"+ e);
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
	}else if (language == "cn") {
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
	console.log("Language = "+ this.language);
	return this;
}

var closestByTagName = function(el, closedElement) {
	var elParent = el;
	if(elParent){
		var tagedVal = elParent.tagName;
		if(tagedVal)
			while (tagedVal.toLowerCase() != closedElement) {
				elParent = elParent.parentNode;
				tagedVal = elParent.tagName;
				if (!tagedVal) {
					return el;
				}
			}
	}
		
    return elParent;
}

window.addEventListener("click", function (event) {
		if(document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton")){
			var clickedElement = event.target || event.srcElement;
			if (closestByTagName(clickedElement, 'button') != null){
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
						if(document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").innerText == "Chat Now"){
							snapInCurrentPage = null;
							callDellmetricsTrack("890.220.001", "StartsChat for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
							
						}else
							callDellmetricsTrack("890.220.001", "AgentOffline for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
						break;
					default:
						if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
							callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text);
						}
						break;
					}
			}else if (closestByTagName(clickedElement, 'a').className  == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
				
				callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text);
				
			}
		}
});

function callDellmetricsTrack(propValue, message){
	if(showsAgentOflineMsg(propValue, message)){
		document.querySelector(".dialog-button-0.embeddedServiceSidebarButton").style.display = 'none';
	}
	if (typeof(dellmetricsTrack) == "function"){
		if (dellmetricsTrack){
			if(trackevent){
				if(message)
				dellmetricsTrack(propValue, message);
				else
					dellmetricsTrack(propValue);
			}else{
				trackevent = true;
			}
			
		}	
	}
}

function showsAgentOflineMsg(propValue, message){
	if(propValue == "890.220.016" && 
		(
			message.includes("申し訳ありません。チャットすることができません。 しばらくしてからもう一度お試しください。") ||
			message.includes("죄송합니다. 현재 귀하와 채팅할 수 없습니다. 나중에 다시 시도해주십시오.") ||
			message.includes("Lo sentimos, no se puede abrir una sesión de chat. Vuelva más tarde o inténtelo de nuevo.") ||
			message.includes("抱歉，我们无法和您聊天。 请稍后回来或重试。") ||
			message.includes("Lamentamos não poder conversar com você. Volte mais tarde ou tente novamente.") ||
			message.includes("Es tut uns Leid, aber momentan können wir nicht mit Ihnen chatten. Versuchen Sie es später noch einmal.") ||
			message.includes("Sorry that we are not able to chat with you. Come back later or try again.")		
		)
		){
			return true;
		}else{
			return false;
		}
}

function pageObserverForProp20(eleSelector){
	try{
		snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
		snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
		snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
		snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
		snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
		snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
		if(snapInPrechatForm)
			snapInCurrentPage = "snapInPrechatForm";
		else if(snapInWaiting)
			snapInCurrentPage = "snapInWaiting";
		else if(snapInChatStarted)
			snapInCurrentPage = "snapInChatStarted";
		else if(snapInConfirmationDialoug)
			snapInCurrentPage = "snapInConfirmationDialoug";
		else if(snapInhelpBtnDisabled){
			removeLoaderIn10();
			snapInCurrentPage = "snapInhelpBtnDisabled";
		}else if(snapInhelpBtnEnabled)
		snapInhelpBtnEnabled = "snapInhelpBtnEnabled";
		else
			snapInCurrentPage = null;
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		var attributeChangeCallback = function( mutations ){ 
			mutations.forEach(function( mutation )  { 
				if(mutation.addedNodes.length>0){
					snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
					snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
					snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
					snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
					snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
					snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
					snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton");
					if(snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm"){
						snapInCurrentPage = "snapInPrechatForm";
					}else if(snapInWaiting && snapInCurrentPage != "snapInWaiting"){
						snapInCurrentPage = "snapInWaiting";
						callDellmetricsTrack("890.220.011");
						snapinQueueLoaded();
					}else if(snapInChatStarted && snapInCurrentPage != "snapInChatStarted"){
						snapInCurrentPage = "snapInChatStarted";
						snapinQueueLoaded();
						callDellmetricsTrack("890.220.013");
					}else if(snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug"){
						snapInCurrentPage = "snapInConfirmationDialoug";
						snapinQueueLoaded();
						callDellmetricsTrack("890.220.016",document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer").innerText);
					}else if(snapInEmbeddedServiceHelpBtn && window.getComputedStyle(snapInEmbeddedServiceHelpBtn).display === 'block'){
						
						if(snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnDisabled"){
							snapInCurrentPage = "snapInhelpBtnDisabled";
							togglePrechatAndSnapin(snapInCurrentPage);
							removeLoaderIn10();
							
						}else if(snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnEnabled"){
							if(snapInCurrentPage === "snapInhelpBtnDisabled")
								document.getElementById("cusPreChatSnapinDom").style.display = "block";
							snapInCurrentPage = "snapInhelpBtnEnabled";
							togglePrechatAndSnapin(snapInCurrentPage);
						}else{
							console.log("Snap-In: Not Loaded");
						}
					}
				}                       
			}); 
		} 
		var observer =  new MutationObserver ( attributeChangeCallback ); 
		var domElement = document.querySelector (eleSelector);
		observer.observe (domElement, { 
			childList: true,
			subtree: true
		});
	}catch(e){console.log('Error in Observer - '+e)}
}

function waitChatCounter(eleSelector, findingEle, counterValue) {
	try{
		if (typeof(dellmetricsTrack) == "function") {
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
	}catch(e){
		console.log("Error in:"+ e);
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
function snapinPrechatLoaded(eleSelector, findingEle){
	try{
		if(document.getElementById("loadingSnapinMsg"))
			removeDomElement(document.getElementById("loadingSnapinMsg"));
		clearInterval(findingEle);
	}catch(e){
		console.log("Error in:"+ e);
	}
}

function removeDomElement(DomElement){
	DomElement.parentNode.removeChild(DomElement);
}
function initLiveAgent(liveAgentObject) {
	try{
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
	}catch(e){
		console.log('error:' + e);
	}
}
function initLiveAgentWithoutPrechatForm(liveAgentObject, callback) {
	try{
		delete window.liveagent;
    	delete window.liveAgentDeployment; 
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
			checkifLiveAgentButtonIsOnline(liveagent,liveAgentObject,callback);
		});
	}catch(e){
		console.log('error:' + e);
	}
}
function checkifLiveAgentButtonIsOnline(liveagent,liveAgentObject,callback){
	liveagent.addButtonEventHandler(liveAgentObject.buttonId,function (e){
		if(e == liveagent.BUTTON_EVENT.BUTTON_AVAILABLE){              
			callback();
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

function triggerChatBot(chatBotObject) {
	var initESW = function (gslbBaseURL) {
		eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
		embedded_svc.settings.displayHelpButton = true;
		embedded_svc.settings.language = '';
		embedded_svc.settings.avatarImgURL = '';
		embedded_svc.settings.prechatBackgroundImgURL = '';
		embedded_svc.settings.waitingStateBackgroundImgURL = '';
		embedded_svc.settings.smallCompanyLogoImgURL = '';
		 embedded_svc.settings.extraPrechatFormDetails = [

			{ "label": "Service_Tag", "value":chatBotObject.Service_Tag,"transcriptFields": ["Service_Tag__c"], "displayToAgent": true },
			{ "label": "Phone Number", "value":chatBotObject.Phone_Number,"transcriptFields": ["ContactNumber__c"], "displayToAgent": true },
			{ "label": "First Name", "value":chatBotObject.First_Name,"transcriptFields": ["FirstName__c"], "displayToAgent": true },
            { "label": "Last Name", "value":chatBotObject.Last_Name,"transcriptFields": ["LastName__c"], "displayToAgent": true },
			{ "label": "Email", "value":chatBotObject.Email,"transcriptFields": ["Email__c"], "displayToAgent": true},
			{ "label": "product_Model", "value":chatBotObject.product_Model,"transcriptFields": ["product_Model__c"], "displayToAgent": true },
			{ "label": "Kb_Article", "value":chatBotObject.Kb_Article,"transcriptFields": ["KB__c"], "displayToAgent": true },
			{ "label": "issue_Description", "value":chatBotObject.issue_Description,"transcriptFields": ["issue_Description__c"], "displayToAgent": true },
			{ "label": "warranty_Details", "value":chatBotObject.warranty_Details,"transcriptFields": ["warranty_Details__c"], "displayToAgent": true },
			{ "label": "windows_Version", "value":chatBotObject.windows_Version,"transcriptFields": ["windows_Version__c"], "displayToAgent": true },
			{ "label": "BIOS_Version", "value":chatBotObject.BIOS_Version,"transcriptFields": ["BIOS_Version__c"], "displayToAgent": true },
			{ "label": "recent_Software_Updated_Date", "value":chatBotObject.recent_Software_Updated_Date,"transcriptFields": ["recent_Software_Updated_Date__c"], "displayToAgent": true },
			{ "label": "is_External_Peripherals_Connected", "value":chatBotObject.is_External_Peripherals_Connected,"transcriptFields": ["is_External_Peripherals_Connected__c"], "displayToAgent": true },
			{ "label": "is_SA_Diagnostic_Passed", "value":chatBotObject.is_SA_Diagnostic_Passed,"transcriptFields": ["is_SA_Diagnostic_Passed__c"], "displayToAgent": true },
			{ "label": "is_Error_Related_HWorSW", "value":chatBotObject.is_Error_Related_HWorSW,"transcriptFields": ["is_Error_Related_HWorSW__c"], "displayToAgent": true },
			{ "label": "is_BIOSandDrivers_Updated", "value":chatBotObject.is_BIOSandDrivers_Updated,"transcriptFields": ["is_BIOSandDrivers_Updated__c"], "displayToAgent": true },
			{ "label": "is_AnyAntivirus_Installed", "value":chatBotObject.is_AnyAntivirus_Installed,"transcriptFields": ["is_AnyAntivirus_Installed__c"], "displayToAgent": true },
			{ "label": "is_Related_Heat_Issue", "value":chatBotObject.is_Related_Heat_Issue,"transcriptFields": ["is_Related_Heat_Issue__c"], "displayToAgent": true },
			{ "label": "is_Warranty_Covered", "value":chatBotObject.is_Warranty_Covered,"transcriptFields": ["is_Warranty_Covered__c"], "displayToAgent": true },
			{ "label": "is_HardDrive_Test_Passed", "value":chatBotObject.is_HardDrive_Test_Passed,"transcriptFields": ["is_HardDrive_Test_Passed__c"], "displayToAgent": true },
			{ "label": "is_Memory_Test_Passed", "value":chatBotObject.is_Memory_Test_Passed,"transcriptFields": ["is_Memory_Test_Passed__c"], "displayToAgent": true },
			{ "label": "is_MotherBoard_Test_Passed", "value":chatBotObject.is_MotherBoard_Test_Passed,"transcriptFields": ["is_MotherBoard_Test_Passed__c"], "displayToAgent": true },
			{ "label": "is_HDD_IDE", "value":chatBotObject.is_HDD_IDE,"transcriptFields": ["is_HDD_IDE__c"], "displayToAgent": true },
			{ "label": "last_time_scan_run", "value":chatBotObject.last_time_scan_run,"transcriptFields": ["last_time_scan_run__c"], "displayToAgent": true }
		   ];
		   embedded_svc.settings.prepopulatedPrechatFields = {
			FirstName: chatBotObject.First_Name,
			LastName: chatBotObject.Last_Name,
			Email: chatBotObject.Email,
			ContactNumber__c: chatBotObject.Phone_Number,
			Service_Tag__c :chatBotObject.Service_Tag
		};
		   
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
	};
	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', chatBotObject.snapInJs);
		s.onload = function () {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW(chatBotObject.serviceForceURL);
	}
}