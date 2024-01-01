import { AsyncTask, KnownError, KnownErrorCode, sleep } from '@protocol/core'
import { SubmitEnrolmentFormRequest, SubmitEnrolmentFormResponse } from '@protocol/courses'


export class SubmitEnrolmentFormTask
  extends AsyncTask<
    SubmitEnrolmentFormRequest,
    SubmitEnrolmentFormResponse
  > {
  protected async onWork(
    request: SubmitEnrolmentFormRequest
  ): Promise<SubmitEnrolmentFormResponse> {
    await sleep(1000)

    if (!request.timeBlocks) {
      throw new KnownError(KnownErrorCode.UnknownError)
    }

    console.log(request)

    return { }
  }
}
