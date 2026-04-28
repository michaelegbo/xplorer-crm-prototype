# Xplorer CRM Reconstruction Package

This folder is a simplified, build-readable reconstruction of the Xplorer CRM handover.

Source basis: 72 page-bearing documents, 2,295 counted pages, and 142 original files inventoried. Key inputs include the PRD Tier 3 Full Specification, Blueprint Pack v1.2, Module Definition Guide v2.1, D1-D9 Development Pack, AI Runtime Control Pack, Design System Brief v2.0, UI Design Specs, User Stories Full Screen Set, and Design Batch Plan.

## What They Want Built

Xplorer is not a basic sales CRM. It is a governed, AI-enabled, sector-configurable enterprise CRM platform for regulated Nigerian enterprises. It sits beside external systems of record and owns customer relationship context, workflow orchestration, evidence-rich approvals, communications discipline, reporting control, integration recovery, tenant configuration, and supervised AI support.

The build is expected to start in controlled mode. Backend, workflow, data, security, audit, integration, tenant configuration, notification, and AI runtime control work may proceed. Frontend work must follow the approved screen estate and must not invent missing screen truth, routes, approval paths, or state behavior.

## Output Files

- `01_PRD.md`: shortened product requirements document.
- `02_FUNCTIONAL_REQUIREMENTS.md`: consolidated functional requirements.
- `03_NON_FUNCTIONAL_REQUIREMENTS.md`: consolidated non-functional requirements.
- `04_UX_SPECIFICATION.md`: UX structure, navigation, screen archetypes, design rules, and prototype map.
- `05_IMPLEMENTATION_BACKLOG.md`: practical build slices and sequencing.
- `READING_TODO.md`: source reading checklist.
- `READING_LOG.md`: extraction and reading audit.
- `SOURCE_CORPUS_OVERVIEW.md`: source overview by folder and section.
- `source_extracts/`: extracted text, page text, inventory, and visual contact sheet.
- `html-prototype/index.html`: clickable static prototype entry point.

## Recommended Read Order

1. Read this file.
2. Read `01_PRD.md` for product intent and scope.
3. Read `02_FUNCTIONAL_REQUIREMENTS.md` and `03_NON_FUNCTIONAL_REQUIREMENTS.md` for build obligations.
4. Read `04_UX_SPECIFICATION.md` for how the UI is supposed to behave.
5. Open `html-prototype/index.html` in a browser and navigate the static screens.

