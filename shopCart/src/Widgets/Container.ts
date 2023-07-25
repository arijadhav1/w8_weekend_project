

export default class Container {

    constructor(
        private _backgroundColor: string = 'white',
        private _borderColor: string = 'black',
        private _borderRadius: string = '0px',
        private _borderStyle: string = 'solid',
        private _zIndex: string = '0',
        private _borderWidth: string = '1px'
    ){}

    public get borderWidth(): string {
        return this._borderWidth;
    }
    public set borderWidth(value: string) {
        this._borderWidth = value;
    }
    public get zIndex(): string {
        return this._zIndex;
    }
    public set zIndex(value: string) {
        this._zIndex = value;
    }
    public get borderStyle(): string {
        return this._borderStyle;
    }
    public set borderStyle(value: string) {
        this._borderStyle = value;
    }
    public get borderRadius(): string {
        return this._borderRadius;
    }
    public set borderRadius(value: string) {
        this._borderRadius = value;
    }
    public get borderColor(): string {
        return this._borderColor;
    }
    public set borderColor(value: string) {
        this._borderColor = value;
    }
    public get backgroundColor(): string {
        return this._backgroundColor;
    }
    public set backgroundColor(value: string) {
        this._backgroundColor = value;
    }

    public get attributes():Partial<CSSStyleDeclaration>{
        return{
            borderColor: this.borderColor,
            borderRadius: this.borderRadius,
            borderStyle: this.borderStyle,
            borderWidth: this.borderWidth,
            backgroundColor: this.backgroundColor,
            zIndex: this.zIndex
        }
    }

}