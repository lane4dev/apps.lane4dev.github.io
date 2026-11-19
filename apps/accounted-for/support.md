---
title: "Support"
layout: app-page
app_key: "accounted-for"
permalink: /accounted-for/support/
description: "Get help using Accounted For."
last_updated: "2026-11-19"
lang: en
translation_key: accounted-for-support
alternate_lang: zh-CN
alternate_url: /zh/accounted-for/support/
x_default_url: /accounted-for/support/
---

{% assign app = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**Last updated:** {{ page.last_updated }}

## Contact support

Need help or want to report a problem? Contact [{{ developer.support_email }}](mailto:{{ developer.support_email }}).

To help us investigate, include the app version, device model, Android version, steps taken, and what happened. Do not send your complete ledger, backups, identity documents, or other sensitive information. If a screenshot is necessary, conceal amounts and personal information first.

## Common issues

### How do I back up my ledger?

In the app settings, select “Back up now” and use the system share interface to save the backup somewhere secure. Check regularly that the file has been saved, and back up before changing devices or uninstalling.

Backups contain the ledger database and some preferences, but **do not include attachment files**. Save original attachments separately. Backups may contain sensitive financial information, so keep them secure.

### How do I restore a backup?

In settings, select “Restore from backup,” choose an Accounted For backup file, and read the confirmation. After confirming, fully close and reopen the app as directed to finish restoring.

Restoring **replaces** the current ledger and the settings included in the backup; it does not merge ledgers. If you need to keep the current data, make a separate backup first.

### Why can't I open attachments after restoring?

Current backups do not include attachment files. When restoring on a new device or after clearing app data, the copies previously stored in the app may no longer exist. Recover them from the original files you saved separately.

### How do I export transactions?

Open ledger search, filter posted transactions as needed, and use the export function to share a CSV file. The file contains the search results, so choose the recipient carefully.

### Why didn't I receive a reminder?

Check that the bill has a reminder and that Android settings allow Accounted For to send notifications and use exact alarms. Battery-saving settings, device state, or permission changes can also affect reminders. Due subscriptions are posted automatically when the app starts; open it to check pending entries.

### How do I delete my data?

Clear Accounted For's app data in Android settings or uninstall the app. This deletes its data from the device; first save any ledger and attachments you want to keep. Delete backups, CSV files, and attachment copies saved or shared elsewhere separately. Deleting an individual transaction may leave its local history in the app.

## Privacy and data

- [Privacy Policy]({{ app.privacy_path | relative_url }})
- [Terms of Service]({{ app.terms_path | relative_url }})

Privacy requests: [{{ developer.support_email }}](mailto:{{ developer.support_email }})
