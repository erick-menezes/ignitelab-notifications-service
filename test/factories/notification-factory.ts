import { Content } from "@app/entities/content";
import { Notification, NotificationProps } from "@app/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade 3!'),
        recipientId: 'recipient-2',
        ...override,
    });
}