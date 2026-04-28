const XP_ROLES = {
  "commercial": {
    "label": "Commercial & Onboarding",
    "title": "Commercial and Onboarding Operator",
    "persona": "Relationship Manager / Sales Officer / Branch Officer",
    "first": "customer-search.html",
    "features": [
      "workbench",
      "customers",
      "sales",
      "marketing",
      "contact",
      "onboarding",
      "approvals",
      "analytics",
      "knowledge"
    ]
  },
  "service": {
    "label": "Service Agent",
    "title": "Service Operator",
    "persona": "Service Agent / Contact Center Agent",
    "first": "contact-center-routing.html",
    "features": [
      "workbench",
      "customers",
      "contact",
      "service",
      "onboarding",
      "approvals",
      "knowledge",
      "field"
    ]
  },
  "compliance": {
    "label": "Compliance Reviewer",
    "title": "Compliance and Review Officer",
    "persona": "Compliance Officer / Restricted Reviewer",
    "first": "approval-queue.html",
    "features": [
      "workbench",
      "customers",
      "service",
      "onboarding",
      "approvals",
      "reports",
      "analytics",
      "knowledge"
    ]
  },
  "supervisor": {
    "label": "Supervisor",
    "title": "Supervisor and Operations Manager",
    "persona": "Supervisor / Branch Manager / Service Lead",
    "first": "workbench.html",
    "features": [
      "workbench",
      "customers",
      "sales",
      "marketing",
      "contact",
      "service",
      "onboarding",
      "approvals",
      "analytics",
      "reports",
      "knowledge",
      "field",
      "integration",
      "ai"
    ]
  },
  "admin": {
    "label": "Tenant Admin",
    "title": "Tenant and Platform Administrator",
    "persona": "Tenant Admin / Platform Support",
    "first": "tenant-conformance.html",
    "features": [
      "workbench",
      "approvals",
      "reports",
      "integration",
      "tenant",
      "ai",
      "sectors"
    ]
  },
  "ai": {
    "label": "AI Governance",
    "title": "AI Governance Officer",
    "persona": "AI Governance Officer",
    "first": "ai-command.html",
    "features": [
      "workbench",
      "ai",
      "knowledge",
      "approvals",
      "analytics",
      "reports"
    ]
  },
  "marketing": {
    "label": "Marketing",
    "title": "Marketing Operator",
    "persona": "Marketing Operator",
    "first": "campaigns.html",
    "features": [
      "workbench",
      "customers",
      "sales",
      "marketing",
      "contact",
      "analytics",
      "reports",
      "knowledge"
    ]
  },
  "field": {
    "label": "Field Ops",
    "title": "Field Representative and Inspector",
    "persona": "Inspector / TRD Field Representative / Collections Officer",
    "first": "appointment-schedule.html",
    "features": [
      "workbench",
      "customers",
      "service",
      "onboarding",
      "field",
      "knowledge",
      "approvals"
    ]
  },
  "sector": {
    "label": "Sector Pack",
    "title": "Sector Pack Author and Release Authority",
    "persona": "Sector Pack Author / QA Validation Lead / Release Authority",
    "first": "sectors-registry.html",
    "features": [
      "workbench",
      "sectors",
      "field",
      "tenant",
      "integration",
      "approvals",
      "ai"
    ]
  },
  "customer": {
    "label": "Customer Portal",
    "title": "Customer Portal User",
    "persona": "Self-service customer",
    "first": "portal-status.html",
    "features": [
      "portal"
    ]
  }
};
const XP_FEATURES = [
  {
    "id": "workbench",
    "label": "Workbench",
    "first": "workbench.html",
    "description": "Tasks, assignments, queue pressure, reminders, and operational focus."
  },
  {
    "id": "customers",
    "label": "Customers",
    "first": "customer-search.html",
    "description": "Customer search, 360 profile, identity posture, relationships, and activity."
  },
  {
    "id": "sales",
    "label": "Sales",
    "first": "opportunity-pipeline.html",
    "description": "Leads, pipeline, opportunities, quotes, targets, activity, and outcomes."
  },
  {
    "id": "marketing",
    "label": "Marketing",
    "first": "customer-segments.html",
    "description": "Campaigns, segments, journeys, consent, DND, and channel eligibility."
  },
  {
    "id": "contact",
    "label": "Contact Center",
    "first": "contact-center-routing.html",
    "description": "Unified inbox, routing, interaction console, and wallboard."
  },
  {
    "id": "service",
    "label": "Service",
    "first": "case-queue.html",
    "description": "Cases, service recovery, escalation, SLA risk, notification history, and closure."
  },
  {
    "id": "onboarding",
    "label": "Onboarding",
    "first": "onboarding-documents.html",
    "description": "Activity queue, documents, KYC wizard, missing items, submission, and activation handoff."
  },
  {
    "id": "approvals",
    "label": "Approvals",
    "first": "kyc-exceptions.html",
    "description": "Maker-checker queues, evidence review, policy holds, identity exceptions, and reveals."
  },
  {
    "id": "analytics",
    "label": "Analytics",
    "first": "analytics-dashboard.html",
    "description": "Operational KPIs, portfolio performance, service failures, and remediation dashboards."
  },
  {
    "id": "reports",
    "label": "Reports",
    "first": "report-builder.html",
    "description": "Report builder, parameters, run history, governed exports, and regulatory packages."
  },
  {
    "id": "knowledge",
    "label": "Knowledge",
    "first": "knowledge-browse.html",
    "description": "Knowledge browse, articles, guided procedures, and AI-assisted search."
  },
  {
    "id": "field",
    "label": "Field Ops",
    "first": "appointment-schedule.html",
    "description": "Appointments, work orders, inspections, billing coordination, and TRD visits."
  },
  {
    "id": "integration",
    "label": "Integration",
    "first": "integration-health.html",
    "description": "Connector health, contract detail, degraded mode, replay, and reconciliation."
  },
  {
    "id": "ai",
    "label": "AI",
    "first": "ai-command.html",
    "description": "AI command center, runtime controls, policy breaches, skill usage, and lineage."
  },
  {
    "id": "tenant",
    "label": "Tenant/Admin",
    "first": "endpoint-bindings.html",
    "description": "Tenant configuration, activation, users, roles, sessions, and conformance."
  },
  {
    "id": "sectors",
    "label": "Sector Packs",
    "first": "sector-validation.html",
    "description": "Sector pack registry, manifest review, authoring, validation, and promotion."
  },
  {
    "id": "portal",
    "label": "Portal",
    "first": "portal-consent.html",
    "description": "Customer-safe status, requests, uploads, messaging, consent, and own-record scope."
  }
];

function currentRoleId() {
  const params = new URLSearchParams(window.location.search);
  const roleFromUrl = params.get("role");
  if (roleFromUrl && XP_ROLES[roleFromUrl]) {
    localStorage.setItem("xplorerRole", roleFromUrl);
    history.replaceState(null, "", window.location.pathname);
    return roleFromUrl;
  }
  return localStorage.getItem("xplorerRole");
}

function setText(selector, text) {
  document.querySelectorAll(selector).forEach((node) => { node.textContent = text; });
}

function renderFeatureNav(role, activeFeature) {
  const nav = document.querySelector("[data-feature-nav]");
  if (!nav) return;
  nav.innerHTML = "";
  XP_FEATURES.filter((feature) => role.features.includes(feature.id)).forEach((feature) => {
    const a = document.createElement("a");
    a.href = feature.first || "workspace.html";
    a.textContent = feature.label;
    if (feature.id === activeFeature) a.className = "active";
    nav.appendChild(a);
  });
}

function showRoleWorkspace(roleId) {
  document.querySelectorAll("[data-role-panel]").forEach((panel) => {
    panel.hidden = panel.getAttribute("data-role-panel") !== roleId;
  });
}

function guardAccess(role, activeFeature) {
  const guard = document.querySelector("[data-access-guard]");
  if (!guard || !activeFeature) return;
  if (role.features.includes(activeFeature)) return;
  guard.innerHTML = '<section class="notice critical"><strong>Outside this profile</strong><span>This workspace is not available to the signed-in profile. Switch profile or return to My Workspace.</span></section>';
  document.querySelectorAll("[data-guarded-content]").forEach((node) => { node.hidden = true; });
}

document.addEventListener("click", (event) => {
  const login = event.target.closest("[data-login-role]");
  if (login) localStorage.setItem("xplorerRole", login.getAttribute("data-login-role"));
  const switcher = event.target.closest("[data-switch-role]");
  if (switcher) localStorage.removeItem("xplorerRole");
});

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");
  if (page === "login") return;
  const roleId = currentRoleId();
  const role = XP_ROLES[roleId];
  if (!role) {
    window.location.href = "index.html";
    return;
  }
  setText("[data-role-label]", role.label);
  setText("[data-role-title]", role.title);
  const activeFeature = document.body.getAttribute("data-feature");
  renderFeatureNav(role, activeFeature);
  showRoleWorkspace(roleId);
  guardAccess(role, activeFeature);
});
