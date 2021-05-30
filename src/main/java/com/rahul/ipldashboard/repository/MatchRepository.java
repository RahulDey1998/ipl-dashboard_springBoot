package com.rahul.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import com.rahul.ipldashboard.model.Match;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface MatchRepository extends CrudRepository<Match, Long>  {

    List<Match>  getByTeam1OrTeam2OrderByDateDesc(String teamName1,
                                String teamName2, Pageable pageable);

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :startDate and :endDate order by date desc")
    List<Match> findByTeamBetweenDates(
        @Param("teamName") String teamName1,
        @Param("startDate") LocalDate date1, 
        @Param("endDate") LocalDate date2);

     default List<Match>  findLatestMatchesByTeam(String teamName, int count) {
         return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, 4));
     }



}
