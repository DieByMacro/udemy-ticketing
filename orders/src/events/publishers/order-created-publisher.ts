import { Publisher, Subjects, OrderCreatedEvent } from '@duc.q/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}