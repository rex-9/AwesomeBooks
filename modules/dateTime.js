/* eslint-disable no-undef */

const date = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_MED);
const { hour } = luxon.DateTime.local().c;
const min = luxon.DateTime.local().c.minute;
const sec = luxon.DateTime.local().c.second;

export {
  date, hour, min, sec,
};