#!/bin/sh
key=$RAPID_API_KEY
date=$(date '+%Y-%m-%d')
echo $date

curl --request GET \
	--url 'https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2021' \
	--header 'x-rapidapi-host: api-football-v1.p.rapidapi.com' \
	--header 'x-rapidapi-key: '$key > src/app/data/epl-teams.json

curl --request GET \
	--url 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2021&from=2021-08-13&to='$date \
	--header 'x-rapidapi-host: api-football-v1.p.rapidapi.com' \
    --header 'x-rapidapi-key: '$key > src/app/data/epl-fixtures.json
