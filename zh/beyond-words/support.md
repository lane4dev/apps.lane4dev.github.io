---
title: "支持"
layout: app-page
app_key: "beyond-words"
permalink: /zh/beyond-words/support/
description: "言外的文本转换、语境包、自定义模型服务、语音输入、购买、隐私和不当输出报告支持方式。"
last_updated: "2026-09-24"
lang: zh-CN
translation_key: beyond-words-support
alternate_lang: en
alternate_url: /beyond-words/support/
x_default_url: /beyond-words/support/
---

{% assign app = site.data.apps_zh[page.app_key] %}
{% assign app_config = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**最后更新：** {{ page.last_updated }}

## 联系支持

电子邮件：[{{ developer.support_email }}](mailto:{{ developer.support_email }})

请根据问题提供以下信息：

- 应用版本；
- Android 版本和设备型号；
- 涉及的功能或语境包；
- 问题发生的大致日期和时间；
- 已移除私人信息的截图；
- 账单问题可提供购买订单号，但不要提供完整支付信息。

请勿发送密码、一次性验证码、模型服务 API 密钥、政府签发的身份证件号码，
或调查问题不需要的机密文本。

## 常见问题

### 转换失败或超时

1. 确认设备网络连接稳定。
2. 稍等片刻后重试一次。
3. 如果使用内置模型服务，检查相应的每日或每月配额是否已经用尽。
4. 尝试缩短输入，以判断问题是否与特定内容有关。
5. 如果问题持续发生，请联系支持。

使用自定义模型服务时，不适用内置服务配额。请检查 HTTPS Base URL、API Key、模型名称、
网络连接，以及服务提供方的账户状态或配额。请勿将 API Key 发送给支持人员。

### 生成的措辞不准确

生成结果必须在使用前检查。请核对姓名、日期、数字、陈述和预期语气。
你可以调整输入，或选择更具体的语境包后重新生成。

### 结果有害或不适当

{% if app_config.support.harmful_output_reporting %}
{{ app.support.in_app_report_path }}该报告将用于调查不安全或不适当的输出。仅在结果卡片仍显示
生成内容时可以举报。举报表单允许你选择是否包含原始输入；添加备注或包含原始输入前，
请移除无关的个人信息。
{% endif %}

如果无法在应用中提交举报，请发送邮件至
[{{ developer.support_email }}](mailto:{{ developer.support_email }})，主题填写
**言外输出报告**。

### 订阅或终身权益有效，但访问权限缺失

1. 确认 Google Play 显示相应订阅或一次性购买有效。
2. 打开订阅页面，选择“恢复购买”。
3. 确认购买时使用的是同一个 Google 账户。
4. 刷新权益后重启应用。
5. 如果权限仍不正确，请附 Google Play 订单号联系支持。

退款和取消可能由 Google Play 按其政策处理。

### 本地历史记录丢失

{% if app_config.privacy.local_history_enabled %}
历史记录保存在设备上。清除应用数据、卸载应用、重置设备或更换设备都可能移除或
本地历史。

导入的自定义语境包和自定义模型服务配置也仅保存在当前设备。清除应用数据或卸载应用会
移除这些本地内容，以及本地保存的自定义模型服务 API Key。
{% endif %}

### 无法导入自定义语境包

请确认：

- 选择的是有效 JSON 文件，或指向 JSON 文档的 HTTPS URL；
- 文档是有效 JSON，且使用受支持的架构版本；
- 必需的标识符、本地化内容、指令和示例均存在；
- 文件或下载响应不超过 512 KiB；

完整的格式和规则说明请参阅[自定义语境包指南]({{ app.custom_packs_path | relative_url }})。

### 无法配置或使用自定义模型服务

仅当当前权益允许时，才可以使用自定义模型服务。公开销售的高级版订阅和终身版买断均包含
此能力。

请确认服务名称、模型名称和 API Key 均已填写，且 Base URL 是 HTTPS 服务基础地址，
而不是完整的 chat-completions 接口地址。请检查服务提供方的文档、账户状态、账单和配额。
发往自定义模型服务的请求会从你的设备直接发送至所选服务提供方，因此服务可用性和收费
由该提供方负责。请勿在支持请求或截图中包含 API Key。

### 语音输入无法开始或无法转写

语音输入需要包含语音权限的有效权益。公开销售方案中，高级版订阅包含该功能，终身版买断
不包含该功能。请确认已授予麦克风权限、网络连接稳定且内置服务配额可用。如问题持续，
请重新打开应用后重试；联系支持时，除非确有必要，请勿附加录音或其他敏感内容。

## 隐私与数据

- [隐私政策]({{ app.privacy_path | relative_url }})
- [服务条款]({{ app.terms_path | relative_url }})

应用不提供可由用户创建或删除的账户。云端功能会使用自动创建的 Firebase 匿名标识符，
用于配额执行、防欺诈和购买权益验证。

隐私请求：[{{ developer.support_email }}](mailto:{{ developer.support_email }})

## 服务状态

目前没有单独的公开状态页面。重大中断可能通过应用、本网站或支持渠道发布。
