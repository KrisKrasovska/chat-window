WITH RECURSIVE month_cte AS (
    SELECT 1 AS month_num
    UNION ALL
    SELECT month_num + 1
    FROM month_cte
    WHERE month_num < 12
)
SELECT 
    DATE_FORMAT(STR_TO_DATE(month_num, '%m'), '%M') AS Month,
    DAY(LAST_DAY(CONCAT(YEAR(CURDATE()), '-', LPAD(month_num, 2, '0'), '-01'))) AS Days
FROM month_cte;
