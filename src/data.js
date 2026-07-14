export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Missions', href: '/missions' },
  { label: 'VBS 2026', href: 'https://roehisrael.org/vbs/', external: true },
  { label: 'Find Us', href: '/find-us' },
];

const prayerBulletinFileId = '1HqwAg8Sk2kJqCDX9Fk7_IFeMOf5t5bbG';

// Read-only preview link — shows the document as a locked, non-editable
// view (no toolbar, no edit access) instead of opening Google's editor.
export const prayerBulletinUrl = `https://drive.google.com/file/d/${prayerBulletinFileId}/preview`;

export const missions = [
  {
    title: 'Local Outreach in Denver',
    desc: 'Food and clothing drives, hospital and shut-in visitation, and practical help for families in our own community — loving our neighbors is where mission starts.',
  },
  {
    title: 'Messianic Jewish Ministry',
    desc: "Roeh Israel was born out of Chosen People Ministries, and we remain committed to sharing Yeshua with the Jewish people in a way that honors Jewish identity, tradition, and Torah.",
  },
  {
    title: 'Standing With Israel',
    desc: 'Regular prayer gatherings for the peace of Jerusalem and the Land, and support for ministry partners serving Jewish and Arab communities in Israel.',
  },
  {
    title: 'Discipleship & Teaching',
    desc: 'Torah study, Messianic discipleship classes, and mentoring so believers — Jew and Gentile alike — grow rooted in Scripture and equipped to serve.',
  },
];

export const serviceTimes = [
  {
    title: 'Erev Shabbat',
    when: 'Fridays · 7:00 PM MST',
    desc: 'An intimate evening service welcoming in the Sabbath with prayer, worship, and the lighting of candles.',
    accent: false,
  },
  {
    title: 'Shabbat Service',
    when: 'Saturdays · 9:45 AM MST',
    desc: 'Our main gathering — Torah reading, teaching from a Messianic Jewish perspective, and congregational worship.',
    accent: true,
  },
  {
    title: 'VBS 2026',
    when: 'Registration open now',
    desc: 'Vacation Bible School returns in 2026 — a week of Scripture, songs, and community for our youngest members.',
    accent: false,
  },
];

export const events = [
  { month: 'AUG', day: '14', title: 'Erev Shabbat Oneg', time: '7:00 PM · Fellowship hall' },
  { month: 'AUG', day: '22', title: 'Torah Study Circle', time: '9:00 AM · Library room' },
  { month: 'SEP', day: '05', title: 'Community Potluck', time: 'After Shabbat service' },
];

export const aboutStats = [
  { num: '1980', cap: 'Congregation founded' },
  { num: '300+', cap: 'Members today' },
  { num: '45', cap: 'Years serving Denver' },
];

export const officeHours = [
  { day: 'Sunday', time: 'Closed', closed: true },
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tuesday', time: '9:00 AM – 2:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 2:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 2:00 PM' },
  { day: 'Friday', time: '9:00 AM – 12:00 PM' },
  { day: 'Saturday', time: 'Closed', closed: true },
];

export const contact = {
  email: 'roehisraeldenver@gmail.com',
  phone: '303-337-6254',
  address: ['8556 East Warren Avenue', 'Unit 1', 'Denver, Colorado 80231'],
  zelle: 'roehisraeldenver@gmail.com',
};
