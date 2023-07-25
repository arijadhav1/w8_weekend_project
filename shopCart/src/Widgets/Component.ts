//external imports
import {v4 as uuidv4} from "uuid";

//internal imports
import {Canvas, Container} from './index'; 
import { GridUnit } from './types'; 


export default class Component {

    constructor(
        private _canvas?: Canvas,
        private _id: string = uuidv4(),
        private _shape: Container = new Container(),
        private _width: GridUnit = 1,
        private _height: GridUnit = 1,
        private _locationTop: GridUnit = 1,
        private _locationLeft: GridUnit = 1,
        private _content: HTMLElement = document.createElement('div')
    ){}


    public get content(): HTMLElement {
        return this._content;
    }
    public set content(value: HTMLElement) {
        this._content = value;
    }
    public get locationLeft(): GridUnit {
        return this._locationLeft;
    }
    public set locationLeft(value: GridUnit) {
        this._locationLeft = value;
    }
    public get locationTop(): GridUnit {
        return this._locationTop;
    }
    public set locationTop(value: GridUnit) {
        this._locationTop = value;
    }
    public get height(): GridUnit {
        return this._height;
    }
    public set height(value: GridUnit) {
        this._height = value;
    }
    public get width(): GridUnit {
        return this._width;
    }
    public set width(value: GridUnit) {
        this._width = value;
    }
    public get shape(): Container {
        return this._shape;
    }
    public set shape(value: Container) {
        this._shape = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get canvas(): Canvas | undefined {
        return this._canvas;
    }
    public set canvas(value: Canvas) {
        this._canvas = value;
    }

}