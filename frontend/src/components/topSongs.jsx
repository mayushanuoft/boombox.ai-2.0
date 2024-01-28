import "./topSongs.css";
export const TopSongs = ({ data }) => {
  return (
    <div id="frostedGlass">
      <div id="topSongTitle">
        <h1>Top 10 Next Songs</h1>
      </div>
      <div>
        <div>
          <div className="Flex">
            <div>
              <h1 className="topSongTime">{data[0].time}</h1>
            </div>
            <div className="songInfoLeft">
              <h1>{data[0].name}</h1>
              <h2>{data[0].artist}</h2>
            </div>
          </div>

          <div className="Flex">
            <div>
              <h1 className="topSongTime">{data[1].time}</h1>
            </div>
            <div className="songInfoLeft">
              <h1>{data[1].name}</h1>
              <h2>{data[1].artist}</h2>
            </div>
          </div>

          <div className="Flex">
            <div>
              <h1 className="topSongTime">{data[2].time}</h1>
            </div>
            <div className="songInfoLeft">
              <h1>{data[2].name}</h1>
              <h2>{data[2].artist}</h2>
            </div>
          </div>

          <div className="Flex">
            <div>
              <h1 className="topSongTime">{data[3].time}</h1>
            </div>
            <div className="songInfoLeft">
              <h1>{data[3].name}</h1>
              <h2>{data[3].artist}</h2>
            </div>
          </div>

          <div className="Flex">
            <div>
              <h1 className="topSongTime">{data[4].time}</h1>
            </div>
            <div className="songInfoLeft">
              <h1>{data[4].name}</h1>
              <h2>{data[4].artist}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
