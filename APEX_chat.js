

//////////////////////////////////
//Additional Required Code[START]/

//const { hide } = require("@popperjs/core");

//////////////////////////////////
(function () {
    //Disable Drag drop
    var initESW;
    window.addEventListener("dragover", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    window.addEventListener("drop", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);

    //For each node not working in IE
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;

})();
///////////////////////////////////
//Additional Required Code[END]///
//////////////////////////////////




//////////////////////////////////
//Out of the box chat code [START]
//////////////////////////////////
const initChat = options => {
    var initESW = function(gslbBaseURL) {

        embedded_svc.settings.displayHelpButton = false; //Or true
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

        embedded_svc.settings.defaultMinimizedText = 'Chat Now'; //(Defaults to Chat with an Expert)
        //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

        //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
        //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

        // Settings for Chat
        //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
            // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
            // Returns a valid button ID.
        //};
        //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
        //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
        //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';
        

        embedded_svc.init(
            options.chatOptions.snapInInitURL,
            options.chatOptions.snapInLAURL,
            gslbBaseURL,
            options.chatOptions.organizationId,
            options.chatOptions.componentName,
            options.chatOptions.chatConfigValues
        );

        embedded_svc.settings.prepopulatedPrechatFields = {
            FirstName: options.user.givenName,
            LastName: options.user.sn,
            Email: options.user.email,
            Primary_Phone__c: options.user.phone || "000"
          };

          embedded_svc.settings.extraPrechatFormDetails = [
            //{ "label": translatedLabels.firstName, "transcriptFields": ["FirstName__c"] },
            //{ "label": translatedLabels.lastName, "transcriptFields": ["LastName__c"] },
            //{ "label": translatedLabels.emailAdd, "transcriptFields": ["Email__c"] },
            //{ "label": translatedLabels.issueDesc, "transcriptFields": ["Description__c"] },
            { "label": "Issue Key", "value": "APEX", "transcriptFields": ["Issue_Key__c"] },
            { "label": "Customer Number", "value": "100191466", "transcriptFields": ["CustomerNumber__c"] },
            { "label": "CustomerBUID", "value": "11", "transcriptFields": ["CustomerBUID__c"] },
            { "label": "Chat Source", "value": "Apex", "transcriptFields": ["Chat_Source__c"] }
          ]

          embedded_svc.addEventHandler("onHelpButtonClick", function(data) {
            console.log("onHelpButtonClick event was fired.");
        });
        
        embedded_svc.addEventHandler("onChatRequestSuccess", function(data) {
            console.log("onChatRequestSuccess event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onChatEstablished", function(data) {
            console.log("onChatEstablished event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onChasitorMessage", function(data) {
            console.log("onChasitorMessage event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onAgentMessage", function(data) {
            console.log("onAgentMessage event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onChatTransferSuccessful", function(data) {
            console.log("onChatTransferSuccessful event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onChatEndedByChasitor", function(data) {
            console.log("onChatEndedByChasitor event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onChatEndedByAgent", function(data) {
            console.log("onChatEndedByAgent event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onIdleTimeoutOccurred", function(data) {
            console.log("onIdleTimeoutOccurred event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onConnectionError", function(data) {
            console.log("onConnectionError event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        
        embedded_svc.addEventHandler("onClickSubmitButton", function(data) {
            console.log("onClickSubmitButton event was fired.  liveAgentSessionKey was " + data.liveAgentSessionKey);
        });
        embedded_svc.addEventHandler("onInviteAccepted", function(data) {
            console.log("onInviteAccepted event was fired.");
        });
        
        embedded_svc.addEventHandler("onInviteRejected", function(data) {
            console.log("onInviteRejected event was fired.");
        });
        
    };

    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', options.chatOptions.snapInJs);
        s.onload = function() {
            initESW(null);
        };
        document.body.appendChild(s);
    } else {
        initESW(options.chatOptions.serviceForceURL);
    }
}
////////////////////////////////
//Out of the box chat code [END]
////////////////////////////////

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////Custom Code [START]/////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//Trigger Apex caht on click on start chat button
function triggerChat(options) {
    openPrechatform(options);
}



//Open Prechat form
function openPrechatform(options) {
    let snapinExists = document.querySelector(".embeddedServiceSidebar");
    //If the custom dom element exists and the change has not started.
    if (!document.getElementById("cusPreChatSnapinDom") && !(!document.getElementById("cusPreChatSnapinDom") && snapinExists && window.getComputedStyle(snapinExists).display === 'block')) { 
        createCustPreChat(options.preChatlableObject,options.user,options.subscriptionList);
    } else {
        var serviceSidebar = document.querySelector(".modalContainer.embeddedServiceSidebar"),
            minimizedDefaultUI = document.querySelector(".embeddedServiceSidebar .embeddedServiceSidebarMinimizedDefaultUI");
        if (serviceSidebar && serviceSidebar.style.display == "none") {
            document.getElementById("cusPreChat-helpButtonEnabled").click();
        } else if (minimizedDefaultUI)
            minimizedDefaultUI.click();
        else
            document.getElementById("cusPreChat-helpButtonEnabled").click();
    }
}


//createPrecahtForm and its respectivefunctions
function createCustPreChat(preChatlableObject , user, subscriptionList) {

    //Required Value DOM elements
    let subscriptionDom = '', nextBtnDom = '';
    
    if (subscriptionList && subscriptionList.length > 1) {//If number of subscrition is greated than 1
        
        //Disable Next button
        nextBtnDom = '<button id="cusPreChat-nextBtn" class="cusPreChat-nextBtn cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button" disabled="disabled"> <span class="cusPreChat-label cusPreChat-bBody">' + preChatlableObject.nextBtn + '</span> </button>';

        //Add Subscrition list to Subscrition DOM element
        let subscriptionListDom = '<option></option>' //First value is empty
        subscriptionList.forEach(function (subscription) {
            subscriptionListDom += '<option value="'+subscription+'">'+subscription+'</option>'
        });
        subscriptionDom = '<li id="cusPreChat-readonly-subscription" class="readonlyContainer cusPreChat-readonly-subscription" style="display:none"><div><b style="margin-right:16px">'+ preChatlableObject.subscription +' </b><div><span id="cusPreChat-readonly-subscriptionVal"></span><span id="changeSubscription" class="changeSubscription">'+preChatlableObject.changeSubscription+'</span></div></div></li><li id="cusPreChat-subscriptionDisplay" class="cusPreChat-subscriptionDisplay cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>' + preChatlableObject.subscription + '</span></label><select id="cusPreChat-subscription" class="cusPreChat-subscription form-control cusPreChat-input">' + subscriptionListDom + '</select></div></li><li id="cusPreChat-loaderDisplay" class="cusPreChat-loaderDisplay" style="display:none;"><div class="cusPreChat-loader"></div></li>';
    
    } else if (subscriptionList && subscriptionList.length === 1){ //If ther is only one subscrition
        
        //Next button is hidden
        
        //Subscrition value is read-only and loader is visible
        subscriptionDom = '<li id="cusPreChat-readonly-subscription" class="readonlyContainer cusPreChat-readonly-subscription"><div><b style="margin-right:16px">'+ preChatlableObject.subscription +' </b><div id="cusPreChat-readonly-subscriptionVal">'+ subscriptionList[0] +'</div></div></li><li id="cusPreChat-loaderDisplay" class="cusPreChat-loaderDisplay"><div class="cusPreChat-loader"></div></li>';
    
    } else {

        //both next and subscription button are hidden. But, loader is visible
        subscriptionDom = '<li id="cusPreChat-loaderDisplay" class="cusPreChat-loaderDisplay"><div class="cusPreChat-loader"></div></li>';
    
    }

    //Prechat Form Creation
    var domEle = '<div id="cusPreChatSnapinDom" class="cusPreChat-modalContainer"> <div class="cusPreChat-dockableContainer"> <div class="cusPreChat-embeddedServiceSidebarHeader"> <div class="cusPreChat-shortHeader"> <div class="cusPreChat-shortHeaderContent"> <h2 class="cusPreChat-headerText"> <div class="cusPreChat-headerTextContent"> <span id="cusPreChat-headerTextLabel">' + preChatlableObject.chatHeader + '</span> <span id="cusPreChat-headerSubtext"> </span></div></h2> <button id="cusPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" data-key="minimize_window" aria-hidden="true" viewBox="0 0 52 52" class="slds-icon slds-icon-text-default slds-icon_x-small"> <g> <path d="M50 48.5c0 .8-.7 1.5-1.5 1.5h-45c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h45c.8 0 1.5.7 1.5 1.5v3z"></path> </g> </svg> </span> </button> <button id="cusPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button> </div></div></div><div class="cusPreChat-sidebarBody"> <div id="cusPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"> <div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"> <div style="margin: 2.5em 1.75em;">' + preChatlableObject.chatUnavailableMessage + '</div><div><button id="cusPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">' + preChatlableObject.closeChat + '</span></button></div></div><div id="cusPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"> <div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"> <div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"> <div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"> <div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"> <ul class="cusPreChat-fieldList"> <li class="readonlyContainer"> <div><b style="margin-right:16px">'+preChatlableObject.name+' </b><div>' + user.givenName + ' ' + user.sn + '</div></div></li><li class="readonlyContainer"> <div><b style="margin-right:16px">'+preChatlableObject.emailAddress+' </b><div>'+user.email+'</div></div></li>'+subscriptionDom+'<li id="cusPreChat-routingResponceChatUnavailableDisplay" class="cusPreChat-routingResponceChatUnavailableDisplay" style="display:none;"><div class="cusPreChat-routingResponceChatUnavailable">'+preChatlableObject.chatUnavailableMessage+'</div></li><li id="cusPreChat-inputPhone" class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField" style="display:none;"> <div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="Primary_Phone_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>' + preChatlableObject.phoneNumber + '</span></label> <input id="cusPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li id="cusPreChat-inputDiscription" class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField" style="display:none;"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="Issue_Description_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>' + preChatlableObject.issueDescription + '</span><span id="IssueIsOptional"> ' + preChatlableObject.optional + '</span></label> <div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / ' + preChatlableObject.issueDescriptionLength + ' ' + preChatlableObject.characters + '</div><textarea id="cusPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input" maxlength="' + preChatlableObject.issueDescriptionLength + '" type="text" aria-describedby="" placeholder="" required="" ></textarea> </div></li></ul> <div id="cusPreChat-privacyMsg" class="cusPreChat-privacyMsg" style="display:none; font-size: 12px;color:#767676;text-align: left;margin: 2.5em 1.75em; font-style: italic;color:#444444;">' + preChatlableObject.customerPrivacyDesc + '</div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button" style="display:none;"> <span class="cusPreChat-label cusPreChat-bBody">' + preChatlableObject.startChat + '</span> </button>'+nextBtnDom+'</div></div></div></div></div></div></div></div><div id="cusPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"> <div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)" > <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span> <div class="cusPreChat-helpButtonLabel" id="cusPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">' + preChatlableObject.chatHeader + '</span></div></button> </div></div>';
    var body = document.body || document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('beforeend', domEle);

    //Prechat Form Actions
    document.getElementById("cusPreChat-minimize-btn").addEventListener("click", minimizeCustPrechat);
    document.getElementById("cusPreChat-close-btn").addEventListener("click", closeCustPrechat);
    document.getElementById("cusPreChat-helpButtonEnabled").addEventListener("click", maximizeCustPrechat);
    custPreFormShowIssueDetailsCharRemainingOnKeyUp(preChatlableObject);
    document.getElementById("cusPreChat-startChat").addEventListener("click", function () {
        triggerCustPrechatStartChat(user, preChatlableObject)
    });

    if(subscriptionList && subscriptionList.length === 1){
        pushToRouting(document.getElementById("cusPreChat-readonly-subscriptionVal").innerText)
    } else {
        document.getElementById("cusPreChat-subscription").onchange = function(){
            if(this.value !== ""){
                document.getElementById("cusPreChat-nextBtn").disabled = false;
            }
            else{
                document.getElementById("cusPreChat-nextBtn").disabled = true;
            }
        };
        document.getElementById("changeSubscription").addEventListener("click", selectSubscription);
        document.getElementById("cusPreChat-nextBtn").addEventListener("click", function () {
            hideElement(document.getElementById("cusPreChat-routingResponceChatUnavailableDisplay")); //Hide routing response
            pushToRouting(document.getElementById("cusPreChat-subscription").value) //Make routing calls
        });
    }
}

function minimizeCustPrechat() {
    document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'block';
    document.getElementById("cusPreChatSnapinDom").style.display = 'none';
}

function closeCustPrechat() {
    removeCustPreChat();
}

function maximizeCustPrechat() {
    document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'none';
    document.getElementById("cusPreChatSnapinDom").style.display = 'block';
}

//Issue Number count [START]
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
//Issue Number count [STOP]


function removeCustPreChat() {
    var custPreChatEle = document.getElementById("cusPreChatSnapinDom");
    custPreChatEle.remove();
}


//Start chat is clicked from the prechat form
function triggerCustPrechatStartChat(user, preChatlableObject) {
    if (custPreFormValidation(preChatlableObject, user)) {
        loadingSnapinQueue();
        connectToSnapInAgent(user);
    }
}

//Custom prechat form validation
function custPreFormValidation(preChatlableObject, user){
    return true;
}

//Loader
function loadingSnapinQueue(){
    return true
}

//Make clicks on the original buttons to connect to an agent
function connectToSnapInAgent(user) {

    eleExistWithVariable('.helpButtonEnabled #helpButtonSpan > .message', click_chatNow);
    eleExistWithVariable('.embeddedServiceSidebar .startButton', click_startChat);
}

function click_chatNow(eleSelector, findingEle) {
    try {
        if (document.querySelector(eleSelector).innerText === 'Chat Now') {
            document.querySelector(eleSelector).click();
        }
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}

function click_startChat(eleSelector, findingEle) {
    try {
            document.querySelector(eleSelector).click();//Click on Start chat
            removeCustPreChat(); //Remove the custom prechat
            clearInterval(findingEle);

    } catch (e) {
        console.log("Error in:" + e);
    }
}

function pushToRouting(subscriptionVal){
    
    showBlockElement(document.getElementById("cusPreChat-loaderDisplay")); //Show loader
    hideElement(document.getElementById("cusPreChat-nextBtn")); //Hide next button

    setTimeout(function () {//Keep a delay for for the above changes to be done 
        getRoutingDetails(subscriptionVal, showRestOfPrechatForm, showAgentOfflneInPrechat) //Get Button and Agent avibality details
    }, 50);
}

function selectSubscription(){
        showBlockElement(document.getElementById("cusPreChat-nextBtn")); //Show next button
        document.getElementById("cusPreChat-readonly-subscriptionVal").textContent = ""; //remove value to readonly subscription
        showBlockElement(document.getElementById("cusPreChat-subscriptionDisplay")); //Show subscription dropdown
        hideElement(document.getElementById("cusPreChat-readonly-subscription")); //Hide subscription as readonly
        hideElement(document.getElementById("cusPreChat-inputPhone")); //Hide phone field
        hideElement(document.getElementById("cusPreChat-inputDiscription")); //Hide Discription filed
        hideElement(document.getElementById("cusPreChat-privacyMsg")); //Hide Privacy Message
        hideElement(document.getElementById("cusPreChat-startChat")); //Hide Start Chat button
}

function showRestOfPrechatForm(routingResultObject,subscritionDetail){

    if (routingResultObject.agentAvailable === true) { //If agent is avilable in hte queue

        if(typeof embedded_svc != "undefined"){//Update buttonId in embeded service
            embedded_svc.settings.buttonId = routingResultObject.chatButtonId;
        }

        hideElement(document.getElementById("cusPreChat-loaderDisplay")); //Hide loader
        document.getElementById("cusPreChat-readonly-subscriptionVal").textContent = subscritionDetail; //add value to readonly subscription
        hideElement(document.getElementById("cusPreChat-subscriptionDisplay")); //Hide subscription dropdown
        showBlockElement(document.getElementById("cusPreChat-readonly-subscription")); //Show subscription as readonly
        showBlockElement(document.getElementById("cusPreChat-inputPhone")); //Show phone field
        showBlockElement(document.getElementById("cusPreChat-inputDiscription")); //Show Discription filed
        showBlockElement(document.getElementById("cusPreChat-privacyMsg")); //Show Privacy Message
        showBlockElement(document.getElementById("cusPreChat-startChat")); //Show Start Chat button

    } else {
        showAgentOfflneInPrechat();
    }

}

function showAgentOfflneInPrechat(){
    hideElement(document.getElementById("cusPreChat-loaderDisplay")); //Hide loader
    showBlockElement(document.getElementById("cusPreChat-routingResponceChatUnavailableDisplay")); //Show Start Chat button
    showBlockElement(document.getElementById("cusPreChat-nextBtn")); //Show next button
    document.getElementById("cusPreChat-nextBtn").disabled = true; //Disable next button
}

function hideElement(ele){
    if(ele)
        ele.style.display = "none";
}

function showBlockElement(ele){
    if(ele)
        ele.style.display = "block";
}

//Dom check before clicking on Chat 
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

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////Custom Code [END]///////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////