const initChat = options => {
    const initESW = function(gslbBaseURL) {
      embedded_svc.settings.displayHelpButton = true;
      embedded_svc.settings.language = "";
      embedded_svc.settings.enabledFeatures = ["LiveAgent"];
      embedded_svc.settings.entryFeature = "LiveAgent";
      embedded_svc.init(
        options.chatOptions.snapInInitURL,
        options.chatOptions.snapInLAURL,
        gslbBaseURL,
        options.chatOptions.organizationId,
        options.chatOptions.componentName,
        { ...options.chatOptions.chatConfigValues }
      );
      embedded_svc.settings.prepopulatedPrechatFields = {
        FirstName: options.user.givenName,
        LastName: options.user.sn,
        Email: options.user.email,
        Primary_Phone__c: options.phone || "0000"
      };
    };
    initESW(null);
  };