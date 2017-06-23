export class Post {
    private id: any;
    private publishedAt: Date;
    private content: string;
    private idReferal: any;
    private comments: Array<any>;


    constructor($id: any, $publishedAt: Date, $content: string, $idReferal: any, $comments: Array<any>) {
        this.id = $id;
        this.publishedAt = $publishedAt;
        this.content = $content;
        this.idReferal = $idReferal;
        this.comments = $comments;
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

    public get $comments(): Array<any> {
        return this.comments;
    }

    public set $comments(value: Array<any>) {
        this.comments = value;
    }
}
