# graphql-server
queda disponible el código visto en el workshop de hoy sobre GraphQL

#goto
```javascript
{
  hn {
    topStories(limit: 2) {
      title
      url
    }
  }
}
```
# GraphQL Benefits
# GraphQL vs. REST
# GraphQL vs. SQL
# Exploring GraphiQL
  - query structure
    - syntax
    - brackets
    - args
  - display errors
  - data
  - docs
  - search
  - explore types
  - query hackernews
  - types : scalars, complex

# Exploring a Graph
# code
```
$ mkdir graphql-server
$ cd ./graphql-server
$ npm init
# hit enter a bunch, accept the defaults
# install  server
$ npm install express nodemon
#install graphql
$ npm install graphql express-graphql
#install DB
$ npm install lodash 
$ npm install mongoose
```
#create react app
```
npx create-react-app my-app
cd my-app
npm start
```
# install apollo gang
```
$ npm install apollo-boost react-apollo graphql
λ npm install cors
 ```
