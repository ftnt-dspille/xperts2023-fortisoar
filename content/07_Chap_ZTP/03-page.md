---
title: Create FortiManager Record
menuTitle: Create FortiManager Record
weight: 30
---

![search_icon](check_box.svg)
We will begin configuring FortiSOAR to connect to FortiManager. This will allow us to use FortiSOAR to manage FortiManager.

---

1. Navigate to **FortiManager > Managers** and click the **+** button to add a new record.
2. Enter the following information:
    - **Manager Name**: FortiManager
    - **Manager IP**: 10.100.88.10
    - **Admin RPC Username**: fortisoar
    - **Admin RPC Password**: fortinet

![Create FortiManager Record](create_manager_screen.png)

3. Click **Save**.

---
You will now see the FortiManager record populated with information from the FortiManager API. FortiSOAR automatically created the connector configuration for us and retrieved details about the device

![FortiManager Record](manager_record.png)

![FMG RPC Connector](fmg_rpc_connector.png)


# Bonus Points :money_with_wings:
Investigate the playbook that triggered when we created the FortiManager record. What did it do?