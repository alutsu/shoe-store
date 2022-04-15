# Shoe Store

## My Approach on this challenge

With a focus on being simple but useful, this dashboard provide all necessaru information for a user who wants to monitor his shoes invetories. The user can easily identify the stock status by his colors. I also tried to use the same colors as PotLoc, just guessing and inspect on Chrome web dev tools 😅

## Stack used
- [Ruby on Rails](https://rubyonrails.org/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [React Router V6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Context-API](https://reactjs.org/docs/context.html)
- [TailwindCSS](https://tailwindcss.com/)
- [ChartJS](https://www.chartjs.org/) 

### Future Improvements
- Better test coverage and archtecture. This was my next step.
- Test on more devices
- **Tests**
- Add more visual feedbacks, so the user could easily identify what is going on with his store
- Add realtime searching, by updating the metrics everytime the database is changed
- Making a research to improve the metrics
- Add ElasticSearch to improve the query performance

## Installing
- Make sure you have [Docker](https://www.docker.com/) installed on your machine
- Steps:
  - clone this repo
  - run `docker-compose build`
  - run `docker-compose run --rm api rails db:drop db:create db:migrate db:seed`
  - run `docker-compose up`
- To open the frontend: `http://localhost:5000`
- The backend runs at: `http://localhost:3000`

## Screenshots

Home Screen
![image](https://user-images.githubusercontent.com/4943470/163519612-4163a8c0-6811-44a7-9d02-dd2e0875368f.png)

Stores
![image](https://user-images.githubusercontent.com/4943470/163519675-c6cd60db-831c-40a4-a67c-17fcd426a066.png)

Events
![image](https://user-images.githubusercontent.com/4943470/163519713-7cb69571-dba6-4486-8e72-3798622bb863.png)

