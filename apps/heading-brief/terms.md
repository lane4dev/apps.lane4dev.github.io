---
title: "Terms of Service"
layout: legal
app_key: "heading-brief"
permalink: /heading-brief/terms/
description: "Terms governing use of the Heading Brief browser extension."
lang: en
translation_key: heading-brief-terms
alternate_lang: zh-CN
alternate_url: /zh/heading-brief/terms/
x_default_url: /heading-brief/terms/
---

{% assign developer = site.data.site.developer %}

**Developer:** {{ developer.legal_name }}  
**Contact:** [{{ developer.support_email }}](mailto:{{ developer.support_email }})

These terms govern your use of the Heading Brief browser extension (the “extension”). By using the extension, you agree to these terms. If you do not agree, do not use the extension.

## The extension

Heading Brief identifies sections on supported webpages and lets you request AI-generated summaries. Features depend on the page, your browser, network availability, and the AI provider and model you select. We may change, suspend, or discontinue features.

## Your use and content

You are responsible for your use of the extension and for ensuring that you have the rights and permissions needed to access and submit content for summarization. Comply with applicable laws, website terms, and the terms of the AI provider you select. Do not use the extension to send content unlawfully or to interfere with a service or another person's rights.

Before requesting a summary, consider whether the selected page contains confidential, personal, or sensitive information. A section request can include its subsections, and a main-title request can include the article's extracted content. See the [Privacy Policy]({{ site.data.apps[page.app_key].privacy_path | relative_url }}) for how the extension handles information.

## Third-party services and charges

The extension connects to the AI provider or endpoint you configure. Third-party services are governed by their own terms and privacy policies; we do not control their availability, output, security, or data practices. You are responsible for your provider account, API key, endpoint configuration, and any charges incurred through your use. If you use Ollama, you are responsible for installing and operating the service you select.

## AI-generated output

Summaries may be incomplete, inaccurate, outdated, or misleading, and may omit context. Check the original source and independently verify information before relying on a summary, especially for important decisions. A summary is not professional advice.

## Availability and liability

To the extent permitted by applicable law, the extension is provided “as is” and “as available,” without warranties of any kind, express or implied. We do not guarantee uninterrupted operation or the accuracy of summaries.

To the extent permitted by applicable law, {{ developer.legal_name }} is not liable for indirect or consequential losses arising from use of the extension or third-party services. Nothing in these terms excludes or limits rights or liabilities that cannot lawfully be excluded or limited.

## Changes and contact

We may update these terms. The updated terms will show a new effective date, and we will provide any notice required by applicable law. You can stop using the extension at any time by uninstalling it.

Questions about these terms can be sent to [{{ developer.support_email }}](mailto:{{ developer.support_email }}).
