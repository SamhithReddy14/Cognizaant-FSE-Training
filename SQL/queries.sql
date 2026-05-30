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

