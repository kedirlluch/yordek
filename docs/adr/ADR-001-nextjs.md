# ADR-001: Next.js as the foundation

- Status: Accepted
- Date: 2026-10-01

## Context

The project requires a professional marketing website for a local construction company with a clear commercial focus on alisado y pintura, digital lead generation, SEO, and a clean future path to expand into other services.

The team must choose a framework that is modern, stable, maintainable, and aligned with official documentation.

## Decision drivers

- easy to deploy
- good developer ergonomics
- SEO-friendly architecture
- App Router support
- TypeScript compatibility
- performance and image handling
- future scaling with limited complexity

## Options considered

### Option A: Custom React app with Vite

Pros:
- lightweight
- flexible
- fast to bootstrap

Cons:
- requires more decisions on routing, seo, image handling, deployment, structure
- more manual setup for a marketing website with future complexity
- less framework-native support for a content-heavy commercial site

### Option B: Next.js App Router

Pros:
- official React framework with strong ecosystem support
- built-in routing, metadata, optimization and deployment support
- good fit for SEO and marketing sites
- clear structure for future growth
- modern and well documented

Cons:
- requires some framework conventions and discipline
- more opinionated than a raw React app

## Decision

Use Next.js as the base framework, with the App Router and TypeScript.

## Rationale

Official Next.js documentation recommends the App Router for modern Next.js projects, and the framework offers the right combination of structure, marketing-site features, deployment support, and maintainability for this project.

## Consequences

### Positive

- cleaner architecture for pages and features
- strong SEO foundations
- strong image and performance optimization support
- easier deployment in Vercel or similar environments
- clear path for future expansion

### Negative

- some framework conventions must be respected
- development must remain disciplined to avoid over-engineering
- content architecture should be planned from the start

## Follow-up

This decision should be reviewed if the project later requires a CMS, multi-site architecture, or a much larger marketing and content platform.
