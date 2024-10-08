//require("dotenv").config();

//Base URL
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}`;
const base_url_no_key = "https://api.rawg.io/api/";

//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//console.log(popularGamesURL());
//console.log(upcomingGamesURL());
//console.log(newGamesURL());
//DETAILS
//url is good
export const gameDetailsURL = (game_id) =>
  `${base_url_no_key}games/${game_id}?key=${process.env.REACT_APP_RAWG_API}`; //need "/" after "api/games" => "api/games/"

//Game Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url_no_key}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`; //need "/" after "api/games" => "api/games/"

//Searched game
export const searchGameUrl = (game_name) =>
  `${base_url_no_key}games?key=${process.env.REACT_APP_RAWG_API}&search=${game_name}&page_size=9`;

//quake id 968497
//console.log(gameScreenshotURL());
