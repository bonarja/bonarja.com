import DB from "../database";
export default ({ measurement, limit = 1000 }) => {
    return DB.select(measurement).limit(limit).run();
};
