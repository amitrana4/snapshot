import * as ffmpegPath from "@ffmpeg-installer/ffmpeg";
import * as ffmpeg from "fluent-ffmpeg";
ffmpeg.setFfmpegPath(ffmpegPath.path);

export class ScreenshotService {
    public async createScreenshot(url: any, timestamp: any): Promise<any> {
        const d = Number(timestamp);
        const h = Math.floor(d / 3600);
        const m = Math.floor(d % 3600 / 60);
        const s = Math.floor(d % 3600 % 60);

        const hDisplay = h > 0 ? h : '00';
        const mDisplay = m > 0 ? m : '00';
        const sDisplay = s > 0 ? s : '00';
        ffmpeg(url)
        .takeScreenshots({
            count: 1,
            timemarks: [ `${hDisplay}:${mDisplay}:${sDisplay}.000`, '6' ] // number of seconds
        }, './output/');
        return 'Done';
    }
};
