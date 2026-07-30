# Repository Guidelines

## Project Structure & Module Organization

This repository is a Jekyll 4.3 portfolio for independent application and legal pages. App
metadata lives in `_data/apps.yml`; global site, SEO, and menu settings live in
`_data/`. Add app collection entries under `_apps/` and their privacy, terms,
deletion, and support pages under `apps/<app-slug>/`. Shared page templates are
in `_layouts/` and `_includes/`. Styles are assembled from
`assets/css/style.scss` and partials in `_sass/`; JavaScript and images live in
`assets/js/` and `images/`. Treat `_site/` and `.jekyll-cache/` as generated
output—change the source files instead. See `docs/ADDING_AN_APP.md` for the full
app-creation workflow.

## Build, Test, and Development Commands

- `bundle install` installs the Ruby dependencies from `Gemfile.lock`.
- `bundle exec jekyll serve --livereload` runs the site at
  `http://127.0.0.1:4000/` and rebuilds on edits.
- `bundle exec jekyll build` renders the production site into `_site/`.
- `python scripts/validate_site.py` checks required pages and rejects unresolved
  `REPLACE_ME_*` values. Run it before every deployment.

## Coding Style & Naming Conventions

Use two-space indentation for YAML, Liquid/HTML, and SCSS; use four spaces for
Python. Preserve Markdown front matter and quote YAML strings where punctuation
could be ambiguous. Use lowercase kebab-case for app keys, directories, and
permalinks, such as `feather-ledger` and `/feather-ledger/privacy/`. Keep SCSS
components as underscored partials (for example, `_app-card.scss`) and import
them from `assets/css/style.scss`. Reuse layouts and includes instead of
duplicating markup.

## Testing Guidelines

There is no separate unit-test suite or coverage threshold. A change is ready
when validation and a clean Jekyll build both succeed. For content or layout
changes, also inspect the affected routes locally at desktop and mobile widths,
including navigation and legal-page links. When adding an app, verify all four
supporting pages listed in `docs/ADDING_AN_APP.md`.

## Commit & Pull Request Guidelines

Git history is not available in this checkout, so no repository-specific commit
pattern can be confirmed. Use short, imperative subjects such as
`Add Feather Ledger privacy pages`, and keep unrelated changes separate. Pull
requests should explain the user-visible change, list validation/build results,
link relevant issues, and include screenshots for visual updates. Call out
configuration, domain, or legal-text changes explicitly; legal drafts require
review against actual production behavior before publishing.
