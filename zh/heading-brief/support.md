---
title: "支持"
layout: app-page
app_key: "heading-brief"
permalink: /zh/heading-brief/support/
description: "获取章节速览及其 AI 服务设置方面的帮助。"
lang: zh-CN
translation_key: heading-brief-support
alternate_lang: en
alternate_url: /heading-brief/support/
x_default_url: /heading-brief/support/
---

{% assign developer = site.data.site.developer %}
{% assign app = site.data.apps_zh[page.app_key] %}

**开发者：** {{ developer.legal_name }}  
**联系方式：** [{{ developer.support_email }}](mailto:{{ developer.support_email }})

## 联系支持

请提供浏览器和扩展版本、受影响的网站以及问题描述。请从截图中移除私人信息，不要发送 API 密钥或机密网页内容。

## 常见问题

- 如果摘要按钮没有出现，请检查扩展的网站访问权限以及允许名单或阻止名单。标题识别可能无法适用于所有页面。
- 如果摘要生成失败，请检查所选服务提供方、模型、端点、网络连接以及服务账户或配额。如果使用 Ollama，请确认服务正在运行。
- 如果摘要不准确或不完整，请查阅原文，并尝试其他提示词或模型。

有关你的数据和选择，请参阅[隐私政策]({{ app.privacy_path | relative_url }})和
[服务条款]({{ app.terms_path | relative_url }})。
