import { writable } from "svelte/store";

export const formId = writable("");
export const formTitle = writable("");
export const formDesc = writable("");
export const update = writable(false);