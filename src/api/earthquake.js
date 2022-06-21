import axios from 'axios';
import moment from 'moment';
import { BASEAPI, HOURLYAPI, DAILYAPI, WEEKLYAPI, MONTHLYAPI } from '../constants';

export const fetchData = async (timeset) => {
    let changeableUrl = BASEAPI + timeset + ".geojson";
    try {
      const { data: {features} } = await axios.get(`${changeableUrl}`);
      const modifiedData = features.map((data) => ({
        id: data.id,
        coordinates: data.geometry.coordinates,
        title: data.properties.title,
        time: moment(data.properties.time).format("MMMM Do YYYY, h:mm:ss a"),
        mag: data.properties.mag,
        place: data.properties.place,
        }));
        return modifiedData;
    } catch(error) {}
}

export const fetchDailyData = async () => {
    try {
      const { data: {features} } = await axios.get(`${DAILYAPI}`);
      const modifiedData = features.map((data) => ({
        id: data.id,
        coordinates: data.geometry.coordinates,
        title: data.properties.title,
        time: moment(data.properties.time).format("MMMM Do YYYY, h:mm:ss a"),
        mag: data.properties.mag,
        place: data.properties.place,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}
export const fetchWeeklyData = async () => {
    try {
      const { data: {features} } = await axios.get(`${WEEKLYAPI}`);
      const modifiedData = features.map((data) => ({
        id: data.id,
        coordinates: data.geometry.coordinates,
        title: data.properties.title,
        time: moment(data.properties.time).format("MMMM Do YYYY, h:mm:ss a"),
        mag: data.properties.mag,
        place: data.properties.place,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchHourlyData = async () => {
    try {
      const { data: {features} } = await axios.get(`${HOURLYAPI}`);
      const modifiedData = features.map((data) => ({
        id: data.id,
        coordinates: data.geometry.coordinates,
        title: data.properties.title,
        time: moment(data.properties.time).format("MMMM Do YYYY, h:mm:ss a"),
        mag: data.properties.mag,
        place: data.properties.place,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchMonthlyData = async () => {
    try {
      const { data: {features} } = await axios.get(`${MONTHLYAPI}`);
      const modifiedData = features.map((data) => ({
        id: data.id,
        coordinates: data.geometry.coordinates,
        title: data.properties.title,
        time: moment(data.properties.time).format("MMMM Do YYYY, h:mm:ss a"),
        mag: data.properties.mag,
        place: data.properties.place,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}