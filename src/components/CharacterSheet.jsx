import React from 'react';

class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            abilityScores: this.getAbilityScores(),
            skills: this.getSkills(),
            modifiers: this.getModifiers(),
        }

        this.getAbilityScores = this.getAbilityScores.bind(this);
        this.getSkills = this.getSkills.bind(this);
        this.getModifiers = this.getModifiers.bind(this);

        this.displayAbilityScores = this.displayAbilityScores.bind(this);
        this.displaySkills = this.displaySkills.bind(this);
        this.displayModifiers = this.displayModifiers.bind(this);
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
                <div className='abilityScores'>{this.displayAbilityScores()}</div>
                <div className='skills'>{this.displaySkills()}</div>
                <div className='modifiers'>{this.displayModifiers()}</div>
            </div>
        )
    }
    displayAbilityScores() {

    }
    displaySkills() {

    }
    displayModifiers() {

    }
}

export default CharacterSheet;