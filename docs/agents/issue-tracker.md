# Local Markdown issue tracker

Give each feature a directory under `.scratch/<feature-slug>/`. Save its spec as
`spec.md` and each implementation ticket as `issues/<NN>-<slug>.md`. Start
numbering at `01` within each feature.

To publish a spec or ticket, create the file at its corresponding path. To fetch
a ticket, open the supplied path or look up its number within the feature.
Record triage state on a `Status:` line near the top using `triage-labels.md`.
Append discussion under `## Comments`.

## Wayfinder

Keep the effort map in `.scratch/<effort>/map.md` with sections for Notes,
Decisions-so-far, and Fog. Give each question a numbered file in `issues/`.
Put the question in the body and record its type on a `Type:` line using
`research`, `prototype`, `grilling`, or `task`.

List dependencies by ticket number, for example `Blocked by: 01, 02`. Pick the
lowest-numbered open, unclaimed ticket whose dependencies are all resolved.
Save `Status: claimed` before starting work.

To resolve the ticket, append the answer under `## Answer`, set
`Status: resolved`, and add a short summary and ticket link to Decisions-so-far
in the map.
