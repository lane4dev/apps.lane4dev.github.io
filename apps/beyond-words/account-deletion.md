---
title: "Delete Your Account and Data"
layout: app-page
app_key: "beyond-words"
permalink: /beyond-words/account-deletion/
description: "How to request deletion of a Beyond Words account and associated cloud data."
last_updated: "2026-07-29"
lang: en
translation_key: beyond-words-account-deletion
alternate_lang: zh-CN
alternate_url: /zh/beyond-words/account-deletion/
x_default_url: /beyond-words/account-deletion/
---

{% assign app = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**Last updated:** {{ page.last_updated }}

You can request deletion of your {{ app.name }} account and associated cloud
data from inside the application or through the web-accessible request channel
below.

## Delete from the application

1. Open {{ app.name }}.
2. Go to **{{ app.deletion.in_app_path }}**.
3. Review the data that will be deleted.
4. Complete any required re-authentication.
5. Confirm the deletion request.

Re-authentication helps prevent another person with temporary access to your
device from deleting the account.

## Request deletion without the application

Use the following request channel:

[Submit an account deletion request]({{ app.deletion.request_url }})

The request process may require verification through the email address or
authentication method associated with the account. Do not send passwords,
one-time codes, or payment card information.

For assistance, contact
[{{ developer.privacy_email }}](mailto:{{ developer.privacy_email }}) with the
subject **Beyond Words account deletion**.

## Data scheduled for deletion

After successful identity verification, the deletion process is intended to
remove or anonymize data associated with the account, including:

- the Firebase Authentication account;
- account profile and internal user identifiers;
- usage quota and plan-status records;
- server-side settings associated with the account;
- support or harmful-output reports where continued identification is not
  required;
- other cloud data linked only to the deleted account.

{% if app.privacy.cloud_history_sync_enabled %}
Cloud-synchronized transformation history associated with the account will also
be deleted.
{% else %}
Transformation history is stored locally on the device and is not deleted by
the server-side account deletion request. Delete history inside the
application, clear the application's storage, or uninstall the application to
remove local copies.
{% endif %}

## Information that may be retained

Limited information may be retained where reasonably necessary for:

- tax, accounting, and Google Play transaction records;
- fraud prevention, security, and abuse investigations;
- resolving disputes, refunds, or chargebacks;
- demonstrating compliance with a valid legal obligation;
- backup systems that are overwritten on a defined cycle.

Required records may be retained for:
**{{ app.deletion.retained_record_period }}**.

Retained records are restricted to the purpose that requires their retention
and are not used to continue providing the deleted account.

## Processing period

Verified deletion requests are normally completed within:
**{{ app.deletion.completion_period }}**.

Access may be disabled before all backup copies expire. You will receive
confirmation through the verified contact channel when the primary deletion
process is complete.

## Google Play subscriptions

Deleting the {{ app.name }} account does not necessarily cancel a Google Play
subscription. Cancel the subscription separately in Google Play:

1. Open Google Play.
2. Select your profile.
3. Open **Payments & subscriptions → Subscriptions**.
4. Select {{ app.name }}.
5. Choose **Cancel subscription**.

Google Play may retain purchase and billing records under its own legal
obligations and policies.

## Questions

Privacy contact:
[{{ developer.privacy_email }}](mailto:{{ developer.privacy_email }})  
Support:
[{{ developer.support_email }}](mailto:{{ developer.support_email }})
