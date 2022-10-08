// Array of student objects
const data = [
  {
    name: {
      title: "Miss",
      first: "Ethel",
      last: "Dean",
    },
    email: "ethel.dean@example.com",
    registered: {
      date: "12-15-2005",
      age: 15,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/25.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Lorraine",
      last: "Lynch",
    },
    email: "lorraine.lynch@example.com",
    registered: {
      date: "02-24-2006",
      age: 14,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Gregory",
      last: "Vargas",
    },
    email: "gregory.vargas@example.com",
    registered: {
      date: "03-20-2013",
      age: 7,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/23.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Lawrence",
      last: "Martin",
    },
    email: "lawrence.martin@example.com",
    registered: {
      date: "06-10-2007",
      age: 13,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/50.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Stacey",
      last: "Wells",
    },
    email: "stacey.wells@example.com",
    registered: {
      date: "09-22-2004",
      age: 16,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/21.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Terrance",
      last: "Newman",
    },
    email: "terrance.newman@example.com",
    registered: {
      date: "06-28-2007",
      age: 13,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/56.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Morris",
      last: "Burton",
    },
    email: "morris.burton@example.com",
    registered: {
      date: "02-09-2016",
      age: 4,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Terra",
      last: "Franklin",
    },
    email: "terra.franklin@example.com",
    registered: {
      date: "12-24-2008",
      age: 12,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Ted",
      last: "Bradley",
    },
    email: "ted.bradley@example.com",
    registered: {
      date: "11-29-2017",
      age: 3,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/99.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Celina",
      last: "Griffin",
    },
    email: "celina.griffin@example.com",
    registered: {
      date: "07-02-2006",
      age: 14,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/79.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/79.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Duane",
      last: "Soto",
    },
    email: "duane.soto@example.com",
    registered: {
      date: "09-15-2002",
      age: 18,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Ray",
      last: "Vargas",
    },
    email: "ray.vargas@example.com",
    registered: {
      date: "12-03-2007",
      age: 13,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Douglas",
      last: "Torres",
    },
    email: "douglas.torres@example.com",
    registered: {
      date: "11-06-2011",
      age: 9,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Mia",
      last: "Snyder",
    },
    email: "mia.snyder@example.com",
    registered: {
      date: "05-27-2014",
      age: 6,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/54.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mario",
      last: "Freeman",
    },
    email: "mario.freeman@example.com",
    registered: {
      date: "02-14-2012",
      age: 8,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/30.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Herman",
      last: "Griffin",
    },
    email: "herman.griffin@example.com",
    registered: {
      date: "11-04-2009",
      age: 11,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/16.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Marian",
      last: "Williamson",
    },
    email: "marian.williamson@example.com",
    registered: {
      date: "02-14-2010",
      age: 10,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Victor",
      last: "Rodriquez",
    },
    email: "victor.rodriquez@example.com",
    registered: {
      date: "10-03-2006",
      age: 14,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/49.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Beverley",
      last: "Gregory",
    },
    email: "beverley.gregory@example.com",
    registered: {
      date: "02-12-2006",
      age: 14,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/72.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Nellie",
      last: "Schmidt",
    },
    email: "nellie.schmidt@example.com",
    registered: {
      date: "10-28-2011",
      age: 9,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Carlos",
      last: "Gibson",
    },
    email: "carlos.gibson@example.com",
    registered: {
      date: "08-30-2014",
      age: 6,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Kevin",
      last: "Hamilton",
    },
    email: "kevin.hamilton@example.com",
    registered: {
      date: "12-26-2004",
      age: 16,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/11.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Flenn",
      last: "Torres",
    },
    email: "flenn.torres@example.com",
    registered: {
      date: "03-09-2011",
      age: 9,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/95.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Sue",
      last: "Kim",
    },
    email: "sue.kim@example.com",
    registered: {
      date: "06-20-2011",
      age: 9,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/62.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Bella",
      last: "Fields",
    },
    email: "bella.fields@example.com",
    registered: {
      date: "05-08-2009",
      age: 11,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Valerie",
      last: "West",
    },
    email: "valerie.west@example.com",
    registered: {
      date: "05-18-2006",
      age: 14,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/36.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Douglas",
      last: "Pearson",
    },
    email: "douglas.pearson@example.com",
    registered: {
      date: "07-18-2005",
      age: 15,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Dolores",
      last: "Daniels",
    },
    email: "dolores.daniels@example.com",
    registered: {
      date: "02-22-2019",
      age: 1,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Billie",
      last: "Knight",
    },
    email: "billie.knight@example.com",
    registered: {
      date: "02-16-2010",
      age: 10,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/37.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Luke",
      last: "Neal",
    },
    email: "luke.neal@example.com",
    registered: {
      date: "06-29-2015",
      age: 5,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Billy",
      last: "Gray",
    },
    email: "billy.gray@example.com",
    registered: {
      date: "07-09-2007",
      age: 13,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/43.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Roy",
      last: "Evans",
    },
    email: "roy.evans@example.com",
    registered: {
      date: "10-24-2010",
      age: 10,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Shane",
      last: "Baker",
    },
    email: "shane.baker@example.com",
    registered: {
      date: "12-28-2011",
      age: 9,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Tom",
      last: "Sims",
    },
    email: "tom.sims@example.com",
    registered: {
      date: "05-07-2015",
      age: 5,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Travis",
      last: "Brooks",
    },
    email: "travis.brooks@example.com",
    registered: {
      date: "11-23-2008",
      age: 12,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/16.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Karl",
      last: "Shaw",
    },
    email: "karl.shaw@example.com",
    registered: {
      date: "07-16-2007",
      age: 13,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Anthony",
      last: "Miller",
    },
    email: "anthony.miller@example.com",
    registered: {
      date: "03-31-2004",
      age: 16,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Elizabeth",
      last: "Jimenez",
    },
    email: "elizabeth.jimenez@example.com",
    registered: {
      date: "06-08-2003",
      age: 17,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Marc",
      last: "Payne",
    },
    email: "marc.payne@example.com",
    registered: {
      date: "05-22-2004",
      age: 16,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/89.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jon",
      last: "Berry",
    },
    email: "jon.berry@example.com",
    registered: {
      date: "10-10-2016",
      age: 4,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Natalie",
      last: "Arnold",
    },
    email: "natalie.arnold@example.com",
    registered: {
      date: "06-25-2019",
      age: 1,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/16.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Allen",
      last: "Thompson",
    },
    email: "allen.thompson@example.com",
    registered: {
      date: "08-14-2010",
      age: 10,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/48.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
    },
  },
];
