# Branch Protection Documentation

## Repository

**Repository Name:** freelance-portfolio-devops-assignment

## Protected Branch

The `main` branch is configured as the production-ready branch of the project.

## Branch Protection Rules

The following rules were enabled for the `main` branch:

- Pull requests are required before merging.
- At least one team-member approval is required.
- The CI status check must pass before merging.
- Branch deletion is restricted.
- Force pushes are blocked.

## Required Status Check

The required GitHub Actions status check is:

```text
Lint, Test and Build
