import { Body, Delete, Example, Get, Patch, Post, Query, Route } from 'tsoa';
// import { GetSnapshotrequest } from '../models/snapshot';
import { ScreenshotService } from '../services/snapshotService';

@Route('Snapshot')
export class SnapshotController {
  /**
   * Create a snapshot
   * @param request This is a snapshot creation request description
   */
  @Get()
  public async createSnapshot(@Query() url?: string, @Query() timestamp?: string): Promise<any> {
    return new ScreenshotService().createScreenshot(
      url,
      timestamp,
    );
  }
}
