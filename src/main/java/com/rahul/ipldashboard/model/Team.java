package com.rahul.ipldashboard.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String teamName;
    private Long totalMatches;
    private long totalWins;

    @Transient
    private List<Match> matches;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTeamName() {
        return teamName;
    }
    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
    
    public List<Match> getMatches() {
        return matches;
    }
    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }
    public Long getTotalMatches() {
        return totalMatches;
    }
    public void setTotalMatches(Long totalMatches) {
        this.totalMatches = totalMatches;
    }
    public long getTotalWins() {
        return totalWins;
    }
    public void setTotalWins(long totalWins) {
        this.totalWins = totalWins;
    }
  

    public Team(String teamName, Long totalMatches) {
        this.teamName = teamName;
        this.totalMatches = totalMatches;
    }

    public Team() {}

    @Override
    public String toString() {
        return "Team [id=" + id + ", teamName=" + teamName + ", totalMatches=" + totalMatches + ", totalWins="
                + totalWins + "]";
    }




    
}
