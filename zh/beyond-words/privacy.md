---
title: "隐私政策"
layout: legal
app_key: "beyond-words"
permalink: /zh/beyond-words/privacy/
description: "言外如何处理账户信息、用户提供的文本、服务使用情况、诊断和订阅数据。"
effective_date: "2026-07-29"
last_updated: "2026-07-29"
lang: zh-CN
translation_key: beyond-words-privacy
alternate_lang: en
alternate_url: /beyond-words/privacy/
x_default_url: /beyond-words/privacy/
---

{% assign app = site.data.apps_zh[page.app_key] %}
{% assign app_config = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**生效日期：** {{ page.effective_date }}  
**最后更新：** {{ page.last_updated }}

本隐私政策说明你使用 {{ app.name }} Android 应用及相关服务时，我们如何处理信息。
服务由位于 {{ developer.country_or_region }}、以
**{{ developer.display_name }}** 名义运营的 **{{ developer.legal_name }}** 提供。

## 1. 适用范围

本政策适用于 {{ app.name }} 移动应用、云端功能、支持渠道，以及托管在
`apps.tangyu.me` 下的应用页面。它不适用于你独立访问的第三方服务，
包括通过外部链接打开的网站或应用。

## 2. 处理的信息

### 2.1 账户信息

{% if app_config.privacy.account_required %}
使用云端功能需要账户。我们可能处理电子邮件地址、认证提供方标识符、内部用户 ID、
账户创建及最近登录时间，以及维护认证和安全所需的技术元数据。
{% endif %}

认证由 Google Firebase 提供。密码凭据由认证提供方处理，我们不会以可读取形式接收密码。

### 2.2 你提供的文本和生成结果

当你请求转换时，我们会处理输入文本、所选语境或语境包、转换指令、语言和语气选项，
以及生成结果。请求还可能包含账户或请求标识符及成功或错误状态。

提交的文本和必要指令会发送至 **{{ app_config.privacy.ai_provider_name }}** 以生成响应。
该提供方的隐私信息见[其隐私页面]({{ app_config.privacy.ai_provider_privacy_url }})。

提供方的内容保留期限：**{{ app_config.privacy.ai_content_retention }}**。

请勿提交密码、银行卡信息、政府签发的身份证件号码、机密商业信息、健康记录，
或你无权处理的其他信息。

### 2.3 本地历史记录

{% if app_config.privacy.local_history_enabled %}
转换历史保存在设备本地，便于重新打开和调整结果。除非未来明确推出同步功能并更新本政策，
否则这些记录不会同步到其他设备。
{% endif %}

{% if app_config.privacy.cloud_history_sync_enabled %}
转换历史可能通过服务同步。应用会标识已同步内容，并提供移除控制。
{% endif %}

### 2.4 使用量、配额与权益信息

为了执行使用限制和订阅权益，我们会处理账户类型、配额余额、续期或重置周期、请求次数、
订阅产品标识符、购买状态和验证结果。银行卡信息由 Google Play 处理，
不会直接提供给 {{ developer.display_name }}。

### 2.5 诊断与分析

{% if app_config.privacy.diagnostics_enabled %}
正式版应用使用诊断服务收集崩溃报告、应用版本、设备与操作系统信息、性能数据和技术日志。
{% else %}
当前配置已关闭自动崩溃报告。你主动提交的支持请求仍可能包含技术信息。
{% endif %}

{% if app_config.privacy.analytics_enabled %}
正式版应用使用分析服务了解汇总后的功能使用、会话行为和可靠性。
{% else %}
当前配置已关闭一般行为分析。
{% endif %}

{% if app_config.privacy.advertising_enabled %}
应用使用广告服务，并可能按 Google Play 数据安全说明处理广告标识符。
{% else %}
应用不展示第三方广告，也不为定向广告处理数据。
{% endif %}

### 2.6 支持沟通

当你联系支持或报告生成内容时，我们会处理你的联系方式、消息、相关账户或结果标识符、
附件，以及调查和回复所需的信息。

## 3. 信息用途

我们使用信息来：

- 验证用户并保护账户；
- 执行请求的文本转换；
- 计算配额并验证订阅权益；
- 提供本地历史及用户请求的恢复；
- 防止滥用、欺诈和未经授权的访问；
- 诊断服务故障并改善可靠性；
- 回复支持、隐私及不当输出报告；
- 遵守法律义务并执行服务条款。

我们不会出售个人信息。

## 4. 服务提供方

服务依赖以下代表我们处理信息或按其自身条款处理信息的提供方：

- **Google Firebase** — {{ app.privacy.firebase_services }}；
- **Google Play** — 应用分发、订阅账单、购买记录和权益信息；
- **{{ app_config.privacy.ai_provider_name }}** — 生成请求的文本转换；
- 托管公共页面和回复支持请求所需的基础设施或邮件服务提供方。

这些提供方可能在你所在国家或地区以外处理信息，其合同条款和技术控制适用于相应处理活动。

## 5. 保留期限

我们仅在实现本政策所述目的所需的期限内保留信息：

- 本地历史保留在设备上，直到你删除历史、清除应用数据或卸载应用；
- 账户和配额记录在账户有效期间及账户删除流程中保留；
- 服务器及安全日志保留：**{{ app_config.privacy.server_log_retention }}**；
- AI 提供方的内容保留期限：**{{ app_config.privacy.ai_content_retention }}**；
- 在税务、会计、防欺诈、争议处理或法律要求下，可能保留购买及交易记录。

## 6. 共享与披露

信息可能在以下情况下被披露：

- 为运行服务向上述提供方披露；
- 按你的指示共享或导出内容；
- 调查安全事件、滥用或违反服务条款的行为；
- 法律、法律程序或有效政府要求规定时；
- 服务发生合并、收购、重组或转让时，并提供适当通知和保障。

## 7. 安全

我们采用合理的管理、技术和组织措施，包括经认证的后端访问、受限的服务凭据和传输加密。
任何系统都无法保证绝对安全，我们不能保证未经授权的访问永远不会发生。

## 8. 你的控制与权利

根据你所在地区，你可能有权访问、更正、删除、限制或反对某些处理活动，
以及获取个人信息副本。你可以：

- 在应用中编辑或删除本地历史；
- 通过 Google Play 管理或取消订阅；
- 通过应用或[账户删除页面]({{ app.deletion_path | relative_url }})删除账户；
- 发送邮件至 [{{ developer.privacy_email }}](mailto:{{ developer.privacy_email }})
  提交隐私请求。

处理请求前，我们可能需要验证你的身份。

## 9. 儿童隐私

{{ app.name }} 不面向 13 岁以下儿童，或用户所在国家同意数据处理所要求的最低年龄以下人群。
我们不会在违反适用法律的情况下故意收集儿童个人信息。如你认为儿童提供了个人信息，
请联系我们进行审查和移除。

## 10. 跨境传输

信息可能在服务提供方运营所在的国家处理。在法律要求的情况下，我们会采用合同或其他认可的
跨境传输保障措施。

## 11. 政策变更

当服务、提供方或法律要求发生变化时，我们可能更新本政策。新版本会标明新的“最后更新”日期；
重大变更也可能通过应用或其他适当渠道通知。

## 12. 联系方式

**{{ developer.legal_name }}**  
以 {{ developer.display_name }} 名义运营  
{{ developer.country_or_region }}  
隐私：[{{ developer.privacy_email }}](mailto:{{ developer.privacy_email }})  
支持：[{{ developer.support_email }}](mailto:{{ developer.support_email }})
