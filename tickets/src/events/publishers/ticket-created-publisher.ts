import { Publisher, Subjects, TicketCreatedEvent } from '@duc.q/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}