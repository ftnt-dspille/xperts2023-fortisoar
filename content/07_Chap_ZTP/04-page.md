---
title: Create a ZTP profile
menuTitle: Create a ZTP profile
weight: 40
---

![search_icon](check_box.svg)
In this section we’ll create a ZTP profile that will be used to configure the FortiGate when it shows up in FortiManager.
---

1. Navigate to **FortiManager ZTP Profiles** and click the ![Add button](add.png?classes=inline) button to add a new record.
2. Set the following fields (leave the rest as default):
    - **Name**: ```Branch ZTP Profile```
    - **Description**: ```Basic ZTP Profile for Fortinet XPERTS 2023```
    - **Assignment Mode**: ```Manual```
    - **Assignment Search Fields**: ```Device Name```
    - **Assignment Search**: ```Branch[1-2]```
    - **Adom**: ```root```
    - **Device Groups**: ```Branch Devices```
    - **Policy Package**: ```Golden Branch```

3. Click **Save**.

Congrats! You made your first ZTP profile. Now we need to add some configuration to it.
![ZTP Profile](ztp_profile.png)

---
<!---
Create a Metafield Template for the ZTP Profile
-->
1. Scroll down to the Related Records tab and click the [Add button](add.png?classes=inline) button on the **Metafield Template** section add a new record.
2. Set the following fields (leave the rest as default):
    - **Name**: ```Branch ZTP Variables```
    - **Description**: ```Metafields for Fortinet XPERTS 2023```
    - **Metafields**:
         
    ```json
    {
      "contact_email": "socuser1@financial.local",
      "admin_user_name": "xpert_admin",
      "admin_timeout": "120",
      "loopback0_ip": "" 
   }
   ```
3. Click **Create**.

You will now see a new metafield template added and linked to the ZTP profile. This metafield template will be used to populate the metafields for the Script Templates, or be used for overrides on the ZTP profile
![Metafield Template](metafield_template.png)

{{% notice note %}}
The metafields are used to pass variables to the scripts. The metafields are referenced in the scripts using the following syntax: `{{devmeta.metafield_name}}`
{{% /notice %}}

---
1. Scroll down to the Related Records tab and click the [Add button](add.png?classes=inline) button on the **Scripts** section add a new record.
![Add ZTP Profile Script](add_ztp_profile_script.png)
2. Set the following fields in the (leave the rest as default):
- **Name**: `Configure an admin user`
- **Description**: `This script will create an admin user on a FortiGate for Fortinet XPERTS 2023`
- **Script Type**: `Remote CLI`
- **Script**:
  
   ```text
    config system global
      set admintimeout {{devmeta.admin_timeout}}
    end
    config system admin
      edit "{{devmeta.admin_user_name}}"
        set accprofile "super_admin"
        set vdom "root"
        set password fortinet
      next
    end
  ```

3. Click **Create**.

You will now see a new script added and linked to the ZTP profile. This script will be executed on the FortiGate along with other scripts you create based on the order priority.
![CLI Script ZTP Profile](cli_script_ztp_profile.png)
