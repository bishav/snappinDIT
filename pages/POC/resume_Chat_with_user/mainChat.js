﻿﻿<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style type='text/css'>
            
            
            
            @font-face {font-family: 'Salesforce Sans';src: url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff') format('woff'),url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.ttf') format('truetype');}
    </style>

</head>
<body>
    <nav class="navbar navbar-light bg-light">
            <span id="selectLanguage" style="float: right; display: block; margin-right:5px">
                <span style="background: #6c757d;color: #fff;width: 38px;height: 28px;padding: 2px 11px;border-radius: .25rem 0 0 .25rem;"><i class="fa fa-globe"></i></span>
                <select id="selectLanguageOption" style="margin-left: -5px;">
                    <option>en</option>
                    <option>de</option> 
                    <option>pt</option>
                    <option>cn</option>
                    <option>es</option>
                    <option>ko</option>
                    <option>ja</option>                  
                </select>
            </span>
        <a class="navbar-brand" href="#">
            <img src="assets/DellTech_Logo_Prm_Blue.jpg" class="d-inline-block align-top" alt="">
        </a>
    </nav>
    <div class="navigationLink">
                        <a class="active" href="#">Home</a>
                        <a href="pages/page2/index.html" target="_blank">Live Agent (In New Tab)</a>
                        <a href="pages/page3/index.html" >Resume Chat (In New Tab)</a>
    </div>
    <div class="container">
        <div class="resume-chat-msg hide">
            <div class="row">
                <div class="col-lg-12">
                    <div class="jumbotron">
                        <h1 class="display-4">Welcome Back</h1>
                    </div>
                </div>
                <div class="live-agent-resume-button hide">
                  <!--   <script type='text/javascript' src='https://c.la4-c1cs-phx.salesforceliveagent.com/content/g/js/51.0/deployment.js'></script>-->
            </div>
            </div>
            <div class="offline-msg hide">
                <!-- <p>Oh Sorry :(</p>
                <p>Looks like all agents are offline. Please come back some other time</p> -->
            </div>
        </div>
        <div class="new-chat">
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <form>
                        <div class="form-group">
                            <label for="serviceTag">Service Tag</label>
                            <input type="text" class="form-control"  id="serviceTag" aria-describedby="serviceTag" placeholder="Enter Service Tag">
                            <p>Based on asset warranty contact channel will be displayed</p>
                        </div>
                        <!-- <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="description-textarea" rows="5"></textarea>
                        </div> -->
                        <div class="dropdown hide">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Issue Type
                            </button>
                            <div id="issueDropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item dropdown-item1" href="#">Slow Performance</a>
                                <a class="dropdown-item dropdown-item2" href="#">Keyboard not working</a>
                                <a class="dropdown-item dropdown-item3" href="#">Touch pad not working</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div id="contact-row" class="row hide">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <h3 class="non-live-agent">Contact Options</h3>
                    <h3 class="live-agent-heading">Contact Options for Live Agent</h3>
                    <div class="call-us">
                        <h5>Call Us</h5>
                        <p class="phone-no">1-855-305-9057</p>
                        <p>24/7</p>
                        <p>Please Note: You will be asked to enter your Express Service Code: <strong>34285956052</strong></p>
                    </div>
                    <div class="chat-with-us">
                        <h5>Chat with us</h5>
                        <p>Start a chat session with one of our technical support experts.</p>
                        <button type="button" id="liveChatButton" class="btn btn-primary" onclick="initLiveChat()" style="display: block;float: left;margin-right: 20px;">Check LiveChat</button>
                        <div class="live-agent-button" style="float:left;">
                                <a id="liveagent_button_online_5730b000000GnqP" href="javascript://Chat" class="enabledButton btn btn-primary btn-block"  style="display: none;" onclick="liveagent.startChat('5730b000000GnqP')">Start Chat</a>
                                <div id="liveagent_button_offline_5730b000000GnqP" class="" style="display: none;" >Agent not Avilable</div> 
                                <!--<a id="" href="javascript://Chat" class="enabledButton btn btn-primary btn-block"  onclick="liveagent.startChat('5730b000000GnqP')">New Button</a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/popper.js/dist/umd/popper.min.js"></script>
    <script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script>
    <script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
    <!-- <script src="mainChatNowworking20180818V4.js"></script> -->
    <script src="mainChat.js"></script>
    <!-- <script src="mainChatPrePerf.js"></script>-->
     
     <!--<script src="sfdccore.js"></script>-->
      <!--<script src="sfdccore.js"></script> -->
     
    <script>
        var dropdownIssue = document.querySelectorAll('#issueDropdown > .dropdown-item');
        for (i = 0; i < dropdownIssue.length; i++) {
            dropdownIssue[i].addEventListener('click', function(e) {
            
                var val = e.target.outerText;

                if( val != 'Select Issue Type' ) {
                    document.querySelector('#dropdownMenuButton').innerHTML = val;
                    document.querySelector('#contact-row').classList.remove("hide");
                    
                        document.querySelector('.call-us').style.display = 'block';
                        document.querySelector('.live-agent-button').style.display = 'none';
                        document.querySelector('#selectLanguage').style.display = 'block';
                        document.querySelector('.non-live-agent').style.display = 'block';
                        document.querySelector('.live-agent-heading').style.display = 'none';
                }
            });
        }

        document.querySelector('.dropdown').classList.remove("hide");
        function showIssue() {
            if( document.querySelector('#serviceTag').value.length != 0 ) {

                document.querySelector('.dropdown').classList.remove("hide");
            } else {
                document.querySelector('.dropdown').classList.add("hide");
                document.querySelector('#contact-row').classList.add("hide");
               // document.querySelector('#dropdownMenuButton').text('Select Issue Type');
               document.querySelector('#dropdownMenuButton').text = 'Select Issue Type';
            }
        }
        triggerSnapin();

        function initLiveChat(){
            var serviceTag = document.querySelector('#serviceTag').value.toUpperCase();
            var issueVal = document.querySelector('#dropdownMenuButton').innerHTML;
            var liveAgentObject = {
            
               //Dev2
 /*              deploymentUrl: "https://c.la2-c2cs-iad.salesforceliveagent.com/content/g/js/45.0/deployment.js",
                liveAgentInitUrl: 'https://d.la2-c2cs-iad.salesforceliveagent.com/chat',
                buttonId: '5730b000000GnqQ',
                deploymentId: '5720b000000CbfS',
                organizationId: '00D2a0000008e0t',
                serviceTag: serviceTag,
                  firstName : "bisahv",
                  lastName : "lastName",
                  emailId : "bnr@dell.com",
                  phoneNumber : "12345",
                  issueType : issueVal,
                  issueDescription : "issueDescription" 
*/

//0302

                    deploymentUrl: "https://c.la4-c1cs-phx.salesforceliveagent.com/content/g/js/51.0/deployment.js",
                    liveAgentInitUrl: "https://d.la4-c1cs-phx.salesforceliveagent.com/chat",
                buttonId: '5730b000000GnqP',
                deploymentId: '5720b000000CbfS',//'5720b000000CbfS',//'5720b000000GneC',//
                organizationId: '00D290000001UqL',
                serviceTag: serviceTag,
                 firstName : "bisahv",
                  lastName : "lastName",
                  emailId : "bnr@dell.com",
                  phoneNumber : "12345",
                  issueType : issueVal,
                  issueDescription : "issueDescription" 
                

 /*

//SIT1
deploymentUrl: "https://c.la3-c2cs-dfw.salesforceliveagent.com/content/g/js/45.0/deployment.js",
                liveAgentInitUrl: 'https://d.la3-c2cs-dfw.salesforceliveagent.com/chat',
                buttonId: '5730b000000CbhT',
                deploymentId: '5720b000000CbfS',
                organizationId: '00D0j000000D0v9',
                serviceTag: serviceTag,
                  firstName : "bisahv",
                  lastName : "lastName",
                  emailId : "bnr@dell.com",
                  phoneNumber : "12345",
                  issueType : issueVal,
                  issueDescription : "issueDescription"



//DEV3
                deploymentUrl: 'https://c.la2-c2cs-iad.salesforceliveagent.com/content/g/js/45.0/deployment.js',
                liveAgentInitUrl: 'https://d.la2-c2cs-phx.salesforceliveagent.com/chat',
                buttonId: '5730b000000GnqQ',
                deploymentId: '5720b000000CbfS',
                organizationId: '00D2a0000008ftq',
                serviceTag: serviceTag,
                  firstName : "bisahv",
                  lastName : "lastName",
                  emailId : "bnr@dell.com",
                  phoneNumber : "12345",
                  issueType : issueVal,
                  issueDescription : "issueDescription"
                  */

                
                /*deploymentUrl: 'https://c.la2-c1cs-ord.salesforceliveagent.com/content/g/js/44.0/deployment.js',
                liveAgentInitUrl: 'https://d.la2-c1cs-ord.salesforceliveagent.com/chat',
                buttonId: '5734F0000008OhK',
                deploymentId: '5720b000000CbfS',
                organizationId: '00D4F0000008jtf',
                serviceTag: serviceTag*/
            }
            //initLiveAgent(liveAgentObject); 
            initLiveAgentWithoutPrechatForm(liveAgentObject,callYourFunction,agentOffline);
           // loading();
        }       
      function callYourFunction(){
         // alert('Online');
          document.querySelector('.live-agent-button').style.display  = 'block';
      }
      function agentOffline(){
        //alert('Offline');
        document.querySelector('.live-agent-button').style.display = 'block';
      }
       function dellmetricsTrack(elementId,Message){
           // alert("Element Id = "+elementId+" and Message is '"+Message+"'");
           if(Message)
				console.log("PropValue = "+elementId+": "+Message);
			else
                console.log("PropValue = "+elementId);
        }
    </script>    
</body>
</html>
