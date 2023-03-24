module.exports = {
  mutMongoosesToObject: (mongoose) => {
    return mongoose.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: (mongoose) => (mongoose ? mongoose.toObject() : mongoose),
};
