# Backend Development!
- Servers : Software that serves.
- 2 major components :
- - A Programming Language(JS)
- - A Database(Mongo,(ORM,ODM))
- - - - A Database is always in another continent.

# API

# Javascript related Backend : express, mongoose.
data | file |third party api
A js runtime : Node.js/deno/bun

# File Structure:
Package.json    .env(Readme, git, lint etc)
src
- index(DB Connects):Entrypoint | App(Config, cookie, urlencode) | constants(enums,DB-name)
# Directory Structure
- - DB : actual code that connects DB 
- - Models : Scheme for keeping data
- - Controller : Methods/Functionalities
- - Routes : /defines the routes
- - Middlewares : 
- - Utils : utilities(ex: sending mails)
- - More(depends)

