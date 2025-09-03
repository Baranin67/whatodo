export function replace(text: string, replacements: string[]): string {
	replacements.forEach(repl => (text = text?.replace('%s', repl)));
	return text;
}

export const getKeyByValue = (obj: object, val: any): string | null =>
	Object.keys(obj).find(key => obj[key] === val) || null;
