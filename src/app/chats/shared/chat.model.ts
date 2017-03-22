export class Chat{
    id: number;
    name: string;
    status: string;
    attendees: Array<number>;
    creator: number;
    createdAt: Date;
}