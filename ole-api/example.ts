import Olevod from "./index";

(async () => {
    // console.log(new Olevod());
    // console.log(Person.INSTANCE);
    // console.log(api.CONSTANTS());
    // console.log(Object.keys(api));
    // let res = await Olevod.alive();

    // @ts-ignore
    const videos = await Olevod.getVideos({
        page: 1,
        // search: "狂飙"
    });
    console.log(videos);

    // const detailId = 42115;
    // const video = await Olevod.getVideo(detailId);
    // console.log(video);

    // const playInfo = await Olevod.getPlayInfo('42115-1-1', );
    // console.log(playInfo.videoUrl);

    // const alive = await api.alive();
})();