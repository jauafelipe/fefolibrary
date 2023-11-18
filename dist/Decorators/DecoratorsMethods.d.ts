import { Message } from "discord.js";
export declare const commandRegistry: {
    [key: string]: (msg: Message) => void;
};
export declare function CommandName(type: string): Function;
