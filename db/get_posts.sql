select u.username, u.profile_pic, p.title
from posts p
join users u on u.id = p.author_id