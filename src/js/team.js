import Character from "./character.js";
import _ from "lodash";

export default class Team {
    constructor() {
        this.members = new Set();
    };

    add(person, error = true) {
        const teammate = new Character(person);
        let errorThrower = false;

        this.members.forEach(member => {  
            if (_.isEqual(member, teammate)) {
                errorThrower = true;
            };
        }); 

        if (errorThrower) {
            if (error) {
                throw new Error('Этот персонаж уже добавлен');
            } else {
                return;
            };
        };

        this.members.add(new Character(person))

    };

    addAll(persons) {
        for (const person of persons) {
            this.add(person, false);
        };
    };

    toArray() {

        const membersArray = Array.from(this.members);

        return membersArray;
    };

};

const person = {name : 'Bowman', type : 'Bowman'};


const persons =[
    {name : 'Daemon', type : 'Daemon'},
    {name : 'Swordsman', type : 'Swordsman'},
    {name : 'Magician', type : 'Magician'},
    {name : 'Bowman', type : 'Bowman'}
];
