# Stand-in photography

**None of these are Icon Construction's own work.** They are free-licensed stock
photographs standing in until the company's own site photography is available.
Replace each file in place, keeping the filename, and nothing in the code needs
to change.

All are from [Pexels](https://www.pexels.com) under the
[Pexels licence](https://www.pexels.com/license/): free for commercial use, no
attribution required, modification permitted. This file is a record of where
they came from, not an attribution obligation.

Where the subject could not be sourced in Ethiopia, the nearest credible
equivalent was used — noted below. Those are the ones most worth replacing
first.

| File | Pexels ID | What it shows |
| --- | --- | --- |
| `about/people.jpg` | [14391906](https://www.pexels.com/photo/14391906/) | Addis Ababa street, riders and traffic |
| `about/communities.jpg` | [36467885](https://www.pexels.com/photo/36467885/) | Classroom in use, students in uniform — Zambia |
| `about/progress.jpg` | [15976119](https://www.pexels.com/photo/15976119/) | Walkway running toward the Addis Ababa skyline |
| `projects/assosa-corridor.jpg` | [36713812](https://www.pexels.com/photo/36713812/) | Rebuilt boulevard with lane markings — Gondar, Ethiopia |
| `projects/halawa-agro-industry.jpg` | [5216141](https://www.pexels.com/photo/5216141/) | Cattle at feeding stalls in a barn — not Ethiopia |
| `projects/baro-femele-boarding-school.jpg` | [34211747](https://www.pexels.com/photo/34211747/) | Full classroom of students — not Ethiopia |
| `projects/assosa-referral-hospital.jpg` | [36000439](https://www.pexels.com/photo/36000439/) | Hospital building exterior — Harare, Zimbabwe |
| `projects/benshangul-gumuz-health-bureau.jpg` | [36713803](https://www.pexels.com/photo/36713803/) | Modern civic building — Gondar, Ethiopia |
| `projects/bulipli-atsiliho-janfrari-primary-schools.jpg` | [31763369](https://www.pexels.com/photo/31763369/) | Children and elders at a rural outdoor lesson |
| `projects/assosa-recreation-centre.jpg` | [32342544](https://www.pexels.com/photo/32342544/) | Landscaped park walkway — not Ethiopia |

## Replacing them

Drop a new file over the old one, same name. Sizes are ~1600px wide; the page
crops each to its slot with `object-fit: cover`, so exact proportions do not
matter, but landscape suits every slot except the About cards, which are 4:5
portrait.

Every photograph is duotoned into the brand green by the design system, so
colour cast in the original matters much less than composition does.

To leave a slot without a picture, delete its `image` line in
`src/data/site.ts` — the drawn stand-in comes back automatically.
