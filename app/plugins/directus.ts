import { createDirectus, rest, readItem, readItems, readSingleton } from '@directus/sdk';
import type { CustomDirectusTypes } from "./types";

const directus = createDirectus<CustomDirectusTypes>('http://192.168.0.5:8055').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems, readSingleton },
	};
});