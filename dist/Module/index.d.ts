import { BitFieldResolvable, Client, ClientEvents, GatewayIntentBits, GatewayIntentsString } from "discord.js";
type Props = {
    prefix: string;
    registeClass?: Array<new (client: Client) => any>;
    TOKEN?: string;
    intents?: BitFieldResolvable<GatewayIntentsString, number> | GatewayIntentBits | undefined;
    events: keyof ClientEvents;
};
export declare function ModuleClass({ ...props }: Props): ClassDecorator;
export {};
