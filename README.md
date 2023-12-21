# pswd-matcher

_Copyright 2023, Caleb Evans_  
_Released under the MIT license_

A simple application which serves as a secure space for you to learn a new
password.

[![tests](https://github.com/caleb531/pswd-matcher/actions/workflows/tests.yml/badge.svg)](https://github.com/caleb531/pswd-matcher/actions/workflows/tests.yml)
[![Coverage Status](https://coveralls.io/repos/github/caleb531/pswd-matcher/badge.svg?branch=main)](https://coveralls.io/github/caleb531/pswd-matcher?branch=main)

Live App: https://projects.calebevans.me/pswd-matcher/

## Setup

### Installing

This project uses [pnpm][pnpm] (instead of npm) for package installation and
management.

[pnpm]: https://pnpm.io/

```bash
npm install -g pnpm
pnpm install
```

### Serving the site

```bash
pnpm dev
```

The site will then be viewable in your browser at http://localhost:5173.

## Running tests

You can run tests like so:

```sh
pnpm test
```

If you want to calculate code coverage, run:

```sh
pnpm coverage
```
