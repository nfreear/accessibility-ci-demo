
# Accessibility CI demo

[![Node.js CI][ci-img]][ci]

This repo demonstrates integrating some automated accessibility testing tools into a continuous integration/deployment (CI/CD) workflow.

Specifically, it demonstrates use of two separate tools: [jest-axe][] and @treosh's [lighthouse-ci-action][].

The repo contains example _fails_ and _passes_ [pages](./pages), and corresponding unit tests.

## ⚠️✋ This project does not guarantee that what you build is accessible.
The GDS Accessibility team found that only [~30% of issues are found by automated testing][gds].

You'll also need to:
* test your interface with the [assistive technologies that real users use][at] (see also [WebAIM's survey results][survey]).
* include disabled people in user research.

## Usage

```
npm install
npm test
```

[gds]: https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage
[at]: https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#when-to-test
[survey]: https://webaim.org/projects/screenreadersurvey8/#primary
[jest-axe]: https://github.com/nickcolley/jest-axe
[lighthouse-ci-action]: https://github.com/treosh/lighthouse-ci-action

[ci]: https://github.com/nfreear/accessibility-ci-demo/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/accessibility-ci-demo/actions/workflows/node.js.yml/badge.svg
