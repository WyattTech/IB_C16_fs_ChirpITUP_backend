import { Query } from "./db_connections";

const all = async () => Query("SELECT * from c16_chirpr");

export default {
  all,
};
