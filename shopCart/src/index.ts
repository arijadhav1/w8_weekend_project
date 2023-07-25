import { Canvas, Component } from './Widgets/index';
import  {Item, Shop, User}  from './classes'; 

const canvas = new Canvas(document.body);
const shop = new Shop(); 
const user = new User('Aryan', 22);
const item1 = new Item('Bananas', 1.50, 'Delicious Ripe Yellow Bananas',5);
const item2 = new Item('Apple', 2, 'Juicy Sweet Red Apples',10);
const item3 = new Item('Grapes', 4.50, 'Purple Grapes (Bundled)',7);


const widget1 = new Component(canvas)
widget1.content.innerText = user.name + ' Shopping cart'
widget1.width = 2
widget1.height = 1
widget1.locationLeft = 3
widget1.locationTop = 2

widget1.shape.backgroundColor = 'white'
canvas.addWidget(widget1)

const widget2 = new Component(canvas)
widget2.content.innerText = String(user.age)
widget2.width = 2
widget2.height = 1
widget2.locationLeft = 3
widget2.locationTop = 3
canvas.addWidget(widget2)

const widget3 = new Component(canvas)
widget3.content.innerText = item1.getName()
widget3.width = 2
widget3.height = 1
widget3.locationLeft = 8
widget3.locationTop = 6
canvas.addWidget(widget3)

const widget4 = new Component(canvas)
widget4.content.innerText = item2.getName()
widget4.width = 2
widget4.height = 1
widget4.locationLeft = 6
widget4.locationTop = 6
canvas.addWidget(widget4)

const widget5 = new Component(canvas)
widget5.content.innerText = item3.getName()
widget5.width = 2
widget5.height = 1
widget5.locationLeft = 4
widget5.locationTop = 6
canvas.addWidget(widget5)