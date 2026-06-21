var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "XPERTS 2023 Lab Guide Written by Consulting Security Engineers: James Hilving and Dylan Spille",
    "description": "Review the capabilities of the FortiSOAR platform and how it can benefit your business",
    "tags": [],
    "title": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "uri": "./index.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup",
    "content": "In this section we’ll navigate to FortiSOAR and login\nNavigate to FortiSOAR using the HTTPS button\nEnter the user/password of csadmin/$3curityFabric and click Login",
    "description": "In this section we’ll navigate to FortiSOAR and login\nNavigate to FortiSOAR using the HTTPS button\nEnter the user/password of csadmin/$3curityFabric and click Login",
    "tags": [],
    "title": "Login to FortiSOAR",
    "uri": "03_chapter_fsr_ovw_setup/00-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Configure Data Ingestion",
    "content": "In this section we prep the FortiAnalyzer to receive logs from the Enterprise Core FortiGate\nAccess the FortiAnalyzer by clicking on the Enterprise FortiAnalyzer HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14003/ Sign in with fortinet/$3curityFabric Go to Device Manager\u003e Unauthorized Devices Select the Enterprise_Core FortiGate by checking the box or right clicking, and click the Authorize Button Click the OK button on the popup to confirm the authorization.",
    "description": "In this section we prep the FortiAnalyzer to receive logs from the Enterprise Core FortiGate\nAccess the FortiAnalyzer by clicking on the Enterprise FortiAnalyzer HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14003/ Sign in with fortinet/$3curityFabric Go to Device Manager\u003e Unauthorized Devices Select the Enterprise_Core FortiGate by checking the box or right clicking, and click the Authorize Button Click the OK button on the popup to confirm the authorization.",
    "tags": [],
    "title": "Authorize the FortiGate on FortiAnalyzer",
    "uri": "06_chap_config_dataing/00-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  External Requirements",
    "content": "File hosting has been transitioned away from Egnyte to self hosted. For your convience, all of the files you’ll need will be available as a zip file called all_files.zip. Please download this file and unzip it ONCE.\nWarning Do not unzip the files INSIDE the zip file.\nClick the button to download the files Download Files\nUnzip the all_files.zip file\nWhen you are done, you should have a folder called all_files with the following contents:\nall_files ├── FOS_ZTP_Helpers.zip ├── FortiSOAR-SE_Training2023-PolicyModule.zip ├── FortiSOAR-SE_Training2023-Workshop.zip ├── OT_Collection.json └── fortisoar-workshop-fortimail-users.csv",
    "description": "File hosting has been transitioned away from Egnyte to self hosted. For your convience, all of the files you’ll need will be available as a zip file called all_files.zip. Please download this file and unzip it ONCE.\nWarning Do not unzip the files INSIDE the zip file.\nClick the button to download the files Download Files",
    "tags": [],
    "title": "Download Files",
    "uri": "02_chapter_ext_reqts/01-download-files.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Build a Custom Module",
    "content": "Locate the FortiSOAR-SE_Training2023-PolicyModule.zip file that is in your downloaded all_files folder. This is a solution that we can import into your FortiSOAR instance to handle our policy management use case.\nNavigate to System Settings (Gear Icon at the top right). Scroll on the left pane to the bottom and click Import Wizard. Click Import from File. Click into the dashed box to open the file explorer or drag the file FortiSOAR-SE_Training2023-PolicyModule.zip into the upload box. Click at the bottom right until you can click Click “I have reviewed the changes – Publish”. Wait for the import to finish",
    "description": "Locate the FortiSOAR-SE_Training2023-PolicyModule.zip file that is in your downloaded all_files folder. This is a solution that we can import into your FortiSOAR instance to handle our policy management use case.\nNavigate to System Settings (Gear Icon at the top right). Scroll on the left pane to the bottom and click Import Wizard.",
    "tags": [],
    "title": "IMPORT THE SOLUTION MODULE(S) WITH PLAYBOOKS",
    "uri": "08_chap_buildmod/01-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup",
    "content": "In this section we’ll explore the Incident Response modules of the system. Click around and checkout the record types inside this record group. Feel free to click: to see what fields are used for records of the different modules. You can create records and delete records to just get a feel for the system if you like.\nThe Incident Response Group is where we will find records that are often used in SOC operations. We have provided a breakdown of what each module’s purpose is.\nModule Name Description Alerts Actionable items commonly used for ingestion from other systems. Often contains information that can become indicators that are used to correlate common problems. Incidents Incidents are confirmed impacts from one or more alerts. Tasks Tasks are simply a place to store actionable items for individuals or bots and can be related to any other record. Indicators Indicators, sometimes related to confirmed compromise IOCs, are often extracted from alerts. These can often be created from Alerts or Hunts and then used to correlate commonly known problems. Campaigns Often a collection of incidents that have been isolated back to the same Bad Actor. Hunts A record to kick off an initiative to hunt for problems and then correlate to existing or not found alerts and indicators. War Rooms A place to kick off an official communication channel to stakeholders in an incident. Communications Module to track external communications with third party chats, emails, etc.",
    "description": "In this section we’ll explore the Incident Response modules of the system. Click around and checkout the record types inside this record group. Feel free to click: to see what fields are used for records of the different modules. You can create records and delete records to just get a feel for the system if you like.",
    "tags": [],
    "title": "Incident Response",
    "uri": "03_chapter_fsr_ovw_setup/01-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Analyzing Emails",
    "content": "To use this Solution Pack we need to install it (If not already installed). Use the Content Hub and the Discover Tab to accomplish this task.\nGo to Automation \u003e Connectors OR just Find the Content Hub directly. Select the Solution Packs Content Type checkbox, if it’s not already selected Search for “phishing” inside the Discover Tab. Open the Solution Pack “Phishing Email Response” and install it You should see that the installation was successful.",
    "description": "To use this Solution Pack we need to install it (If not already installed). Use the Content Hub and the Discover Tab to accomplish this task.\nGo to Automation \u003e Connectors OR just Find the Content Hub directly. Select the Solution Packs Content Type checkbox, if it’s not already selected Search for “phishing” inside the Discover Tab. Open the Solution Pack “Phishing Email Response” and install it You should see that the installation was successful.",
    "tags": [],
    "title": "Install Scenario for Email Phishing Test",
    "uri": "04_chap_fsrfromuserpers/01-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  External Requirements",
    "content": "In this workshop we will use FortiMail as our SMTP server.\nAccess the FortiMail admin access by clicking on the “Corporate FortiMail” HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14001/admin/ Login with user/pass: fortinet/$3curityFabric Locate the fortisoar-workshop-fortimail-users.csv file that is in your downloaded all_files folder\nNavigate to the Domain \u0026 User \u003e User section and import the fortisoar-workshop-fortimail-users.csv file by clicking Import CSV and uploading the file Note You should now have FortiSOAR users in FortiMail. If you do not, you may need to refresh (F5) the page.",
    "description": "In this workshop we will use FortiMail as our SMTP server.\nAccess the FortiMail admin access by clicking on the “Corporate FortiMail” HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14001/admin/ Login with user/pass: fortinet/$3curityFabric Locate the fortisoar-workshop-fortimail-users.csv file that is in your downloaded all_files folder",
    "tags": [],
    "title": "Setup FortiMail",
    "uri": "02_chapter_ext_reqts/01-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Configure Data Ingestion",
    "content": "Access the FortiGate by clicking on the Enterprise_Core HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14002/ Sign in with fortinet/$3curityFabric\nAccess the integrated ssh via the button at the top right. Run the command “diagnose log test” in the CLI console. This will kick off some test events from the FG and will show up. Run the command about 3x in a row to generate more logs.",
    "description": "Access the FortiGate by clicking on the Enterprise_Core HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14002/ Sign in with fortinet/$3curityFabric\nAccess the integrated ssh via the button at the top right. Run the command “diagnose log test” in the CLI console. This will kick off some test events from the FG and will show up. Run the command about 3x in a row to generate more logs.",
    "tags": [],
    "title": "TRIGGER SOME LOGS FROM THE FGT",
    "uri": "06_chap_config_dataing/01-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Hunting IOCs",
    "content": "The solution pack we want to install is called Sunburst Attack\nOn the left Navigation Pane, go to Content Hub. In the Discover Tab search for Sunburst Attack. Open the Sunburst Attack Solution Pack.\nOn the right pane, Click the install icon - - to install the Solution Pack\nWait for the solution pack to finish installing\nYou should have version 1.0.1.",
    "description": "The solution pack we want to install is called Sunburst Attack\nOn the left Navigation Pane, go to Content Hub. In the Discover Tab search for Sunburst Attack. Open the Sunburst Attack Solution Pack.\nOn the right pane, Click the install icon - - to install the Solution Pack",
    "tags": [],
    "title": "Install Scenario Simulation",
    "uri": "05_chap_fsr_huntingiocs/01-pagedraft.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Configure Data Ingestion",
    "content": "We want to make sure that the FAZ has some events. These are events that we want to be handled via FortiSOAR to turn into to You should see new events last updated “A few seconds ago”.\nAccess the FortiAnalyzer by clicking on the Enterprise FortiAnalyzer HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14003/ . Sign in with fortinet/$3curityFabric Go to Incidents \u0026 Events \u003e Events Monitor Confirm you see botnet events created with Medium or High Severity Note Events may take a few minutes to appear.",
    "description": "We want to make sure that the FAZ has some events. These are events that we want to be handled via FortiSOAR to turn into to You should see new events last updated “A few seconds ago”.\nAccess the FortiAnalyzer by clicking on the Enterprise FortiAnalyzer HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14003/ . Sign in with fortinet/$3curityFabric Go to Incidents \u0026 Events \u003e Events Monitor Confirm you see botnet events created with Medium or High Severity Note Events may take a few minutes to appear.",
    "tags": [],
    "title": "CONFIRM FORTIANALYZER HAS EVENTS",
    "uri": "06_chap_config_dataing/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Hunting IOCs",
    "content": "We first want to create a Hunt record that will be used to “Hunt” for IOCs related to the Sunburst Attack. Obviously hunting can be for any objective but in this section we will simulate a hunt for known Sunburst attack indicators.\nGo to the Incident Response\u003eAlerts module \u0026 click the Simulate Scenario Select Sunburst Attack IOC Hunt and Start Scenario If you do not see a pop-up then look for the manual input indicator on the upper right hand corner. You can use the default range here. Click the Submit button",
    "description": "We first want to create a Hunt record that will be used to “Hunt” for IOCs related to the Sunburst Attack. Obviously hunting can be for any objective but in this section we will simulate a hunt for known Sunburst attack indicators.\nGo to the Incident Response\u003eAlerts module \u0026 click the Simulate Scenario",
    "tags": [],
    "title": "CREATE A NEW IOC HUNT USING THE SIMULATOR",
    "uri": "05_chap_fsr_huntingiocs/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Analyzing Emails",
    "content": "We can now use the scenario generator to create a phishing email alert that needs to be handled as a SOC User.\nNavigate to Incident Response \u003e Alerts and click the “Simulate Scenario” button. Select the “Phishing Email” Scenario and Start the Scenario. The Alert might come in as Medium at first and then will elevate to Critical. This is because a linked indicator was found to be malicious. We don’t have much time to meet our SLA! Move to the next step ASAP! Don’t worry if you miss your SLA nothing bad happens…unless you’re running in a much more immersive workshop and have a lab manager too. 😉",
    "description": "We can now use the scenario generator to create a phishing email alert that needs to be handled as a SOC User.\nNavigate to Incident Response \u003e Alerts and click the “Simulate Scenario” button. Select the “Phishing Email” Scenario and Start the Scenario. The Alert might come in as Medium at first and then will elevate to Critical. This is because a linked indicator was found to be malicious. We don’t have much time to meet our SLA! Move to the next step ASAP! Don’t worry if you miss your SLA nothing bad happens…unless you’re running in a much more immersive workshop and have a lab manager too. 😉",
    "tags": [],
    "title": "Create a New Email Phishing Alert",
    "uri": "04_chap_fsrfromuserpers/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  External Requirements",
    "content": "In this workshop we have playbooks that will leverage external accounts that we can get started for free. Proceed to the respective websites below and if you don’t have an account create one, and then retrieve your API Key if you do not have one.\nVIRUSTOTAL Visit VirusTotal and create a free account if you don’t have one.\nUnder your profile (at the top right), click the API Key option Copy and Save your API Key. IPQUALITYSCORE Visit IP Quality Score and create a free account if you don’t already have one.\nSign in to IP Quality Score. On the left pane navigate to Settings \u0026 Account Management \u003e Account Settings. Under Account Information find your API Key Copy and Save your API Key.\nCopy and Save your API Key.",
    "description": "In this workshop we have playbooks that will leverage external accounts that we can get started for free. Proceed to the respective websites below and if you don’t have an account create one, and then retrieve your API Key if you do not have one.\nVIRUSTOTAL Visit VirusTotal and create a free account if you don’t have one.\nUnder your profile (at the top right), click the API Key option",
    "tags": [],
    "title": "External Accounts",
    "uri": "02_chapter_ext_reqts/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  ZTP Overview",
    "content": "In this section we’ll explore the FortiManager ZTP modules on the system. Click around and checkout the record types inside the group. Feel free to click: to see what fields are used for records of the different modules. You can create records and delete records to just get a feel for the system if you like.\nThe FortiManager Group is where we will find records that are used for FortiManager Zero Touch Provisioning. We have provided a breakdown of what each module’s purpose is.\nModule Name Description Managers Manager records define the FortiManagers, and the current firmware and status, used in your solution. Use this module to start the integration and/or simply report on the current status of your FortiManagers. Devices Devices are synchronized from the FortiManager and stored in FortiSOAR. Then automation can occur on one or more devices based on operations and workflow needs. Once created in FortiSOAR they are not removed to preserve the last known status of the Device record even if the device has been removed, or moved, from your FortiManager. Metafield Templates Managing metafields is crucial to the success of any network deployment and provisioning. Metafield Templates can be used to prompt required users to respond to unknown, but required, fields before deployment. Templates can be used to integrate external systems and retrieve key data requirements before deployment. Templates can be customized to create dynamic metadata based on a wide range of advanced and complex requirements. Metadata inside FortiSOAR can be exported to FortiManager to be used by already existing solutions with minimal effort. Script Templates Scripts in FortiSOAR for this Solution Pack can be used for creating customized FortiManager CLI, Device DB, Policy DB, and/or TCL Scripts per device. Scripts in FortiSOAR can also maintain and create Provisioning CLI Templates in FortiManager such as when new ADOMs are created and need to be setup with Templates. Device reporting scripts can also be used to create a custom dashboard with user defined content. ZTP Profiles The ZTP Profiles module describes how to handle the provisioning of each device maintained by the respective FortiManager. As a device shows up in the FortiManager Device DB, unauthorized or modeled, when ZTP Profiles are assigned to those devices the defined device templates and provisioning steps are applied and reported per device. ZTP Profiles can be assigned on demand or automatically assigned when devices are created in FortiManager regardless of how the devices were created. On the Managers Module you will see a clickable navigation menu that can take you to different modules or Dashboards. The navigation is there to reduce the number of clicks to navigate to different modules. The navigation menu is also available on the other modules.",
    "description": "In this section we’ll explore the FortiManager ZTP modules on the system. Click around and checkout the record types inside the group. Feel free to click: to see what fields are used for records of the different modules. You can create records and delete records to just get a feel for the system if you like.",
    "tags": [],
    "title": "FortiSOAR FortiManager Modules",
    "uri": "07_chap_ztp/01-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "A. Lab Guide Notes Exploring vs Tasks This lab guide will walk you through some basic use cases with FortiSOAR. There will be sections that only focus on exploring and others that focus on actual tasks that need to be completed. Look for the icons below to help you understand when you will be expected to make changes.\nExploring Tasks Bonus Points 💸 Scattered throughout the lab you will find various Bonus Points activities. These extra challenges are not required for completing any task in this workshop, but doing so will help solidify your understanding of the inner workings of FortiSOAR.\nB. REVIEW AND ACCESS TO THE LAB The FortiDemo-FortiSOAR-7.4.1-GA demo is hosted by Fortinet inside FNDN. Note the devices and credentials below. You will need these to complete the lab.\nDevice Name IP User/Password Enterprise_Core 10.100.88.1 fortinet/$3curityFabric FortiAnalyzer 10.100.88.2 fortinet/$3curityFabric FortiSOAR 10.100.88.3 csadmin/$3curityFabric FortiMail 10.100.88.4 fortinet/$3curityFabric Branch1 10.100.88.8 admin/$3curityFabric Branch2 10.100.88.9 admin/$3curityFabric FortiManager 10.100.88.10 admin/$3curityFabric",
    "description": "A. Lab Guide Notes Exploring vs Tasks This lab guide will walk you through some basic use cases with FortiSOAR. There will be sections that only focus on exploring and others that focus on actual tasks that need to be completed. Look for the icons below to help you understand when you will be expected to make changes.\nExploring Tasks Bonus Points 💸 Scattered throughout the lab you will find various Bonus Points activities. These extra challenges are not required for completing any task in this workshop, but doing so will help solidify your understanding of the inner workings of FortiSOAR.",
    "tags": [],
    "title": "Getting Started with your Lab",
    "uri": "01_chapter_gettingstarted.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup",
    "content": "Now we’ll explore the Resource modules of the system. Click around and checkout the record types inside this record group. Feel free to click: to see what fields are used for records of the different modules. You can create records and delete records to just get a feel for the system if you like.\nThe Resources Group is where records that could be known assets, documents, and/or email templates are stored. Module Name Description Attachments A module for storing documents of multiple types. Email Templates Email Templates used by the system or other forms of communication. Assets An index of assets that can store a variety of hardware or software assets known to the organization. Could be used in many business operations. Key Store A module for storing arbitrary keys and values",
    "description": "Now we’ll explore the Resource modules of the system. Click around and checkout the record types inside this record group. Feel free to click: to see what fields are used for records of the different modules. You can create records and delete records to just get a feel for the system if you like.",
    "tags": [],
    "title": "Resources",
    "uri": "03_chapter_fsr_ovw_setup/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Build a Custom Module",
    "content": "Navigate to the newly imported policies Module found under Resources \u003e Policies. Policy Records will be created in this module later in the workshop by running an automation playbook to extract policies from the FortiGate configuration. The Module configuration can be seen in System Settings\u003eApplication Editor\u003e Modules\u003ePolicies. This is how we build what fields a record inside a module will store. Go to the Dashboards page from the left Navigation Pane and open the SOC Review Dashboard.\nThis is the dashboard you will use to manage policies populated from your FortiGate config.",
    "description": "Navigate to the newly imported policies Module found under Resources \u003e Policies. Policy Records will be created in this module later in the workshop by running an automation playbook to extract policies from the FortiGate configuration. The Module configuration can be seen in System Settings\u003eApplication Editor\u003e Modules\u003ePolicies. This is how we build what fields a record inside a module will store.",
    "tags": [],
    "title": "REVIEW THE POLICIES MODULE CREATED FROM THE IMPORT",
    "uri": "08_chap_buildmod/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  OT Isolation",
    "content": "We are going to leverage another solution pack here to demonstrate an OT Use case. Imagine a scenario where you are a network supervisor for We want to install a FortiSOAR communications if not already setup. If this is already setup or you are in an environment with different mail server options then you can just use this as a review to your communication configuration.\nInstall Solution Pack On the left Navigation Pane, go to Content Hub. In the Discover Tab search for OT - Asset Management. Tip The Content Hub has a minimum requirement of 3 characters so make sure to not only type “OT”\nOpen the OT - Asset Management Solution Pack.\nOn the right pane, Click the install icon - - to install the Solution Pack. Click the Confirm button if there is a popup to confirm the installation\nWait for the solution pack to finish installing\nNote This solution pack has 4 dependencies. Solution packs often build upon other solution packs for increased functionality.\nOnce the installation is complete you’ll see the Solution pack has a green checkmark at the corner",
    "description": "We are going to leverage another solution pack here to demonstrate an OT Use case. Imagine a scenario where you are a network supervisor for We want to install a FortiSOAR communications if not already setup. If this is already setup or you are in an environment with different mail server options then you can just use this as a review to your communication configuration.",
    "tags": [],
    "title": "Setup FSR OT Asset Management Solution Pack",
    "uri": "09_chap_ot_isolation/01-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup",
    "content": "Finally, we’ll explore the Automation modules of the system. Click around and check out the record types inside this record group. Module Name Description Playbooks The playbooks module is where all the automation actions are hosted. Connectors Also known as the Content Hub. Connectors are what playbooks use to build steps in a workflow. Those steps can connect to external or internal resources. Data Ingestion Data Ingestion is specific playbooks designed to fetch and handle data from external resources (like logging, SIEM, ticketing, etc…) Schedules The schedule resource is where you define what playbooks need to run SLA Templates SLA Templates are used in defining when records need to be acknowledged and responded, based on record state, and the timers are based on the record severity.",
    "description": "Finally, we’ll explore the Automation modules of the system. Click around and check out the record types inside this record group. Module Name Description Playbooks The playbooks module is where all the automation actions are hosted. Connectors Also known as the Content Hub. Connectors are what playbooks use to build steps in a workflow. Those steps can connect to external or internal resources. Data Ingestion Data Ingestion is specific playbooks designed to fetch and handle data from external resources (like logging, SIEM, ticketing, etc…) Schedules The schedule resource is where you define what playbooks need to run SLA Templates SLA Templates are used in defining when records need to be acknowledged and responded, based on record state, and the timers are based on the record severity.",
    "tags": [],
    "title": "Automation",
    "uri": "03_chapter_fsr_ovw_setup/03-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Configure Data Ingestion",
    "content": "In this section we will configure FortiSOAR to retrieve FortiAnalyzer events.\nGo to the Data Ingestion module inside the Automation group. Look for the FortiAnalyzer Connector. This was setup by default in the lab but comes from configuring the FortiAnalyzer Connector Config.\nClick the 1 Configuration Available dropdown. Click on the Configure Ingestion link. We need to fetch some data to see what the data looks like. You can tweak how you pull the sample data. Increased it to 60 minutes to make sure you get a good sample\nThe example data needs to be mapped to FortiSOAR fields for creating records. Some defaults have been applied but we can change this. Click into the Name field and change it to include the devicename and subject of the event. Then Save the Mapping \u0026 Continue.\nSchedule the fetch to run every 15 minutes and limit the execution to one active instance at a time. Change the hour from “0”, shown in this picture to “*” to be every 15 minutes. Then Save Settings \u0026 Continue. Click the Trigger Ingestion Now button to kick off the playbook.",
    "description": "In this section we will configure FortiSOAR to retrieve FortiAnalyzer events.\nGo to the Data Ingestion module inside the Automation group. Look for the FortiAnalyzer Connector. This was setup by default in the lab but comes from configuring the FortiAnalyzer Connector Config.\nClick the 1 Configuration Available dropdown.",
    "tags": [],
    "title": "CONFIGURE FORTISOAR FOR DATA INGESTION",
    "uri": "06_chap_config_dataing/03-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Build a Custom Module",
    "content": "We want to create a new API Admin, called “fortisoar” to use the Fortigate API and extract existing policies from the configuration\nAccess the FortiGate by clicking on the Enterprise_Core HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14002/ Navigate to System \u003e Administrators\nCreate a New Rest API Admin, called “fortisoar”, in your Enterprise_Core FortiGate, using the Administrator profile of api_full and hit OK to get your API Key. Save Your New API Key to be used in a FortiSOAR connector config. Back to FortiSOAR, go to Automation\u003eConnectors\u003eManage and search for “FortiGate” and open the “Fortinet FortiGate Custom” connector. Make sure the hostname matches “10.100.88.1“ and click Set API Key to set the Key you obtained for the “fortisoar” API user from the FortiGate.\nAfter you save you should see a successful status message.",
    "description": "We want to create a new API Admin, called “fortisoar” to use the Fortigate API and extract existing policies from the configuration\nAccess the FortiGate by clicking on the Enterprise_Core HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14002/ Navigate to System \u003e Administrators\nCreate a New Rest API Admin, called “fortisoar”, in your Enterprise_Core FortiGate, using the Administrator profile of api_full and hit OK to get your API Key.",
    "tags": [],
    "title": "CREATE AN API ACCOUNT ON THE FORTIGATE",
    "uri": "08_chap_buildmod/03-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Hunting IOCs",
    "content": "Now that we have a Hunt record in this use case we need to create indicators related to our hunt. These indicators can be found in this github link. We want to create an indicator for each of these and then confirm the reputation from a third party threat intelligence.\nWe will use the playbook called Sunburst IOC Hunt available on this Hunt record we created to perform this task.\nGo to the Incident Response \u003e Hunts module. Open the Demo Hunt – Sunburst Attack record. At the bottom of the record execute the Sunburst IOC Hunt playbook. This will kickoff the process to extract the IOC objects from the ioc.csv file.",
    "description": "Now that we have a Hunt record in this use case we need to create indicators related to our hunt. These indicators can be found in this github link. We want to create an indicator for each of these and then confirm the reputation from a third party threat intelligence.\nWe will use the playbook called Sunburst IOC Hunt available on this Hunt record we created to perform this task.",
    "tags": [],
    "title": "DOWNLOAD AND CREATE A LIST OF POTENTIAL INDICATORS FROM OUR HUNT",
    "uri": "05_chap_fsr_huntingiocs/03-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Analyzing Emails",
    "content": "All operational teams work off standard KPIs and “time to acknowledge a problem” is a common one. Inside the FortiSOAR framework we distinguish time to acknowledge an alert by leveraging the status of the alert.\nOpen the new Alert named “Suspicious Email: Urgent: Requesting CEO Level Demo Environment”. On the right hand corner of the alert we can see “Time Remaining to Ack”. Change the status of this alert to Investigating. After a moment you should see the Ack SLA change to Met (if you hit it in time). This can later be used in reporting to see if your team is meeting expectations.",
    "description": "All operational teams work off standard KPIs and “time to acknowledge a problem” is a common one. Inside the FortiSOAR framework we distinguish time to acknowledge an alert by leveraging the status of the alert.\nOpen the new Alert named “Suspicious Email: Urgent: Requesting CEO Level Demo Environment”. On the right hand corner of the alert we can see “Time Remaining to Ack”. Change the status of this alert to Investigating. After a moment you should see the Ack SLA change to Met (if you hit it in time). This can later be used in reporting to see if your team is meeting expectations.",
    "tags": [],
    "title": "Open the Alert and Meet the SLA to Acknowledge",
    "uri": "04_chap_fsrfromuserpers/03-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Configure Data Ingestion",
    "content": "Now that we have Alerts in FortiSOAR we could start working these using our standard operation flow.\nBonus Points 💸 Assign 2-3 of these alerts to SocUser2 by clicking the check box on those alerts, and then Reassign to SocUser2. Login to that users email on FortiMail and confirm the alert notifications were sent to the user. Meet the SLA by closing those alerts as false positives.",
    "description": "Now that we have Alerts in FortiSOAR we could start working these using our standard operation flow.\nBonus Points 💸 Assign 2-3 of these alerts to SocUser2 by clicking the check box on those alerts, and then Reassign to SocUser2. Login to that users email on FortiMail and confirm the alert notifications were sent to the user. Meet the SLA by closing those alerts as false positives.",
    "tags": [],
    "title": "CONFIRM ALERTS ARE CREATED FROM FORTIANALYZER EVENTS",
    "uri": "06_chap_config_dataing/04-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  OT Isolation",
    "content": "The OT - Asset Management Solution pack installs more scenarios for us to try out. Feel free to check out the documentation link for the solution pack which leads to FortiSOAR’s Github page to see the full potential of this pack. Run an OT Scenario This scenario generates 87 IT/OT assets as per the Purdue model based on various criticality levels, types, and other asset categorizations as sample data. To run this scenario and generate the assets, perform the following steps\nUnder FortiSOAR’s left navigation panel, select the Simulations entry. Select the checkbox on the OT - Add Sample Assets Scenario Record.\nClick Simulate Scenario. To view the added sample assets, hover over Resources under the FortiSOAR’s left navigation panel, and select Assets Confirm you see new Asset records in the module Note Do not proceed to the next section until the assets are done creating. It may take around a minute for the simulation to complete.",
    "description": "The OT - Asset Management Solution pack installs more scenarios for us to try out. Feel free to check out the documentation link for the solution pack which leads to FortiSOAR’s Github page to see the full potential of this pack. Run an OT Scenario This scenario generates 87 IT/OT assets as per the Purdue model based on various criticality levels, types, and other asset categorizations as sample data. To run this scenario and generate the assets, perform the following steps",
    "tags": [],
    "title": "Run a Scenario to Create Assets",
    "uri": "09_chap_ot_isolation/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "In this workshop we will be depending on some accounts to exist in other systems. We will configure accounts in FortiMail for the SMTP Server inside FortiSOAR. We will also leverage external resources for threat intelligence with VirusTotal and IPQualityScore for FortiSOAR Connectors used in playbooks. This will be used during the Indicator Enrichment process.\nFortiSOAR Virus Total Connector FortiSOAR IP Quality Score Connector Objectives Configure the FortiMail Instance Establish External Accounts and Settings Time to Complete Estimated: 30 Minutes",
    "description": "In this workshop we will be depending on some accounts to exist in other systems. We will configure accounts in FortiMail for the SMTP Server inside FortiSOAR. We will also leverage external resources for threat intelligence with VirusTotal and IPQualityScore for FortiSOAR Connectors used in playbooks. This will be used during the Indicator Enrichment process.\nFortiSOAR Virus Total Connector FortiSOAR IP Quality Score Connector Objectives Configure the FortiMail Instance Establish External Accounts and Settings Time to Complete Estimated: 30 Minutes",
    "tags": [],
    "title": "External Steps Needed for this Lab",
    "uri": "02_chapter_ext_reqts.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Hunting IOCs",
    "content": "Inside the Hunt Record, Demo Hunt – Sunburst Attack, look to the upper right corner and find the playbook logs icon. This will open the playbook history for this record. Find the playbook named Hunt Sunburst IOCs and open it.\nLook at the Configuration step. The OUTPUT set the variable called sunburstIocUrls to the URL we will use to download the CSV file. The next step, Download IOCs CSV File, has an input configuration to loop on the variable sunburst_ioc_urls. Click the Edit Playbook button on the upper right hand corner of the playbook log. Double-click on the Download IOCs CSV File step and find the loop configuration.\nClose the previous step and double-click on the Configuration step and find the configuration settings.",
    "description": "Inside the Hunt Record, Demo Hunt – Sunburst Attack, look to the upper right corner and find the playbook logs icon. This will open the playbook history for this record. Find the playbook named Hunt Sunburst IOCs and open it.\nLook at the Configuration step. The OUTPUT set the variable called sunburstIocUrls to the URL we will use to download the CSV file.",
    "tags": [],
    "title": "LOOK AT THE PLAYBOOK WE ARE RUNNING TO HANDLE THE IOC HUNT",
    "uri": "05_chap_fsr_huntingiocs/04-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Build a Custom Module",
    "content": "We now have a new module to store policy information and the ability to connect with the FortiGate API. The next step is to extract polices as records from the FortiGate configuration to then be audited during a SOC Policy Review.\nInside Resources\u003ePolicies click on the Execute button and run the playbook called Import FortiGate Policies. When complete you should have new Policy records added to your Policies module that match your FortiGate Config.",
    "description": "We now have a new module to store policy information and the ability to connect with the FortiGate API. The next step is to extract polices as records from the FortiGate configuration to then be audited during a SOC Policy Review.\nInside Resources\u003ePolicies click on the Execute button and run the playbook called Import FortiGate Policies.",
    "tags": [],
    "title": "IMPORT POLICIES FROM THE FORTIGATE CONFIG",
    "uri": "08_chap_buildmod/04-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup",
    "content": "Locate the FortiSOAR-SE_Training2023-Workshop.zip file that is in your downloaded all_files folder. This file conatins the FortiSOAR Workshop systems settings. One powerful feature with FortiSOAR is that you can craft up solutions and selectively share your solutions via the Import/Export wizard, found in the System Settings (Gear icon in the top right of the screen). Import/Export options are then at the bottom of the list. Note The configurations being imported here may vary as updates to the ZIP can be made after creating this workshop document. Do not worry if your configurations being imported to not match the screenshots below exactly\nGo to System \u003e Application Editor\u003e Import Wizard and import the file FortiSOAR-SE_Training2023-Workshop.zip by clicking Import from File Leave all the default settings and import all the components in the file and click twice Click Run Import to import the configuration\nThe import should complete without error. Bonus Points 💸 Go to System \u003e Application Editor\u003e Export Wizard Create your own Export Template to export any settings of your choosing",
    "description": "Locate the FortiSOAR-SE_Training2023-Workshop.zip file that is in your downloaded all_files folder. This file conatins the FortiSOAR Workshop systems settings. One powerful feature with FortiSOAR is that you can craft up solutions and selectively share your solutions via the Import/Export wizard, found in the System Settings (Gear icon in the top right of the screen). Import/Export options are then at the bottom of the list. Note The configurations being imported here may vary as updates to the ZIP can be made after creating this workshop document. Do not worry if your configurations being imported to not match the screenshots below exactly",
    "tags": [],
    "title": "Import Workshop System Settings",
    "uri": "03_chapter_fsr_ovw_setup/04-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  ZTP Overview",
    "content": "Now that you have a foundational grasp of Zero Touch Provisioning (ZTP) and are familiar with the purpose and location of the FortiSOAR ZTP modules, let’s delve into a more detailed discussion of the ZTP Phases. When implementing ZTP, there are distinct categories of tasks that must be accomplished. These tasks are organized into specific phases. The ZTP Phases within FortiSOAR outline what steps a ZTP Profile will take when provisioning a device. The ZTP Phases are as follows:\nAuthorization\nIn this phase, authorization of the device is conducted as necessary. If the device is already modeled, we proceed to the subsequent step. In cases where the ADOM (Administrative Domain) is not set, it is assumed to be at the root level. Device Metadata\nThe Device Metadata phase involves managing device-specific information. This includes the important aspect of notifying users when essential data is missing. Device Groups\nIn the Device Groups phase, the device is added to the appropriate device groups as defined within the ZTP Profile and/or the Device Metadata. Execution of Linked Scripts\nDuring this phase, all scripts associated with the device record are executed. It’s worth noting that these scripts are not unlinked, but ZTP Profiles can clear linked scripts to avoid redundantly running scripts that should only be executed once. Installation of Device Configuration\nIn this phase, the device’s configuration is installed from the FortiManager (FMG) API. Installation of Policy Package\nThe Installation of the Policy Package phase involves installing the policy package from the FMG API. The specific Policy Package name can be derived from the Device Metadata, the ZTP Profile, or, by default, it is based on the Device Name from the Device Record. Completion\nThis final phase signifies the conclusion of the ZTP process, marking it as complete. These ZTP phases are essential components of the ZTP framework, ensuring a well-structured and methodical approach to device provisioning and configuration management.",
    "description": "Now that you have a foundational grasp of Zero Touch Provisioning (ZTP) and are familiar with the purpose and location of the FortiSOAR ZTP modules, let’s delve into a more detailed discussion of the ZTP Phases. When implementing ZTP, there are distinct categories of tasks that must be accomplished. These tasks are organized into specific phases.",
    "tags": [],
    "title": "ZTP Phases",
    "uri": "07_chap_ztp/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Build a Custom Module",
    "content": "The goal of this section is to complete an audit of the firewall policy and deny a policy. The next steps on removing the policy from the network would depend on other business requirements as our objective is simply to perform an audit.\nInside Resources\u003ePolices click on secops-to-dmz to open the policy record. At the bottom of the page, click the blue Execute button, then click “Start Policy Audit”. You will see a Manual Input Box appear.\nClick on the Next Steps field dropdown (sometimes called a picklist), and you will see 3 options. Select Mark as Denied and enter “This should not be allowed” in the Comments field. Click Submit. Check the Execution History for this policy by clicking on the icon at the top right. You will see all of the playbooks that have executed on this specific record. Wait for the playbook “\u003e Update comments on the FortiGate” to complete. (you’re looking for a green check box to the right). In the FortiGate config we can see that we updated the policy with a comment. (You may need to modify the heading layout of your firewall policy screen to see the comments column).",
    "description": "The goal of this section is to complete an audit of the firewall policy and deny a policy. The next steps on removing the policy from the network would depend on other business requirements as our objective is simply to perform an audit.\nInside Resources\u003ePolices click on secops-to-dmz to open the policy record.",
    "tags": [],
    "title": "USE THE POLICY MODULE TO AUDIT AND DENY A FIREWALL POLICY",
    "uri": "08_chap_buildmod/05-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Analyzing Emails",
    "content": "In this Alert we can see that we obtained an email and extracted various “indicators” and created a separate Indicator record for each. Now that this has been done we can see the linked indicators towards the bottom of the Alert record.\nInside the Alert, navigate to the bottom of the record and look for the Indicators tab. Find the URL Type Indicator named http://demo.gumblar.cn/ and drill into this record. Note Notice that when inside an indicator record from the alert record we see “Alert -\u003e Indicator” as our path at the top. This can be used to help navigate you back to the original alert which would be “less clicks” than closing out the window and finding the alert again when you are done with the indicator. Inside this opened Indicator record look for the Execute button at the bottom of the record and Execute the “Block URL” playbook. Note If you do not have a Block URL option make sure you selected a “URL Type” indicator. Execute buttons can be selectively shown based on type of record. Follow the prompts to Block and then indicate the Block Completed and the status of this indicator should go to “Blocked”. Note In a production environment the “Block Complete” step should be configured to actually use a connector, like a FortiGate, for efficiency",
    "description": "In this Alert we can see that we obtained an email and extracted various “indicators” and created a separate Indicator record for each. Now that this has been done we can see the linked indicators towards the bottom of the Alert record.\nInside the Alert, navigate to the bottom of the record and look for the Indicators tab.",
    "tags": [],
    "title": "Find the Malicious URL Indicator and Block it",
    "uri": "04_chap_fsrfromuserpers/04-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Hunting IOCs",
    "content": "In the Hunt record and under the Correlations tab we can see the Indicator records that were created from this hunt.\nGo back to Incident Response\u003e Hunts\nOpen the Hunt Record and scroll down to the Indicators section\nWe have 41 Indicators created from the playbook executed in the hunt. Of our 41 Indicators we have created 3 Alerts as being “found” in the network in this simulation. These were “found” using the variable “demo_iocs” inside the “Hunt Sunburst Indicator” playbook.",
    "description": "In the Hunt record and under the Correlations tab we can see the Indicator records that were created from this hunt.\nGo back to Incident Response\u003e Hunts\nOpen the Hunt Record and scroll down to the Indicators section\nWe have 41 Indicators created from the playbook executed in the hunt. Of our 41 Indicators we have created 3 Alerts as being “found” in the network in this simulation. These were “found” using the variable “demo_iocs” inside the “Hunt Sunburst Indicator” playbook.",
    "tags": [],
    "title": "FIND RELATED RECORDS CREATED FROM THE IOCS FILE",
    "uri": "05_chap_fsr_huntingiocs/05-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Build a Custom Module",
    "content": "The goal of this section is to complete an audit of the firewall policy and approve a policy. We will then update the FortiGate config with comments indicating that this policy has been reviewed. We could also put rules inside FortiSOAR to repeat this audit according to business requirements.\nGo back to the Policies Module and click on the dmz-to-inet record to open the policy.\nAt the bottom of the page, click the blue Execute button, then click “Start Policy Audit”. You will see a Manual Input Box appear.\nClick on the Next Steps field dropdown (sometimes called a picklist), and you will see 3 options. Select Mark as Approved and enter “Review Approved” in the Comments field. Click Submit. Check the Execution History for this policy by clicking on the icon at the top right. You will see all of the playbooks that have executed on this specific record. Wait for the playbook “\u003e Update comments on the FortiGate” to complete. In the FortiGate config we can see that we updated the policy with a comment.",
    "description": "The goal of this section is to complete an audit of the firewall policy and approve a policy. We will then update the FortiGate config with comments indicating that this policy has been reviewed. We could also put rules inside FortiSOAR to repeat this audit according to business requirements.\nGo back to the Policies Module and click on the dmz-to-inet record to open the policy.",
    "tags": [],
    "title": "USE THE POLICY MODULE TO AUDIT AND APPROVE A FIREWALL POLICY",
    "uri": "08_chap_buildmod/06-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  ZTP Overview",
    "content": "We will begin configuring FortiSOAR to connect to FortiManager. This will allow us to use FortiSOAR to manage FortiManager.\nNavigate to FortiManager \u003e Managers and click the button to add a new record. Enter the following information: Manager Name: FortiManager Manager IP: 10.100.88.10 Admin RPC Username: fortisoar Admin RPC Password: fortinet Click Save. You will now see the FortiManager record populated with information from the FortiManager API. FortiSOAR automatically created the connector configuration for us and retrieved details about the device\nNote The connector could automatically be configured because the fortisoar user was already present on FortiManager. Normally you would need to create an api user with rest api permissions\nBonus Points 💸 Investigate the playbook that triggered when we created the FortiManager record. What did it do?",
    "description": "We will begin configuring FortiSOAR to connect to FortiManager. This will allow us to use FortiSOAR to manage FortiManager.\nNavigate to FortiManager \u003e Managers and click the button to add a new record. Enter the following information: Manager Name: FortiManager Manager IP: 10.100.88.10 Admin RPC Username: fortisoar Admin RPC Password: fortinet",
    "tags": [],
    "title": "Create FortiManager Record",
    "uri": "07_chap_ztp/03-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Hunting IOCs",
    "content": "Now that we have Alerts, where in this simulated scenario we found active IOCs, related to this Hunt we want to escalate these to an Incident. Select the 3 Alerts and Execute the Escalate playbook. You will be prompted to fill out initial Incident information.\nSelect the 3 Alerts and Execute the Escalate playbook. Fill out Incident information and click Escalate. You can now see the new record in the Incidents module.",
    "description": "Now that we have Alerts, where in this simulated scenario we found active IOCs, related to this Hunt we want to escalate these to an Incident. Select the 3 Alerts and Execute the Escalate playbook. You will be prompted to fill out initial Incident information.\nSelect the 3 Alerts and Execute the Escalate playbook.",
    "tags": [],
    "title": "ESCALATE ALERTS TO AN INCIDENT",
    "uri": "05_chap_fsr_huntingiocs/06-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "FortiSOAR is a platform that is designed to organize records, actions, and workflows. The SOAR Solution Pack adds a more complete framework for SOCs to build workflows for various security tasks. System administrators can extend and tweak components of this framework to meet their needs. This workshop depends on this already being installed which occurs inside the FNDN Threat Lab Demo.\nIn this section we will simply navigate around the system to better understand use cases with FortiSOAR. The flow of information and actions are important to have a successful solution. A complete list of modules can be found in the SOAR Solution Pack Contents page online.\nUse the below flowchart to get an idea of how records flow through FortiSOAR based on the Solution Pack Framework that has been installed for this lab. This can be extensively changed to meet the needs of your business.\nObjectives Review FSR’s Incident Response Module Review FSR’s Resources Module Review FSR’s Automation Module Review FSR’s System Configurations Prepare Configuration Settings for the Workshop Time to Complete Estimated: 30 Minutes",
    "description": "FortiSOAR is a platform that is designed to organize records, actions, and workflows. The SOAR Solution Pack adds a more complete framework for SOCs to build workflows for various security tasks. System administrators can extend and tweak components of this framework to meet their needs. This workshop depends on this already being installed which occurs inside the FNDN Threat Lab Demo.\nIn this section we will simply navigate around the system to better understand use cases with FortiSOAR. The flow of information and actions are important to have a successful solution. A complete list of modules can be found in the SOAR Solution Pack Contents page online.",
    "tags": [],
    "title": "FORTISOAR SYSTEM OVERVIEW AND SETUP",
    "uri": "03_chapter_fsr_ovw_setup.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  OT Isolation",
    "content": "Earlier in this lab guide we have shown multiple ways to use new solutions in FortiSOAR: Using the Import Wizard and installing Solution Packs. In this section we’re going to show how to import a Playbook Collection.\nDownload the Playbook Collection Locate the OT_Collection.json file that is in your downloaded all_files folder.\nNavigate to Automation \u003e Playbooks\nClick the Import button at the top left. Drag the OT_Collection.json file inside the dashed square, or click inside and select the required file. Click the import button You will now have a new Collection 00 - OT Isolate",
    "description": "Earlier in this lab guide we have shown multiple ways to use new solutions in FortiSOAR: Using the Import Wizard and installing Solution Packs. In this section we’re going to show how to import a Playbook Collection.\nDownload the Playbook Collection Locate the OT_Collection.json file that is in your downloaded all_files folder.\nNavigate to Automation \u003e Playbooks\nClick the Import button at the top left.",
    "tags": [],
    "title": "Download and import the Playbook Collection",
    "uri": "09_chap_ot_isolation/03-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Analyzing Emails",
    "content": "Inside the same Indicator look to the upper right corner and find the playbook logs icon. This will open the playbook history for this record. Find the playbooks that have run and open one. This screen may vary as these playbooks come from the SOAR Framework Solution Pack and can be changed from the content hub.\nClick on any of the steps to see what each step could see for the input and output. Click the ENV button to see what the playbook as a whole could “see” during this execution. Follow the results of the playbook from the playbook log. Look for an example that Enriches the Indicator, such as the one called “URL / Domain \u003e Fortinet Web Filter Lookup \u003e Enrichment” from this screenshot. Click on the steps from the log and hit the ENV to see what the playbook can see. Click on a couple of the steps and look at the Input and Output Tabs to see what the step could see. Close the Execute Playbook Logs window when done looking around.",
    "description": "Inside the same Indicator look to the upper right corner and find the playbook logs icon. This will open the playbook history for this record. Find the playbooks that have run and open one. This screen may vary as these playbooks come from the SOAR Framework Solution Pack and can be changed from the content hub.",
    "tags": [],
    "title": "INVESTIGATE THE PLAYBOOKS RELATED TO THIS INDICATOR",
    "uri": "04_chap_fsrfromuserpers/05-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup \u003e  System Config",
    "content": "We want to setup an SMTP configuration for FortiSOAR communications if not already setup. If this is already setup or you are in an environment with different mail server options then you can just use this as a review to your communication configuration.\nGo to Automation \u003e Connectors. In the Manage Tab search for SMTP. Open the SMTP connector by clicking anywhere within the highlighted red box.\nTip This is how you open all connectors, solution packs, and widgets in the Content Hub\nThe default SMTP configuration uses localhost postfix service. We want to configure the connector to match the below settings instead of the default Configuration Name: csadmin@fortimail Mark as Default Configuration: Checked Host: 10.100.88.4 Port: 25 Default From: csadmin@financial.local Username: csadmin Password: $3curityFabric Use TLS: Unchecked Timeout: 10 If you created a new configuration you should see successful status messages when you save.",
    "description": "We want to setup an SMTP configuration for FortiSOAR communications if not already setup. If this is already setup or you are in an environment with different mail server options then you can just use this as a review to your communication configuration.\nGo to Automation \u003e Connectors. In the Manage Tab search for SMTP.",
    "tags": [],
    "title": "Setup FSR SMTP Connector",
    "uri": "03_chapter_fsr_ovw_setup/03_system-config/01-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup",
    "content": "We will briefly review the FortiSOAR system configurations. We will do minimal changes in our system for this workshop but there are lots of opportunities to tweak the system based on your requirements.\nPlease refer to the documentation 7.4.2 System Config Doc in the Helpful Resources menu location to learn more about ALL the system setting options. Proceed to the next steps to make the required changes for this workshop.",
    "description": "We will briefly review the FortiSOAR system configurations. We will do minimal changes in our system for this workshop but there are lots of opportunities to tweak the system based on your requirements.\nPlease refer to the documentation 7.4.2 System Config Doc in the Helpful Resources menu location to learn more about ALL the system setting options. Proceed to the next steps to make the required changes for this workshop.",
    "tags": [],
    "title": "System Configuration",
    "uri": "03_chapter_fsr_ovw_setup/03_system-config.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Analyzing Emails",
    "content": "For this use case we blocked our bad indicator and we are ready to close our Alert. Navigate back to the Alert record, the top of the record you’re on leaves a breadcrumb back to the original record. Set the Status of the alert to closed. When promoted, fill out some notes for the closure and provide a reason, then click Update Did we meet our SLA to Respond?",
    "description": "For this use case we blocked our bad indicator and we are ready to close our Alert. Navigate back to the Alert record, the top of the record you’re on leaves a breadcrumb back to the original record. Set the Status of the alert to closed.",
    "tags": [],
    "title": "Close the Alert",
    "uri": "04_chap_fsrfromuserpers/06-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Hunting IOCs",
    "content": "The incident aggregates our Alerts and provides a way to make sure you are following the business process for your Incident Response workflow. Inside the Incident you can see a visual representation of the Alerts and Indicators involved in this case. You can toggle the view using the view buttons in the right hand corner.",
    "description": "The incident aggregates our Alerts and provides a way to make sure you are following the business process for your Incident Response workflow. Inside the Incident you can see a visual representation of the Alerts and Indicators involved in this case. You can toggle the view using the view buttons in the right hand corner.",
    "tags": [],
    "title": "INSPECT THE INCIDENT DETAILS",
    "uri": "05_chap_fsr_huntingiocs/07-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Build a Custom Module",
    "content": "Sometimes we need to engage others to help us through our workflow. In this step we will reach out to another party to provide feedback for our Policy review so we can make a decision when we get a response.\nInside Resources\u003ePolices open the lan-to-dmz Policy record.\nAt the bottom of the page, click the blue Execute button, then click “Start Policy Audit”.\nSelect “Email NOC Team for additional input”\nYou will see two new fields appear, Email To and Email Body. Replace PROVIDE INFO NEEDED HERE with “Provide the justification for allowing all ports for the service” and Submit Using the same steps in the “Test Emails with a Task” section above, while on a different browser, access the inbox for SocUser1 using socuser1/$3curityFabric Open the “A FortiSOAR playbook is requesting your input” email. Click the “Open input form” link and fill out the form. Note This page is an external input page which does not require a user license. It gives non FortiSOAR users the ability to provide feedback or take action in FortiSOAR\nNavigate back to the Policies Module as CS Admin. You will see a new Manual Input with the text you previously entered on the previous step. Click Response from NOC\nNow review the response from Soc User1 and Approve the policy and add a comment. Then click Submit",
    "description": "Sometimes we need to engage others to help us through our workflow. In this step we will reach out to another party to provide feedback for our Policy review so we can make a decision when we get a response.\nInside Resources\u003ePolices open the lan-to-dmz Policy record.\nAt the bottom of the page, click the blue Execute button, then click “Start Policy Audit”.",
    "tags": [],
    "title": "USE THE POLICY MODULE TO REQUEST MORE INFO ON A FIREWALL POLICY",
    "uri": "08_chap_buildmod/07-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup \u003e  System Config",
    "content": "We want the system to use FortiMail as the SMTP host for email notifications. We will make this change inside the Notification Channel if needed. We will test our notification channel with a system user in a future step.\nNavigate to System Settings (Gear Icon at the top right). Go to System \u003e Notifications \u003e Notification Channels and double click the text Email Notification to open the record Click the continue button. Note If not set to SMTP then change the “Choose suitable configured connector” to SMTP. If the SMTP config is set to localhost-postfix modify the SMTP Configuration to use csadmin@fortimail.\nClick at the bottom right until you can click Bonus Points 💸 Navigate to System \u003e Notifications \u003e Delivery Rules Edit a delivery rule. How will the notification activate? What will the notification do when it is activated?",
    "description": "We want the system to use FortiMail as the SMTP host for email notifications. We will make this change inside the Notification Channel if needed. We will test our notification channel with a system user in a future step.\nNavigate to System Settings (Gear Icon at the top right).",
    "tags": [],
    "title": "Confirm \u0026 Edit the System Notification Channel",
    "uri": "03_chapter_fsr_ovw_setup/03_system-config/02-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  Build a Custom Module",
    "content": "Now we can see that inside FortiSOAR we have a nice workflow indicating how many policies have been reviewed and how many are still pending. We also have some synergy in the sense that our Firewall configuration has been updated to reflect the audits performed within FortiSOAR.\nNote You need to hit the dropdown button to see the Audit Completion Pie Chart Tip When using FortiSOAR as an automation platform you not only gain the benefits of the Security Automation and Orchestration, but the possibilities of customized workflow solutions for everyday business operations like this are countless. What solutions do you need?",
    "description": "Now we can see that inside FortiSOAR we have a nice workflow indicating how many policies have been reviewed and how many are still pending. We also have some synergy in the sense that our Firewall configuration has been updated to reflect the audits performed within FortiSOAR.\nNote You need to hit the dropdown button to see the Audit Completion Pie Chart",
    "tags": [],
    "title": "CONFIRM THE CHANGES IN THE FORTIGATE",
    "uri": "08_chap_buildmod/08-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  ZTP Overview",
    "content": "In this section we’ll create a ZTP profile that will be used to configure the FortiGate when it shows up in FortiManager.\nCreate ZTP Profile Navigate to FortiManager \u003e ZTP Profiles and click the button to add a new record. Set the following fields (leave the rest as default): Name: Branch ZTP Profile Description: Basic ZTP Profile for Fortinet XPERTS 2023 Assignment Mode: Manual Assignment Search Fields: Device Name Assignment Search: Branch[1-2] Adom: root Device Groups: Branch_Devices Policy Package: Golden_Branch Note You will create a Policy Package and a policy later on. But if you didn’t, FortiSOAR would automatically create a package for you.\nClick Save. Congrats! You made your first ZTP profile. If we stopped here, we would have a ZTP profile that we can manually apply to FortiGates, and it would then automatically add them to the group and policies defined in the ZTP profile, and install the policy. But usually Zero touch configurations need more configuration than just a policy package and device group, so lets see what it takes to set that up. Note Keep in mind, we set the ZTP profile mode to Manual. We will change this later on.\nCreate Metafield Template Record Scroll down to the Related Records tab, click the Metafield Templates subtab, and click the button on the Metafield Template section add a new record. Set the following fields on the popup (leave the rest as default):\nName: Branch ZTP Variables Description: Metafields for Fortinet XPERTS 2023 Metafield Template: { \"contact_email\": \"socuser1@financial.local\", \"admin_user_name\": \"xpert_admin\", \"admin_timeout\": \"120\", \"loopback0_ip\": \"\" } Click Create.\nYou may need to click the refresh button underneath the metafield section if you don’t see the new template there. The refresh only affects visibility, not functionality of the template.\nYou will now see a new metafield template added and linked to the ZTP profile. This Metafield template will be used to populate the metafields for the Script Templates, or be used for overrides on the ZTP profile.\nNote The metafields are used to pass variables to the scripts. The metafields are referenced in the scripts using the following syntax: {{devmeta.metafield_name}}\nCreate Script Records Create Script for Purging Config Scroll down to the Related Records tab, click the Scripts sub-tab, and click the button on the Scripts section add a new record. Set the following fields on the popup (leave the rest as default):\nOrder Priority: 90 Name: Purge FortiGate config Description: This script will purge FortiGate config for Fortinet XPERTS 2023 Type: Remote CLI Script: config firewall policy purge end config system sdwan config service purge end config neighbor purge end config health-check purge end config members purge end config zone purge end set status disable end config vpn ipsec phase2-interface purge end config vpn ipsec phase1-interface purge end config firewall address purge end config firewall service purge end Click Create.\nNote The order priority is used to determine the order in which the scripts are executed. The lower the number, the higher the priority. The purge script needs to be executed before the other scripts, so we set the order priority to 90.\nCreate Script for an Admin Account Scroll down to the Related Records tab, click the Scripts sub-tab, and click the button on the Scripts section add a new record. Set the following fields on the popup (leave the rest as default):\nName: Configure Admin User and Loopback interface Description: This script will create an admin user on a FortiGate for Fortinet XPERTS 2023 Type: Remote CLI Script: config system global set admintimeout {{devmeta.admin_timeout}} end config system admin edit \"{{devmeta.admin_user_name}}\" set accprofile \"super_admin\" set vdom \"root\" set password fortinet next end config system interface edit \"Loopback0\" set vdom \"root\" set ip {{devmeta.loopback0_ip}} 255.255.255.255 set allowaccess ping set type loopback set description \"Loopback0 for XPERTS\" next end Click Create.\nYou will now see 2 scripts added and linked to the ZTP profile. This script will be executed on the FortiGate along with other scripts you create based on the order priority.",
    "description": "In this section we’ll create a ZTP profile that will be used to configure the FortiGate when it shows up in FortiManager.\nCreate ZTP Profile Navigate to FortiManager \u003e ZTP Profiles and click the button to add a new record. Set the following fields (leave the rest as default): Name: Branch ZTP Profile Description: Basic ZTP Profile for Fortinet XPERTS 2023 Assignment Mode: Manual Assignment Search Fields: Device Name Assignment Search: Branch[1-2] Adom: root Device Groups: Branch_Devices Policy Package: Golden_Branch Note You will create a Policy Package and a policy later on. But if you didn’t, FortiSOAR would automatically create a package for you.",
    "tags": [],
    "title": "Create a ZTP profile",
    "uri": "07_chap_ztp/04-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup \u003e  System Config",
    "content": "We want to make sure the users we imported through the FortiSOAR Import Wizard are active. Users that are imported are disabled by default and their passwords are not created. Look at the user status and take note of the Active column of the users. Only the CS Admin User is enabled\nFirst, we need to make sure all the users show as Active. If everyone is active then in theory you can skip the rest of this section or review it for information purposes. If you have ANY problems logging in as a Soc User then revisit this section and perform the activation and set password actions. You can find all of this under System\u003eSecurity Management\u003eUsers If there is not a green check then you need to activate the users one at a time and also set the password to the lab default of $3curityFabric. This can be a time-consuming manual process. If your users are not active go ahead and activate one manually if you’d like. Be sure to reset the password to the default $3curityFabric Alternatively, you can use a playbook to simplify your efforts as a FortiSOAR admin and script the activation and password setting for each user. See the next step for details. Go to Automation\u003ePlaybooks Search for the playbook collection System-Helpers in the left search, select it from the search results Find the playbook called “Activate and Reset Password All Inactive Users”. Select the checkbox on that playbook and Activate it by clicking the Activate Button. In order to execute this playbook you need to go to the Simulations menu item so you can reach the Scenario module. Now that you’ve activated the playbook it is ready.\nNavigate to the Simulations Module on the navigation bar (Bottom left of the screen) To use the playbook, find the Activate Users item using the Execute button, in the Scenario module. If you execute this playbook it will activate the inactive users AND reset their passwords for you. Click Yes on the popup to proceed Bonus Points 💸 If you executed this playbook then feel free to check out the playbook logs using the button and look at the Activate User playbook to see how we did this.\nYou can also click Edit Playbook to see how the playbook was created.",
    "description": "We want to make sure the users we imported through the FortiSOAR Import Wizard are active. Users that are imported are disabled by default and their passwords are not created. Look at the user status and take note of the Active column of the users. Only the CS Admin User is enabled\nFirst, we need to make sure all the users show as Active. If everyone is active then in theory you can skip the rest of this section or review it for information purposes. If you have ANY problems logging in as a Soc User then revisit this section and perform the activation and set password actions. You can find all of this under System\u003eSecurity Management\u003eUsers If there is not a green check then you need to activate the users one at a time and also set the password to the lab default of $3curityFabric. This can be a time-consuming manual process. If your users are not active go ahead and activate one manually if you’d like. Be sure to reset the password to the default $3curityFabric Alternatively, you can use a playbook to simplify your efforts as a FortiSOAR admin and script the activation and password setting for each user. See the next step for details.",
    "tags": [],
    "title": "Enable System Users",
    "uri": "03_chapter_fsr_ovw_setup/03_system-config/03-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "In this example we will leverage a Solution Pack that is designed to simulate a scenario for managing phishing email attempts. The workflow for any given SOC or organization can vary drastically and FortiSOAR is designed to be changed and tweaked as needed to meet those requirements. In this use case we will be following the below workflow.\nObjectives Install the Email Phishing Scenario Work through the Email Phishing Scenario Time to Complete Estimated: 30 Minutes",
    "description": "In this example we will leverage a Solution Pack that is designed to simulate a scenario for managing phishing email attempts. The workflow for any given SOC or organization can vary drastically and FortiSOAR is designed to be changed and tweaked as needed to meet those requirements. In this use case we will be following the below workflow.",
    "tags": [],
    "title": "FortiSOAR from a User's Perspective - Analyzing Emails",
    "uri": "04_chap_fsrfromuserpers.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  OT Isolation",
    "content": "The new OT collection has a playbook that will configure multiple things on the Enterprise Core FortiGate. This work has been done ahead of time to speed up the workshop.\nIn OT environments there is heavy red tape around blocking new traffic. In short, all OT devices must be able to communicate to other OT devices. If there is malware identified on an OT device, the spread should be mitigated and not blocked outright. This is what the policy above does. The policy will only allow isolated OT assets to communicate to devices in the OT Assets group, and nothing else.\nRun the playbook Open the playbook Step 1. Prep FortiGate Observe the steps in the playbook. It is documented with the tasks it will perform Run the playbook by clicking the start button Click Trigger Playbook to confirm Confirm the changes on the FortiGate Access the FortiGate by clicking on the Enterprise_Core HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14002/ Navigate to Policy \u0026 Objects \u003e Firewall Policy\nConfirm that you see a new policy at the top Edit the policy Block OT isolated to non OT Note This policy is a destination address negate policy.",
    "description": "The new OT collection has a playbook that will configure multiple things on the Enterprise Core FortiGate. This work has been done ahead of time to speed up the workshop.\nIn OT environments there is heavy red tape around blocking new traffic. In short, all OT devices must be able to communicate to other OT devices. If there is malware identified on an OT device, the spread should be mitigated and not blocked outright. This is what the policy above does. The policy will only allow isolated OT assets to communicate to devices in the OT Assets group, and nothing else.",
    "tags": [],
    "title": "Prepare the FortiGate via a playbook",
    "uri": "09_chap_ot_isolation/04-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR - Hunting IOCs",
    "content": "First, change the Status of the Incident to In Progress. This will make sure the Incident Ack SLA is met. We want to resolve our Alerts. Assuming we have done the steps to do that we can Close the Alerts. Focus on the Correlations tab at the bottom of the page, and then select the Alerts Tab.\nSelect all of the alerts using the checkbox and change the status to Closed The process for closing Alerts prompts you for some further information. Fill out the required fields and click Change Status to Closed Change the Status of the Incident to Resolved. The process for closing the Incident prompts you for some further information. Make sure to scroll down and fill out the Resolution field\nClick Update",
    "description": "First, change the Status of the Incident to In Progress. This will make sure the Incident Ack SLA is met. We want to resolve our Alerts. Assuming we have done the steps to do that we can Close the Alerts. Focus on the Correlations tab at the bottom of the page, and then select the Alerts Tab.",
    "tags": [],
    "title": "WORK THE INCIDENT",
    "uri": "05_chap_fsr_huntingiocs/08-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup \u003e  System Config",
    "content": "When emails leave FortiSOAR, they provide links back into the system. If the Server’s FQHN (Full Qualified Host Name) is not accurate, then when users receive emails from SOAR the hyperlink will be wrong. We will fix this for the lab.\nGo into Playbooks \u003e Collections \u003e 01 – Drafts and create a playbook with a name of “test” using the Add Playbook Button. Open the Tools \u003e Global Variables section inside the newly created playbook. Look at the URL for your FortiSOAR Instance. This will likely be something like “username-demo_name-fortidemo.fortinet.com:port_number” but may vary depending on your environment.\nNote Our objective is to set the FQHN so that a user will be emailed the right URL that will get them back to the FortiSOAR instance.\nClick the pencil icon to the right of Server_fqhn and change the Field Value appropriately Click the Submit button once you’re done Warning Make sure you put the :port AND the server name only. Do not add the https: or slashes Bad Server_fqhn Examples 👎\nhttps://dspille-threatlab-three.fortidemo.fortinet.com:14008/\ndspille-threatlab-three.fortidemo.fortinet.com:14008/\nTip Good Server_fqhn Example 👍\ndspille-threatlab-three.fortidemo.fortinet.com:14008",
    "description": "When emails leave FortiSOAR, they provide links back into the system. If the Server’s FQHN (Full Qualified Host Name) is not accurate, then when users receive emails from SOAR the hyperlink will be wrong. We will fix this for the lab.\nGo into Playbooks \u003e Collections \u003e 01 – Drafts and create a playbook with a name of “test” using the Add Playbook Button.",
    "tags": [],
    "title": "Edit System FQHN for Email URLs",
    "uri": "03_chapter_fsr_ovw_setup/03_system-config/04-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "In this example we will leverage a Solution Pack that is designed to simulate a scenario for hunting for IOCs related to a known attack. The steps we will perform can be adjusted to meet the needs of any SOC.\nObjectives Install Hunting Simulation Scenario Work IoC Hunting Scenario Time to Complete Estimated: 30 Minutes",
    "description": "In this example we will leverage a Solution Pack that is designed to simulate a scenario for hunting for IOCs related to a known attack. The steps we will perform can be adjusted to meet the needs of any SOC.\nObjectives Install Hunting Simulation Scenario Work IoC Hunting Scenario Time to Complete Estimated: 30 Minutes",
    "tags": [],
    "title": "FortiSOAR from a User's Perspective - Hunting IOCs",
    "uri": "05_chap_fsr_huntingiocs.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  OT Isolation",
    "content": "We will now use the other imported playbooks in this Chapter by running them against an alert\nNavigate and Fix Columns Navigate to Resources \u003e Assets Click the Hamburger icon on the top row of the grid , look for the field Asset State and click it. Tip You may need to zoom out from your browser to see the column. You can click and hold the column name and drag it to move the column to the left or right of other columns\nOnce done your columns should look something like the image below Isolate a Device Select the checkbox of any Asset record with Asset Type of OT\nClick the Execute button and Click Isolate Device Click the clipboard icon at the top right\nClick the text Are you sure you want to isolate Click yes to confirm isolating the playbook Note What happens when you try execute the Isolate Device playbook on a Asset that has the type IT ?\nCheck the Results Access the FortiGate by clicking on the Enterprise_Core HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14002/ Navigate to Policy \u0026 Objects \u003e Firewall Policy\nHover over the OT Isolated group to confirm you see the IP of the asset you isolated previously",
    "description": "We will now use the other imported playbooks in this Chapter by running them against an alert\nNavigate and Fix Columns Navigate to Resources \u003e Assets Click the Hamburger icon on the top row of the grid , look for the field Asset State and click it.",
    "tags": [],
    "title": "Isolate Device",
    "uri": "09_chap_ot_isolation/05-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  ZTP Overview",
    "content": "In this section we’ll onboard a FortiGate manually so that it checks into FortiManager. Onboarding a device to FortiManager can be done automatically using various methods (DHCP option, FortiZTP, FortiDeploy SKU), but we’ll do it manually for this lab.\nWarning Do not Authorize Branch1. We will do that later.\nOnboard a FortiGate Login to Branch1 using admin/$3curityFabric Navigate to Security Fabric \u003e Fabric Connectors. Click Central Management Click Enabled Type 10.100.88.10 in the IP Address field. Click OK Confirm FortiGate is unauthorized in FortiManager Login to FortiManager using admin/``$3curityFabric``` Navigate to Device Manager \u003e Unauthorized Devices Confirm that the Branch1 FortiGate is listed Warning Do not Authorize Branch1. We will do that later.\nCreate Policy Package Navigate to Policy \u0026 Objects \u003e Policy Package Select Policy Package and click New Type in Golden_Branch for the Name and click OK at the bottom of the page. Create Policy Select Policy Packages \u003e Golden_Branch \u003e Firewall Policy Click Create New \u003e Create New to create a new policy Set the following fields on the Create New Firewall Policy page (leave the rest as default): Name: Allow port2 to Internet Incoming Interface: port2 Outgoing Interface: port1 Source: RFC1918-10 Destination: all Service: HTTPS Action: Accept NAT: Enable Change Note: Policy Creation Click OK at the bottom of the page. You now have your first policy!",
    "description": "In this section we’ll onboard a FortiGate manually so that it checks into FortiManager. Onboarding a device to FortiManager can be done automatically using various methods (DHCP option, FortiZTP, FortiDeploy SKU), but we’ll do it manually for this lab.\nWarning Do not Authorize Branch1. We will do that later.\nOnboard a FortiGate Login to Branch1 using admin/$3curityFabric Navigate to Security Fabric \u003e Fabric Connectors. Click Central Management Click Enabled Type 10.100.88.10 in the IP Address field. Click OK",
    "tags": [],
    "title": "Onboard a FortiGate",
    "uri": "07_chap_ztp/05-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup \u003e  System Config",
    "content": "Now we can use a task assignment to test our email links. If you cannot assign a Soc User then revisit the “Enable System Users” section from a previous step.\nGo to Incident Response \u003e Tasks and Add a New Task. Give the task a simple name, like: “Test Email with socuser1\". Set the Priority to High. Set the Type to To Do. Assign the task to Soc User1. Click Save. Open a Private Browser or a New Browser and go to your FortiMail.\nRemove the “/admin/” from the FortiMAIL URL to access the web-mail login page. Login using “socuser1” and $3curityFabric and check your emails. You should have an email saying, “A task has been assigned”. Open the email and click the link to the task and then login to FortiSOAR using “socuser1” and $3curityFabric. We need the user csadmin to be signed in Go back to the browser that has the user csadmin signed in OR sign out from socuser1 and sign in as csadmin$3curityFabric. Navigate to Incident Response \u003e Tasks Set the Task Status to Completed Close the task window.",
    "description": "Now we can use a task assignment to test our email links. If you cannot assign a Soc User then revisit the “Enable System Users” section from a previous step.\nGo to Incident Response \u003e Tasks and Add a New Task. Give the task a simple name, like: “Test Email with socuser1\".",
    "tags": [],
    "title": "Test Emails with a Task",
    "uri": "03_chapter_fsr_ovw_setup/03_system-config/05-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  ZTP Overview",
    "content": "We’re now ready to assign a profile to the FortiGate. Now you might be thinking “Wait, I thought we were doing ZTP?”. We are, but there are some cases where you may need to restart the ZTP process. For example, if you need to change the ZTP profile, or if you need to re-onboard the device. In this cases, we’ll assign the profile manually.\nAssign a ZTP Profile Manually Login to FortiSOAR using csadmin/$3curityFabr1c Navigate to the module FortiManager \u003e Devices Click Synchronize All FMG DeviceDb’s You will now see Branch1 listed in the table Select the checkbox on that device and click Change ZTP Profile \u003e Branch ZTP Profile Switch back to FortiManager and you will see that the FortiGate is being authorized Back on FortiSOAR the device will also show that the device is being managed Continuing the ZTP Process When provisioning devices, there are often unique values that each device needs. For example, the device hostname, the device’s IP address, etc. These values are often unique to each device, so we need a way to provide these values to the device. We can do this using a Manual Input in FortiSOAR. This input dialog can also be emailed to a user\nOpen the Branch1 Record by clicking on any non-hyperlinked part of the row (e.g. Manager or ZTP Profile Column values) Notice that the ZTP Phase is now Pending, and that the loopback0_ip variable is Yellow and doesn’t have a value. This means that the variable is not set. Exit the Device record view by clicking the X in the top left corner of the page Click the Pending Tasks button in the top right corner of the page (Looks like a clipboard with a checkmark) Click the pending task Fill out the empty device variables ( Branch1(FortiManager) ) Type in 172.16.1.1 in the loopback0_ip field Click Continue Watch ZTP in Action Open the Branch1 Record by clicking on any non-hyperlinked part of the row (e.g. Manager or ZTP Profile Column values) Notice that the loopback0_ip variable is now green and has a value. This means that the variable is set. This process will take 1-2 minutes. You can watch the progress in the Workspace tab of the Device record. You will see the comments from the ZTP process. This is a great way to see what happened during the ZTP process. It will show rendered script templates from the Device Metadata.",
    "description": "We’re now ready to assign a profile to the FortiGate. Now you might be thinking “Wait, I thought we were doing ZTP?”. We are, but there are some cases where you may need to restart the ZTP process. For example, if you need to change the ZTP profile, or if you need to re-onboard the device. In this cases, we’ll assign the profile manually.",
    "tags": [],
    "title": "Assign a ZTP Profile Manually",
    "uri": "07_chap_ztp/06-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "There are multiple ways to integrate with FortiSOAR. In this section we will focus on having FortiSOAR pull from FortiAnalyzer. The FortiAnalyzer Events, created by FortiAnalyzer Event Handlers, will be created as FortiSOAR Alerts via the Data Ingestion process.\nObjectives Configure External System Data Ingestion Capabilities Work with Data Ingestion Components Time to Complete Estimated: 30 Minutes",
    "description": "There are multiple ways to integrate with FortiSOAR. In this section we will focus on having FortiSOAR pull from FortiAnalyzer. The FortiAnalyzer Events, created by FortiAnalyzer Event Handlers, will be created as FortiSOAR Alerts via the Data Ingestion process.\nObjectives Configure External System Data Ingestion Capabilities Work with Data Ingestion Components Time to Complete Estimated: 30 Minutes",
    "tags": [],
    "title": "CONFIGURE DATA INGESTION FOR FORTISOAR \u0026 FORTIANALYZER",
    "uri": "06_chap_config_dataing.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  OT Isolation",
    "content": "Finally, we have build out a process to remove an Asset from the OT Isolated Group on the Enterprise Core FortiGate. In this scenario, the Network team’s process for removing an isolated device through automation will require a manager’s approval. The playbook has a static value of “CS Admin” set, but this could be any user or Team in FortiSOAR, or even a user outside of FortiSOAR.\nUn-Isolate the Asset Navigate to Resources \u003e Assets Select the checkbox of the Asset record with Asset Type of OT , that has the Asset State of Isolated.\nClick the Execute button and Click Unisolate Device Note Make sure that the asset you’ve selected is in fact an OT Type, and previously Isolated. Playbooks can have visibility conditions to prevent them from being activated incorrectly.\nClick the clipboard icon at the top right\nClick the text Are you sure you want to Un-Isolate? Click yes to confirm isolating the playbook If you are signed into FortiSOAR as csadmin, you will receive an additional pop up asking you to approve the request. If you do not see this pop up, sign out of FortiSOAR and sign in with csadmin/$3curityFabric Approve the request\nCheck the Results Access the FortiGate by clicking on the Enterprise_Core HTTPS button from your demo instance or by browsing to https://\u003cyour instance\u003e.fortidemo.fortinet.com:14002/ Navigate to Policy \u0026 Objects \u003e Firewall Policy\nHover over the OT Isolated group to confirm you do not see the IP of the asset you Un-Isolated Bonus Points 💸 If you are able identify where in the Un-Isolate playbook you could modify the approval to be Soc User1 instead of csadmin",
    "description": "Finally, we have build out a process to remove an Asset from the OT Isolated Group on the Enterprise Core FortiGate. In this scenario, the Network team’s process for removing an isolated device through automation will require a manager’s approval. The playbook has a static value of “CS Admin” set, but this could be any user or Team in FortiSOAR, or even a user outside of FortiSOAR.",
    "tags": [],
    "title": "Un-Isolate Device",
    "uri": "09_chap_ot_isolation/06-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup \u003e  System Config",
    "content": "Earlier in this lab you should have retrieved an API token for your VirusTotal account. You will use this here.\nGo to Automation and Connectors. In the Manage Tab search for “virustotal”\nEdit the connector configuration to have your Virus Total API Key from section External Requirements - External Accts . You can call the configuration whatever you like – in this lab we called it “mylab”. Paste in your API key to the API Key field\nClick save and you should see an Available Health Check Status.",
    "description": "Earlier in this lab you should have retrieved an API token for your VirusTotal account. You will use this here.\nGo to Automation and Connectors. In the Manage Tab search for “virustotal”\nEdit the connector configuration to have your Virus Total API Key from section External Requirements - External Accts . You can call the configuration whatever you like – in this lab we called it “mylab”.",
    "tags": [],
    "title": "Update Connector Config for VirusTotal",
    "uri": "03_chapter_fsr_ovw_setup/03_system-config/07-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup \u003e  System Config",
    "content": "Earlier in this lab you should have retrieved an API token for your IP Quality Score account. You will use this here.\nGo to Automation and Connectors. In the Manage Tab search for “ip quality score”. Edit the connector configuration to have your IP Quality Score API Key from section External Requirements - External Accts. You can call the configuration whatever you like – in this lab we called it “mylab”. Once saved you should see an Available Health Check Status.",
    "description": "Earlier in this lab you should have retrieved an API token for your IP Quality Score account. You will use this here.\nGo to Automation and Connectors. In the Manage Tab search for “ip quality score”. Edit the connector configuration to have your IP Quality Score API Key from section External Requirements - External Accts. You can call the configuration whatever you like – in this lab we called it “mylab”. Once saved you should see an Available Health Check Status.",
    "tags": [],
    "title": "Update Connector Config for IP Quality Score",
    "uri": "03_chapter_fsr_ovw_setup/03_system-config/08-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  ZTP Overview",
    "content": "So far there has been a lot of touch! But we’re very close to zero now. In this section we’ll see how to make the ZTP process truly zero touch.\nModify the ZTP Profile Navigate to FortiManager \u003e ZTP Profiles and edit the Branch ZTP Profile. At the bottom right of the record click Edit Record Change the Assignment Mode field to Automatic. Click Save. Import Playbook Collection Locate the FOS ZTP Helpers.zip file that is in your downloaded all_files folder. Go to System \u003e Application Editor\u003e Import Wizard click Import from File and select the file FOS ZTP Helpers.zip Leave all the default settings and click twice, and then click Run Import The import should complete without error. Trigger ZTP We’re going to Onboard Branch2 to our FortiManager using another method: API.\nNavigate to FortiManager \u003e Devices Click the Execute button and select “Set FMG via FOS API” from the dropdown Provide the following information FortiGate IP: 10.100.88.9 FortiManager: 10.100.88.10 Username: admin Password: $3curityFabric Click Execute Click Synchronize All FMG DeviceDBs Notice that the Branch2 device is now in the Devices list and will be automatically assigned the Branch ZTP Profile. This is because we set the Assignment Mode to Automatic in the previous step AND the ZTP profile assignment regex matches the Device Name When the ZTP phase changes to Pending we need to fill out the required task. This is done the same way as we did for Branch1. Open the input task and provide 172.16.2.1 Click Continue",
    "description": "So far there has been a lot of touch! But we’re very close to zero now. In this section we’ll see how to make the ZTP process truly zero touch.\nModify the ZTP Profile Navigate to FortiManager \u003e ZTP Profiles and edit the Branch ZTP Profile. At the bottom right of the record click Edit Record Change the Assignment Mode field to Automatic. Click Save.",
    "tags": [],
    "title": "Making ZTP \"Zero Touch\"",
    "uri": "07_chap_ztp/07-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less \u003e  FSR Overview \u0026 Setup",
    "content": "The Navigation Editor allows you to configure different groups for navigation, such as Incident Response, Resources, and Automations. As an example the modules Alerts, Incidents, Tasks, and others are placed into the group Incident Response for user navigation for finding these modules.\nYou can use this to customize or redesign the look and feel of how to navigate FortiSOAR based on business and/or technical needs. We will create our own module later in this workshop.\nThe Navigation Group is defined in Settings\u003e Application Editor\u003e Navigation. |",
    "description": "The Navigation Editor allows you to configure different groups for navigation, such as Incident Response, Resources, and Automations. As an example the modules Alerts, Incidents, Tasks, and others are placed into the group Incident Response for user navigation for finding these modules.\nYou can use this to customize or redesign the look and feel of how to navigate FortiSOAR based on business and/or technical needs. We will create our own module later in this workshop.",
    "tags": [],
    "title": "Modules and Navigation",
    "uri": "03_chapter_fsr_ovw_setup/09-page.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "Zero Touch Provisioning (ZTP) is an automated deployment and configuration technique used by Fortinet’s FortiGate firewalls and FortiManager central management platform. ZTP streamlines network security infrastructure deployment, allowing for automatic provisioning and configuration of new devices upon network connection, reducing manual setup, and minimizing misconfiguration risks. FortiManager acts as a central control point, storing configuration templates, policies, and security profiles for FortiGate devices, which ZTP then uses to maintain consistent security policies and simplify network security device deployment and management. This enhances network security while saving time and effort on setup and maintenance.\nObjectives Understand ZTP in FortiSOAR Create a ZTP Profile Zero Touch provision 2 FortiGates Install and use the ZTP Examples Solution Pack Time to Complete Estimated: 45 Minutes",
    "description": "Zero Touch Provisioning (ZTP) is an automated deployment and configuration technique used by Fortinet’s FortiGate firewalls and FortiManager central management platform. ZTP streamlines network security infrastructure deployment, allowing for automatic provisioning and configuration of new devices upon network connection, reducing manual setup, and minimizing misconfiguration risks. FortiManager acts as a central control point, storing configuration templates, policies, and security profiles for FortiGate devices, which ZTP then uses to maintain consistent security policies and simplify network security device deployment and management. This enhances network security while saving time and effort on setup and maintenance.",
    "tags": [],
    "title": "ZTP Overview",
    "uri": "07_chap_ztp.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "The power of FortiSOAR is in the ability to customize solutions. The ways you can build, tweak, and polish your solutions are endless. In this section we will outline a customized module for managing the workflow to auditing existing policies on a FortiGate for our security posture hygiene. This module has been built for you to simplify the steps.\nObjectives Understand Modules Build a Custom Module Work with Custom Module Time to Complete Estimated: 30 Minutes",
    "description": "The power of FortiSOAR is in the ability to customize solutions. The ways you can build, tweak, and polish your solutions are endless. In this section we will outline a customized module for managing the workflow to auditing existing policies on a FortiGate for our security posture hygiene. This module has been built for you to simplify the steps.",
    "tags": [],
    "title": "BUILD A CUSTOM MODULE FOR FORTISOAR",
    "uri": "08_chap_buildmod.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "The convergence of operational technology (OT) and information technology (IT) infrastructures continues to accelerate. And as publicized attacks and industry warnings increase, organizations must now prioritize securing their OT assets and infrastructure. OT assets have become more open and dependent on network communications and increasingly connected to the larger corporate network. As a result, they are now potentially vulnerable to outside attacks ranging from sabotage to ransomware. Specialized cybersecurity products provide protection and detection across OT operational levels and at the OT/IT network boundary, but monitoring, investigating, and responding to alerts from this array of products is complex and error-prone.\nObjectives Understand OT Install a Solution Pack Isolate an Asset Time to Complete Estimated: 20 Minutes",
    "description": "The convergence of operational technology (OT) and information technology (IT) infrastructures continues to accelerate. And as publicized attacks and industry warnings increase, organizations must now prioritize securing their OT assets and infrastructure. OT assets have become more open and dependent on network communications and increasingly connected to the larger corporate network. As a result, they are now potentially vulnerable to outside attacks ranging from sabotage to ransomware. Specialized cybersecurity products provide protection and detection across OT operational levels and at the OT/IT network boundary, but monitoring, investigating, and responding to alerts from this array of products is complex and error-prone.",
    "tags": [],
    "title": "OT Isolation",
    "uri": "09_chap_ot_isolation.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "categories.html"
  },
  {
    "breadcrumb": "Can't Code? No Problem: Soar with Automation and Boost Productivity by Doing Less",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "tags.html"
  }
]
