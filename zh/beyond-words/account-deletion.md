---
title: "删除账户和数据"
layout: app-page
app_key: "beyond-words"
permalink: /zh/beyond-words/account-deletion/
description: "如何申请删除言外账户及相关云端数据。"
last_updated: "2026-07-29"
lang: zh-CN
translation_key: beyond-words-account-deletion
alternate_lang: en
alternate_url: /beyond-words/account-deletion/
x_default_url: /beyond-words/account-deletion/
---

{% assign app = site.data.apps_zh[page.app_key] %}
{% assign app_config = site.data.apps[page.app_key] %}
{% assign developer = site.data.site.developer %}

**最后更新：** {{ page.last_updated }}

你可以在应用内申请删除 {{ app.name }} 账户及相关云端数据，也可以使用下方的网页申请渠道。

## 在应用内删除

1. 打开 {{ app.name }}。
2. 在账户设置中打开账户删除功能。
3. 查看将被删除的数据。
4. 按照提示重新验证身份。
5. 确认删除申请。

重新验证身份可以防止临时接触你设备的其他人删除账户。

## 无法使用应用时申请删除

请发送邮件至 [{{ developer.support_email }}](mailto:{{ developer.support_email }})，主题填写
**言外账户删除**。申请过程可能要求你通过账户绑定的电子邮件地址或登录方式验证身份。
请勿发送密码、一次性验证码或银行卡信息。

## 计划删除的数据

身份验证成功后，删除流程会删除或匿名化与账户相关的数据，包括：

- Firebase Authentication 账户；
- 账户资料及内部用户标识符；
- 使用配额及方案状态记录；
- 与账户关联的服务端设置；
- 无需继续识别当事人的支持或不当输出报告；
- 仅与已删除账户关联的其他云端数据。

{% if app_config.privacy.cloud_history_sync_enabled %}
与账户关联、已同步到云端的转换历史也会被删除。
{% else %}
转换历史保存在设备本地，不会随服务端账户删除申请一起删除。请在应用中删除历史记录、
清除应用存储或卸载应用，以移除本地副本。
{% endif %}

## 可能保留的信息

在合理必要的范围内，我们可能为了以下目的保留有限信息：

- 税务、会计和 Google Play 交易记录；
- 防欺诈、安全和滥用调查；
- 处理争议、退款或拒付；
- 履行有效法律义务；
- 等待按既定周期覆盖的备份副本。

保留记录仅在其保留目的合理需要的期限内保存，不会用于继续提供已删除账户。

## 处理时间

通过验证的删除申请会在不无故拖延的情况下完成。访问权限可能在所有备份副本过期前被停用。
主要删除流程完成后，我们会通过已验证的联系渠道发送确认。

## Google Play 订阅

删除 {{ app.name }} 账户不一定会取消 Google Play 订阅。请另外在 Google Play 中取消：

1. 打开 Google Play。
2. 选择个人资料。
3. 打开 **付款和订阅 → 订阅**。
4. 选择 {{ app.name }}。
5. 选择 **取消订阅**。

Google Play 可能根据其法律义务和政策继续保留购买及账单记录。

## 问题与联系

隐私联系：[{{ developer.support_email }}](mailto:{{ developer.support_email }})<br>
支持：[{{ developer.support_email }}](mailto:{{ developer.support_email }})
