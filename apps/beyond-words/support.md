---
title: "Support"
layout: app-page
app_key: "beyond-words"
permalink: /beyond-words/support/
description: "Support for Beyond Words transformations, context packs, custom model services, voice input, purchases, privacy, and harmful-output reports."
last_updated: "2026-09-24"
lang: en
translation_key: beyond-words-support
alternate_lang: zh-CN
alternate_url: /zh/beyond-words/support/
x_default_url: /beyond-words/support/
---

{% assign app = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**Last updated:** {{ page.last_updated }}

## Contact support

Email:
[{{ developer.support_email }}](mailto:{{ developer.support_email }})

Include the following where relevant:

- application version;
- Android version and device model;
- the feature or context pack involved;
- the approximate date and time of the issue;
- a screenshot with private information removed;
- a purchase order number for billing issues, but never full payment details.

Do not send passwords, one-time codes, model-service API keys, government
identifiers, or confidential text that is not necessary to investigate the
issue.

## Common issues

### A transformation fails or times out

1. Confirm that the device has a stable connection.
2. Retry once after a short interval.
3. If you are using the built-in model service, check whether the applicable
   daily or monthly quota has been exhausted.
4. Try a shorter input to determine whether the issue is input-specific.
5. Contact support if the failure persists.

The built-in service quota does not apply when you use a custom model service.
For a custom service, check its HTTPS Base URL, API key, model name, network
connection, and the service provider's account status or quota. Do not send an
API key to support.

### The generated wording is inaccurate

Generated output must be reviewed before use. Check names, dates, figures,
claims, and the intended tone. Refine the input or choose a more specific
context pack.

### A result is harmful or inappropriate

{% if app.support.harmful_output_reporting %}
{{ app.support.in_app_report_path }} The report helps investigate unsafe or
inappropriate output. Reporting is available only while the generated output is
shown in the result card. The report form lets you choose whether to include the
original input; remove unrelated personal information before adding a note or
including the original input.
{% endif %}

If you cannot submit a report in the application, email
[{{ developer.support_email }}](mailto:{{ developer.support_email }}) with the
subject **Beyond Words output report**.

### A subscription or lifetime entitlement is active but access is missing

1. Confirm that Google Play shows the corresponding subscription or one-time
   purchase.
2. Open the Subscription screen and select **Restore purchases**.
3. Confirm that the same Google account was used for the purchase.
4. Restart the application after entitlement refresh.
5. Contact support with the Google Play order number if access remains
   incorrect.

Refund and cancellation decisions may be handled by Google Play under its
policies.

### Local history is missing

{% if app.privacy.local_history_enabled %}
History is stored on the device. Clearing application data, uninstalling the
application, resetting the device, or moving to another device can remove local history.

Imported custom context packs and custom-model configuration are also local to
the device. Clearing application data or uninstalling the application removes
those local items and the locally stored custom-model API key.
{% endif %}

### A custom context pack cannot be imported

Confirm that:

- you selected either a valid JSON file or an HTTPS URL to a JSON document;
- the document is valid JSON and uses a supported schema version;
- required identifiers, localizations, instructions, and examples are present;
- the file or downloaded response is no larger than 512 KiB;

For the full format and rules, see the
[Custom Context Pack Guide]({{ app.custom_packs_path | relative_url }}).

### A custom model service cannot be configured or used

Custom model services are available only when your current entitlement permits
them. The public Premium subscription and Lifetime purchase include this
capability.

Confirm that the service name, model name, and API key are present, and that the
Base URL is an HTTPS service base URL rather than a full chat-completions
endpoint. Check the provider's documentation, account status, billing, and
quota. Requests to a custom model service are sent directly from your device to
the provider you selected, so its availability and charges are handled by that
provider. Never include an API key in a support request or screenshot.

### Voice input does not start or transcribe

Voice input requires an entitlement that includes voice access. In the public
offers, it is included with the Premium subscription and is not included with
the Lifetime purchase. Confirm microphone permission, a stable network
connection, and available built-in service quota. If the issue continues, retry
after reopening the application and contact support without attaching audio or
other sensitive content unless it is necessary for the request.

## Privacy and data

- [Privacy Policy]({{ app.privacy_path | relative_url }})
- [Terms of Service]({{ app.terms_path | relative_url }})

The application does not provide a user-facing account to create or delete. It
uses an automatically created Firebase anonymous identifier for cloud-backed
features, quota enforcement, fraud prevention, and purchase-entitlement
verification.

Privacy requests:
[{{ developer.support_email }}](mailto:{{ developer.support_email }})

## Service status

A dedicated public status page is not currently provided. Significant outages
may be communicated through the application, this site, or the support channel.
