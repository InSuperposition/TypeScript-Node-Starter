export interface EventData {
	readonly type: string;
	readonly userId: string;
}

export interface Event extends EventData {
	readonly id: string;
	readonly created: number;
}
