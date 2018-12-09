namespace Task3 {
    /**
     * Базовый интерфейс автомобиля.
     */
    interface ICar {
        brand : string;
        model : string;
        clone () : ICar;
    };

    /**
     * Базовый класс для объектов "Автомобиль".
     */
    class Car implements ICar{
        brand : string;
        model : string;
        // __proto__;
        /**
         * Базовый метод клонирования.
         * Использует родной для JavaScript механизм прототипирования.
         */
        clone () : ICar{
            //let car = {}; // - error TS2339: Property '__proto__' does not exist on type 'Car'.
            let car = Object.create(Car);
            //let car = new Car();
            car.__proto__ = this;
            // car.brand = carOrig.brand;
            // car.model = carOrig.model;
            return car;
        }
    };

    export class CarVaz2101 extends Car implements ICar{
        brand : string = 'ВАЗ';
        model : string = '2101';
    }
    export class CarVaz2102 extends Car implements ICar{
        brand : string = 'ВАЗ';
        model : string = '2102';
    }
    export class CarZaz999 extends Car implements ICar{
        brand : string = 'ЗАЗ';
        model : string = '999';

        /**
         * Тут мы переопределяем базовый метод клонирования и делаем так, как сказано
         * в википедии, а именно копируем свойства поштучно.
         */
        clone () : ICar{
            let car = Object.create(Car);
            car.brand = this.brand;
            car.model = this.model;
            return car;
        }
    }
}