	function triggerOrderSnapin(orderSnapinObject){
		let snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
		if (!snapinAlreadyInitiated){
			initOrderSnapin(orderSnapinObject);
		}
	}

    function initOrderSnapin(orderSnapinObject){
        var initESW = function(gslbBaseURL) {
            embedded_svc.settings.displayHelpButton = true; //Or false
            embedded_svc.settings.enabledFeatures = ['LiveAgent'];
            embedded_svc.settings.entryFeature = 'LiveAgent';
            if ("language" in orderSnapinObject)
                translatedLabels = translation(orderSnapinObject.language);
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
                "label": "Case Title",
                "transcriptFields": ["Issue__c"]
            }, {
                "label": "Order Number",
                "value": orderSnapinObject.orderNumber,
                "transcriptFields": ["Order_Number__c"]
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
            "fieldName": "OrderNumber__c",
            "isExactMatch": true,
            "label": "Order Number"
        }
        ],
        "entityName": "Order",
        "saveToTranscript": "OrderNumber__c"
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

            embedded_svc.init(
                orderSnapinObject.snapInInitURL,
                orderSnapinObject.snapInLAURL,
                gslbBaseURL,
                orderSnapinObject.organizationId,
                orderSnapinObject.componentName,
                {
                    baseLiveAgentContentURL: orderSnapinObject.baseLiveAgentContentURL,
                    deploymentId:  orderSnapinObject.deploymentId,
                    buttonId: orderSnapinObject.buttonId,
                    baseLiveAgentURL: orderSnapinObject.baseLiveAgentURL,
                    eswLiveAgentDevName: orderSnapinObject.LiveAgentDevName,
                    isOfflineSupportEnabled: false
                }
            );

        };
    
        if (!window.embedded_svc) {
            var s = document.createElement('script');
            s.setAttribute('src', orderSnapinObject.snapInJs);
            s.onload = function() {
                initESW(null);
            };
            document.body.appendChild(s);
        } else {
            initESW(orderSnapinObject.serviceForceURL);
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
    } else if (language == "cn") {
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
    } else if (language == "fr") {
        this.issue = "Issue";
        this.firstName = "Prénom";
        this.lastName = "Nom";
        this.emailAdd = "Adresse e-mail";
        this.primPhone = "Numéro de téléphone principal";
        this.issueDesc = "Description du problème";
        this.characters = "characters"
        this.language = "fr";
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
    console.log("Language = " + this.language);
    return this;
}