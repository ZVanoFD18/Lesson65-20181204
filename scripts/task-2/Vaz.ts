namespace Task2 {
    /**
     * Базовый интерфейс автомобиля.
     */
    export class VazCar implements ICar {
        brand: string;
        model: string;
    };
    
    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ВАЗ"
     * Предполагается, что "car.model"  будет переопределен в потомках, поэтому
     * класс не экспортируемый.
     */
    abstract class VazCreator implements ICarCreator {
        createCar(): ICar {
            let car = new VazCar();
            car.brand = 'ВАЗ';
            car.model = '@TODO: переопредели меня в потомках';
            return car;
        };
    }

    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ВАЗ" и модели "2101".
     */
    export class Vaz2101Creator extends VazCreator implements ICarCreator {
        createCar(): ICar {
            let car = super.createCar();
            car.model = '2101';
            return car;
        };
    };
    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ВАЗ" и модели "2102".
     */
    export class Vaz2102Creator extends VazCreator implements ICarCreator {
        createCar(): ICar {
            let car = super.createCar();
            car.model = '2102';
            return car;
        };
    };    
}