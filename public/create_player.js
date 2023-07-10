window.onSpotifyWebPlaybackSDKReady = () => {
    const token = localStorage.getItem("access_token");
    const player = new Spotify.Player({
      name: "Reactify",
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5,
    });
  
    player.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
      localStorage.setItem("DEVICE_ID", device_id);
    });
  
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
      localStorage.setItem("DEVICE_ID", device_id);
    });
  
    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });
  
    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });
  
    player.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("player_state_changed", (state) => {
      console.log("Current Player State", state);
      if (state && state.track_window.current_track) {
        const { images } = state.track_window.current_track.album;
        const artist = state.track_window.current_track.artists[0].name;
        const track_name = state.track_window.current_track.name;
        const id = state.track_window.current_track.id;
        const image = images[0].url;
        console.log(artist, track_name, image);
        //document.getElementById("track_cover").setAttribute("src", `${image}`);
        console.log("ID", id);
        localStorage.setItem("playerState", id);
        //   document.getElementById(
        //     "absolute_cover"
        //   ).style.backgroundImage = `url(${image})`;
  
        //document.getElementById("track_name").textContent =
        //   track_name.length > 9 ? track_name.slice(0, 9) + "..." : track_name;
        // document.getElementById("artist_name").textContent = artist;
      }
    });
  
    player.connect();
  };