// Interface for notification services
interface NotificationService {
  notify(message: string): void;
}

// Class that allows notifications by email to be sent
class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

// Class that allows notifications by SMS to be sent
class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

// Class that makes use of different types of services to perform notifications
class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification("Hello World!");

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification("Hello World!");
