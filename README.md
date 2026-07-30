# Personal App Portfolio — Jekyll Serif overlay

This package adds a multi-application structure and a complete first set of
Beyond Words pages to the
[Jekyll Serif](https://github.com/zerostaticthemes/jekyll-serif-theme) theme.

It is intentionally distributed as an **overlay**, rather than a copy of the
entire upstream theme. Start from a fresh clone or fork of Jekyll Serif, then
copy this package over the repository root.

## Included pages

- `/` — application directory
- `/beyond-words/` — Beyond Words landing page
- `/beyond-words/privacy/` — Privacy Policy
- `/beyond-words/terms/` — Terms of Service
- `/beyond-words/account-deletion/` — Account and data deletion
- `/beyond-words/support/` — Support

## Apply to Jekyll Serif

```bash
git clone https://github.com/zerostaticthemes/jekyll-serif-theme.git apps-site
cd apps-site

# Copy the contents of this overlay into the theme repository.
cp -R /path/to/beyond-words-jekyll-serif/. .
```

The overlay replaces `_config.yml`, `index.md`, `_data/menus.yml`,
`assets/css/style.scss`, and `_layouts/default.html`. Review local changes
before committing:

```bash
git diff
```

## Required configuration

Before publishing, edit:

- `_data/site.yml`
- `_data/apps.yml`
- `_config.yml`, if the final domain differs from `apps.tangyu.me`
- `CNAME`, if the final custom domain differs

The package deliberately contains `REPLACE_ME_*` values for facts that cannot
be inferred safely, including the legal entity name, support email, Android
application ID, AI provider, retention periods, governing law, and account
deletion endpoint.

Run the validator before every deployment:

```bash
python scripts/validate_site.py
```

The included GitHub Actions workflow runs the validator and blocks deployment
while placeholders remain.

## Local development

The upstream theme uses Jekyll 4.3.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open:

```text
http://127.0.0.1:4000/
```

## GitHub Pages

1. Create a repository for the application site.
2. Copy this overlay onto a Jekyll Serif clone.
3. Push the repository to GitHub.
4. In **Settings → Pages**, select **GitHub Actions** as the source.
5. Add the DNS record:

   ```text
   apps.tangyu.me CNAME <github-user>.github.io
   ```

6. Set the custom domain to `apps.tangyu.me`.
7. Enable **Enforce HTTPS** after certificate provisioning completes.

The workflow is at `.github/workflows/pages.yml`.

## Legal review

The policy and terms pages are implementation-oriented drafts. They must be
reviewed against the production application before publication. In particular,
confirm:

- which authentication methods are enabled;
- whether input/output history is only local or synchronized;
- the actual AI model provider and its retention policy;
- Firebase Analytics and Crashlytics settings;
- server log retention;
- Google Play subscription behavior;
- account deletion workflow and processing period;
- legal entity, jurisdiction, and contact details.

Do not publish a policy that describes planned behavior instead of actual
production behavior.

## Privacy-oriented defaults

The overlay:

- does not load Google Fonts from a third-party CDN;
- does not include analytics by default;
- keeps legal contact details in one data file;
- keeps app-specific product and data-processing facts in one data file;
- uses a separate authenticated backend endpoint for actual account deletion.

## Adding another application

See [`docs/ADDING_AN_APP.md`](docs/ADDING_AN_APP.md).
