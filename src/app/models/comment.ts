export class Comment {
    private id: any;
    private publishedAt: Date;
    private content: string;
    private idReferal: any;

	constructor($id: any, $publishedAt: Date, $content: string, $idReferal: any) {
		this.id = $id;
		this.publishedAt = $publishedAt;
		this.content = $content;
		this.idReferal = $idReferal;
	}

	public get $id(): any {
		return this.id;
	}

	public set $id(value: any) {
		this.id = value;
	}

	public get $publishedAt(): Date {
		return this.publishedAt;
	}

	public set $publishedAt(value: Date) {
		this.publishedAt = value;
	}

	public get $content(): string {
		return this.content;
	}

	public set $content(value: string) {
		this.content = value;
	}

	public get $idReferal(): any {
		return this.idReferal;
	}

	public set $idReferal(value: any) {
		this.idReferal = value;
	}

}
