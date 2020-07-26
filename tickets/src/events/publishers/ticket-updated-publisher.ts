import { Publisher, Subjects, TicketUpdatedEvent } from '@duc.q/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}