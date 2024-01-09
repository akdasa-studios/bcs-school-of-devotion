import { Aggregate, UuidIdentity } from '@framework/domain'
import { LessonSectionIdentity } from './LessonSection'

export enum StudentHomeworkState {
  Open,
  InReview,
  Returned,
  Accepted
}

export type StudentHomeworkIdentity = UuidIdentity<'StudentHomework'>

export class StudentHomework
  extends Aggregate<StudentHomeworkIdentity>
{
  constructor(
    identity: StudentHomeworkIdentity,
    public readonly userId: string,
    public readonly lessonSectionId: LessonSectionIdentity,
    public readonly state: StudentHomeworkState,
    public readonly text: string
  ) {
    super(identity)
  }
}
