---
title: "支持"
layout: app-page
app_key: "beyond-words"
permalink: /zh/beyond-words/support/
description: "言外账户、订阅、文本转换、语境包、隐私和不当输出报告的支持方式。"
last_updated: "2026-07-29"
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
3. 检查每日或每月配额是否已经用尽。
4. 尝试缩短输入，以判断问题是否与特定内容有关。
5. 如果问题持续发生，请联系支持。

### 生成的措辞不准确

生成结果必须在使用前检查。请核对姓名、日期、数字、陈述和预期语气。
你可以调整输入，或选择更具体的语境包后重新生成。

### 结果有害或不适当

{% if app_config.support.harmful_output_reporting %}
{{ app.support.in_app_report_path }}报告将用于调查不安全或不适当的输出。
提交补充信息前，请移除无关的个人信息。
{% endif %}

如果无法在应用中提交紧急报告，请发送邮件至
[{{ developer.support_email }}](mailto:{{ developer.support_email }})，主题填写
**言外输出报告**。

### 订阅有效，但 Pro 权限缺失

1. 确认 Google Play 显示订阅有效。
2. 使用应用内的恢复或刷新购买功能。
3. 确认购买时使用的是同一个 Google 账户。
4. 刷新权益后重启应用。
5. 如果权限仍不正确，请附 Google Play 订单号联系支持。

退款和取消可能由 Google Play 按其政策处理。

### 本地历史记录丢失

{% if app_config.privacy.local_history_enabled %}
历史记录保存在设备上。清除应用数据、卸载应用、重置设备或更换设备都可能移除或
隔离本地历史。在同步功能关闭期间，无法从云端恢复。
{% endif %}

### 无法导入自定义语境包

请确认文件是有效 JSON、架构版本受支持、必需的标识符和提示词字段存在、
文件大小未超过限制，并且不包含不受支持或不安全的指令。

## 账户与隐私

- [隐私政策]({{ app.privacy_path | relative_url }})
- [服务条款]({{ app.terms_path | relative_url }})
- [删除账户和数据]({{ app.deletion_path | relative_url }})

隐私请求：[{{ developer.support_email }}](mailto:{{ developer.support_email }})

## 服务状态

目前没有单独的公开状态页面。重大中断可能通过应用、本网站或支持渠道发布。
