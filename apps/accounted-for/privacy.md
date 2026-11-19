---
title: "Privacy Policy"
layout: legal
app_key: "accounted-for"
permalink: /accounted-for/privacy/
description: "How Accounted For handles your information."
effective_date: "To be confirmed"
last_updated: "2026-11-19"
lang: en
translation_key: accounted-for-privacy
alternate_lang: zh-CN
alternate_url: /zh/accounted-for/privacy/
x_default_url: /accounted-for/privacy/
---

{% assign app = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**Effective date:** {{ page.effective_date }}  
**Last updated:** {{ page.last_updated }}  

This policy explains how **{{ app.name }}** (the “app”) handles information you provide when using it. The app is provided by **{{ developer.legal_name }}**, operating as **{{ developer.display_name }}** in {{ developer.country_or_region }}.

## 1. Information we process

You can enter and save account names, balances, transaction amounts, dates, categories, notes, recurring bills, reminder settings, and attachments. You can also set your language, theme, and other preferences. The app uses this information to display your ledger, calculate balances and reports, schedule bills and reminders, and provide backup, restore, and export functions.

An “account” in the ledger is a way to record your money, not an app login. The app currently does not require registration or login and does not connect to your bank accounts.

## 2. Storage and sharing

Your ledger, preferences, and imported attachments are stored on your device. The app currently offers no developer-operated cloud synchronization and does not actively upload your ledger to the developer.

When you choose to back up or export CSV, the app generates a file and passes it through your device's sharing interface to the app or recipient you select. The recipient's privacy policy governs its handling of the file. Backups may contain sensitive financial information; share them only with trusted recipients and store them securely.

Backups contain the ledger database and some preferences, but not the separately stored attachment files themselves; attachment records may remain in the database. Save original attachments separately before changing devices or uninstalling. Backup files do not have app-level password protection, so take care where you store them.

## 3. File and notification permissions

When you add an attachment or restore a backup, the app uses the system file picker to read the file you select. Added attachments are copied into the app's private storage.

If you set bill reminders, the app may request notification and exact alarm permissions. You can change these in device settings. Disabling them may prevent reminders from being delivered, but does not affect ordinary bookkeeping.

## 4. Retention and deletion

The app keeps ledger data on your device until you clear app data, uninstall the app, or replace the current ledger with a backup. After a transaction is edited or deleted, the app may retain related history locally to preserve ledger integrity; deleting a transaction does not mean its history is completely erased. Copies of saved attachments may also remain in app storage until app data is cleared.

You can clear the app's data in Android settings or uninstall it to remove its data from the device. First save any ledger and attachments you want to keep. These actions do not delete backups, CSV files, original attachments, or copies you previously saved or shared elsewhere; delete those separately.

If you email us, we use the contact information and issue details you provide to respond and handle your request.

## 5. Security

The app stores ledger files in private app storage and relies on access protections provided by the device operating system. Use a screen lock and keep your system up to date. No storage or transmission method is completely secure, especially for files shared or copied outside the app.

## 6. Changes to this policy

If the app's data practices change, we will update this policy and its effective date. Please review the latest policy when using an updated version.

## 7. Contact

**{{ developer.legal_name }}**, {{ developer.country_or_region }}  
Support: [{{ developer.support_email }}](mailto:{{ developer.support_email }})
