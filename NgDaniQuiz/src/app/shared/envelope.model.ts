export class Envelope<T> {
    status: boolean;
    message: string;
    body: T
}