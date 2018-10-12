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
		var css = '@font-face{font-family: "Salesforce Sans";src: url("https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff") format("woff"),url("https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.ttf") format("truetype")}.embeddedServiceSidebarMinimizedDefaultUI, .embeddedServiceSidebarHeader{background-color: #00447C !important; border: 1px !important;}.embeddedServiceSidebarFormField .uiInput .uiLabel-left{padding-top: 0px !important;margin-top: 11px;color: #444 !important; font-weight: 300 !important;}.embeddedServiceSidebarForm.formContent{background: #f1f1f1 !important}.embeddedServiceHelpButton .helpButton .uiButton{background-color: #005290 !important;font-family: "Salesforce Sans", sans-serif}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline: 1px solid #005290}.embeddedServiceSidebarForm .uiButton{border-radius: 0 !important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius: 0 !important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius: 0 !important;border: none !important}.embeddedServiceSidebarForm.buttonWrapper{background: linear-gradient(to bottom, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 1) calc(100% - 77px), rgba(247, 247, 247, 1) 100%)}.embeddedServiceSidebarButton.uiButton--inverse{background: #f7f7f7 !important;border-radius: 0px !important;border: 1px solid #ccc !important}.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus{box-shadow: 0 0 3px 0 #dddddd !important}.embeddedServiceSidebarDialogState .dialogButton{border-radius: 0 !important}.embeddedServiceSidebarDialogState .dialogButton:not(:disabled):focus{text-decoration: none !important}.embeddedServiceSidebarFormField .slds-style-inputtext, .embeddedServiceSidebarFormField .slds-style-select{color: #444 !important}.embeddedServiceSidebarForm .fieldList{margin: 12px 12px 0 0px !important}.embeddedServiceLiveAgentStateChatHeaderOption .optionName{color: #fff !important;text-decoration: none !important}.embeddedServiceSidebarHeader .headerText{margin-bottom: 0px !important}.embeddedServiceSidebarMinimizedDefaultUI .minimizedImage {display: none !important;}.embeddedServiceLiveAgentStateChatHeader.reconnecting.alert {background-color: #cb2b19 !important;padding-top: 46px !important;}',
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
	var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
	snapInObject = JSON.parse(snapInObjectGlobal);
	if (!snapInObject.snapinButtonClicked)
	document.querySelector(eleSelector).style.display = 'none';
	clearInterval(findingEle);
}
//eleExist('.helpButtonLabel .message', checkAgentOffline);
function initSnapIn(snapInObject) {
	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', snapInObject.snapInJs);
		s.onload = function () {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW(snapInObject.serviceForceURL);
	}
}
function triggerSnapin(snapInObject) {
	var runApplication = true;
	if (snapInObject == undefined) {
		var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
		if(snapInObjectGlobal != null){  
			snapInObject = JSON.parse(snapInObjectGlobal);
			if ("applicationClicked" in snapInObject)
				runApplication = snapInObject.applicationClicked;
		}
	} else if (!snapInObject.snapinButtonClicked) {
		eleExist('.embeddedServiceHelpButton', hideDomObject);
		eleExist('.embeddedServiceSidebar', hideDomObject);
		snapInObject["snapinSessionAvailable"] = true;
		snapInObject["applicationClicked"] = false;
		var snapInObjectGlobal = JSON.stringify(snapInObject);
		sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
	} else {
		if (document.querySelector(".embeddedServiceSidebar")){
			document.querySelector(".embeddedServiceSidebar").style.display = 'block';
			if(document.querySelector(".embeddedServiceSidebar .minimizedContainer")){
				trackevent = false;
				document.querySelector(".embeddedServiceSidebar .minimizedContainer").click();
			}
		}
		else{
			if(document.querySelector(".helpButtonEnabled #helpButtonSpan > .message")){
				trackevent = false;
				document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").click();
			}
			if(document.querySelector(".embeddedServiceHelpButton"))
				document.querySelector(".embeddedServiceHelpButton").style.display = 'block';
			var htmlLoader= "<div id='loadingSnapinMsg' class ='12' style='min-width: 11em;max-width: 14em;width: 192px;position: fixed;left: auto;bottom: 0;right: 20px;margin: 0;height: 46px;width: 90px;max-height: 100%;border-radius: 8px 8px 0 0;text-align: center;text-decoration: none;display: inline-block;box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);pointer-events: all;overflow: hidden;background-color: #00447C;border-color: #005290;font-size: 14px;color: #fff;padding-top: 11px;z-index: 998;'>Loading</div>";
			document.querySelector('body').insertAdjacentHTML('afterend', htmlLoader);
		}
		
		var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
		snapInObject = JSON.parse(snapInObjectGlobal);
		snapInObject["snapinButtonClicked"] = true;
		if(document.querySelector(".embeddedServiceSidebar .embeddedServiceLiveAgentStateChat .messageArea"))
			snapInObject["snapinSessionAvailable"] = true;
		else
			snapInObject["snapinSessionAvailable"] = false;
		snapInObject["applicationClicked"] = true;
		runApplication = false;
		var snapInObjectGlobal = JSON.stringify(snapInObject);
		sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
	}


	if (snapInObject != undefined && snapInObject.snapinSessionAvailable && runApplication) {
		initESW = function (gslbBaseURL) {
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
			embedded_svc.settings.storageDomain = snapInObject.domainName;
			embedded_svc.settings.defaultMinimizedText = 'Chat Now';
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
				}, {
					"label": "AccountNumber",
					"value": snapInObject.customernumber,
					"transcriptFields": ["CustomerNumber__c"]
				}, {
					"label": "Account BUID",
					"value": snapInObject.BUID,
					"transcriptFields": ["CustomerBUID__c"]
				}
			];
			embedded_svc.settings.extraPrechatInfo = [{
					"entityFieldMaps": [{
							"doCreate": false,
							"doFind": true,
							"fieldName": "LastName",
							"isExactMatch": true,
							"label": "Last Name"
						}, {
							"doCreate": false,
							"doFind": true,
							"fieldName": "FirstName",
							"isExactMatch": true,
							"label": "First Name"
						}, {
							"doCreate": false,
							"doFind": true,
							"fieldName": "Email",
							"isExactMatch": true,
							"label": "Email"
						}, {
							"doCreate": false,
							"doFind": true,
							"fieldName": "Primary_Phone__c",
							"isExactMatch": true,
							"label": "Primary Phone Number"
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
							"label": "Issue Description"
						}
					],
					"entityName": "Case"
				}
			];
			embedded_svc.settings.enabledFeatures = ['LiveAgent'];
			embedded_svc.settings.entryFeature = 'LiveAgent';
			var firstNameVal = null,
			lastNameVal = null,
			emailAddVal = null,
			primePhoneVal = null;
			if ("firstName" in snapInObject)
				firstNameVal = snapInObject.firstName;
			if ("lastName" in snapInObject)
				lastNameVal = snapInObject.lastName;
			if ("email" in snapInObject)
				emailAddVal = snapInObject.email;
			if ("phoneNo" in snapInObject)
				primePhoneVal = snapInObject.phoneNo;
			embedded_svc.settings.prepopulatedPrechatFields = {
				FirstName: firstNameVal,
				LastName: lastNameVal,
				Email: emailAddVal,
				Primary_Phone__c: primePhoneVal
			};
			pageObserverForProp20("body");
			embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, {
				baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL,
				deploymentId: snapInObject.deploymentId,
				buttonId: snapInObject.buttonId,
				baseLiveAgentURL: snapInObject.baseLiveAgentURL,
				eswLiveAgentDevName: snapInObject.LiveAgentDevName,
				isOfflineSupportEnabled: false
			});
		};
		initSnapIn(snapInObject);
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
				"label": "First Name",
				"name": "FirstName",
				"value": snapInObject.firstName,
				"displayToAgent": true
			}, {
				"label": "Last Name",
				"value": snapInObject.lastName,
				"displayToAgent": true
			}
		];
		pageObserverForProp20("body");
		
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
eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
eleExist(".dockableContainer .ended.embeddedServiceLiveAgentStateChatMessage", chatEnded);
eleExist(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingCancelChat", chatEndedOnWaiting);

eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c", addCharectorRemaining);

	/*document.querySelector("body .embeddedServiceHelpButton > .helpButton").onclick = function () {
		alert("working");
		eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c", addCharectorRemaining);
		virtualSnapInObjectSession(true);
	}*/

function chatClick(eleSelector, findingEle) {
	if (document.querySelector(eleSelector).innerText === 'Chat Now') {
		document.querySelector(eleSelector).click();
	}
	clearInterval(findingEle);
}
function chatEndedOnWaiting(eleSelector, findingEle) {
	document.querySelector(eleSelector).addEventListener('click', function(e) {virtualSnapInObjectSession(false);});
	/*document.querySelector(eleSelector).click(function () {
		virtualSnapInObjectSession(false);
	});*/
	clearInterval(findingEle);
}
function chatEnded(eleSelector, findingEle) {
	virtualSnapInObjectSession(false);
	clearInterval(findingEle);
}
function virtualSnapInObjectSession(value) {
	var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
	snapInObject = JSON.parse(snapInObjectGlobal);
	snapInObject["snapinSessionAvailable"] = value;
	snapInObjectGlobal = JSON.stringify(snapInObject);
	sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
}
/*function checkAgentOffline(eleSelector, findingEle) {
	if (document.querySelector(eleSelector).innerText === 'Agent Offline') {
		document.querySelector("#" + triggerChatButtonId).disabled = "disabled";
	} else {
		document.querySelector("#" + triggerChatButtonId).attr("disabled", false);
	}
	clearInterval(findingEle);
}*/
function addCharectorRemaining(eleSelector, findingEle) {
	//snapinPrechatLoaded();
	if(document.getElementById("loadingSnapinMsg"))
		document.getElementById("loadingSnapinMsg").remove();
	if (!document.getElementById("snappinCharCounter")) {
		var currentCharLength = document.querySelector(eleSelector).value.length;
		var maxCharLength = 255;
		//document.querySelector(eleSelector).after("<div id='snappinCharCounter' style='text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px;color: #767676;float: right;'>" + currentCharLength + " / " + maxCharLength + " characters</div>")
		document.querySelector(eleSelector).insertAdjacentHTML('afterend', "<div id='snappinCharCounter' style='text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px;color: #767676;float: right;'>" + currentCharLength + " / " + maxCharLength + " characters</div>");
		document.querySelector(eleSelector).onkeyup = function () { 
			currentCharLength = this.value.length
			document.querySelector("#snappinCharCounter").innerText = currentCharLength + " / " + maxCharLength + " characters";
		}
		document.querySelector(".formContent.embeddedServiceSidebarForm").insertAdjacentHTML("beforeend", "<div style='font-size: 12px;color:#767676;text-align: left;margin: 2em 1.75em; font-style: italic;color:#444444;'><b>Your privacy is important to us.</b> We will only use your information to process your request. We will not share it with anyone. To learn more about how we use and protect your data, see the <a href='https://www.dell.com/learn/policies-privacy?s=corp'>Dell Privacy Statement</a>.</div>");
		keypressFieldValidation();
		showAdditionalDetailsInUi();
	}
	//document.getElementById(triggerChatButtonId).setAttribute("disabled", false);
	clearInterval(findingEle);
}
function showAdditionalDetailsInUi() {
	var topFields = document.querySelector(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList");
	if (snapinChatGlobalProductName == null)
		var topFieldValues = '<div class="readonlyContainer" style="margin: 0 1.5em 6px 1.5em; text-align: left;position: relative;font-size: .75em;color: #444444;margin-bottom: 0px;"><div><b>Service Tag:</b> ' + snapinChatGlobalServiceTag + '</div><div><b>Issue:</b> ' + snapinChatGlobalIssueType + '</div></div>';
		//topFields.prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #767676;"><div><b>Service Tag:</b> ' + snapinChatGlobalServiceTag + '</div><div><b>Issue:</b> ' + snapinChatGlobalIssueType + '</div></div>');
	else
	var topFieldValues = '<div class="readonlyContainer" style="margin: 0 1.5em 6px 1.5em; text-align: left;position: relative;font-size: .75em;color: #444444;"><div style="font-size: 1.2em;">' + snapinChatGlobalProductName + '</div><div><b>Service Tag:</b> ' + snapinChatGlobalServiceTag + '</div><div><b>Issue:</b> ' + snapinChatGlobalIssueType + '</div></div>';
	//topFields.prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #767676;"><div style="font-size: 1.2em;">' + snapinChatGlobalProductName + '</div><div><b>Service Tag:</b> ' + snapinChatGlobalServiceTag + '</div><div><b>Issue:</b> ' + snapinChatGlobalIssueType + '</div></div>');
	topFields.insertAdjacentHTML("afterbegin", topFieldValues);
}
function keypressFieldValidation() {
	
	document.querySelector('.sidebarBody .Primary_Phone__c').onkeypress = function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		for (i = 48; i < 58; i++)
			a.push(i);
		a.push(45);
		a.push(8);
		a.push(9);
		if (!(a.indexOf(k) >= 0))
			e.preventDefault();
	}
	document.querySelector('.sidebarBody .FirstName, .sidebarBody .LastName').onkeypress = function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k==8 || k==9))
			e.preventDefault();
	}
	document.querySelector('.sidebarBody .Email.slds-style-inputtext').onkeypress = function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 48 && k < 58) || (k == 45) || (k == 46) || (k == 95) || k==8 || k==9))
			e.preventDefault();
	}
	document.querySelector('.sidebarBody .Issue_Description__c').onkeypress = function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (k == 62 || k == 60)
			e.preventDefault();
	}

	document.getElementById("FirstName").addEventListener("paste", function (e) {
		checkForSpecialCharAndText(e);
	});
	document.getElementById("LastName").addEventListener("paste", function (e) {
		checkForSpecialCharAndText(e);
	});
	document.getElementById("Issue_Description__c").addEventListener("paste", function (e) {
		if (pastedText(e).includes('<') || pastedText(e).includes('>')) {
			e.preventDefault();
			alert("You are trying to paste an invalid text.");
		}
	});
	document.getElementById("Email").addEventListener("paste", function (e) {
		var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
		if (format.test(pastedText(e)) == true) {
			e.preventDefault();
			alert("You are trying to paste an invalid text.");
		}
	});
	document.getElementById("Primary_Phone__c").addEventListener("paste", function (e) {
		if (/^[0-9-]*$/.test(pastedText(e)) == false) {
			e.preventDefault();
			alert("You are trying to paste an invalid text.");
		}
	});
	function checkForSpecialCharAndText(e){
		var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if (format.test(pastedText(e)) == true) {
			e.preventDefault();
			alert("You are trying to paste an invalid text.");
		}
	}
	function pastedText(e){
		if (e.clipboardData && e.clipboardData.getData)
			return e.clipboardData.getData('text/plain');
		else
			return null;
	}
	
}
function translation(language) {
	if (language == "ja") {
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
	} else if (language == "es_MX") {
		this.issue = "Issue";
		this.firstName = "Nombre";
		this.lastName = "Apellidos";
		this.emailAdd = "Correo electrónico";
		this.primPhone = "Primary Phone Number";
		this.issueDesc = "Issue Description";
		this.characters = "characters";
		this.language = "es_MX";
	} else if (language == "zh-CN") {
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
	} else if (language == "pt_BR") {
		this.issue = "Issue";
		this.firstName = "Nome";
		this.lastName = "Sobrenome";
		this.emailAdd = "Email";
		this.primPhone = "Número de Telefone Principal";
		this.issueDesc = "descrição do problema";
		this.characters = "characters";
		this.language = "pt";
	} else if (language == "nl") {
		this.issue = "Issue";
		this.firstName = "Voornaam";
		this.lastName = "Achternaam";
		this.emailAdd = "E-mail";
		this.primPhone = "Primair telefoonnummer";
		this.issueDesc = "Probleem Beschrijving";
		this.characters = "characters";
		this.language = "nl";
	} else if (language == "nl_NL") {
		this.issue = "Issue";
		this.firstName = "Voornaam";
		this.lastName = "Achternaam";
		this.emailAdd = "E-mail";
		this.primPhone = "Primair telefoonnummer";
		this.issueDesc = "Probleem Beschrijving";
		this.characters = "characters";
		this.language = "nl";
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
	return this;
}
//jquery to JS function [START]
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
//jquery to JS function [END]
window.addEventListener("click", function (event) {
		if(document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton")){
			var clickedElement = event.target || event.srcElement;
			if (closestByTagName(clickedElement, 'button') != null){
				switch (closestByTagName(clickedElement, 'button').className) {
					case "startButton uiButton--default uiButton embeddedServiceSidebarButton":
						if (!document.querySelector('.sidebarBody .FirstName')) {
							var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
							var snapInObject = JSON.parse(snapInObjectGlobal);
							var prechatValues = JSON.stringify(snapInObject.snapinPreChatFormValues);
							virtualSnapInObjectSession(true);
							callDellmetricsTrack("890.220.002", "PrechatComplete" + prechatValues);
						}
						break;
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
						snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
						if(snapInPrechatForm)
							callDellmetricsTrack("890.220.010");
						break;
					case "sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI":
						callDellmetricsTrack("890.220.008", "ClickedOn Maximize button");
						break;
					case "uiButton helpButtonEnabled":
						if(document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").innerText == "Chat Now"){
							snapInCurrentPage = null;
							callDellmetricsTrack("890.220.001", "StartsChat for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
							snapinLoading();
							eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c", addCharectorRemaining);
						}else
							callDellmetricsTrack("890.220.001", "AgentOffline for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
						break;
					default:
						if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
							callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text);
						}else if(clickedElement.parentNode.parentNode.className ==  "uiButton helpButtonEnabled" || clickedElement.parentNode.className == "uiButton helpButtonEnabled"){
							snapinLoading();
							eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c", addCharectorRemaining);
						}
						break;
					}
			}else if (closestByTagName(clickedElement, 'a').className  == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
				
				callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text);
				
			}
		}
});

function callDellmetricsTrack(propValue, message){
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

function pageObserverForProp20(eleSelector){
	try{
		snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
		snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
		snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
		snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
		if(snapInPrechatForm)
			snapInCurrentPage = "snapInPrechatForm";
		else if(snapInWaiting)
			snapInCurrentPage = "snapInWaiting";
		else if(snapInChatStarted)
			snapInCurrentPage = "snapInChatStarted";
		else if(snapInConfirmationDialoug)
			snapInCurrentPage = "snapInConfirmationDialoug";
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
					if(snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm"){
						prechatformHeader = document.querySelector(".embeddedServiceSidebar");
						if(window.getComputedStyle(prechatformHeader).display === 'block'){
							snapInCurrentPage = "snapInPrechatForm";
							callDellmetricsTrack("890.220.010");
						}
						virtualSnapInObjectSession(false);
					}else if(snapInWaiting && snapInCurrentPage != "snapInWaiting"){
						snapInCurrentPage = "snapInWaiting";
						callDellmetricsTrack("890.220.011");
						eleExistWithVariable('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .waitingStateContent .queuePositionContent .header', waitChatCounter, 0);
					}else if(snapInChatStarted && snapInCurrentPage != "snapInChatStarted"){
						snapInCurrentPage = "snapInChatStarted";
						callDellmetricsTrack("890.220.013");
					}else if(snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug"){
						snapInCurrentPage = "snapInConfirmationDialoug";
						callDellmetricsTrack("890.220.016",document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer").innerText);
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

window.addEventListener("blur", function (event) {
	var elementId = event.target.id;
	if (elementId == "FirstName" || elementId == "LastName" || elementId == "Email" || elementId == "Primary_Phone__c" || elementId == "Issue_Description__c") {
		var snapinPrechatVal = document.querySelector("#FirstName").value +"|"+document.querySelector("#LastName").value +"|"+document.querySelector("#Email").value +"|"+document.querySelector("#Primary_Phone__c").value;
		var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
		snapInObject = JSON.parse(snapInObjectGlobal);
		snapInObject["snapinPreChatFormValues"] = snapinPrechatVal;
		snapInObjectGlobal = JSON.stringify(snapInObject);
		sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
	}
}, true);

function waitChatCounter(eleSelector, findingEle, counterValue) {
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

function snapinLoading(){
	var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
							snapInObject = JSON.parse(snapInObjectGlobal);
							if(snapInObject.snapinButtonClicked){
								var htmlLoader= "<div id='loadingSnapinMsg' class ='12' style='min-width: 11em;max-width: 14em;width: 192px;position: fixed;left: auto;bottom: 0;right: 20px;margin: 0;height: 46px;width: 90px;max-height: 100%;border-radius: 8px 8px 0 0;text-align: center;text-decoration: none;display: inline-block;box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);pointer-events: all;overflow: hidden;background-color: #005290;border-color: #005290;font-size: 14px;color: #fff;padding-top: 11px;z-index: 998;'>Loading</div>";
								document.querySelector('body').insertAdjacentHTML('afterend', htmlLoader);
								eleExist(".modalContainer.sidebarMaximized.embeddedServiceSidebar .dockableContainer", snapinPrechatLoaded);
							}

}
function snapinPrechatLoaded(eleSelector, findingEle){
	if(document.getElementById("loadingSnapinMsg"))
		document.getElementById("loadingSnapinMsg").remove();
	clearInterval(findingEle);
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
		embedded_svc.settings.displayHelpButton = true;
		embedded_svc.settings.language = '';
		embedded_svc.settings.avatarImgURL = '';
		embedded_svc.settings.prechatBackgroundImgURL = '';
		embedded_svc.settings.waitingStateBackgroundImgURL = '';
		embedded_svc.settings.smallCompanyLogoImgURL = '';
		 embedded_svc.settings.extraPrechatFormDetails = [
     
            { "label": "First Name", "name": "FirstName", "value": chatBotObject.FirstName,"transcriptFields": ["FirstName__c"], "displayToAgent": true },
            { "label": "Last Name", "name": "LastName", "value": chatBotObject.LastName,"transcriptFields": ["LastName__c"], "displayToAgent": true },
            { "label": "Service_Tag", "value": chatBotObject.Service_Tag,"transcriptFields": ["Service_Tag__c"], "displayToAgent": true },
            { "label": "Kb_Article", "value": chatBotObject.Kb_Article,"transcriptFields": ["KB__c"], "displayToAgent": true }   
           ];
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