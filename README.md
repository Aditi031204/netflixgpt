# Netflixgpt
- Firstly we made a folder named netflixgpt
- Then by using vite framwork we installed tailwind css v4
- Login page
- Browser page
- Routing 
- Form Validation 
- UseRef Hook
- Firebase setup
- Authentication
- Redux Store for sign in & sign up user
- Made a complete login page which lead to browser
- Sign Out button
- Unsubscribes OnAuthStateChange API
- Hardcoded files in Constant.jsx
- Register at TMDB API
- Created a App
- Fetched the API
- Made a store for movies API
- Build a custom Hook "usenowPlayingMovies" for fetching movies
- Started building browser page
- Completed the videocontainer page
- Fetched the video Api
- Embedded the youtube video and make it autoplay and mute
- Build a custom hook "useMovieTrailer"
- Did some CSS for the background video 
- Build Movie Lists
- Fetched the APIs for perticular categories
- Made them Overlap to the Maincontainer
- Made cutome hooks for differents APIs 
- Did some CSS
- Made a toggle function for GPT 
- Made two components Search Bar and Movie Suggetion for GPT
- Made the GPTPage multilingual 
- Pushed the language data to redux
- Gemini's API fetch
- Fetched Gemini recommended movies from TMDB APIs
- Made up a GPT slice and pushed all the data
- Reused Movielist Component for CSS 
- Made up the Recommendation page
- Learn to make API Keys secure
- Learn Memoization
- Made the site Responsive
- Add another feature of brief introduction of the movie
- Added another component
- Did some CSS
- Also made it responsive

# Bug Fix
- Redirect user to home page if not signed up
- Vice versa for browser page

# Structure
-   Browser
        MainContainer
         - VideoContainer
         - VideoTitle
        SecondaryContainer
         - MoviesList *n
            - Cards * n
-   Movie List
        Movielist- Popular
           Movie Cards
        Movielist- New Movies
        Movielist- Trending
        Movielist- Horror
