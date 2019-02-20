# WordSupport
Currently a front end based application that will help oneself in improving reading comprehension.

## Objectives
- Fetch from API when no data is found in DB
- Update DB when last call made to API was before a predefined time
- Graph to show the connections between the words
- Implement word of the day feature which shows up a word daily in home page
- Personalization
  - Each user can group words in different sets and prefer learning seperately
  - Allow each user to add additional notes (different meanings like GRE meanings) which is private.

## Todo
- Add support for synonyms and antonyms
- Add backend support
  - Host the front end using an nginx proxy and serve requests using nodejs
  - Store data in SQL or Mongo
- Add support for listening to words
