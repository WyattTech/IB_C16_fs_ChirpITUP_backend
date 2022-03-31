import * as mysql from "mysql";
import Content from "./content";

export const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "chirpapp",
  password: "$iAm@WebDev22!",
  database: "c16_chirpr",
});

/* Helper Function--All the files with data will use this function. Wrapping callback in a promise  */

export const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

export default {
  Content,
};
