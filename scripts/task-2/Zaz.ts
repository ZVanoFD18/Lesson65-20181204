namespace Task2 {
    /**
     * Базовый интерфейс автомобиля.
     */
    export class ZazCar implements ICar {
        brand: string;
        model: string;
    };
    
    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ЗАЗ"
     * Предполагается, что "car.model"  будет переопределен в потомках, поэтому
     * класс не экспортируемый.
     */
    abstract class ZazCreator implements ICarCreator {
        createCar(): ICar {
            let car = new ZazCar();
            car.brand = 'ЗАЗ';
            car.model = '@TODO: переопредели меня в потомках';
            return car;
        };
    }

    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ЗАЗ" и модели "968".
     */
    export class Zaz968Creator extends ZazCreator implements ICarCreator {
        createCar(): ICar {
            let car = super.createCar();
            car.model = '968';
            return car;
        };
    };
}