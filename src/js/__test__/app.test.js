import Team from "../team";
import Character from "../character";

const person = {name : 'Bowman', type : 'Bowman'};

const persons =[
    {name : 'Daemon', type : 'Daemon'},
    {name : 'Swordsman', type : 'Swordsman'},
    {name : 'Magician', type : 'Magician'},
    {name : 'Bowman', type : 'Bowman'}
];

test('adding one member to the Team object', () => {
    const team = new Team;
    team.add(person);

    const expected = [ 
        new Character({ name: 'Bowman', type: 'Bowman' }) 
    ];
    
    const received = team.toArray();
  
    expect(received).toEqual(expected);
  
});

test('adding a duplicate member to the Team object (error)', () => {

    const team = new Team;
    team.add(person);
    
    expect(() => team.add(person)).toThrow(Error);
  
});

test('adding miltiple members to the Team object', () => {
    const team = new Team;
    team.addAll(persons);

    const expected = [ 
        new Character({ name: 'Daemon', type: 'Daemon' }),
        new Character({ name: 'Swordsman', type: 'Swordsman' }), 
        new Character({ name: 'Magician', type: 'Magician' }),
        new Character({ name: 'Bowman', type: 'Bowman' })
    ];
    
    const received = team.toArray();
  
    expect(received).toEqual(expected);
  
});

test('pass a duplicate error when adding multiple members to the Team object', () => {
    const team = new Team;
    team.add(person);
    team.addAll(persons);

    const expected = [ 
        new Character({ name: 'Bowman', type: 'Bowman' }),
        new Character({ name: 'Daemon', type: 'Daemon' }),
        new Character({ name: 'Swordsman', type: 'Swordsman' }), 
        new Character({ name: 'Magician', type: 'Magician' })
    ];
    
    const received = team.toArray();
  
    expect(received).toEqual(expected);
  
});

