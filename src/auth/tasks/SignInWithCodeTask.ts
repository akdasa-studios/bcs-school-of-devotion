import { SignInWithCodeRequest, SignInWithCodeResponse } from '@protocol/auth'
import { AsyncTask, KnownError, KnownErrorCode, sleep } from '@protocol/core'


export class SignInWithCodeTask
  extends AsyncTask<
    SignInWithCodeRequest,
    SignInWithCodeResponse
  > {
  protected async onWork(
    request: SignInWithCodeRequest
  ): Promise<SignInWithCodeResponse> {
    await sleep(1000)

    if (request.code == '2345') {
      return { registrationRequired: true }
    }

    if (request.code != '1234') {
      throw new KnownError(KnownErrorCode.InvalidSignInCode)
    }

    return {
      registrationRequired: false
    }
  }
}