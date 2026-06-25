# Resume source

`resume.tex` is the maintainable LaTeX source for Afolabi Oluwatosin Abioye's resume.
Edit this file instead of hand-patching the exported PDF.

## Build

**Overleaf (easiest):** upload `resume.tex`, it compiles on the spot (pdfLaTeX).

**Locally with TeX Live:**
```sh
pdflatex resume.tex      # run twice so hyperref links resolve
```

**Locally with Tectonic (single binary, no TeX install):**
```sh
tectonic -X compile resume.tex
```

Only standard packages are used (`geometry`, `titlesec`, `enumitem`, `hyperref`,
`xcolor`, `microtype`, `lmodern`) — no exotic fonts, so it builds on a default
TeX Live install.

> Note: the PDF was not compiled in the cloud session that created this file —
> the egress policy blocked the TeX package-bundle host. The source is
> structurally validated (balanced braces, paired environments, even math
> delimiters); compile with any path above to produce the PDF.

## What changed vs. the previous PDF (`master_res.pdf`)

These edits make the resume and the portfolio site (`folabi.me`) tell one
consistent, defensible story:

| Area | Before | Now |
|------|--------|-----|
| Headline | "AAAI '26 Published Researcher" | "AAAI-26 Workshop Author" (workshop ≠ main-conference publication) |
| Profile verb | "Published at AAAI-26" | "Workshop paper accepted at AAAI-26 (AIDD)" |
| Team size | "5-person team" | "17-person team (full-time and contract)" — matches the site |
| Fintech latency | "sub-millisecond p99" | "single-digit-millisecond p99 (sub-millisecond service compute)" — physically honest |
| From-scratch vs production | all listed as one blob | explicit: from-first-principles builds vs shipped production inference/API infra |
| Paper count | implied broader | 3 publicly verifiable papers (OpenReview/arXiv) |

The 3–28× speedup and AAAI-26 acceptance are attributed to **Temporal Eigenstate
Networks** (O(T)); **Resonance Neural Networks** is listed as an OpenReview preprint.
