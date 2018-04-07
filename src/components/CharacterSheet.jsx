import React from 'react';

class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterMeta: this.getCharacterMeta(),
            abilityScores: this.getAbilityScores(),
            skills: this.getSkills(),
            modifiers: this.getModifiers(),
        }

        this.getCharacterMeta = this.getCharacterMeta.bind(this);
        this.getAbilityScores = this.getAbilityScores.bind(this);
        this.getSkills = this.getSkills.bind(this);
        this.getModifiers = this.getModifiers.bind(this);

        this.displayCharacterMeta.bind(this);
        this.displayAbilityScores = this.displayAbilityScores.bind(this);
        this.displaySkills = this.displaySkills.bind(this);
        this.displayModifiers = this.displayModifiers.bind(this);
    }
    getCharacterMeta() {
        // Use RegExp to extract data
        // Matches "<property>:"
        const str = this.props.fileText;
        const cm = {};
        
        cm.playerName = /(?<=PLAYERNAME:).*/.exec(str)[0];
        cm.name = /(?<=CHARACTERNAME:).*/.exec(str)[0];
        cm.height = /(?<=HEIGHT:).*/.exec(str)[0];
        cm.weight = /(?<=WEIGHT:).*/.exec(str)[0];
        cm.age = /(?<=AGE:).*/.exec(str)[0];
        cm.gender = /(?<=GENDER:).*/.exec(str)[0];
        cm.hair = /(?<=HAIRCOLOR:).*/.exec(str)[0];
        cm.eyes = /(?<=EYECOLOR:).*/.exec(str)[0];
        cm.alignment = /(?<=ALIGN:).*/.exec(str)[0];
        cm.alignment = /(?<=RACE:).*/.exec(str)[0];
        //cm.deity = /(?<=Deity:).*/.exec(str)[0];// Needs changing as this field is not required
        //cm.homeland = /(?<=CHARACTERNAME:).*/.exec(str)[0];// Not sure if tracked by pcgen
        //cm.size = /(?<=CHARACTERNAME:).*/.exec(str)[0]; // nonstandard storage in file
        cm.language = /((?<=LANGUAGE:)[^|\W]*)/.exec(str);// Multiple languages are delineated by "|"

        return cm;
    }
    getAbilityScores() {

    }
    getSkills() {

    }
    getModifiers() {

    }
    render() {
        return (
            <div className='character'>
                <div className='characterMeta'>
                    {this.displayCharacterMeta()}
                </div>
                <div className='abilityScores'>
                    {this.displayAbilityScores()}</div>
                <div className='skills'>
                    {this.displaySkills()}
                </div>
                <div className='modifiers'>
                   {this.displayModifiers()}
                </div>
            </div>
        )
    }
    displayCharacterMeta() {

    }
    displayAbilityScores() {

    }
    displaySkills() {

    }
    displayModifiers() {

    }
}

export default CharacterSheet;