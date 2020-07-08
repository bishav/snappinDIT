function hideDomObject(n, t) {
    try {
        document.querySelector(n).style.display = "none";
        clearInterval(t)
    } catch (i) {
        console.log("Error in:" + i)
    }
}
function hideOtherDomObject(n, t, i) {
    try {
        document.querySelector(i).style.display = "none";
        clearInterval(t)
    } catch (r) {
        console.log("Error in:" + r)
    }
}
function initSnapIn(n) {
    let i = document.getElementById("esw_storage_iframe");
    if (!i)
        if (window.embedded_svc)
            initOriginalESW(n.serviceForceURL, n);
        else {
            var t = document.createElement("script");
            t.setAttribute("src", n.snapInJs);
            t.onload = function() {
                initOriginalESW(null, n)
            }
            ;
            document.body.appendChild(t)
        }
}
function triggerSnapin(n, t) {
    try {
        if (!(sessionStorage.getItem("isChatBotActive") != null && sessionStorage.getItem("isChatBotActive") == "true"))
            if (typeof isSnapinInitiated == "function" && isSnapinInitiated()) {
                let n = sendGlobalSnapinCareObjToJson();
                initiateChatCARE(n)
            } else
                n === undefined && history.length > 1 && snapinChatGlobalObjNotEmpty() ? (n = sendGlobalSnapinObjToJson(),
                "snapinChatInitiated"in n && n.snapinChatInitiated && (eleExist(".helpButtonEnabled #helpButtonSpan > .message", chatClick),
                pageObserverForProp20("body", t),
                initSnapIn(n))) : n && (n.snapinButtonClicked || snapinChatGlobalObjNotEmpty() ? customChatNotCreated() && (n = sendGlobalSnapinObjToJson(),
                n.snapinButtonClicked = !0,
                saveGlobalSnapinObjToSession(n),
                appendCustPreChatSnapinDom(n, t)) : (eleExist(".embeddedServiceHelpButton", hideDomObject),
                eleExistWithVariable(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI", hideOtherDomObject, ".embeddedServiceSidebar"),
                saveGlobalSnapinObjToSession(n),
                document.getElementById("cusPreChatSnapinDom") && custPreChatShowAdditionalDetailsInUi(n, t),
                initSnapIn(n)))
    } catch (i) {
        console.log("Error in: " + i)
    }
}
function customChatNotCreated() {
    let n = document.getElementById("cusPreChat-embeddedServiceHelpButton")
      , t = document.querySelector(".embeddedServiceSidebar .dockableContainer")
      , i = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
    return i ? !1 : n && window.getComputedStyle(n).display != "none" && !t ? (prechatSettingForEmc(),
    document.getElementById("cusPreChat-helpButtonEnabled").click(),
    !1) : !0
}
function appendCustPreChatSnapinDom(n, t) {
    if (document.getElementById("cusPreChatSnapinDom")) {
        let n = document.querySelector(".embeddedServiceSidebar")
          , i = document.getElementById("cusPreChatSnapinDom");
        (!n || n && window.getComputedStyle(n).display == "none") && window.getComputedStyle(i).display == "none" && maximizeCustPrechat();
        let t = document.querySelector(".embeddedServiceHelpButton .helpButton .uiButton");
        t && !t.classList.contains("helpButtonEnabled") && agentsOfflinePostChatForm()
    } else {
        "isEmcProduct"in n && n.isEmcProduct && (t.serviceTag = t.serialNumber);
        let i = '<div id="cusPreChatSnapinDom" class="cusPreChat-modalContainer"> <div class="cusPreChat-dockableContainer"> <div class="cusPreChat-embeddedServiceSidebarHeader"> <div class="cusPreChat-shortHeader"> <div class="cusPreChat-shortHeaderContent"> <button id="cusPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat<\/span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> <\/path> <\/svg> <\/span> <\/button> <h2 class="cusPreChat-headerText"> <div class="cusPreChat-headerTextContent"> <span id="cusPreChat-headerTextLabel">' + t.chatHeader + '<\/span> <span id="cusPreChat-headerSubtext"> <\/span><\/div><\/h2> <button id="cusPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat<\/span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> <\/path> <\/svg> <\/span> <\/button> <\/div><\/div><\/div><div class="cusPreChat-sidebarBody"> <div id="cusPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"> <div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> <\/span> <span class="cusPreChat-loadingBall cusPreChat-second"> <\/span> <span class="cusPreChat-loadingBall cusPreChat-third"> <\/span><\/div><\/div><div id="cusPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">' + t.chatUnavailableMessage + '<\/div><div><button id="cusPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat<\/span><\/button><\/div><\/div><div id="cusPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"> <div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"> <div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"> <div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"> <div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"> <ul class="cusPreChat-fieldList"> <div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 0 1.5em 6px 1.5em; text-align: left;position: relative;font-size: .75em;color: #444444;"> <div style="font-size: 1.2em;">Precision M4500<\/div><div> <b>' + t.serviceTag + ":<\/b> 123432<\/div><div> <b>" + t.issueType + ':<\/b> Keyboard not working<\/div><\/div><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">' + t.firstName + '<\/span><\/label> <input id="cusPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/span> <\/li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">' + t.lastName + '<\/span> <\/label> <input id="cusPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/span> <\/li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>' + t.emailAddress + '<\/span><\/label> <input id="cusPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>' + t.phoneNumber + '<\/span> <\/label> <input id="cusPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li><li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="Issue_Description_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>' + t.issueDescription + '<\/span> <\/label> <textarea id="cusPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input coveo-query" maxlength="' + t.issueDescriptionLength + '" type="text" aria-describedby="" placeholder="" required="" data-coveo-id="txtIssueDetails"><\/textarea><div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / ' + t.issueDescriptionLength + " " + t.characters + '<\/div><\/div><\/li><\/ul>  <div id="PrechatCoveo" style="display:none;"><\/div> <div style="font-size: 12px;color:#767676;text-align: left;margin: 2.5em 1.75em; font-style: italic;color:#444444;">' + t.customerPrivacyDesc + '<\/div><\/div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">' + t.startChat + '<\/span> <\/button><\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div><div id="cusPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"> <div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)" > <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"><\/path> <\/svg> <\/span> <div class="cusPreChat-helpButtonLabel" id="cusPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:<\/span> <span class="cusPreChat-message">' + t.chatHeader + "<\/span><\/div><\/button> <\/div><\/div>"
          , r = document.body || document.getElementsByTagName("body")[0];
        r.insertAdjacentHTML("beforeend", i);
        prePopulateCustPreFormValues(n);
        checkIfIssueDescIsOptional(n, t);
        custPreFormShowIssueDetailsCharRemainingOnKeyUp(t);
        custPreChatKeypressFieldValidation(t);
        custPreChatShowAdditionalDetailsInUi(n, t);
        n = create_snapinChatUuid(n);
        document.getElementById("cusPreChat-startChat").addEventListener("click", function() {
            custPrechatInitiateChat(n, t)
        });
        document.getElementById("cusPreChat-minimize-btn").addEventListener("click", function() {
            callDellmetricsTrack("890.220.007", "SNAPIN: Minimize");
            minimizeCustPrechat()
        });
        document.getElementById("cusPreChat-close-btn").addEventListener("click", function() {
            callDellmetricsTrack("890.220.006", "SNAPIN: Close (x)");
            closeCustPrechat(t)
        });
        document.getElementById("cusPreChat-helpButtonEnabled").addEventListener("click", function() {
            callDellmetricsTrack("890.220.008", "SNAPIN: Maximize");
            maximizeCustPrechat()
        });
        eleExist(".helpButtonEnabled #helpButtonSpan > .message", chatClick);
        typeof n.isPCFCall != "undefined" && n.isPCFCall && (isPCFCall = n.isPCFCall);
        n.isCoveoSearchEnabled === !0 && (httpCoveoGetAsync(n.coveoViewUrl + "?isheaderRequired=false", apendToAHoverDiv),
        coveoInit(n, t))
    }
    prechatSettingForEmc();
    callDellmetricsTrack("890.220.010", "SNAPIN: Window Load")
}
function prechatSettingForEmc() {
    makeIdReadWrite("cusPreChat-FirstName");
    makeIdReadWrite("cusPreChat-LastName");
    makeIdReadWrite("cusPreChat-Email");
    makeIdReadWrite("cusPreChat-Phone");
    "isEmcProduct"in snapInObject && snapInObject.isEmcProduct && (makeIdReadOnlyIfHasVal("cusPreChat-FirstName"),
    makeIdReadOnlyIfHasVal("cusPreChat-LastName"),
    makeIdReadOnlyIfHasVal("cusPreChat-Email"),
    makeIdReadOnlyIfHasVal("cusPreChat-Phone"))
}
function makeIdReadOnlyIfHasVal(n) {
    document.getElementById(n) && document.getElementById(n).value ? document.getElementById(n).readOnly = !0 : makeIdReadWrite(n)
}
function makeIdReadWrite(n) {
    document.getElementById(n).readOnly = !1
}
function checkIfIssueDescIsOptional(n, t) {
    if ("issueVal"in n && n.issueVal != "" && n.issueVal != null && n.issueVal != undefined && n.issueVal != "None" && document.getElementById("Issue_Description_Cust_Label")) {
        removeDomElementbyId("issueDescIsOptional");
        let n = document.createElement("span");
        n.id = "issueDescIsOptional";
        n.innerText = t.optional;
        let i = document.getElementById("Issue_Description_Cust_Label");
        i.appendChild(n);
        removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription")
    } else
        removeDomElementbyId("issueDescIsOptional")
}
function httpCoveoGetAsync(n, t) {
    try {
        var i = new XMLHttpRequest;
        i.onreadystatechange = function() {
            i.readyState == 4 && i.status == 200 && t(i.responseText)
        }
        ;
        i.open("GET", n, !0);
        i.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
        i.setRequestHeader("Content-Type", "text/plain; charset=utf-8");
        i.send(null)
    } catch (r) {
        console.log("Error in: " + r)
    }
}
function apendToAHoverDiv(n) {
    $("#PrechatCoveo").append(n)
}
function coveoInit(n, t) {
    try {
        n.isCoveoSearchEnabled === !0 && (isCoveoSearchEnabled = !0,
        coveoHeader = t.coveoHeader,
        setTimeout(function() {
            $.getScript(n.coveoJsUrl, function() {
                $.getScript(n.coveoDeflectionjs, function() {
                    var t = ""
                      , i = !1;
                    n.emcProductId ? (t = n.emcProductId,
                    i = !0) : t = n.productCode;
                    InitiateCoveoSearch(t, n.productName, n.categoryPath, i, "chat", "", n.issueVal)
                })
            });
            $("#cusPreChat-IssueDescription").on("keyup", function() {
                GetCoveoPopoverResult(n.coveoSetDelay)
            });
            $("#cusPreChat-IssueDescription").on("click", function() {
                GetCoveoPopoverResult(n.coveoSetDelay)
            });
            $("div").on("scroll", function() {
                $("#prechatCoveo").css("display") == "block" && GetCoveoPopoverResult(0)
            });
            $(window).on("scroll", function() {
                $("#prechatCoveo").css("display") == "block" && GetCoveoPopoverResult(0)
            })
        }, 2e3))
    } catch (i) {
        console.log("Error in: " + i)
    }
}
function GetCoveoPopoverResult(n) {
    (n === undefined || n === "") && (n = 1200);
    var t = $("#cusPreChat-IssueDescription").val().length;
    isPCFCall === !0 && isCoveoSearchEnabled === !0 && t > 1 && $("#searchcoveoview").hasClass("coveo-hidden") === !1 && $("#searchcoveoview").find("div.CoveoResult").length !== 0 ? setTimeout(function() {
        $("#cusPreChat-IssueDescription").popover({
            html: !0,
            container: "body",
            template: '<div class="popover popoverPosition" id="prechatCoveoPopover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>',
            title: function() {
                return "<b>" + coveoHeader + "<\/b><a href='#' class='close' data-dismiss='alert'>&times;<\/a>"
            },
            content: function() {
                return $("#searchCoveo").html()
            }
        });
        $(document).off("click", ".popover .close").on("click", ".popover .close", function() {
            $(this).parents(".popover").popover("hide");
            callDellmetricsTrack("890.222.134")
        });
        $("#cusPreChat-IssueDescription").popover("show")
    }, n) : isCoveoSearchEnabled === !0 && t > 1 && $("#search").hasClass("coveo-hidden") === !1 && $("#search").find("div.CoveoResult").length !== 0 ? setTimeout(function() {
        $("#cusPreChat-IssueDescription").popover({
            html: !0,
            template: '<div class="popover" id="prechatCoveo"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>',
            title: function() {
                return "<b>" + coveoHeader + "<\/b><button id='popovercloseid' type='button' data-dismiss='popover' class='close' onclick='$(&quot;#cusPreChat-IssueDescription&quot;).popover(&quot;hide&quot;)' return false;>&times;<\/button>"
            },
            content: function() {
                return $("#searchCoveo").html()
            },
            container: "body",
            placement: "left"
        }).data("bs.popover").tip().addClass("popoverPosition");
        $("#cusPreChat-IssueDescription").popover("show")
    }, n) : CoveoPopoverDispose()
}
function CoveoPopoverDispose() {
    isCoveoSearchEnabled === !0 && (isPCFCall ? $("#cusPreChat-IssueDescription").popover("dispose") : $("#cusPreChat-IssueDescription").popover("destroy"))
}
function prePopulateCustPreFormValues(n) {
    "firstName"in n && (document.getElementById("cusPreChat-FirstName").value = n.firstName);
    "lastName"in n && (document.getElementById("cusPreChat-LastName").value = n.lastName);
    "email"in n && (document.getElementById("cusPreChat-Email").value = n.email);
    "phoneNo"in n && (document.getElementById("cusPreChat-Phone").value = n.phoneNo);
    "issueDescription"in n && (document.getElementById("cusPreChat-IssueDescription").value = n.issueDescription)
}
function custPreFormShowIssueDetailsCharRemainingOnKeyUp(n) {
    try {
        document.getElementById("cusPreChat-IssueDescription").onkeyup = function() {
            custPreFormShowIssueDetailsCharRemaining(n)
        }
    } catch (t) {
        console.log("Error in:" + t)
    }
}
function custPreFormShowIssueDetailsCharRemaining(n) {
    maxCharLength = n.issueDescriptionLength;
    innerTextColor = "#767676";
    currentCharLength = document.getElementById("cusPreChat-IssueDescription").value.length;
    document.getElementById("snappinCharCounter").innerText = currentCharLength + " / " + maxCharLength + " " + n.characters;
    innerTextColor = currentCharLength === parseInt(maxCharLength) ? "#c23934" : "#767676";
    document.getElementById("snappinCharCounter").style.color = innerTextColor
}
function custPreChatKeypressFieldValidation(n) {
    function r(i, r) {
        /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t(i)) == !0 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : r === "cusPreChat-FirstName" && document.getElementById("ErrMsg_cusPreChat-FirstName") ? removeDomElementbyId("ErrMsg_cusPreChat-FirstName") : r === "cusPreChat-LastName" && document.getElementById("ErrMsg_cusPreChat-LastName") && removeDomElementbyId("ErrMsg_cusPreChat-LastName")
    }
    function t(n) {
        return n.clipboardData && n.clipboardData.getData ? n.clipboardData.getData("text/plain") : null
    }
    document.getElementById("cusPreChat-Phone").onkeypress = function(n) {
        var t = []
          , r = n.which || n.keyCode;
        for (i = 48; i < 58; i++)
            t.push(i);
        t.push(45);
        t.push(8);
        t.push(9);
        t.indexOf(r) >= 0 ? document.getElementById("ErrMsg_cusPreChat-Phone") && removeDomElementbyId("ErrMsg_cusPreChat-Phone") : n.preventDefault()
    }
    ;
    document.getElementById("cusPreChat-FirstName").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 64 && t < 91 || t > 96 && t < 123 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusPreChat-FirstName") && removeDomElementbyId("ErrMsg_cusPreChat-FirstName") : n.preventDefault()
    }
    ;
    document.getElementById("cusPreChat-LastName").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 64 && t < 91 || t > 96 && t < 123 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusPreChat-LastName") && removeDomElementbyId("ErrMsg_cusPreChat-LastName") : n.preventDefault()
    }
    ;
    document.getElementById("cusPreChat-Email").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 63 && t < 91 || t > 96 && t < 123 || t > 47 && t < 58 || t == 45 || t == 46 || t == 95 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusPreChat-Email") && removeDomElementbyId("ErrMsg_cusPreChat-Email") : n.preventDefault()
    }
    ;
    document.getElementById("cusPreChat-IssueDescription").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t == 62 || t == 60 ? n.preventDefault() : document.getElementById("ErrMsg_cusPreChat-IssueDescription") && removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription")
    }
    ;
    document.getElementById("cusPreChat-FirstName").addEventListener("paste", function(n) {
        r(n, "cusPreChat-FirstName")
    });
    document.getElementById("cusPreChat-LastName").addEventListener("paste", function(n) {
        r(n, "cusPreChat-LastName")
    });
    document.getElementById("cusPreChat-IssueDescription").addEventListener("paste", function(i) {
        /[<>]/.test(t(i)) == !0 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusPreChat-IssueDescription") && removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription")
    });
    document.getElementById("cusPreChat-Email").addEventListener("paste", function(i) {
        /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/.test(t(i)) == !0 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusPreChat-Email") && removeDomElementbyId("ErrMsg_cusPreChat-Email")
    });
    document.getElementById("cusPreChat-Phone").addEventListener("paste", function(i) {
        /^[0-9-]*$/.test(t(i)) == !1 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusPreChat-Phone") && removeDomElementbyId("ErrMsg_cusPreChat-Phone")
    })
}
function custPreChatShowAdditionalDetailsInUi(n, t) {
    document.getElementById("readonlyPreChatContainer") && removeDomElement(document.getElementById("readonlyPreChatContainer"));
    let r = document.querySelector(".cusPreChat-sidebarBody .cusPreChat-prechatUI  .cusPreChat-embeddedServiceSidebarForm ul.cusPreChat-fieldList"), i;
    checkIfIssueDescIsOptional(n, t);
    "isEmcProduct"in n && n.isEmcProduct && (t.serviceTag = t.serialNumber);
    i = n.productName == null ? '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.2em; text-align: left;position: relative;font-size: .75em;color: #444444;margin-bottom: 0px;">' + getChatServiceTag(t.serviceTag, n.serviceTag) + "<div><b>" + t.issueType + ':<\/b> <span class="coveo-query" data-coveo-id="IssueDesc" id="preChatIssueDesc" style="font-size: 12px;">' + n.issueVal + "<\/span><\/div><\/div>" : '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.2em; text-align: left;position: relative;font-size: .75em;color: #444444;"><div style="font-size: 1.2em;">' + n.productName + "<\/div>" + getChatServiceTag(t.serviceTag, n.serviceTag) + "<div><b>" + t.issueType + ':<\/b> <span class="coveo-query" data-coveo-id="IssueDesc" id="preChatIssueDesc" style="font-size:12px;">' + n.issueVal + "<\/span><\/div><\/div>";
    r.insertAdjacentHTML("afterbegin", i)
}
function custPreFormValidation(n) {
    var i;
    let t, r = document.getElementById("cusPreChat-FirstName"), u = document.getElementById("cusPreChat-LastName"), f = document.getElementById("cusPreChat-Email"), e = document.getElementById("cusPreChat-Phone"), o = document.getElementById("cusPreChat-IssueDescription");
    if (document.getElementById("ErrMsg_cusPreChat-Email")) {
        let n = document.getElementById("ErrMsg_cusPreChat-Email");
        n.parentNode.removeChild(n)
    }
    return t = f.value ? cusPreChatInvalidEmail(f, n) : cusPreChatEleIsEmpty(f, n.emailRequiredValidation),
    document.getElementById("ErrMsg_cusPreChat-FirstName") ? (i = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    checkErrMsgValidation(r, "FirstName", i, !0) && (t = !1)) : r.value || (t = cusPreChatEleIsEmpty(r, n.firstNameValidation)),
    document.getElementById("ErrMsg_cusPreChat-LastName") ? (i = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    checkErrMsgValidation(u, "LastName", i, !0) && (t = !1)) : u.value || (t = cusPreChatEleIsEmpty(u, n.lastNameValidation)),
    document.getElementById("ErrMsg_cusPreChat-Phone") ? (i = /^[0-9-]*$/,
    checkErrMsgValidation(e, "Phone", i, !1) && (t = !1)) : e.value || (t = cusPreChatEleIsEmpty(e, n.phoneRequiredValidation)),
    document.getElementById("ErrMsg_cusPreChat-IssueDescription") ? t = !1 : o.value || document.getElementById("issueDescIsOptional") || (t = cusPreChatEleIsEmpty(o, n.issueDescriptionValidation)),
    t === undefined && (t = !0),
    t
}
function getChatServiceTag(n, t) {
    return t && t != null ? "<div><b>" + n + ":<\/b> " + t + "<\/div>" : ""
}
function checkErrMsgValidation(n, t, i, r) {
    if (n.value && i.test(n.value) == r || !n.value)
        return !0;
    var f = "ErrMsg_cusPreChat-" + t
      , u = document.getElementById(f);
    return u.parentNode.removeChild(u),
    !1
}
function cusPreChatEleIsEmpty(n, t) {
    return cusPreChatErrorMsgPlaceholder(n, t),
    !1
}
function cusPreChatInvalidEmail(n, t) {
    if (!cusPreChatvalidateEmail(n.value) || cusPreChatBlockListEmailValidation(n.value, t.blocklistEmails))
        return cusPreChatErrorMsgPlaceholder(n, t.emailValidation),
        !1
}
function cusPreChatvalidateEmail(n) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
}
function cusPreChatBlockListEmailValidation(n, t) {
    var u = t.split("|"), n = n.toUpperCase(), r;
    for (i = 0; i < u.length; i++)
        if (r = u[i],
        r = r.toUpperCase(),
        n === r)
            return !0;
    return !1
}
function cusPreChatErrorMsgPlaceholder(n, t) {
    try {
        let r = n.parentNode
          , i = document.createElement("ul");
        i.innerHTML = '<li class="cusPreChat-form-element__help">' + t + "<\/li>";
        i.id = "ErrMsg_" + n.id;
        i.className = "cusPreChat-has-error cusPreChat-uiInput";
        r.parentNode.insertBefore(i, r.nextSibling)
    } catch (i) {
        console.log(i)
    }
}
function removeDomElementbyId(n) {
    if (document.getElementById(n)) {
        let t = document.getElementById(n);
        t.parentNode.removeChild(t)
    }
}
function minimizeCustPrechat() {
    document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = "block";
    document.getElementById("cusPreChatSnapinDom").style.display = "none";
    CoveoPopoverDispose()
}
function closeCustPrechat(n) {
    document.getElementById("cusPreChatSnapinDom").style.display = "none";
    let t = document.querySelectorAll(".cusPreChat-has-error");
    t.forEach(function(n) {
        removeDomElement(n)
    });
    removecustFormValues();
    custPreFormShowIssueDetailsCharRemaining(n);
    CoveoPopoverDispose()
}
function maximizeCustPrechat() {
    let n = document.querySelector(".embeddedServiceHelpButton .helpButton .uiButton");
    (!n || n.classList.contains("helpButtonEnabled")) && n ? (document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = "none",
    document.getElementById("cusPreChat-hideWhileLoading").style.display = "block",
    document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = "none",
    document.getElementById("cusPreChatSnapinDom").style.display = "block",
    document.getElementById("cusPreChat-minimize-btn").style.display = "block",
    document.getElementById("cusPreChat-close-btn").style.display = "block") : agentsOfflinePostChatForm();
    document.querySelector(".embeddedServiceHelpButton") && (document.querySelector(".embeddedServiceHelpButton").style.display = "none")
}
function addCustFormDetailsTo(n) {
    return n.c_firstName = document.getElementById("cusPreChat-FirstName").value,
    n.c_lastName = document.getElementById("cusPreChat-LastName").value,
    n.c_email = document.getElementById("cusPreChat-Email").value,
    n.c_phoneNo = document.getElementById("cusPreChat-Phone").value,
    n.c_issueDescription = document.getElementById("cusPreChat-IssueDescription").value,
    n
}
function removecustFormValues() {
    inputFields = document.querySelectorAll(".cusPreChat-input");
    inputFields.forEach(function(n) {
        n.value && (n.value = "")
    });
    prePopulateCustPreFormValues(snapInObject)
}
function snapinChatGlobalObjNotEmpty() {
    return snapInObjectGlobal = sendGlobalSnapinObjToJson(),
    snapInObjectGlobal != null && "snapinChatInitiated"in snapInObjectGlobal && snapInObjectGlobal.snapinChatInitiated ? !0 : (snapInObjectGlobal != null && sessionStorage.removeItem("snapInObjectSession"),
    !1)
}
function saveGlobalSnapinObjToSession(n) {
    n && (snapInObjectGlobal = JSON.stringify(n),
    sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal))
}
function sendGlobalSnapinObjToJson() {
    return snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession"),
    snapInObject = JSON.parse(snapInObjectGlobal)
}
function loadingSnapinQueue() {
    document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = "flex";
    document.getElementById("cusPreChat-hideWhileLoading").style.display = "none";
    document.getElementById("cusPreChat-minimize-btn").style.display = "none";
    document.getElementById("cusPreChat-close-btn").style.display = "none";
    removeLoaderIn10()
}
function snapinQueueLoaded() {
    document.querySelector(".embeddedServiceSidebar") && document.getElementById("cusPreChatSnapinDom") && (document.querySelector(".embeddedServiceSidebar").style.display = "block",
    document.getElementById("cusPreChatSnapinDom").style.display = "none",
    document.getElementById("cusPreChat-alertMsgContainer").style.display = "none",
    document.getElementById("cusPreChat-hideWhileLoading").style.display = "block",
    document.getElementById("cusPreChat-minimize-btn").style.display = "block",
    document.getElementById("cusPreChat-close-btn").style.display = "block")
}
function agentsOfflinePostChatForm() {
    snapinChatInitiatedState(!1);
    document.getElementById("cusPreChatSnapinDom").style.display = "block";
    document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = "none";
    document.getElementById("cusPreChat-alertMsgContainer").style.display = "flex";
    document.getElementById("cusPreChat-hideWhileLoading").style.display = "none";
    document.getElementById("cusPreChat-minimize-btn").style.display = "none";
    document.getElementById("cusPreChat-close-btn").style.display = "none";
    document.getElementById("cusPreChat-CloseChat").addEventListener("click", function() {
        document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = "none";
        document.getElementById("cusPreChat-alertMsgContainer").style.display = "none";
        document.getElementById("cusPreChat-alertMsgContainer").style.display = "none";
        document.getElementById("cusPreChat-hideWhileLoading").style.display = "block";
        document.getElementById("cusPreChatSnapinDom").style.display = "none"
    })
}
function removeLoaderIn10() {
    setTimeout(function() {
        let n = document.getElementById("cusPreChat-sidebarLoadingIndicator");
        n && window.getComputedStyle(n).display != "none" && (document.getElementById("cusPreChatSnapinDom").style.display = "none",
        document.querySelector(".embeddedServiceHelpButton") && (document.querySelector(".embeddedServiceHelpButton").style.display = "block"));
        let t = document.querySelector(".embeddedServiceHelpButton .helpButton .uiButton");
        t && !t.classList.contains("helpButtonEnabled") && snapinChatInitiatedState(!1);
        hideResumeSnapinLoader()
    }, 3e4)
}
function snapinChatInitiatedState(n) {
    snapInObject = sendGlobalSnapinObjToJson();
    snapInObject && (snapInObject.snapinChatInitiated = n,
    saveGlobalSnapinObjToSession(snapInObject))
}
function custPrechatInitiateChat(n, t) {
    custPreFormValidation(t) && (n = addCustFormDetailsTo(n),
    n.sprinklrChatbotRouted = !1,
    saveGlobalSnapinObjToSession(n),
    pageObserverForProp20("body", t),
    loadingSnapinQueue(),
    removecustFormValues(),
    custPreFormShowIssueDetailsCharRemaining(t),
    n = sendGlobalSnapinObjToJson(),
    callDellmetricsTrack("890.220.002", "SNAPIN: Submit|Description=" + descriptionHasValue(n)),
    checkSnapinQueueStatus(n) == 1 ? checkSprinklrChatBot(n) ? (document.getElementById("cusPreChatSnapinDom").style.display = "none",
    startSprinklr()) : connectToSnapInAgent(n) : agentsOfflinePostChatForm());
    CoveoPopoverDispose()
}
function descriptionHasValue(n) {
    return "c_issueDescription"in n && n.c_issueDescription != "" ? "True" : "False"
}
function checkSprinklrChatBot(n) {
    try {
        if (n.language && n.productCode && n.issueVal) {
            var t = {
                engine: "dellintent",
                payloadTags: {
                    lng: n.language,
                    productCode: n.productCode,
                    productName: n.productName,
                    issueType: n.issueType,
                    issueVal: n.issueVal,
                    serviceTag: n.serviceTag
                },
                requestId: n.uuid,
                text: n.c_issueDescription,
                user_firstName: n.c_firstName,
                user_lastName: n.c_lastName,
                user_email: n.c_email,
                user_phoneNo: n.c_phoneNo,
                sprinklrURL: n.sprinklrURL != null && n.sprinklrURL != undefined ? n.sprinklrURL : null,
                intentApiURL: n.intentApiURL != null && n.intentApiURL != undefined ? n.intentApiURL : null,
                sprinklrLoadingMessage: n.sprinklrLoadingMessage != null && n.sprinklrLoadingMessage != undefined ? n.sprinklrLoadingMessage : null
            };
            return canSupportSprinklr(t)
        }
        return console.log("Sprinklr required Value is missing in snapInObject. Pleae check the below object value", n),
        !1
    } catch (i) {
        return console.log("checkSprinklrChatBot-Error:", i),
        !1
    }
}
function triggerSnapinPostSprinkler(n) {
    snapInObject = sendGlobalSnapinObjToJson();
    snapInObject.caseNumber = n;
    snapInObject.sprinklrChatbotRouted = !0;
    saveGlobalSnapinObjToSession(snapInObject);
    connectToSnapInAgent(snapInObject)
}
function sprinklerChatEnded() {
    snapinChatInitiatedState(!1);
    var t = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI")
      , n = document.querySelector(".modalContainer  .dockableContainer .closeButton.headerItem");
    t && n && n.click();
    console.log("Sprinklr Chat ended Successfully");
    console.log(sendGlobalSnapinObjToJson())
}
function connectToSnapInAgent(n) {
    pushValsToSnapinInit(n);
    checkSnapinQueueStatus(n) == 1 ? (("snapinChatInitiated"in n && n.snapinChatInitiated || "snapinButtonClicked"in n && n.snapinButtonClicked) && eleExistWithVariable(".helpButtonEnabled #helpButtonSpan > .message", chatClick),
    eleExistWithVariable(".embeddedServiceSidebar .startButton", chatStarted, n)) : agentsOfflinePostChatForm()
}
function create_snapinChatUuid(n) {
    var t = (new Date).getTime()
      , i = "xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
        var i = (t + Math.random() * 18) % 18 | 0;
        return t = Math.floor(t / 18),
        (n == "x" ? i : i & 3 | 8).toString(18)
    });
    return n.uuid = i,
    saveGlobalSnapinObjToSession(n),
    n
}
function append_snapinChatUuid(n) {
    var t = sendGlobalSnapinObjToJson(), i, r;
    return t && "uuid"in t && (i = "|UUID:" + t.uuid,
    r = 100 - i.length,
    r < n.length && n.slice(0, r),
    n = n + i),
    n
}
function pushValsToSnapinInit(n) {
    console.log("pushValsToSnapinInit", n);
    var i = embedded_svc.settings.extraPrechatFormDetails
      , t = 0;
    i.forEach(function(i) {
        var r = i.transcriptFields[0];
        switch (r) {
        case "Issue__c":
            embedded_svc.settings.extraPrechatFormDetails[t].value = "isEmcProduct"in n && n.isEmcProduct && "chatSeverity"in n ? n.chatSeverity + " " + n.issueVal : getTechSupportSubject(n);
            break;
        case "Issue_Key__c":
            embedded_svc.settings.extraPrechatFormDetails[t].value = getIssueTypeKey(n);
            break;
        case "Service_Tag__c":
            embedded_svc.settings.extraPrechatFormDetails[t].value = "isEmcProduct"in n && n.isEmcProduct && "cpid"in n ? n.cpid : n.serviceTag;
            break;
        case "Case_Number__c":
            embedded_svc.settings.extraPrechatFormDetails[t].value = n.caseNumber ? n.caseNumber : "";
            break;
        case "Sprinklr_Chatbot_Routed__c":
            embedded_svc.settings.extraPrechatFormDetails[t].value = n.sprinklrChatbotRouted ? n.sprinklrChatbotRouted : !1
        }
        t++
    })
}
function checkSnapinQueueStatus(n) {
    function i(n) {
        try {
            var i = new XMLHttpRequest;
            i.onreadystatechange = function() {
                i.readyState == 4 && i.status == 200 && (t = i.responseText)
            }
            ;
            i.open("GET", n, !1);
            i.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
            i.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            i.send(null)
        } catch (r) {
            console.log("Error in: " + r)
        }
    }
    var t;
    return n.checkQueueStatusInBizHoursUrl && n.hoursOfOperation && n.timeZone && (n.checkQueueStatusInBizHoursUrl != "" || n.checkQueueStatusInBizHoursUrl != null || n.checkQueueStatusInBizHoursUrl != undifined) && (n.hoursOfOperation != "" || n.hoursOfOperation != null || n.hoursOfOperation != undifined) && (n.timeZone != "" || n.timeZone != null || n.timeZone != undifined) ? (i(n.checkQueueStatusInBizHoursUrl + "?chatHours=" + escape(n.hoursOfOperation) + "&timeZone=" + escape(n.timeZone) + "&buttonId=" + n.buttonId),
    t) : 1
}
function initOriginalESW(n, t) {
    snapInClickListners();
    snapinChatGlobalServiceTag = t.serviceTag;
    snapinChatGlobalIssueType = t.issueVal;
    snapinChatGlobalProductName = t.productName;
    embedded_svc.settings.displayHelpButton = !0;
    embedded_svc.settings.defaultMinimizedText = "Chat Now";
    embedded_svc.settings.enabledFeatures = ["LiveAgent"];
    embedded_svc.settings.entryFeature = "LiveAgent";
    "routingModel"in t && t.routingModel && t.routingModel.toLowerCase() === "skillbased" && (embedded_svc.settings.fallbackRouting = t.skillIds);
    translatedLabels = "language"in t ? translation(t.language) : translation("en");
    embedded_svc.settings.language = translatedLabels.language;
    let i = "Name";
    t.isEmcProduct ? (i = "External_ID__c",
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
        value: t.chatSeverity + " " + t.issueVal,
        transcriptFields: ["Issue__c"]
    }, {
        label: "Service Tag",
        value: t.cpid,
        transcriptFields: ["Service_Tag__c"]
    }, {
        label: translatedLabels.issueDesc,
        transcriptFields: ["Description__c"]
    }, {
        label: "Case Number",
        value: "",
        transcriptFields: ["Case_Number__c"]
    }, {
        label: "Sprinklr Chatbot Routed",
        value: "",
        transcriptFields: ["Sprinklr_Chatbot_Routed__c"]
    }, {
        label: "SubIssue Key",
        value: getIssueTypeKey(t),
        transcriptFields: ["Issue_Key__c"]
    }, {
        label: "Chat Source",
        value: "EMC",
        transcriptFields: ["Chat_Source__c"]
    }, {
        label: "Serial Number",
        value: t.serviceTag,
        transcriptFields: ["Serial_Number__c"]
    }]) : embedded_svc.settings.extraPrechatFormDetails = [{
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
        label: "Chat Source",
        value: getTechSupportChatSource(t),
        transcriptFields: ["Chat_Source__c"]
    }, {
        label: "Subject",
        value: getTechSupportSubject(t),
        transcriptFields: ["Issue__c"]
    }, {
        label: "SubIssue Key",
        value: getIssueTypeKey(t),
        transcriptFields: ["Issue_Key__c"]
    }, {
        label: "Case Number",
        value: "",
        transcriptFields: ["Case_Number__c"]
    }, {
        label: "Sprinklr Chatbot Routed",
        value: !1,
        transcriptFields: ["Sprinklr_Chatbot_Routed__c"]
    }, {
        label: "Service Tag",
        value: t.serviceTag,
        transcriptFields: ["Service_Tag__c"]
    }, {
        label: translatedLabels.issueDesc,
        transcriptFields: ["Description__c"]
    }];
    embedded_svc.settings.extraPrechatInfo = [{
        entityFieldMaps: [{
            doCreate: !1,
            doFind: !0,
            fieldName: "LastName",
            isExactMatch: !0,
            label: translatedLabels.lastName
        }, {
            doCreate: !1,
            doFind: !0,
            fieldName: "FirstName",
            isExactMatch: !0,
            label: translatedLabels.firstName
        }, {
            doCreate: !1,
            doFind: !0,
            fieldName: "Email",
            isExactMatch: !0,
            label: translatedLabels.emailAdd
        }, {
            doCreate: !1,
            doFind: !0,
            fieldName: "Primary_Phone__c",
            isExactMatch: !0,
            label: translatedLabels.primPhone
        }],
        entityName: "Contact",
        saveToTranscript: ""
    }, {
        entityFieldMaps: [{
            doCreate: !1,
            doFind: !0,
            fieldName: i,
            isExactMatch: !0,
            label: "Service Tag"
        }],
        entityName: "Asset",
        saveToTranscript: "Asset__c"
    }, {
        entityFieldMaps: [{
            doCreate: !1,
            doFind: !0,
            fieldName: "Issue_Description__c",
            isExactMatch: !0,
            label: translatedLabels.issueDesc
        }],
        entityName: "Case"
    }];
    var r = null
      , u = null
      , f = null
      , e = null
      , o = null;
    r = "c_firstName"in t ? t.c_firstName : "FirstName";
    u = "c_lastName"in t ? t.c_lastName : "LastName";
    f = "c_email"in t ? t.c_email : "email@dell.com";
    o = "c_phoneNo"in t ? t.c_phoneNo : "123";
    e = "c_issueDescription"in t ? t.c_issueDescription : "issueDescription";
    embedded_svc.settings.prepopulatedPrechatFields = {
        FirstName: r,
        LastName: u,
        Email: f,
        Primary_Phone__c: o,
        Issue_Description__c: e
    };
    embedded_svc.addEventHandler("onConnectionError", function() {
        snapinChatInitiatedState(!1)
    });
    embedded_svc.addEventHandler("onIdleTimeoutOccurred", function() {
        snapinChatInitiatedState(!1)
    });
    embedded_svc.addEventHandler("onChatEndedByChasitor", function() {
        snapinChatInitiatedState(!1)
    });
    embedded_svc.addEventHandler("onChatEndedByAgent", function() {
        snapinChatInitiatedState(!1)
    });
    embedded_svc.addEventHandler("onChasitorMessage", function() {
        snapinChatInitiatedState(!0)
    });
    embedded_svc.addEventHandler("onChatEstablished", function() {
        callDellmetricsTrack("890.220.013", "SNAPIN: Chat Started")
    });
    embedded_svc.addEventHandler("onAgentMessage", function() {
        snapinChatInitiatedState(!0)
    });
    embedded_svc.init(t.snapInInitURL, t.snapInLAURL, n, t.organizationId, t.componentName, {
        baseLiveAgentContentURL: t.baseLiveAgentContentURL,
        deploymentId: t.deploymentId,
        buttonId: t.buttonId,
        baseLiveAgentURL: t.baseLiveAgentURL,
        eswLiveAgentDevName: t.LiveAgentDevName,
        isOfflineSupportEnabled: !1
    })
}
function getTechSupportSubject(n) {
    return "productFamily"in n && n.productFamily === "security_dell_data" && "productName"in n ? "Dell Data Security" : "issueVal"in n && n.issueVal ? n.issueVal : void 0
}
function getTechSupportChatSource(n) {
    return "serviceTag"in n && n.serviceTag ? "Tech" : "Product"
}
function getIssueTypeKey(n) {
    return "issueType"in n && n.issueType ? n.issueType : ""
}
function triggerResumeSnapin(n) {
    var i, t;
    try {
        if (snapinChatGlobalObjNotEmpty()) {
            showResumeSnapinLoader();
            let n = document.querySelector(".helpButtonEnabled #helpButtonSpan > .message");
            n.innerText === "Chat Now" && n.click()
        } else
            pageObserverForProp20("body"),
            n.snapinResumeChatInitiated = !1,
            saveGlobalSnapinObjToSession(n),
            showResumeSnapinLoader(),
            i = function(t) {
                snapinChatGlobalIssueType = n.issueVal;
                snapinChatGlobalServiceTag = n.serviceTag;
                "productName"in n && (snapinChatGlobalProductName = n.productName);
                eleExist(".helpButtonEnabled #helpButtonSpan > .message", resumeChatClick);
                embedded_svc.settings.displayHelpButton = !0;
                "routingModel"in n && n.routingModel && n.routingModel.toLowerCase() === "skillbased" && (embedded_svc.settings.fallbackRouting = n.skillIds);
                translatedLabels = "language"in n ? translation(n.language) : translation("en");
                embedded_svc.settings.language = translatedLabels.language;
                embedded_svc.settings.enabledFeatures = ["LiveAgent"];
                embedded_svc.settings.entryFeature = "LiveAgent";
                embedded_svc.settings.defaultMinimizedText = "Chat Now";
                embedded_svc.settings.extraPrechatFormDetails = [{
                    label: "Delta Sr",
                    value: n.srNumber,
                    transcriptFields: ["Delta_SR__c"]
                }, {
                    label: translatedLabels.firstName,
                    name: "FirstName",
                    value: n.firstName,
                    displayToAgent: !0
                }, {
                    label: translatedLabels.lastName,
                    value: n.lastName,
                    displayToAgent: !0
                }];
                embedded_svc.settings.extraPrechatInfo = [{
                    entityFieldMaps: [{
                        doCreate: !0,
                        doFind: !0,
                        fieldName: "Delta_SR__c",
                        isExactMatch: !0,
                        label: "Delta Sr"
                    }],
                    entityName: "Case"
                }];
                embedded_svc.init(n.snapInInitURL, n.snapInLAURL, t, n.organizationId, n.componentName, {
                    baseLiveAgentContentURL: n.baseLiveAgentContentURL,
                    deploymentId: n.deploymentId,
                    buttonId: n.buttonId,
                    baseLiveAgentURL: n.baseLiveAgentURL,
                    eswLiveAgentDevName: n.LiveAgentDevName,
                    isOfflineSupportEnabled: !1
                })
            }
            ,
            window.embedded_svc ? i(n.serviceForceURL, n.srNumber) : (t = document.createElement("script"),
            t.setAttribute("src", n.snapInJs),
            t.onload = function() {
                i(null, n.srNumber)
            }
            ,
            document.body.appendChild(t))
    } catch (r) {
        console.log("Error in: " + r)
    }
}
function showResumeSnapinLoader() {
    if (snapInObject = sendGlobalSnapinObjToJson(),
    !snapInObject.snapinResumeChatInitiated)
        if (saveGlobalSnapinObjToSession(snapInObject),
        document.getElementById("cusResumeSnapIn-loader"))
            document.getElementById("cusResumeSnapIn-loader").style.display = "block";
        else {
            let n = document.body || document.getElementsByTagName("body")[0];
            n.insertAdjacentHTML("beforeend", '<div id="cusResumeSnapIn-loader" class="cusPreChat-embeddedServiceHelpButton"><div class="cusPreChat-helpButton" style="width: 168px;"><div class="cusPreChat-uiButton" style="cursor: default;"><div class="cusPreChat-helpButtonLabel"><span class="cusPreChat-message">Loading<\/span><\/div><\/div><\/div><\/div>')
        }
}
function hideResumeSnapinLoader() {
    document.getElementById("cusResumeSnapIn-loader") && (document.getElementById("cusResumeSnapIn-loader").style.display = "none",
    snapInObject = sendGlobalSnapinObjToJson(),
    snapInObject.snapinResumeChatInitiated = !0,
    saveGlobalSnapinObjToSession(snapInObject))
}
function chatClick(n, t) {
    try {
        snapInObject = sendGlobalSnapinObjToJson();
        ("snapinChatInitiated"in snapInObject && snapInObject.snapinChatInitiated && document.querySelector(n).innerText === "Chat Now" || document.querySelector(n).innerText === "Chat Now") && document.querySelector(n).click();
        clearInterval(t)
    } catch (i) {
        console.log("Error in:" + i)
    }
}
function resumeChatClick(n, t) {
    try {
        document.querySelector(n).innerText === "Chat Now" && document.querySelector(n).click();
        clearInterval(t)
    } catch (i) {
        console.log("Error in:" + i)
    }
}
function chatStarted(n, t, i) {
    try {
        let r = document.querySelector(".embeddedServiceHelpButton .helpButton .uiButton");
        r && r.classList.contains("helpButtonEnabled") ? f(i, u) : (agentsOfflinePostChatForm(),
        clearInterval(t));
        function u() {
            i = sendGlobalSnapinObjToJson();
            document.querySelector(n).click();
            clearInterval(t)
        }
        function f(n, t) {
            let i = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState()
              , r = i.get("v.prechatFields");
            r.forEach(function(t) {
                t.name === "FirstName" ? t.value = n.c_firstName : t.name === "LastName" ? t.value = n.c_lastName : t.name === "Email" ? t.value = n.c_email : t.name === "Primary_Phone__c" ? (phone = n.c_phoneNo,
                t.value = phone.replace(/[&\/\\#!@,+$~%.'":*?<>{}^a-zA-Z]/g, "")) : t.name === "Issue_Description__c" && (t.value = n.c_issueDescription)
            });
            i.set("v.prechatFields", r);
            t()
        }
    } catch (r) {
        console.log("Error in:" + r)
    }
}
function translation(n) {
    let t = n.replace("_", "-");
    return t = t.toLowerCase(),
    this.primPhone = "Primary Phone Number",
    this.issueDesc = "Issue Description",
    t == "de" ? (this.firstName = "Vorname",
    this.lastName = "Nachname",
    this.emailAdd = "E-Mail",
    this.language = "de") : t == "ja" ? (this.firstName = "名",
    this.lastName = "姓",
    this.emailAdd = "メール",
    this.language = "ja") : t == "ko" ? (this.firstName = "이름",
    this.lastName = "성",
    this.emailAdd = "이메일",
    this.language = "ko") : t == "es" ? (this.firstName = "Nombre",
    this.lastName = "Apellidos",
    this.emailAdd = "Correo electrónico",
    this.language = "es") : t == "zh" || t == "cn" || t == "zh-cn" ? (this.firstName = "名",
    this.lastName = "姓",
    this.emailAdd = "电子邮件",
    this.language = "zh-CN") : t == "zh-tw" ? (this.firstName = "名字",
    this.lastName = "姓氏",
    this.emailAdd = "電子郵件",
    this.language = "zh-TW") : t == "pt-pt" ? (this.firstName = "Nome próprio",
    this.lastName = "Apelido",
    this.emailAdd = "E-mail",
    this.language = "pt-pt") : t == "pt" || t == "pt-br" ? (this.firstName = "Nome",
    this.lastName = "Sobrenome",
    this.emailAdd = "Email",
    this.language = "pt-br") : t == "nl" || t == "nl-nl" ? (this.firstName = "Voornaam",
    this.lastName = "Achternaam",
    this.emailAdd = "E-mail",
    this.language = "nl-NL") : t == "fr" ? (this.firstName = "Prénom",
    this.lastName = "Nom",
    this.emailAdd = "Adresse e-mail",
    this.language = "fr") : t == "da" ? (this.firstName = "Fornavn",
    this.lastName = "Efternavn",
    this.emailAdd = "Mail",
    this.language = "da") : t == "fi" ? (this.firstName = "Etunimi",
    this.lastName = "Sukunimi",
    this.emailAdd = "Sähköposti",
    this.language = "fi") : t == "it" ? (this.firstName = "Nome",
    this.lastName = "Cognome",
    this.emailAdd = "Email",
    this.language = "it") : t == "no" ? (this.firstName = "Fornavn",
    this.lastName = "Etternavn",
    this.emailAdd = "E-post",
    this.language = "no") : t == "ru" ? (this.firstName = "Имя",
    this.lastName = "Фамилия",
    this.emailAdd = "Эл. почта",
    this.language = "ru") : t == "sv" ? (this.firstName = "Förnamn",
    this.lastName = "Efternamn",
    this.emailAdd = "E-post",
    this.language = "sv") : t == "th" ? (this.firstName = "ชื่อจริง",
    this.lastName = "นามสกุล",
    this.emailAdd = "อีเมล",
    this.language = "th") : t == "pl" ? (this.firstName = "Imię",
    this.lastName = "Nazwisko",
    this.emailAdd = "E-mail",
    this.language = "pl") : t == "sk" ? (this.firstName = "Meno",
    this.lastName = "Priezvisko",
    this.emailAdd = "E-mail",
    this.language = "sk") : (this.firstName = "First Name",
    this.lastName = "Last Name",
    this.emailAdd = "Email Address",
    this.language = "en"),
    console.log("Language = " + this.language),
    this
}
function snapInClickListners() {
    window.addEventListener("click", function(n) {
        var t, i;
        try {
            if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton"))
                if (t = n.target || n.srcElement,
                t && t.tagName.toLowerCase() === "embeddedservice-chat-header" && (closestByTagName(n.toElement, "svg") || closestByTagName(n.toElement, "button")))
                    closestByTagName(n.toElement, "svg").dataset.key === "minimize_window" || closestByTagName(n.toElement, "button").className === "minimizeButton" ? callDellmetricsTrack("890.220.007", "SNAPIN: Minimize") : (closestByTagName(n.toElement, "svg").dataset.key === "close" || closestByTagName(n.toElement, "button").className === "closeButton") && (callDellmetricsTrack("890.220.006", "SNAPIN: Close (x)"),
                    document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer") || snapinChatInitiatedState(!1));
                else if (t && t.tagName.toLowerCase() === "embeddedservice-chat-input-footer-menu" && (closestByTagName(n.toElement, "svg") || closestByTagName(n.toElement, "button")))
                    closestByTagName(n.toElement, "svg").dataset.key === "rows" || closestByTagName(n.toElement, "button").className === "slds-button slds-button_icon slds-button_icon-container-more slds-button_icon-large" ? callDellmetricsTrack("890.220.015", "SNAPIN: Hamburger Menu") : (i = closestByTagName(n.toElement, "a"),
                    i != undefined && i != null && i.innerText && callDellmetricsTrack("890.220.003", "SNAPIN: '" + i.innerText + "' Button Clicked"));
                else if (closestByTagName(t, "button") != null && closestByTagName(t, "button") != undefined)
                    switch (closestByTagName(t, "button").className) {
                    case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                    case "endChatButton postChatButton uiButton--default uiButton embeddedServiceSidebarButton":
                    case "endChatButton saveTranscriptButton uiButton--inverse uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.003", "SNAPIN: '" + t.innerText + "' Button Clicked");
                        break;
                    case "dialogButton dialog-button-1 uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.004", "SNAPIN: '" + t.innerText + "' Button Clicked");
                        break;
                    case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.004", "SNAPIN: '" + t.innerText + "' Button Clicked");
                        break;
                    case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.005", "SNAPIN: Cancel Chat");
                        break;
                    case "closeButton":
                        callDellmetricsTrack("890.220.006", "SNAPIN: Close (x)");
                        break;
                    case "minimizeButton":
                        callDellmetricsTrack("890.220.007", "SNAPIN: Minimize");
                        break;
                    case "sidebarHeader minimizedContainer helpButton embeddedServiceSidebarMinimizedDefaultUI":
                        callDellmetricsTrack("890.220.008", "SNAPIN: Maximize");
                        break;
                    case "sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI":
                        callDellmetricsTrack("890.220.008", "SNAPIN: Maximize")
                    }
        } catch (r) {
            this.console.log("Error in function", r)
        }
    })
}
function callDellmetricsTrack(n, t) {
    showsAgentOflineMsg(n, t) && (document.querySelector(".dialog-button-0.embeddedServiceSidebarButton").style.display = "none");
    typeof dellmetricsTrack == "function" && dellmetricsTrack && (trackevent ? t ? (t = append_snapinChatUuid(t),
    dellmetricsTrack(n, t)) : dellmetricsTrack(n) : trackevent = !0)
}
function showsAgentOflineMsg(n, t) {
    return n == "890.220.016" && (t.includes("Im Moment kann nicht gechattet werden. Versuchen Sie es später erneut.") || t.includes("ただいまチャットできません。 後でもう一度お試しください。") || t.includes("지금은 채팅을 할 수 없습니다. 나중에 다시 시도하십시오.") || t.includes("No podemos chatear en estos momentos. Inténtelo de nuevo más tarde.") || t.includes("我们现在无法聊天。 请稍后重试。") || t.includes("我們目前無法聊天。 請稍後再試一次。") || t.includes("Não podemos conversar neste momento. Tente novamente mais tarde.") || t.includes("Não podemos conversar agora. Tente novamente mais tarde.") || t.includes("We kunnen momenteel niet chatten. Probeer het later opnieuw.") || t.includes("Nous ne pouvons pas discuter pour le moment. Veuillez réessayer ultérieurement.") || t.includes("Vi kan ikke chatte lige nu. Prøv igen senere.") || t.includes("Emme voi chatata juuri nyt. Yritä myöhemmin uudelleen.") || t.includes("Non possiamo chattare al momento Riprova più tardi.") || t.includes("Vi kan ikke chatte akkurat nå. Prøv på nytt senere.") || t.includes("В настоящее время чат недоступен. Повторите попытку позже.") || t.includes("Vi kan inte chatta just nu. Försök igen senare.") || t.includes("เราไม่สามารถสนทนาได้ในตอนนี้ ลองอีกครั้งในภายหลัง") || t.includes("Nie możemy w tej chwili rozmawiać na czacie Spróbuj ponownie później.") || t.includes("Momenálne nemôžeme četovať. Skúste to znova.") || t.includes("Não podemos conversar agora. Tente novamente mais tarde.") || t.includes("We can't chat right now. Try again later.")) ? !0 : !1
}
function pageObserverForProp20(n, t) {
    try {
        snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
        snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
        snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer");
        snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
        snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
        snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
        snapInPrechatForm ? snapInCurrentPage = "snapInPrechatForm" : snapInWaiting ? snapInCurrentPage = "snapInWaiting" : snapInChatStarted ? snapInCurrentPage = "snapInChatStarted" : snapInChatEnded ? snapInCurrentPage = "snapInChatEnded" : snapInConfirmationDialoug ? snapInCurrentPage = "snapInConfirmationDialoug" : snapInhelpBtnDisabled ? (removeLoaderIn10(),
        snapInCurrentPage = "snapInhelpBtnDisabled") : snapInhelpBtnEnabled ? snapInhelpBtnEnabled = "snapInhelpBtnEnabled" : snapInCurrentPage = null;
        var i = window.MutationObserver || window.WebKitMutationObserver
          , r = function(n) {
            n.forEach(function(n) {
                n.addedNodes.length > 0 && (snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI"),
                snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer"),
                snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText"),
                snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer"),
                snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer"),
                snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled"),
                snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled"),
                snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton"),
                snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm" ? (snapInCurrentPage = "snapInPrechatForm",
                document.querySelector(".modalContainer.embeddedServiceSidebar").style.display = "none",
                snapinChatInitiatedState(!1)) : snapInWaiting && snapInCurrentPage != "snapInWaiting" ? (snapInCurrentPage = "snapInWaiting",
                callDellmetricsTrack("890.220.011", "SNAPIN: You are up next Window load"),
                snapinQueueLoaded(),
                hideResumeSnapinLoader(),
                snapinChatInitiatedState(!1),
                eleExistWithVariable(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber", waitChatCounter)) : snapInChatStarted && snapInCurrentPage != "snapInChatStarted" ? (snapInCurrentPage = "snapInChatStarted",
                snapinQueueLoaded(),
                hideResumeSnapinLoader(),
                snapinChatInitiatedState(!0),
                addChatPrivacyInfo(t)) : snapInChatEnded && snapInCurrentPage != "snapInChatEnded" ? (snapInCurrentPage = "snapInChatEnded",
                snapinQueueLoaded(),
                hideResumeSnapinLoader(),
                snapinChatInitiatedState(!1),
                callDellmetricsTrack("890.220.009", "SNAPIN: Chat Ended")) : snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug" ? (snapInCurrentPage = "snapInConfirmationDialoug",
                snapinQueueLoaded(),
                callDellmetricsTrack("890.220.016", document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer").innerText),
                hideResumeSnapinLoader()) : snapInEmbeddedServiceHelpBtn && window.getComputedStyle(snapInEmbeddedServiceHelpBtn).display === "block" && (snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === "flex" && snapInCurrentPage != "snapInhelpBtnDisabled" ? (snapInCurrentPage = "snapInhelpBtnDisabled",
                snapInhelpBtnDisabled.style.display = "none",
                removeLoaderIn10()) : snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === "flex" && snapInCurrentPage != "snapInhelpBtnEnabled" ? (snapInCurrentPage === "snapInhelpBtnDisabled" && document.getElementById("cusCAREPreChatSnapinDom") && (document.getElementById("cusPreChatSnapinDom").style.display = "block"),
                snapInCurrentPage = "snapInhelpBtnEnabled",
                snapInhelpBtnEnabled.style.display = "none") : console.log("Snap-In: Not Loaded")))
            })
        }
          , u = new i(r)
          , f = document.querySelector(n);
        u.observe(f, {
            childList: !0,
            subtree: !0
        })
    } catch (e) {
        console.log("Error in Observer - " + e)
    }
}
function addChatPrivacyInfo(n) {
    setTimeout(function() {
        var u = document.getElementById("snapinChatPopUpMsg"), e = document.querySelector(".dockableContainer .chatMessage.ended"), f, i, t, r;
        u ? e && (u.style.display = "none") : (f = n && "chatPrivacyInfo"in n && n.snapinChatPopUpMsgDom ? n.snapinChatPopUpMsgDom : "Please do not share any payment or sensitive information in this chat window.",
        i = document.createElement("DIV"),
        i.id = "snapinChatPopUpMsg",
        t = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateChatInputFooter"),
        t && t.parentNode.insertBefore(i, t),
        innerVal = '<span style="float: left;margin: 11px;fill:#0A6EBE;"><svg x="0px" y="0px" width="20px" height="20px" viewBox="0 0 416.979 416.979" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765   c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/><\/g><\/svg><\/span><span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon" id="btnCloseSnapinPopMsg" style="float:right;padding:5px;cursor:pointer;"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 120 120" style="fill:#333"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"><\/path><\/svg><\/span><p style="text-align:left;padding:7px;margin:0;font-size:13px;background:#DFF1FE;border-top:1px solid #0A6EBE;border-bottom:1px solid #0A6EBE;color:#333;">' + f + "<\/p>",
        document.getElementById("snapinChatPopUpMsg") && (document.getElementById("snapinChatPopUpMsg").innerHTML = innerVal),
        r = document.getElementById("btnCloseSnapinPopMsg"),
        r && r.addEventListener("click", function() {
            document.getElementById("snapinChatPopUpMsg").style.display = "none"
        }))
    }, 50)
}
function waitChatCounter(n, t, i) {
    try {
        var r = document.querySelector(n).innerText;
        i != r && (callDellmetricsTrack("890.220.012", "SNAPIN: Queue number " + r),
        clearInterval(t),
        r > 0 && r != "" && r != null && r != undefined && r != " " && eleExistWithVariable(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber", waitChatCounter, document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .queuePositionNumber").innerText))
    } catch (u) {
        clearInterval(t);
        console.log("Error in:" + u)
    }
}
function eleExistWithVariable(n, t, i) {
    var r = setInterval(function() {
        if (document.querySelector(n))
            try {
                t(n, r, i)
            } catch (u) {
                console.log("error in " + t + " function: " + u)
            }
    }, 1e3)
}
function snapinPrechatLoaded(n, t) {
    try {
        document.getElementById("loadingSnapinMsg") && removeDomElement(document.getElementById("loadingSnapinMsg"));
        clearInterval(t)
    } catch (i) {
        console.log("Error in:" + i)
    }
}
function removeDomElement(n) {
    n.parentNode.removeChild(n)
}
function initLiveAgent(n) {
    try {
        $.getScript(n.deploymentUrl, function() {
            liveagent.enableLogging();
            liveagent.init(n.liveAgentInitUrl, n.deploymentId, n.organizationId);
            window._laq || (window._laq = []);
            window._laq.push(function() {
                liveagent.showWhenOnline(n.buttonId, document.getElementById("liveagent_button_online_" + n.buttonId));
                liveagent.showWhenOffline(n.buttonId, document.getElementById("liveagent_button_offline_" + n.buttonId));
                "serviceTag"in n && liveagent.addCustomDetail("serviceTag", n.serviceTag)
            })
        })
    } catch (t) {
        console.log("error:" + t)
    }
}
function initLiveAgentWithoutPrechatForm(n, t, i) {
    try {
        delete window.liveagent;
        delete window.liveAgentDeployment;
        $.getScript(n.deploymentUrl, function() {
            callDellmetricsTrack("890.220.078");
            liveagent.enableLogging();
            liveagent.init(n.liveAgentInitUrl, n.deploymentId, n.organizationId);
            window._laq || (window._laq = []);
            window._laq.push(function() {
                liveagent.showWhenOnline(n.buttonId, document.getElementById("liveagent_button_online_" + n.buttonId));
                liveagent.showWhenOffline(n.buttonId, document.getElementById("liveagent_button_offline_" + n.buttonId));
                "serviceTag"in n && liveagent.addCustomDetail("serviceTag", n.serviceTag).saveToTranscript("Service_Tag__c");
                liveagent.addCustomDetail("Chat Source", "Tech").saveToTranscript("Chat_Source__c");
                liveagent.addCustomDetail("First Name", n.firstName).saveToTranscript("FirstName__c");
                liveagent.addCustomDetail("Last Name", n.lastName).saveToTranscript("LastName__c");
                liveagent.addCustomDetail("Phone Number", n.phoneNumber).saveToTranscript("ContactNumber__c");
                liveagent.addCustomDetail("Email ID", n.emailId).saveToTranscript("Email__c");
                liveagent.addCustomDetail("Issue Type", n.issueType).saveToTranscript("Issue__c");
                liveagent.addCustomDetail("Issue Description", n.issueDescription).saveToTranscript("Description__c");
                liveagent.findOrCreate("Asset").map("Asset__c", n.serviceTag, !0, !1, !1).showOnCreate();
                liveagent.setName(n.firstName + " " + n.lastName)
            });
            checkifLiveAgentButtonIsOnline(liveagent, n, t, i)
        })
    } catch (r) {
        console.log("error:" + r)
    }
}
function checkifLiveAgentButtonIsOnline(n, t, i, r) {
    n.addButtonEventHandler(t.buttonId, function(t) {
        if (t == n.BUTTON_EVENT.BUTTON_AVAILABLE) {
            i();
            return
        }
        if (t == n.BUTTON_EVENT.BUTTON_UNAVAILABLE) {
            r();
            return
        }
    })
}
function initResumeLiveAgent(n) {
    window._laq || (window._laq = []);
    window._laq.push(function() {
        liveagent.showWhenOnline(n.buttonId, document.getElementById("liveagent_button_online_" + n.buttonId));
        liveagent.showWhenOffline(n.buttonId, document.getElementById("liveagent_button_offline_" + n.buttonId))
    });
    liveagent.addCustomDetail("deltaSr", n.srNumber).saveToTranscript("Delta_Sr__c");
    liveagent.findOrCreate("Case").map("Delta_SR__c", "deltaSr", !0, !1, !0).showOnCreate();
    liveagent.init(n.liveAgentInitUrl, n.deploymentId, n.organizationId);
    liveagent.setName(n.firstName + " " + n.lastName)
}
function startLiveAgentChat(n) {
    callDellmetricsTrack("890.220.077");
    liveagent.startChat(n)
}
function eleExist(n, t) {
    var i = setInterval(function() {
        if (document.querySelector(n))
            try {
                t(n, i)
            } catch (r) {
                console.log("error in " + t + " function: " + r)
            }
    }, 1e3)
}
function isTechOrCare(n) {
    return n.applicationContext === "ChatBot-CareBot" ? "CARE" : "Tech"
}
function triggerChatBot(n) {
    onChatBotServiceTagChange();
    "applicationContext"in n && n.applicationContext === "ChatBot-ResumeChat" ? (n.c_firstName = n.First_Name,
    n.c_lastName = n.Last_Name,
    n.c_email = n.Email,
    n.c_phoneNo = n.Phone,
    n.c_serviceTag = n.Service_Tag,
    n.c_CARE_Chat_Order_Number = n.CARE_Chat_Order_Number,
    saveGlobalSnapinBotObjToSession(n),
    eleExistWithVariable(".embeddedServiceSidebar .startButton", ChatBotStarted, n)) : (n.StepName_Manual_Bot = "Details",
    openBotPrechatform(n));
    initiateChatBot(n);
    HideLoadingImage()
}
function clickStartChatBot(n, t) {
    document.querySelector(n).click();
    clearInterval(t)
}
function initiateChatBot(n) {
    var i, t;
    n == undefined && sessionStorage.getItem("chatBotObjectSession") != null ? n = JSON.parse(sessionStorage.getItem("chatBotObjectSession")) : (sessionStorage.setItem("chatBotObjectSession", JSON.stringify(n)),
    eleExist(".embeddedServiceHelpButton .helpButton .helpButtonEnabled", clickStartChatBot));
    OmniChatBotTrackerListner();
    AddElementToPage();
    i = function(t) {
        var r, i;
        if (!document.getElementById("chatBotStyle")) {
            let n = ".embeddedServiceLiveAgentStateChatHeader .message,.embeddedServiceLiveAgentStateChatHeaderOption .optionName,.embeddedServiceSidebarFormField .uiInput .uiLabel-left{font-size:.75em!important}.embeddedServiceLiveAgentStateChatPlaintextMessageDefaultUI.plaintextContent,.embeddedServiceSidebarDialogState #dialogTextBody,.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select,.embeddedServiceSidebarHeader .shortHeader,.embeddedServiceSidebarMinimizedDefaultUI .minimizedText{font-size:.875em!important}.embeddedServiceSidebar .headerItem,.embeddedServiceSidebarButton{font-size:1em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button__icon{width:1.5em!important;height:1.5em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-button_icon-container-more{line-height:1.875em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .slds-dropdown-trigger{padding:.5em .5em!important}.embeddedServiceLiveAgentStateChatInputFooter .footerMenuWrapper .footer-menu .data-metrics={btnname:chgprod,appcode:880.130.862}";
            head = document.head || document.getElementsByTagName("head")[0];
            style = document.createElement("style");
            style.type = "text/css";
            style.id = "chatBotStyle";
            style.styleSheet ? style.styleSheet.cssText = n : style.appendChild(document.createTextNode(n));
            head.appendChild(style);
            HideLoader()
        }
        translatedLabels = "applicationContext"in n && n.applicationContext === "ChatBot-CareBot" && "language"in n ? translation(n.language) : translation("en");
        embedded_svc.settings.language = translatedLabels.language;
        snapinBotPageObserver("body");
        r = "ChatBot";
        i = null;
        "applicationContext"in n && n.applicationContext === "ChatBot-CareBot" ? (r = "Chatbot-CareBot",
        i = {
            label: translatedLabels.primPhone,
            transcriptFields: ["ContactNumber__c"],
            displayToAgent: !0
        }) : i = {
            label: "Phone",
            transcriptFields: ["Phone"],
            displayToAgent: !0
        };
        embedded_svc.settings.displayHelpButton = !1;
        embedded_svc.settings.extraPrechatFormDetails = [{
            label: "Transcript From",
            value: r,
            transcriptFields: ["Transcript_From__c"],
            displayToAgent: !0
        }, {
            label: "Chat Source",
            value: isTechOrCare(n),
            transcriptFields: ["Chat_Source__c"]
        }, {
            label: "Service Tag",
            transcriptFields: ["Service_Tag__c"],
            displayToAgent: !0
        }, {
            label: "CARE_Chat_Order_Number",
            transcriptFields: ["CARE_Chat_Order_Number__c"],
            displayToAgent: !0
        }, {
            label: "Order Number",
            value: appendBuidForCareBot(n),
            transcriptFields: ["Order_Number__c"]
        }, i, {
            label: translatedLabels.firstName,
            transcriptFields: ["FirstName__c"],
            displayToAgent: !0
        }, {
            label: translatedLabels.lastName,
            transcriptFields: ["LastName__c"],
            displayToAgent: !0
        }, {
            label: translatedLabels.emailAdd,
            transcriptFields: ["Email__c"],
            displayToAgent: !0
        }, {
            label: "product_Model",
            value: n.product_Model,
            transcriptFields: ["product_Model__c"],
            displayToAgent: !0
        }, {
            label: "Kb_Article",
            value: n.Kb_Article,
            transcriptFields: ["KB__c"],
            displayToAgent: !0
        }, {
            label: "issue_Description",
            value: n.issue_Description,
            transcriptFields: ["issue_Description__c"],
            displayToAgent: !0
        }, {
            label: "warranty_Details",
            value: n.warranty_Details,
            transcriptFields: ["warranty_Details__c"],
            displayToAgent: !0
        }, {
            label: "windows_Version",
            value: n.windows_Version,
            transcriptFields: ["windows_Version__c"],
            displayToAgent: !0
        }, {
            label: "BIOS_Version",
            value: n.BIOS_Version,
            transcriptFields: ["BIOS_Version__c"],
            displayToAgent: !0
        }, {
            label: "recent_Software_Updated_Date",
            value: n.recent_Software_Updated_Date,
            transcriptFields: ["recent_Software_Updated_Date__c"],
            displayToAgent: !0
        }, {
            label: "is_External_Peripherals_Connected",
            value: n.is_External_Peripherals_Connected,
            transcriptFields: ["is_External_Peripherals_Connected__c"],
            displayToAgent: !0
        }, {
            label: "is_SA_Diagnostic_Passed",
            value: n.is_SA_Diagnostic_Passed,
            transcriptFields: ["is_SA_Diagnostic_Passed__c"],
            displayToAgent: !0
        }, {
            label: "is_Error_Related_HWorSW",
            value: n.is_Error_Related_HWorSW,
            transcriptFields: ["is_Error_Related_HWorSW__c"],
            displayToAgent: !0
        }, {
            label: "is_BIOSandDrivers_Updated",
            value: n.is_BIOSandDrivers_Updated,
            transcriptFields: ["is_BIOSandDrivers_Updated__c"],
            displayToAgent: !0
        }, {
            label: "is_AnyAntivirus_Installed",
            value: n.is_AnyAntivirus_Installed,
            transcriptFields: ["is_AnyAntivirus_Installed__c"],
            displayToAgent: !0
        }, {
            label: "is_Related_Heat_Issue",
            value: n.is_Related_Heat_Issue,
            transcriptFields: ["is_Related_Heat_Issue__c"],
            displayToAgent: !0
        }, {
            label: "is_Warranty_Covered",
            value: n.is_Warranty_Covered,
            transcriptFields: ["is_Warranty_Covered__c"],
            displayToAgent: !0
        }, {
            label: "is_HardDrive_Test_Passed",
            value: n.is_HardDrive_Test_Passed,
            transcriptFields: ["is_HardDrive_Test_Passed__c"],
            displayToAgent: !0
        }, {
            label: "is_Memory_Test_Passed",
            value: n.is_Memory_Test_Passed,
            transcriptFields: ["is_Memory_Test_Passed__c"],
            displayToAgent: !0
        }, {
            label: "is_MotherBoard_Test_Passed",
            value: n.is_MotherBoard_Test_Passed,
            transcriptFields: ["is_MotherBoard_Test_Passed__c"],
            displayToAgent: !0
        }, {
            label: "is_HDD_IDE",
            value: n.is_HDD_IDE,
            transcriptFields: ["is_HDD_IDE__c"],
            displayToAgent: !0
        }, {
            label: "last_time_scan_run",
            value: n.last_time_scan_run,
            transcriptFields: ["last_time_scan_run__c"],
            displayToAgent: !0
        }, {
            label: "isDsdnstalled",
            value: n.isDsdnstalled,
            transcriptFields: ["isDsdnstalled__c"],
            displayToAgent: !0
        }, {
            label: "isHwAlert",
            value: n.isHwAlert,
            transcriptFields: ["isHwAlert__c"],
            displayToAgent: !0
        }, {
            label: "isSwAlert",
            value: n.isSwAlert,
            transcriptFields: ["isSwAlert__c"],
            displayToAgent: !0
        }, {
            label: "Application_Context",
            transcriptFields: ["Application_Context__c"],
            displayToAgent: !0
        }, {
            label: "StepName_Manual_Bot",
            value: n.StepName_Manual_Bot,
            transcriptFields: ["StepName_Manual_Bot__c"],
            displayToAgent: !0
        }, {
            label: "Agent_QueueName",
            value: n.Agent_QueueName,
            transcriptFields: ["Agent_QueueName__c"],
            displayToAgent: !0
        }, {
            label: "BotFutureUse_2",
            value: n.BotFutureUse_2,
            transcriptFields: ["BotFutureUse_2__c"],
            displayToAgent: !0
        }, ];
        var f = null
          , e = null
          , o = null
          , u = null
          , s = null
          , h = null
          , c = null;
        f = "First_Name"in n ? n.First_Name : "firstNameVal";
        e = "Last_Name"in n ? n.Last_Name : "lastNameVal";
        o = "Email"in n ? n.Email : "emailVal@dell.com";
        u = "Phone"in n ? n.Phone : "primePhoneVal";
        s = "Service_Tag"in n ? n.Service_Tag : "1234";
        c = "CARE_Chat_Order_Number"in n ? n.CARE_Chat_Order_Number : "123456";
        h = "applicationContext"in n ? n.applicationContext : "testing";
        embedded_svc.settings.prepopulatedPrechatFields = {
            FirstName: f,
            LastName: e,
            Email: o,
            ContactNumber__c: u,
            Phone: u,
            Service_Tag__c: s,
            Application_Context__c: h,
            CARE_Chat_Order_Number__c: c
        };
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
                label: "Email Address"
            }],
            entityName: "Contact",
            saveToTranscript: "ContactId"
        }, {
            entityFieldMaps: [{
                doCreate: !1,
                doFind: !0,
                fieldName: "Name",
                isExactMatch: !0,
                label: "Service Tag"
            }],
            entityName: "Asset",
            saveToTranscript: "Asset__c"
        }, {
            entityFieldMaps: [{
                doCreate: !1,
                doFind: !0,
                fieldName: "AssetId",
                isExactMatch: !0,
                label: "Asset"
            }, {
                entityFieldMaps: [{
                    doCreate: !1,
                    doFind: !1,
                    fieldName: "External_ID__c",
                    isExactMatch: !1,
                    label: "Application_Context"
                }],
                entityName: "Case",
                saveToTranscript: "Application_Context__c"
            }],
            entityName: "Case"
        }];
        embedded_svc.settings.chatbotAvatarImgURL = "https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product_images/esupport/icons/bot_icon_40x40.png.png";
        embedded_svc.settings.defaultMinimizedText = "Get Started";
        embedded_svc.settings.enabledFeatures = ["LiveAgent"];
        embedded_svc.settings.entryFeature = "LiveAgent";
        embedded_svc.init(n.chatBotInitURL, n.chatBotLAURL, t, n.organizationId, n.componentName, {
            baseLiveAgentContentURL: n.baseLiveAgentContentURL,
            deploymentId: n.deploymentId,
            buttonId: n.buttonId,
            baseLiveAgentURL: n.baseLiveAgentURL,
            eswLiveAgentDevName: n.LiveAgentDevName,
            isOfflineSupportEnabled: !1
        })
    }
    ;
    let r = document.getElementById("esw_storage_iframe");
    r ? (ResgisterChatBotHandler(),
    onBotStart()) : window.embedded_svc ? (i(n.serviceForceURL),
    ResgisterChatBotHandler(),
    onBotStart()) : (t = document.createElement("script"),
    t.setAttribute("src", n.snapInJs),
    t.onload = function() {
        i(null);
        ResgisterChatBotHandler();
        onBotStart()
    }
    ,
    document.body.appendChild(t));
    HookClosePreChatForm()
}
function appendBuidForCareBot(n) {
    return "buid"in n && n.buid ? n.CARE_Chat_Order_Number + "-" + n.buid : n.CARE_Chat_Order_Number + "-3696"
}
function ResgisterChatBotHandler() {
    embedded_svc.addEventHandler("onAgentMessage", function() {
        console.log("onAgentMessage event triggerred");
        bindHandler();
        sessionStorage.setItem("isChatBotActive", "true");
        isAgentEventTriggered = !0
    });
    embedded_svc.addEventHandler("onChatEndedByChasitor", function(n) {
        console.log("onChatEndedByChasitor event triggerred");
        callDellmetricsTrackForBot("880.130.860", n.liveAgentSessionKey);
        CloseAndClearChatBot();
        SetToDefaultValues()
    });
    embedded_svc.addEventHandler("onChatTransferSuccessful", function() {
        console.log("onChatTransferSuccessful event triggerred");
        EnableChatBotInput()
    });
    embedded_svc.addEventHandler("onChatEndedByAgent", function() {
        console.log("onChatEndedByAgent event triggerred");
        CloseAndClearChatBot();
        SetToDefaultValues()
    });
    embedded_svc.addEventHandler("onConnectionError", function() {
        console.log("onConnectionError event triggerred");
        CloseAndClearChatBot();
        SetToDefaultValues()
    });
    embedded_svc.addEventHandler("onIdleTimeoutOccurred", function() {
        console.log("onIdleTimeoutOccurred event triggerred");
        CloseAndClearChatBot();
        SetToDefaultValues()
    });
    embedded_svc.addEventHandler("onChatRequestSuccess", function(n) {
        console.log("onChatRequestSuccess event triggerred");
        SetToDefaultValues();
        sessionStorage.removeItem("GR_MessageCount");
        sessionStorage.removeItem("isChatBotActive");
        StoreChatBotSessionKey(n.liveAgentSessionKey);
        callDellmetricsTrackForBot("880.130.863", n.liveAgentSessionKey)
    });
    embedded_svc.addEventHandler("onChatReconnectSuccessful", function() {
        console.log("onChatReconnectSuccessful event triggerred")
    });
    embedded_svc.addEventHandler("onChatEstablished", function(n) {
        console.log("onChatEstablished event triggerred");
        callDellmetricsTrackForBot("880.130.864", n.liveAgentSessionKey);
        setTimeout(function() {
            var t = document.querySelector("embeddedservice-chat-input-footer-menu");
            t && t.addEventListener("click", function() {
                callDellmetricsTrackForBot("880.130.861", n.liveAgentSessionKey)
            })
        }, 300)
    });
    embedded_svc.addEventHandler("onChasitorMessage", function(n) {
        console.log("onChasitorMessage event triggerred");
        setTimeout(function() {
            var i = document.querySelectorAll(".chatContent")
              , t = i[i.length - 1];
            (t.innerText === "Chat with Live Agent" || t.innerText === "Conversar com o Live Agent" || t.innerText === "Transfer to Agent") && callDellmetricsTrackForBot("880.130.862", n.liveAgentSessionKey)
        }, 300)
    })
}
function OmniChatBotTrackerListner() {
    try {
        window.addEventListener("click", function(n) {
            var t, i;
            try {
                if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton"))
                    if (t = n.target || n.srcElement,
                    t && t.tagName.toLowerCase() === "embeddedservice-chat-header" && (closestByTagName(n.toElement, "svg") || closestByTagName(n.toElement, "button")))
                        closestByTagName(n.toElement, "svg").dataset.key === "minimize_window" || closestByTagName(n.toElement, "button").className === "minimizeButton" ? callDellmetricsTrackForBot("880.130.854") : (closestByTagName(n.toElement, "svg").dataset.key === "close" || closestByTagName(n.toElement, "button").className === "closeButton") && callDellmetricsTrackForBot("880.130.855");
                    else if (t && t.tagName.toLowerCase() === "embeddedservice-chat-input-footer-menu" && (closestByTagName(n.toElement, "svg") || closestByTagName(n.toElement, "button")))
                        closestByTagName(n.toElement, "svg").dataset.key !== "rows" && closestByTagName(n.toElement, "button").className !== "slds-button slds-button_icon slds-button_icon-container-more slds-button_icon-large" && (i = closestByTagName(n.toElement, "a"),
                        i != undefined && i != null && i.innerText && callDellmetricsTrackForBot("880.130.859"));
                    else if (t && closestByTagName(t, "button") != null)
                        switch (closestByTagName(t, "button").className) {
                        case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                            callDellmetricsTrackForBot("880.130.856");
                            chasitorTextMaintainState();
                            isBinded = !1;
                            bindHandler();
                            break;
                        case "closeButton headerItem":
                            callDellmetricsTrackForBot("880.130.855");
                            break;
                        case "minimizeButton headerItem":
                            callDellmetricsTrackForBot("880.130.854");
                            break;
                        case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                            (n.target.innerText === "Leave" || n.target.innerText === "Sair") && (n.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Leave?" || n.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Sair?") && callDellmetricsTrackForBot("880.130.857");
                            break;
                        case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                            (n.target.innerText === "Continue to Wait" || n.target.innerText === "Continuar esperando") && (n.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Leave?" || n.target.parentNode.parentNode.parentNode.firstElementChild.textContent === "Sair?") && callDellmetricsTrackForBot("880.130.858");
                            chasitorTextMaintainState();
                            isBinded = !1;
                            bindHandler()
                        }
            } catch (r) {
                this.console.log("function error", r)
            }
        })
    } catch (n) {
        console.log(n)
    }
}
function callDellmetricsTrackForBot(n, t) {
    typeof dellmetricsTrack == "function" && dellmetricsTrack && (t ? dellmetricsTrack(n, "chatsessionid:" + t) : dellmetricsTrack(n))
}
function openBotPrechatform(n) {
    if (document.getElementById("cusBotPreChatSnapinDom")) {
        let n = document.querySelector(".modalContainer.embeddedServiceSidebar")
          , t = document.querySelector(".embeddedServiceSidebar .embeddedServiceSidebarMinimizedDefaultUI");
        n && n.style.display == "none" ? (callDellmetricsTrackForBot("880.130.852"),
        document.getElementById("cusBotPreChat-helpButtonEnabled").click()) : t ? t.click() : document.getElementById("cusBotPreChat-helpButtonEnabled").click()
    } else
        callDellmetricsTrackForBot("880.130.852"),
        createBotCustPreChat(n)
}
function createBotCustPreChat(n) {
    var i, r;
    let t = createFixedLabels(n);
    i = "applicationContext"in n && n.applicationContext === "ChatBot-CareBot" ? '<div id="cusBotPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer" style="max-height:520px;"><div class="cusPreChat-embeddedServiceSidebarHeader"><div class="cusPreChat-shortHeader"><div class="cusPreChat-shortHeaderContent"> <button id="cusBotPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat<\/span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> <\/path> <\/svg> <\/span> <\/button><h2 class="cusPreChat-headerText"><div class="cusPreChat-headerTextContent"> <span id="cusBotPreChat-headerTextLabel">Conversar Agora<\/span> <span id="cusBotPreChat-headerSubtext"> <\/span><\/div><\/h2> <button id="cusBotPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat<\/span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> <\/path> <\/svg> <\/span> <\/button><\/div><\/div><\/div><div class="cusPreChat-sidebarBody"><div id="cusBotPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> <\/span> <span class="cusPreChat-loadingBall cusPreChat-second"> <\/span> <span class="cusPreChat-loadingBall cusPreChat-third"> <\/span><\/div><\/div><div id="cusBotPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">Sorry, no agents are currently Avilable<\/div><div> <button id="cusBotPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat<\/span> <\/button><\/div><\/div><div id="cusBotPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"><div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"><div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"><div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"><div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"><ul id="cusBotPreChat-fieldList" class="cusPreChat-fieldList">' + t + '<li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">Nome<\/span> <\/label> <input id="cusBotPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div> <\/span><\/li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">Sobrenome<\/span> <\/label> <input id="cusBotPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div> <\/span><\/li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span>Email<\/span> <\/label> <input id="cusBotPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span>Número de Telefone Principal<\/span> <\/label> <input id="cusBotPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li><\/ul><div style="font-size: 12px;color:#767676;text-align: left;margin: 1em 1.75em; font-style: italic;color:#444444;" bis_skin_checked="1"><b>Sua privacidade é importante para nós.<\/b> Usaremos apenas suas informações para processar sua solicitação. Não o compartilharemos com ninguém. Para saber mais sobre como usamos e protegemos seus dados, consulte o&nbsp;<a target="_blank" href="//www.dell.com/learn/policies-privacy">Declaração de Privacidade da Dell.<\/a> <\/div><\/div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusBotPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">Iniciar bate-papo<\/span> <\/button><\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div><div id="cusBotPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"><div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusBotPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)"> <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"><\/path> <\/svg> <\/span><div class="cusPreChat-helpButtonLabel" id="cusBotPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:<\/span> <span class="cusPreChat-message">Conversar Agora<\/span><\/div> <\/button><\/div><\/div>' : '<div id="cusBotPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer" style="max-height:520px;"><div class="cusPreChat-embeddedServiceSidebarHeader"><div class="cusPreChat-shortHeader"><div class="cusPreChat-shortHeaderContent"> <button id="cusBotPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat<\/span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> <\/path> <\/svg> <\/span> <\/button><h2 class="cusPreChat-headerText"><div class="cusPreChat-headerTextContent"> <span id="cusBotPreChat-headerTextLabel">Chat Now<\/span> <span id="cusBotPreChat-headerSubtext"> <\/span><\/div><\/h2> <button id="cusBotPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat<\/span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> <\/path> <\/svg> <\/span> <\/button><\/div><\/div><\/div><div class="cusPreChat-sidebarBody"><div id="cusBotPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> <\/span> <span class="cusPreChat-loadingBall cusPreChat-second"> <\/span> <span class="cusPreChat-loadingBall cusPreChat-third"> <\/span><\/div><\/div><div id="cusBotPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">Sorry, no agents are currently Avilable<\/div><div> <button id="cusBotPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat<\/span> <\/button><\/div><\/div><div id="cusBotPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"><div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"><div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"><div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"><div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"><ul id="cusBotPreChat-fieldList" class="cusPreChat-fieldList">' + t + '<li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">First Name<\/span> <\/label> <input id="cusBotPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div> <\/span><\/li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">Last Name<\/span> <\/label> <input id="cusBotPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div> <\/span><\/li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span>Email<\/span> <\/label> <input id="cusBotPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span>Phone Number<\/span> <\/label> <input id="cusBotPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li><\/ul><div style="font-size: 12px;color:#767676;text-align: left;margin: 1em 1.75em; font-style: italic;color:#444444;" bis_skin_checked="1"><b>Your privacy is important to us.<\/b> We will only use your information to process your request. We will not share it with anyone. To learn more about how we use and protect your data, see the&nbsp;<a target="_blank" href="//www.dell.com/learn/policies-privacy">Dell Privacy Statement.<\/a> <\/div><\/div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusBotPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">Start Chat<\/span> <\/button><\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div><div id="cusBotPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"><div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusBotPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)"> <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"><\/path> <\/svg> <\/span><div class="cusPreChat-helpButtonLabel" id="cusBotPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:<\/span> <span class="cusPreChat-message">Chat Now<\/span><\/div> <\/button><\/div><\/div>';
    r = document.body || document.getElementsByTagName("body")[0];
    r.insertAdjacentHTML("beforeend", i);
    document.getElementById("cusBotPreChat-minimize-btn").addEventListener("click", custMinimizeBtnClickedInBot);
    document.getElementById("cusBotPreChat-close-btn").addEventListener("click", custCloseBtnClickedInBot);
    document.getElementById("cusBotPreChat-helpButtonEnabled").addEventListener("click", maximizeCustBotPrechat);
    custBotPreChatKeypressFieldValidation();
    prePopulateCustBotPreFormValues(n);
    document.getElementById("cusBotPreChat-startChat").addEventListener("click", function() {
        startSnapinChatBot(n)
    })
}
function createFixedLabels(n) {
    let t = ""
      , i = "";
    return "applicationContext"in n && n.applicationContext !== "ChatBot-CareBot" ? ("product_Model"in n && !(n.product_Model === "" || n.product_Model === null || n.product_Model === undefined) && (t = '<div style="font-size: 1.2em;">' + n.product_Model + "<\/div>"),
    "issue_Description"in n && !(n.issue_Description === "" || n.issue_Description === null || n.issue_Description === undefined) && (i = "<div><b>Issue:<\/b> " + n.issue_Description + "<\/div>"),
    '<div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 1em 0px 0px 15px; text-align: left;position: relative;font-size: .75em;color: #444444;" bis_skin_checked="1">' + t + i + '<div> <b>Service Tag:<\/b> <span  id="botServiceTagLabel">' + n.Service_Tag + "<\/span><\/div><\/div>") : '<div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 1em 0px 0px 15px; text-align: left;position: relative;font-size: .75em;color: #444444;" bis_skin_checked="1"><div> <b>ID do pedido:<\/b> <span  id="botCareChatOrderNumberLabel">' + n.CARE_Chat_Order_Number + "<\/span><\/div><\/div>"
}
function startSnapinChatBot(n) {
    chatBotFieldsValidated(n) && (callDellmetricsTrackForBot("880.130.853"),
    loadingSnapinBotQueue(),
    n = addCustBotFormDetailsTo(n),
    saveGlobalSnapinBotObjToSession(n),
    eleExistWithVariable(".embeddedServiceSidebar .startButton", ChatBotStarted, n))
}
function loadingSnapinBotQueue() {
    document.getElementById("cusBotPreChat-sidebarLoadingIndicator").style.display = "flex";
    document.getElementById("cusBotPreChat-hideWhileLoading").style.display = "none";
    document.getElementById("cusBotPreChat-minimize-btn").style.display = "none";
    document.getElementById("cusBotPreChat-close-btn").style.display = "none"
}
function snapinBotQueueLoaded() {
    try {
        document.getElementById("cusBotPreChat-sidebarLoadingIndicator") && (document.getElementById("cusBotPreChat-sidebarLoadingIndicator").style.display = "none",
        document.getElementById("cusBotPreChat-hideWhileLoading").style.display = "block",
        document.getElementById("cusBotPreChat-minimize-btn").style.display = "block",
        document.getElementById("cusBotPreChat-close-btn").style.display = "block",
        closeCustBotPrechat());
        let n = document.querySelector(".modalContainer.embeddedServiceSidebar");
        n && (n.style.display = "block")
    } catch (n) {
        console.log("Exception at method name snapinBotQueueLoaded :" + n)
    }
}
function ChatBotStarted(n, t, i) {
    try {
        changeBotPrechatValues(i);
        document.querySelector(" .embeddedServiceSidebar .dockableContainer .prechatUI  .embeddedServiceSidebarForm .embeddedServiceSidebarButton").click();
        clearInterval(t)
    } catch (r) {
        console.log("Error in:" + r)
    }
}
function changeBotPrechatValues(n) {
    let t = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState()
      , i = t.get("v.prechatFields");
    i.forEach(function(t) {
        t.name === "FirstName" ? t.value = n.c_firstName : t.name === "LastName" ? t.value = n.c_lastName : t.name === "Email" ? t.value = n.c_email : t.name === "Primary_Phone__c" ? t.value = n.c_phoneNo : t.name === "Phone" ? t.value = n.c_phoneNo : t.name === "Service_Tag__c" ? t.value = n.Service_Tag : t.name === "Application_Context__c" ? t.value = n.applicationContext : t.name === "CARE_Chat_Order_Number__c" ? t.value = n.CARE_Chat_Order_Number : console.log("ValueName" + t.name)
    });
    t.set("v.prechatFields", i)
}
function custMinimizeBtnClickedInBot() {
    callDellmetricsTrackForBot("880.130.854");
    minimizeCustBotPrechat()
}
function minimizeCustBotPrechat() {
    document.getElementById("cusBotPreChat-embeddedServiceHelpButton").style.display = "block";
    document.getElementById("cusBotPreChatSnapinDom").style.display = "none"
}
function custCloseBtnClickedInBot() {
    callDellmetricsTrackForBot("880.130.855");
    closeCustBotPrechat()
}
function closeCustBotPrechat() {
    document.getElementById("cusBotPreChat-embeddedServiceHelpButton").style.display = "none";
    document.getElementById("cusBotPreChatSnapinDom").style.display = "none"
}
function maximizeCustBotPrechat() {
    document.getElementById("cusBotPreChat-embeddedServiceHelpButton").style.display = "none";
    document.getElementById("cusBotPreChatSnapinDom").style.display = "block"
}
function prePopulateCustBotPreFormValues(n) {
    "First_Name"in n && (document.getElementById("cusBotPreChat-FirstName").value = n.First_Name);
    "Last_Name"in n && (document.getElementById("cusBotPreChat-LastName").value = n.Last_Name);
    "Email"in n && (document.getElementById("cusBotPreChat-Email").value = n.Email);
    "Phone"in n && (document.getElementById("cusBotPreChat-Phone").value = n.Phone);
    "Service_Tag"in n && document.getElementById("botServiceTagLabel") && (document.getElementById("botServiceTagLabel").value = n.Service_Tag);
    "CARE_Chat_Order_Number"in n && document.getElementById("botCareChatOrderNumberLabel") && (console.log("chatBotObject.CARE_Chat_Order_Number", n.CARE_Chat_Order_Number),
    document.getElementById("botCareChatOrderNumberLabel").innerText = n.CARE_Chat_Order_Number)
}
function chatBotFieldsValidated(n) {
    let t, r = document.getElementById("cusBotPreChat-FirstName"), u = document.getElementById("cusBotPreChat-LastName"), f = document.getElementById("cusBotPreChat-Email"), e = document.getElementById("cusBotPreChat-Phone");
    var i = "This is a required field"
      , o = "Invalid Email id";
    if (n.applicationContext === "ChatBot-CareBot" && (i = "Este é um campo obrigatório",
    o = "ID de email inválido"),
    document.getElementById("ErrMsg_cusBotPreChat-Email")) {
        let n = document.getElementById("ErrMsg_cusBotPreChat-Email");
        n.parentNode.removeChild(n)
    }
    if (t = f.value ? cusBotPreChatInvalidEmail(f, o) : cusBotPreChatEleIsEmpty(f, i),
    document.getElementById("ErrMsg_cusBotPreChat-FirstName") && !r.value)
        t = !1;
    else if (r.value) {
        if (document.getElementById("ErrMsg_cusBotPreChat-FirstName")) {
            let n = document.getElementById("ErrMsg_cusBotPreChat-FirstName");
            n.parentNode.removeChild(n)
        }
    } else
        t = cusBotPreChatEleIsEmpty(r, i);
    if (document.getElementById("ErrMsg_cusBotPreChat-LastName") && !u.value)
        t = !1;
    else if (u.value) {
        if (document.getElementById("ErrMsg_cusBotPreChat-LastName")) {
            let n = document.getElementById("ErrMsg_cusBotPreChat-LastName");
            n.parentNode.removeChild(n)
        }
    } else
        t = cusBotPreChatEleIsEmpty(u, i);
    if (document.getElementById("ErrMsg_cusBotPreChat-Phone") && !e.value)
        t = !1;
    else if (e.value) {
        if (document.getElementById("ErrMsg_cusBotPreChat-Phone")) {
            let n = document.getElementById("ErrMsg_cusBotPreChat-Phone");
            n.parentNode.removeChild(n)
        }
    } else
        t = cusBotPreChatEleIsEmpty(e, i);
    return t === undefined && (t = !0),
    t
}
function cusBotPreChatEleIsEmpty(n, t) {
    return cusBotPreChatErrorMsgPlaceholder(n, t),
    !1
}
function cusBotPreChatInvalidEmail(n, t) {
    if (!cusBotPreChatvalidateEmail(n.value))
        return cusBotPreChatErrorMsgPlaceholder(n, t),
        !1
}
function cusBotPreChatvalidateEmail(n) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
}
function cusBotPreChatBlockListEmailValidation(n, t) {
    var u = t.split("|"), n = n.toUpperCase(), r;
    for (i = 0; i < u.length; i++)
        if (r = u[i],
        r = r.toUpperCase(),
        n === r)
            return !0;
    return !1
}
function cusBotPreChatErrorMsgPlaceholder(n, t) {
    try {
        let r = n.parentNode
          , i = document.createElement("ul");
        i.innerHTML = '<li class="cusPreChat-form-element__help">' + t + "<\/li>";
        i.id = "ErrMsg_" + n.id;
        i.className = "cusPreChat-has-error cusPreChat-uiInput";
        r.parentNode.insertBefore(i, r.nextSibling)
    } catch (i) {
        Console.log(i)
    }
}
function custBotPreChatKeypressFieldValidation() {
    function t(t, i) {
        /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(n(t)) == !0 ? (t.preventDefault(),
        alert(orderSnapinLabelObj.pasteInvalidTextMsg)) : i === "cusBotPreChat-FirstName" && document.getElementById("ErrMsg_cusBotPreChat-FirstName") ? removeDomElementbyId("ErrMsg_cusBotPreChat-FirstName") : i === "cusBotPreChat-LastName" && document.getElementById("ErrMsg_cusBotPreChat-LastName") && removeDomElementbyId("ErrMsg_cusBotPreChat-LastName")
    }
    function n(n) {
        return n.clipboardData && n.clipboardData.getData ? n.clipboardData.getData("text/plain") : null
    }
    document.getElementById("cusBotPreChat-Phone").onkeypress = function(n) {
        var t = []
          , r = n.which || n.keyCode;
        for (i = 48; i < 58; i++)
            t.push(i);
        t.push(45);
        t.push(8);
        t.push(9);
        t.indexOf(r) >= 0 ? document.getElementById("ErrMsg_cusBotPreChat-Phone") && removeDomElementbyId("ErrMsg_cusBotPreChat-Phone") : n.preventDefault()
    }
    ;
    document.getElementById("cusBotPreChat-FirstName").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 64 && t < 91 || t > 96 && t < 123 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusBotPreChat-FirstName") && removeDomElementbyId("ErrMsg_cusBotPreChat-FirstName") : n.preventDefault()
    }
    ;
    document.getElementById("cusBotPreChat-LastName").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 64 && t < 91 || t > 96 && t < 123 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusBotPreChat-LastName") && removeDomElementbyId("ErrMsg_cusBotPreChat-LastName") : n.preventDefault()
    }
    ;
    document.getElementById("cusBotPreChat-Email").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 63 && t < 91 || t > 96 && t < 123 || t > 47 && t < 58 || t == 45 || t == 46 || t == 95 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusBotPreChat-Email") && removeDomElementbyId("ErrMsg_cusBotPreChat-Email") : n.preventDefault()
    }
    ;
    document.getElementById("cusBotPreChat-FirstName").addEventListener("paste", function(n) {
        t(n, "cusBotPreChat-FirstName")
    });
    document.getElementById("cusBotPreChat-LastName").addEventListener("paste", function(n) {
        t(n, "cusBotPreChat-LastName")
    });
    document.getElementById("cusBotPreChat-Email").addEventListener("paste", function(t) {
        /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/.test(n(t)) == !0 ? (t.preventDefault(),
        alert(orderSnapinLabelObj.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusBotPreChat-Email") && removeDomElementbyId("ErrMsg_cusBotPreChat-Email")
    });
    document.getElementById("cusBotPreChat-Phone").addEventListener("paste", function(t) {
        /^[0-9-]*$/.test(n(t)) == !1 ? (t.preventDefault(),
        alert(orderSnapinLabelObj.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusBotPreChat-Phone") && removeDomElementbyId("ErrMsg_cusBotPreChat-Phone")
    })
}
function addCustBotFormDetailsTo(n) {
    return n.c_firstName = document.getElementById("cusBotPreChat-FirstName").value,
    n.c_lastName = document.getElementById("cusBotPreChat-LastName").value,
    n.c_email = document.getElementById("cusBotPreChat-Email").value,
    n.c_phoneNo = document.getElementById("cusBotPreChat-Phone").value,
    document.getElementById("botServiceTagLabel") && (n.c_serviceTag = document.getElementById("botServiceTagLabel").innerText),
    document.getElementById("botCareChatOrderNumberLabel") && (n.c_CARE_Chat_Order_Number = document.getElementById("botCareChatOrderNumberLabel").innerText),
    n
}
function saveGlobalSnapinBotObjToSession(n) {
    if (n) {
        let t = JSON.stringify(n);
        sessionStorage.setItem("chatBotObjectSession", t)
    }
}
function snapinBotPageObserver(n) {
    try {
        let f = document.querySelector(".modalContainer.loading.initialLoading");
        snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
        snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
        snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
        snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
        snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
        f ? snapInCurrentPage = "snapInLoadingPrechatForm" : snapInPrechatForm ? snapInCurrentPage = "snapInPrechatForm" : snapInWaiting ? snapInCurrentPage = "snapInWaiting" : snapInChatStarted ? snapInCurrentPage = "snapInChatStarted" : snapInConfirmationDialoug ? snapInCurrentPage = "snapInConfirmationDialoug" : snapInhelpBtnDisabled ? snapInCurrentPage = "snapInhelpBtnDisabled" : snapInhelpBtnEnabled ? snapInhelpBtnEnabled = "snapInhelpBtnEnabled" : snapInCurrentPage = null;
        var t = window.MutationObserver || window.WebKitMutationObserver
          , i = function(n) {
            n.forEach(function(n) {
                n.addedNodes.length > 0 && (f = document.querySelector(".modalContainer.loading.initialLoading"),
                snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI"),
                snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer"),
                snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText"),
                snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer"),
                snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled"),
                snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled"),
                snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton"),
                f && snapInCurrentPage != "snapInLoadingPrechatForm" ? (snapInCurrentPage = "snapInLoadingPrechatForm",
                serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
                serviceSidebar.style.display = "none") : snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm" ? (snapInCurrentPage = "snapInPrechatForm",
                serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
                serviceSidebar.style.display = "none") : snapInWaiting && snapInCurrentPage != "snapInWaiting" ? (snapInCurrentPage = "snapInWaiting",
                snapinBotQueueLoaded()) : snapInChatStarted && snapInCurrentPage != "snapInChatStarted" ? (snapInCurrentPage = "snapInChatStarted",
                snapinBotQueueLoaded()) : snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug" ? snapInCurrentPage = "snapInConfirmationDialoug" : snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === "flex" && snapInCurrentPage != "snapInhelpBtnDisabled" ? snapInCurrentPage = "snapInhelpBtnDisabled" : snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === "flex" && snapInCurrentPage != "snapInhelpBtnEnabled" && (snapInCurrentPage = "snapInhelpBtnEnabled"))
            })
        }
          , r = new t(i)
          , u = document.querySelector(n);
        r.observe(u, {
            childList: !0,
            subtree: !0
        })
    } catch (f) {
        Console.log("Error in Observer - " + f)
    }
}
function chatBotClick(n, t) {
    try {
        document.querySelector(n).innerText === "Get Started" && document.querySelector(n).click();
        clearInterval(t)
    } catch (i) {
        Console.log("Error in:" + i)
    }
}
function onChatBotServiceTagChange() {
    let n = document.getElementById("cusBotPreChatSnapinDom");
    n && n.parentNode.removeChild(n)
}
function bindHandler() {
    if (!isBinded) {
        $("ul[class*='messageWrapper']").on("DOMSubtreeModified", this.messageReceived);
        isBinded = !0
    }
}
function SetToDefaultValues() {
    isBinded = !1
}
function executeCommand(n) {
    n.redirectURL != null && (n.execute(),
    n = "",
    consoleLog("Executing Command"),
    isMessageFinished = !1)
}
function messageReceived(n) {
    var r;
    if (n.currentTarget.lastElementChild.childNodes.length > 2) {
        var t = n.currentTarget.lastElementChild.childNodes[1].innerText
          , u = n.currentTarget.childElementCount
          , i = sessionStorage.getItem("GR_MessageCount");
        i = i == null ? 0 : i;
        u > parseInt(i) && (sessionStorage.setItem("GR_MessageCount", u),
        lastmessage != t && t != "" ? (lastmessage = t,
        r = new getCommand(t),
        r.redirectURL != null && waitForMessageToOver(executeCommand(r))) : (consoleLog("Message Finished"),
        isMessageFinished = !0))
    }
}
function UpdateSystemOS(n) {
    if (n.toUpperCase() != "OTHER" && window.sessionStorage.getItem("chatBotObjectSession") != null) {
        var t = JSON.parse(window.sessionStorage.getItem("chatBotObjectSession"));
        t.ChatBotInfo.oSissueManualBot = n;
        t.ChatBotInfo.manualTroubleshootURL = UpdateManualsUrl(t.ChatBotInfo.issueDescription, n);
        window.sessionStorage.setItem("chatBotObjectSession", JSON.stringify(t))
    }
}
function ProcessChildMessage(n) {
    try {
        HideLoader();
        var t = document.getElementsByClassName("chasitorText")[0]
          , i = document.createEvent("Event");
        i.initEvent("keydown", !0, !1);
        i.which = i.keyCode = 13;
        t.value = n;
        t.removeAttribute("disabled");
        t.dispatchEvent(i);
        t.setAttribute("disabled", "disabled")
    } catch (r) {
        consoleLog("Error found while posting message to chatbot : " + r)
    }
}
function processChatBotCommand() {
    serviceTagInfoDeffer.then(function(n) {
        consoleLog(JSON.stringify(n));
        GetChatBotinfo().then(function(n) {
            if (sessionStorage.getItem("ChatBot_SessionKey") != null && (n.chatKey = sessionStorage.getItem("ChatBot_SessionKey")),
            sessionStorage.getItem("chatBotObjectSession") != null) {
                var t = JSON.parse(sessionStorage.getItem("chatBotObjectSession"));
                serviceTagInfo != null && serviceTagInfo.isSystemInfoCompleted == "true" ? (n.oSissueManualBot = serviceTagInfo.OSCode,
                n.isDsdInstalled = serviceTagInfo.isDsdInstalled,
                n.systemOS = !0) : (n.oSissueManualBot = t.OSCode,
                n.isDsdInstalled = t.isDsdInstalled,
                n.systemOS = !1);
                n.firstName = t.c_firstName;
                n.lastName = t.c_lastName;
                n.email = t.c_email;
                n.contactNumber = t.c_phoneNo;
                n.caseNumber = "0";
                n.serviceTag = t.Service_Tag;
                n.productModel = t.product_Model;
                n.kb = t.IssueDesc;
                n.issueDescription = t.IssueDesc;
                n.agentQueueName = t.SFDCId;
                n.applicationContext = t.applicationContext;
                n.isDsdInstalled == "false" && (n.isSwAlert = !1);
                UpdateDriverScanURL(n.isSwAlert, n.serviceTag);
                n.driverPageURL = driverPageURL;
                n.manualTroubleshootURL = UpdateManualsUrl(t.IssueType, n.oSissueManualBot);
                SrRedirectURL = n.eSupportSrRedirectURL;
                DispatchRedirectURL = n.eSupportDispatchRedirectURL;
                t.ChatBotInfo = n;
                sessionStorage.setItem("chatBotObjectSession", JSON.stringify(t));
                SendResponseToChatbot(t.ChatBotInfo).then(function() {
                    ProcessChildMessage("...")
                }).fail(function(n) {
                    consoleLog("ESB end point thown the error" + JSON.stringify(n));
                    ProcessChildMessage("....")
                })
            }
        }).fail(function(n) {
            consoleLog("rejected promise in method GetChatBotinfo" + JSON.stringify(n));
            ProcessChildMessage("....")
        })
    }).fail(function(n) {
        consoleLog("rejected promise in method SA" + JSON.stringify(n));
        ProcessChildMessage("....")
    })
}
function UpdateDriverScanURL(n, t) {
    try {
        if (n != undefined && t != undefined && n) {
            var i = GetLwpDetails();
            driverPageURL = driverPageURL.format(i, t)
        }
    } catch (r) {
        consoleLog(r)
    }
}
function UpdateQuickTestUrl() {
    var n, t;
    try {
        n = window.sessionStorage.getItem("encTagFromSA");
        n ? (t = GetLwpDetails(),
        quickTestURL = quickTestURL.format(t, n)) : consoleLog("Method: UpdateQuickTestUrl > serviceTag: " + n)
    } catch (i) {
        consoleLog(i)
    }
    return quickTestURL
}
function popupAdWindow(n, t) {
    document.getElementsByClassName("helpButton").length != 0 && (n = "Chat",
    t = "Troubleshoot your PC’s performance issues now using our automated assistant",
    document.getElementsByClassName("helpButton")[0].insertAdjacentHTML("beforeend", '<div class="talk-bubble tri-right border btm-right-in tag-remove"><li class="close" onclick="closeBubble()">&times;<\/li><div class="talktext"><h3 class="text-header-left">' + n + "<\/h3><p>" + t + "<\/p><\/div><\/div>"))
}
function closeBubble() {
    var n = document.getElementsByClassName("close");
    n[0].parentElement.style.display = "none"
}
function processODESucessresponse(n, t, i, r) {
    if (sessionStorage.getItem("chatBotObjectSession") != null) {
        var u = JSON.parse(sessionStorage.getItem("chatBotObjectSession")).ChatBotInfo;
        u.isHwAlert = n;
        u.isHardDriveTestPassed = t;
        u.isSwAlert = i;
        u.quickSATestMsg = "Results Available";
        u.quickSATest = "C";
        u.componentFailure = r;
        UpdateDriverScanURL(i, u.serviceTag);
        SendResponseToChatbot(u).then(function() {
            waitForElement(".chasitorText", function() {
                setTimeout(function() {
                    ProcessChildMessage("...")
                }, 2e3)
            })
        }).fail(function() {
            waitForElement(".chasitorText", function() {
                setTimeout(function() {
                    ProcessChildMessage("....")
                }, 2e3)
            })
        })
    }
}
function processODEProgress(n, t) {
    if (sessionStorage.getItem("chatBotObjectSession") != null) {
        var i = JSON.parse(sessionStorage.getItem("chatBotObjectSession")).ChatBotInfo;
        i.quickSATestMsg = n;
        i.quickSATest = t;
        SendResponseToChatbot(i).then(function() {
            ProcessChildMessage("...")
        }).fail(function(n) {
            consoleLog("rejected promise" + n);
            ProcessChildMessage("....")
        })
    }
}
function updateSrInfoToSfdc(n) {
    if (sessionStorage.getItem("chatBotObjectSession") != null) {
        var t = JSON.parse(sessionStorage.getItem("chatBotObjectSession")).ChatBotInfo;
        t.srNumber = n;
        SendResponseToChatbot(t).then(function() {
            ProcessChildMessage("...")
        }).fail(function(n) {
            consoleLog("rejected promise" + n);
            ProcessChildMessage("....")
        })
    }
}
function SendPartialResponseToChatbot(n) {
    var r = JSON.stringify(n), i, t;
    consoleLog(r);
    i = "";
    t = $.Deferred();
    try {
        sessionStorage.getItem("chatBotObjectSession") != null && (i = "/support/guidedpath/DigitalResolution/ChatBotUpdate");
        $.ajax({
            url: i,
            data: r,
            dataType: "json",
            type: "PUT",
            contentType: "application/json; charset=utf-8",
            success: function(n) {
                t.resolve(n)
            },
            error: function(n) {
                consoleLog(n);
                t.reject(n)
            }
        })
    } catch (u) {
        consoleLog("Response error" + u);
        t.reject(u)
    }
    return t.promise()
}
function SendResponseToChatbot(n) {
    var r = JSON.stringify(n), i, t;
    consoleLog(r);
    i = "";
    t = $.Deferred();
    try {
        sessionStorage.getItem("chatBotObjectSession") != null && (i = "/support/guidedpath/DigitalResolution/ChatBotUpdate");
        $.ajax({
            url: i,
            data: r,
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: function(n) {
                t.resolve(n)
            },
            error: function(n) {
                consoleLog(n);
                t.reject(n)
            }
        })
    } catch (u) {
        consoleLog("Response error" + u);
        t.reject(u)
    }
    return t.promise()
}
function UpdateManualsUrl(n, t) {
    var i = GetLwpDetails();
    return i == undefined ? manualTroubleshootURL.format("us/en/19", "pcslow", t) : manualTroubleshootURL.format(i, "pcslow", t)
}
function GetCurrentSysInfo(n) {
    var t = $.Deferred();
    try {
        n.getClientSystemInfo(!0, !1, !1, function(n) {
            n != null && n.data != null ? t.resolve(n.data) : (consoleLog(n),
            t.reject(n))
        }, function(n) {
            consoleLog(n);
            t.reject(n)
        })
    } catch (i) {
        consoleLog("Main try catch" + i);
        t.reject(i)
    }
    return t
}
function requestDeviceDriversScan(n) {
    var t = $.Deferred();
    try {
        n.getDeviceDrivers(function(n) {
            window.sessionStorage.setItem("Ode_DriverScan", JSON.stringify(n));
            t.resolve(n)
        }, function(n) {
            consoleLog("Error Occured in Drivers Scan !");
            t.reject(n)
        }, !1)
    } catch (i) {
        consoleLog(i);
        t.reject(i)
    }
    return t.promise()
}
function startChatBot(n, t, i, r, u, f, e, o, s, h) {
    GetChatbotconfiguration(n, t).done(function(n) {
        n && (ChatBotDsdTokenUrl = n.DsdTokenUrl,
        n.Service_Tag = u,
        n.isDsdInstalled = !1,
        n.OSCode = "",
        n.applicationContext = f,
        n.incidentBaseUrl = i,
        n.IssueDesc = e,
        n.product_Model = o,
        n.issue_Description = e.replace("_", " ").toProperCase(),
        n.SFDCId = s,
        n.Agent_QueueName = s,
        n.buttonId = h,
        n.IssueType = e,
        r(n),
        serviceTagInfoDeffer = setCurrentSystemInfo(serviceTagInfo, u))
    }).fail(function(n) {
        consoleLog("Start Chat > GetChatbotconfiguration >" + JSON.stringify(n))
    })
}
function startCareChatBot(n, t, i, r) {
    GetChatbotconfiguration("OrderStatus", "").done(function(u) {
        if (u) {
            ChatBotDsdTokenUrl = u.DsdTokenUrl;
            u.Service_Tag = "";
            u.CARE_Chat_Order_Number = i;
            u.isDsdInstalled = !1;
            u.OSCode = "";
            u.applicationContext = "ChatBot-CareBot";
            u.incidentBaseUrl = "";
            u.IssueDesc = t;
            u.product_Model = "";
            u.issue_Description = t;
            u.SFDCId = n;
            u.Agent_QueueName = n;
            u.BotFutureUse_2 = r;
            u.language = "pt-br";
            u.IssueType = t;
            var f = GetButtonId(u.SfdcIdAndButtonId, n);
            f.length != 0 && (u.buttonId = f[0].split(",")[1].split(":")[1]);
            triggerChatBot(u)
        }
    }).fail(function(n) {
        consoleLog("Start Chat > GetChatbotconfiguration >" + JSON.stringify(n))
    })
}
function GetButtonId(n, t) {
    return t = "SFDCID:" + t,
    n = n.split("|"),
    n.filter(function(n) {
        return n.toLowerCase().indexOf(t.toLowerCase()) !== -1
    })
}
function resumeChatBot(n, t, i, r, u, f, e, o, s, h, c, l, a) {
    GetChatbotconfiguration(n, "").then(function(n) {
        n && (n.Service_Tag = t,
        n.isDsdInstalled = !1,
        n.OSCode = h,
        n.First_Name = f,
        n.Last_Name = e,
        n.Phone = o,
        n.Email = i,
        n.c_firstName = f,
        n.c_lastName = e,
        n.c_email = i,
        n.c_phoneNo = o,
        n.c_serviceTag = t,
        n.applicationContext = r,
        n.IssueDesc = u,
        n.product_Model = s,
        n.issue_Description = u,
        n.StepName_Manual_Bot = c,
        n.SFDCId = l,
        n.Agent_QueueName = l,
        n.buttonId = a,
        this.triggerChatBot(n))
    }).fail(function(n) {
        consoleLog("resumeChatBot > GetChatbotconfiguration >" + JSON.stringify(n))
    })
}
function setCurrentSystemInfo(n, t) {
    var i = $.Deferred();
    try {
        $.eSupportClientApi !== undefined ? getDSD(function(r) {
            r.findService(function() {
                getDSD(function(r) {
                    GetCurrentSysInfo(r).done(function(i) {
                        n.Service_Tag = i.serviceTagData.serviceTag;
                        n.OSCode = i.OSCode;
                        n.isDsdInstalled = n.Service_Tag == t ? "true" : "false";
                        n.isSystemInfoCompleted = "true"
                    }).fail(function(t) {
                        consoleLog("ServiceTag detection failed > Method:GetCurrentSysInfo, " + t.message);
                        n.isSystemInfoCompleted = "true";
                        consoleLog("serviceTagInfo.isSystemInfoCompleted is failed")
                    });
                    requestDeviceDriversScan(r).then(function(n) {
                        consoleLog(JSON.stringify(n))
                    }).fail(function(n) {
                        consoleLog(n)
                    });
                    i.resolve()
                })
            }, function(t) {
                console.log("Could not find service > Error:" + t);
                n.isSystemInfoCompleted = "true";
                i.resolve()
            })
        }) : i.resolve()
    } catch (r) {
        i.resolve()
    }
    return i.promise(n)
}
function HideLoadingImage() {
    try {
        document.getElementById("VirtualAgentProcessing") != null && (document.getElementById("VirtualAgentProcessing").style.visibility = "hidden")
    } catch (n) {
        consoleLog("exception in method HideLoadingImage: " + n)
    }
}
function ShowLoadingImage() {
    try {
        document.getElementById("VirtualAgentProcessing") != null && (document.getElementById("VirtualAgentProcessing").style.visibility = "visible");
        $("#dcuVirtualAgent").length > 0 && ($("#dcuVirtualAgent").addClass("disabled"),
        document.getElementById("dcuVirtualAgent").style.pointerEvents = "none")
    } catch (n) {
        consoleLog("exception in method ShowLoadingImage: " + n)
    }
}
function GetLwpDetails() {
    var i = "", n, t;
    return Dell && Dell.OnlineUtils && Dell.OnlineUtils.Lwp ? (n = Dell.OnlineUtils.Lwp,
    n != undefined && n.country && n.language && n.customerset && (i = n.country + "/" + n.language + "/" + n.customerset)) : Dell && Dell.Global && Dell.Global.lwp && (t = Dell.Global.lwp,
    t != undefined && t.c && t.l && t.cs && (i = t.c + "/" + t.l + "/" + t.cs)),
    i
}
function GetIncidentEndPoint() {
    if (sessionStorage.getItem("chatBotObjectSession") != null) {
        var n = JSON.parse(sessionStorage.getItem("chatBotObjectSession")).incidentBaseUrl
          , t = GetLwpDetails();
        return n + t
    }
}
function GetChatbotconfiguration(n) {
    var t = $.Deferred()
      , i = GetLwpDetails()
      , u = i ? "/support/guidedpath/" + i + "/DigitalResolution/ChatBotConfiguration?appName=" + n : "/support/guidedpath/DigitalResolution/ChatBotConfiguration?appName=" + n;
    try {
        $.ajax({
            url: u,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            async: !0,
            beforeSend: function(n) {
                n.withCredentials = !0
            },
            success: function(n) {
                consoleLog(n);
                t.resolve(n)
            },
            error: function(n) {
                consoleLog(n);
                t.reject(n)
            }
        })
    } catch (r) {
        consoleLog("Response error" + r);
        t.reject(r)
    }
    return t.promise()
}
function GetDriversDataFromSession() {
    var t = [], n;
    try {
        sessionStorage.getItem("Ode_DriverScan") != null && (n = JSON.parse(sessionStorage.getItem("Ode_DriverScan")),
        n != null && n.data != null && n.data.Updates != null && n.data.Updates.length > 0 && n.data.Updates.forEach(function(n) {
            t.push(n.DriverId)
        }))
    } catch (i) {
        consoleLog("Method is GetDriversDataFromSession:" + i)
    }
    return t
}
function GetChatBotinfo() {
    var t = $.Deferred(), e, o;
    try {
        var i = ""
          , r = GetDriversDataFromSession()
          , h = sessionStorage.getItem("chatBotObjectSession");
        if (h != null) {
            var n = JSON.parse(sessionStorage.getItem("chatBotObjectSession"))
              , u = n.c_email
              , f = GetLwpDetails();
            r.length != 0 ? (e = {
                serviceTag: n.Service_Tag,
                emailId: u,
                issueType: n.IssueType,
                applicationContext: n.applicationContext,
                sfdcQueueId: n.SFDCId,
                driverIds: r.toLocaleString()
            },
            i = "/support/guidedpath/" + f + "/DigitalResolution/ChatBotQueueInfo?" + $.param(e)) : (o = {
                serviceTag: n.Service_Tag,
                emailId: u,
                issueType: n.IssueType,
                applicationContext: n.applicationContext,
                sfdcQueueId: n.SFDCId
            },
            i = "/support/guidedpath/" + f + "/DigitalResolution/ChatBotQueueInfo?" + $.param(o))
        }
        $.ajax({
            url: i,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            success: function(n) {
                consoleLog(n);
                t.resolve(n)
            },
            error: function(n) {
                consoleLog(n);
                t.reject(n)
            }
        })
    } catch (s) {
        consoleLog("Response error" + s);
        t.reject(s)
    }
    return t.promise()
}
function CloseAndClearChatBot() {
    try {
        $("div#divLoading").remove();
        sessionStorage.removeItem("isChatBotActive");
        sessionStorage.removeItem("chatBotObjectSession");
        sessionStorage.removeItem("GR_ServiceTag");
        sessionStorage.removeItem("Ode_DriverScan");
        sessionStorage.removeItem("ChatBot_SessionKey");
        sessionStorage.removeItem("GR_MessageCount");
        sessionStorage.removeItem("GR_IsPageRedirected");
        sessionStorage.removeItem("ode_diagscancommand");
        $("#dcuVirtualAgent").length > 0 && $("#dcuVirtualAgent").hasClass("disabled") && ($("#dcuVirtualAgent").removeClass("disabled"),
        document.getElementById("dcuVirtualAgent").style.pointerEvents = "auto");
        $("#cusBotPreChatSnapinDom").length > 0 && $("#cusBotPreChatSnapinDom").hide();
        SetToDefaultValues()
    } catch (n) {
        consoleLog(n)
    }
}
function ShowLoader() {
    try {
        var n = $("div.dockableContainer").width()
          , t = $("div.dockableContainer").height()
          , i = $("div.dockableContainer").position();
        $("div#divLoading").css({
            height: t,
            width: n,
            left: i.left,
            position: "fixed",
            background: "black",
            zIndex: 9999,
            display: "block",
            opacity: .5
        })
    } catch (r) {
        consoleLog(r)
    }
}
function HideLoader() {
    try {
        $("div#divLoading").css({
            display: "none"
        })
    } catch (n) {
        consoleLog(n)
    }
}
function AddElementToPage() {
    try {
        var n = document.createElement("div");
        n.id = "divLoading";
        n.style.display = "none";
        n.style.borderRadius = "8px 8px 0px 0px";
        n.style.position = "fixed";
        n.style.bottom = 0;
        n.innerHTML = '<i class="icon-ui-loading" style="left: 50%;top: 50%;position: relative;"><\/i>';
        document.body.appendChild(n)
    } catch (t) {
        consoleLog(t)
    }
}
function HookClosePreChatForm() {
    document.getElementById("lnkIssueChange") != null && document.getElementById("lnkIssueChange").addEventListener("click", function() {
        CloseAndClearChatBot()
    })
}
function StoreChatBotSessionKey(n) {
    sessionStorage.setItem("ChatBot_SessionKey", n)
}
function DisableChatBotInput() {
    try {
        document.getElementsByClassName("chasitorText").length > 0 && setTimeout(function() {
            var n = document.getElementsByClassName("chasitorText")[0];
            n.focus();
            n.blur();
            n.setAttribute("disabled", "disabled");
            n.classList.remove("textAreaIsFocused");
            n.style.background = "#CCC";
            n.style.opacity = "0.5";
            n.disabled = !0;
            n.placeholder = textBoxPlaceHolderWhenDiabled;
            n.style.padding = "6px 8px";
            sessionStorage.setItem("chasitorTextEnabled", !1)
        }, 1)
    } catch (n) {
        var t = "Exception >> Method : DisableChatBotInput, Message : " + n;
        consoleLog(t)
    }
}
function EnableChatBotInput() {
    var n, t;
    try {
        document.getElementsByClassName("chasitorText").length > 0 && (n = document.getElementsByClassName("chasitorText")[0],
        n.removeAttribute("disabled"),
        n.classList.add("textAreaIsFocused"),
        n.style.background = "",
        n.style.opacity = "",
        n.disabled = !1,
        n.placeholder = textBoxPlaceHolderWhenEnabled,
        n.style.padding = "12px 8px",
        sessionStorage.setItem("chasitorTextEnabled", !0))
    } catch (i) {
        t = "Exception >> Method : EnableChatBotInput, Message : " + i;
        consoleLog(t)
    }
}
function onBotStart() {
    waitForElement("#cusBotPreChat-close-btn", function() {
        $("#cusBotPreChat-close-btn").click(function() {
            CloseAndClearChatBot()
        })
    });
    waitForElement(".messageWrapper .wrapper", function() {
        bindHandler();
        triggerOnRefresh()
    });
    waitForElement(".chasitorText", function() {
        DisableChatBotInput()
    })
}
function triggerOnRefresh() {
    if (sessionStorage.getItem("GR_IsPageRedirected") != null && sessionStorage.getItem("GR_IsPageRedirected") == "true") {
        var n = typeof InstallTrigger != "undefined";
        n ? ProcessChildMessageWithSucess() : ProcessChildMessage("...");
        sessionStorage.setItem("GR_IsPageRedirected", "false")
    }
}
function FetchSessionValue(n) {
    if (sessionStorage.getItem(n) != null)
        return JSON.parse(sessionStorage.getItem(n)).ChatBotInfo
}
function hideChatWithAgentIfChatbotActive() {
    consoleLog("Method : hideChatWithAgentIfChatbotActive");
    $(".sidebar-actions").each(function(n, t) {
        var i, r;
        $(t).find("ul.unstyled").length > 0 ? (i = $(t).find("ul.unstyled li").length,
        i > 1 ? $(t).find(".SrChatStatusInfo").hide() : i === 0 && $(t).hide()) : (r = $(t).find("div.SrChatStatusInfo").length,
        r > 1 ? $(t).find("div.SrChatStatusInfo").hide() : r === 1 && $(t).hide())
    })
}
function ProcessChildMessageWithSucess() {
    try {
        setTimeout(function() {
            ProcessChildMessage("...")
        }, 5e3)
    } catch (n) {
        consoleLog(n)
    }
}
function consoleLog(n) {
    console.log(n)
}
function getDSD(n) {
    try {
        getTokens(ChatBotDsdTokenUrl, function(t) {
            try {
                var i = new $.eSupportClientApi(t.SuppAssistEnabled);
                jQuery.support.cors = !0;
                i.tokenExpires.setValue(t.Expires);
                i.isAliveToken.setValue(t.IsaliveToken);
                i.getDeviceDriversToken.setValue(t.DeviceDriversToken);
                i.getClientSystemInfoToken.setValue(t.ClientSystemInfoToken);
                i.getDeviceDriversTokenM.setValue(t.DeviceDriversTokenM);
                i.getClientSystemInfoTokenM.setValue(t.ClientSystemInfoTokenM);
                n(i)
            } catch (r) {
                console.log(r);
                throw r;
            }
        }, function(n) {
            console.log(n);
            throw n;
        })
    } catch (t) {
        consoleLog("Error in getDSD" + t);
        throw "Error in getDSD";
    }
}
function GetEncryptedSvcTag(n, t) {
    var i = t;
    return $.ajax({
        url: n.replace("__servicetag", t),
        contentType: "application/json",
        async: !1,
        type: "GET"
    }).done(function(n) {
        i = n
    }).fail(function(n, t, i) {
        console.log("drivers svc tag encryption failed." + i)
    }),
    i
}
function getTokens(n, t, i) {
    var u = GetLwpDetails(), r;
    n = u ? "/support/guidedpath/" + u + "/DigitalResolution/CreateDsdToken" : "/support/guidedpath/DigitalResolution/CreateDsdToken";
    var f = window.sessionStorage.getItem("tagFromSA")
      , e = window.sessionStorage.getItem("sid")
      , o = e !== null && e.length > 0 ? 1 : 0;
    f && (r = GetEncryptedSvcTag("//www.dell.com/support/components/detectproduct/encvalue/__servicetag?appName=guided", f),
    window.sessionStorage.setItem("encTagFromSA", r),
    n += "?code=" + r,
    n += "&buster=" + (new Date).getMilliseconds());
    n += n.indexOf("?") !== -1 ? "&sId=" + o : "?sId=" + o;
    $.ajax({
        url: n,
        dataType: "json",
        success: function(n) {
            var i = n.Skey;
            i !== null && i !== undefined && i.length > 0 && window.sessionStorage.setItem("sid", i);
            t(n)
        },
        error: function(n) {
            i(n)
        }
    })
}
function RunQuickTestWithNoVideo() {
    sessionStorage.setItem("ode_diagscancommand", "GR|QuicktestNoVideo")
}
function chasitorTextMaintainState() {
    var n = sessionStorage.getItem("chasitorTextEnabled");
    n == "true" ? EnableChatBotInput() : DisableChatBotInput()
}
function triggerOrderSnapin(n, t) {
    let i = document.querySelector(".embeddedServiceSidebar")
      , r = document.getElementById("cusCAREPreChatSnapinDom");
    if (i && (!i || window.getComputedStyle(i).display != "none") || r) {
        let t = document.querySelector(".modalContainer.embeddedServiceSidebar")
          , i = document.querySelector(".embeddedServiceSidebar .embeddedServiceSidebarMinimizedDefaultUI")
          , r = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        r || (t && t.style.display == "none" ? (prePopulateCustCarePreFormValues(n),
        maximizeCustCAREPrechat()) : i ? i.click() : (prePopulateCustCarePreFormValues(n),
        maximizeCustCAREPrechat(),
        document.getElementById("cusCAREPreChat-minimize-btn").style.display = "block",
        document.getElementById("cusCAREPreChat-close-btn").style.display = "block"))
    } else
        createCusCAREpreChatSnapinDom(n, t),
        prePopulateCustCarePreFormValues(n),
        checkIfIssueDescIsOptionalInCare(n, t),
        custCarePreFormShowIssueDetailsCharRemainingOnKeyUp(t),
        custCarePreChatKeypressFieldValidation(t),
        document.getElementById("cusCAREPreChat-minimize-btn").addEventListener("click", minimizeCustCAREPrechat),
        document.getElementById("cusCAREPreChat-close-btn").addEventListener("click", function() {
            assignCarePropVal("890.130.145", "890.130.156");
            closeCustCAREPrechat(t)
        }),
        document.getElementById("cusCAREPreChat-helpButtonEnabled").addEventListener("click", function() {
            assignCarePropVal("890.130.144", "890.130.155");
            maximizeCustCAREPrechat()
        }),
        document.getElementById("cusCAREPreChat-startChat").addEventListener("click", function() {
            startCAREChat(n, t)
        });
    initiateChatCARE(n, t);
    assignCarePropVal("890.130.142", "890.130.153")
}
function createCusCAREpreChatSnapinDom(n, t) {
    let i = "", r = "", u = "", f, o = t.orderPreChatHeader, e = "";
    switch (n.viewType) {
    case "Order":
        r = "DPId"in n && n.DPId ? "<div> <b>" + t.DPId + ":<\/b> " + n.DPId + "<\/div>" : "irnNumber"in n && n.irnNumber ? "<div> <b>" + t.irnNumber + ":<\/b> " + n.irnNumber + "<\/div>" : "";
        i = "orderNumber"in n && n.orderNumber ? "<div> <b>" + t.orderNumber + ":<\/b> " + n.orderNumber + "<\/div>" : "";
        break;
    case "DPid":
        i = "DPId"in n && n.DPId ? "<div> <b>" + t.DPId + ":<\/b> " + n.DPId + "<\/div>" : "irnNumber"in n && n.irnNumber ? "<div> <b>" + t.irnNumber + ":<\/b> " + n.irnNumber + "<\/div>" : "";
        break;
    case "CustomerNumber":
        i = "customerNumber"in n && n.customerNumber ? "<div> <b>" + t.customerNumber + ":<\/b> " + n.customerNumber + "<\/div>" : "";
        break;
    case "PONumber":
        i = "poNumber"in n && n.poNumber ? "<div> <b>" + t.poNumber + ":<\/b> " + n.poNumber + "<\/div>" : "";
        break;
    case "GeneralChat":
    case "":
        i = ""
    }
    "issueType"in n && n.issueType != "" && n.issueType != null && n.issueType != undefined && "issueType"in t && t.issueType != "" && t.issueType != null && t.issueType != undefined && n.issueType != "None" && (u = '<div id="careIssueTypeDom" assignedCareBtn="' + n.buttonId + '"> <b>' + t.issueType + ': <\/b><span id="careIssueTypeLabVal">' + n.issueType + "<\/span><\/div>");
    n.viewType == "GeneralChat" ? (f = '<div id="readonlyCAREPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 17px 5px 7px .75em;text-align: left;position: relative;font-size: 1.2em;color: #666;font-weight: 100;">' + o + "<\/div>",
    e = '<li class="cusPreChat-inputOrderNum cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputOrderNum cusPreChat-uiInput--default cusPreChat-uiInput--input"><label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"><span>' + t.lblOrdNoOptional + " <\/span><span>" + t.optional + '<\/span><\/label><input id="cusCAREPreChat-OrderNum" class="cusPreChat-OrderNum form-control cusPreChat-input" maxlength="15" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li>') : (i != "" || r != "" || u != "") && (f = '<div id="readonlyCAREPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 8px 1.5em 0px 1em; text-align: left;position: relative;font-size: .75em;color: #444444;">' + i + r + u + "<\/div>");
    let s = '<div id="cusCAREPreChatSnapinDom" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer"><div class="cusPreChat-embeddedServiceSidebarHeader"><div class="cusPreChat-shortHeader"><div class="cusPreChat-shortHeaderContent"> <button id="cusCAREPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat<\/span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> <\/path> <\/svg> <\/span> <\/button><h2 class="cusPreChat-headerText"><div class="cusPreChat-headerTextContent"> <span id="cusCAREPreChat-headerTextLabel">' + t.chatHeader + '<\/span> <span id="cusCAREPreChat-headerSubtext"> <\/span><\/div><\/h2> <button id="cusCAREPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat<\/span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> <\/path> <\/svg> <\/span> <\/button><\/div><\/div><\/div><div class="cusPreChat-sidebarBody"><div id="cusCAREPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> <\/span> <span class="cusPreChat-loadingBall cusPreChat-second"> <\/span> <span class="cusPreChat-loadingBall cusPreChat-third"> <\/span><\/div><\/div><div id="cusCAREPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">' + t.chatUnavailableMessage + '<\/div><div> <button id="cusCAREPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat<\/span> <\/button><\/div><\/div><div id="cusCAREPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"><div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"><div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"><div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"><div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"><ul class="cusPreChat-fieldList">' + f + '<li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">' + t.firstName + '<\/span> <\/label> <input id="cusCAREPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div> <\/span><\/li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">' + t.lastName + '<\/span> <\/label> <input id="cusCAREPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"><\/div> <\/span><\/li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>' + t.emailAddress + '<\/span> <\/label> <input id="cusCAREPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>' + t.phoneNumber + '<\/span> <\/label> <input id="cusCAREPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"><\/div><\/li>' + e + '<li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"><div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="CareIssue_Description_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>' + t.issueDescription + '<\/span> <\/label><textarea id="cusCAREPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input" maxlength="' + t.issueDescriptionLength + '" type="text" aria-describedby="" placeholder="" required=""><\/textarea><div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / ' + t.issueDescriptionLength + " " + t.characters + '<\/div><\/div><\/li><\/ul><div style="font-size: 12px;color:#767676;text-align: left;margin: 2.5em 1.75em; font-style: italic;color:#444444;">' + t.customerPrivacyDesc + '<\/div><\/div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusCAREPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">' + t.startChat + '<\/span> <\/button><\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div><div id="cusCAREPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"><div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusCAREPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)"> <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"><\/path> <\/svg> <\/span><div class="cusPreChat-helpButtonLabel" id="cusCAREPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:<\/span> <span class="cusPreChat-message">' + t.chatHeader + "<\/span><\/div> <\/button><\/div><\/div>"
      , h = document.body || document.getElementsByTagName("body")[0];
    h.insertAdjacentHTML("beforeend", s)
}
function minimizeCustCAREPrechat() {
    assignCarePropVal("890.130.143", "890.130.154");
    document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = "block";
    document.getElementById("cusCAREPreChatSnapinDom").style.display = "none"
}
function closeCustCAREPrechat(n) {
    document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = "none";
    document.getElementById("cusCAREPreChatSnapinDom").style.display = "none";
    let t = document.querySelectorAll(".cusPreChat-has-error");
    t.forEach(function(n) {
        removeDomElementbyId(n.id)
    });
    removecustCareFormValues();
    custCarePreFormShowIssueDetailsCharRemaining(n)
}
function removecustCareFormValues() {
    inputFields = document.querySelectorAll(".cusPreChat-input");
    inputFields.forEach(function(n) {
        n.value && (n.value = "")
    })
}
function maximizeCustCAREPrechat() {
    document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = "none";
    document.getElementById("cusCAREPreChatSnapinDom").style.display = "block"
}
function initiateChatCARE(n, t) {
    let i = document.getElementById("esw_storage_iframe");
    i || initOrderSnapin(n, t)
}
function initOrderSnapin(n, t) {
    var r, i;
    snapinCAREPageObserver("body", t);
    snapInCareClickListners();
    r = function(t) {
        embedded_svc.settings.displayHelpButton = !0;
        embedded_svc.settings.enabledFeatures = ["LiveAgent"];
        embedded_svc.settings.entryFeature = "LiveAgent";
        translatedLabels = "language"in n ? translationCare(n.language) : translationCare("en");
        embedded_svc.settings.language = translatedLabels.language;
        let i;
        i = "issueType"in n && n.issueType != "" && n.issueType != null && n.issueType != undefined && n.issueType != "None" ? n.issueType : "None";
        "orderNumber"in n && n.orderNumber != "" ? (sendOrderNumber = n.BUID ? n.orderNumber + "-" + n.BUID : n.orderNumber,
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
            label: "Chat Source",
            value: "CARE",
            transcriptFields: ["Chat_Source__c"]
        }, {
            label: "Order Number",
            value: sendOrderNumber,
            transcriptFields: ["Order_Number__c"]
        }, {
            label: translatedLabels.issueDesc,
            transcriptFields: ["Description__c"]
        }, {
            label: "Subject",
            value: i,
            transcriptFields: ["Issue__c"]
        }],
        embedded_svc.settings.extraPrechatInfo = [{
            entityFieldMaps: [{
                doCreate: !1,
                doFind: !0,
                fieldName: "LastName",
                isExactMatch: !0,
                label: translatedLabels.lastName
            }, {
                doCreate: !1,
                doFind: !0,
                fieldName: "FirstName",
                isExactMatch: !0,
                label: translatedLabels.firstName
            }, {
                doCreate: !1,
                doFind: !0,
                fieldName: "Email",
                isExactMatch: !0,
                label: translatedLabels.emailAdd
            }, {
                doCreate: !1,
                doFind: !0,
                fieldName: "Primary_Phone__c",
                isExactMatch: !0,
                label: translatedLabels.primPhone
            }],
            entityName: "Contact",
            saveToTranscript: ""
        }, {
            entityFieldMaps: [{
                doCreate: !1,
                doFind: !0,
                fieldName: "External_ID__c",
                isExactMatch: !0,
                label: "Order Number"
            }],
            entityName: "Order",
            saveToTranscript: "OrderNumber__c"
        }, {
            entityFieldMaps: [{
                doCreate: !1,
                doFind: !0,
                fieldName: "Issue_Description__c",
                isExactMatch: !0,
                label: translatedLabels.issueDesc
            }, {
                doCreate: !1,
                doFind: !0,
                fieldName: "CARE_Chat_Order_Number__c",
                isExactMatch: !0,
                label: "CARE Chat Order Number"
            }],
            entityName: "Case"
        }]) : (embedded_svc.settings.extraPrechatFormDetails = [{
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
            label: "Chat Source",
            value: "CARE",
            transcriptFields: ["Chat_Source__c"]
        }, {
            label: translatedLabels.issueDesc,
            transcriptFields: ["Description__c"]
        }, {
            label: "CARE Chat Order Number",
            transcriptFields: ["Order_Number__c"]
        }],
        embedded_svc.settings.extraPrechatInfo = [{
            entityFieldMaps: [{
                doCreate: !1,
                doFind: !0,
                fieldName: "LastName",
                isExactMatch: !0,
                label: translatedLabels.lastName
            }, {
                doCreate: !1,
                doFind: !0,
                fieldName: "FirstName",
                isExactMatch: !0,
                label: translatedLabels.firstName
            }, {
                doCreate: !1,
                doFind: !0,
                fieldName: "Email",
                isExactMatch: !0,
                label: translatedLabels.emailAdd
            }, {
                doCreate: !1,
                doFind: !0,
                fieldName: "Primary_Phone__c",
                isExactMatch: !0,
                label: translatedLabels.primPhone
            }],
            entityName: "Contact",
            saveToTranscript: ""
        }, {
            entityFieldMaps: [{
                doCreate: !1,
                doFind: !0,
                fieldName: "Issue_Description__c",
                isExactMatch: !0,
                label: translatedLabels.issueDesc
            }, {
                doCreate: !1,
                doFind: !0,
                fieldName: "CARE_Chat_Order_Number__c",
                isExactMatch: !0,
                label: "CARE Chat Order Number"
            }],
            entityName: "Case",
            saveToTranscript: ""
        }]);
        var r = null
          , u = null
          , f = null
          , e = null
          , o = null;
        r = "c_firstName"in n ? n.c_firstName : "FirstName";
        u = "c_lastName"in n ? n.c_lastName : "LastName";
        f = "c_email"in n ? n.c_email : "email@dell.com";
        o = "c_phoneNo"in n ? n.c_phoneNo : "123";
        e = "c_issueDescription"in n ? n.c_issueDescription : "issueDescription";
        orderNumber = "c_orderNumber"in n ? n.c_orderNumber : "";
        embedded_svc.settings.prepopulatedPrechatFields = {
            FirstName: r,
            LastName: u,
            Email: f,
            Primary_Phone__c: o,
            Issue_Description__c: e,
            CARE_Chat_Order_Number__c: orderNumber
        };
        embedded_svc.addEventHandler("onConnectionError", function() {
            snapinCAREChatInitiatedState(!1)
        });
        embedded_svc.addEventHandler("onIdleTimeoutOccurred", function() {
            sessionStorage.removeItem("snapInCareObjectSession")
        });
        embedded_svc.addEventHandler("onChatEndedByChasitor", function() {
            sessionStorage.removeItem("snapInCareObjectSession")
        });
        embedded_svc.addEventHandler("onChatEndedByAgent", function() {
            sessionStorage.removeItem("snapInCareObjectSession")
        });
        embedded_svc.addEventHandler("onAgentMessage", function() {
            snapinCAREChatInitiatedState(!0)
        });
        embedded_svc.addEventHandler("onChasitorMessage", function() {
            snapinCAREChatInitiatedState(!0)
        });
        embedded_svc.settings.directToButtonRouting = function() {
            if (document.getElementById("careIssueTypeDom")) {
                let n = document.getElementById("careIssueTypeDom").getAttribute("assignedCareBtn");
                if (n)
                    return snapInCareObject = sendGlobalSnapinCareObjToJson(),
                    snapInCareObject.buttonId = n,
                    saveGlobalSnapinCareObjToSession(snapInCareObject),
                    n
            }
        }
        ;
        embedded_svc.init(n.snapInInitURL, n.snapInLAURL, t, n.organizationId, n.componentName, {
            baseLiveAgentContentURL: n.baseLiveAgentContentURL,
            deploymentId: n.deploymentId,
            buttonId: n.buttonId,
            baseLiveAgentURL: n.baseLiveAgentURL,
            eswLiveAgentDevName: n.LiveAgentDevName,
            isOfflineSupportEnabled: !1
        })
    }
    ;
    let u = document.getElementById("esw_storage_iframe");
    u || (window.embedded_svc ? r(n.serviceForceURL) : (i = document.createElement("script"),
    i.setAttribute("src", n.snapInJs),
    i.onload = function() {
        r(null)
    }
    ,
    document.body.appendChild(i)))
}
function startCAREChat(n, t) {
    custCarePreFormValidation(t) && (assignCarePropVal("890.130.148", "890.130.159"),
    loadingSnapinCareQueue(),
    n = addCustCareFormDetailsTo(n),
    saveGlobalSnapinCareObjToSession(n),
    eleExistCareWithVariable(".embeddedServiceSidebar .startButton", CareChatStarted, n),
    removecustCareFormValues())
}
function loadingSnapinCareQueue() {
    document.getElementById("cusCAREPreChatSnapinDom") && (document.getElementById("cusCAREPreChat-sidebarLoadingIndicator").style.display = "flex",
    document.getElementById("cusCAREPreChat-hideWhileLoading").style.display = "none",
    document.getElementById("cusCAREPreChat-minimize-btn").style.display = "none",
    document.getElementById("cusCAREPreChat-close-btn").style.display = "none",
    removeCareLoaderIn10())
}
function removeCareLoaderIn10() {
    setTimeout(function() {
        let n = document.getElementById("cusCAREPreChat-sidebarLoadingIndicator");
        n && window.getComputedStyle(n).display != "none" && (document.getElementById("cusCAREPreChat-alertMsgContainer").style.display = "flex",
        document.getElementById("cusCAREPreChat-sidebarLoadingIndicator").style.display = "none",
        document.getElementById("cusCAREPreChat-hideWhileLoading").style.display = "none",
        document.getElementById("cusCAREPreChat-CloseChat").addEventListener("click", function() {
            document.getElementById("cusCAREPreChat-embeddedServiceHelpButton").style.display = "none";
            document.getElementById("cusCAREPreChat-alertMsgContainer").style.display = "none";
            document.getElementById("cusCAREPreChat-alertMsgContainer").style.display = "none";
            document.getElementById("cusCAREPreChat-hideWhileLoading").style.display = "block";
            document.getElementById("cusCAREPreChatSnapinDom").style.display = "none"
        }))
    }, 3e4)
}
function snapinCareQueueLoaded() {
    document.querySelector(".embeddedServiceSidebar") && document.getElementById("cusCAREPreChatSnapinDom") && (document.getElementById("cusCAREPreChat-sidebarLoadingIndicator").style.display = "none",
    document.getElementById("cusCAREPreChat-hideWhileLoading").style.display = "block",
    document.getElementById("cusCAREPreChat-minimize-btn").style.display = "block",
    document.getElementById("cusCAREPreChat-close-btn").style.display = "block",
    document.querySelector(".embeddedServiceSidebar").style.display = "block",
    document.getElementById("cusCAREPreChatSnapinDom").style.display = "none",
    document.getElementById("cusCAREPreChat-alertMsgContainer").style.display = "none");
    serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar");
    serviceSidebar.style.display = "block"
}
function CareChatStarted(n, t, i) {
    try {
        changeCarePrechatValues(i);
        document.querySelector(" .embeddedServiceSidebar .dockableContainer .prechatUI  .embeddedServiceSidebarForm .embeddedServiceSidebarButton").click();
        clearInterval(t)
    } catch (r) {
        console.log("Error in:" + r)
    }
}
function changeCarePrechatValues(n) {
    let t = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState()
      , i = t.get("v.prechatFields");
    i.forEach(function(t) {
        t.name === "FirstName" ? t.value = n.c_firstName : t.name === "LastName" ? t.value = n.c_lastName : t.name === "Email" ? t.value = n.c_email : t.name === "Primary_Phone__c" ? (phone = n.c_phoneNo,
        t.value = phone.replace(/[&\/\\#!@,+$~%.'":*?<>{}^a-zA-Z]/g, "")) : t.name === "Issue_Description__c" ? t.value = n.c_issueDescription : t.name === "CARE_Chat_Order_Number__c" && n.c_orderNumber && (t.value = n.c_orderNumber)
    });
    t.set("v.prechatFields", i)
}
function addCustCareFormDetailsTo(n) {
    return n.c_firstName = document.getElementById("cusCAREPreChat-FirstName").value,
    n.c_lastName = document.getElementById("cusCAREPreChat-LastName").value,
    n.c_email = document.getElementById("cusCAREPreChat-Email").value,
    n.c_phoneNo = document.getElementById("cusCAREPreChat-Phone").value,
    n.c_issueDescription = document.getElementById("cusCAREPreChat-IssueDescription").value,
    document.getElementById("cusCAREPreChat-OrderNum") && (n.c_orderNumber = document.getElementById("cusCAREPreChat-OrderNum").value),
    document.getElementById("careIssueTypeLabVal") && (n.issueType = document.getElementById("careIssueTypeLabVal").innerText,
    n.buttonId = document.getElementById("careIssueTypeDom").getAttribute("assignedCareBtn")),
    n
}
function prePopulateCustCarePreFormValues(n) {
    "firstName"in n && (document.getElementById("cusCAREPreChat-FirstName").value = n.firstName);
    "lastName"in n && (document.getElementById("cusCAREPreChat-LastName").value = n.lastName);
    "emailAddress"in n && (document.getElementById("cusCAREPreChat-Email").value = n.emailAddress);
    "phoneNumber"in n && (document.getElementById("cusCAREPreChat-Phone").value = n.phoneNumber);
    "issueDescription"in n && (document.getElementById("cusCAREPreChat-IssueDescription").value = n.issueDescription)
}
function cusCarePreChatEleIsEmpty(n, t) {
    return cusCarePreChatErrorMsgPlaceholder(n, t),
    !1
}
function cusCarePreChatInvalidEmail(n, t) {
    if (!cusCarePreChatvalidateEmail(n.value) || cusCarePreChatBlockListEmailValidation(n.value, t.blocklistEmails))
        return cusCarePreChatErrorMsgPlaceholder(n, t.emailValidation),
        !1
}
function cusCarePreChatvalidateEmail(n) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
}
function cusCarePreChatBlockListEmailValidation(n, t) {
    var u = t.split("|"), n = n.toUpperCase(), r;
    for (i = 0; i < u.length; i++)
        if (r = u[i],
        r = r.toUpperCase(),
        n === r)
            return !0;
    return !1
}
function cusCarePreChatErrorMsgPlaceholder(n, t) {
    try {
        let r = n.parentNode
          , i = document.createElement("ul");
        i.innerHTML = '<li class="cusPreChat-form-element__help">' + t + "<\/li>";
        i.id = "ErrMsg_" + n.id;
        i.className = "cusPreChat-has-error cusPreChat-uiInput";
        r.parentNode.insertBefore(i, r.nextSibling)
    } catch (i) {
        console.log(i)
    }
}
function custCarePreFormValidation(n) {
    let t, i = document.getElementById("cusCAREPreChat-FirstName"), r = document.getElementById("cusCAREPreChat-LastName"), u = document.getElementById("cusCAREPreChat-Email"), f = document.getElementById("cusCAREPreChat-Phone"), e = document.getElementById("cusCAREPreChat-IssueDescription");
    if (document.getElementById("ErrMsg_cusCAREPreChat-Email")) {
        let n = document.getElementById("ErrMsg_cusCAREPreChat-Email");
        n.parentNode.removeChild(n)
    }
    if (t = u.value ? cusCarePreChatInvalidEmail(u, n) : cusCarePreChatEleIsEmpty(u, n.emailRequiredValidation),
    document.getElementById("ErrMsg_cusCAREPreChat-FirstName") && !i.value)
        t = !1;
    else if (i.value) {
        if (document.getElementById("ErrMsg_cusCAREPreChat-FirstName")) {
            let n = document.getElementById("ErrMsg_cusCAREPreChat-FirstName");
            n.parentNode.removeChild(n)
        }
    } else
        t = cusCarePreChatEleIsEmpty(i, n.firstNameValidation);
    if (document.getElementById("ErrMsg_cusCAREPreChat-LastName") && !r.value)
        t = !1;
    else if (r.value) {
        if (document.getElementById("ErrMsg_cusCAREPreChat-LastName")) {
            let n = document.getElementById("ErrMsg_cusCAREPreChat-LastName");
            n.parentNode.removeChild(n)
        }
    } else
        t = cusCarePreChatEleIsEmpty(r, n.lastNameValidation);
    if (document.getElementById("ErrMsg_cusCAREPreChat-Phone") && !f.value)
        t = !1;
    else if (f.value) {
        if (document.getElementById("ErrMsg_cusCAREPreChat-Phone")) {
            let n = document.getElementById("ErrMsg_cusCAREPreChat-Phone");
            n.parentNode.removeChild(n)
        }
    } else
        t = cusCarePreChatEleIsEmpty(f, n.phoneRequiredValidation);
    if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription") && !e.value)
        t = !1;
    else if (e.value || document.getElementById("issueDescIsOptionalInCare")) {
        if (document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription")) {
            let n = document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription");
            n.parentNode.removeChild(n)
        }
    } else
        t = cusCarePreChatEleIsEmpty(e, n.issueDescriptionValidation);
    return t === undefined && (t = !0),
    t
}
function custCarePreChatKeypressFieldValidation(n) {
    function r(i, r) {
        /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t(i)) == !0 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : r === "cusCAREPreChat-FirstName" && document.getElementById("ErrMsg_cusCAREPreChat-FirstName") ? removeDomElementbyId("ErrMsg_cusCAREPreChat-FirstName") : r === "cusCAREPreChat-LastName" && document.getElementById("ErrMsg_cusCAREPreChat-LastName") && removeDomElementbyId("ErrMsg_cusCAREPreChat-LastName")
    }
    function t(n) {
        return n.clipboardData && n.clipboardData.getData ? n.clipboardData.getData("text/plain") : null
    }
    document.getElementById("cusCAREPreChat-Phone").onkeypress = function(n) {
        var t = []
          , r = n.which || n.keyCode;
        for (i = 48; i < 58; i++)
            t.push(i);
        t.push(45);
        t.push(8);
        t.push(9);
        t.indexOf(r) >= 0 ? document.getElementById("ErrMsg_cusCAREPreChat-Phone") && removeDomElementbyId("ErrMsg_cusCAREPreChat-Phone") : n.preventDefault()
    }
    ;
    document.getElementById("cusCAREPreChat-FirstName").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 64 && t < 91 || t > 96 && t < 123 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusCAREPreChat-FirstName") && removeDomElementbyId("ErrMsg_cusCAREPreChat-FirstName") : n.preventDefault()
    }
    ;
    document.getElementById("cusCAREPreChat-LastName").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 64 && t < 91 || t > 96 && t < 123 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusCAREPreChat-LastName") && removeDomElementbyId("ErrMsg_cusCAREPreChat-LastName") : n.preventDefault()
    }
    ;
    document.getElementById("cusCAREPreChat-Email").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 63 && t < 91 || t > 96 && t < 123 || t > 47 && t < 58 || t == 45 || t == 46 || t == 95 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusCAREPreChat-Email") && removeDomElementbyId("ErrMsg_cusCAREPreChat-Email") : n.preventDefault()
    }
    ;
    document.getElementById("cusCAREPreChat-IssueDescription").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t == 62 || t == 60 ? n.preventDefault() : document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription") && removeDomElementbyId("ErrMsg_cusCAREPreChat-IssueDescription")
    }
    ;
    document.getElementById("cusCAREPreChat-OrderNum") && (document.getElementById("cusCAREPreChat-OrderNum").onkeypress = function(n) {
        var t = n.which || n.keyCode;
        t > 64 && t < 91 || t > 96 && t < 123 || t > 47 && t < 58 || t == 45 || t == 8 || t == 9 ? document.getElementById("ErrMsg_cusCAREPreChat-OrderNum") && removeDomElementbyId("ErrMsg_cusCAREPreChat-OrderNum") : n.preventDefault()
    }
    );
    document.getElementById("cusCAREPreChat-FirstName").addEventListener("paste", function(n) {
        r(n, "cusCAREPreChat-FirstName")
    });
    document.getElementById("cusCAREPreChat-LastName").addEventListener("paste", function(n) {
        r(n, "cusCAREPreChat-LastName")
    });
    document.getElementById("cusCAREPreChat-IssueDescription").addEventListener("paste", function(i) {
        /[<>]/.test(t(i)) == !0 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusCAREPreChat-IssueDescription") && removeDomElementbyId("ErrMsg_cusCAREPreChat-IssueDescription")
    });
    document.getElementById("cusCAREPreChat-Email").addEventListener("paste", function(i) {
        /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/.test(t(i)) == !0 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusCAREPreChat-Email") && removeDomElementbyId("ErrMsg_cusCAREPreChat-Email")
    });
    document.getElementById("cusCAREPreChat-Phone").addEventListener("paste", function(i) {
        /^[0-9-]*$/.test(t(i)) == !1 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusCAREPreChat-Phone") && removeDomElementbyId("ErrMsg_cusCAREPreChat-Phone")
    });
    document.getElementById("cusCAREPreChat-OrderNum") && document.getElementById("cusCAREPreChat-OrderNum").addEventListener("paste", function(i) {
        /[!@#$@%^&*()_+\=\[\]{};':"\\|,.<>\/?]/.test(t(i)) == !0 ? (i.preventDefault(),
        alert(n.pasteInvalidTextMsg)) : document.getElementById("ErrMsg_cusCAREPreChat-OrderNum") && removeDomElementbyId("ErrMsg_cusCAREPreChat-OrderNum")
    })
}
function custCarePreFormShowIssueDetailsCharRemainingOnKeyUp(n) {
    try {
        document.getElementById("cusCAREPreChat-IssueDescription").onkeyup = function() {
            custCarePreFormShowIssueDetailsCharRemaining(n)
        }
    } catch (t) {
        console.log("Error in:" + t)
    }
}
function custCarePreFormShowIssueDetailsCharRemaining(n) {
    maxCharLength = n.issueDescriptionLength;
    innerTextColor = "#767676";
    currentCharLength = document.getElementById("cusCAREPreChat-IssueDescription").value.length;
    document.getElementById("snappinCharCounter").innerText = currentCharLength + " / " + maxCharLength + " " + n.characters;
    innerTextColor = currentCharLength === parseInt(maxCharLength) ? "#c23934" : "#767676";
    document.getElementById("snappinCharCounter").style.color = innerTextColor
}
function onCareIssueChange(n, t) {
    document.getElementById("cusCAREPreChatSnapinDom") && document.getElementById("careIssueTypeLabVal") && (document.getElementById("careIssueTypeLabVal").innerText = n,
    document.getElementById("careIssueTypeDom").setAttribute("assignedCareBtn", t))
}
function isSnapinInitiated() {
    try {
        return snapInCareObject = sendGlobalSnapinCareObjToJson(),
        snapInCareObject && "snapinCareChatInitiated"in snapInCareObject && snapInCareObject.snapinCareChatInitiated ? !0 : !1
    } catch (n) {
        console.log(n)
    }
}
function snapinCAREChatInitiatedState(n) {
    snapInCareObject = sendGlobalSnapinCareObjToJson();
    snapInCareObject && (snapInCareObject.snapinCareChatInitiated = n,
    saveGlobalSnapinCareObjToSession(snapInCareObject))
}
function sendGlobalSnapinCareObjToJson() {
    return snapInCareObjectGlobal = sessionStorage.getItem("snapInCareObjectSession"),
    snapInCareObject = JSON.parse(snapInCareObjectGlobal)
}
function saveGlobalSnapinCareObjToSession(n) {
    n && (snapInCareObjectGlobal = JSON.stringify(n),
    sessionStorage.setItem("snapInCareObjectSession", snapInCareObjectGlobal))
}
function translationCare(n) {
    let t = n.replace("_", "-");
    return t = t.toLowerCase(),
    this.primPhone = "Primary Phone Number",
    this.issueDesc = "Issue Description",
    t == "de" ? (this.issue = "Issue",
    this.firstName = "Vorname",
    this.lastName = "Nachname",
    this.emailAdd = "E-Mail",
    this.characters = "characters",
    this.language = "de") : t == "ja" ? (this.issue = "Issue",
    this.firstName = "名",
    this.lastName = "姓",
    this.emailAdd = "メール",
    this.characters = "characters",
    this.language = "ja") : t == "ko" ? (this.issue = "Issue",
    this.firstName = "이름",
    this.lastName = "성",
    this.emailAdd = "이메일",
    this.characters = "characters",
    this.language = "ko") : t == "es" ? (this.issue = "Issue",
    this.firstName = "Nombre",
    this.lastName = "Apellidos",
    this.emailAdd = "Correo electrónico",
    this.characters = "characters",
    this.language = "es") : t == "zh" || t == "cn" || t == "zh-cn" ? (this.issue = "Issue",
    this.firstName = "名",
    this.lastName = "姓",
    this.emailAdd = "电子邮件",
    this.characters = "characters",
    this.language = "zh-CN") : t == "pt" || t == "pt-br" ? (this.issue = "Issue",
    this.firstName = "Nome",
    this.lastName = "Sobrenome",
    this.emailAdd = "Email",
    this.characters = "characters",
    this.language = "pt-br") : t == "pt-pt" ? (this.issue = "Issue",
    this.characters = "characters",
    this.firstName = "Nome próprio",
    this.lastName = "Apelido",
    this.emailAdd = "E-mail",
    this.language = "pt-pt") : t == "nl" || t == "nl-nl" ? (this.issue = "Issue",
    this.firstName = "Voornaam",
    this.lastName = "Achternaam",
    this.emailAdd = "E-mail",
    this.characters = "characters",
    this.language = "nl-NL") : t == "fr" ? (this.issue = "Issue",
    this.firstName = "Prénom",
    this.lastName = "Nom",
    this.emailAdd = "Adresse e-mail",
    this.characters = "characters",
    this.language = "fr") : (this.issue = "Issue",
    this.firstName = "First Name",
    this.lastName = "Last Name",
    this.emailAdd = "Email Address",
    this.primPhone = "Primary Phone Number",
    this.issueDesc = "Issue Description",
    this.characters = "characters",
    this.language = "en"),
    console.log("Language = " + this.language),
    this
}
function removeDomElementbyId(n) {
    if (document.getElementById(n)) {
        let t = document.getElementById(n);
        t.parentNode.removeChild(t)
    }
}
function snapinCAREPageObserver(n, t) {
    try {
        snapInLoadingPrechatForm = document.querySelector(".modalContainer.loading.initialLoading");
        snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
        snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
        snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer");
        snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
        snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
        snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
        snapInLoadingPrechatForm ? snapInCurrentPage = "snapInLoadingPrechatForm" : snapInPrechatForm ? snapInCurrentPage = "snapInPrechatForm" : snapInWaiting ? snapInCurrentPage = "snapInWaiting" : snapInChatStarted ? snapInCurrentPage = "snapInChatStarted" : snapInChatEnded ? snapInCurrentPage = "snapInChatEnded" : snapInConfirmationDialoug ? snapInCurrentPage = "snapInConfirmationDialoug" : snapInhelpBtnDisabled ? snapInCurrentPage = "snapInhelpBtnDisabled" : snapInhelpBtnEnabled ? snapInhelpBtnEnabled = "snapInhelpBtnEnabled" : snapInCurrentPage = null;
        var i = window.MutationObserver || window.WebKitMutationObserver
          , r = function(n) {
            n.forEach(function(n) {
                if (n.addedNodes.length > 0)
                    if (snapInLoadingPrechatForm = document.querySelector(".modalContainer.loading.initialLoading"),
                    snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI"),
                    snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer"),
                    snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText"),
                    snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer"),
                    snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer"),
                    snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled"),
                    snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled"),
                    snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton"),
                    snapInLoadingPrechatForm && snapInCurrentPage != "snapInLoadingPrechatForm")
                        snapInCurrentPage = "snapInLoadingPrechatForm",
                        serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
                        serviceSidebar.style.display = "none";
                    else if (snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm")
                        snapInCurrentPage = "snapInPrechatForm",
                        serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
                        serviceSidebar.style.display = "none";
                    else if (snapInWaiting && snapInCurrentPage != "snapInWaiting")
                        snapInCurrentPage = "snapInWaiting",
                        assignCarePropVal("890.130.149", "890.130.160"),
                        snapinCareQueueLoaded();
                    else if (snapInChatStarted && snapInCurrentPage != "snapInChatStarted")
                        snapInCurrentPage = "snapInChatStarted",
                        snapinCAREChatInitiatedState(!0),
                        snapinCareQueueLoaded(),
                        addChatPrivacyInfoCARE(t);
                    else if (snapInChatEnded && snapInCurrentPage != "snapInChatEnded")
                        snapInCurrentPage = "snapInChatEnded",
                        sessionStorage.removeItem("snapInCareObjectSession"),
                        snapinCareQueueLoaded();
                    else if (snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug") {
                        snapInCurrentPage = "snapInConfirmationDialoug";
                        let n = document.querySelector(".modalContainer .dockableContainer .embeddedServiceSidebarHeader .closeButton.headerItem");
                        n.addEventListener("click", function() {
                            snapInConfirmationDialoug || sessionStorage.removeItem("snapInCareObjectSession")
                        })
                    } else
                        snapInEmbeddedServiceHelpBtn && window.getComputedStyle(snapInEmbeddedServiceHelpBtn).display === "block" && (snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === "flex" && snapInCurrentPage != "snapInhelpBtnDisabled" ? snapInCurrentPage = "snapInhelpBtnDisabled" : snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === "flex" && snapInCurrentPage != "snapInhelpBtnEnabled" ? (snapInCurrentPage === "snapInhelpBtnDisabled" && document.getElementById("cusCAREPreChatSnapinDom") && (document.getElementById("cusCAREPreChatSnapinDom").style.display = "block"),
                        snapInCurrentPage = "snapInhelpBtnEnabled",
                        snapInhelpBtnEnabled.click()) : snapInCurrentPage = "snapInNotAvilable")
            })
        }
          , u = new i(r)
          , f = document.querySelector(n);
        u.observe(f, {
            childList: !0,
            subtree: !0
        })
    } catch (e) {
        console.log("Error in Observer - " + e)
    }
}
function addChatPrivacyInfoCARE(n) {
    setTimeout(function() {
        var r = document.getElementById("snapinChatPopUpMsg"), e = document.querySelector(".dockableContainer .chatMessage.ended"), u, t, i, f;
        r ? e && (r.style.display = "none") : (u = n && "chatPrivacyInfo"in n && n.snapinChatPopUpMsgDom ? n.snapinChatPopUpMsgDom : "Please do not share any payment or sensitive information in this chat window.",
        t = document.createElement("DIV"),
        t.id = "snapinChatPopUpMsg",
        i = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateChatInputFooter"),
        i.parentNode.insertBefore(t, i),
        innerVal = '<span style="float: left;margin: 11px;fill:#0A6EBE;"><svg x="0px" y="0px" width="20px" height="20px" viewBox="0 0 416.979 416.979" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765   c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/><\/g><\/svg><\/span><span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon" id="btnCloseSnapinPopMsg" style="float:right;padding:5px;cursor:pointer;"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 120 120" style="fill:#333"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"><\/path><\/svg><\/span><p style="text-align:left;padding:7px;margin:0;font-size:13px;background:#DFF1FE;border-top:1px solid #0A6EBE;border-bottom:1px solid #0A6EBE;color:#333;">' + u + "<\/p>",
        document.getElementById("snapinChatPopUpMsg").innerHTML = innerVal,
        f = document.getElementById("btnCloseSnapinPopMsg"),
        f.addEventListener("click", function() {
            document.getElementById("snapinChatPopUpMsg").style.display = "none"
        }))
    }, 50)
}
function eleExistCareWithVariable(n, t, i) {
    var r = setInterval(function() {
        if (document.querySelector(n))
            try {
                t(n, r, i)
            } catch (u) {
                console.log("error in " + t + " function: " + u)
            }
    }, 1e3)
}
function assignCarePropVal(n, t, i, r) {
    document.getElementById("cusCAREPreChat-OrderNum") ? callDellmetricsTrack(n, i) : callDellmetricsTrack(t, r)
}
function snapInCareClickListners() {
    window.addEventListener("click", function(n) {
        var t, i;
        try {
            if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton"))
                if (t = n.target || n.srcElement,
                t && t.tagName.toLowerCase() === "embeddedservice-chat-header" && (closestByTagName(n.toElement, "svg") || closestByTagName(n.toElement, "button")))
                    closestByTagName(n.toElement, "svg").dataset.key === "minimize_window" || closestByTagName(n.toElement, "button").className === "minimizeButton" ? assignCarePropVal("890.130.143", "890.130.154") : (closestByTagName(n.toElement, "svg").dataset.key === "close" || closestByTagName(n.toElement, "button").className === "closeButton") && assignCarePropVal("890.130.145", "890.130.156");
                else if (t && t.tagName.toLowerCase() === "embeddedservice-chat-input-footer-menu" && (closestByTagName(n.toElement, "svg") || closestByTagName(n.toElement, "button")))
                    closestByTagName(n.toElement, "svg").dataset.key === "rows" || closestByTagName(n.toElement, "button").className === "slds-button slds-button_icon slds-button_icon-container-more slds-button_icon-large" ? this.console.log("CARE: Hamburger Menu") : (i = closestByTagName(n.toElement, "a"),
                    i != undefined && i != null && i.innerText && this.console.log("CARE: '" + i.innerText + "' Button Clicked"));
                else if (closestByTagName(t, "button") != null)
                    switch (closestByTagName(t, "button").className) {
                    case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                        console.log("ClickedOn '" + t.innerText + "' button");
                        break;
                    case "dialogButton dialog-button-1 uiButton embeddedServiceSidebarButton":
                        console.log("ClickedOn '" + t.innerText + "' button");
                        break;
                    case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                        console.log("ClickedOn '" + t.innerText + "' button");
                        break;
                    case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                        console.log("ClickedOn Cancel Chat button while waiting in queue");
                        assignCarePropVal("890.130.150", "890.130.161");
                        break;
                    case "closeButton headerItem":
                        console.log("ClickedOn Close (x) button");
                        assignCarePropVal("890.130.145", "890.130.156");
                        break;
                    case "minimizeButton headerItem":
                        console.log("ClickedOn Minimize button");
                        assignCarePropVal("890.130.143", "890.130.154");
                        break;
                    case "sidebarHeader minimizedContainer helpButton embeddedServiceSidebarMinimizedDefaultUI":
                        console.log("ClickedOn Maximize button");
                        assignCarePropVal("890.130.144", "890.130.155");
                        break;
                    case "sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI":
                        console.log("ClickedOn Maximize button");
                        assignCarePropVal("890.130.144", "890.130.155");
                        break;
                    case "uiButton helpButtonEnabled":
                    case "uiButton no-hover helpButtonEnabled":
                        document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").innerText == "Chat Now" ? (snapInCurrentPage = null,
                        document.getElementById("cusCAREPreChatSnapinDom").display === "none" && console.log("StartsChat for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName)) : document.getElementById("cusCAREPreChatSnapinDom").display === "none" && console.log("AgentOffline for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
                        break;
                    default:
                        closestByTagName(t, "a").className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption" && console.log("ClickedOn " + closestByTagName(t, "a").text)
                    }
                else
                    closestByTagName(t, "a").className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption" && console.log("ClickedOn " + closestByTagName(t, "a").text)
        } catch (r) {
            this.console.log("Error in function", r)
        }
    })
}
function checkIfIssueDescIsOptionalInCare(n, t) {
    if ("issueType"in n && n.issueType != "" && n.issueType != null && n.issueType != undefined && n.issueType != "None" && document.getElementById("CareIssue_Description_Cust_Label")) {
        removeDomElementbyId("issueDescIsOptionalInCare");
        let n = document.createElement("span");
        n.id = "issueDescIsOptionalInCare";
        n.innerText = t.optional;
        let i = document.getElementById("CareIssue_Description_Cust_Label");
        i.appendChild(n);
        removeDomElementbyId("ErrMsg_cusCAREPreChat-IssueDescription")
    } else
        removeDomElementbyId("issueDescIsOptionalInCare")
}
function canSupportSprinklr(n) {
    return sprinklrChatBotObject = n,
    n != undefined && n != null && n.payloadTags != undefined && n.payloadTags != null ? GetSprinklrIntent(n) : !1
}
function GetSprinklrIntent(n) {
    var i, r, t;
    console.log(n);
    i = !1;
    r = "https://www.dell.com/support/guidedpath/Sprinklr/CanSupport";
    n != null && n != undefined && n.intentApiURL != null && n.intentApiURL != undefined && (r = n.intentApiURL);
    t = {
        engine: "dellintent",
        payloadTags: {
            lng: snapInObject.language,
            productCode: snapInObject.productCode,
            issueType: snapInObject.issueType,
            issueVal: snapInObject.issueVal,
            serviceTag: snapInObject.serviceTag
        },
        requestId: snapInObject.uuid,
        text: snapInObject.c_issueDescription
    };
    try {
        $.ajax({
            url: r,
            data: JSON.stringify(t),
            dataType: "json",
            type: "POST",
            cache: !1,
            async: !1,
            contentType: "application/json; charset=utf-8",
            success: function(r) {
                r != null && r != undefined && (i = r.canSupport,
                r.canSupport == !1 && (r.failReason == "INTENTAPI" ? setDellMetrics("222.890.230.101", "SPRINKLR: intentapifailure|IntentAPIIssue|" + t.payloadTags.issueType + "|UUID:" + n.requestId) : setDellMetrics("222.890.230.101", "SPRINKLR: intentapifailure|false|" + t.payloadTags.issueType + "|UUID:" + n.requestId)));
                console.log(r)
            },
            error: function(i) {
                setDellMetrics("222.890.230.102", "SPRINKLR: clientsidefailure|CanSupport|" + t.payloadTags.issueType + "|UUID:" + n.requestId);
                console.log(i)
            }
        })
    } catch (u) {
        setDellMetrics("222.890.230.102", "SPRINKLR: clientsidefailure|CanSupport|" + t.payloadTags.issueType + "|UUID:" + n.requestId);
        console.log(response)
    }
    return console.log("GetSprinklrIntent canSupport = " + i),
    i
}
function startSprinklr() {
    var r = "", i, n, u, f, t;
    sprinklrChatBotObject.payloadTags.productName != undefined && sprinklrChatBotObject.payloadTags.productName != "" && (r = sprinklrChatBotObject.payloadTags.productName);
    i = "";
    i = "app_428670";
    n = "https://prod-live-chat.sprinklr.com/page?appId=" + i + "&scope=CONVERSATION&skipDefaultMessages=true&context_5eaadf7db4141b114f02514d=";
    sprinklrChatBotObject != null && sprinklrChatBotObject != undefined && sprinklrChatBotObject.sprinklrURL != null && sprinklrChatBotObject.sprinklrURL != undefined && (n = sprinklrChatBotObject.sprinklrURL);
    sprinklrFullURL = n + sprinklrChatBotObject.payloadTags.issueVal + "&context_5e7e19512afc917d25092527=" + r + "&context_5eaadf2cb4141b114f023c0a=" + sprinklrChatBotObject.payloadTags.serviceTag + "&context_5ea8265070906b7ea825fbf5=" + sprinklrChatBotObject.payloadTags.lng + "&user_firstName=" + sprinklrChatBotObject.user_firstName + "&user_lastName=" + sprinklrChatBotObject.user_lastName + "&user_email=" + sprinklrChatBotObject.user_email + "&user_phoneNo=" + sprinklrChatBotObject.user_phoneNo + "&context_5ea96157fff5ba6f3f51019f=" + sprinklrChatBotObject.requestId + "&disableAttachment=true";
    n = encodeURI(n);
    u = sprinklrChatBotObject.sprinklrLoadingMessage != null && sprinklrChatBotObject.sprinklrLoadingMessage != undefined ? sprinklrChatBotObject.sprinklrLoadingMessage : "Please wait while Virtual Agent is loading.";
    f = '<div id="sprinklrIssueSpin" class="justify-content-center pt-2 js-loading-icon cusPreChat-dockableContainer" style="display:block; background-color: rgb(255,255,255); z-index: 10000;">    <div class="d-flex flex-column align-items-center" style="top: 50%; transform: translate(-50%, -50%); position: absolute; left: 50%; "><svg class="dti dti-loading mb-2" version="1.1" width="32" height="32" viewBox="0 0 32 32">            <path fill="#ddd" d="M29.746 16c0-7.592-6.154-13.746-13.746-13.746s-13.746 6.154-13.746 13.746c0 7.592 6.154 13.746 13.746 13.746s13.746-6.154 13.746-13.746zM16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z" /><path fill="#41b6e6" d="M3.078 11.3c1.92-5.277 6.981-9.046 12.922-9.046 5.846 0 10.839 3.649 12.827 8.794l2.105-0.806c-2.312-5.991-8.126-10.241-14.932-10.241-6.917 0-12.808 4.389-15.042 10.534l2.12 0.766z" /><\/svg><p class="card-text text-center ips-loading-icon-text">' + u + "<\/p> <\/div><\/div>";
    let e = f + ' <div id="sprinklrChatDom"  style="display:none;" class="cusPreChat-modalContainer"><div class="cusPreChat-dockableContainer"><div class="cusPreChat-embeddedServiceSidebarHeader" style="height: 100%;"><iframe id = "page" sandbox = "allow-scripts allow-same-origin allow-popups allow-forms allow-downloads allow-top-navigation" src="' + sprinklrFullURL + '" style="height:100%; width:100%; border-radius: 8px 8px 0 0; border-color: #00447C;" allowfullscreen><\/iframe><\/div ><\/div ><\/div > '
      , o = document.body || document.getElementsByTagName("body")[0];
    o.insertAdjacentHTML("beforeend", e);
    t = 0;
    window.addEventListener("message", function(n) {
        if (n.source === document.getElementById("page").contentWindow) {
            const i = JSON.parse(n.data);
            if (i.action == "loaded") {
                if (t == 0) {
                    t = t + 1;
                    const n = callabacks[i.action];
                    n && n(i.data)
                }
            } else {
                const n = callabacks[i.action];
                n && n(i.data)
            }
        }
    })
}
function getMessage(n) {
    var i, t, r;
    console.log("getMessage method data is: " + n);
    i = n.type.toLowerCase();
    try {
        switch (i) {
        case "close":
            setDellMetrics("222.890.230.106", "SPRINKLR: CloseChat|IssueResolved|" + sprinklrChatBotObject.payloadTags.issueType + "|UUID:" + sprinklrChatBotObject.requestId);
            closeSprinklrChat();
            break;
        case "trnsfrtolivechat":
            t = n.payload.channelCaseNumber != undefined && n.payload.channelCaseNumber != null ? n.payload.channelCaseNumber : "";
            r = {
                caseNumber: n.payload.caseNumber,
                contextId: n.payload.contextId,
                sfdcCaseNumber: t
            };
            setDellMetrics("222.890.230.106", "SPRINKLR: closeChat-sfdcCaseNumber " + t + "|transferToLiveAgent|" + sprinklrChatBotObject.payloadTags.issueType + "|UUID:" + sprinklrChatBotObject.requestId);
            transferToLiveAgent(r)
        }
    } catch (u) {
        console.log("error in getMessage method:" + u)
    }
}
function sprinklrLoaded() {
    console.log("sprinklrLoaded");
    setDellMetrics("890.220.013", "SPRINKLR: Chat Started|" + sprinklrChatBotObject.payloadTags.issueType + "|UUID:" + sprinklrChatBotObject.requestId);
    sprinklrChatBotObject.text != undefined && sprinklrChatBotObject.text != "" ? document.getElementById("page").contentWindow.postMessage(JSON.stringify({
        action: "openNewConversation",
        data: {
            initialMessages: [{
                isSentByUser: !0,
                message: sprinklrChatBotObject.text
            }]
        }
    }), "*") : document.getElementById("page").contentWindow.postMessage(JSON.stringify({
        action: "openNewConversation",
        data: {
            autoInitiateConversation: !0,
            initialMessages: undefined
        }
    }), "*")
}
function closeSprinklrChat() {
    console.log("closeSprinklrChat");
    var n = document.getElementById("page");
    n.parentNode.removeChild(n);
    $("#sprinklrChatDom").remove();
    sprinklerChatEnded()
}
function transferToLiveAgent(n) {
    var t = n.sfdcCaseNumber != undefined && n.sfdcCaseNumber != null ? n.sfdcCaseNumber : "", i;
    if (console.log("transferToLiveAgent sfdc caseNumber =" + t),
    i = sessionStorage.getItem("snapInObjectSession"),
    checkSnapinQueueStatus(i) == 1) {
        console.log("Agent is available sfdcCaseNumber =" + t + " calling triggerSnapinPostSprinkler");
        try {
            $("#sprinklrChatDom").remove();
            triggerSnapinPostSprinkler(t)
        } catch (r) {
            $("#sprinklrChatDom").remove();
            setDellMetrics("222.890.230.107", "SPRINKLR: transferfailure|triggerSnapinPostSprinklr|sfdcCaseNumber: " + t + "|" + sprinklrChatBotObject.payloadTags.issueType + "|UUID:" + sprinklrChatBotObject.requestId);
            console.log("Problem in triggerSnapinPostSprinkler  for caseNumber = " + t)
        }
    } else
        console.log("Agent is NOT available caseNumber =" + t + " calling noAgentAvailable"),
        noAgentAvailable(n)
}
function noAgentAvailable(n) {
    var t = sprinklrChatBotObject.requestId;
    setDellMetrics("222.890.230.107", "SPRINKLR: transferfailure|noAgentAvailable|" + +sprinklrChatBotObject.payloadTags.issueType + "|UUID:" + sprinklrChatBotObject.requestId);
    document.getElementById("page").contentWindow.postMessage(JSON.stringify({
        action: "sendExternalEvent",
        data: {
            type: "MSG_PUBLISH",
            payload: {
                contextId: n.contextId,
                id: t,
                message: {
                    text: "Agent is not available currently. Please come back during business hours..."
                }
            }
        }
    }), "*")
}
function setDellMetrics(n, t) {
    typeof dellmetricsTrack == "function" && dellmetricsTrack && dellmetricsTrack(n, t)
}
var snapinChatGlobalIssueType, snapinChatGlobalServiceTag, snapinChatGlobalProductName = null, snapInCurrentPage = null, trackevent = !0, coveoHeader = "", isCoveoSearchEnabled = !1, isPCFCall = !1, closestByTagName, serviceTagInfoDeffer, ChatBotDsdTokenUrl, lastmessage, isMessageFinished, waitCount, waitForMessageToOver, getCommand, Command, waitForElement, sprinklrChatBotObject, sprinklrMsgObject;
(function() {
    var t;
    if (window.addEventListener("dragover", function(n) {
        n = n || event;
        n.preventDefault()
    }, !1),
    window.addEventListener("drop", function(n) {
        n = n || event;
        n.preventDefault()
    }, !1),
    !document.getElementById("snapinStyle")) {
        var i = '.embeddedServiceSidebarHeader,.embeddedServiceSidebarMinimizedDefaultUI{background-color:#00447C!important;border:1px!important}.embeddedServiceSidebarFormField .uiInput .uiLabel-left{padding-top:0!important;margin-top:11px;color:#444!important;font-weight:300!important}.embeddedServiceSidebarForm.formContent{background:#f1f1f1!important}.embeddedServiceHelpButton .helpButton .uiButton{background-color:#005290!important;font-family:"Salesforce Sans",sans-serif}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:#005290 solid 1px}.embeddedServiceSidebarForm .uiButton,.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important;border:none!important}.embeddedServiceSidebarForm.buttonWrapper{background:linear-gradient(to bottom,rgba(247,247,247,0) 0,rgba(247,247,247,1) calc(100% - 77px),rgba(247,247,247,1) 100%)}.embeddedServiceSidebarButton.uiButton--inverse{background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus{box-shadow:0 0 3px 0 #ddd!important}.embeddedServiceSidebarDialogState .dialogButton{border-radius:0!important}.embeddedServiceSidebarDialogState .dialogButton:not(:disabled):focus{text-decoration:none!important}.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select{color:#444!important}.embeddedServiceSidebarForm .fieldList{margin:12px 12px 0 0!important}.embeddedServiceLiveAgentStateChatHeaderOption .optionName{color:#fff!important;text-decoration:none!important}.embeddedServiceSidebarHeader .headerText{margin-bottom:0!important}.embeddedServiceSidebarMinimizedDefaultUI .minimizedImage{display:none!important}.embeddedServiceLiveAgentStateChatHeader.reconnecting.alert{background-color:#cb2b19!important;padding-top:46px!important}.embeddedServiceSidebarForm.buttonWrapper{background-color:#f1f1f1!important}.cusPreChat-modalContainer,.cusPreChat-shortHeader{font-weight:400;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus,.cusPreChat-headerItem:focus,.cusPreChat-headerItem:hover{outline:0}.cusPreChat-modalContainer{box-sizing:border-box;line-height:1.5;color:#212529;display:block;position:fixed;z-index:5001;font-family:"Salesforce Sans",sans-serif;top:0;font-size:16px;pointer-events:all;backface-visibility:hidden;text-align:left}.cusPreChat-modalContainer li,.cusPreChat-modalContainer ul{display:block;list-style:none}.cusPreChat-dockableContainer{width:320px;max-height:720px;border-radius:8px 8px 0 0;position:fixed;left:auto;bottom:0;right:20px;margin:0;height:90%;box-shadow:2px 2px 20px rgba(0,0,0,.2);z-index:15;text-align:center;overflow:hidden;max-width:40em;pointer-events:all}.cusPreChat-embeddedServiceSidebarHeader{position:absolute;top:0;width:100%;border-radius:8px 8px 0 0;background-color:#00447C;border:1px;text-align:center;pointer-events:all}.cusPreChat-shortHeader{color:#fff;border-radius:8px 8px 0 0;line-height:3;text-align:center;font-size:.875em;height:44px;clear:both;overflow:hidden;z-index:3;position:relative;transform:translate3d(0,0,0)}.cusPreChat-shortHeaderContent{position:relative;display:flex;height:100%}.cusPreChat-headerItem{color:#fff;font-size:1em;background:0 0;border:none}.cusPreChat-headerItem:focus:before,.cusPreChat-headerItem:hover:before{content:" ";position:absolute;background-color:#fff;opacity:.2;border-radius:4px;box-sizing:border-box;pointer-events:none;top:20%}.cusPreChat-closeButton,.cusPreChat-minimizeButton{transition:color .7s ease;padding:14px;line-height:0}.cusPreChat-minimizeButton:focus:before,.cusPreChat-minimizeButton:hover:before{left:6px;width:30px;height:60%}.cusPreChat-closeButton:focus:before,.cusPreChat-closeButton:hover:before{right:6px;width:30px;height:60%}.cusPreChat-assistiveText{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.cusPreChat-embeddedServiceIcon{display:flex}.cusPreChat-embeddedServiceIcon svg{display:inline-block;box-sizing:border-box;width:1em;height:1em;fill:#fff}.cusPreChat-headerText{display:flex;justify-content:center;align-items:center;flex-grow:1;align-self:stretch;width:calc(100% - 96px);color:#fff;text-decoration:none;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:1em}.cusPreChat-sidebarBody{position:absolute;width:100%;height:100%;top:44px;z-index:0;background-color:#f1f1f1;transform:translate3d(0,0,0);-webkit-overflow-scrolling:touch}.cusPreChat-sidebarLoadingIndicator{position:relative;height:100%;background-color:#fff}.cusPreChat-activeFeature{width:100%;height: 100%}.cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI{overflow:hidden;height:100%;position:absolute}.cusPreChat-formContent{width:320px;height:calc(100% - 98px);overflow-y:auto;position:relative;background-color:#f1f1f1;margin-bottom:81px;border-radius:0 0 8px 8px}.cusPreChat-fieldList{margin:5px 12px 0 0;padding:0}.cusPreChat-embeddedServiceSidebarFormField{display:block;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:40px;list-style:none;padding:0;box-sizing:border-box;margin-left:12px}.cusPreChat-embeddedServiceSidebarFormField.cusPreChat-inputSplitName{width:calc(50% - 12px);display:inline-block;vertical-align:top;margin-left:9px}.cusPreChat-split-field-container{margin-bottom:6px}.cusPreChat-uiInput{text-align:left}.cusPreChat-uiInput .cusPreChat-uiLabel-left{padding:0!important;color:#444!important;font-weight:300!important;position:relative;font-size:.75em;line-height:1.5;margin:11px .75em 2px 1px}.cusPreChat-uiInput .cusPreChat-required{position:absolute;color:#c23934;left:-6px;top:0}.cusPreChat-slds-style-inputtext{display:inline-block;line-height:30px;box-sizing:border-box;box-shadow:none;background-color:#fff;width:100%;height:44px !important;padding:0 12px !important;font-size:.875em;border:none !important;}.cusPreChat-slds-style-inputtext:focus{outline:0;box-shadow:0 0 2px 0 #007db8}.cusPreChat-buttonWrapper{text-align:center;padding:0px 24px 24px;margin:0;width:320px;position:fixed;box-sizing:border-box;bottom:44px; box-shadow: 0px -10px 5px rgba(241, 241, 241,0.7); background: #f1f1f1}.cusPreChat-embeddedServiceSidebarButton{background:#007db8;font-family:"Roboto Regular",sans-serif;border-radius:0!important;position:relative;border:none;text-shadow:none;box-shadow:none;transition:background .4s ease;color:#fff;font-size:1em;font-weight:400;width:100%;margin:0;height:44px;cursor:pointer}.cusPreChat-embeddedServiceSidebarButton:not(:disabled):focus,.cusPreChat-embeddedServiceSidebarButton:not(:disabled):hover{background:#004b6e}.cusPreChat-has-error{margin:0 0 0px;padding:0}.cusPreChat-has-error .cusPreChat-form-element__help{font-size:.75em;color:#c23934}.cusPreChat-embeddedServiceHelpButton{display:block;position:fixed;top:0;left:0;background:0 0;box-shadow:none;overflow:visible;z-index:1000;font-family:sans-serif}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:12px;right:12px;height:46px;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton{box-sizing:border-box;margin:0;padding:0 12px;height:46px;box-shadow:0 0 12px 0 rgba(0,0,0,.5);border-radius:23px;line-height:1;background:#007db8;font-size:.875em;color:#fff;font-weight:400;text-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-family:"Roboto Regular",sans-serif;width:168px;cursor:pointer;position:relative;border:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:hover::before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:23px;background-color:#000;opacity:.2;pointer-events:none}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton .cusPreChat-label{color:#fff}.cusPreChat-embeddedServiceHelpButton .cusPreChat-uiButton .cusPreChat-helpButtonLabel{position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%;line-height:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media only screen and (min-width:48em){.cusPreChat-embeddedServiceHelpButton{background-color:transparent}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:hover::before{border-radius:8px 8px 0 0}}.cusPreChat-sidebarLoadingIndicator{align-self:stretch;max-height:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;padding:0 24px}.cusPreChat-loadingBallContainer{display:inline-block}.cusPreChat-loadingBallContainer.cusPreChat-animated .cusPreChat-loadingBall{animation:cusPreChat-ballanimate 2.25s infinite ease-in-out;display:inline-block;width:1em;height:1em;border-radius:2em;font-size:8px;text-align:center;background:#0074bd;margin:3px}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-second{animation-name:cusPreChat-ballanimate-2}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-third{animation-name:cusPreChat-ballanimate-3}@keyframes cusPreChat-ballanimate{0%,32%{transform:scale(1)}16%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-2{32%,64%{transform:scale(1)}48%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-3{64%,96%{transform:scale(1)}80%{transform:scale(1.5)}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.cusPreChat-buttonWrapper{bottom: 3px;}}body.embeddedServicePreventScrolling {overflow: auto !important;position: inherit !important;}.dockableContainer .endChatContainer .endChatButton.postChatButton{background:#007db8!important;border:none!important}.dockableContainer .endChatContainer .endChatButton.postChatButton span{color:#fff!important}.dockableContainer .endChatContainer .endChatButton.postChatButton:focus,.dockableContainer .endChatContainer .endChatButton.postChatButton:hover{background:#004b6e!important;text-decoration:none}.dockableContainer .endChatContainer .endChatButton.closeChatButton{color:#007db8;background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.dockableContainer .endChatContainer .endChatButton.closeChatButton span{color:#007db8}.dockableContainer .endChatContainer .endChatButton.closeChatButton span:hover{color:#007db8;text-decoration:underline} h2[embeddedService-chatHeader_chatHeader]{color: #fff !important;}'
          , r = document.head || document.getElementsByTagName("head")[0]
          , n = document.createElement("style");
        n.type = "text/css";
        n.id = "snapinStyle";
        n.styleSheet ? n.styleSheet.cssText = i : n.appendChild(document.createTextNode(i));
        r.appendChild(n)
    }
    if (document.getElementById("snapinAdditionalScriptSrc") || (t = document.createElement("script"),
    t.setAttribute("src", "https://service.force.com/embeddedservice/5.0/esw.min.js"),
    t.id = "snapinAdditionalScriptSrc",
    t.type = "text/javascript",
    document.head.appendChild(t)),
    typeof NodeList.prototype.forEach == "function")
        return !1;
    NodeList.prototype.forEach = Array.prototype.forEach
}
)();
closestByTagName = function(n, t) {
    var i, r;
    try {
        if (i = n,
        i && (r = i.tagName,
        r))
            while (r.toLowerCase() != t)
                if (i = i.parentNode,
                i && (r = i.tagName),
                !r)
                    return n;
        return i
    } catch (u) {
        console.log(u)
    }
}
;
typeof triggerSnapin == "function" && triggerSnapin();
var retVal = null
  , quickTestURL = "/support/home/{0}/product-support/servicetag/{1}/diagnose"
  , SrRedirectURL = ""
  , DispatchRedirectURL = ""
  , sRPageURL = "/support/incidents-online/us/en/19/srsearch"
  , driverPageURL = "/support/home/{0}/product-support/servicetag/{1}/diagnose/ShowResults/driverscan"
  , manualTroubleshootURL = "/support/guidedpath/{0}?issue={1}&os={2}"
  , isBinded = !1
  , textBoxPlaceHolderWhenDiabled = "Select from the options above when prompted."
  , textBoxPlaceHolderWhenEnabled = "Type your message..."
  , isAgentEventTriggered = !1
  , DiagnosticResultPageUrl = ""
  , serviceTagInfo = {};
serviceTagInfo.isDsdInstalled = "false";
serviceTagInfo.isSystemInfoCompleted = "false";
serviceTagInfoDeffer = {};
ChatBotDsdTokenUrl = "";
lastmessage = "";
isMessageFinished = !1;
waitCount = 0;
waitForMessageToOver = function(n) {
    isMessageFinished || waitCount == 3 ? n() : (waitCount++,
    setTimeout(function() {
        waitForMessageToOver(n)
    }, 1e3))
}
;
String.prototype.contains = function(n, t) {
    return (t ? this : this.toUpperCase()).indexOf(t ? n : n.toUpperCase()) >= 0
}
;
getCommand = function(n) {
    var t, s, u, h, i, r, e, c, f, o;
    consoleLog("getCommand method message is: " + n);
    t = new Command(n);
    s = n.contains("please standby while I look up details about your system");
    s && (n = "GetServiceTagDetails_New");
    u = "";
    h = n.startsWith("You have selected") && n.contains("I can walk you through a few manual operations that may improve the performance");
    h && (u = n,
    n = "update user selected operating system");
    i = n.startsWith("Thanks for your feedback") && n.contains("so we are better able to help you in the future.");
    i && (n = "Enable chat bot input after user selected feedback");
    i || (i = n.startsWith("Obrigado pelos comentários") && n.contains("para que possamos ajudá-lo no futuro"),
    i && (n = "Enable chat bot input after user selected feedback"));
    r = n.startsWith("I hope I was able to help you");
    r && (n = "Disable chat bot input after user enter first message");
    r || (r = n.startsWith("Espero ter podido ajudá-lo"),
    r && (n = "Disable chat bot input after user enter first message"));
    try {
        switch (n) {
        case "GetServiceTagDetails_New":
            ShowLoader();
            processChatBotCommand();
            break;
        case "Opening QuickTest..\n":
        case "Opening QuickTest..":
            t.redirectURL = UpdateQuickTestUrl();
            RunQuickTestWithNoVideo();
            t.isNewWindow = !0;
            t.ignoreThreeDot = !0;
            break;
        case "Update my drivers":
        case "Update my drivers\n":
        case "Please wait while we are loading driver update page.":
        case "Please wait while we are loading driver update page.\n":
            FetchSessionValue("chatBotObjectSession") != null && (driverPageURL = FetchSessionValue("chatBotObjectSession").driverPageURL,
            t.redirectURL = driverPageURL,
            t.isNewWindow = !0);
            break;
        case "Your Service Events are still loading, please standby":
        case "Your Service Events are still loading, please standby\n":
            FetchSessionValue("chatBotObjectSession") != null && (SrRedirectURL = FetchSessionValue("chatBotObjectSession").eSupportSrRedirectURL,
            e = FetchSessionValue("chatBotObjectSession").srNumber,
            e === "1" ? callDellmetricsTrackForBot("890.220.809") : e === "2" && callDellmetricsTrackForBot("890.220.810"),
            t.redirectURL = SrRedirectURL,
            t.isNewWindow = !0);
            break;
        case "Please wait instruction page is loading.":
        case "Please wait instruction page is loading.\n":
            FetchSessionValue("chatBotObjectSession") != null && (c = FetchSessionValue("chatBotObjectSession").manualTroubleshootURL,
            t.redirectURL = c,
            t.isNewWindow = !0);
            break;
        case "When you locate the Service Tag,enter it here":
        case "When you locate the Service Tag,enter it here\n":
            EnableChatBotInput();
            break;
        case "Your Service Event are still loading, please standby":
        case "Your Service Event are still loading, please standby\n":
            FetchSessionValue("chatBotObjectSession") != null && (DispatchRedirectURL = FetchSessionValue("chatBotObjectSession").eSupportDispatchRedirectURL,
            f = FetchSessionValue("chatBotObjectSession").dispatchNumber,
            f != "" && f === "1" ? callDellmetricsTrackForBot("890.220.837") : f === "2" && callDellmetricsTrackForBot("890.220.836"),
            t.redirectURL = DispatchRedirectURL,
            t.isNewWindow = !0);
            break;
        case "Chat with Live Agent":
        case "Chat with Live Agent\n":
        case "Transfer to Agent":
        case "Transfer to Agent\n":
            break;
        case "Please wait ODE diagnostic are still loading.":
        case "Please wait ODE diagnostic are still loading.\n":
            FetchSessionValue("chatBotObjectSession") != null && (sessionStorage.setItem("ode_diagscancommand", "GR"),
            DiagnosticResultPageUrl = FetchSessionValue("chatBotObjectSession").DiagnosticUrl,
            DiagnosticResultPageUrl ? (t.redirectURL = DiagnosticResultPageUrl,
            t.isNewWindow = !0,
            t.ignoreThreeDot = !0) : consoleLog("Value of DiagnosticResultPageUrl : " + DiagnosticResultPageUrl));
            break;
        case "Follow the instructions on the page to try the recommended manual steps to improve the performance of your system":
            break;
        case "I'm sorry, I'm not able to connect you to an Agent right now.":
        case "I'm sorry,I'm not able to connect you to an Agent right now.":
            t.redirectURL = "/support/incidents-online/us/en/19/ContactUs/dynamic";
            t.isNewWindow = !0;
            break;
        case "update user selected operating system":
            o = u.slice(18, u.indexOf("."));
            consoleLog(o);
            switch (o) {
            case "Windows 10":
                UpdateSystemOS("win10");
                break;
            case "Windows 8":
                UpdateSystemOS("win8");
                break;
            default:
                UpdateSystemOS("other")
            }
            break;
        case "Please provide your Feedback before you leave the chat":
        case "Please provide your Feedback before you leave the chat\n":
        case "Enable chat bot input after user selected feedback":
            EnableChatBotInput();
            break;
        case "Disable chat bot input after user enter first message":
            DisableChatBotInput();
            break;
        default:
            t.redirectURL = null;
            t.isNewWindow = !1
        }
    } catch (l) {
        consoleLog("error in getCommand method:" + l)
    }
    return t
}
;
Command = function() {
    try {
        this.execute = function() {
            this.redirectURL != null && this.isNewWindow == !0 && (this.ignoreThreeDot != undefined && this.ignoreThreeDot ? sessionStorage.setItem("GR_IsPageRedirected", "false") : sessionStorage.setItem("GR_IsPageRedirected", "true"),
            window.location.href = this.redirectURL)
        }
        ;
        this.redirectURL = null
    } catch (n) {
        consoleLog("error occured in Command method :" + n)
    }
}
;
waitForElement = function(n, t) {
    jQuery(n).length ? t() : setTimeout(function() {
        waitForElement(n, t)
    }, 1e3)
}
;
String.prototype.format || (String.prototype.format = function() {
    var n = arguments;
    return this.replace(/{(\d+)}/g, function(t, i) {
        return typeof n[i] != "undefined" ? n[i] : t
    })
}
);
String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, function(n) {
        return n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
    })
}
;
startCareChatBot;
window.onresize = function() {
    $("div#divLoading").length && $("div#divLoading")[0].style.display !== "none" && ShowLoader()
}
;
window.onload = function() {
    $("span:contains('Leave Chat')").on("click", function() {
        CloseAndClearChatBot()
    });
    $("span:contains('Leave')").on("click", function() {
        CloseAndClearChatBot()
    })
}
;
sessionStorage.getItem("isChatBotActive") != null && sessionStorage.getItem("isChatBotActive") == "true" && (consoleLog("initiateChatBot"),
initiateChatBot()),
function() {
    if (window.addEventListener("dragover", function(n) {
        n = n || event;
        n.preventDefault()
    }, !1),
    window.addEventListener("drop", function(n) {
        n = n || event;
        n.preventDefault()
    }, !1),
    !document.getElementById("snapinStyle")) {
        var t = '.embeddedServiceSidebarHeader,.embeddedServiceSidebarMinimizedDefaultUI{background-color:#00447C!important;border:1px!important}.embeddedServiceSidebarFormField .uiInput .uiLabel-left{padding-top:0!important;margin-top:11px;color:#444!important;font-weight:300!important}.embeddedServiceSidebarForm.formContent{background:#f1f1f1!important}.embeddedServiceHelpButton .helpButton .uiButton{background-color:#005290!important;font-family:"Salesforce Sans",sans-serif}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:#005290 solid 1px}.embeddedServiceSidebarForm .uiButton,.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important;border:none!important}.embeddedServiceSidebarForm.buttonWrapper{background:linear-gradient(to bottom,rgba(247,247,247,0) 0,rgba(247,247,247,1) calc(100% - 77px),rgba(247,247,247,1) 100%)}.embeddedServiceSidebarButton.uiButton--inverse{background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus{box-shadow:0 0 3px 0 #ddd!important}.embeddedServiceSidebarDialogState .dialogButton{border-radius:0!important}.embeddedServiceSidebarDialogState .dialogButton:not(:disabled):focus{text-decoration:none!important}.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select{color:#444!important}.embeddedServiceSidebarForm .fieldList{margin:12px 12px 0 0!important}.embeddedServiceLiveAgentStateChatHeaderOption .optionName{color:#fff!important;text-decoration:none!important}.embeddedServiceSidebarHeader .headerText{margin-bottom:0!important}.embeddedServiceSidebarMinimizedDefaultUI .minimizedImage{display:none!important}.embeddedServiceLiveAgentStateChatHeader.reconnecting.alert{background-color:#cb2b19!important;padding-top:46px!important}.embeddedServiceSidebarForm.buttonWrapper{background-color:#f1f1f1!important}.cusPreChat-modalContainer,.cusPreChat-shortHeader{font-weight:400;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus,.cusPreChat-headerItem:focus,.cusPreChat-headerItem:hover{outline:0}.cusPreChat-modalContainer{box-sizing:border-box;line-height:1.5;color:#212529;display:block;position:fixed;z-index:1001;font-family:"Salesforce Sans",sans-serif;top:0;font-size:16px;pointer-events:all;backface-visibility:hidden;text-align:left}.cusPreChat-modalContainer li,.cusPreChat-modalContainer ul{display:block;list-style:none}.cusPreChat-dockableContainer{width:320px;max-height:720px;border-radius:8px 8px 0 0;position:fixed;left:auto;bottom:0;right:20px;margin:0;height:90%;box-shadow:2px 2px 20px rgba(0,0,0,.2);z-index:15;text-align:center;overflow:hidden;max-width:40em;pointer-events:all}.cusPreChat-embeddedServiceSidebarHeader{position:absolute;top:0;width:100%;border-radius:8px 8px 0 0;background-color:#00447C;border:1px;text-align:center;pointer-events:all}.cusPreChat-shortHeader{color:#fff;border-radius:8px 8px 0 0;line-height:3;text-align:center;font-size:.875em;height:44px;clear:both;overflow:hidden;z-index:3;position:relative;transform:translate3d(0,0,0)}.cusPreChat-shortHeaderContent{position:relative;display:flex;height:100%}.cusPreChat-headerItem{color:#fff;font-size:1em;background:0 0;border:none}.cusPreChat-headerItem:focus:before,.cusPreChat-headerItem:hover:before{content:" ";position:absolute;background-color:#fff;opacity:.2;border-radius:4px;box-sizing:border-box;pointer-events:none;top:20%}.cusPreChat-closeButton,.cusPreChat-minimizeButton{transition:color .7s ease;padding:14px;line-height:0}.cusPreChat-minimizeButton:focus:before,.cusPreChat-minimizeButton:hover:before{left:6px;width:30px;height:60%}.cusPreChat-closeButton:focus:before,.cusPreChat-closeButton:hover:before{right:6px;width:30px;height:60%}.cusPreChat-assistiveText{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.cusPreChat-embeddedServiceIcon{display:flex}.cusPreChat-embeddedServiceIcon svg{display:inline-block;box-sizing:border-box;width:1em;height:1em;fill:#fff}.cusPreChat-headerText{display:flex;justify-content:center;align-items:center;flex-grow:1;align-self:stretch;width:calc(100% - 96px);color:#fff;text-decoration:none;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:1em}.cusPreChat-sidebarBody{position:absolute;width:100%;height:100%;top:44px;z-index:0;background-color:#f1f1f1;transform:translate3d(0,0,0);-webkit-overflow-scrolling:touch}.cusPreChat-sidebarLoadingIndicator{position:relative;height:100%;background-color:#fff}.cusPreChat-activeFeature{width:100%;height: 100%}.cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI{overflow:hidden;height:100%;position:absolute}.cusPreChat-formContent{width:320px;height:calc(100% - 98px);overflow-y:auto;position:relative;background-color:#f1f1f1;margin-bottom:81px;border-radius:0 0 8px 8px}.cusPreChat-fieldList{margin:5px 12px 0 0;padding:0}.cusPreChat-embeddedServiceSidebarFormField{display:block;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:40px;list-style:none;padding:0;box-sizing:border-box;margin-left:12px}.cusPreChat-embeddedServiceSidebarFormField.cusPreChat-inputSplitName{width:calc(50% - 12px);display:inline-block;vertical-align:top;margin-left:9px}.cusPreChat-split-field-container{margin-bottom:6px}.cusPreChat-uiInput{text-align:left}.cusPreChat-uiInput .cusPreChat-uiLabel-left{padding:0!important;color:#444!important;font-weight:300!important;position:relative;font-size:.75em;line-height:1.5;margin:11px .75em 2px 1px}.cusPreChat-uiInput .cusPreChat-required{position:absolute;color:#c23934;left:-6px;top:0}.cusPreChat-slds-style-inputtext{display:inline-block;line-height:30px;box-sizing:border-box;box-shadow:none;background-color:#fff;width:100%;height:44px !important;padding:0 12px !important;font-size:.875em;border:none !important;}.cusPreChat-slds-style-inputtext:focus{outline:0;box-shadow:0 0 2px 0 #007db8}.cusPreChat-buttonWrapper{text-align:center;padding:0px 24px 24px;margin:0;width:320px;position:fixed;box-sizing:border-box;bottom:44px; box-shadow: 0px -10px 5px rgba(241, 241, 241,0.7); background: #f1f1f1}.cusPreChat-embeddedServiceSidebarButton{background:#007db8;font-family:"Roboto Regular",sans-serif;border-radius:0!important;position:relative;border:none;text-shadow:none;box-shadow:none;transition:background .4s ease;color:#fff;font-size:1em;font-weight:400;width:100%;margin:0;height:44px;cursor:pointer}.cusPreChat-embeddedServiceSidebarButton:not(:disabled):focus,.cusPreChat-embeddedServiceSidebarButton:not(:disabled):hover{background:#004b6e}.cusPreChat-has-error{margin:0 0 0px;padding:0}.cusPreChat-has-error .cusPreChat-form-element__help{font-size:.75em;color:#c23934}.cusPreChat-embeddedServiceHelpButton{display:block;position:fixed;top:0;left:0;background:0 0;box-shadow:none;overflow:visible;z-index:1000;font-family:sans-serif}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:12px;right:12px;height:46px;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton{box-sizing:border-box;margin:0;padding:0 12px;height:46px;box-shadow:0 0 12px 0 rgba(0,0,0,.5);border-radius:23px;line-height:1;background:#007db8;font-size:.875em;color:#fff;font-weight:400;text-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-family:"Roboto Regular",sans-serif;width:168px;cursor:pointer;position:relative;border:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:hover::before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:23px;background-color:#000;opacity:.2;pointer-events:none}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton .cusPreChat-label{color:#fff}.cusPreChat-embeddedServiceHelpButton .cusPreChat-uiButton .cusPreChat-helpButtonLabel{position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%;line-height:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media only screen and (min-width:48em){.cusPreChat-embeddedServiceHelpButton{background-color:transparent}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:hover::before{border-radius:8px 8px 0 0}}.cusPreChat-sidebarLoadingIndicator{align-self:stretch;max-height:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;padding:0 24px}.cusPreChat-loadingBallContainer{display:inline-block}.cusPreChat-loadingBallContainer.cusPreChat-animated .cusPreChat-loadingBall{animation:cusPreChat-ballanimate 2.25s infinite ease-in-out;display:inline-block;width:1em;height:1em;border-radius:2em;font-size:8px;text-align:center;background:#0074bd;margin:3px}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-second{animation-name:cusPreChat-ballanimate-2}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-third{animation-name:cusPreChat-ballanimate-3}@keyframes cusPreChat-ballanimate{0%,32%{transform:scale(1)}16%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-2{32%,64%{transform:scale(1)}48%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-3{64%,96%{transform:scale(1)}80%{transform:scale(1.5)}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.cusPreChat-buttonWrapper{bottom: 3px;}}body.embeddedServicePreventScrolling {overflow: auto !important;position: inherit !important;}'
          , i = document.head || document.getElementsByTagName("head")[0]
          , n = document.createElement("style");
        n.type = "text/css";
        n.id = "snapinStyle";
        n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
        i.appendChild(n)
    }
    if (typeof NodeList.prototype.forEach == "function")
        return !1;
    NodeList.prototype.forEach = Array.prototype.forEach
}();
sprinklrChatBotObject = {};
sprinklrMsgObject = {};
const callabacks = {
    externalEventTriggered: function(n) {
        (n != null || n != undefined) && (sprinklrMsgObject = n,
        getMessage(n))
    },
    loaded: function() {
        $("#sprinklrIssueSpin").remove();
        $("#sprinklrChatDom").css({
            display: "block"
        });
        sprinklrLoaded()
    },
    closed: function() {
        setDellMetrics("222.890.230.103", "SPRINKLR: closeChat|" + sprinklrChatBotObject.payloadTags.issueType + "|UUID:" + sprinklrChatBotObject.requestId);
        closeSprinklrChat()
    }
};
