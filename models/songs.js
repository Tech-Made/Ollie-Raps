const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  name: String,
  imageUrl: String,
  spotifyUrl: String,
  appleUrl: String,
  soundcloudUrl: String,
  youtubeUrl: String
}, {
  timestamps: true,
});

module.exports = mongoose.model("Song", SongSchema);