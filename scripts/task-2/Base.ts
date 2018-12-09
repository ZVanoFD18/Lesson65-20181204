namespace Task2 {
    /**
     * Базовый интерфейс автомобиля.
     */
    export interface ICar {
        brand : string;
        model : string;
    };

    /**
     * Базовый интерфейс фабричного метода, создающего автомобиль.
     */
    export interface ICarCreator {
        createCar (): ICar;
    };
}