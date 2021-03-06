import axios from 'axios';
import { COVIDAPI, DAILYUSAPI } from '../constants';

export const fetchData = async (country) => {
  let changeableUrl = COVIDAPI;

  if(country) {
    changeableUrl = `${COVIDAPI}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
    return { confirmed,recovered,deaths,lastUpdate };
  } catch (error) {
      
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(DAILYUSAPI);

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${COVIDAPI}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
      
  }
}