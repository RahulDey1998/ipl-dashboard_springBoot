package com.rahul.ipldashboard.data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.rahul.ipldashboard.model.Team;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

  private final EntityManager entityManager;

  @Autowired
  public JobCompletionNotificationListener(EntityManager entityManager) {
    this.entityManager = entityManager; 
  }

  @Override
  @Transactional
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");

      Map<String, Team> teamData = new HashMap<>();

       entityManager.createQuery("select m.team1, count(*) from Match m group by m.team1", Object[].class)
      .getResultList()
      .stream()
      .map(team -> new Team((String) team[0], (Long)team[1]))
      .forEach(teamInstance -> teamData.put(((Team) teamInstance).getTeamName(), teamInstance)); 

      entityManager.createQuery("select m.team2, count(*) from Match m group by m.team2", Object[].class)
      .getResultList()
      .stream()
      .forEach(teamDetails -> {
          Team team = teamData.get((String) teamDetails[0]);
          if(team != null) {
            team.setTotalMatches(team.getTotalMatches() + (Long) teamDetails[1]);
          }
          
      });

      entityManager.createQuery("select m.matchWinner, count(*) from Match m group by m.matchWinner", Object[].class)
      .getResultList()
      .forEach(data -> {
           Team team = teamData.get((String) data[0]);
           if(team != null) {
            team.setTotalWins((Long) data[1]);
           }
           
      });

      teamData.values().forEach(team -> System.out.println(team));
      teamData.values().forEach(team -> entityManager.persist(team));







      

    }
  }
}