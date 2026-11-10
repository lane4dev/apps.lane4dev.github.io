---
title: "Privacy Policy"
layout: legal
app_key: "heading-brief"
permalink: /heading-brief/privacy/
description: "How Heading Brief handles webpage content, settings, and summary requests."
lang: en
translation_key: heading-brief-privacy
alternate_lang: zh-CN
alternate_url: /zh/heading-brief/privacy/
x_default_url: /heading-brief/privacy/
---

{% assign developer = site.data.site.developer %}

**Developer:** {{ developer.legal_name }}  
**Contact:** [{{ developer.support_email }}](mailto:{{ developer.support_email }})

This policy describes how Heading Brief (the “extension”) handles information when you use it. It applies to the extension; third-party websites, AI providers, and browser services have their own policies.

## Information the extension handles

- **Webpage content and site information.** On enabled HTTP and HTTPS sites, the extension accesses the page, including its hostname, headings, and article content, to find sections and place summary buttons. Page content can include personal, confidential, or other sensitive information.
- **Settings you provide.** These include your AI provider, model, API key, custom endpoint, prompt, target language, site allowlist or blocklist, display language, and appearance preferences.
- **Summary requests and results.** When you request a summary, the extension prepares extracted text from the selected section, including its subsections, along with the configured prompt and target language. The selected AI provider returns a summary or an error.
- **Support communications.** If you contact us, we receive the information you choose to include in your message.

## How information is used and shared

The extension processes page content in your browser to identify article sections. It sends a summary request when you select a summary button or retry an existing summary; it does not automatically send the page for summarization just because you visit it. A request for an identified main title can contain the article's extracted content. Extraction may include content you did not expect, so use care on sensitive pages.

Summary requests are sent to the AI provider and endpoint selected in your settings. Supported providers include OpenAI, Google Gemini, Anthropic, DeepSeek, Alibaba Cloud Model Studio (Qwen), and Ollama. If you configure a custom endpoint, the operator of that endpoint receives the request. The selected service receives the extracted content, prompt and model request, along with authentication information where required. It may also receive network and request metadata, such as your IP address, under its own practices.

Ollama uses a local endpoint by default. If you configure a remote endpoint, requests go to that endpoint instead. AI providers and endpoint operators control their own retention, security, and use of the information they receive; consult their terms and privacy policies before sending content. The extension does not itself control or delete information retained by those parties.

The extension's code sends summary requests directly to the selected provider or endpoint; it does not include a separate developer-operated summary server or analytics service. If you contact us, we use your message to respond and provide support.

## Storage and retention

The extension stores its settings, including API keys, in your browser's extension sync storage. When browser synchronization is enabled, the browser may sync these settings to your other signed-in browsers. Sync storage is not intended as a secure secret vault; protect your browser profile and use provider-side key restrictions where available.

Extracted sections and generated summaries are held in the open page while the relevant extension component remains active. The extension does not intentionally save them as a summary history in extension storage. Closing the page or disabling the extension on that site removes the in-page component, but does not delete data already received by an AI provider or copied to your clipboard.

Settings remain in extension storage until changed or removed. You can change settings in the extension and remove the extension through your browser. Browser sync behavior and copies on other devices are controlled by the browser; consult its settings and documentation when removing synced data. Older installations may also retain legacy configuration values in extension storage. To invalidate an API key, revoke or rotate it with its provider.

## Your choices

- Enable or disable the extension for sites using its allowlist or blocklist, or manage site access through your browser.
- Choose the provider, model, and supported endpoint before requesting a summary.
- Avoid requesting summaries of information you do not want sent to the selected provider.
- Change or remove settings, uninstall the extension, and contact an AI provider about data it holds.

## Changes and contact

We may update this policy as the extension changes. We will update the effective date and provide any notice required by applicable law or platform policies. For privacy questions or requests, contact [{{ developer.support_email }}](mailto:{{ developer.support_email }}).
