---
title: 'How we stopped planners overwriting each other in UFC War Room'
description: 'Write locking and a full audit log with undo, so several matchmakers can work on one fight card safely.'
date: '2026-11-13'
draft: true
slug: '/blog/war-room-concurrent-editing/'
tags:
  - Django
  - Concurrency
  - System Design
---

<!--
DRAFT: not published while `draft: true` is set above.
Everything here comes from your resume. Lines marked TODO need details only you know.
When it's ready: fill in the TODOs, delete these comments, update the date and set `draft: false`.
-->

UFC War Room is a web and mobile board that UFC's matchmakers use to plan fight cards. We took it from start to launch in three months at Octalogic Tech, and it moved UFC's matchmaking planning fully to digital.

One problem showed up as soon as more than one person used it: two planners editing the same fight card at the same time.

## The problem: last write wins

Without protection, whoever saves last wins. If one planner swaps a bout while another updates a fighter, one of those changes silently disappears. On a fight card, a lost change isn't a cosmetic bug. It's a wrong matchup.

<!-- TODO: a concrete example of an edit that used to collide, if you can share one. -->

## Write locking

We added write locking for concurrent edits, so only one planner can change a part of the card at a time and nobody overwrites anyone else's work.

<!-- TODO: what gets locked (the whole card or a single bout?), when a lock is taken and released, what other planners see while it's held, and what happens if someone closes the tab mid-edit (does the lock expire?). -->

## An audit log with undo

Locking prevents collisions, but people still make mistakes. Every change to a card goes into a full audit log, and that log powers undo, so a planner can roll back a change instead of re-entering it by hand.

<!-- TODO: what each log entry stores (who, when, before/after values?), and how undo works (revert one entry, or step back in order?). -->

## The stack

War Room is built with Python, Django and MySQL, with HTMX and Alpine.js on the front end and separate desktop and mobile interfaces.

<!-- TODO: why HTMX and Alpine.js were a good fit here. -->

## What I learned

<!-- TODO: one or two takeaways, or what you'd do differently next time. -->
