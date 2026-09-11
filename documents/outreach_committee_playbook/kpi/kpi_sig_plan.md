# NeoNephos KPI Special Interest Group

Working draft by 

- Abubakar Siddiq Ango (KPI SIG driver)   
- Christian Voecks   
- Tristan Scheidemann.

---

## 1\. Purpose

The KPI SIG defines, collects, reviews and reports the indicators that measure the health, growth, adoption and impact of the NeoNephos ecosystem.

It provides visibility to community members, project maintainers, SIG leaders, sponsors and funders, potential investors and partners, and the wider open source ecosystem.

The output is a KPI dashboard comparable to LFX Insights.

## 2\. Why the SIG exists now

NeoNephos has no agreed answer to whether the community is growing, which projects are stalling, or whether anyone outside the founding organizations is adopting the work. The SIG makes those answerable.

## 3\. Where we are today

The figures below come from [LFX Insights](https://insights.linuxfoundation.org/project/neonephos-foundation/development?timeRange=past365days&start=2025-08-12&end=2026-08-12&widget=pull-requests) for the NeoNephos Foundation, covering the 365 days to 2026-07-24.

### Contribution

| Indicator | Value |
| :---- | :---- |
| Active contributors, last quarter | 31 |
| Contributor retention, quarter over quarter | 93% |
| Contributors accounting for 51%+ of contributions | 2 |
| Organizations accounting for 51%+ of contributions | 2 |
| Contributions outside regular working hours | 22% |

### Development

| Indicator | Value |
| :---- | :---- |
| New pull requests per month | 104 |
| Average PR lifespan (merge lead time) | 3 days |
| Active days out of the last 365 | 254 |
| Average issue resolution time | over 80 days |

### Visibility

| Indicator | Value |
| :---- | :---- |
| GitHub stars | 8 |
| Forks | 13 |

### What the baseline shows

Development activity is healthy.

**Concentration.** Two contributors account for more than half of all contributions, and two organizations do the same. Any of them stepping back risks a sharp drop in velocity.

**Visibility.** Eight stars and thirteen forks, against 104 pull requests a month. There is no inbound pipeline. New contributors and adopters arrive through people who already know the project, which is what keeps contribution concentrated in the same two organizations.

## 4\. Objectives

### Community growth

- Is the number of contributors increasing?  
- Are contributors staying active?  
- Are new organizations joining?  
- Is engagement improving?

### Project health

- Are projects actively maintained?  
- Is development velocity increasing?  
- Are contributors distributed across organizations?  
- Are projects attracting external adoption?

### Ecosystem adoption

- How many companies use NeoNephos?  
- How many organizations contribute?  
- How many projects are adopted outside the core community?  
- Which projects show the strongest growth?

### Outreach and awareness

- Which activities create the most engagement?  
- Which events generate new contributors?  
- Which channels create awareness?  
- Where should effort be concentrated?

## 5\. KPI catalogue

The catalogue is deliberately larger than what will be reported. Reporting draws from it by level, described in section 6\.

Each entry carries a definition and a source. Open definitions are marked.

### 5.1 Community

| Indicator | Definition | Source |
| :---- | :---- | :---- |
| Total contributors | Distinct people with at least one merged contribution, all time | GitHub API, LFX |
| New contributors per month | First merged contribution falls in the month | GitHub API, LFX |
| Active contributors per month | At least one contribution in the month | GitHub API, LFX |
| Returning contributors | Contributed in the month and in any prior month | GitHub API |
| Contributor retention rate | Share of last quarter's contributors active this quarter | LFX |
| Time to first contribution | Days from first account activity to first merged PR | GitHub API |
| Zulip members | Total registered members | Zulip API |
| Active Zulip users | Posted at least once in the period | Zulip API |
| New Zulip members | Joined in the period | Zulip API |
| Number of discussions | Distinct topics with at least one reply | Zulip API |
| SIG participation | Attendees across SIG meetings | Manual, meeting records |
| Meeting attendance | Attendees per scheduled meeting | Manual, meeting records |
| Contributing organizations | Distinct employer domains among contributors | GitHub API, LFX |
| New organizations joining | First contribution from that organization in the period | GitHub API |
| Top contributing organizations | Ranked by merged contributions | LFX |
| Contributions from outside founding members | Share of contributions from non-founding organizations | LFX |

### 5.2 Development

| Indicator | Definition | Source |
| :---- | :---- | :---- |
| Commits | Commits to default branches across NeoNephos repositories | GitHub API |
| Pull requests opened | PRs opened in the period | GitHub API, LFX |
| Pull requests merged | PRs merged in the period | GitHub API, LFX |
| Open pull requests | Open at period end | GitHub API |
| Issues opened and closed | Counted in the period | GitHub API |
| Issue closure rate | Closed divided by opened in the period | GitHub API |
| Average PR review time | First review timestamp minus PR open timestamp | LFX |
| Average time to merge | Merge timestamp minus open timestamp | LFX |
| Number of reviewers | Distinct people leaving a review | GitHub API |
| PR approval rate | Approved divided by reviewed | GitHub API |
| External contributors | Contributors outside founding member organizations | LFX |
| First-time contributors | First merged PR in the period | GitHub API |
| Contributor to maintainer ratio | Contributors divided by people with merge rights | Manual plus GitHub |
| Maintainers per project | People with merge rights, per repository | Manual, OWNERS files |
| Bus factor | Smallest number of contributors accounting for more than half of contributions. LFX reports this as 51%+ | LFX |
| Release frequency | Releases per quarter | GitHub API |
| Time between releases | Mean gap between tagged releases | GitHub API |
| Stars, forks, watchers | Repository counts | GitHub API |
| Repository traffic and clones | Views and clones | GitHub API, needs repo admin |

### 5.3 Adoption

| Indicator | Definition | Source |
| :---- | :---- | :---- |
| Known adopters | Organizations listed in ADOPTERS files or self-declared | Manual |
| Production deployments | Adopters confirming production use | Manual, survey |
| New adopters per quarter | Added to the adopters list in the quarter | Manual |
| Mentions in blogs and conferences | Third-party mentions found in the period | Manual, alerts |
| Third-party integrations | Projects integrating a NeoNephos project | Manual |
| Marketplace listings | Listings on cloud or software marketplaces | Manual |
| New projects joining | Projects accepted into NeoNephos in the period | LFX API |
| Incubation and graduated projects | Count by maturity level | LFX API |
| Cross-project collaboration | Initiatives spanning two or more projects | Manual |

Adoption is the weakest area for automated collection. Most of it depends on organizations telling us, so the SIG needs a route for adopters to self-declare.

### 5.4 Events

| Indicator | Definition | Source |
| :---- | :---- | :---- |
| Number of events | Events held or attended in the period | Manual |
| Attendees | Registered attendees who attended | Eventbrite, Meetup, Sessionize |
| Registration to attendance ratio | Attended divided by registered | Event platforms |
| Geographic reach | Distinct countries represented | Event platforms |
| New contributors after event | First contribution within 30 days of an event | GitHub API, correlated manually |
| New Zulip registrations after event | Joined within 30 days of an event | Zulip API |
| Newsletter signups generated | Signups attributable to an event | Mailchimp or HubSpot |
| Net Promoter Score | Standard NPS from the post-event survey | Survey tool |
| Satisfaction score | Mean rating from the post-event survey | Survey tool |
| Actionable improvement items | Items raised and accepted for action | Manual |

Event impact uses a 30-day attribution window. The window is a convention for consistency and does not establish causation.

### 5.5 Social media

| Indicator | Definition | Source |
| :---- | :---- | :---- |
| Followers by platform | LinkedIn, X, YouTube, Mastodon | Platform APIs |
| Likes, comments, shares | Per post, aggregated per period | Platform APIs |
| Engagement rate | Engagements divided by impressions | Platform APIs |
| Click-through rate | Clicks divided by impressions | Platform APIs |
| Top performing posts | Ranked by engagement rate | Platform APIs |
| Video and webinar views | Views in the period | YouTube API |
| Blog article views | Page views per article | Website analytics |

### 5.6 Communication

| Indicator | Definition | Source |
| :---- | :---- | :---- |
| Newsletter subscribers and growth | Total and net change | Mailchimp or HubSpot |
| Open rate, click rate, unsubscribe rate | Standard email metrics | Mailchimp or HubSpot |
| Website unique and returning visitors | Per period | Google Analytics or Plausible |
| Downloads | Artifact downloads | Website, registry APIs |
| Documentation page views | Per page | Website analytics |
| Documentation contributors and updates | Contributors and commits to docs | GitHub API |
| Most visited documentation pages | Ranked by views | Website analytics |
| Documentation search success rate | Searches returning a clicked result | Site search analytics |

## 6\. Reporting levels

Three levels draw from one collection effort.

### Level 1, executive

Monthly, for the Steering Committee, sponsors and investors.

Active contributors, contributing organizations, commits, pull requests merged, new adopters, Zulip growth, social media growth, event attendance.

### Level 2, operational

Weekly, for maintainers and SIG leads.

Open issues, PR review times, contributor growth, event registrations, newsletter metrics.

### Level 3, strategic

Quarterly, for the Governing Board and strategic partners.

Adoption trends, organization diversity, contributor retention, project maturity, ecosystem growth.

## 7\. Delivery phases

### Phase 1: establish

Create the SIG, define KPI ownership, select tools and data sources, set the baseline. Section 3 is the start of that baseline for GitHub indicators.

### Phase 2: automate

Build the dashboard, integrating GitHub, Zulip and social media metrics.

### Phase 3: operate

Monthly KPI reporting, quarterly health reviews, and recommendations that change where effort goes.

## 8\. Data sources

| Area | Source | Status |
| :---- | :---- | :---- |
| GitHub | GitHub API, LFX Insights, OpenSSF Insights | Available now, LFX already carries NeoNephos |
| Community | Zulip API | Access not yet confirmed |
| Events | Eventbrite, Meetup, Sessionize | Depends on which platform each event uses |
| Newsletter | Mailchimp, HubSpot | Owner not yet identified |
| Website | Google Analytics, Plausible | Access not yet confirmed |
| Social media | LinkedIn, X, YouTube APIs | Needs a named owner in the social team |
| Ecosystem | LFX Insights, CHAOSS metrics | Available now |

Only the GitHub and ecosystem rows can be collected today. Everything else needs either access or an owner before it produces a number.

## 9\. How the SIG works

- **Participation** is open to anyone in the NeoNephos community. The SIG needs people close to the data it cannot currently reach, including social media, the newsletter and event registration.  
- **Driver:** Abubakar Siddiq Ango  
- **Working materials:** drafting is in Google Docs while repository write access is arranged. A `community management` folder exists under `community` in the repository and becomes the home once access is in place.  
- **Decisions** are made in the sync and recorded in the meeting notes. A decision that changes a KPI definition is recorded in section 5, so historical numbers stay interpretable.

## 10\. Success criteria

The SIG is working when it can answer these at any time.

1. Is the NeoNephos community growing?  
2. Are projects healthy and actively maintained?  
3. Are external organizations adopting NeoNephos?  
4. Has the variety of contributor companies increased?  
5. Which outreach activities create measurable impact?  
6. Where should NeoNephos invest more effort?  
7. Which projects need support or intervention?  
8. How does NeoNephos evolve quarter over quarter?

The baseline in section 3 partly answers 1 and 2\. The rest need the sources in section 8 that are not yet connected.

## 11\. Action items

| \# | Action | Owner | By |
| :---- | :---- | :---- | :---- |
| 1 | Setup Zulip Channel | Outreach Committee | Phase 1 |
| 2 | SIG members' nomination | TBC | Phase 1 |
| 3 | Confirm Zulip API access | TBC | Phase 1 |
| 4 | Identify the newsletter owner and confirm Mailchimp or HubSpot access | TBC | Phase 1 |
| 5 | Confirm website analytics access | TBC | Phase 1 |
| 6 | Name an owner for each social platform account | Social media contact, once nominated | Phase 1 |
| 7 | Assign an owner to each Level 1 indicator | Abu | Phase 1 |
| 8 | Define which repositories count as NeoNephos repositories | KPI SIG | Phase 1 |
| 9 | Source a commit count, or drop it from Level 1 | Abu | Phase 1 |
| 10 | Create a route for adopters to declare themselves | KPI SIG | Phase 2 |
| 11 | Estimate the recurring effort of the manual indicators in section 5 | KPI SIG | Phase 2 |

## Appendix. Source

LFX Insights, NeoNephos Foundation. [https://insights.linuxfoundation.org/project/neonephos-foundation](https://insights.linuxfoundation.org/project/neonephos-foundation)  
