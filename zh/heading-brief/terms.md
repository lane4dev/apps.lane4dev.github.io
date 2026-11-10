---
title: "服务条款"
layout: legal
app_key: "heading-brief"
permalink: /zh/heading-brief/terms/
description: "适用于章节速览浏览器扩展的服务条款。"
lang: zh-CN
translation_key: heading-brief-terms
alternate_lang: en
alternate_url: /heading-brief/terms/
x_default_url: /heading-brief/terms/
---

{% assign developer = site.data.site.developer %}
{% assign app = site.data.apps_zh[page.app_key] %}

**开发者：** {{ developer.legal_name }}  
**联系方式：** [{{ developer.support_email }}](mailto:{{ developer.support_email }})

本条款适用于你对章节速览浏览器扩展（以下简称“扩展”）的使用。使用扩展即表示你同意本条款；
如果不同意，请勿使用扩展。

## 扩展功能

章节速览识别受支持网页中的章节，并允许你请求 AI 生成摘要。功能取决于页面、浏览器、网络可用性以及
你选择的 AI 服务提供方和模型。我们可能更改、暂停或停止功能。

## 你的使用和内容

你须对扩展的使用负责，并确保拥有访问和提交内容以生成摘要所需的权利和许可。请遵守适用法律、网站条款
以及你选择的 AI 服务提供方的条款。请勿利用扩展非法发送内容，或干扰服务或他人的权利。

请求摘要前，请考虑所选页面是否包含机密、个人或敏感信息。章节请求可能包含其子章节，主标题请求可能
包含提取出的文章内容。扩展如何处理信息，请参阅[隐私政策]({{ app.privacy_path | relative_url }})。

## 第三方服务和费用

扩展连接到你配置的 AI 服务提供方或端点。第三方服务受其自身条款和隐私政策约束；我们无法控制其可用性、
输出、安全性或数据处理方式。你须负责自己的服务账户、API 密钥、端点配置，以及使用过程中产生的费用。
如果使用 Ollama，你须负责安装和运行所选服务。

## AI 生成的内容

摘要可能不完整、不准确、过时或具有误导性，也可能遗漏上下文。依赖摘要前，请查看原始来源并独立核实信息，
尤其是在作出重要决定时。摘要不构成专业建议。

## 可用性和责任

在适用法律允许的范围内，扩展按“现状”和“可用状态”提供，不附带任何明示或默示保证。我们不保证扩展
不间断运行或摘要准确。

在适用法律允许的范围内，{{ developer.legal_name }} 不对因使用扩展或第三方服务产生的间接或后果性损失
承担责任。本条款不排除或限制依法不得排除或限制的权利或责任。

## 变更和联系

我们可能更新本条款。更新后的条款将显示新的生效日期，并按照适用法律的要求提供通知。你可以随时卸载扩展，
停止使用。

有关本条款的问题可发送至 [{{ developer.support_email }}](mailto:{{ developer.support_email }})。
