const seed = {
  dogs: [
    {
      name: 'Tambor',
      type: 'Pug',
      age: 6,
      _petId: 1,
      _owner: 1,
    },
    {
      name: 'Archie',
      type: 'Bulldog',
      age: 10,
      _petId: 2,
      _owner: 2,
    },
    {
      name: 'Casper',
      type: 'Pug',
      age: 2,
      _petId: 3,
      _owner: 1,
    },
    {
      name: 'Elmo',
      type: 'Labrador',
      age: 3,
      _petId: 4,
      _owner: 2,
    },
  ],
  owners: [
    {
      name: 'Cristian',
      surname: 'Castillo',
      _ownerId: 1,
      _dogs: [1, 3],
    },
    {
      name: 'Alberto',
      surname: 'Rivera',
      _ownerId: 1,
      _dogs: [2, 4],
    },
  ],
}

module.exports = seed;