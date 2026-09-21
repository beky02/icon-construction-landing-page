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

/** Where a project pins on the map in §4. */
export interface MapPin {
  city: string;
  region: string;
  /** Position in the map viewBox declared in ethiopia.ts — NOT lat/long.
   *  The README carries the conversion. */
  x: number;
  y: number;
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
  { num: '01', title: 'Healthcare', body: 'Construction of health centres and healthcare facilities designed to serve communities.' },
  { num: '02', title: 'Education', body: 'Schools and educational infrastructure supporting the next generation of Ethiopians.' },
  { num: '03', title: 'Urban Infrastructure', body: 'Construction and improvement of urban corridors and public infrastructure.' },
  { num: '04', title: 'Roads & Corridors', body: 'Infrastructure projects designed to improve mobility and connectivity.' },
  { num: '05', title: 'Walking & Cycling Infrastructure', body: 'Pedestrian walkways and dedicated bicycle lanes designed to create more accessible and livable cities.' },
  { num: '06', title: 'Civil & Building Works', body: 'Large-scale construction and civil engineering projects.' },
];

export const projects: Project[] = [
  {
    id: 'halawa-agro-industry',
    name: 'Halawa Agro Industry',
    location: 'Ura worda, Benshangule state, Ethiopia',
    type: 'Agro Industry',
    status: 'Completed',
    photo: 'livestock farm with cattle sheds, poultry units and feed stores',
    body: 'A comprehensive animal production farm including cattle fattening and dairy houses, calf and sheep shelters, poultry units, feed stores, egg storage, fencing, gate works and site-leveling with road adjustments for the full operational layout.',
    stats: [
      { value: '13', label: 'Facility Units' },
      { value: 'Multi', label: 'Livestock Types' },
      { value: 'Full', label: 'Farm Setup' },
    ],
    featured: false,
    pins: [{ city: 'Ura Woreda', region: 'Benishangul-Gumuz Region', x: 170.5, y: 330.6 }],
  },
  {
    id: 'baro-femele-boarding-school',
    name: 'Baro-Femele Boarding School',
    location: 'Ura worda, Benshangule state, Ethiopia',
    type: 'Education',
    status: 'Completed',
    photo: 'school courtyard during a class change',
    body: 'A purpose-built boarding school with residence blocks, classrooms, sanitation and recreation spaces designed to support secure, high-quality student living and learning.',
    stats: [
      { value: '12', label: 'Classrooms' },
      { value: '480', label: 'Boarding Students' },
      { value: '18 MO', label: 'Delivery Time' },
    ],
    featured: false,
    // NOTE: `location` above says Ura Woreda, but this pin says Baro. The two
    // arrays this file replaced disagreed the same way. One of them is wrong.
    pins: [{ city: 'Baro', region: 'Benishangul-Gumuz Region', x: 150.0, y: 305.0 }],
  },
  {
    id: 'assosa-corridor',
    name: 'Assosa And Banbasi Corridor Development',
    location: 'Assosa and Banbasi city, Ethiopia',
    type: 'Urban Infrastructure',
    status: 'Completed',
    photo: 'completed corridor at street level',
    body: 'A full corridor rebuild combining carriageway, drainage, lighting, dedicated cycling infrastructure and continuous pedestrian walkways through the busiest districts of both towns.',
    stats: [
      { value: '5 KM', label: 'Corridor' },
      { value: '3 KM', label: 'Cycling Infrastructure' },
      { value: '5 KM', label: 'Pedestrian Walkways' },
    ],
    featured: true,
    // One project, two towns — both markers carry its number and select it.
    pins: [
      { city: 'Assosa', region: 'Benishangul-Gumuz Region', x: 125.5, y: 327.0 },
      { city: 'Banbasi', region: 'Benishangul-Gumuz Region', x: 155.5, y: 362.6 },
    ],
  },
  {
    id: 'assosa-referral-hospital',
    name: 'Assosa Referral Hospital And Benshangul-Gumuz Health Bureau',
    location: 'Assosa, Benishangul-Gumuz',
    type: 'Healthcare',
    status: 'In Progress',
    photo: 'referral hospital blocks, landscape and green areas',
    body: 'A major hospital renewal and expansion project involving the refurbishment of 16 existing blocks, construction of one additional block, and the creation of green areas and plantation works to improve the clinical environment and public amenity.',
    stats: [
      { value: '21', label: 'Blocks Renewed' },
      { value: '3', label: 'New Block' },
      { value: 'Green', label: 'Landscape Upgrade' },
    ],
    featured: true,
    // Three projects share Assosa town. True Assosa is ~(108, 339); these
    // three are spread around it so all three markers stay separable.
    pins: [{ city: 'Assosa', region: 'Benishangul-Gumuz Region', x: 110.0, y: 352.0 }],
  },
  {
    id: 'bulipli-atsiliho-janfrari-primary-schools',
    name: 'Bulipli, Atsiliho and Janfrari Primary Schools',
    location: 'Buldigilu, Benishangul-Gumuz',
    type: 'Education',
    status: 'Completed',
    photo: 'primary school blocks and classroom courtyards',
    body: 'A combined primary school package comprising five classroom blocks, each accommodating five classrooms and five latrine units, designed to serve local students with safe, functional learning spaces and sanitation facilities.',
    stats: [
      { value: '5', label: 'Blocks' },
      { value: '25', label: 'Classrooms' },
      { value: '450', label: 'Students Served' },
    ],
    featured: true,
    pins: [{ city: 'Buldigilu', region: 'Benishangul-Gumuz Region', x: 240.0, y: 290.0 }],
  },
  {
    id: 'assosa-recreation-centre',
    name: 'Assosa Recreation Centre',
    location: 'Assosa, Benishangul-Gumuz',
    type: 'Public Space',
    status: 'Completed',
    photo: 'water fountain, restaurant and landscaped public recreation area',
    body: 'A public recreation complex featuring a central water fountain, café and restaurant building, retail shop structures and extensive green areas designed to create a welcoming civic destination for residents and visitors.',
    stats: [
      { value: 'Fountain', label: 'Water Feature' },
      { value: 'Cafe', label: 'Food & Beverage' },
      { value: 'Green', label: 'Public Space' },
    ],
    featured: false,
    // Had no marker at all before the two arrays were merged.
    pins: [{ city: 'Assosa', region: 'Benishangul-Gumuz Region', x: 97.0, y: 328.0 }],
  },
];

/** §3 shows only these. Flip `featured` above to change the line-up. */
export const featuredProjects = projects.filter((project) => project.featured);

/** §4 maps every project. A project with two pins contributes two markers,
 *  both numbered for it, so selecting either selects the project. */
export const mapMarkers = projects.flatMap((project, index) =>
  project.pins.map((pin) => ({ project, pin, number: index + 1 })),
);

export const themes: Theme[] = [
  { title: 'Better Streets', body: 'Carriageways rebuilt with drainage, lighting and clear lane discipline.' },
  { title: 'Safer Walkways', body: 'Continuous, level pedestrian routes separated from traffic.' },
  { title: 'Connected Communities', body: 'Links between neighbourhoods, schools and health facilities.' },
  { title: 'More Livable Cities', body: 'Shade, seating and public space returned to residents.' },
  { title: 'Infrastructure for Growth', body: 'Capacity built ahead of demand, not behind it.' },
];

export const impact: Stat[] = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '5', label: 'Years of Experience' },
  { value: '36+', label: 'Engineers & Professionals' },
  { value: '2.5M+', label: 'Users Served' },
];

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#impact', label: 'Our Impact' },
  { href: '#contact', label: 'Contact' },
];
