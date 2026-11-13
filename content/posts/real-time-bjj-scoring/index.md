---
title: 'Building a real-time scoring system for UFC BJJ'
description: 'Encoding jiu-jitsu scoring rules and match timing into a tool officials use at live events.'
date: '2026-11-13'
draft: true
slug: '/blog/real-time-bjj-scoring/'
tags:
  - Real-time
  - Product
---

<!--
DRAFT: not published while `draft: true` is set above.
Everything here comes from your resume. Lines marked TODO need details only you know.
When it's ready: fill in the TODOs, delete these comments, update the date and set `draft: false`.
-->

At live UFC BJJ events, officials score matches as they happen. At Octalogic Tech I developed the data input system they use to do it, and it's in use at live UFC BJJ events.

## Why it's harder than a scoreboard

A generic scoreboard just adds numbers. Jiu-jitsu has its own scoring rules, and the system has to encode them so officials can't record something the rules don't allow.

<!-- TODO: which rules you encoded (points for positions, advantages, penalties, submissions?) and one rule that was tricky to model. -->

## Timing

Scoring is tied to the match clock, so timing is part of the rules too.

<!-- TODO: how match timing works in the system (who controls the clock, how scores relate to time, overtime). -->

## Built for a live event

At a live event, a mistake is visible to everyone straight away, so the input has to be fast and hard to get wrong.

<!-- TODO: what you did to make input quick and safe (layout, confirmations, undo?) and how you tested it before the first event. -->

## What I learned

<!-- TODO: one or two takeaways. -->
