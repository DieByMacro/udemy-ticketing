import { Publisher, Subjects, ExpirationCompleteEvent } from '@duc.q/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}