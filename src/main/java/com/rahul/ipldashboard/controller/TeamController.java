package com.rahul.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import com.rahul.ipldashboard.model.Match;
import com.rahul.ipldashboard.model.Team;
import com.rahul.ipldashboard.repository.MatchRepository;
import com.rahul.ipldashboard.repository.TeamRepository;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/team")
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }



    @GetMapping("/{teamName}")
    public Team getTeam(@PathVariable String teamName) {

       Team team = this.teamRepository.findByTeamName(teamName);
       Pageable pageable = PageRequest.of(0, 4);
       List<Match> matches = matchRepository.findLatestMatchesByTeam(team.getTeamName(), 4);
       team.setMatches(matches);
       return team;

    }

    @GetMapping("/{teamName}/matches") 
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        return this.matchRepository.
               findByTeamBetweenDates(teamName, startDate, endDate);

    } 
    
}
