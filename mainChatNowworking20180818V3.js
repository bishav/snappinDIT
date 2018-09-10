var snapinChatGlobalIssueType, snapinChatGlobalServiceTag, snapinChatGlobalProductName = null, triggerChatButtonId = null;
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
})();
function hideDomObject(eleSelector, findingEle) {
	var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
	snapInObject = JSON.parse(snapInObjectGlobal);
	if (!snapInObject.snapinButtonClicked)
		$(eleSelector).hide();
	clearInterval(findingEle);
}
eleExist('.helpButtonLabel .message', checkAgentOffline);
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
		if ($(".embeddedServiceSidebar").length > 0)
			$(".embeddedServiceSidebar").show();
		else
			$(".embeddedServiceHelpButton").show();
		var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
		snapInObject = JSON.parse(snapInObjectGlobal);
		snapInObject["snapinButtonClicked"] = true;
		snapInObject["snapinSessionAvailable"] = false;
		snapInObject["applicationClicked"] = true;
		runApplication = false;
		var snapInObjectGlobal = JSON.stringify(snapInObject);
		sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
	}


	if (snapInObject != undefined && snapInObject.snapinSessionAvailable && runApplication) {
		debugger;
		initESW = function (gslbBaseURL) {
			debugger;
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
$("body").on("click", ".embeddedServiceHelpButton > .helpButton", function () {
	eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c", addCharectorRemaining);
});
function chatClick(eleSelector, findingEle) {
	if ($(eleSelector).text() === 'Chat Now') {
		$(eleSelector).click();
	}
	clearInterval(findingEle);
}
function chatEndedOnWaiting(eleSelector, findingEle) {
	$(eleSelector).click(function () {
		virtualSnapInObjectSession(false);
	});
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
function checkAgentOffline(eleSelector, findingEle) {
	if ($(eleSelector).text() === 'Agent Offline') {
		$("#" + triggerChatButtonId).attr("disabled", "disabled");
	} else {
		$("#" + triggerChatButtonId).attr("disabled", false);
	}
	clearInterval(findingEle);
}
function addCharectorRemaining(eleSelector, findingEle) {
	if ($("#snappinCharCounter").length == 0) {
		var currentCharLength = $(eleSelector).val().length;
		var maxCharLength = 255;
		$(eleSelector).after("<div id='snappinCharCounter' style='text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px;color: #767676;float: right;'>" + currentCharLength + " / " + maxCharLength + " characters</div>")
		$(eleSelector).on('keyup', function () {
			currentCharLength = this.value.length
				$("#snappinCharCounter").text(currentCharLength + " / " + maxCharLength + " characters");
		});
		$(".formContent.embeddedServiceSidebarForm").append("<div style='font-size: .75em;color:#767676;text-align: left;margin: 2em 1.75em'><b>Your privacy is important to us.</b> We will only use your information to process your request. We will not share it with anyone. To learn more about how we use and protect your data, see the <a href='https://www.dell.com/learn/policies-privacy?s=corp'>Dell Privacy Statement</a>.</div>");
		keypressFieldValidation();
		showAdditionalDetailsInUi();
	}
	$("#" + triggerChatButtonId).attr("disabled", false);
	clearInterval(findingEle);
}
function showAdditionalDetailsInUi() {
	if (snapinChatGlobalProductName == null)
		$(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList").prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #767676;"><div><b>Service Tag:</b> ' + snapinChatGlobalServiceTag + '</div><div><b>Issue:</b> ' + snapinChatGlobalIssueType + '</div></div>');
	else
		$(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList").prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #767676;"><div style="font-size: 1.2em;">' + snapinChatGlobalProductName + '</div><div><b>Service Tag:</b> ' + snapinChatGlobalServiceTag + '</div><div><b>Issue:</b> ' + snapinChatGlobalIssueType + '</div></div>');
}

function keypressFieldValidation() {
	$('.sidebarBody .Primary_Phone__c').keypress(function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		for (i = 48; i < 58; i++)
			a.push(i);
		a.push(45);
		a.push(8);
		a.push(9);
		if (!(a.indexOf(k) >= 0))
			e.preventDefault();
	});
	$('.sidebarBody .FirstName, .sidebarBody .LastName').keypress(function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
			e.preventDefault();
	});
	$('.sidebarBody .Email.slds-style-inputtext').keypress(function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 48 && k < 58) || (k == 45) || (k == 46) || (k == 95) || k == 8 || k == 9))
			e.preventDefault();
	});
	$('.sidebarBody .Issue_Description__c').keypress(function (e) {
		var a = [];
		var k = e.which || e.keyCode;
		if (k == 62 || k == 60)
			e.preventDefault();
	});
	$(window).bind("paste", function (e) {
		var elementId = e.target.id;
		var pastedData;
		if (window.clipboardData && window.clipboardData.getData) {
			pastedData = window.clipboardData.getData('Text');
		} else if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData) {
			pastedData = e.originalEvent.clipboardData.getData('text/plain');
		}
		switch (elementId) {
		case "FirstName":
		case "LastName":
			if (/^[a-zA-Z ]*$/.test(pastedData) == false) {
				e.preventDefault();
				alert("You are trying to paste an invalid text.");
			}
			break;
		case "Primary_Phone__c":
			if (/^[0-9-]*$/.test(pastedData) == false) {
				e.preventDefault();
				alert("You are trying to paste an invalid text.");
			}
			break;
		case "Issue_Description__c":
			if (pastedData.includes('<') || pastedData.includes('>')) {
				e.preventDefault();
				alert("You are trying to paste an invalid text.");
			}
			break;
		case "Email":
			if (/^[a-zA-Z0-9%()#@_& -]*$/.test(pastedData) == false) {
				e.preventDefault();
				alert("You are trying to paste an invalid text.");
			}
			break;
		default:
			break;
		}
	});
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
window.addEventListener("click", function (event) {
	if (typeof(dellmetricsTrack) == "function") {
		if (dellmetricsTrack) {
			var clickedElement = event.target || event.srcElement;
			var dateTime = new Date();
			switch ($(clickedElement).closest('button').attr('class')) {
			case "startButton uiButton--default uiButton embeddedServiceSidebarButton":
				if ($('.sidebarBody .FirstName').val() == undefined && $('.sidebarBody .LastName').val() == undefined && $('.sidebarBody .Email.slds-style-inputtext').val() == undefined && $('.sidebarBody .Primary_Phone__c').val() == undefined && $('.sidebarBody .Issue_Description__c').val() == undefined) {
					var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
					var snapInObject = JSON.parse(snapInObjectGlobal);
					var prechatValues = JSON.stringify(snapInObject.snapinPreChatFormValues);
					dellmetricsTrack("890.220.002", "PrechatComplete" + prechatValues);
					virtualSnapInObjectSession(true);
				}
				break;
			case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
				dellmetricsTrack("890.220.003", "ClickedOn '" + clickedElement.innerText + "' button");
				break;
			case "dialogButton dialog-button-1 uiButton embeddedServiceSidebarButton":
				dellmetricsTrack("890.220.004", "ClickedOn '" + clickedElement.innerText + "' button");
				break;
			case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
				dellmetricsTrack("890.220.004", "ClickedOn '" + clickedElement.innerText + "' button");
				break;
			case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
				dellmetricsTrack("890.220.005", "ClickedOn Cancel Chat button while waiting in queue");
				break;
			case "closeButton headerItem":
				dellmetricsTrack("890.220.006", "ClickedOn Close (x) button");
				break;
			case "minimizeButton headerItem":
				dellmetricsTrack("890.220.007", "ClickedOn Minimize button");
				break;
			case "sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI":
				dellmetricsTrack("890.220.008", "ClickedOn Maximize button");
				break;
			case "uiButton helpButtonEnabled":
				dellmetricsTrack("890.220.001", "StartsChat for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
				break;
			default:
				if ($(clickedElement).closest('a').attr('class') == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
					dellmetricsTrack("890.220.009", "ClickedOn " + $(clickedElement).closest('a').text());
				}
				break;
			}
		}
	}
});
window.addEventListener("blur", function (event) {
	var elementId = event.target.id;
	if (elementId == "FirstName" || elementId == "LastName" || elementId == "Email" || elementId == "Primary_Phone__c" || elementId == "Issue_Description__c") {
		var snapinPrechatVal = $("#FirstName").val() + "|" + $("#LastName").val() + "|" + $("#Email").val() + "|" + $("#Primary_Phone__c").val();
		var snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
		snapInObject = JSON.parse(snapInObjectGlobal);
		snapInObject["snapinPreChatFormValues"] = snapinPrechatVal;
		snapInObjectGlobal = JSON.stringify(snapInObject);
		sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
	}
}, true);
eleExistWithVariable('.waitingStateContainer .header.queuePositionNumber', waitChatCounter, 0);
function waitChatCounter(eleSelector, findingEle, counterValue) {
	if (typeof(dellmetricsTrack) == "function") {
		if (dellmetricsTrack) {
			if (counterValue != $(eleSelector).text()) {
				var dateTime = new Date();
				dellmetricsTrack("890.220.010", "WaitingOnQueue where his queue number is:" + $(eleSelector).text());
				clearInterval(findingEle);
				if ($(eleSelector).text() > 1) {
					eleExistWithVariable('.waitingStateContainer .header.queuePositionNumber', waitChatCounter, $(eleSelector).text());
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
			if ($(eleSelector).length > 0) {
				try {
					callbackFunc(eleSelector, findingEle, value);
				} catch (e) {
					console.log('error in ' + callbackFunc + ' function: ' + e);
				}
			}
		}, 1000);
}
function initLiveAgent(liveAgentObject) {
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
	liveagent.setName(liveAgentObject.firstName + ' ' + liveAgentObject.lastName);
}
function startLiveAgentChat(buttonId) {
	liveagent.startChat(buttonId);
}
function eleExist(eleSelector, callbackFunc) {
	var findingEle = setInterval(function () {
			if ($(eleSelector).length > 0) {
				try {
					callbackFunc(eleSelector, findingEle);
				} catch (e) {
					console.log('error in ' + callbackFunc + ' function: ' + e);
				}
			}
		}, 1000);
}
function detectScreen() {
	var windowWidth = window.outerWidth;
	var windowHeight = window.outerHeight;
	if (windowWidth > 1920 && windowHeight > 1080) {
		return {
			width: '350px',
			height: '500px'
		}
	} else if (windowWidth > 1366 && windowHeight > 1080) {
		return {
			width: '300px',
			height: '450px'
		}
	} else {
		return {
			width: '250px',
			height: '400px'
		}
	}
}
function triggerChatBot(chatBotObject) {
	var initESW = function (gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true;
		embedded_svc.settings.language = '';
		embedded_svc.settings.avatarImgURL = '';
		embedded_svc.settings.prechatBackgroundImgURL = '';
		embedded_svc.settings.waitingStateBackgroundImgURL = '';
		embedded_svc.settings.smallCompanyLogoImgURL = '';
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