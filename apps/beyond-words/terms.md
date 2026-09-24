---
title: "Terms of Service"
layout: legal
app_key: "beyond-words"
permalink: /beyond-words/terms/
description: "Terms governing use of Beyond Words, generated output, anonymous service access, context packs, purchases, and service availability."
effective_date: "2026-07-29"
last_updated: "2026-09-24"
lang: en
translation_key: beyond-words-terms
alternate_lang: zh-CN
alternate_url: /zh/beyond-words/terms/
x_default_url: /beyond-words/terms/
---

{% assign app = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**Effective date:** {{ page.effective_date }}  
**Last updated:** {{ page.last_updated }}

These Terms of Service govern your use of **{{ app.name }}**, provided by
**{{ developer.legal_name }}**, operating as **{{ developer.display_name }}**.
By accessing or using the application, you agree to these Terms.

## 1. The service

{{ app.name }} provides tools for transforming user-provided text, including
rewriting, tone adjustment, and context-aware expression. The application
normally preserves the language of the input unless a selected context pack
expressly directs otherwise. Available features, limits, models, context packs,
and supported platforms may change.

The service assists with drafting. It does not replace your judgment,
professional review, or responsibility for the final text.

## 2. Eligibility

You must be at least 18 years old and legally able to enter into these Terms.
If you use the service on behalf of an organization, you represent that you are
authorized to bind that organization.

The service is not directed to, and is not intended for, people under 18.

## 3. Anonymous service access

The application does not provide a user-facing account or sign-in method. To
provide cloud-backed features, it automatically creates a Firebase anonymous
identifier. This identifier is used for authentication, quota enforcement,
fraud and abuse prevention, and purchase-entitlement verification.

You are responsible for maintaining the security of your device and for use of
the service from it. Promptly contact support if you believe that your device or
service access has been compromised.

You may not transfer, sell, or share service access in a way that circumvents
quotas, subscription restrictions, or security controls.

## 4. User content

You retain ownership of text and other content you submit. You grant us a
limited right to process that content solely to operate, secure, and support the
service. We may use feedback or harmful-output reports that you choose to submit
to investigate issues and improve safety safeguards, as described in the
Privacy Policy.

You represent that you have the rights and authority needed to submit the
content and request its processing.

Do not submit content that is unlawfully obtained, infringes another person's
rights, or contains information you are not authorized to disclose.

## 5. Generated output

Generated output may be inaccurate, incomplete, inappropriate, or similar to
content produced for other users. You must review and, where necessary, edit
output before using or sharing it.

You are responsible for:

- verifying names, dates, figures, claims, citations, and any language changes;
- deciding whether the tone is appropriate for the intended recipient;
- obtaining professional advice where legal, medical, financial, employment,
  safety, or other high-impact decisions are involved;
- complying with applicable laws, contracts, platform rules, and intellectual
  property rights.

We do not guarantee that generated output is unique, error-free, fit for a
particular purpose, or available for exclusive ownership.

## 6. Acceptable use

You may not use the service to:

- violate law or another person's rights;
- create, facilitate, or conceal fraud, impersonation, harassment, threats, or
  abuse;
- generate or distribute malicious software, credential theft, or instructions
  intended to compromise systems;
- exploit or endanger children;
- evade safety controls, quotas, access restrictions, or provider policies;
- overload, scrape, reverse engineer, or interfere with the service except
  where applicable law expressly permits;
- resell service access without written authorization;
- use automated methods that materially exceed ordinary personal use or
  published limits.

We may restrict or suspend access to protect users, providers, infrastructure,
or legal compliance.

## 7. Context packs and imported configurations

The application may support built-in or user-imported context packs. You are
responsible for reviewing imported configurations and ensuring that their
instructions and use are lawful.

We do not endorse third-party context packs and are not responsible for content,
instructions, or outcomes supplied by their authors.

## 8. Subscriptions, quotas, and billing

{% if app.subscriptions.enabled %}
Paid offerings are provided through {{ app.subscriptions.billing_provider }}.
The current public offerings include a monthly Premium subscription and a
one-time Lifetime purchase. Prices, billing periods, trial terms, taxes, and
renewal information are shown before purchase.

The Premium subscription includes a higher built-in model allowance, access to
OpenAI-compatible custom model services, and voice input. An eligible new user
may be offered a 7-day trial through Google Play. The Lifetime purchase
permanently unlocks configuration of a custom model service. It does not provide
unlimited built-in model use or voice input, and fees for a custom model service
are charged by the service provider you choose.

Subscriptions generally renew automatically unless canceled through Google
Play before the renewal date. Cancellation stops future renewal but does not
normally refund the current billing period, except where required by law or
Google Play policy.

{% if app.subscriptions.restore_supported %}
The application provides a mechanism to restore or re-check eligible purchases.
{% endif %}

Built-in model use is subject to the quota shown for your effective plan. The
free and Lifetime plans currently include 10 built-in transformations per day;
the Premium subscription currently includes 2,000 built-in model points per
billing period. Custom model service requests do not use the built-in model
allowance. Unused allowance does not carry over unless a plan expressly states
otherwise. Abuse, chargebacks, refunds, subscription expiration, or failed
verification may change feature access.
{% else %}
The current production version does not offer paid subscriptions. These Terms
will be updated before paid service is introduced.
{% endif %}

Billing disputes and refund requests may be handled by Google Play under its
policies. Contact support when an entitlement is not reflected correctly after
a valid purchase.

## 9. Feedback and reports

You may submit feedback, support requests, or reports about generated output.
You grant us permission to use non-confidential feedback to improve the
service, without an obligation to compensate you.

Reports may be reviewed to investigate abuse, improve safeguards, and enforce
these Terms.

## 10. Third-party services

The service relies on Google Play, Firebase, Google Gemini, and other
infrastructure providers. The built-in model service and voice transcription
use Google Gemini. See the [Gemini API Additional Terms of Service](https://ai.google.dev/gemini-api/terms)
and [Google Privacy Policy](https://policies.google.com/privacy) for Google's
applicable terms and data handling.

If you configure an OpenAI-compatible custom model service, requests are sent
directly from your device to the provider you select. That provider's terms,
privacy practices, availability, and charges apply to that service.

We are not responsible for third-party services outside our reasonable control.

## 11. Availability and changes

We may modify, suspend, or discontinue features, models, quotas, context packs,
or platform support. We aim to provide reasonable notice when a material change
adversely affects paid access, but emergency security, legal, or provider
changes may require immediate action. A Lifetime purchase permanently unlocks
the in-application ability to configure a custom model service; it does not
guarantee the continued availability, compatibility, or pricing of any
third-party service.

The service may be interrupted by maintenance, network failures, provider
outages, device limitations, or events beyond our control.

## 12. Suspension and termination

You may stop using the service at any time. You can delete local history in the
application and remove local custom context packs or custom model configuration.

We may suspend or terminate access if reasonably necessary to:

- address a violation of these Terms;
- prevent harm, fraud, abuse, or a security incident;
- comply with law or provider requirements;
- respond to non-payment, refund, or subscription expiration;
- discontinue the service.

Where appropriate, we will provide notice and an opportunity to appeal through
support.

## 13. Disclaimers

To the maximum extent permitted by law, the service and generated output are
provided “as is” and “as available.” We disclaim implied warranties of
merchantability, fitness for a particular purpose, non-infringement, and
accuracy where those disclaimers are legally permitted.

Nothing in these Terms excludes rights or warranties that cannot lawfully be
excluded.

## 14. Limitation of liability

To the maximum extent permitted by law, {{ developer.legal_name }} will not be
liable for indirect, incidental, special, consequential, exemplary, or punitive
damages, or for loss of profits, data, reputation, opportunity, or business,
arising from the service or generated output.

Where liability cannot be excluded, total liability will be limited to the
greater of the amount you paid for the service during the twelve months before
the event giving rise to the claim or the minimum amount required by applicable
law.

These limitations do not apply where prohibited by law.

## 15. Indemnity

Where permitted by law, you agree to defend and indemnify
{{ developer.legal_name }} against third-party claims arising from your unlawful
content, misuse of the service, or material violation of these Terms.

## 16. Changes to these Terms

We may update these Terms to reflect product, provider, legal, or security
changes. The updated version will show a new “Last updated” date. Continued use
after the effective date constitutes acceptance where permitted by law.

## 17. Contact

**{{ developer.legal_name }}**  
Operating as {{ developer.display_name }}  
{{ developer.country_or_region }}  
[{{ developer.support_email }}](mailto:{{ developer.support_email }})
