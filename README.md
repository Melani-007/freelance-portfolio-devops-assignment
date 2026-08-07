# Nova Creative Studio Freelance Portfolio Website

[![Continuous Integration](https://github.com/Melani-007/freelance-portfolio-devops-assignment/actions/workflows/ci.yml/badge.svg)](https://github.com/Melani-007/freelance-portfolio-devops-assignment/actions/workflows/ci.yml)

[![Deploy to GitHub Pages](https://github.com/Melani-007/freelance-portfolio-devops-assignment/actions/workflows/deploy.yml/badge.svg)](https://github.com/Melani-007/freelance-portfolio-devops-assignment/actions/workflows/deploy.yml)

## Live Website

[Open Nova Creative Studio Portfolio](https://melani-007.github.io/freelance-portfolio-devops-assignment/)

## GitHub Repository

[View GitHub Repository](https://github.com/Melani-007/freelance-portfolio-devops-assignment)

---

## Project Description

Nova Creative Studio is a responsive freelance agency portfolio website developed as part of the Advanced Git and DevOps Team Collaboration Assignment.

The project demonstrates collaborative software development using Git, GitHub, feature branches, pull requests, code reviews, merge-conflict resolution, GitHub Actions CI/CD and GitHub Pages deployment.

---

## Team Members

| Student | Full Name | Student ID | Role |
|---|---|---|---|
| Student 1 | Melani Adithya | ITBIN-2414-0007 | DevOps Engineer |
| Student 2 | Maneesha Kavindi | ITBIN-2414-0005 | Full-Stack Developer |

---
## Individual Contributions

### Student 1 – Melani Adithya

**Role: DevOps Engineer**

- Created and configured the public GitHub repository
- Created and maintained the `main`, `develop` and feature branches
- Developed the responsive navigation menu
- Developed the hero section
- Developed the about section
- Added the contact-form JavaScript interaction
- Created the GitHub Actions Continuous Integration workflow
- Configured automatic linting, testing and build validation
- Created the GitHub Pages deployment workflow
- Managed pull requests, reviews and production merges
- Managed the final GitHub Pages deployment
- Completed and updated the final project documentation

### Student 2 – Maneesha Kavindi

**Role: Full-Stack Developer**

- Developed the responsive services section
- Developed the projects portfolio section
- Developed the skills and expertise section
- Developed the contact-form HTML structure
- Developed the responsive contact-section styling
- Developed the website footer structure
- Developed the responsive footer styling
- Tested desktop, tablet and mobile responsiveness
- Reviewed and approved Student 1 pull requests
- Participated in the intentional README merge conflict
- Resolved and committed the README merge conflict
- Supported final website functionality and layout testing

## Website Features

- Responsive navigation menu
- Professional hero section
- About section
- Services section
- Projects portfolio section
- Skills and expertise section
- Static contact form
- Contact-form interaction
- Responsive website footer
- Mobile, tablet and desktop support
- Smooth section navigation
- Modern professional user interface

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Visual Studio Code
- Live Server

---
## Branch Strategy

We followed a standard Git Flow branching model:

- `main` - Production-ready branch, protected and automatically deployed.
- `develop` - Integration branch used to combine and test completed features.
- `feature/*` - Individual feature branches used by team members.

All major changes were developed in feature branches and merged through pull requests after peer review.

---
## Project Structure

```text
freelance-portfolio-devops-assignment/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── docs/
│   ├── branch-protection.md
│   └── merge-conflict-resolution.md
├── scripts/
│   ├── build.js
│   └── test.js
├── src/
│   ├── images/
│   ├── scripts/
│   │   └── app.js
│   ├── styles/
│   │   └── style.css
│   └── index.html
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Project Status

The project has been successfully completed, tested and deployed using GitHub Pages.

- Development Status: Complete
- CI Status: Passing
- Deployment Status: Live
- Final Branch: `main`

---
## Setup & Installation Instructions

### Prerequisites

- Git
- Node.js 18 or higher
- npm
- Visual Studio Code

### Installation

```bash
git clone https://github.com/Melani-007/freelance-portfolio-devops-assignment.git
cd freelance-portfolio-devops-assignment
npm install
npm run lint
npm test
npm run build
```

To view the website locally, open `src/index.html` using Live Server.

---
## CI/CD Deployment Process

The project uses GitHub Actions for Continuous Integration and Continuous Deployment.

### Continuous Integration

The CI workflow runs on pushes to `main`, `develop`, and `feature/**` branches and on pull requests to `main` and `develop`.

The CI pipeline performs:

- Dependency installation
- Lint validation
- Automated testing
- Project build validation

### Continuous Deployment

When approved changes are merged into the `main` branch, the deployment workflow automatically builds and deploys the website to GitHub Pages.

---
## Challenges & Resolutions

### Merge Conflict

Both students intentionally edited the same README content from separate feature branches. Git detected a merge conflict, which was manually resolved and committed successfully.

### PowerShell Execution Policy

PowerShell initially blocked npm scripts. The issue was resolved by using `npm.cmd` or Command Prompt.

### Branch Protection

The `main` branch was protected using pull request approval, required CI status checks, deletion protection and blocked force pushes.

### GitHub Pages Deployment

The final website was successfully deployed automatically through GitHub Actions.

---
## Documentation

- [Branch Protection Documentation](docs/branch-protection.md)
- [Merge Conflict Resolution Documentation](docs/merge-conflict-resolution.md) 