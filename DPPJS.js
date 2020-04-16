$(document).ready(function() {
    var requiredMessage = ajaxGetMessage("/message/getMessage",'required.form.field');

    var ua = window.navigator.userAgent;
    var oldIE = ua.indexOf('MSIE ');
    var newIE  =ua.indexOf('Trident/');

    if (oldIE > 0 || newIE > 0) { // If Internet Explorer, return version number
        var chatIESupport = ajaxGetMessage("/message/getMessage",'label.chat.ie.support');
        addErrorMessage(chatIESupport);
    }

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
                    $('#regionQueues').removeAttr('readonly').select2({
                        data:{ results: dropDownData,  },
                    })
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    addErrorMessage(errorThrown);
                    $('#regionQueues').select2('destroy');
                    $('#regionQueues').val('');
                    $('#regionQueues').prop('readonly', 'readonly');
                }
            }).always(function() {
                $('#regionQueues').removeClass('loading');
            });
        }
    });

    jQuery.validator.setDefaults({
        errorPlacement : function(error, element) {
            element.closest(".form-group").addClass("has-error");
            error.appendTo(element.closest(".form-group"));
        },
        unhighlight : function(element, errorClass, validClass) {
            $(element).closest(".form-group").removeClass("has-error");
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


    if (!document.getElementById('snapinStyle')) {
        var css = '.embeddedServiceLiveAgentStateChatHeader .content{background: #222 !important;}',
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
})();

function startPartnerPortalChat(){
    $('.chatForm form').validate()
    if($('.chatForm form').valid()) {
        $('#chatPleaseWait').show();

        var partnerPortalDetails = {
            language: "en",
            regionInput: $('#regionInput').val(),
            regionQueues: $('#regionQueues').val(), 
            vendorType: $('#vendorType').val(),
            chatType: $('#chatType').val(),
            chatTypeValue: $('#chatTypeValue').val(),
            chatReason: $("#chatReason").select2('data') ? $("#chatReason").select2('data').text : null,
            chatDescription: $('#chatDescription').val(),
            dpid: getMainSearchValue($('#chatType').val(), "DPID", $('#chatTypeValue').val()),
            serviceTag: getMainSearchValue($('#chatType').val(), "Service Tag", $('#chatTypeValue').val()),
            srNumber: getMainSearchValue($('#chatType').val(), "SR Number", $('#chatTypeValue').val()),
            chatProviderName: $('#chatProviderName').val(),
			productName: findProductFromQueueName($('#regionQueues').siblings(".form-control")[0]),//FY21-0502: Story #8076479: Find if the product name from Queue name.
            chatUserName: $('#chatUserName').val()
        };

        var sfdcSnapinDetails = { 
            buttonId: partnerPortalDetails.regionQueues,
            baseLiveAgentContentURL: $('#baseLAContentURL').val(),
            deploymentId: $('#deploymentId').val(),
            baseLiveAgentURL: $('#baseLAURL').val(),
            eswLiveAgentDevName: $('#eswLADevName').val(),
            componentName: $('#componentName').val(),
            organizationId: $('#organizationId').val(),
            serviceForceURL: $('#serviceForceURL').val(),
            snapInInitURL: $('#snapInInitURL').val(),
            snapInJs: $('#snapInJs').val(),
            snapInLAURL: $('#snapInLAURL').val(),
            recordType: $('#recordType').val()
        };
        addStyleSheetInDPPChat();
        triggerPartnerPortalSnapinDPP(partnerPortalDetails, sfdcSnapinDetails);
    }
}

function addStyleSheetInDPPChat(){
    if (!document.getElementById('snapinStyle')) {
        var css = '.invisibleWhileLoading .content, .embeddedServiceLiveAgentStateChatHeader .content{background: #222 !important;}',
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


function triggerPartnerPortalSnapinDPP(partnerPortalDetails, sfdcSnapinDetails) {
    try {
        var initESW = function (gslbBaseURL) {
            embedded_svc.settings.displayHelpButton = false;
            embedded_svc.settings.language = "en";
            embedded_svc.settings.enabledFeatures = ['LiveAgent'];
            embedded_svc.settings.entryFeature = 'LiveAgent';
            embedded_svc.settings.defaultMinimizedText = 'Chat Now';

            embedded_svc.settings.directToButtonRouting = partnerPortalDetails.regionQueues;

            embedded_svc.settings.extraPrechatFormDetails = [{
                "label": "Type",
                "value": 'Partner',
                "transcriptFields": ["Type__c"]
            },{
                "label": "Chat Source",
                "value": 'Partner',
                "transcriptFields": ["Chat_Source__c"]
            },{
                "label": "Group / Vendor", //FY21:0502 STORY 8244329: Change Label Name
                "value": partnerPortalDetails.vendorType,
                "transcriptFields": ["PP_Vendor_Product_Group__c"]
            },{
                "label": "Type / Vendor List",//FY21:0502 STORY 8244329: Change Label Name
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
            },
			//FY21-0502: Story #8076479: Send Product Name to Chat Transcript.[START]
			{	
				"label":  "Product",
				"value": partnerPortalDetails.productName,
				"transcriptFields": ["PP_Product__c"]
			},
			//FY21-0502: Story #8076479: Send Product Name to Chat Transcript.[END]
			{
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
                "value": sfdcSnapinDetails.recordType ,
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
                $('#chatPleaseWait').hide(); //FY21:0502 loader to showup only after chat request success.
                $("body").on('DOMNodeRemoved', function(e) {
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


function getMainSearchValue(mainValue, selectedVal, searchValue ){
    if(mainValue === selectedVal){
        return searchValue;
    }else{
        return null;
    }
}

function chatClick(eleSelector, findingEle, waitCounter) {
    try {
        if (document.querySelector(eleSelector).innerText === 'Chat Now'){
            document.querySelector(eleSelector).click();
            clearInterval(findingEle);
            //$('#chatPleaseWait').hide();  //FY21:0502 loader to showup only after chat request success.
        }
        else if (waitCounter > 20){
            clearInterval(findingEle);
            addErrorMessage("No Agents Available");
            $('#chatPleaseWait').hide();
        } else {
            console.log("Searching for Agents = " + waitCounter);
        }
    } catch (e) {
        console.log("Error in:" + e);
        $('#chatPleaseWait').hide();
    }
}


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

//FY21-0502: Story #8076479: Find if the product name from Queue name. [START]
function findProductFromQueueName(queueNameEle){
	let queueName = "";
	if (queueNameEle)
		queueName = queueNameEle.innerText;
	if (queueName === "TS JP ENT - Server")
		return "Server";
	else if (queueName === "TS JP ENT - Storage")
		return "Storage";
	else
		return "";		
}
//FY21-0502: Story #8076479: Find if the product name from Queue name. [END]
