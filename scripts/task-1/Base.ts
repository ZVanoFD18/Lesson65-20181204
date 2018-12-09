namespace Task1 {
    /**
     * Базовый интерфейс для комплектующих рода "Двигатель"
     */
    export interface ICarEngine {
        name: string;

        setName(name: string);

        getName(): string;
    };

    /**
     * Базовый интерфейс для комплектующих рода "Кузов"
     */
    export interface ICarBody {
        name: string;

        setName(name: string);

        getName(): string;
    };

    /**
     * Базовый интерфейс для комплектующих рода "Колесо"
     */
    export interface ICarWheel {
        name: string;

        setName(name: string);

        getName(): string;
    };

    /**
     * Базовый интерфейс для всех автомобильных фабрик.
     */
    export interface ICarFactory {
        name: string;

        createEngine(): ICarEngine;

        createBody(): ICarBody;

        createWheel(): ICarWheel;
    }

    /**
     * Класс "автомобиль", который в конструкторе принимает комплектующие и формирует автомобиль.
     * Этому классу без разницы из каких комплектующих компоновать автомобиль, главное чтобы они
     * соответствовали интерфейсу.
     */
    export class Car {
        engine: ICarEngine;
        body: ICarBody;
        Wheel: ICarWheel;

        constructor(engine: ICarEngine, body: ICarBody, Wheel: ICarWheel) {
            this.engine = engine;
            this.body = body;
            this.Wheel = Wheel;
        }
    }
}