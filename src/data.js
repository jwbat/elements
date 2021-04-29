const elements = [
  {
      "name": "Hydrogen",
      "atomic_mass": 1.008,
      "category": "diatomic nonmetal",
      "discovered_by": "Henry Cavendish",
      "named_by": "Antoine Lavoisier",
      "number": 1,
      "period": 1,
      "symbol": "H",
      "xpos": 1,
      "ypos": 1,
  },
  {
      "name": "Helium",
      "atomic_mass": 4.0026022,
      "category": "noble gas",
      "discovered_by": "Pierre Janssen",
      "named_by": null,
      "number": 2,
      "period": 1,
      "symbol": "He",
      "xpos": 18,
      "ypos": 1,
  },
  {
      "name": "Lithium",
      "atomic_mass": 6.94,
      "category": "alkali metal",
      "discovered_by": "Johan August Arfwedson",
      "number": 3,
      "period": 2,
      "symbol": "Li",
      "xpos": 1,
      "ypos": 2,
  },
  {
      "name": "Beryllium",
      "atomic_mass": 9.01218315,
      "category": "alkaline earth metal",
      "discovered_by": "Louis Nicolas Vauquelin",
      "number": 4,
      "period": 2,
      "symbol": "Be",
      "xpos": 2,
      "ypos": 2,
  },
  {
      "name": "Boron",
      "atomic_mass": 10.81,
      "category": "metalloid",
      "discovered_by": "Joseph Louis Gay-Lussac",
      "number": 5,
      "period": 2,
      "symbol": "B",
      "xpos": 13,
      "ypos": 2,
  },
  {
      "name": "Carbon",
      "atomic_mass": 12.011,
      "category": "polyatomic nonmetal",
      "discovered_by": "Ancient Egypt",
      "number": 6,
      "period": 2,
      "symbol": "C",
      "xpos": 14,
      "ypos": 2,
  },
  {
      "name": "Nitrogen",
      "atomic_mass": 14.007,
      "category": "diatomic nonmetal",
      "discovered_by": "Daniel Rutherford",
      "number": 7,
      "period": 2,
      "symbol": "N",
      "xpos": 15,
      "ypos": 2,
  },
  {
      "name": "Oxygen",
      "atomic_mass": 15.999,
      "category": "diatomic nonmetal",
      "discovered_by": "Carl Wilhelm Scheele",
      "number": 8,
      "period": 2,
      "symbol": "O",
      "xpos": 16,
      "ypos": 2,
  },
  {
      "name": "Fluorine",
      "atomic_mass": 18.9984031636,
      "category": "diatomic nonmetal",
      "discovered_by": "André-Marie Ampère",
      "number": 9,
      "period": 2,
      "symbol": "F",
      "xpos": 17,
      "ypos": 2,
  },
  {
      "name": "Neon",
      "atomic_mass": 20.17976,
      "category": "noble gas",
      "discovered_by": "Morris Travers",
      "number": 10,
      "period": 2,
      "symbol": "Ne",
      "xpos": 18,
      "ypos": 2,
  },
  {
      "name": "Sodium",
      "atomic_mass": 22.989769282,
      "category": "alkali metal",
      "discovered_by": "Humphry Davy",
      "number": 11,
      "period": 3,
      "symbol": "Na",
      "xpos": 1,
      "ypos": 3,
  },
  {
      "name": "Magnesium",
      "atomic_mass": 24.305,
      "category": "alkaline earth metal",
      "discovered_by": "Joseph Black",
      "number": 12,
      "period": 3,
      "symbol": "Mg",
      "xpos": 2,
      "ypos": 3,
  },
  {
      "name": "Aluminium",
      "atomic_mass": 26.98153857,
      "category": "post-transition metal",
      "discovered_by": "Hans Christian Ørsted",
      "number": 13,
      "period": 3,
      "symbol": "Al",
      "xpos": 13,
      "ypos": 3,
  },
  {
      "name": "Silicon",
      "atomic_mass": 28.085,
      "category": "metalloid",
      "discovered_by": "Jöns Jacob Berzelius",
      "number": 14,
      "period": 3,
      "symbol": "Si",
      "xpos": 14,
      "ypos": 3,
  },
  {
      "name": "Phosphorus",
      "atomic_mass": 30.9737619985,
      "category": "polyatomic nonmetal",
      "discovered_by": "Hennig Brand",
      "number": 15,
      "period": 3,
      "symbol": "P",
      "xpos": 15,
      "ypos": 3,
  },
  {
      "name": "Sulfur",
      "atomic_mass": 32.06,
      "category": "polyatomic nonmetal",
      "discovered_by": "Ancient china",
      "number": 16,
      "period": 3,
      "symbol": "S",
      "xpos": 16,
      "ypos": 3,
  },
  {
      "name": "Chlorine",
      "atomic_mass": 35.45,
      "category": "diatomic nonmetal",
      "discovered_by": "Carl Wilhelm Scheele",
      "number": 17,
      "period": 3,
      "symbol": "Cl",
      "xpos": 17,
      "ypos": 3,
  },
  {
      "name": "Argon",
      "atomic_mass": 39.9481,
      "category": "noble gas",
      "discovered_by": "Lord Rayleigh",
      "number": 18,
      "period": 3,
      "symbol": "Ar",
      "xpos": 18,
      "ypos": 3,
  },
  {
      "name": "Potassium",
      "atomic_mass": 39.09831,
      "category": "alkali metal",
      "discovered_by": "Humphry Davy",
      "number": 19,
      "period": 4,
      "symbol": "K",
      "xpos": 1,
      "ypos": 4,
  },
  {
      "name": "Calcium",
      "atomic_mass": 40.0784,
      "category": "alkaline earth metal",
      "discovered_by": "Humphry Davy",
      "number": 20,
      "period": 4,
      "symbol": "Ca",
      "xpos": 2,
      "ypos": 4,
  },
  {
      "name": "Scandium",
      "atomic_mass": 44.9559085,
      "category": "transition metal",
      "discovered_by": "Lars Fredrik Nilson",
      "number": 21,
      "period": 4,
      "symbol": "Sc",
      "xpos": 3,
      "ypos": 4,
  },
  {
      "name": "Titanium",
      "atomic_mass": 47.8671,
      "category": "transition metal",
      "discovered_by": "William Gregor",
      "number": 22,
      "period": 4,
      "symbol": "Ti",
      "xpos": 4,
      "ypos": 4,
  },
  {
      "name": "Vanadium",
      "atomic_mass": 50.94151,
      "category": "transition metal",
      "discovered_by": "Andrés Manuel del Río",
      "number": 23,
      "period": 4,
      "symbol": "V",
      "xpos": 5,
      "ypos": 4,
  },
  {
      "name": "Chromium",
      "atomic_mass": 51.99616,
      "category": "transition metal",
      "discovered_by": "Louis Nicolas Vauquelin",
      "number": 24,
      "period": 4,
      "symbol": "Cr",
      "xpos": 6,
      "ypos": 4,
  },
  {
      "name": "Manganese",
      "atomic_mass": 54.9380443,
      "category": "transition metal",
      "discovered_by": "Torbern Olof Bergman",
      "number": 25,
      "period": 4,
      "symbol": "Mn",
      "xpos": 7,
      "ypos": 4,
  },
  {
      "name": "Iron",
      "atomic_mass": 55.8452,
      "category": "transition metal",
      "discovered_by": "5000 BC",
      "number": 26,
      "period": 4,
      "symbol": "Fe",
      "xpos": 8,
      "ypos": 4,
  },
  {
      "name": "Cobalt",
      "atomic_mass": 58.9331944,
      "category": "transition metal",
      "discovered_by": "Georg Brandt",
      "number": 27,
      "period": 4,
      "symbol": "Co",
      "xpos": 9,
      "ypos": 4,
  },
  {
      "name": "Nickel",
      "atomic_mass": 58.69344,
      "category": "transition metal",
      "discovered_by": "Axel Fredrik Cronstedt",
      "number": 28,
      "period": 4,
      "symbol": "Ni",
      "xpos": 10,
      "ypos": 4,
  },
  {
      "name": "Copper",
      "atomic_mass": 63.5463,
      "category": "transition metal",
      "discovered_by": "Middle East",
      "number": 29,
      "period": 4,
      "symbol": "Cu",
      "xpos": 11,
      "ypos": 4,
  },
  {
      "name": "Zinc",
      "atomic_mass": 65.382,
      "category": "transition metal",
      "discovered_by": "India",
      "number": 30,
      "period": 4,
      "symbol": "Zn",
      "xpos": 12,
      "ypos": 4,
  },
  {
      "name": "Gallium",
      "atomic_mass": 69.7231,
      "category": "post-transition metal",
      "discovered_by": "Lecoq de Boisbaudran",
      "number": 31,
      "period": 4,
      "symbol": "Ga",
      "xpos": 13,
      "ypos": 4,
  },
  {
      "name": "Germanium",
      "atomic_mass": 72.6308,
      "category": "metalloid",
      "discovered_by": "Clemens Winkler",
      "number": 32,
      "period": 4,
      "symbol": "Ge",
      "xpos": 14,
      "ypos": 4,
  },
  {
      "name": "Arsenic",
      "atomic_mass": 74.9215956,
      "category": "metalloid",
      "discovered_by": "Bronze Age",
      "number": 33,
      "period": 4,
      "symbol": "As",
      "xpos": 15,
      "ypos": 4,
  },
  {
      "name": "Selenium",
      "atomic_mass": 78.9718,
      "category": "polyatomic nonmetal",
      "discovered_by": "Jöns Jakob Berzelius",
      "number": 34,
      "period": 4,
      "symbol": "Se",
      "xpos": 16,
      "ypos": 4,
  },
  {
      "name": "Bromine",
      "atomic_mass": 79.904,
      "category": "diatomic nonmetal",
      "discovered_by": "Antoine Jérôme Balard",
      "number": 35,
      "period": 4,
      "symbol": "Br",
      "xpos": 17,
      "ypos": 4,
  },
  {
      "name": "Krypton",
      "atomic_mass": 83.7982,
      "category": "noble gas",
      "discovered_by": "William Ramsay",
      "number": 36,
      "period": 4,
      "symbol": "Kr",
      "xpos": 18,
      "ypos": 4,
  },
  {
      "name": "Rubidium",
      "atomic_mass": 85.46783,
      "category": "alkali metal",
      "discovered_by": "Robert Bunsen",
      "number": 37,
      "period": 5,
      "symbol": "Rb",
      "xpos": 1,
      "ypos": 5,
  },
  {
      "name": "Strontium",
      "atomic_mass": 87.621,
      "category": "alkaline earth metal",
      "discovered_by": "William Cruickshank",
      "number": 38,
      "period": 5,
      "symbol": "Sr",
      "xpos": 2,
      "ypos": 5,
  },
  {
      "name": "Yttrium",
      "atomic_mass": 88.905842,
      "category": "transition metal",
      "discovered_by": "Johan Gadolin",
      "number": 39,
      "period": 5,
      "symbol": "Y",
      "xpos": 3,
      "ypos": 5,
  },
  {
      "name": "Zirconium",
      "atomic_mass": 91.2242,
      "category": "transition metal",
      "discovered_by": "Martin Heinrich Klaproth",
      "number": 40,
      "period": 5,
      "symbol": "Zr",
      "xpos": 4,
      "ypos": 5,
  },
  {
      "name": "Niobium",
      "atomic_mass": 92.906372,
      "category": "transition metal",
      "discovered_by": "Charles Hatchett",
      "number": 41,
      "period": 5,
      "symbol": "Nb",
      "xpos": 5,
      "ypos": 5,
  },
  {
      "name": "Molybdenum",
      "atomic_mass": 95.951,
      "category": "transition metal",
      "discovered_by": "Carl Wilhelm Scheele",
      "number": 42,
      "period": 5,
      "symbol": "Mo",
      "xpos": 6,
      "ypos": 5,
  },
  {
      "name": "Technetium",
      "atomic_mass": 98,
      "category": "transition metal",
      "discovered_by": "Emilio Segrè",
      "number": 43,
      "period": 5,
      "symbol": "Tc",
      "xpos": 7,
      "ypos": 5,
  },
  {
      "name": "Ruthenium",
      "atomic_mass": 101.072,
      "category": "transition metal",
      "discovered_by": "Karl Ernst Claus",
      "number": 44,
      "period": 5,
      "symbol": "Ru",
      "xpos": 8,
      "ypos": 5,
  },
  {
      "name": "Rhodium",
      "atomic_mass": 102.905502,
      "category": "transition metal",
      "discovered_by": "William Hyde Wollaston",
      "number": 45,
      "period": 5,
      "symbol": "Rh",
      "xpos": 9,
      "ypos": 5,
  },
  {
      "name": "Palladium",
      "atomic_mass": 106.421,
      "category": "transition metal",
      "discovered_by": "William Hyde Wollaston",
      "number": 46,
      "period": 5,
      "symbol": "Pd",
      "xpos": 10,
      "ypos": 5,
  },
  {
      "name": "Silver",
      "atomic_mass": 107.86822,
      "category": "transition metal",
      "discovered_by": "unknown, before 5000 BC",
      "number": 47,
      "period": 5,
      "symbol": "Ag",
      "xpos": 11,
      "ypos": 5,
  },
  {
      "name": "Cadmium",
      "atomic_mass": 112.4144,
      "category": "transition metal",
      "discovered_by": "Karl Samuel Leberecht Hermann",
      "number": 48,
      "period": 5,
      "symbol": "Cd",
      "xpos": 12,
      "ypos": 5,
  },
  {
      "name": "Indium",
      "atomic_mass": 114.8181,
      "category": "post-transition metal",
      "discovered_by": "Ferdinand Reich",
      "number": 49,
      "period": 5,
      "symbol": "In",
      "xpos": 13,
      "ypos": 5,
  },
  {
      "name": "Tin",
      "atomic_mass": 118.7107,
      "category": "post-transition metal",
      "discovered_by": "unknown, before 3500 BC",
      "number": 50,
      "period": 5,
      "symbol": "Sn",
      "xpos": 14,
      "ypos": 5,
  },
  {
      "name": "Antimony",
      "atomic_mass": 121.7601,
      "category": "metalloid",
      "discovered_by": "unknown, before 3000 BC",
      "number": 51,
      "period": 5,
      "symbol": "Sb",
      "xpos": 15,
      "ypos": 5,
  },
  {
      "name": "Tellurium",
      "atomic_mass": 127.603,
      "category": "metalloid",
      "discovered_by": "Franz-Joseph Müller von Reichenstein",
      "number": 52,
      "period": 5,
      "symbol": "Te",
      "xpos": 16,
      "ypos": 5,
  },
  {
      "name": "Iodine",
      "atomic_mass": 126.904473,
      "category": "diatomic nonmetal",
      "discovered_by": "Bernard Courtois",
      "number": 53,
      "period": 5,
      "symbol": "I",
      "xpos": 17,
      "ypos": 5,
  },
  {
      "name": "Xenon",
      "atomic_mass": 131.2936,
      "category": "noble gas",
      "discovered_by": "William Ramsay",
      "number": 54,
      "period": 5,
      "symbol": "Xe",
      "xpos": 18,
      "ypos": 5,
  },
  {
      "name": "Cesium",
      "atomic_mass": 132.905451966,
      "category": "alkali metal",
      "discovered_by": "Robert Bunsen",
      "number": 55,
      "period": 6,
      "symbol": "Cs",
      "xpos": 1,
      "ypos": 6,
  },
  {
      "name": "Barium",
      "atomic_mass": 137.3277,
      "category": "alkaline earth metal",
      "discovered_by": "Carl Wilhelm Scheele",
      "number": 56,
      "period": 6,
      "symbol": "Ba",
      "xpos": 2,
      "ypos": 6,
  },
  {
      "name": "Lanthanum",
      "atomic_mass": 138.905477,
      "category": "lanthanide",
      "discovered_by": "Carl Gustaf Mosander",
      "number": 57,
      "period": 6,
      "symbol": "La",
      "xpos": 3,
      "ypos": 9,
  },
  {
      "name": "Cerium",
      "atomic_mass": 140.1161,
      "category": "lanthanide",
      "discovered_by": "Martin Heinrich Klaproth",
      "number": 58,
      "period": 6,
      "symbol": "Ce",
      "xpos": 4,
      "ypos": 9,
  },
  {
      "name": "Praseodymium",
      "atomic_mass": 140.907662,
      "category": "lanthanide",
      "discovered_by": "Carl Auer von Welsbach",
      "number": 59,
      "period": 6,
      "symbol": "Pr",
      "xpos": 5,
      "ypos": 9,
  },
  {
      "name": "Neodymium",
      "atomic_mass": 144.2423,
      "category": "lanthanide",
      "discovered_by": "Carl Auer von Welsbach",
      "number": 60,
      "period": 6,
      "symbol": "Nd",
      "xpos": 6,
      "ypos": 9,
  },
  {
      "name": "Promethium",
      "atomic_mass": 145,
      "category": "lanthanide",
      "discovered_by": "Chien Shiung Wu",
      "number": 61,
      "period": 6,
      "symbol": "Pm",
      "xpos": 7,
      "ypos": 9,
  },
  {
      "name": "Samarium",
      "atomic_mass": 150.362,
      "category": "lanthanide",
      "discovered_by": "Lecoq de Boisbaudran",
      "number": 62,
      "period": 6,
      "symbol": "Sm",
      "xpos": 8,
      "ypos": 9,
  },
  {
      "name": "Europium",
      "atomic_mass": 151.9641,
      "category": "lanthanide",
      "discovered_by": "Eugène-Anatole Demarçay",
      "number": 63,
      "period": 6,
      "symbol": "Eu",
      "xpos": 9,
      "ypos": 9,
  },
  {
      "name": "Gadolinium",
      "atomic_mass": 157.253,
      "category": "lanthanide",
      "discovered_by": "Jean Charles Galissard de Marignac",
      "number": 64,
      "period": 6,
      "symbol": "Gd",
      "xpos": 10,
      "ypos": 9,
  },
  {
      "name": "Terbium",
      "atomic_mass": 158.925352,
      "category": "lanthanide",
      "discovered_by": "Carl Gustaf Mosander",
      "number": 65,
      "period": 6,
      "symbol": "Tb",
      "xpos": 11,
      "ypos": 9,
  },
  {
      "name": "Dysprosium",
      "atomic_mass": 162.5001,
      "category": "lanthanide",
      "discovered_by": "Lecoq de Boisbaudran",
      "number": 66,
      "period": 6,
      "symbol": "Dy",
      "xpos": 12,
      "ypos": 9,
  },
  {
      "name": "Holmium",
      "atomic_mass": 164.930332,
      "category": "lanthanide",
      "discovered_by": "Marc Delafontaine",
      "number": 67,
      "period": 6,
      "symbol": "Ho",
      "xpos": 13,
      "ypos": 9,
  },
  {
      "name": "Erbium",
      "atomic_mass": 167.2593,
      "category": "lanthanide",
      "discovered_by": "Carl Gustaf Mosander",
      "number": 68,
      "period": 6,
      "symbol": "Er",
      "xpos": 14,
      "ypos": 9,
  },
  {
      "name": "Thulium",
      "atomic_mass": 168.934222,
      "category": "lanthanide",
      "discovered_by": "Per Teodor Cleve",
      "number": 69,
      "period": 6,
      "symbol": "Tm",
      "xpos": 15,
      "ypos": 9,
  },
  {
      "name": "Ytterbium",
      "atomic_mass": 173.0451,
      "category": "lanthanide",
      "discovered_by": "Jean Charles Galissard de Marignac",
      "number": 70,
      "period": 6,
      "symbol": "Yb",
      "xpos": 16,
      "ypos": 9,
  },
  {
      "name": "Lutetium",
      "atomic_mass": 174.96681,
      "category": "lanthanide",
      "discovered_by": "Georges Urbain",
      "number": 71,
      "period": 6,
      "symbol": "Lu",
      "xpos": 17,
      "ypos": 9,
  },
  {
      "name": "Hafnium",
      "atomic_mass": 178.492,
      "category": "transition metal",
      "discovered_by": "Dirk Coster",
      "number": 72,
      "period": 6,
      "symbol": "Hf",
      "xpos": 4,
      "ypos": 6,
  },
  {
      "name": "Tantalum",
      "atomic_mass": 180.947882,
      "category": "transition metal",
      "discovered_by": "Anders Gustaf Ekeberg",
      "number": 73,
      "period": 6,
      "symbol": "Ta",
      "xpos": 5,
      "ypos": 6,
  },
  {
      "name": "Tungsten",
      "atomic_mass": 183.841,
      "category": "transition metal",
      "discovered_by": "Carl Wilhelm Scheele",
      "number": 74,
      "period": 6,
      "symbol": "W",
      "xpos": 6,
      "ypos": 6,
  },
  {
      "name": "Rhenium",
      "atomic_mass": 186.2071,
      "category": "transition metal",
      "discovered_by": "Masataka Ogawa",
      "number": 75,
      "period": 6,
      "symbol": "Re",
      "xpos": 7,
      "ypos": 6,
  },
  {
      "name": "Osmium",
      "atomic_mass": 190.233,
      "category": "transition metal",
      "discovered_by": "Smithson Tennant",
      "number": 76,
      "period": 6,
      "symbol": "Os",
      "xpos": 8,
      "ypos": 6,
  },
  {
      "name": "Iridium",
      "atomic_mass": 192.2173,
      "category": "transition metal",
      "discovered_by": "Smithson Tennant",
      "number": 77,
      "period": 6,
      "symbol": "Ir",
      "xpos": 9,
      "ypos": 6,
  },
  {
      "name": "Platinum",
      "atomic_mass": 195.0849,
      "category": "transition metal",
      "discovered_by": "Antonio de Ulloa",
      "number": 78,
      "period": 6,
      "symbol": "Pt",
      "xpos": 10,
      "ypos": 6,
  },
  {
      "name": "Gold",
      "atomic_mass": 196.9665695,
      "category": "transition metal",
      "discovered_by": "Middle East",
      "number": 79,
      "period": 6,
      "symbol": "Au",
      "xpos": 11,
      "ypos": 6,
  },
  {
      "name": "Mercury",
      "atomic_mass": 200.5923,
      "category": "transition metal",
      "discovered_by": "unknown, before 2000 BCE",
      "number": 80,
      "period": 6,
      "symbol": "Hg",
      "xpos": 12,
      "ypos": 6,
  },
  {
      "name": "Thallium",
      "atomic_mass": 204.38,
      "category": "post-transition metal",
      "discovered_by": "William Crookes",
      "number": 81,
      "period": 6,
      "symbol": "Tl",
      "xpos": 13,
      "ypos": 6,
  },
  {
      "name": "Lead",
      "atomic_mass": 207.21,
      "category": "post-transition metal",
      "discovered_by": "Middle East",
      "number": 82,
      "period": 6,
      "symbol": "Pb",
      "xpos": 14,
      "ypos": 6,
  },
  {
      "name": "Bismuth",
      "atomic_mass": 208.980401,
      "category": "post-transition metal",
      "discovered_by": "Claude François Geoffroy",
      "number": 83,
      "period": 6,
      "symbol": "Bi",
      "xpos": 15,
      "ypos": 6,
  },
  {
      "name": "Polonium",
      "atomic_mass": 209,
      "category": "post-transition metal",
      "discovered_by": "Pierre Curie",
      "number": 84,
      "period": 6,
      "symbol": "Po",
      "xpos": 16,
      "ypos": 6,
  },
  {
      "name": "Astatine",
      "atomic_mass": 210,
      "category": "metalloid",
      "discovered_by": "Dale R. Corson",
      "number": 85,
      "period": 6,
      "symbol": "At",
      "xpos": 17,
      "ypos": 6,
  },
  {
      "name": "Radon",
      "atomic_mass": 222,
      "category": "noble gas",
      "discovered_by": "Friedrich Ernst Dorn",
      "number": 86,
      "period": 6,
      "symbol": "Rn",
      "xpos": 18,
      "ypos": 6,
  },
  {
      "name": "Francium",
      "atomic_mass": 223,
      "category": "alkali metal",
      "discovered_by": "Marguerite Perey",
      "number": 87,
      "period": 7,
      "symbol": "Fr",
      "xpos": 1,
      "ypos": 7,
  },
  {
      "name": "Radium",
      "atomic_mass": 226,
      "category": "alkaline earth metal",
      "discovered_by": "Pierre Curie",
      "number": 88,
      "period": 7,
      "symbol": "Ra",
      "xpos": 2,
      "ypos": 7,
  },
  {
      "name": "Actinium",
      "atomic_mass": 227,
      "category": "actinide",
      "discovered_by": "Friedrich Oskar Giesel",
      "number": 89,
      "period": 7,
      "symbol": "Ac",
      "xpos": 3,
      "ypos": 10,
  },
  {
      "name": "Thorium",
      "atomic_mass": 232.03774,
      "category": "actinide",
      "discovered_by": "Jöns Jakob Berzelius",
      "number": 90,
      "period": 7,
      "symbol": "Th",
      "xpos": 4,
      "ypos": 10,
  },
  {
      "name": "Protactinium",
      "atomic_mass": 231.035882,
      "category": "actinide",
      "discovered_by": "William Crookes",
      "number": 91,
      "period": 7,
      "symbol": "Pa",
      "xpos": 5,
      "ypos": 10,
  },
  {
      "name": "Uranium",
      "atomic_mass": 238.028913,
      "category": "actinide",
      "discovered_by": "Martin Heinrich Klaproth",
      "number": 92,
      "period": 7,
      "symbol": "U",
      "xpos": 6,
      "ypos": 10,
  },
  {
      "name": "Neptunium",
      "atomic_mass": 237,
      "category": "actinide",
      "discovered_by": "Edwin McMillan",
      "number": 93,
      "period": 7,
      "symbol": "Np",
      "xpos": 7,
      "ypos": 10,
  },
  {
      "name": "Plutonium",
      "atomic_mass": 244,
      "category": "actinide",
      "discovered_by": "Glenn T. Seaborg",
      "number": 94,
      "period": 7,
      "symbol": "Pu",
      "xpos": 8,
      "ypos": 10,
  },
  {
      "name": "Americium",
      "atomic_mass": 243,
      "category": "actinide",
      "discovered_by": "Glenn T. Seaborg",
      "number": 95,
      "period": 7,
      "symbol": "Am",
      "xpos": 9,
      "ypos": 10,
  },
  {
      "name": "Curium",
      "atomic_mass": 247,
      "category": "actinide",
      "discovered_by": "Glenn T. Seaborg",
      "number": 96,
      "period": 7,
      "symbol": "Cm",
      "xpos": 10,
      "ypos": 10,
  },
  {
      "name": "Berkelium",
      "atomic_mass": 247,
      "category": "actinide",
      "discovered_by": "Lawrence Berkeley National Laboratory",
      "number": 97,
      "period": 7,
      "symbol": "Bk",
      "xpos": 11,
      "ypos": 10,
  },
  {
      "name": "Californium",
      "atomic_mass": 251,
      "category": "actinide",
      "discovered_by": "Lawrence Berkeley National Laboratory",
      "number": 98,
      "period": 7,
      "symbol": "Cf",
      "xpos": 12,
      "ypos": 10,
  },
  {
      "name": "Einsteinium",
      "atomic_mass": 252,
      "category": "actinide",
      "discovered_by": "Lawrence Berkeley National Laboratory",
      "number": 99,
      "period": 7,
      "symbol": "Es",
      "xpos": 13,
      "ypos": 10,
  },
  {
      "name": "Fermium",
      "atomic_mass": 257,
      "category": "actinide",
      "discovered_by": "Lawrence Berkeley National Laboratory",
      "number": 100,
      "period": 7,
      "symbol": "Fm",
      "xpos": 14,
      "ypos": 10,
  },
  {
      "name": "Mendelevium",
      "atomic_mass": 258,
      "category": "actinide",
      "discovered_by": "Lawrence Berkeley National Laboratory",
      "number": 101,
      "period": 7,
      "symbol": "Md",
      "xpos": 15,
      "ypos": 10,
  },
  {
      "name": "Nobelium",
      "atomic_mass": 259,
      "category": "actinide",
      "discovered_by": "Joint Institute for Nuclear Research",
      "number": 102,
      "period": 7,
      "symbol": "No",
      "xpos": 16,
      "ypos": 10,
  },
  {
      "name": "Lawrencium",
      "atomic_mass": 266,
      "category": "actinide",
      "discovered_by": "Lawrence Berkeley National Laboratory",
      "number": 103,
      "period": 7,
      "symbol": "Lr",
      "xpos": 17,
      "ypos": 10,
  },
  {
      "name": "Rutherfordium",
      "atomic_mass": 267,
      "category": "transition metal",
      "discovered_by": "Joint Institute for Nuclear Research",
      "number": 104,
      "period": 7,
      "symbol": "Rf",
      "xpos": 4,
      "ypos": 7,
  },
  {
      "name": "Dubnium",
      "atomic_mass": 268,
      "category": "transition metal",
      "discovered_by": "Joint Institute for Nuclear Research",
      "number": 105,
      "period": 7,
      "symbol": "Db",
      "xpos": 5,
      "ypos": 7,
  },
  {
      "name": "Seaborgium",
      "atomic_mass": 269,
      "category": "transition metal",
      "discovered_by": "Lawrence Berkeley National Laboratory",
      "number": 106,
      "period": 7,
      "symbol": "Sg",
      "xpos": 6,
      "ypos": 7,
  },
  {
      "name": "Bohrium",
      "atomic_mass": 270,
      "category": "transition metal",
      "discovered_by": "Gesellschaft für Schwerionenforschung",
      "number": 107,
      "period": 7,
      "symbol": "Bh",
      "xpos": 7,
      "ypos": 7,
  },
  {
      "name": "Hassium",
      "atomic_mass": 269,
      "category": "transition metal",
      "discovered_by": "Gesellschaft für Schwerionenforschung",
      "number": 108,
      "period": 7,
      "symbol": "Hs",
      "xpos": 8,
      "ypos": 7,
  },
  {
      "name": "Meitnerium",
      "atomic_mass": 278,
      "category": "transition metal",
      "discovered_by": "Gesellschaft für Schwerionenforschung",
      "number": 109,
      "period": 7,
      "symbol": "Mt",
      "xpos": 9,
      "ypos": 7,
  },
  {
      "name": "Darmstadtium",
      "atomic_mass": 281,
      "category": "transition metal",
      "discovered_by": "Gesellschaft für Schwerionenforschung",
      "number": 110,
      "period": 7,
      "symbol": "Ds",
      "xpos": 10,
      "ypos": 7,
  },
  {
      "name": "Roentgenium",
      "atomic_mass": 282,
      "category": "transition metal",
      "discovered_by": "Gesellschaft für Schwerionenforschung",
      "number": 111,
      "period": 7,
      "symbol": "Rg",
      "xpos": 11,
      "ypos": 7,
  },
  {
      "name": "Copernicium",
      "atomic_mass": 285,
      "category": "transition metal",
      "discovered_by": "Gesellschaft für Schwerionenforschung",
      "number": 112,
      "period": 7,
      "symbol": "Cn",
      "xpos": 12,
      "ypos": 7,
  },
  {
      "name": "Nihonium",
      "atomic_mass": 286,
      "category": "transition metal",
      "discovered_by": "RIKEN",
      "number": 113,
      "period": 7,
      "symbol": "Nh",
      "xpos": 13,
      "ypos": 7,
  },
  {
      "name": "Flerovium",
      "atomic_mass": 289,
      "category": "post-transition metal",
      "discovered_by": "Joint Institute for Nuclear Research",
      "number": 114,
      "period": 7,
      "symbol": "Fl",
      "xpos": 14,
      "ypos": 7,
  },
  {
      "name": "Moscovium",
      "atomic_mass": 289,
      "category": "unknown, probably post-transition metal",
      "discovered_by": "Joint Institute for Nuclear Research",
      "number": 115,
      "period": 7,
      "symbol": "Mc",
      "xpos": 15,
      "ypos": 7,
  },
  {
      "name": "Livermorium",
      "atomic_mass": 293,
      "category": "unknown, probably post-transition metal",
      "discovered_by": "Joint Institute for Nuclear Research",
      "number": 116,
      "period": 7,
      "symbol": "Lv",
      "xpos": 16,
      "ypos": 7,
  },
  {
      "name": "Tennessine",
      "atomic_mass": 294,
      "category": "unknown, probably metalloid",
      "discovered_by": "Joint Institute for Nuclear Research",
      "number": 117,
      "period": 7,
      "symbol": "Ts",
      "xpos": 17,
      "ypos": 7,
  },
  {
      "name": "Oganesson",
      "atomic_mass": 294,
      "category": "unknown, predicted to be noble gas",
      "discovered_by": "Joint Institute for Nuclear Research",
      "number": 118,
      "period": 7,
      "symbol": "Og",
      "xpos": 18,
      "ypos": 7,
  },
  {
      "name": "Ununennium",
      "atomic_mass": 315,
      "category": "unknown, but predicted to be an alkali metal",
      "discovered_by": "..to be determined",
      "number": 119,
      "period": 8,
      "symbol": "Uue",
      "xpos": 1,
      "ypos": 8,
  }
];


export default elements;