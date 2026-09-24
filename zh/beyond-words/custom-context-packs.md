---
title: "自定义语境包指南"
layout: app-page
app_key: "beyond-words"
permalink: /zh/beyond-words/custom-context-packs/
description: "了解如何为言外创建、校验、下载和导入自定义语境包。"
last_updated: "2026-09-24"
lang: zh-CN
translation_key: beyond-words-custom-context-packs
alternate_lang: en
alternate_url: /beyond-words/custom-context-packs/
x_default_url: /beyond-words/custom-context-packs/
---

{% assign app = site.data.apps_zh[page.app_key] %}
{% assign example_pack_path = '/assets/downloads/beyond-words/sarcastic_rewrite.v1.json' %}
{% assign example_pack_url = example_pack_path | absolute_url %}

**最后更新：** {{ page.last_updated }}

## 自定义语境包的作用

自定义语境包定义可重复使用的写作语境，包括名称、可用语言、改写指令，以及可选的
输入/输出示例。它用于改变所选模型改写文本的方式；不会配置模型服务，也不会提供模型访问权限。

请使用清晰、面向用户的指令。不要在语境包中放入 API 密钥、密码、个人数据或机密文本。
使用语境包时，其中适用的指令和示例会随转换请求发送给你所选的模型服务。有关适用的处理方式，
请参阅[隐私政策]({{ app.privacy_path | relative_url }})。

## 导入语境包

1. 在主转换页面打开右上角的三点菜单，然后选择 “设置”。
2. 在 “内容与转换” 下选择 “语境包”。也可以在主页面打开语境包选择器后，选择 “管理”。
3. 在 “我的语境包” 区域选择 “添加自定义包”。
4. 选择 “从文件导入” 以选取本地 JSON 文件，或选择 “从 URL 导入” 并输入指向单个 JSON
   文档的直接 HTTPS URL。
5. 查看导入预览后选择 “导入”。如果预览提示存在 ID 相同的自定义语境包，只有在确实要替换
   该语境包时才选择 “更新”。

文件以及通过 URL 下载的响应必须是 UTF-8 JSON，且不得超过 512 KiB。URL 导入必须使用
HTTPS，只允许 HTTPS 重定向，并会在 15 秒后超时。URL 必须直接返回 JSON 文档，而不是
HTML 下载页面、ZIP 文件或内置语境包清单。

## 版本 1 格式

一个语境包是单个 JSON 对象。根对象不得是数组、语境包集合或内置语境包清单。需要使用以下字段：

| 字段 | 类型和规则 |
| --- | --- |
| `schemaVersion` | 必填整数，使用 `1`。 |
| `id` | 必填的稳定标识符，最多 80 个字符。使用小写字母、数字、连字符和下划线，并以小写字母或数字开头。更新同一个语境包时请保持不变。 |
| `packKey` | 必填标识符，最多 100 个字符。使用小写 snake_case，必要时可包含数字。 |
| `packVersion` | 必填语义化版本号，最多 32 个字符，例如 `1.0.0`。 |
| `iconName` | 必填图标标识符，最多 80 个字符。只能使用字母、数字和下划线。 |
| `supportedLocales` | 必填非空数组。使用 `["*"]` 表示面向全部受支持的应用语言，或使用 `["en", "zh_Hans"]` 等规范化标签。请勿将 `*` 与其他语言标签混用。 |
| `temperature` | 可选数字，范围为 `0` 至 `2`。较低的值通常更稳定；较高的值会产生更多变化。 |
| `maxOutputChars` | 可选正整数，最大为 `8000`。 |
| `localizations` | 必填的按语言提供展示信息的对象。每个条目需要 `name` 和 `description`；`detailDescription` 可选。 |
| `instructions` | 必填的按语言提供改写指令的对象。每个条目需要 `instruction`，并可包含 `examples`。 |

语言键使用下划线而不是连字符，例如 `zh_Hans`、`zh_Hant`、`es_419` 和 `pt_BR`。
在 `localizations` 和 `instructions` 中，允许使用 `default` 作为回退键，但不能使用 `*`。
如果 `supportedLocales` 为 `["*"]`，这两个对象都必须提供 `default` 或 `en` 作为回退。
如果列出的是特定语言，每一种语言都必须同时出现在这两个对象中。

每个本地化条目的 `name` 最多 80 个字符，`description` 最多 500 个字符，可选的
`detailDescription` 最多 1,200 个字符。每条指令最多 6,000 个字符。每种语言最多可有
八个示例；每个示例都需要非空的 `input`（最多 1,000 个字符）和 `output`（最多 2,000 个字符）。

## 最小示例

```json
{
  "schemaVersion": 1,
  "id": "plain-language-rewrite",
  "packKey": "plain_language_rewrite",
  "packVersion": "1.0.0",
  "iconName": "format_quote",
  "supportedLocales": ["en"],
  "temperature": 0.4,
  "maxOutputChars": 1200,
  "localizations": {
    "en": {
      "name": "Plain Language",
      "description": "Rewrite text in clear, everyday language."
    }
  },
  "instructions": {
    "en": {
      "instruction": "Rewrite the user's text in clear, everyday language. Preserve the meaning and important details. Output only the rewrite.",
      "examples": [
        {
          "input": "Please expedite the submission of the requested materials.",
          "output": "Please send the requested materials as soon as you can."
        }
      ]
    }
  }
}
```

## 安全与兼容性规则

未知的非保留字段可能会被忽略。自定义文件中的 `categoryKey` 不会生效：导入后的语境包始终显示在
“我的语境包”中，而不会加入内置分类。`isBuiltin`、`isEnabled`、`isActive`、时间戳和排序顺序等
系统状态字段也不会从导入文件中读取。

通过 URL 分享语境包前，请保持 URL 使用 HTTPS 并直接提供 JSON 文件，同时避免在文件中保存私人指令
或信息。任何能够访问共享 URL 的人都可以导入该语境包。

## 示例语境包

以下每个示例都是经过验证、可直接导入的自定义语境包，而非内置语境包清单。下载 JSON 文件后
从设备导入，或将 HTTPS 地址复制到应用的“从 URL 导入”。从文件导入时，请勿修改文件内容。

<div class="pack-cards">
  <div class="pack-card">
    <h3>高级嘲讽</h3>
    <p>以委婉、克制而一针见血的讽刺风格改写文本，包含中文和英文指令及示例。</p>
    <a class="pack-card__download" href="{{ example_pack_path | relative_url }}" download>下载 JSON</a>
    <div class="pack-card__url">
      <span>导入 URL</span>
      <code>{{ example_pack_url }}</code>
    </div>
  </div>
</div>
