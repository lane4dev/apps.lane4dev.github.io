# Adding another application

The project separates global site chrome, per-app metadata, independent app views/styles, and application-specific legal pages.

## 1. Add application metadata

Create `_data/apps/<app-slug>.yml` (English & shared config) and `_data/apps_zh/<app-slug>.yml` (Chinese presentation data):

```yaml
name: "Feather Ledger"
slug: "feather-ledger"
short_description: "A concise description."
home_story: "Author-perspective copy shown on the homepage."
status: "Coming soon"
platform: "Android"
store_enabled: false
store_url: ""
features:
  - title: "Feature"
    description: "Description."
```

If the app publishes APK releases, also add `_data/releases/<app-slug>.yml` and `apps/<app-slug>/releases-latest.json` with `permalink: /<app-slug>/releases/latest.json`.

## 2. Add collection documents

Create `_apps/<app-slug>/en.md` and `_apps/<app-slug>/zh.md`:

```markdown
---
title: "Feather Ledger"
layout: app
app_key: "feather-ledger"
weight: 20
permalink: /feather-ledger/
description: "A concise description."
lang: en
translation_key: feather-ledger
alternate_lang: zh-CN
alternate_url: /zh/feather-ledger/
x_default_url: /feather-ledger/
---
```

The `_layouts/app.html` dispatcher automatically loads `site.data.apps[page.app_key]`, `site.data.apps_zh[page.app_key]`, and `site.data.releases[page.app_key]`, renders `_includes/shared/nav.html`, and includes `_includes/apps/<app-slug>/page.html`.

## 3. Add independent view and styles

Create:
- `_includes/apps/<app-slug>/page.html` (reusing shared blocks under `_includes/shared/` as needed)
- `_sass/apps/_<app-slug>.scss` and import it from `assets/css/style.scss`
- Assets under `assets/images/<app-slug>/`

## 4. Add supporting legal and support pages

Create English pages under `apps/<app-slug>/` and Chinese pages under `zh/<app-slug>/`:

```text
apps/<app-slug>/
├── privacy.md
├── terms.md
└── support.md
```

Each page should include `app_key: "<app-slug>"`, matching `translation_key` / `alternate_url` pairs, and use either the `app-page` or `legal` layout.

## 5. Validate and build

```bash
python3 scripts/validate_site.py
bundle exec jekyll build
```
