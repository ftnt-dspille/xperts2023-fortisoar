---
title: FortiManager Modules
menuTitle: FortiManager Modules
weight: 10
---

![search_icon](mag_glass.svg)
In this section we’ll explore the FortiManager ZTP modules on the system. Click around and checkout the record types inside the group. Feel free to click: ![Add button](add.png?classes=inline) to see what fields are used for records of the different modules. You can create records and delete records to just get a feel for the system if you like.

---
The FortiManager Group is where we will find records that are used for FortiManager Zero Touch Provisioning. We have provided a breakdown of what each module's purpose is.

![FortiManager dropdown](ZTP_modules.png?height=300px)
|Module Name|Description|
| :-----: | :-----: |
| Managers | Manager records define the Fortimanagers, and the current firmware and status, used in your solution. Use this module to start the integration and/or simply report on the current status of your FortiMangers.|
| Devices |Devices are synchronized from the FortiManager and stored in FortiSOAR. Then automation can occur on one or more devices based on operations and workflow needs. Once created in FortiSOAR they are not removed to preserve the last known status of the Device record even if the device has been removed, or moved, from your FortiManager.|
| Metafield Templates | Managing metafields is crucial to the success of any network deployment and provisioning. Metafield Templates can be used to prompt required users to respond to unknown, but required, fields before deployment. Templates can be used to integrate external systems and retrieve key data requirements before deployment. Templates can be customized to create dynamic metadata based on a wide range of advanced and complex requirements. Metadata inside FortiSOAR can be exported to FortiManger to be used by already existing solutions with minimal effort.|
| Script Templates | Scripts in FortiSOAR for this Solution Pack can be used for creating customized FortiManager CLI, Device DB, Policy DB, and/or TCL Scripts per device. Scripts in FortiSOAR can also maintain and create Provisioning CLI Templates in FortiManager such as when new ADOMs are created and need to be setup with Templates. Device reporting scripts can also be used to create a custom dashboard with user defined content.|
| ZTP Profiles |The ZTP Profiles module describes how to handle the provisioning of each device maintained by the respective FortiManager. As a device shows up in the FortiManager Device DB, unauthorized or modeled, when ZTP Profiles are assigned to those devices the defined device templates and provisioning steps are applied and reported per device. ZTP Profiles can be assigned on demand or automatically assigned when devices are created in FortiManger regardless of how the devices were created. |
