---
title: "Support"
layout: app-page
app_key: "beyond-words"
permalink: /beyond-words/support/
description: "Support options for Beyond Words accounts, subscriptions, transformations, context packs, privacy, and harmful-output reports."
last_updated: "2026-07-29"
---

{% assign app = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**Last updated:** {{ page.last_updated }}

## Contact support

Email:
[{{ developer.support_email }}](mailto:{{ developer.support_email }})

Expected response time:
**{{ site.data.site.support.expected_response_time }}**.

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
3. Check whether the daily or monthly quota has been exhausted.
4. Try a shorter input to determine whether the issue is input-specific.
5. Contact support if the failure persists.

### The generated wording is inaccurate

Generated output must be reviewed before use. Check names, dates, figures,
claims, and the intended tone. Refine the input or choose a more specific
context pack.

### A result is harmful or inappropriate

{% if app.support.harmful_output_reporting %}
{{ app.support.in_app_report_path }} The report helps investigate unsafe or
inappropriate output. Remove unrelated personal information before submitting
additional details.
{% endif %}

For an urgent report that cannot be submitted in the application, email
[{{ developer.support_email }}](mailto:{{ developer.support_email }}) with the
subject **Beyond Words output report**.

### A subscription is active but Pro access is missing

1. Confirm that Google Play shows the subscription as active.
2. Use the application's restore or refresh purchase action.
3. Confirm that the same Google account was used for the purchase.
4. Restart the application after entitlement refresh.
5. Contact support with the Google Play order number if access remains
   incorrect.

Refund and cancellation decisions may be handled by Google Play under its
policies.

### Local history is missing

{% if app.privacy.local_history_enabled %}
History is stored on the device. Clearing application data, uninstalling the
application, resetting the device, or moving to another device can remove or
separate local history. Cloud restoration is not available while synchronization
is disabled.
{% endif %}

### A custom context pack cannot be imported

Confirm that:

- the file is valid JSON;
- the schema version is supported;
- required identifiers and prompt fields are present;
- the file size is within the application's limit;
- the pack does not contain unsupported or unsafe instructions.

## Account and privacy

- [Privacy Policy]({{ app.privacy_path | relative_url }})
- [Terms of Service]({{ app.terms_path | relative_url }})
- [Delete account and data]({{ app.deletion_path | relative_url }})

Privacy requests:
[{{ developer.privacy_email }}](mailto:{{ developer.privacy_email }})

## Service status

A dedicated public status page is not currently provided. Significant outages
may be communicated through the application, this site, or the support channel.
