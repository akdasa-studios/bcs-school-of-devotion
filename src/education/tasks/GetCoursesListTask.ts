import { CoursesCache } from './../caches/CoursesCache'
import { Task, sleep } from '@protocol/core'
import { GetCoursesListRequest, GetCoursesListResponse } from '@protocol/courses'
import { courses } from '@protocol/fixtures'


export class GetCoursesListTask
  extends Task<
    GetCoursesListRequest,
    GetCoursesListResponse
  > {

  protected async onWork(
    request: GetCoursesListRequest
  ): Promise<GetCoursesListResponse> {
    await sleep(1000)

    const items = courses
      .sort((a, b) =>
          a.id.localeCompare(b.id))
      .filter(x =>
          x.title.includes(request.title || ''))
      .filter((_, idx) =>
          idx >= request.offset &&
          idx <  request.offset + request.count)

    return {
      total: items.length,
      items: items
    }
  }
}


export class GetCoursesListFromCacheTask
  extends Task<
    GetCoursesListRequest,
    GetCoursesListResponse
  > {
  constructor(
    private readonly cache: CoursesCache
  ) {
    super()
  }

  protected async onWork(
    request: GetCoursesListRequest
  ): Promise<GetCoursesListResponse> {

    const items = await this.cache.get({
      count: request.count,
      offset: request.offset,
      title: request.title
    })

    return {
      total: items.length,
      items: items
    }
  }
}
