// Starter data: loaded once by a manager from the empty planner.
export const SEED = {
 "config": {
  "year": 2027,
  "types": [
   {
    "code": "RR",
    "label": "R&R Leave",
    "color": "#0BA5B9",
    "counts": true,
    "def": 30
   },
   {
    "code": "PH",
    "label": "Public Holiday (PH)",
    "color": "#E59A0B",
    "counts": true,
    "def": 11
   },
   {
    "code": "DIL",
    "label": "Day in Lieu (DIL)",
    "color": "#C026D3",
    "counts": true,
    "def": 0
   }
  ]
 },
 "staff": [
  {
   "id": "areef-mohamed",
   "name": "Areef Mohamed",
   "empId": "PA0056",
   "position": "Airport Operations Manager",
   "order": 1,
   "ent": {}
  },
  {
   "id": "alim-ali-rasheed",
   "name": "Mohamed Alim Ali Rasheed",
   "empId": "PA0152",
   "position": "Airport Team Leader",
   "order": 2,
   "ent": {}
  },
  {
   "id": "afrah-areef",
   "name": "Afrah Areef",
   "empId": "PA0272",
   "position": "Airport Executive",
   "order": 3,
   "ent": {}
  },
  {
   "id": "hunain-hussain",
   "name": "Hunain Hussain",
   "empId": "PA0445",
   "position": "Airport Executive",
   "order": 4,
   "ent": {}
  },
  {
   "id": "naaim-nazim",
   "name": "Mohamed Naaim Nazim",
   "empId": "PA0523",
   "position": "Airport Executive",
   "order": 5,
   "ent": {}
  },
  {
   "id": "akram-ilyas",
   "name": "Ibrahim Akram Ilyas",
   "empId": "PA0528",
   "position": "Airport Executive",
   "order": 6,
   "ent": {}
  },
  {
   "id": "lassan-latheef",
   "name": "Lassan Latheef",
   "empId": "PA0717",
   "position": "Airport Executive",
   "order": 7,
   "ent": {}
  },
  {
   "id": "niushau-khaleel",
   "name": "Niushau Khaleel",
   "empId": "PA0528",
   "position": "Airport Executive",
   "order": 8,
   "ent": {}
  },
  {
   "id": "abdullah-hamdhoon",
   "name": "Abdullah Hamdhoon",
   "empId": "PA0962",
   "position": "Airport Executive",
   "order": 9,
   "ent": {}
  }
 ],
 "holidays": [
  {
   "id": "2027-02-08",
   "date": "2027-02-08",
   "name": "First day of Ramadan",
   "tentative": true,
   "kind": "mv"
  },
  {
   "id": "2027-03-10",
   "date": "2027-03-10",
   "name": "Eid-ul-Fithr",
   "tentative": true,
   "kind": "mv"
  },
  {
   "id": "2027-05-01",
   "date": "2027-05-01",
   "name": "Labour Day",
   "tentative": false,
   "kind": "mv"
  },
  {
   "id": "2027-05-16",
   "date": "2027-05-16",
   "name": "Hajj Day",
   "tentative": true,
   "kind": "mv"
  },
  {
   "id": "2027-05-17",
   "date": "2027-05-17",
   "name": "Eid-ul-Ad'haa",
   "tentative": true,
   "kind": "mv"
  },
  {
   "id": "2027-07-26",
   "date": "2027-07-26",
   "name": "Maldives Independence Day",
   "tentative": false,
   "kind": "mv"
  },
  {
   "id": "2027-08-04",
   "date": "2027-08-04",
   "name": "National Day",
   "tentative": true,
   "kind": "mv"
  },
  {
   "id": "2027-08-15",
   "date": "2027-08-15",
   "name": "Prophet Muhammad's Birthday",
   "tentative": true,
   "kind": "mv"
  },
  {
   "id": "2027-09-03",
   "date": "2027-09-03",
   "name": "The Day Maldives Embraced Islam",
   "tentative": true,
   "kind": "mv"
  },
  {
   "id": "2027-11-03",
   "date": "2027-11-03",
   "name": "Victory Day",
   "tentative": false,
   "kind": "mv"
  },
  {
   "id": "2027-11-11",
   "date": "2027-11-11",
   "name": "Republic Day",
   "tentative": false,
   "kind": "mv"
  },
  {
   "id": "intl-2027-01-01",
   "date": "2027-01-01",
   "name": "New Year's Day",
   "kind": "intl",
   "region": "Worldwide"
  },
  {
   "id": "intl-2027-01-07",
   "date": "2027-01-07",
   "name": "Orthodox Christmas",
   "kind": "intl",
   "region": "Russia & Eastern Europe"
  },
  {
   "id": "intl-2027-02-06",
   "date": "2027-02-06",
   "name": "Chinese New Year",
   "kind": "intl",
   "region": "China & East Asia"
  },
  {
   "id": "intl-2027-03-22",
   "date": "2027-03-22",
   "name": "Holi",
   "kind": "intl",
   "region": "India"
  },
  {
   "id": "intl-2027-03-26",
   "date": "2027-03-26",
   "name": "Good Friday",
   "kind": "intl",
   "region": "Christian"
  },
  {
   "id": "intl-2027-03-28",
   "date": "2027-03-28",
   "name": "Easter Sunday",
   "kind": "intl",
   "region": "Christian"
  },
  {
   "id": "intl-2027-03-29",
   "date": "2027-03-29",
   "name": "Easter Monday",
   "kind": "intl",
   "region": "Europe"
  },
  {
   "id": "intl-2027-09-15",
   "date": "2027-09-15",
   "name": "Mid-Autumn Festival",
   "kind": "intl",
   "region": "China & East Asia"
  },
  {
   "id": "intl-2027-10-01",
   "date": "2027-10-01",
   "name": "China National Day (Golden Week)",
   "kind": "intl",
   "region": "China"
  },
  {
   "id": "intl-2027-10-29",
   "date": "2027-10-29",
   "name": "Diwali",
   "kind": "intl",
   "region": "India"
  },
  {
   "id": "intl-2027-12-24",
   "date": "2027-12-24",
   "name": "Christmas Eve",
   "kind": "intl",
   "region": "Christian"
  },
  {
   "id": "intl-2027-12-25",
   "date": "2027-12-25",
   "name": "Christmas Day",
   "kind": "intl",
   "region": "Christian"
  },
  {
   "id": "intl-2027-12-26",
   "date": "2027-12-26",
   "name": "Boxing Day",
   "kind": "intl",
   "region": "UK & Commonwealth"
  },
  {
   "id": "intl-2027-12-31",
   "date": "2027-12-31",
   "name": "New Year's Eve",
   "kind": "intl",
   "region": "Worldwide"
  }
 ]
};
