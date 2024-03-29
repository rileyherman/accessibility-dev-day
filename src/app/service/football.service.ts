import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Fixture, FixtureTeam, Mood, Team } from '../model';
// @ts-ignore
import FIXTURES from '../data/epl-fixtures.json';
// @ts-ignore
import TEAMS from '../data/epl-teams.json';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor() { }

  getFixturesByTeam(teamId: number): Observable<Fixture[]> {
    return of(FIXTURES)
      .pipe(
        map(response => response.response
          .filter((fixture: any) => fixture.teams.home.id === teamId || fixture.teams.away.id === teamId)
          .map((fixture: any) => ({
            id: fixture.fixture.id,
            home: {
              team: fixture.teams.home,
              goals: fixture.goals.home,
              mood: getMoodForTeam(fixture.goals.home, fixture.teams.home.id, fixture.goals.away, fixture.teams.away.id, teamId),
            } as FixtureTeam,
            away: {
              team: fixture.teams.away,
              goals: fixture.goals.away,
              mood: getMoodForTeam(fixture.goals.home, fixture.teams.home.id, fixture.goals.away, fixture.teams.away.id, teamId),
            } as FixtureTeam,
            date: new Date(fixture.fixture.date),
          } as Fixture)))
      );
  }

  getTeams(): Observable<Team[]> {
    return of(TEAMS)
      .pipe(
        map(response => response.response.map((team: any) => ({
          id: team.team.id,
          name: team.team.name,
          logo: team.team.logo
        } as Team)))
      );
  }

  getTeam(teamId: number): Observable<Team> {
    return of(TEAMS)
      .pipe(
        map(response => response.response
          .filter((team: any) => team.team.id === teamId)
          .map((team: any) => ({
            id: team.team.id,
            name: team.team.name,
            logo: team.team.logo
          } as Team))),
          filter((teams: Team[]) => teams.length > 0),
          map((teams: Team[]) => teams[0])
        );
  }

  findTeams(query: string): Observable<Team[]> {
    return of(TEAMS)
      .pipe(
        map(teams => teams.response
          .filter((team: any) => !query || query.length < 3 || (team.team.name as string).toLowerCase().includes(query.toLowerCase()))
          .map((team: any) => ({
            id: team.team.id,
            name: team.team.name,
            logo: team.team.logo
          } as Team)))
      );
  }
}

function getMoodForTeam(homeGoals: number, homeTeamId: number, awayGoals: number, awayTeamId: number, teamId: number): Mood {
  if (teamId === homeTeamId) {
    return getMood(homeGoals, awayGoals);
  }
  if (teamId === awayTeamId) {
    return getMood(awayGoals, homeGoals);
  }
  throw new Error("illegal argument: no matching team for id " + teamId);
}

function getMood(cheeringForGoals: number, cheeringAgainstGoals: number): Mood {
  if (cheeringForGoals - cheeringAgainstGoals > -2) {
    return Mood.HAPPY;
  }
  return Mood.SAD;
}
