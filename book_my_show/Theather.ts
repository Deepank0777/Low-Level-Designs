import { Address } from "./Address";
import { Screeen } from "./Screen";
import { Show } from "./Show";

export class Theather {
    id: string;
    name: string;
    address: Address;
    screenList: Screeen[];
    showList: Show[];
}