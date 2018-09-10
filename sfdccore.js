function hideDomObject(e, t) {
	var a = sessionStorage.getItem("snapInObjectSession");
	snapInObject = JSON.parse(a),
	snapInObject.snapinButtonClicked || $(e).hide(),
	clearInterval(t)
}
function initSnapIn(e) {
	if (window.embedded_svc)
		initESW(e.serviceForceURL);
	else {
		var t = document.createElement("script");
		t.setAttribute("src", e.snapInJs),
		t.onload = function () {
			initESW(null)
		},
		document.body.appendChild(t)
	}
}
function triggerSnapin(e) {
	var t = !0;
	if (void 0 == e) {
        var a = sessionStorage.getItem("snapInObjectSession");
        if(a != null){  
            e = JSON.parse(a),
		    "applicationClicked" in e && (t = e.applicationClicked)
        }
	} else if (e.snapinButtonClicked) {
		$(".embeddedServiceSidebar").length > 0 ? $(".embeddedServiceSidebar").show() : $(".embeddedServiceHelpButton").show();
		var a = sessionStorage.getItem("snapInObjectSession");
		e = JSON.parse(a),
		e.snapinButtonClicked = !0,
		e.snapinSessionAvailable = !0,
		e.applicationClicked = !0,
		t = !1;
		var a = JSON.stringify(e);
		sessionStorage.setItem("snapInObjectSession", a)
	} else {
		eleExist(".embeddedServiceHelpButton", hideDomObject),
		eleExist(".embeddedServiceSidebar", hideDomObject),
		e.snapinSessionAvailable = !0,
		e.applicationClicked = !1;
		var a = JSON.stringify(e);
		sessionStorage.setItem("snapInObjectSession", a)
	}
	void 0 != e && e.snapinSessionAvailable && t && (initESW = function (t) {
		snapinChatGlobalIssueType = e.issueVal,
		snapinChatGlobalServiceTag = e.serviceTag,
		"productName" in e && (snapinChatGlobalProductName = e.productName),
		eleExist(".helpButtonEnabled #helpButtonSpan > .message", chatClick),
		embedded_svc.settings.displayHelpButton = !0,
		"language" in e ? translatedLabels = translation(e.language) : translatedLabels = translation("en"),
		embedded_svc.settings.language = translatedLabels.language,
		embedded_svc.settings.storageDomain = e.domainName,
		embedded_svc.settings.defaultMinimizedText = "Chat Now",
		embedded_svc.settings.extraPrechatFormDetails = [{
				label: translatedLabels.firstName,
				transcriptFields: ["FirstName__c"]
			}, {
				label: translatedLabels.lastName,
				transcriptFields: ["LastName__c"]
			}, {
				label: translatedLabels.primPhone,
				transcriptFields: ["ContactNumber__c"]
			}, {
				label: translatedLabels.emailAdd,
				transcriptFields: ["Email__c"]
			}, {
				label: "Subject",
				value: e.issueVal,
				transcriptFields: ["Issue__c"]
			}, {
				label: "Service Tag",
				value: e.serviceTag,
				transcriptFields: ["Service_Tag__c"]
			}, {
				label: translatedLabels.issueDesc,
				transcriptFields: ["Description__c"]
			}, {
				label: "AccountNumber",
				value: e.customernumber,
				transcriptFields: ["CustomerNumber__c"]
			}, {
				label: "Account BUID",
				value: e.BUID,
				transcriptFields: ["CustomerBUID__c"]
			}
		],
		embedded_svc.settings.extraPrechatInfo = [{
				entityFieldMaps: [{
						doCreate: !1,
						doFind: !0,
						fieldName: "LastName",
						isExactMatch: !0,
						label: "Last Name"
					}, {
						doCreate: !1,
						doFind: !0,
						fieldName: "FirstName",
						isExactMatch: !0,
						label: "First Name"
					}, {
						doCreate: !1,
						doFind: !0,
						fieldName: "Email",
						isExactMatch: !0,
						label: "Email"
					}, {
						doCreate: !1,
						doFind: !0,
						fieldName: "Primary_Phone__c",
						isExactMatch: !0,
						label: "Primary Phone Number"
					}
				],
				entityName: "Contact",
				saveToTranscript: ""
			}, {
				entityFieldMaps: [{
						doCreate: !1,
						doFind: !0,
						fieldName: "Name",
						isExactMatch: !0,
						label: "Service Tag"
					}
				],
				entityName: "Asset",
				saveToTranscript: "Asset__c"
			}, {
				entityFieldMaps: [{
						doCreate: !1,
						doFind: !0,
						fieldName: "Issue_Description__c",
						isExactMatch: !0,
						label: "Issue Description"
					}
				],
				entityName: "Case"
			}
		],
		embedded_svc.settings.enabledFeatures = ["LiveAgent"],
		embedded_svc.settings.entryFeature = "LiveAgent";
		var a = null,
		i = null,
		n = null,
		s = null;
		"firstName" in e && (a = e.firstName),
		"lastName" in e && (i = e.lastName),
		"email" in e && (n = e.email),
		"phoneNo" in e && (s = e.phoneNo),
		embedded_svc.settings.prepopulatedPrechatFields = {
			FirstName: a,
			LastName: i,
			Email: n,
			Primary_Phone__c: s
		},
		embedded_svc.init(e.snapInInitURL, e.snapInLAURL, t, e.organizationId, e.componentName, {
			baseLiveAgentContentURL: e.baseLiveAgentContentURL,
			deploymentId: e.deploymentId,
			buttonId: e.buttonId,
			baseLiveAgentURL: e.baseLiveAgentURL,
			eswLiveAgentDevName: e.LiveAgentDevName,
			isOfflineSupportEnabled: !1
		})
	}, initSnapIn(e))
}
function triggerResumeSnapin(e) {
	var t = function (t) {
		snapinChatGlobalIssueType = e.issueVal,
		snapinChatGlobalServiceTag = e.serviceTag,
		"productName" in e && (snapinChatGlobalProductName = e.productName),
		eleExist(".helpButtonEnabled #helpButtonSpan > .message", chatClick),
		embedded_svc.settings.displayHelpButton = !0,
		translatedLabels = translation("en"),
		embedded_svc.settings.language = translatedLabels.language,
		embedded_svc.settings.enabledFeatures = ["LiveAgent"],
		embedded_svc.settings.entryFeature = "LiveAgent",
		embedded_svc.settings.storageDomain = e.domainName,
		embedded_svc.settings.defaultMinimizedText = "Chat Now",
		embedded_svc.settings.extraPrechatFormDetails = [{
				label: "Delta Sr",
				value: e.srNumber,
				transcriptFields: ["Delta_SR__c"]
			}, {
				label: "First Name",
				name: "FirstName",
				value: e.firstName,
				displayToAgent: !0
			}, {
				label: "Last Name",
				value: e.lastName,
				displayToAgent: !0
			}
		],
		embedded_svc.init(e.snapInInitURL, e.snapInLAURL, t, e.organizationId, e.componentName, {
			baseLiveAgentContentURL: e.baseLiveAgentContentURL,
			deploymentId: e.deploymentId,
			buttonId: e.buttonId,
			baseLiveAgentURL: e.baseLiveAgentURL,
			eswLiveAgentDevName: e.LiveAgentDevName,
			isOfflineSupportEnabled: !1
		})
	};
	if (window.embedded_svc)
		t(e.serviceForceURL, e.srNumber);
	else {
		var a = document.createElement("script");
		a.setAttribute("src", e.snapInJs),
		a.onload = function () {
			t(null, e.srNumber)
		},
		document.body.appendChild(a)
	}
}
function chatClick(e, t) {
	"Chat Now" === $(e).text() && $(e).click(),
	clearInterval(t)
}
function chatEndedOnWaiting(e, t) {
	$(e).click(function () {
		virtualSnapInObjectSession(!1)
	}),
	clearInterval(t)
}
function chatEnded(e, t) {
	virtualSnapInObjectSession(!1),
	clearInterval(t)
}
function virtualSnapInObjectSession(e) {
	var t = sessionStorage.getItem("snapInObjectSession");
	snapInObject = JSON.parse(t),
	snapInObject.snapinSessionAvailable = e,
	t = JSON.stringify(snapInObject),
	sessionStorage.setItem("snapInObjectSession", t)
}
function checkAgentOffline(e, t) {
	"Agent Offline" === $(e).text() ? $("#" + triggerChatButtonId).attr("disabled", "disabled") : $("#" + triggerChatButtonId).attr("disabled", !1),
	clearInterval(t)
}
function addCharectorRemaining(e, t) {
	if (0 == $("#snappinCharCounter").length) {
		var a = $(e).val().length,
		i = 255;
		$(e).after("<div id='snappinCharCounter' style='text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px;color: #767676;float: right;'>" + a + " / " + i + " characters</div>"),
		$(e).on("keyup", function () {
			a = this.value.length,
			$("#snappinCharCounter").text(a + " / " + i + " characters")
		}),
		$(".formContent.embeddedServiceSidebarForm").append("<div style='font-size: .75em;color:#767676;text-align: left;margin: 2em 1.75em'><b>Your privacy is important to us.</b> We will only use your information to process your request. We will not share it with anyone. To learn more about how we use and protect your data, see the <a href='https://www.dell.com/learn/policies-privacy?s=corp'>Dell Privacy Statement</a>.</div>"),
		keypressFieldValidation(),
		showAdditionalDetailsInUi()
	}
	$("#" + triggerChatButtonId).attr("disabled", !1),
	clearInterval(t)
}
function showAdditionalDetailsInUi() {
	null == snapinChatGlobalProductName ? $(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList").prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #767676;"><div><b>Service Tag:</b> ' + snapinChatGlobalServiceTag + "</div><div><b>Issue:</b> " + snapinChatGlobalIssueType + "</div></div>") : $(".sidebarBody .prechatUI  .embeddedServiceSidebarForm ul.fieldList").prepend('<div class="readonlyContainer" style="margin: 1.5em; text-align: left;position: relative;font-size: .75em;color: #767676;"><div style="font-size: 1.2em;">' + snapinChatGlobalProductName + "</div><div><b>Service Tag:</b> " + snapinChatGlobalServiceTag + "</div><div><b>Issue:</b> " + snapinChatGlobalIssueType + "</div></div>")
}
function keypressFieldValidation() {
	$(".sidebarBody .Primary_Phone__c").keypress(function (e) {
		var t = [],
		a = e.which || e.keyCode;
		for (i = 48; i < 58; i++)
			t.push(i);
		t.push(45),
		t.push(8),
		t.push(9),
		t.indexOf(a) >= 0 || e.preventDefault()
	}),
	$(".sidebarBody .FirstName, .sidebarBody .LastName").keypress(function (e) {
		var t = e.which || e.keyCode;
		t > 64 && 91 > t || t > 96 && 123 > t || 8 == t || 9 == t || e.preventDefault()
	}),
	$(".sidebarBody .Email.slds-style-inputtext").keypress(function (e) {
		var t = e.which || e.keyCode;
		t > 63 && 91 > t || t > 96 && 123 > t || t > 48 && 58 > t || 45 == t || 46 == t || 95 == t || 8 == t || 9 == t || e.preventDefault()
	}),
	$(".sidebarBody .Issue_Description__c").keypress(function (e) {
		var t = e.which || e.keyCode;
		(62 == t || 60 == t) && e.preventDefault()
	}),
	$(window).bind("paste", function (e) {
		var t,
		a = e.target.id;
		switch (window.clipboardData && window.clipboardData.getData ? t = window.clipboardData.getData("Text") : e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData && (t = e.originalEvent.clipboardData.getData("text/plain")), a) {
		case "FirstName":
		case "LastName":
			0 == /^[a-zA-Z ]*$/.test(t) && (e.preventDefault(), alert("You are trying to paste an invalid text."));
			break;
		case "Primary_Phone__c":
			0 == /^[0-9-]*$/.test(t) && (e.preventDefault(), alert("You are trying to paste an invalid text."));
			break;
		case "Issue_Description__c":
			(t.includes("<") || t.includes(">")) && (e.preventDefault(), alert("You are trying to paste an invalid text."));
			break;
		case "Email":
			0 == /^[a-zA-Z0-9%()#@_& -]*$/.test(t) && (e.preventDefault(), alert("You are trying to paste an invalid text."))
		}
	})
}
function translation(e) {
	return "ja" == e ? (this.issue = "Issue", this.firstName = "名", this.lastName = "姓", this.emailAdd = "メール", this.primPhone = "主に使う電話番号", this.issueDesc = "問題の説明", this.characters = "characters", this.language = "ja") : "ko" == e ? (this.issue = "Issue", this.firstName = "이름", this.lastName = "성", this.emailAdd = "이메일", this.primPhone = "기본 전화 번호", this.issueDesc = "문제 설명", this.characters = "characters", this.language = "ko") : "es" == e ? (this.issue = "Issue", this.firstName = "Nombre", this.lastName = "Apellidos", this.emailAdd = "Correo electrónico", this.primPhone = "Número de teléfono primario", this.issueDesc = "descripcion del problema", this.characters = "characters", this.language = "es") : "es_MX" == e ? (this.issue = "Issue", this.firstName = "Nombre", this.lastName = "Apellidos", this.emailAdd = "Correo electrónico", this.primPhone = "Primary Phone Number", this.issueDesc = "Issue Description", this.characters = "characters", this.language = "es_MX") : "zh-CN" == e ? (this.issue = "Issue", this.firstName = "名", this.lastName = "姓", this.emailAdd = "电子邮件", this.primPhone = "最常用的电话号码", this.issueDesc = "问题说明", this.characters = "characters", this.language = "zh-CN") : "pt" == e ? (this.issue = "Issue", this.firstName = "Nome", this.lastName = "Sobrenome", this.emailAdd = "Email", this.primPhone = "Número de Telefone Principal", this.issueDesc = "descrição do problema", this.characters = "characters", this.language = "pt") : "pt_BR" == e ? (this.issue = "Issue", this.firstName = "Nome", this.lastName = "Sobrenome", this.emailAdd = "Email", this.primPhone = "Número de Telefone Principal", this.issueDesc = "descrição do problema", this.characters = "characters", this.language = "pt") : "nl" == e ? (this.issue = "Issue", this.firstName = "Voornaam", this.lastName = "Achternaam", this.emailAdd = "E-mail", this.primPhone = "Primair telefoonnummer", this.issueDesc = "Probleem Beschrijving", this.characters = "characters", this.language = "nl") : "nl_NL" == e ? (this.issue = "Issue", this.firstName = "Voornaam", this.lastName = "Achternaam", this.emailAdd = "E-mail", this.primPhone = "Primair telefoonnummer", this.issueDesc = "Probleem Beschrijving", this.characters = "characters", this.language = "nl") : (this.issue = "Issue", this.firstName = "First Name", this.lastName = "Last Name", this.emailAdd = "Email Address", this.primPhone = "Primary Phone Number", this.issueDesc = "Issue Description", this.characters = "characters", this.language = "en"),
	this
}
function waitChatCounter(e, t, a) {
	if ("function" == typeof dellmetricsTrack)
		if (dellmetricsTrack) {
			if (a != $(e).text()) {
				new Date;
				dellmetricsTrack("890.220.010", "WaitingOnQueue where his queue number is:" + $(e).text()),
				clearInterval(t),
				$(e).text() > 1 && eleExistWithVariable(".waitingStateContainer .header.queuePositionNumber", waitChatCounter, $(e).text())
			}
		} else
			clearInterval(t);
	else
		clearInterval(t)
}
function eleExistWithVariable(e, t, a) {
	var i = setInterval(function () {
			if ($(e).length > 0)
				try {
					t(e, i, a)
				} catch (n) {
					console.log("error in " + t + " function: " + n)
				}
		}, 1e3)
}
function initLiveAgent(e) {
	$.getScript(e.deploymentUrl, function () {
		liveagent.enableLogging(),
		liveagent.init(e.liveAgentInitUrl, e.deploymentId, e.organizationId),
		window._laq || (window._laq = []),
		window._laq.push(function () {
			liveagent.showWhenOnline(e.buttonId, document.getElementById("liveagent_button_online_" + e.buttonId)),
			liveagent.showWhenOffline(e.buttonId, document.getElementById("liveagent_button_offline_" + e.buttonId)),
			"serviceTag" in e && liveagent.addCustomDetail("serviceTag", e.serviceTag)
		})
	})
}
function initResumeLiveAgent(e) {
	window._laq || (window._laq = []),
	window._laq.push(function () {
		liveagent.showWhenOnline(e.buttonId, document.getElementById("liveagent_button_online_" + e.buttonId)),
		liveagent.showWhenOffline(e.buttonId, document.getElementById("liveagent_button_offline_" + e.buttonId))
	}),
	liveagent.addCustomDetail("deltaSr", e.srNumber).saveToTranscript("Delta_Sr__c"),
	liveagent.findOrCreate("Case").map("Delta_SR__c", "deltaSr", !0, !1, !0).showOnCreate(),
	liveagent.init(e.liveAgentInitUrl, e.deploymentId, e.organizationId),
	liveagent.setName(e.firstName + " " + e.lastName)
}
function startLiveAgentChat(e) {
	liveagent.startChat(e)
}
function eleExist(e, t) {
	var a = setInterval(function () {
			if ($(e).length > 0)
				try {
					t(e, a)
				} catch (i) {
					console.log("error in " + t + " function: " + i)
				}
		}, 1e3)
}
function detectScreen() {
	var e = window.outerWidth,
	t = window.outerHeight;
	return e > 1920 && t > 1080 ? {
		width: "350px",
		height: "500px"
	}
	 : e > 1366 && t > 1080 ? {
		width: "300px",
		height: "450px"
	}
	 : {
		width: "250px",
		height: "400px"
	}
}
function triggerChatBot(e) {
	var t = function (t) {
		embedded_svc.settings.displayHelpButton = !0,
		embedded_svc.settings.language = "",
		embedded_svc.settings.avatarImgURL = "",
		embedded_svc.settings.prechatBackgroundImgURL = "",
		embedded_svc.settings.waitingStateBackgroundImgURL = "",
		embedded_svc.settings.smallCompanyLogoImgURL = "",
		embedded_svc.settings.enabledFeatures = ["LiveAgent"],
		embedded_svc.settings.entryFeature = "LiveAgent",
		embedded_svc.init(e.chatBotInitURL, e.chatBotLAURL, t, e.organizationId, e.componentName, {
			baseLiveAgentContentURL: e.baseLiveAgentContentURL,
			deploymentId: e.deploymentId,
			buttonId: e.buttonId,
			baseLiveAgentURL: e.baseLiveAgentURL,
			eswLiveAgentDevName: e.LiveAgentDevName,
			isOfflineSupportEnabled: !1
		})
	};
	if (window.embedded_svc)
		t(e.serviceForceURL);
	else {
		var a = document.createElement("script");
		a.setAttribute("src", e.snapInJs),
		a.onload = function () {
			t(null)
		},
		document.body.appendChild(a)
	}
}
function alignChatNow(e, t) {
	$(e).css("margin-bottom", "39px"),
	$(e).css("margin-right", "-19px")
}
var snapinChatGlobalIssueType, snapinChatGlobalServiceTag, snapinChatGlobalProductName = null, triggerChatButtonId = null;
!function () {
	window.addEventListener("dragover", function (e) {
		e = e || event,
		e.preventDefault()
	}, !1),
	window.addEventListener("drop", function (e) {
		e = e || event,
		e.preventDefault()
	}, !1)
}
(), eleExist(".helpButtonLabel .message", checkAgentOffline), eleExist(".helpButtonEnabled #helpButtonSpan > .message", chatClick), eleExist(".dockableContainer .ended.embeddedServiceLiveAgentStateChatMessage", chatEnded), eleExist(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingCancelChat", chatEndedOnWaiting), $("body").on("click", ".embeddedServiceHelpButton > .helpButton", function () {
	eleExist(".embeddedServiceSidebarFeature .embeddedServiceLiveAgentStatePrechatDefaultUI .embeddedServiceSidebarForm .embeddedServiceSidebarFormField .Issue_Description__c", addCharectorRemaining),
	virtualSnapInObjectSession(!0)
}), window.addEventListener("click", function (e) {
	if ("function" == typeof dellmetricsTrack && dellmetricsTrack) {
		var t = e.target || e.srcElement;
		new Date;
		switch ($(t).closest("button").attr("class")) {
		case "startButton uiButton--default uiButton embeddedServiceSidebarButton":
			if (void 0 == $(".sidebarBody .FirstName").val() && void 0 == $(".sidebarBody .LastName").val() && void 0 == $(".sidebarBody .Email.slds-style-inputtext").val() && void 0 == $(".sidebarBody .Primary_Phone__c").val() && void 0 == $(".sidebarBody .Issue_Description__c").val()) {
				var a = sessionStorage.getItem("snapInObjectSession"),
				i = JSON.parse(a),
				n = JSON.stringify(i.snapinPreChatFormValues);
				dellmetricsTrack("890.220.002", "PrechatComplete" + n)
			}
			break;
		case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
			dellmetricsTrack("890.220.003", "ClickedOn '" + t.innerText + "' button");
			break;
		case "dialogButton dialog-button-1 uiButton embeddedServiceSidebarButton":
			dellmetricsTrack("890.220.004", "ClickedOn '" + t.innerText + "' button");
			break;
		case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
			dellmetricsTrack("890.220.004", "ClickedOn '" + t.innerText + "' button");
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
			"chatOption embeddedServiceLiveAgentStateChatHeaderOption" == $(t).closest("a").attr("class") && dellmetricsTrack("890.220.009", "ClickedOn " + $(t).closest("a").text())
		}
	}
}), window.addEventListener("blur", function (e) {
	var t = e.target.id;
	if ("FirstName" == t || "LastName" == t || "Email" == t || "Primary_Phone__c" == t || "Issue_Description__c" == t) {
		var a = $("#FirstName").val() + "|" + $("#LastName").val() + "|" + $("#Email").val() + "|" + $("#Primary_Phone__c").val(),
		i = sessionStorage.getItem("snapInObjectSession");
		snapInObject = JSON.parse(i),
		snapInObject.snapinPreChatFormValues = a,
		i = JSON.stringify(snapInObject),
		sessionStorage.setItem("snapInObjectSession", i)
	}
}, !0), eleExistWithVariable(".waitingStateContainer .header.queuePositionNumber", waitChatCounter, 0), "function" == typeof triggerSnapin && triggerSnapin(), eleExist(".embeddedServiceSidebar .dockableContainer, .embeddedServiceHelpButton .helpButton, .embeddedServiceSidebar .sidebarHeader.minimizedContainer", alignChatNow);