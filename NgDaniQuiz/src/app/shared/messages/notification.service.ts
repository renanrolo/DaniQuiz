import { EventEmitter } from "@angular/core";

export class NotificationService {
    messages = new EventEmitter<string>();

    notify(message: string) {
        this.messages.emit(message);
    }
}