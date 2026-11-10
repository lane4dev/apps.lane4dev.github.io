---
title: "Support"
layout: app-page
app_key: "heading-brief"
permalink: /heading-brief/support/
description: "Get help with Heading Brief and its AI provider settings."
lang: en
translation_key: heading-brief-support
alternate_lang: zh-CN
alternate_url: /zh/heading-brief/support/
x_default_url: /heading-brief/support/
---

{% assign developer = site.data.site.developer %}
{% assign app = site.data.apps[page.app_key] %}

**Developer:** {{ developer.legal_name }}  
**Contact:** [{{ developer.support_email }}](mailto:{{ developer.support_email }})

## Contact support

Include the browser and extension versions, the affected site, and a description
of the issue. Remove private information from screenshots and do not send API
keys or confidential page content.

## Troubleshooting

- If summary buttons do not appear, check the extension's site access and its
  allowlist or blocklist. Heading detection may not work on every page.
- If a summary fails, check the selected provider, model, endpoint, network
  connection, and provider account or quota. If using Ollama, make sure the
  service is running.
- If a summary is inaccurate or incomplete, consult the original article and
  try another prompt or model.

For information about your data and choices, see the
[Privacy Policy]({{ app.privacy_path | relative_url }}) and
[Terms of Service]({{ app.terms_path | relative_url }}).
