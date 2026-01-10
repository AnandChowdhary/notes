---
title: Taws the aws terminal interface
date: 2026-01-09T22:14:02.672Z
url: https://x.com/AnandChowdhary/status/2009750538448220374
---

Every once in a while I stumble on a tool that looks like something I would have tried to hack together myself over a weekend. taws is one of those. It is a terminal UI for AWS that brings the "click around the console, then drop to the CLI, then read JSON" dance into a single keyboard driven interface. Think htop, but for your AWS account. The part I really like is that it is not just a pretty viewer. It understands a lot of AWS resource types, keeps an eye on changes, lets you filter and fuzzy search, shows JSON or YAML when you need the raw details, and even lets you take actions like starting or stopping EC2 instances directly from the TUI. It is written in Rust and ships prebuilt binaries plus a simple \`cargo install taws\`, so trying it out is low friction: https://github.com/huseyinbabal/taws
