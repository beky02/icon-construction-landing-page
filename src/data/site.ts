/* All page copy lives here so the sections stay pure presentation.
   Figures, names and contact details carry the placeholders the design was
   reviewed with — replace them with verified company data before launch. */

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  num: string;
  title: string;
  body: string;
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
}

export interface MapSite {
  city: string;
  /** Position in the map viewBox declared in ethiopia.ts. */
  x: number;
  y: number;
  region: string;
  name: string;
  type: string;
  status: string;
  photo: string;
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
    id: 'bole-corridor',
    name: 'Bole Corridor Development',
    location: 'Addis Ababa, Ethiopia',
    type: 'Urban Infrastructure',
    status: 'Completed',
    photo: 'completed corridor at street level',
    body: 'A full corridor rebuild combining carriageway, drainage, lighting, dedicated cycling infrastructure and continuous pedestrian walkways through one of the capital’s busiest districts.',
    stats: [
      { value: '12 KM', label: 'Corridor' },
      { value: '4 KM', label: 'Cycling Infrastructure' },
      { value: '8 KM', label: 'Pedestrian Walkways' },
    ],
  },
  {
    id: 'adama-health-centre',
    name: 'Adama Health Centre',
    location: 'Adama, Oromia',
    type: 'Healthcare',
    status: 'In Progress',
    photo: 'health centre entrance and forecourt',
    body: 'A district health facility serving surrounding kebeles, delivered to national health infrastructure standards with outpatient, maternal and emergency wings.',
    stats: [
      { value: '4,200 M²', label: 'Built Area' },
      { value: '120', label: 'Bed Capacity' },
      { value: '2026', label: 'Handover' },
    ],
  },
  {
    id: 'bahir-dar-school',
    name: 'Bahir Dar Secondary School',
    location: 'Bahir Dar, Amhara',
    type: 'Education',
    status: 'Completed',
    photo: 'school courtyard during a class change',
    body: 'Classroom blocks, laboratories, administration and sanitation facilities built on a constrained urban site with the school remaining partly in operation throughout.',
    stats: [
      { value: '24', label: 'Classrooms' },
      { value: '1,800', label: 'Students Served' },
      { value: '18 MO', label: 'Delivery Time' },
    ],
  },
];

export const mapSites: MapSite[] = [
  { city: 'Addis Ababa', x: 390.5, y: 408.7, region: 'Addis Ababa City Administration', name: 'Bole Corridor Development', type: 'Urban Infrastructure', status: 'Completed', photo: 'corridor at street level, Addis Ababa' },
  { city: 'Adama', x: 425.6, y: 442.2, region: 'Oromia Region', name: 'Adama Health Centre', type: 'Healthcare', status: 'In Progress', photo: 'health centre under construction, Adama' },
  { city: 'Bahir Dar', x: 299.1, y: 233.1, region: 'Amhara Region', name: 'Bahir Dar Secondary School', type: 'Education', status: 'Completed', photo: 'completed school block, Bahir Dar' },
  { city: 'Mekelle', x: 439.6, y: 101.7, region: 'Tigray Region', name: 'Mekelle Access Roads', type: 'Roads & Corridors', status: 'In Progress', photo: 'access road works, Mekelle' },
  { city: 'Hawassa', x: 372.3, y: 542.8, region: 'Sidama Region', name: 'Hawassa Lakeside Walkway', type: 'Walking & Cycling', status: 'Completed', photo: 'lakeside walkway in use, Hawassa' },
  { city: 'Dire Dawa', x: 600.8, y: 370.3, region: 'Dire Dawa Administration', name: 'Dire Dawa Civil Works', type: 'Civil & Building Works', status: 'Completed', photo: 'civil works site, Dire Dawa' },
  { city: 'Jimma', x: 261.5, y: 501.7, region: 'Oromia Region', name: 'Jimma Market Upgrade', type: 'Urban Infrastructure', status: 'Planned', photo: 'market area before works, Jimma' },
];

export const themes: Theme[] = [
  { title: 'Better Streets', body: 'Carriageways rebuilt with drainage, lighting and clear lane discipline.' },
  { title: 'Safer Walkways', body: 'Continuous, level pedestrian routes separated from traffic.' },
  { title: 'Connected Communities', body: 'Links between neighbourhoods, schools and health facilities.' },
  { title: 'More Livable Cities', body: 'Shade, seating and public space returned to residents.' },
  { title: 'Infrastructure for Growth', body: 'Capacity built ahead of demand, not behind it.' },
];

export const impact: Stat[] = [
  { value: '40+', label: 'Projects Delivered' },
  { value: '12+', label: 'Years of Experience' },
  { value: '180+', label: 'Engineers & Professionals' },
  { value: '25+', label: 'Communities Served' },
  { value: '96+ KM', label: 'Infrastructure Delivered' },
];

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#impact', label: 'Our Impact' },
  { href: '#contact', label: 'Contact' },
];
