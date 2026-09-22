/* All page copy lives here so the sections stay pure presentation.
   Projects, map sites and impact figures are real company data. The `photo`
   fields describe the photograph each slot is waiting for — see the README. */

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  num: string;
  title: string;
  body: string;
}

/** One sited piece of work on the §4 map. Each pin is its own numbered
 *  marker and its own row in the key, so a project delivered as separate
 *  works in separate places lists them separately there — while §3 still
 *  presents the whole project as one. */
export interface MapPin {
  city: string;
  region: string;
  /** Position in the map viewBox declared in ethiopia.ts — NOT lat/long.
   *  The README carries the conversion. */
  x: number;
  y: number;
  /** Name for this marker. Defaults to the project's name; set it when the
   *  project splits, so each half reads as itself on the map. */
  label?: string;
  /** Photograph for this site. Defaults to the project's. */
  photo?: string;
  /** Picture for this site. Defaults to the project's; leave both off and
   *  the drawn stand-in shows. */
  image?: string;
}

export interface Project {
  /** Stable key — the array index is not one once projects are reordered. */
  id: string;
  name: string;
  location: string;
  type: string;
  status: string;
  /** What the photograph in this slot should show, once shot. */
  photo: string;
  /** Path to the picture, e.g. "/images/projects/assosa-corridor.jpg".
   *  Omit it until there is one — the drawn stand-in covers the gap. */
  image?: string;
  body: string;
  stats: Stat[];
  /** Carried in the featured tab strip in §3. Keep this to about three: the
   *  strip is built to sit on one row, and wraps raggedly past four. */
  featured: boolean;
  /** Usually one. More when the work spans towns, as the Assosa–Banbasi
   *  corridor does — every pin selects the same project. */
  pins: MapPin[];
}

export interface Theme {
  title: string;
  body: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Healthcare",
    body: "Construction of health centres and healthcare facilities designed to serve communities.",
  },
  {
    num: "02",
    title: "Education",
    body: "Schools and educational infrastructure supporting the next generation of Ethiopians.",
  },
  {
    num: "03",
    title: "Urban Infrastructure",
    body: "Construction and improvement of urban corridors and public infrastructure.",
  },
  {
    num: "04",
    title: "Roads & Corridors",
    body: "Infrastructure projects designed to improve mobility and connectivity.",
  },
  {
    num: "05",
    title: "Walking & Cycling Infrastructure",
    body: "Pedestrian walkways and dedicated bicycle lanes designed to create more accessible and livable cities.",
  },
  {
    num: "06",
    title: "Civil & Building Works",
    body: "Large-scale construction and civil engineering projects.",
  },
];

export interface AboutCard {
  /** Matches the drawn stand-in defined in sections/About.tsx. */
  id: "people" | "communities" | "progress";
  title: string;
  body: string;
  /** What the photograph in this slot should show, once shot. */
  photo: string;
  /** Path to the picture. Omit until there is one. */
  image?: string;
}

export const aboutCards: AboutCard[] = [
  {
    id: "people",
    title: "People",
    body: "Infrastructure that improves everyday life.",
    photo: "daily life on a completed corridor",
    image: "/images/about/people.jpg",
  },
  {
    id: "communities",
    title: "Communities",
    body: "Schools, healthcare facilities, roads, and public spaces that connect communities.",
    photo: "school or health centre in use",
    image: "/images/about/communities.jpg",
  },
  {
    id: "progress",
    title: "Progress",
    body: "Infrastructure supporting Ethiopia's continued urban and economic development.",
    photo: "new road heading into a growing city",
    image: "/images/about/progress.jpg",
  },
];

export const projects: Project[] = [
  {
    id: "assosa-corridor",
    name: "Assosa And Banbasi Corridor Development",
    location: "Assosa and Banbasi city, Ethiopia",
    type: "Urban Infrastructure",
    status: "Completed",
    photo: "completed corridor at street level",
    image: "/images/projects/assosa-corridor.jpg",
    body: "A full corridor rebuild combining carriageway, drainage, lighting, dedicated cycling infrastructure and continuous pedestrian walkways through the busiest districts of both towns.",
    stats: [
      { value: "5 KM", label: "Corridor" },
      { value: "3 KM", label: "Cycling Infrastructure" },
      { value: "5 KM", label: "Pedestrian Walkways" },
    ],
    featured: true,
    // One project in §3; its two town ends list separately on the map.
    pins: [
      {
        city: "Assosa",
        region: "Benishangul-Gumuz Region",
        x: 140.0,
        y: 332.0,
        label: "Assosa Corridor Development",
        photo: "completed corridor at street level, Assosa",
      },
      {
        city: "Banbasi",
        region: "Benishangul-Gumuz Region",
        x: 200.5,
        y: 390.6,
        label: "Banbasi Corridor Development",
        photo: "completed corridor at street level, Banbasi",
      },
    ],
  },
  {
    id: "halawa-agro-industry",
    name: "Halawa Agro Industry",
    location: "Ura worda, Benshangule state, Ethiopia",
    type: "Agro Industry",
    status: "Completed",
    photo: "livestock farm with cattle sheds, poultry units and feed stores",
    image: "/images/projects/halawa-agro-industry.jpg",
    body: "A comprehensive animal production farm including cattle fattening and dairy houses, calf and sheep shelters, poultry units, feed stores, egg storage, fencing, gate works and site-leveling with road adjustments for the full operational layout.",
    stats: [
      { value: "13", label: "Facility Units" },
      { value: "Multi", label: "Livestock Types" },
      { value: "Full", label: "Farm Setup" },
    ],
    featured: true,
    pins: [
      {
        city: "Ura Woreda",
        region: "Benishangul-Gumuz Region",
        x: 170.5,
        y: 330.6,
      },
    ],
  },
  {
    id: "baro-femele-boarding-school",
    name: "Baro-Femele Boarding School",
    location: "Ura worda, Benshangule state, Ethiopia",
    type: "Education",
    status: "Completed",
    photo: "school courtyard during a class change",
    image: "/images/projects/baro-femele-boarding-school.jpg",
    body: "A purpose-built boarding school with residence blocks, classrooms, sanitation and recreation spaces designed to support secure, high-quality student living and learning.",
    stats: [
      { value: "12", label: "Classrooms" },
      { value: "480", label: "Boarding Students" },
      { value: "18 MO", label: "Delivery Time" },
    ],
    featured: true,
    // NOTE: `location` above says Ura Woreda, but this pin says Baro. The two
    // arrays this file replaced disagreed the same way. One of them is wrong.
    pins: [
      { city: "Baro", region: "Benishangul-Gumuz Region", x: 150.0, y: 305.0 },
    ],
  },

  {
    id: "assosa-referral-hospital",
    name: "Assosa Referral Hospital And Benshangul-Gumuz Health Bureau",
    location: "Assosa, Benishangul-Gumuz",
    type: "Healthcare",
    status: "In Progress",
    photo: "referral hospital blocks, landscape and green areas",
    image: "/images/projects/assosa-referral-hospital.jpg",
    body: "A major hospital renewal and expansion project involving the refurbishment of 16 existing blocks, construction of one additional block, and the creation of green areas and plantation works to improve the clinical environment and public amenity.",
    stats: [
      { value: "21", label: "Blocks Renewed" },
      { value: "3", label: "New Block" },
      { value: "Green", label: "Landscape Upgrade" },
    ],
    featured: true,
    // The hospital and the health bureau are separate buildings, so they get
    // a marker each. Four markers now sit in Assosa town — true Assosa is
    // ~(108, 339), and they ring it at 23 units, which is the radius at
    // which even a selected marker (which grows) clears its neighbours.
    pins: [
      {
        city: "Assosa",
        region: "Benishangul-Gumuz Region",
        x: 105.0,
        y: 362.0,
        label: "Assosa Referral Hospital",
        photo: "referral hospital blocks after renewal",
      },
      {
        city: "Assosa",
        region: "Benishangul-Gumuz Region",
        x: 135.0,
        y: 366.0,
        label: "Benshangul-Gumuz Health Bureau",
        photo: "health bureau building and forecourt",
        image: "/images/projects/benshangul-gumuz-health-bureau.jpg",
      },
    ],
  },
  {
    id: "bulipli-atsiliho-janfrari-primary-schools",
    name: "Bulipli, Atsiliho and Janfrari Primary Schools",
    location: "Buldigilu, Benishangul-Gumuz",
    type: "Education",
    status: "Completed",
    photo: "primary school blocks and classroom courtyards",
    image: "/images/projects/bulipli-atsiliho-janfrari-primary-schools.jpg",
    body: "A combined primary school package comprising five classroom blocks, each accommodating five classrooms and five latrine units, designed to serve local students with safe, functional learning spaces and sanitation facilities.",
    stats: [
      { value: "5", label: "Blocks" },
      { value: "25", label: "Classrooms" },
      { value: "450", label: "Students Served" },
    ],
    featured: false,
    pins: [
      {
        city: "Buldigilu",
        region: "Benishangul-Gumuz Region",
        x: 240.0,
        y: 290.0,
      },
    ],
  },
  {
    id: "assosa-recreation-centre",
    name: "Assosa Recreation Centre",
    location: "Assosa, Benishangul-Gumuz",
    type: "Public Space",
    status: "Completed",
    photo: "water fountain, restaurant and landscaped public recreation area",
    image: "/images/projects/assosa-recreation-centre.jpg",
    body: "A public recreation complex featuring a central water fountain, café and restaurant building, retail shop structures and extensive green areas designed to create a welcoming civic destination for residents and visitors.",
    stats: [
      { value: "Fountain", label: "Water Feature" },
      { value: "Cafe", label: "Food & Beverage" },
      { value: "Green", label: "Public Space" },
    ],
    featured: false,
    // Had no marker at all before the two arrays were merged. North point of
    // the Assosa ring described on the hospital above.
    pins: [
      {
        city: "Assosa",
        region: "Benishangul-Gumuz Region",
        x: 110.0,
        y: 330.0,
      },
    ],
  },
];

/** §3 shows only these. Flip `featured` above to change the line-up. */
export const featuredProjects = projects.filter((project) => project.featured);

/** §4 lists every pin, not every project: a project delivered as separate
 *  works in separate places contributes one marker per work, each with its
 *  own number and its own row in the key. Type, status, body and stats still
 *  come from the parent project, so nothing has to be kept in step by hand. */
export interface MapMarker {
  /** Unique across markers — two pins can share a city, as the Assosa
   *  hospital and health bureau do, so the city alone will not do. */
  id: string;
  number: number;
  project: Project;
  pin: MapPin;
  name: string;
  photo: string;
  image?: string;
}

export const mapMarkers: MapMarker[] = projects
  .flatMap((project) =>
    project.pins.map((pin, pinIndex) => ({
      id: `${project.id}-${pinIndex}`,
      project,
      pin,
      name: pin.label ?? project.name,
      photo: pin.photo ?? project.photo,
      image: pin.image ?? project.image,
    })),
  )
  .map((marker, index) => ({ ...marker, number: index + 1 }));

export const themes: Theme[] = [
  {
    title: "Better Streets",
    body: "Carriageways rebuilt with drainage, lighting and clear lane discipline.",
  },
  {
    title: "Safer Walkways",
    body: "Continuous, level pedestrian routes separated from traffic.",
  },
  {
    title: "Connected Communities",
    body: "Links between neighbourhoods, schools and health facilities.",
  },
  {
    title: "More Livable Cities",
    body: "Shade, seating and public space returned to residents.",
  },
  {
    title: "Infrastructure for Growth",
    body: "Capacity built ahead of demand, not behind it.",
  },
];

export const impact: Stat[] = [
  { value: "10+", label: "Projects Delivered" },
  { value: "5", label: "Years of Experience" },
  { value: "36+", label: "Engineers & Professionals" },
  { value: "2.5M+", label: "Users Served" },
];

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#impact", label: "Our Impact" },
  { href: "#contact", label: "Contact" },
];
