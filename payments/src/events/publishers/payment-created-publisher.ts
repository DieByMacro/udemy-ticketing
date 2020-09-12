import { Publisher, Subjects, PaymentCreatedEvent } from '@duc.q/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}