import { Mood, Team } from '.';

export interface Fixture {
    id: number;
    home: FixtureTeam;
    away: FixtureTeam;
    date: Date;
}

export interface FixtureTeam {
    team: Team;
    goals: number;
    mood: Mood;
}
