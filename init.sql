CREATE DATABASE lobsters_dev;

CREATE USER 'lobsters_dev'@'%' IDENTIFIED BY 'n0ty0ur@v3r@g3d3vp@ssw0rd';

GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES ON lobsters_dev.* TO 'lobsters_dev'@'%';

FLUSH PRIVILEGES;