$(document).ready(function() {
    $('#regionInput').change(function() {
        $('#regionQueues').addClass('loading');
        $('#regionQueues').empty();
        var region = $('#regionInput').val();
        if (region) {
            // engineerSpinnerOn();
            jQuery.ajax({
                url: "/lov/getChatRegionQueues",
                dataType: 'json',
                cache: false,
                data: {'region': region},
                success : function(data, textStatus) {
                    var dropDownData = [];

                    for (var key in data) {
                        dropDownData.push({id:data[key].code,text:data[key].returnValue})
                    }
                    $('#regionQueues').prop('disabled', false).select2({
                        data:{ results: dropDownData,  },
                    })
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    addErrorMessage(errorThrown);
                    $('#regionQueues').select2('destroy');
                    $('#regionQueues').val('');
                    $('#regionQueues').prop('disabled', true);
                }
            }).always(function() {
                $('#regionQueues').removeClass('loading');
            });
        }
    });
});


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

    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

function startPartnerPortalChat(){
    var partnerPortalDetails = {
        language: "en",
        regionInput: $('#regionInput').val(),
        regionQueues: $('#regionQueues').val(),
        vendorType: $('#vendorType').val(),
        chatType: $('#chatType').val(),
        chatTypeValue: $('#chatTypeValue').val(),
        chatReason: $('#chatReason').val(),
        chatDescription: $('#chatDescription').val(),
        dpid:getMainSearchValue($('#chatType').val(), "DPID", $('#chatTypeValue').val()),
        serviceTag:getMainSearchValue($('#chatType').val(), "Service Tag", $('#chatTypeValue').val()),
        srNumber:getMainSearchValue($('#chatType').val(), "SR Number", $('#chatTypeValue').val()),
        chatProviderName: $('#chatProviderName').val(),//To be provided by Leo
        chatUserName: $('#chatUserName').val()//To be provided by Leo
    };

    var sfdcSnapinDetails = { //All SFDC values are supposed to be stored so that it can be updated as it needs Update for each environment change.
        buttonId: "5738A0000008Om2",//partnerPortalDetails.regionQueues,//'5730x000000Catz',
        baseLiveAgentContentURL:  $('#baseLAContentURL').val(),//'https://c.la2-c1cs-ord.salesforceliveagent.com/content',
        deploymentId: $('#deploymentId').val(),//'5720b000000CbfS',
        baseLiveAgentURL: $('#baseLAURL').val(),//'https://d.la2-c1cs-ord.salesforceliveagent.com/chat',
        eswLiveAgentDevName: $('#eswLADevName').val(),//'EmbeddedServiceLiveAgent_Parent04I0x0000008OPzEAM_16d81041603',
        componentName: $('#componentName').val(),//"Partner_Portal_Snap_ins",
        organizationId: $('#organizationId').val(),//"00D0x0000000WEw",
        serviceForceURL: $('#serviceForceURL').val(),//"https://service.force.com",
        snapInInitURL: $('#snapInInitURL').val(),//'https://dellservices--Chat.my.salesforce.com',
        snapInJs: $('#snapInJs').val(),//"https://service.force.com/embeddedservice/5.0/esw.min.js",
        snapInLAURL: $('#snapInLAURL').val(),//'https://chat-dellservices.cs95.force.com/LASnapIn',
        recordType: $('#recordType').val()//'0128A000000Jhee'// Note: Added a new value
    };
    addStyleSheetInDPPChat();
    triggerPartnerPortalSnapin(partnerPortalDetails, sfdcSnapinDetails);
}

function addStyleSheetInDPPChat(){
    if (!document.getElementById('snapinStyle')) {
        var css = '.invisibleWhileLoading .content,.embeddedServiceLiveAgentStateChatHeader .content{background: #222 !important;}',
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
}

//Initiate Snapin main code
function triggerPartnerPortalSnapin(partnerPortalDetails, sfdcSnapinDetails) {
    try {
        var initESW = function (gslbBaseURL) {
            embedded_svc.settings.displayHelpButton = false;//true;
            embedded_svc.settings.language = "en";
            embedded_svc.settings.enabledFeatures = ['LiveAgent'];
            embedded_svc.settings.entryFeature = 'LiveAgent';
            //embedded_svc.settings.storageDomain = sfdcSnapinDetails.domainName;
            embedded_svc.settings.defaultMinimizedText = 'Chat Now';

            embedded_svc.settings.directToButtonRouting = partnerPortalDetails.regionQueues;//BNR-TBD

            embedded_svc.settings.extraPrechatFormDetails = [{
                "label": "Type",
                "value": 'Partner',
                "transcriptFields": ["Type__c"]
            },{
                "label": "Chat Source",
                "value": 'Partner',
                "transcriptFields": ["Chat_Source__c"]
            },{
                "label": "Product Group / Vendor",
                "value": partnerPortalDetails.vendorType,
                "transcriptFields": ["PP_Vendor_Product_Group__c"]
            },{
                "label": "Product Type / Vendor List",
                "value": partnerPortalDetails.chatProviderName,
                "transcriptFields": ["PP_Vendor_List_Product_Type__c"]
            },{
                "label": "Region",
                "value": partnerPortalDetails.regionInput,
                "transcriptFields": ["PP_Region__c"]
            },{
                "label":  "Work Order From Partner",
                "value": partnerPortalDetails.dpid,
                "transcriptFields": ["PP_Work_Order_From_Partner__c"]
            },{
                "label":  "Case Number From Partner",
                "value": partnerPortalDetails.srNumber,
                "transcriptFields": ["PP_Case_Number_From_Partner__c"]
            },{
                "label": "Service Tag",
                "value": partnerPortalDetails.serviceTag,
                "transcriptFields": ["Service_Tag__c"]
            },{
                "label": "Service Tag",
                "value": partnerPortalDetails.serviceTag,
                "transcriptFields": ["Asset__c"],
                "displayToAgent": false
            },{
                "label": "Subject",
                "value": partnerPortalDetails.vendorType+" - "+partnerPortalDetails.chatProviderName,
                "transcriptFields": ["Issue__c"]
            },{
                "label":  "Issue Description",
                "value": partnerPortalDetails.chatDescription,
                "transcriptFields": ["Description__c"]
            },{
                "label":  "Description",
                "value": partnerPortalDetails.chatDescription,
                "transcriptFields": ["Collaborate_Description__c"]
            },{
                "label":  "Reason",
                "value": partnerPortalDetails.chatReason,
                "transcriptFields": ["Reason__c"]
            },{
                "label": "First Name",
                "name": "FirstName",
                "value": partnerPortalDetails.chatUserName,
                "transcriptFields": ["FirstName__c"],
                "displayToAgent": true
            },{
                "label": "Agent Name",
                "value": partnerPortalDetails.chatUserName,
                "transcriptFields": ["Agent_Name__c"],
                "displayToAgent": true
            },{
                "label":  "Record Type",
                "value": sfdcSnapinDetails.recordType ,//Record type id for partner//DEV2 = "0120b000000IiF6", SIT2 = "0120b000000IiF6" Need to change for each environment
                "transcriptFields": ["RecordType"]
            }
            ];
            embedded_svc.settings.extraPrechatInfo = [{
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
            embedded_svc.addEventHandler("onChatRequestSuccess", function (data) {
                $("body").on('DOMNodeRemoved', function(e) {//Refresh page on end chat.
                    if(e.target.className){
                        className = e.target.className.split(" ");
                        if(className[0] === "modalContainer")
                            location.reload();
                    }
                });
                $('.overlay-content').hide();
            });

            embedded_svc.init(sfdcSnapinDetails.snapInInitURL, sfdcSnapinDetails.snapInLAURL, gslbBaseURL, sfdcSnapinDetails.organizationId, sfdcSnapinDetails.componentName, {
                baseLiveAgentContentURL: sfdcSnapinDetails.baseLiveAgentContentURL,
                deploymentId: sfdcSnapinDetails.deploymentId,
                buttonId: sfdcSnapinDetails.buttonId,
                baseLiveAgentURL: sfdcSnapinDetails.baseLiveAgentURL,
                eswLiveAgentDevName: sfdcSnapinDetails.eswLiveAgentDevName,
                isOfflineSupportEnabled: false
            });

            eleExist('#helpButtonSpan > .message', chatClick);
        };
        if (!window.embedded_svc) {
            var s = document.createElement('script');
            s.setAttribute('src', sfdcSnapinDetails.snapInJs);
            s.onload = function () {
                initESW(null);
            };
            document.body.appendChild(s);
        } else {
            initESW(sfdcSnapinDetails.serviceForceURL);
        }
    } catch (e) {
        console.log("Error in: " + e);
    }
}

//Find if the value is to be sent to DPID, Service Tag or SR/Case number.
function getMainSearchValue(mainValue, selectedVal, searchValue ){
    if(mainValue === selectedVal){
        return searchValue;
    }else{
        return null;
    }
}
//Click on chat button
function chatClick(eleSelector, findingEle, waitCounter) {
    try {
        if (document.querySelector(eleSelector).innerText === 'Chat Now'){
            document.querySelector(eleSelector).click();
            clearInterval(findingEle);
        }
        else if (waitCounter > 20){
            clearInterval(findingEle);
            alert("No Agents Avilable");
        } else
            console.log("Searching for Agents = " + waitCounter);
    } catch (e) {
        console.log("Error in:" + e);
    }
}

//If element Exist Run function
function eleExist(eleSelector, callbackFunc) {
    var waitCounter = 0;
    var findingEle = setInterval(function () {
        if (document.querySelector(eleSelector)) {
            try {
                callbackFunc(eleSelector, findingEle,waitCounter++);
            } catch (e) {
                console.log('error in ' + callbackFunc + ' function: ' + e);
            }
        }
    }, 1000);
}

