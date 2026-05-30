-- 1.User Upcoming Events

select * from Events
where status = 'upcoming' 
order by start_date ;

-- 2.Top Rated Events

SELECT event_id, AVG(rating) AS average_rating 
FROM Feedback 
GROUP BY event_id 
HAVING COUNT(feedback_id)>=10 
ORDER BY average_rating DESC;

-- 3-- .Inactive Users

SELECT * FROM Users 
WHERE user_id NOT IN (
    SELECT user_id 
    FROM Registrations 
    WHERE registration_date>=DATE_SUB(CURDATE(), INTERVAL 90 DAY)
);

-- 4.Peak Session Hours

select event_id , count(session_id) as sessions from sessions 
where time(start_time) >= '10:00:00' and time(end_time) <= '12:00:00' 
group by event_id ;

-- 5.Most Active Cities

select city,count(DISTINCT u.user_id) as count from Users u
join registrations r on u.user_id = r.user_id
group by u.city
order by count desc 
limit 5 ;

-- 6.Event Resource Summary

select event_id , count(resource_id) as count 
from Resources 
group by event_id ;

-- 7.Low Feedback Alerts

SELECT u.full_name,
       f.comments,
       e.title AS event_name
FROM Feedback f
JOIN Users u
    ON f.user_id = u.user_id
JOIN Events e
    ON f.event_id = e.event_id
WHERE f.rating < 3;

-- 8.Session per upcoming Event

SELECT e.event_id,e.title,
       COUNT(s.session_id) AS session_count
FROM Events e
JOIN Sessions s
    ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id,e.title;

-- 9 Organizer Event Summary

SELECT organizer_id,
       status,
       COUNT(*) AS event_count
FROM Events
GROUP BY organizer_id, status;

-- 10 Feedback Gap

select e.event_id 
from Events e 
join registrations r on r.event_id = e.event_id
left join feedback f on f.event_id = e.event_id 
where f.feedback_id is NULL
group by event_id;	

-- 11 Daily New User Count

select count(u.user_id) as count , r.registration_date 
from Users u
join registrations r on r.user_id = u.user_id
where curdate()-r.registration_date <= 7 
group by r.registration_date
order by r.registration_date;

-- 12 Event with Maximum Sessions

SELECT e.event_id,
       e.title,
       COUNT(s.session_id) AS session_count
FROM Events e
JOIN Sessions s
    ON e.event_id = s.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(s.session_id) = (
    SELECT MAX(session_count)
    FROM (
        SELECT COUNT(session_id) AS session_count
        FROM Sessions
        GROUP BY event_id
    ) t
);
