// course,assignment_name,date,reminder

function Reminder(display, offset) {
    const self = this;
    self.display = display;
    self.offset = offset;
    self.toString = () => self.display;
}

const REMINDERS = [
    new Reminder("now", 0),
    new Reminder("in 10 minutes", 600000),
    new Reminder("in 30 minutes", 1800000),
    new Reminder("in 1 hour", 3600000),
    new Reminder("in 2 hours", 7200000),
    new Reminder("in 6 hours", 21600000),
    new Reminder("in 12 hours", 43200000),
    new Reminder("in 1 day", 86400000),
    new Reminder("in 2 days", 172800000),
    new Reminder("in 1 week", 604800000)
]

const parseReminders = (reminder) => {
    return REMINDERS.filter((_, i) => (reminder >> i & 1));
}

function Assignment(course, name, date, reminder) {
    const self = this;
    self.course = course;
    self.name = name;
    self.date = new Date(date);
    self.reminders = parseReminders(reminder);
}