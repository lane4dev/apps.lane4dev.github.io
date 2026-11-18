# Beyond Words APK releases

The landing pages and `/beyond-words/releases/latest.json` use the same release
information in `_data/beyond_words_release.yml`. The JSON is a public, static
endpoint; it does not require authentication. Clients should tolerate missing
or null optional values and a temporarily unavailable endpoint. A null
`versionCode` means clients cannot compare version codes and should skip the
update check until it is populated.

For each release:

1. Upload the signed APK under a version-specific URL and verify that it is
   publicly downloadable. The OSS default endpoint rejects public APK
   downloads; use a configured custom domain for distribution.
2. Verify the APK's version name, version code, minimum Android SDK, signing
   certificate, and SHA-256 against the actual release artifact. Confirm that
   its signing certificate is compatible with the installations it should
   update.
3. Update the release data, including the download URL, verified values, and
   localized release notes where available. Do not guess unknown values.
4. Run `python scripts/validate_site.py` and `bundle exec jekyll build`, then
   check the generated JSON and both landing pages before deployment.

Upload the APK before publishing its metadata. Account for caching when
checking for a new release. Clients should use HTTPS, compare the numeric
`versionCode`, and verify the downloaded file against `sha256` before handing
it to the Android installer.
