
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { User } from "../models/user.model.js";

export const getStats = async (req, res, next) => {
  try {
    const [totalSongs, totalAlbums, totalUsers, artistResult] =
      await Promise.all([
        Song.countDocuments(),
        Album.countDocuments(),
        User.countDocuments(),
        Song.aggregate([
          {
            $group: {
              _id: "$artist",
            },
          },
          {
            $count: "count",
          },
        ]),
      ]);

    const totalArtists = artistResult[0]?.count || 0;

    res.status(200).json({
      totalSongs,
      totalAlbums,
      totalUsers,
      totalArtists,
    });
  } catch (error) {
    next(error);
  }
};