import { Publisher, Subjects, OrderCancelledEvent } from '@duc.q/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}