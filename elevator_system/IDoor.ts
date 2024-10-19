import { EDoorStatus } from "./Enum";

export interface IDoor {
    status: EDoorStatus
    open(): void
    close(): void
}