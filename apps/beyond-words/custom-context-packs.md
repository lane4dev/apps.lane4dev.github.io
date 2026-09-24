---
title: "Custom Context Pack Guide"
layout: app-page
app_key: "beyond-words"
permalink: /beyond-words/custom-context-packs/
description: "Create, validate, download, and import custom context packs for Beyond Words."
last_updated: "2026-09-24"
lang: en
translation_key: beyond-words-custom-context-packs
alternate_lang: zh-CN
alternate_url: /zh/beyond-words/custom-context-packs/
x_default_url: /beyond-words/custom-context-packs/
---

{% assign app = site.data.apps[page.app_key] %}
{% assign example_pack_path = '/assets/downloads/beyond-words/sarcastic_rewrite.v1.json' %}
{% assign example_pack_url = example_pack_path | absolute_url %}

**Last updated:** {{ page.last_updated }}

## What a custom context pack does

A custom context pack defines a reusable writing context: its name, the
languages in which it is available, rewriting instructions, and optional
input/output examples. It changes how a selected model rewrites text; it does
not configure a model service or provide model access.

Use clear, user-level instructions. Do not put API keys, passwords, personal
data, or confidential text in a pack. When the pack is used, its applicable
instruction and examples are included with the transformation request sent to
the model service you selected. See the [Privacy Policy]({{ app.privacy_path | relative_url }})
for the applicable processing details.

## Example pack: download or import by URL

The following verified example is a single custom pack, not a built-in
manifest:

- [Download the Refined Sarcasm JSON example]({{ example_pack_path | relative_url }})

To import it from a URL, copy this complete HTTPS address into the app:

`{{ example_pack_url }}`

For a file import, download the JSON file without changing its contents.

## Import a pack

1. In the app, open **Mode Packs**.
2. Under **My Packs**, select **Add Custom Pack**.
3. Choose **Import from file** and select a JSON file, or choose **Import from
   URL** and enter a direct HTTPS URL to one JSON document.
4. Review the preview, then select **Import**. If the pack has the same custom
   ID as an existing pack, review it and select **Update** only when you intend
   to replace that pack.

The file and downloaded URL response must be UTF-8 JSON and no larger than
512 KiB. URL imports require HTTPS, allow only HTTPS redirects, and time out
after 15 seconds. The URL must return the JSON
document itself rather than an HTML download page, a ZIP file, or a built-in
pack manifest.

## Version 1 format

A pack is one JSON object. The root must not be an array, a collection of
packs, or a built-in manifest. The required fields are:

| Field | Type and rules |
| --- | --- |
| `schemaVersion` | Required integer. Use `1`. |
| `id` | Required stable identifier, up to 80 characters. Use lowercase letters, digits, hyphens, and underscores; start with a lowercase letter or digit. Keep it unchanged when updating a pack. |
| `packKey` | Required identifier, up to 100 characters. Use lowercase snake_case with digits if needed. |
| `packVersion` | Required semantic version, up to 32 characters, for example `1.0.0`. |
| `iconName` | Required icon identifier, up to 80 characters. It may contain only letters, digits, and underscores. |
| `supportedLocales` | Required non-empty array. Use `["*"]` for all supported app languages, or normalized tags such as `["en", "zh_Hans"]`. Do not combine `*` with other locales. |
| `temperature` | Optional number from `0` to `2`. Lower values are generally more consistent; higher values are more varied. |
| `maxOutputChars` | Optional positive integer, at most `8000`. |
| `localizations` | Required object of display metadata by locale. Each entry requires `name` and `description`; `detailDescription` is optional. |
| `instructions` | Required object of rewriting instructions by locale. Each entry requires `instruction` and may contain `examples`. |

Locale keys use underscores, not hyphens: use `zh_Hans`, `zh_Hant`, `es_419`,
and `pt_BR`. In `localizations` and `instructions`, `default` is allowed as a
fallback key; `*` is not. If `supportedLocales` is `["*"]`, both objects must
provide either `default` or `en` as a fallback. If specific locales are listed,
each one must appear in both objects.

For each localization, `name` is limited to 80 characters, `description` to
500, and optional `detailDescription` to 1,200. Each instruction is limited to
6,000 characters. A locale can have up to eight examples; each example needs a
non-empty `input` (up to 1,000 characters) and `output` (up to 2,000
characters).

## Minimal example

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

## Safety and compatibility rules

Unknown non-reserved fields may be ignored. A `categoryKey` in a custom file is
not used: imported packs always appear under **My Packs**, rather than in a
built-in category. System-state fields such as `isBuiltin`, `isEnabled`,
`isActive`, timestamps, and sort order are also not taken from an imported
file.

Before sharing a pack by URL, keep the URL HTTPS, serve the JSON directly, and
avoid storing private instructions or information in the file. A shared URL can
be imported by anyone who can access it.
