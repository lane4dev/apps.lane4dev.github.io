---
title: "Privacy Policy"
layout: legal
app_key: "beyond-words"
permalink: /beyond-words/privacy/
description: "How Beyond Words processes account information, user-provided text, service usage, diagnostics, and subscription data."
effective_date: "2026-07-29"
last_updated: "2026-07-29"
lang: en
translation_key: beyond-words-privacy
alternate_lang: zh-CN
alternate_url: /zh/beyond-words/privacy/
x_default_url: /beyond-words/privacy/
---

{% assign app = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**Effective date:** {{ page.effective_date }}  
**Last updated:** {{ page.last_updated }}

This Privacy Policy explains how **{{ app.name }}** processes information when
you use the Android application and related services. The service is provided
by **{{ developer.legal_name }}**, operating as **{{ developer.display_name }}**
in {{ developer.country_or_region }}.

## 1. Scope

This policy applies to the {{ app.name }} mobile application, its cloud-backed
features, its support channels, and the application pages hosted under
`apps.tangyu.me`.

It does not govern third-party services that you choose to access independently,
including websites or applications opened from external links.

## 2. Information processed

### 2.1 Account information

{% if app.privacy.account_required %}
When you create or use an account, we process identifiers required to
authenticate you and operate your account. Depending on the sign-in method,
this may include a Firebase user ID, email address, display name, authentication
provider, and account status.
{% else %}
An account is not required for the current production version. If account
features are introduced, this policy will be updated before those features are
enabled.
{% endif %}

### 2.2 Text and generated content

When you request a transformation, the application processes:

- the text you submit;
- the selected context pack or transformation mode;
- configuration needed to produce the result;
- the generated output;
- technical request metadata such as timestamps, request identifiers, and
  success or error status.

The submitted text and necessary instructions are transmitted to a third-party
AI service provider to generate a response. That provider processes the text
under its own applicable terms and privacy practices.

Do not submit passwords, payment card details, government identifiers,
confidential business information, health records, or other information that
you are not authorized to process.

### 2.3 Local history

{% if app.privacy.local_history_enabled %}
Transformation history is stored locally on your device so you can reopen and
refine previous results. It is not synchronized to another device unless a
future synchronization feature is explicitly introduced and described in an
updated policy.
{% endif %}

{% if app.privacy.cloud_history_sync_enabled %}
Transformation history may be synchronized through the service. The
application will identify synchronized content and provide controls to remove
it.
{% endif %}

### 2.4 Usage, quota, and entitlement information

We process information needed to enforce usage limits and subscription
entitlements, including account type, quota balance, renewal or reset period,
request counts, subscription product identifiers, purchase state, and
verification results.

Payment card information is handled by Google Play and is not provided directly
to {{ developer.display_name }}.

### 2.5 Diagnostics and analytics

{% if app.privacy.diagnostics_enabled %}
The production application uses diagnostic services to collect crash reports,
application version, device and operating-system information, performance data,
and technical logs needed to investigate failures.
{% else %}
Automated crash-reporting collection is disabled in the current configuration.
Support requests may still include technical information that you choose to
provide.
{% endif %}

{% if app.privacy.analytics_enabled %}
The production application uses analytics to understand aggregate feature use,
session behavior, and reliability.
{% else %}
General behavioral analytics are disabled in the current configuration.
{% endif %}

{% if app.privacy.advertising_enabled %}
The application uses advertising services and may process advertising
identifiers as described in the Google Play Data safety disclosure.
{% else %}
The application does not display third-party advertising and does not process
data for targeted advertising.
{% endif %}

### 2.6 Support communications

When you contact support or report generated content, we process your contact
details, message, relevant account or result identifiers, attachments, and the
information needed to investigate and respond.

## 3. How information is used

Information is processed to:

- authenticate users and protect accounts;
- perform requested text transformations;
- calculate quotas and verify subscription access;
- provide local history and user-requested restoration;
- prevent abuse, fraud, and unauthorized access;
- diagnose service failures and improve reliability;
- respond to support, privacy, and harmful-output reports;
- comply with legal obligations and enforce the Terms of Service.

We do not sell personal information.

## 4. Service providers

The service relies on providers that process information on our behalf or under
their own terms, including:

- **Google Firebase** — {{ app.privacy.firebase_services }};
- **Google Play** — application distribution, subscription billing, purchase
  records, and entitlement information;
- third-party AI service providers — generation of requested text
  transformations;
- infrastructure or email providers used to host the public pages and respond
  to support requests.

These providers may process information in countries other than your own. Their
contractual terms and technical controls govern their processing.

## 5. Retention

We retain information only for as long as needed for the purposes described in
this policy.

- Local history remains on your device until you delete it, clear application
  data, or uninstall the application.
- Account and quota records remain while the account is active and during the
  account deletion process.
- Server and security logs are retained only for the period reasonably needed
  for security, fraud prevention, and service operation.
- AI-provider handling and retention are subject to the provider's applicable
  terms and privacy practices.
- Purchase and transaction records may be retained where required for tax,
  accounting, fraud prevention, dispute resolution, or legal compliance.

## 6. Sharing and disclosure

Information may be disclosed:

- to the providers listed above as necessary to operate the service;
- when you direct us to share or export content;
- to investigate security incidents, abuse, or violations of the Terms;
- when required by law, legal process, or a valid governmental request;
- as part of a merger, acquisition, restructuring, or transfer of the service,
  subject to appropriate notice and safeguards.

## 7. Security

We use reasonable administrative, technical, and organizational measures,
including authenticated backend access, restricted service credentials, and
transport encryption. No system is completely secure, and we cannot guarantee
that unauthorized access will never occur.

## 8. Your controls and rights

Depending on your location, you may have rights to access, correct, delete,
restrict, or object to certain processing, and to obtain a copy of personal
information.

You can:

- edit or delete locally stored history in the application;
- manage or cancel subscriptions through Google Play;
- delete your account through the application or the
  [account deletion page]({{ app.deletion_path | relative_url }});
- contact us at
  [{{ developer.support_email }}](mailto:{{ developer.support_email }}) for a
  privacy request.

We may need to verify your identity before completing a request.

## 9. Children's privacy

{{ app.name }} is not directed to children under 13, or the minimum age required
to consent to data processing in the user's country. We do not knowingly
collect personal information from children in violation of applicable law. If
you believe a child has provided personal information, contact us so it can be
reviewed and removed.

## 10. International transfers

Information may be processed in countries where our service providers operate.
Where required, we use contractual or other recognized safeguards for
international transfers.

## 11. Changes to this policy

We may update this policy when the service, providers, or legal requirements
change. The revised policy will identify a new “Last updated” date. Material
changes may also be communicated in the application or through another
appropriate channel.

## 12. Contact

**{{ developer.legal_name }}**  
Operating as {{ developer.display_name }}  
{{ developer.country_or_region }}  
Privacy: [{{ developer.support_email }}](mailto:{{ developer.support_email }})<br>
Support: [{{ developer.support_email }}](mailto:{{ developer.support_email }})
