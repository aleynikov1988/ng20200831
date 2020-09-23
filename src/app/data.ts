import { EMPTY, Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

export interface IProduct {
    id: string;
    title: string;
    image: string;
    price: Number;
    author: string;
    isFavorite: Boolean;
};

export const products = [
    {
        "id": "1",
        "title": "Правила життя. Як жити краще, щасливіше й успішніше",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img_17975.jpg",
        "price": 131,
        "author": "Річард Темплар",
        "isFavorite": false
    },
    {
        "id": "2",
        "title": "Психологія 101. Факти, теорія, статистика, тести й таке інше",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/3/9/39200_59414.jpg",
        "price": 130,
        "author": "Пол Клейнман",
        "isFavorite": false
    },
    {
        "id": "3",
        "title": "Ви це зможете! 7 складових здорового способу життя",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/_/_/__cover123.jpg",
        "price": 105,
        "author": "Дарка Озерна",
        "isFavorite": false
    },
    {
        "id": "4",
        "title": "Дмитрий Дубилет. Бизнес на здравом смысле. 50 идей как добиться своего",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/c/5/c51192d6499e90a9ce6f6e400e33d3fc_1.jpg",
        "price": 200,
        "author": "Тімур Ворона",
        "isFavorite": false
    },
    {
        "id": "5",
        "title": "Sexycologic",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/9/1/91u_xg0orbl.jpg",
        "price": 1700,
        "author": "Жорді Гомес",
        "isFavorite": false
    },
    {
        "id": "6",
        "title": "Империя должна умереть. История русских революций в лицах. 1900-1917 гг.",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/_/_/_._._1900-1917_1.jpg",
        "price": 420,
        "author": "Михаил Зыгарь",
        "isFavorite": false
    },
    {
        "id": "7",
        "title": "Про що я говорю, коли говорю про біг",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img_29518_1.jpg",
        "price": 119,
        "author": "Харуки Мураками",
        "isFavorite": false
    },
    {
        "id": "8",
        "title": "100 експрес-уроків української",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/c/o/cover_image_1.jpg",
        "price": 69,
        "author": "Александр Авраменко",
        "isFavorite": false
    },
    {
        "id": "9",
        "title": "Бэтмен. Человек, который смеется",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img032_5_16.jpg",
        "price": 272,
        "author": "Эд Брубейкер",
        "isFavorite": true
    },
    {
        "id": "10",
        "title": "Купи собі той довбаний букет: та інші способи зібратися докупи від тієї, котрій вдалось",
        "image": "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/c/o/cover_176_699_1.jpg",
        "price": 204,
        "author": "Тара Шустер",
        "isFavorite": true
    }
];

export interface IProductsResponse {
    products: IProduct[],
    serviceError: any
}

export const products$: Observable<IProductsResponse> = of({
    products,
    serviceError: null
}).pipe(delay(3000), catchError(() => {
    return EMPTY;
}));
