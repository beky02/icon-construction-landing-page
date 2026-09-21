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
  },
    {
    id: 'baro-femele-bording-school',
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
  },
    {
    id: 'assosa-corridor',
    name: 'Assosa And Banbasi Corridor Development',
    location: 'Assosa and Banbasi city, Ethiopia',
    type: 'Urban Infrastructure',
    status: 'Completed',
    photo: 'completed corridor at street level',
    body: 'A full corridor rebuild combining carriageway, drainage, lighting, dedicated cycling infrastructure and continuous pedestrian walkways through one of the capital’s busiest districts.',
    stats: [
      { value: '5 KM', label: 'Corridor' },
      { value: '3 KM', label: 'Cycling Infrastructure' },
      { value: '5 KM', label: 'Pedestrian Walkways' },
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
  },
];

export const mapSites: MapSite[] = [
  { city: 'Baro', x: 327.5, y: 272.6, region: 'Baro Area', name: 'Baro Agro Industry', type: 'Agro Industry', status: 'Completed', photo: 'livestock farm and poultry units, Baro' },
  { city: 'Addis Ababa', x: 390.5, y: 408.7, region: 'Addis Ababa City Administration', name: 'Bole Corridor Development', type: 'Urban Infrastructure', status: 'Completed', photo: 'corridor at street level, Addis Ababa' },
  { city: 'Assosa', x: 330.0, y: 330.0, region: 'Benishangul-Gumuz Region', name: 'Assosa Referral Hospital', type: 'Healthcare', status: 'In Progress', photo: 'referral hospital renewal and landscape works, Assosa' },
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
